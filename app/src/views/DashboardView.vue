<template>
  <div class="p-8">
    <div v-if="authStore.loading">Loading...</div>
    
    <div v-else-if="authStore.profile">
      <!-- Admin sees AdminView, Client sees ClientView -->
      <AdminView v-if="authStore.profile.role === 'admin'" />
      <ClientView v-else />
    </div>

    <div v-else>
      Please <router-link to="/signin" class="text-orange-500">Log in</router-link> to view your dashboard.
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import AdminView from '@/components/auth/dashboard/AdminView.vue'
import ClientView from '@/components/auth/dashboard/ClientView.vue'

const authStore = useAuthStore()
</script>