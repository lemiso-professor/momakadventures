<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
    <!-- Login Card -->
    <div class="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10">
      
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p class="text-gray-500 mt-2 text-sm px-4">
          Log in to your Momak Adventures account to start your journey.
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 ml-1">Email or Username</label>
          <input 
            v-model="email" 
            type="email" 
            placeholder="Enter your email" 
            required
            class="w-full px-4 py-3 mt-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300" 
          />
        </div>

        <div>
          <div class="flex justify-between items-center ml-1">
            <label class="block text-sm font-semibold text-gray-700">Password</label>
            <a href="#" class="text-xs text-orange-600 font-semibold hover:underline">Forgot Password?</a>
          </div>
          <div class="relative mt-1">
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Enter your password" 
              required
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300" 
            />
            <!-- Password Toggle Icon -->
            <button 
              type="button" 
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <span v-if="showPassword">👁️</span>
              <span v-else>👁️‍🗨️</span>
            </button>
          </div>
        </div>

        <!-- Remember Me -->
        <div class="flex items-center ml-1">
          <input type="checkbox" id="remember" class="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500">
          <label for="remember" class="ml-2 text-sm text-gray-600">Remember me</label>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          :disabled="loading"
          class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] transform transition active:scale-95 disabled:opacity-50 mt-2"
        >
          <span v-if="loading">Logging In...</span>
          <span v-else>Log In</span>
        </button>
      </form>

      <!-- Divider -->
      <div class="relative my-8">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-100"></div>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-white px-3 text-gray-400 tracking-widest font-medium">Or continue with</span>
        </div>
      </div>

      <!-- Social Logins -->
      <div class="grid grid-cols-2 gap-4">
        <button class="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5" alt="Google">
          <span class="text-sm font-semibold text-gray-700">Google</span>
        </button>
        <button class="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" class="w-5 h-5" alt="Facebook">
          <span class="text-sm font-semibold text-gray-700">Facebook</span>
        </button>
      </div>

      <!-- Footer -->
      <p class="mt-8 text-center text-sm text-gray-500">
        Don't have an account? 
        <router-link to="/register" class="text-orange-600 font-bold hover:underline">Create an account</router-link>
      </p>
    </div>

    <!-- Copyright Footer -->
    <p class="mt-12 text-[10px] text-gray-400 text-center leading-relaxed">
      © 2024 Momak Adventures. Exploring the heart of East Africa. All rights reserved.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  loading.value = true
  try {
    // Calls the signIn action in src/stores/auth.js
    await authStore.signIn(email.value, password.value)
    
    // Redirect based on role (Admin vs Client)
    router.push('/dashboard')
  } catch (error) {
    alert('Login Failed: ' + error.message)
  } finally {
    loading.value = false
  }
}
</script>