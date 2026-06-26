<script setup lang="ts">
const loading = ref(false);
const success = ref(false);
const error = ref("");

const form = ref({
  name: "",
  attendance: "",
  message: "",
});

const submitRsvp = async () => {
  console.log("submitRsvp called", form.value);

  loading.value = true;
  success.value = false;
  error.value = "";

  try {
    const response = await $fetch("/api/rsvp", {
      method: "POST",
      body: form.value,
    });

    console.log(response);

    success.value = true;

    form.value = {
      name: "",
      attendance: "",
      message: "",
    };
  } catch (err: any) {
    console.error(err);
    error.value =
      err?.data?.message || err?.statusMessage || "Something went wrong.";
  } finally {
    loading.value = false;
  }
};

const unlocked = ref(false);
const brideAnswer = ref("");
const answerError = ref(false);

const unlockInvitation = () => {
  if (brideAnswer.value.trim().toLowerCase() === "angelica") {
    answerError.value = false;

    setTimeout(() => {
      unlocked.value = true;
    }, 500);
  } else {
    answerError.value = true;
  }
};
</script>
<template>
  <div v-if="unlocked" class="animate-fade-in">
    <div class="bg-[url('/images/linen.png')] min-h-screen">
      <div
        class="bg-[url('/images/paper-texture.png')] max-w-2xl mx-auto font-nashville text-black min-h-screen"
      >
        <!-- HERO -->
        <section
          class="relative mx-auto pt-16 pb-20 text-center overflow-hidden"
        >
          <div class="max-w-[309px] lg:max-w-[430px] mx-auto">
            <h1
              class="font-serenity uppercase mb-2.5 text-[56px] leading-none lg:text-[80px]"
            >
              SHE'S TYING
            </h1>

            <p
              class="text-end font-luxes text-[68px] leading-none -mt-4 mr-5 lg:text-[100px]"
            >
              the knot
            </p>
          </div>

          <!-- Ribbon -->
          <div class="my-5 flex justify-center">
            <img src="/images/bow-horizontal.png" class="w-full" alt="" />
          </div>

          <div class="space-y-2 max-w-[309px] ml-auto">
            <div>
              <p class="font-serenity uppercase text-[22px]">JOIN US FOR</p>

              <p class="font-serenity uppercase text-[20px]">
                ANGELICA'S BRIDAL SHOWER
              </p>
            </div>

            <div>
              <p class="uppercase text-[20px] mt-6">
                SATURDAY, 25 JULY AT 6:30 PM
              </p>

              <p class="uppercase text-[18px]">ALPAS BISTRO &amp; CAFE</p>
            </div>

            <div class="pt-6">
              <p class="uppercase text-[18px]">DRESS CODE</p>

              <div class="font-luxes text-[56px] leading-none mt-1">
                Something Black
              </div>
            </div>
          </div>
        </section>

        <!-- PROGRAM -->
        <section class="relative px-2.5 py-16 overflow-hidden">
          <img
            src="/images/bow-side.svg"
            class="absolute rotate-[315deg] -right-[50vw] max-md:opacity-30 md:-right-92.5 top-10"
            alt=""
          />
          <div class="max-w-lg mx-auto">
            <h2 class="font-serenity uppercase text-[44px] mb-10">
              PROGRAM FLOW
            </h2>

            <div
              class="space-y-8 max-w-[403px] ml-5 font-nashville uppercase leading-relaxed text-[18px]"
            >
              <div>
                <p>6:30 PM – REGISTRATION &amp; WELCOME</p>
                <p>ARRIVAL OF GUESTS | PHOTO OPPORTUNITIES | REFRESHMENTS</p>
              </div>

              <div>
                <p>7:00 PM – OPENING PROGRAM</p>
                <p>WELCOME REMARKS &amp; INTRODUCTION OF THE BRIDE</p>
              </div>

              <div>
                <p>7:10 PM – INTERACTIVE BRIDAL SHOWER ACTIVITIES</p>
              </div>

              <div>
                <p>7:45 PM – DINNER &amp; DESSERT BAR</p>
              </div>

              <div>
                <p>8:10 PM – TRIBUTES &amp; WELL WISHES</p>

                <div class="mt-5 space-y-1 pl-2">
                  <p>SPECIAL MESSAGES FROM:</p>

                  <ul class="list-disc pl-5 space-y-1">
                    <li>TITA LYN (MOTHER OF THE GROOM)</li>
                    <li>MAMA GUENE (NINANG)</li>
                    <li>ATE JA</li>
                    <li>ATE JI</li>
                    <li>ATE TRINS</li>
                    <li>CINDY &amp; PAU</li>
                    <li>ALWINA (SISTER OF THE BRIDE)</li>
                    <li>TITA AKIE (MOTHER OF THE BRIDE)</li>
                  </ul>
                </div>
              </div>

              <div>
                <p>8:45 PM – A SPECIAL SURPRISE FOR THE BRIDE</p>
              </div>

              <div>
                <p>8:50 PM – CLOSING REMARKS FROM THE BRIDE</p>
              </div>

              <div>
                <p>9:00 PM – FELLOWSHIP &amp; PHOTO SESSION</p>
              </div>
            </div>
          </div>
        </section>

        <!-- REMINDERS -->
        <section class="relative px-8 pt-20 pb-24 overflow-hidden">
          <img
            src="/images/bow-side.svg"
            class="absolute rotate-[33deg] max-md:opacity-30 -left-[62vw] md:-left-101.5 -top-5"
            alt=""
          />
          <div class="max-w-lg mx-auto">
            <h2 class="font-serenity uppercase text-[42px] text-end mb-12">
              FRIENDLY REMINDERS
            </h2>
            <ul
              class="space-y-2 ml-auto font-nashville uppercase text-[18px] leading-relaxed list-disc pl-8"
            >
              <li>
                DRESS CODE: BLACK ATTIRE ONLY (PLEASE AVOID WHITE OR IVORY).
              </li>
              <li>
                WE HAVE LIMITED ACCESS TO THE VENUE. KINDLY ARRIVE BEFORE THE
                PROGRAM STARTS.
              </li>
              <li>
                PHOTO READY: EXPECT GAMES, CANDID MOMENTS, AND LOTS OF PICTURES!
              </li>
              <li>RSVP: PLEASE CONFIRM BY JULY 3, 2026.</li>
              <li>
                GIFTS: YOUR PRESENCE IS THE BEST GIFT, BUT THOUGHTFUL SURPRISES
                ARE ALWAYS WELCOME.
              </li>
              <li>
                MESSAGE-GIVERS: IF YOU'RE LISTED IN THE PROGRAM, PLEASE PREPARE
                A 2–3 MINUTE MESSAGE FOR THE BRIDE.
              </li>
              <li>
                INVITATION ONLY: THIS INVITATION IS NON-TRANSFERABLE TO HELP
                KEEP THE CELEBRATION INTIMATE.
              </li>
            </ul>
          </div>
        </section>

        <!-- RSVP -->
        <section class="px-8 pb-24">
          <div class="max-w-lg mx-auto">
            <h2 class="font-serenity uppercase text-[42px] mb-10 text-center">
              RSVP
            </h2>

            <form @submit.prevent="submitRsvp" class="space-y-5">
              <div>
                <label class="block uppercase text-sm mb-2">Full Name</label>

                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full border border-black bg-transparent px-4 py-3 uppercase focus:outline-none"
                />
              </div>

              <div>
                <label class="block uppercase text-sm mb-2">
                  Will you attend?
                </label>

                <select
                  v-model="form.attendance"
                  required
                  class="w-full border border-black bg-transparent px-4 py-3 uppercase focus:outline-none"
                >
                  <option disabled value="">Select</option>
                  <option value="Yes">Yes, I'll be there</option>
                  <option value="No">Sorry, I can't make it</option>
                </select>
              </div>

              <div>
                <label class="block uppercase text-sm mb-2">
                  Message (Optional)
                </label>

                <textarea
                  v-model="form.message"
                  rows="4"
                  class="w-full border border-black bg-transparent px-4 py-3 resize-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-black text-white py-3 uppercase tracking-widest hover:opacity-90 disabled:opacity-50"
              >
                {{ loading ? "Submitting..." : "Submit RSVP" }}
              </button>

              <p v-if="success" class="text-center uppercase text-green-700">
                Thank you! Your RSVP has been received.
              </p>

              <p v-if="error" class="text-center uppercase text-red-700">
                {{ error }}
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
  <div
    v-if="!unlocked"
    class="fixed inset-0 z-50 flex items-center justify-center bg-[url('/images/linen.png')] p-6"
  >
    <div
      class="bg-[url('/images/paper-texture.png')] shadow-2xl border border-black/10 rounded-sm w-full max-w-md p-10 text-center"
    >
      <img src="/images/bow-horizontal.png" class="w-36 mx-auto mb-8" />

      <p class="font-luxes text-5xl mb-2">Welcome</p>

      <p class="uppercase tracking-[0.25em] text-sm mb-8">
        Before Opening Your Invitation
      </p>

      <p class="uppercase text-sm mb-3">What is the bride's first name?</p>

      <input
        v-model="brideAnswer"
        @keyup.enter="unlockInvitation"
        type="text"
        placeholder="Type your answer..."
        class="w-full border border-black bg-transparent px-4 py-3 text-center uppercase outline-none"
      />

      <p v-if="answerError" class="text-red-700 mt-4 uppercase text-xs">
        Oops! Try again ♥
      </p>

      <button
        @click="unlockInvitation"
        class="mt-8 bg-black text-white px-8 py-3 uppercase tracking-[0.3em] hover:opacity-90 transition"
      >
        Open Invitation
      </button>
    </div>
  </div>
</template>
