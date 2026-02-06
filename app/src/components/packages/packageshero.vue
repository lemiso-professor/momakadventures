<template>
  <div class="min-h-screen bg-[#F9F9F9] py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      
      <!-- HEADER SECTION -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <span class="text-[#F17216] font-black text-xs tracking-[0.3em] uppercase">Premium Collections</span>
          <h1 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight mt-2 leading-none">
            Curated Itineraries
          </h1>
          <p class="text-gray-500 max-w-2xl leading-relaxed font-medium">
            Explore our signature East African experiences. Register to receive specific pricing and 
            exclusive seasonal offers in your <span class="text-[#F17216] font-bold">Client Dashboard</span>.
          </p>
        </div>
      </div>

      <!-- TABS & VIEW SETTINGS -->
      <div class="flex items-center justify-between border-b border-gray-100 mb-10">
        <div class="flex gap-10 overflow-x-auto no-scrollbar">
          <button 
            v-for="tab in tabs" 
            :key="tab"
            @click="activeTab = tab"
            class="pb-5 text-[11px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap"
            :class="activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'"
          >
            {{ tab }}
            <div v-if="activeTab === tab" class="absolute bottom-0 left-0 w-full h-[2px] bg-[#F17216]"></div>
          </button>
        </div>
      </div>

      <!-- PACKAGES GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="pkg in filteredPackages" 
          :key="pkg.id" 
          class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
        >
          <!-- Image Section -->
          <div class="relative h-64 overflow-hidden">
            <img :src="pkg.image" :alt="pkg.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span class="bg-white/90 backdrop-blur-md text-[#F17216] px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest uppercase shadow-sm">
                {{ pkg.displayCategory }}
              </span>
            </div>
            
            <button class="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white hover:bg-white hover:text-red-500 transition-all shadow-xl">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>
          </div>

          <!-- Content Section -->
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                <svg class="w-3.5 h-3.5 text-[#F17216] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span class="text-xs font-black text-[#F17216]">{{ pkg.rating }}</span>
              </div>
              <span class="text-[9px] font-black text-gray-300 uppercase tracking-widest">Inquiry Ref #{{ pkg.id + 1000 }}</span>
            </div>

            <h3 class="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#F17216] transition-colors">
              {{ pkg.title }}
            </h3>
            
            <p class="text-gray-400 text-sm font-medium leading-relaxed mb-10 flex-grow">
              {{ pkg.description }}
            </p>

            <!-- Bottom Row: Inquiry Mode -->
            <div class="flex items-center justify-between border-t border-gray-50 pt-6">
              <div class="flex flex-col">
                <span class="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Pricing</span>
                <span class="text-xs font-black text-[#F17216] uppercase tracking-tighter">Available on Request</span>
              </div>
              
              <!-- DYNAMIC LINK TO BOOKING PAGE -->
              <router-link 
                :to="{ 
                  path: '/booking', 
                  query: { name: pkg.title, image: pkg.image } 
                }"
                class="bg-gray-900 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-gray-200 hover:bg-[#F17216] transition-all transform active:scale-95 flex items-center gap-2"
              >
                Inquire <ArrowRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

// --- 1. DATA (Removed Duration and Prices) ---
const activeTab = ref('All Trips')
const tabs = ['All Trips', 'Safari Adventures', 'Beach Holidays', 'Cultural Experiences']

const packages = [
  {
    id: 1,
    title: 'Masai Mara & Amboseli Grand Safari',
    category: 'Safari Adventures',
    displayCategory: 'SAFARI',
    rating: 4.9,
    description: 'Witness the Great Migration and view Mount Kilimanjaro from the plains of Amboseli.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Diani Beach Luxury Escape',
    category: 'Beach Holidays',
    displayCategory: 'BEACH',
    rating: 4.7,
    description: 'Relax on the award-winning white sands of Diani Beach with private villa stays.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Heart of East Africa Heritage',
    category: 'Cultural Experiences',
    displayCategory: 'CULTURE',
    rating: 5.0,
    description: 'A deep dive into the diverse cultures of East Africa, from Maasai villages to Swahili islands.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Rwanda Gorilla Trekking',
    category: 'Safari Adventures',
    displayCategory: 'ADVENTURE',
    rating: 4.8,
    description: 'A once-in-a-lifetime encounter with mountain gorillas in the Volcanoes National Park.',
    image: 'https://images.unsplash.com/photo-1534149043227-d4677db30297?q=80&w=800&auto=format&fit=crop'
  }
]

// --- 2. FILTERING LOGIC ---
const filteredPackages = computed(() => {
  if (activeTab.value === 'All Trips') return packages
  return packages.filter(p => p.category === activeTab.value)
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>