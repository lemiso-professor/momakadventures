<template>
  <div class="space-y-6">
    <!-- Admin Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Pending</p>
        <p class="text-3xl font-bold text-gray-900">0</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Approved</p>
        <p class="text-3xl font-bold text-green-600">0</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Total Inquiries</p>
        <p class="text-3xl font-bold text-orange-600">0</p>
      </div>
    </div>

    <!-- Admin Table -->
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-6 border-b border-gray-50">
        <h3 class="text-xl font-bold text-gray-800">Inquiry Management</h3>
      </div>
      <div class="p-12 text-center text-gray-400">
        No inquiries found in the database.
      </div>
    </div>
  </div>
</template>

<script setup>
// Admin logic for fetching ALL inquiries will go here
</script>