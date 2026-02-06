<template>
  <div class="pt-24">
    <!-- Decider Logic -->
    <div v-if="authStore.profile">
      
      <!-- If role is admin, show AdminView -->
      <AdminView v-if="authStore.profile.role === 'admin'" />
      
      <!-- Otherwise, show ClientView -->
      <ClientView v-else />
      
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import AdminView from '@/components/auth/dashboard/AdminView.vue'
import ClientView from '@/components/auth/dashboard/ClientView.vue'

const authStore = useAuthStore()
</script>