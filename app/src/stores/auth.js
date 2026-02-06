import { defineStore } from 'pinia'
import { supabase } from '@/composables/useSupabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    profile: null,
    loading: false
  }),
  actions: {
    // 1. Fetch user profile/role
    async fetchProfile(userId) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
      
      if (data) this.profile = data
    },

    // 2. Register a new user
    async signUp(email, password, fullName) {
      this.loading = true
      const { data, error } = await supabase.auth.signUp({ email, password })
      
      if (error) throw error

      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ id: data.user.id, full_name: fullName, role: 'client' }])
        
        if (profileError) throw profileError
      }
      this.loading = false
    },

    // 3. Login
    async signIn(email, password) {
      this.loading = true
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      
      this.user = data.user
      await this.fetchProfile(data.user.id)
      this.loading = false
    },

    // 4. Logout
    async logout() {
      await supabase.auth.signOut()
      this.user = null
      this.profile = null
    },

    // 5. Create a detailed Inquiry (Matches your new form)
    async createInquiry(details) {
      if (!this.user) throw new Error("Please log in to submit an inquiry.")
      
      const { error } = await supabase
        .from('inquiries')
        .insert([{ 
          user_id: this.user.id, 
          trip_title: details.trip_title,
          days: details.days,
          adults: details.adults,
          children: details.children,
          message: details.message,
          status: 'pending' 
        }])
        
      if (error) throw error
    },

    // 6. Fetch inquiries for a specific Client
    async fetchUserInquiries() {
      if (!this.user) return []
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .eq('user_id', this.user.id)
        .order('created_at', { ascending: false })
        
      if (error) throw error
      return data
    },

    // 7. Fetch ALL inquiries (For Admins only)
    async fetchAllInquiries() {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*, profiles(full_name)')
        .order('created_at', { ascending: false })
        
      if (error) throw error
      return data
    }
  } 
})