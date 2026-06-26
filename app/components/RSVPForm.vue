<script setup>
const form = reactive({
  name: "",
  attending: "",
  guests: 1,
  message: "",
});

const submit = () => {
  console.log(form);

  alert("Thank you for your RSVP!");
};
</script>

<template>
  <div class="mt-20">
    <h2 class="text-center font-serif text-4xl uppercase tracking-[0.25em]">
      RSVP
    </h2>

    <p class="text-center text-gray-500 mt-2">
      Kindly respond before July 3, 2026
    </p>

    <form class="mt-10 space-y-6" @submit.prevent="submit">
      <div>
        <label>Name</label>

        <input
          v-model="form.name"
          type="text"
          class="mt-2 w-full border-b border-black bg-transparent py-3 outline-none"
        />
      </div>

      <div>
        <label>Will you attend?</label>

        <select
          v-model="form.attending"
          class="mt-2 w-full border-b border-black bg-transparent py-3 outline-none"
        >
          <option disabled value="">Select</option>

          <option>Joyfully Accepts</option>

          <option>Regretfully Declines</option>
        </select>
      </div>

      <div>
        <label>Number of Guests</label>

        <input
          v-model="form.guests"
          type="number"
          min="1"
          class="mt-2 w-full border-b border-black bg-transparent py-3 outline-none"
        />
      </div>

      <div>
        <label>Message for the Bride</label>

        <textarea
          rows="5"
          v-model="form.message"
          class="mt-2 w-full border border-black p-4 bg-transparent outline-none"
        />
      </div>

      <button
        class="w-full border border-black py-4 uppercase tracking-[0.3em] transition hover:bg-black hover:text-white"
      >
        Send RSVP
      </button>
    </form>
  </div>
</template>
