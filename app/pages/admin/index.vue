<script setup lang="ts">
const {
  data: rsvps,
  pending,
  error,
  refresh,
} = await useFetch("/api/admin/rsvp");
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-7xl p-8">
      <!-- Header -->
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">RSVP Dashboard</h1>
          <p class="mt-1 text-gray-500">Manage wedding responses</p>
        </div>

        <button
          @click="refresh()"
          class="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Refresh
        </button>
      </div>

      <!-- Stats -->
      <div v-if="rsvps" class="mb-8 grid gap-5 md:grid-cols-3">
        <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <p class="text-sm text-gray-500">Total RSVPs</p>
          <h2 class="mt-2 text-3xl font-bold">
            {{ rsvps.length }}
          </h2>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <p class="text-sm text-gray-500">Attending</p>
          <h2 class="mt-2 text-3xl font-bold text-green-600">
            {{ rsvps.filter((r) => r.attendance === "Yes").length }}
          </h2>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <p class="text-sm text-gray-500">Not Attending</p>
          <h2 class="mt-2 text-3xl font-bold text-red-500">
            {{ rsvps.filter((r) => r.attendance === "No").length }}
          </h2>
        </div>
      </div>

      <!-- Error -->
      <div
        v-if="error?.statusCode === 401"
        class="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700"
      >
        Incorrect password.
      </div>

      <div
        v-else-if="error"
        class="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700"
      >
        {{ error.statusMessage }}
      </div>

      <!-- Loading -->
      <div
        v-if="pending"
        class="rounded-2xl bg-white p-16 text-center shadow-sm ring-1 ring-gray-200"
      >
        <div
          class="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"
        />
        <p class="mt-4 text-gray-500">Loading RSVPs...</p>
      </div>

      <!-- Table -->
      <div
        v-else
        class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
      >
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Guest
              </th>

              <th
                class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Status
              </th>

              <th
                class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Message
              </th>

              <th
                class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Submitted
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            <tr
              v-for="guest in rsvps"
              :key="guest.id"
              class="transition hover:bg-gray-50"
            >
              <td class="px-6 py-5 font-medium text-gray-900">
                {{ guest.name }}
              </td>

              <td class="px-6 py-5">
                <span
                  :class="[
                    'inline-flex rounded-full px-3 py-1 text-xs font-semibold',
                    guest.attendance === 'Yes'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700',
                  ]"
                >
                  {{ guest.attendance }}
                </span>
              </td>

              <td class="max-w-sm px-6 py-5 text-gray-600">
                {{ guest.message || "—" }}
              </td>

              <td class="px-6 py-5 text-sm text-gray-500">
                {{ new Date(guest.created_at).toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="!rsvps?.length" class="p-12 text-center text-gray-500">
          No RSVPs yet.
        </div>
      </div>
    </div>
  </div>
</template>
