import { createClient } from '@supabase/supabase-js'

// 1. Get your Project URL from Settings > Data API
const supabaseUrl = 'https://vtwknbvwiurttfwvavpu.supabase.co' 

// 2. Paste the "Publishable key" you just found here
const supabaseAnonKey = 'sb_publishable_hpkzPX2AcVvyQPlklEgiKg_2ZgEaOxr'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)