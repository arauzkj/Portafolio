import type { APIRoute } from "astro";
import { createPost, getPublishedPosts, parsePostInput } from "@lib/posts";

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  return Response.json(posts);
};

export const POST: APIRoute = async ({ locals, request }) => {
  if (!locals.user)
    return Response.json({ error: "No autorizado." }, { status: 401 });

  try {
    const post = await createPost(
      parsePostInput(await request.json()),
      Number(locals.user.id),
    );
    return Response.json(post, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "No fue posible crear la publicación.";
    const status = message.includes("UNIQUE") ? 409 : 400;
    return Response.json(
      { error: status === 409 ? "El slug ya está en uso." : message },
      { status },
    );
  }
};
