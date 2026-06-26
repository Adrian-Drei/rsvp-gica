export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { username, password } = await readBody(event);

  if (username !== config.adminUsername || password !== config.adminPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: "Incorrect username or password.",
    });
  }

  return {
    success: true,
  };
});
