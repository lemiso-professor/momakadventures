<template>
  <div class="flex min-h-screen bg-gray-50/50">
    <!-- Main Content Area -->
    <main class="flex-1 p-4 md:p-8">
      <header class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Traveler Dashboard</h1>
      </header>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Inquiries</p>
          <p class="text-3xl font-black text-gray-900 mt-2">{{ inquiries.length }}</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Trips</p>
          <p class="text-3xl font-black text-orange-600 mt-2">
            {{ inquiries.filter(i => i.status === 'approved').length }}
          </p>
        </div>
      </div>

      <!-- Recent Inquiries Table -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 class="font-bold text-gray-800">My Recent Inquiries</h2>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-gray-50 text-[10px] font-black uppercase text-gray-400 tracking-widest">
              <tr>
                <th class="px-6 py-4">Trip Name</th>
                <th class="px-6 py-4">Inquiry Date</th>
                <th class="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="item in inquiries" :key="item.id" class="hover:bg-gray-50/50 transition-colors">
                <td class="px-6 py-4 font-bold text-gray-900 text-sm">{{ item.trip_title }}</td>
                <td class="px-6 py-4 text-xs text-gray-500">{{ new Date(item.created_at).toLocaleDateString() }}</td>
                <td class="px-6 py-4">
                  <span :class="statusClass(item.status)" class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                    {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="inquiries.length === 0" class="p-12 text-center text-gray-400 text-sm italic">
            No inquiries found yet. Start your journey by booking a safari!
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const inquiries = ref([])

onMounted(async () => {
  inquiries.value = await authStore.fetchUserInquiries()
})

const statusClass = (status) => {
  if (status === 'approved') return 'bg-green-100 text-green-700'
  if (status === 'pending') return 'bg-orange-100 text-orange-700'
  return 'bg-gray-100 text-gray-600'
}
</script>