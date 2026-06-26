export default defineEventHandler((event) => {
  if (!event.path.startsWith("/api/admin")) return;

  const auth = getHeader(event, "authorization");

  if (!auth) {
    setResponseHeader(event, "WWW-Authenticate", 'Basic realm="Admin"');
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  const [, encoded] = auth.split(" ");
  const [user, pass] = Buffer.from(encoded, "base64").toString().split(":");

  if (
    user !== process.env.ADMIN_USERNAME ||
    pass !== process.env.ADMIN_PASSWORD
  ) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }
});
