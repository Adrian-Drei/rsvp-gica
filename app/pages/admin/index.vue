<script setup lang="ts">
const { data: rsvps, pending, refresh } = await useFetch("/api/admin/rsvp");
</script>

<template>
  <div class="max-w-6xl mx-auto p-10">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold">RSVP Dashboard</h1>

      <button @click="refresh()" class="bg-black text-white px-4 py-2 rounded">
        Refresh
      </button>
    </div>

    <div v-if="pending">Loading...</div>

    <table v-else class="w-full border-collapse border">
      <thead>
        <tr class="bg-gray-100">
          <th class="border p-3 text-left">Name</th>
          <th class="border p-3 text-left">Attendance</th>
          <th class="border p-3 text-left">Message</th>
          <th class="border p-3 text-left">Submitted</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="guest in rsvps" :key="guest.id">
          <td class="border p-3">
            {{ guest.name }}
          </td>

          <td class="border p-3">
            {{ guest.attendance }}
          </td>

          <td class="border p-3">
            {{ guest.message || "-" }}
          </td>

          <td class="border p-3">
            {{ new Date(guest.created_at).toLocaleString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
