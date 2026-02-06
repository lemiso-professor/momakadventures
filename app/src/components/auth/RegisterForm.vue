<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div class="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      
      <!-- Left Side: Image (Matches your design) -->
      <div class="md:w-1/2 relative h-64 md:h-auto">
        <img 
          src="https://res.cloudinary.com/drbhyey5b/image/upload/v1770385730/Screenshot_2026-02-06_163558_ayt4cx.png" 
          class="absolute inset-0 w-full h-full object-cover"
          alt="Elephant"
        />
        <div class="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 text-white">
          <h2 class="text-3xl font-bold">Discover the Heart of Africa</h2>
          <p class="mt-2 text-sm opacity-90">Experience the raw beauty of Kenya and East Africa with guides who know the land by heart.</p>
        </div>
      </div>

      <!-- Right Side: Form -->
      <div class="md:w-1/2 p-8 md:p-12">
        <h2 class="text-3xl font-bold text-gray-900">Start Your Journey</h2>
        <p class="text-gray-500 mt-2">Create an account to book adventures and get exclusive travel deals.</p>

        <form @submit.prevent="handleSignup" class="mt-8 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <input v-model="fullName" type="text" placeholder="John Doe" required
              class="w-full px-4 py-3 mt-1 border rounded-xl focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email Address</label>
            <input v-model="email" type="email" placeholder="john@example.com" required
              class="w-full px-4 py-3 mt-1 border rounded-xl focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="password" type="password" placeholder="Min. 8 characters" required
              class="w-full px-4 py-3 mt-1 border rounded-xl focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" />
          </div>

          <button type="submit" :disabled="loading"
            class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-lg transform transition active:scale-95 disabled:opacity-50">
            {{ loading ? 'Creating Account...' : 'Create Account' }}
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600">
          Already have an account? 
          <router-link to="/signin" class="text-orange-600 font-bold hover:underline">Log In</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const fullName = ref('')
const loading = ref(false)

const authStore = useAuthStore()
const router = useRouter()

const handleSignup = async () => {
  loading.value = true
  try {
    await authStore.signUp(email.value, password.value, fullName.value)
    alert('Signup successful! Please check your email to confirm.')
    router.push('/signin')
  } catch (error) {
    alert('Error: ' + error.message)
  } finally {
    loading.value = false
  }
}
</script>