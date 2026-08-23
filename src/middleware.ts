import { defineMiddleware } from "astro:middleware";
import { defaultLang, languages } from "@i18n/ui";
import { auth } from "@lib/auth";

const supportedLangs = Object.keys(languages);

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname === "/") {
    const acceptLang = context.request.headers.get("accept-language") ?? "";
    const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase();
    const lang = supportedLangs.includes(preferred) ? preferred : defaultLang;
    return context.redirect(`/${lang}/`, 301);
  }

  if (context.isPrerendered) {
    return next();
  }

  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  });
  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }
  if (context.url.pathname === "/dashboard" && !isAuthed) {
    return context.redirect("/");
  }

  return next();
});
