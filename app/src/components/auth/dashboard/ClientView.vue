<template>
  <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
    <h3 class="text-xl font-bold text-gray-800 mb-6">My Recent Inquiries</h3>
    
    <!-- Placeholder for when there are no inquiries -->
    <div class="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl">
      <div class="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <p class="text-gray-400">You haven't made any inquiries yet.</p>
      <router-link to="/safaris" class="text-orange-600 font-bold text-sm mt-2 block hover:underline">
        Browse our Safaris
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Later we will add logic here to fetch data from Supabase
</script>