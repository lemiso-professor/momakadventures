<template>
  <div class="p-4 md:p-8 bg-gray-50 min-h-screen">
    <header class="mb-8 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">Inquiry Management</h1>
      <div class="bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg">Admin Mode</div>
    </header>

    <!-- Admin Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Requests</p>
        <p class="text-3xl font-black text-gray-900 mt-1">{{ inquiries.length }}</p>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <p class="text-[10px] font-black text-orange-500 uppercase tracking-widest">Pending Quotes</p>
        <p class="text-3xl font-black text-gray-900 mt-1">
          {{ inquiries.filter(i => i.status === 'pending').length }}
        </p>
      </div>
    </div>

    <!-- Management Table -->
    <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-gray-50 text-[10px] font-black uppercase text-gray-500 tracking-widest">
          <tr>
            <th class="px-6 py-5">Client Name</th>
            <th class="px-6 py-5">Trip Package</th>
            <th class="px-6 py-5">Status</th>
            <th class="px-6 py-5">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="item in inquiries" :key="item.id" class="hover:bg-gray-50/30 transition-all">
            <td class="px-6 py-4">
              <p class="font-bold text-gray-900 text-sm">{{ item.profiles?.full_name || 'Guest' }}</p>
              <p class="text-[10px] text-gray-400">{{ new Date(item.created_at).toLocaleDateString() }}</p>
            </td>
            <td class="px-6 py-4 text-sm font-medium text-gray-700">{{ item.trip_title }}</td>
            <td class="px-6 py-4">
              <span :class="statusClass(item.status)" class="px-3 py-1 rounded-lg text-[9px] font-black uppercase">
                {{ item.status }}
              </span>
            </td>
            <td class="px-6 py-4">
              <button 
                v-if="item.status === 'pending'"
                @click="updateStatus(item.id, 'approved')"
                class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all shadow-md shadow-orange-600/20"
              >
                Send Quote
              </button>
              <span v-else class="text-[10px] font-bold text-gray-300 uppercase italic">Completed</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { supabase } from '@/composables/useSupabase'

const authStore = useAuthStore()
const inquiries = ref([])

const loadData = async () => {
  inquiries.value = await authStore.fetchAllInquiries()
}

const updateStatus = async (id, status) => {
  const { error } = await supabase.from('inquiries').update({ status }).eq('id', id)
  if (!error) loadData()
}

const statusClass = (status) => {
  if (status === 'approved') return 'bg-green-100 text-green-700'
  return 'bg-orange-100 text-orange-600'
}

onMounted(loadData)
</script>