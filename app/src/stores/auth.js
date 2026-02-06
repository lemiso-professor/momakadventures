import { defineStore } from 'pinia'
import { supabase } from '@/composables/useSupabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    profile: null,
    loading: false
  }),
  actions: {
    // 1. Fetch the user's role from the 'profiles' table
    async fetchProfile(userId) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
      
      if (data) this.profile = data
    },

    // 2. Sign Up logic
    async signUp(email, password, fullName) {
      this.loading = true
      // Create the Auth user
      const { data, error } = await supabase.auth.signUp({ email, password })
      
      if (error) throw error

      // Create the Profile entry for that user
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ id: data.user.id, full_name: fullName, role: 'client' }])
        
        if (profileError) throw profileError
      }
      this.loading = false
    },

    // 3. Sign In logic
    async signIn(email, password) {
      this.loading = true
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      
      this.user = data.user
      await this.fetchProfile(data.user.id)
      this.loading = false
    },

    async logout() {
      await supabase.auth.signOut()
      this.user = null
      this.profile = null
    }
  }
})