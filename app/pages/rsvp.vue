<template>
  <div
    class="min-h-screen bg-[#FAF9F7] bg-[url('/paper-texture.jpg')] bg-cover py-16 px-6"
  >
    <div class="mx-auto max-w-2xl">
      <!-- Header -->
      <div class="text-center">
        <h1 class="font-serif text-6xl tracking-[0.3em] uppercase font-light">
          SHE'S TYING
        </h1>

        <h2 class="font-script text-6xl -mt-5">the knot</h2>
      </div>

      <RibbonDivider />

      <!-- Invitation -->
      <div class="mt-14 text-center">
        <p class="uppercase tracking-[0.2em] text-lg">Join us for</p>

        <h2 class="mt-3 font-serif text-4xl uppercase tracking-wide">
          Angelica's Bridal Shower
        </h2>

        <div class="mt-8 space-y-2 text-lg">
          <p>Saturday, 25 July • 6:30 PM</p>

          <p>Alpas Bistro & Cafe</p>
        </div>

        <div class="mt-10">
          <p class="uppercase tracking-widest">Dress Code</p>

          <p class="font-script text-5xl mt-2">Something Black</p>
        </div>
      </div>

      <RSVPForm />

      <!-- Reminder -->

      <div class="mt-16 border-t pt-10">
        <h3 class="font-serif text-3xl uppercase tracking-[0.2em] text-center">
          Friendly Reminders
        </h3>

        <ul class="mt-8 space-y-4 text-gray-700 leading-8 list-disc pl-6">
          <li>Black attire only. Please avoid white or ivory.</li>

          <li>Please arrive before the program starts.</li>

          <li>Expect games, photos and lots of fun.</li>

          <li>Kindly RSVP before July 3, 2026.</li>

          <li>Your presence is the best gift.</li>

          <li>If you're part of the program, prepare a 2–3 minute message.</li>

          <li>This invitation is non-transferable.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
