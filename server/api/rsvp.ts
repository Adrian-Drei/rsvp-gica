import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const supabase = createClient(config.supabaseUrl, config.supabaseServiceKey);

  const { data, error } = await supabase
    .from("rsvp")
    .insert({
      name: body.name,
      attendance: body.attendance,
      message: body.message,
    })
    .select();

  console.log("Body:", body);
  console.log("Data:", data);
  console.log("Error:", error);

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  return {
    success: true,
    data,
  };
});
