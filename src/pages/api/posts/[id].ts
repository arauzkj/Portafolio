import type { APIRoute } from "astro";
import {
  deletePost,
  getPostByAuthor,
  parsePostInput,
  updatePost,
} from "@lib/posts";

const idFrom = (value: string | undefined) => Number(value);

export const GET: APIRoute = async ({ locals, params }) => {
  if (!locals.user)
    return Response.json({ error: "No autorizado." }, { status: 401 });
  const post = await getPostByAuthor(idFrom(params.id), Number(locals.user.id));
  return post
    ? Response.json(post)
    : Response.json({ error: "No encontrado." }, { status: 404 });
};

export const PUT: APIRoute = async ({ locals, params, request }) => {
  if (!locals.user)
    return Response.json({ error: "No autorizado." }, { status: 401 });

  try {
    const post = await updatePost(
      idFrom(params.id),
      parsePostInput(await request.json()),
      Number(locals.user.id),
    );
    return post
      ? Response.json(post)
      : Response.json({ error: "No encontrado." }, { status: 404 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "No fue posible actualizar la publicación.";
    const status = message.includes("UNIQUE") ? 409 : 400;
    return Response.json(
      { error: status === 409 ? "El slug ya está en uso." : message },
      { status },
    );
  }
};

export const DELETE: APIRoute = async ({ locals, params }) => {
  if (!locals.user)
    return Response.json({ error: "No autorizado." }, { status: 401 });
  const deleted = await deletePost(idFrom(params.id), Number(locals.user.id));
  return deleted
    ? new Response(null, { status: 204 })
    : Response.json({ error: "No encontrado." }, { status: 404 });
};
