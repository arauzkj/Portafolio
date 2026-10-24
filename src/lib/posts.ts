import { and, desc, eq, type SQL } from 'drizzle-orm';
import { db } from '@db/index';
import { postTags, posts, tags } from '@db/schema';

export type BlogPost = {
  id: number;
  slug: string;
  locale: 'es' | 'en';
  title: string;
  description: string;
  content: string;
  coverImage: string | null;
  tags: string[];
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

type PostInput = {
  title: string;
  description: string;
  content: string;
  slug: string;
  coverImage?: string | null;
  tags: string[];
  locale: 'es' | 'en';
  published: boolean;
};

const normalizeSlug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export function parsePostInput(value: unknown): PostInput {
  if (!value || typeof value !== 'object') throw new Error('Datos inválidos.');

  const input = value as Record<string, unknown>;
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  const description = typeof input.description === 'string' ? input.description.trim() : '';
  const content = typeof input.content === 'string' ? input.content.trim() : '';
  const locale = input.locale === 'en' ? 'en' : input.locale === 'es' ? 'es' : null;
  const slug = typeof input.slug === 'string' ? normalizeSlug(input.slug) : normalizeSlug(title);
  const coverImage = typeof input.coverImage === 'string' && input.coverImage.trim()
    ? input.coverImage.trim()
    : null;
  const tagsInput = Array.isArray(input.tags) ? input.tags : [];
  const postTags = [...new Set(tagsInput
    .filter((tag): tag is string => typeof tag === 'string')
    .map((tag) => tag.trim())
    .filter(Boolean))];

  if (!title || !description || !content || !slug || !locale || typeof input.published !== 'boolean') {
    throw new Error('Completa título, descripción, contenido, idioma y estado de publicación.');
  }

  return { title, description, content, slug, coverImage, tags: postTags, locale, published: input.published };
}

async function attachTags(post: typeof posts.$inferSelect): Promise<BlogPost> {
  const rows = await db
    .select({ name: tags.name })
    .from(postTags)
    .innerJoin(tags, eq(postTags.tagId, tags.id))
    .where(eq(postTags.postId, post.id));

  return { ...post, published: post.published ?? false, tags: rows.map((tag) => tag.name) };
}

async function getPost(where: SQL | undefined): Promise<BlogPost | null> {
  const [post] = await db.select().from(posts).where(where).limit(1);
  return post ? attachTags(post) : null;
}

export async function getPublishedPosts(locale?: 'es' | 'en'): Promise<BlogPost[]> {
  const query = db.select().from(posts).where(eq(posts.published, true));
  const rows = locale
    ? await db.select().from(posts).where(and(eq(posts.published, true), eq(posts.locale, locale))).orderBy(desc(posts.publishedAt))
    : await query.orderBy(desc(posts.publishedAt));
  return Promise.all(rows.map(attachTags));
}

export async function getPublishedPost(slug: string, locale: 'es' | 'en') {
  return getPost(and(eq(posts.slug, slug), eq(posts.locale, locale), eq(posts.published, true)));
}

export async function getPostsByAuthor(authorId: number) {
  const rows = await db.select().from(posts).where(eq(posts.authorId, authorId)).orderBy(desc(posts.updatedAt));
  return Promise.all(rows.map(attachTags));
}

export async function getPostByAuthor(id: number, authorId: number) {
  return getPost(and(eq(posts.id, id), eq(posts.authorId, authorId)));
}

async function replaceTags(postId: number, names: string[]) {
  await db.delete(postTags).where(eq(postTags.postId, postId));

  for (const name of names) {
    const slug = normalizeSlug(name);
    if (!slug) continue;
    await db.insert(tags).values({ name, slug }).onConflictDoNothing();
    const [tag] = await db.select({ id: tags.id }).from(tags).where(eq(tags.slug, slug)).limit(1);
    if (tag) await db.insert(postTags).values({ postId, tagId: tag.id });
  }
}

export async function createPost(input: PostInput, authorId: number) {
  const now = new Date();
  const { tags: tagNames, ...values } = input;
  const [post] = await db.insert(posts).values({
    ...values,
    authorId,
    translationGroupId: crypto.randomUUID(),
    publishedAt: input.published ? now : null,
    createdAt: now,
    updatedAt: now,
  }).returning();
  await replaceTags(post.id, tagNames);
  return getPostByAuthor(post.id, authorId);
}

export async function updatePost(id: number, input: PostInput, authorId: number) {
  const existing = await getPostByAuthor(id, authorId);
  if (!existing) return null;

  const now = new Date();
  const { tags: tagNames, ...values } = input;
  await db.update(posts).set({
    ...values,
    publishedAt: input.published ? existing.publishedAt ?? now : null,
    updatedAt: now,
  }).where(eq(posts.id, id));
  await replaceTags(id, tagNames);
  return getPostByAuthor(id, authorId);
}

export async function deletePost(id: number, authorId: number) {
  const result = await db.delete(posts).where(and(eq(posts.id, id), eq(posts.authorId, authorId))).returning({ id: posts.id });
  return result.length > 0;
}
