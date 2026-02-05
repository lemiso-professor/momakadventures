<script setup>
import { ref, computed } from 'vue'

// --- 1. DATA ---
const activeTab = ref('All Trips')
const tabs = ['All Trips', 'Safari Adventures', 'Beach Holidays', 'Cultural Experiences']

const packages = [
  {
    id: 1,
    title: 'Masai Mara & Amboseli Grand Safari',
    category: 'Safari Adventures',
    displayCategory: 'SAFARI',
    duration: '10 DAYS',
    rating: 4.9,
    description: 'Witness the Great Migration and view Mount Kilimanjaro from the plains of Amboseli.',
    price: 3250,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop',
    badges: ['BEST SELLER', 'INCLUSIVE']
  },
  {
    id: 2,
    title: 'Diani Beach Luxury Escape',
    category: 'Beach Holidays',
    displayCategory: 'BEACH',
    duration: '7 DAYS',
    rating: 4.7,
    description: 'Relax on the award-winning white sands of Diani Beach with private villa stays.',
    price: 1890,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    badges: ['INCLUSIVE']
  },
  {
    id: 3,
    title: 'Heart of East Africa Heritage',
    category: 'Cultural Experiences',
    displayCategory: 'CULTURE',
    duration: '12 DAYS',
    rating: 5.0,
    description: 'A deep dive into the diverse cultures of East Africa, from Maasai villages to Swahili islands.',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop',
    badges: ['CULTURAL', 'INCLUSIVE']
  },
  {
    id: 4,
    title: 'Rwanda Gorilla Trekking',
    category: 'Safari Adventures',
    displayCategory: 'ADVENTURE',
    duration: '5 DAYS',
    rating: 4.8,
    description: 'A once-in-a-lifetime encounter with mountain gorillas in the Volcanoes National Park.',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1534149043227-d4677db30297?q=80&w=800&auto=format&fit=crop',
    badges: ['INCLUSIVE']
  },
  {
    id: 5,
    title: 'Zanzibar Spices & Sunset',
    category: 'Beach Holidays',
    displayCategory: 'COASTAL',
    duration: '8 DAYS',
    rating: 4.6,
    description: 'Explore the historical Stone Town and relax on the northern beaches of Zanzibar.',
    price: 1550,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
    badges: ['INCLUSIVE']
  },
  {
    id: 6,
    title: 'Kilimanjaro: Machame Route',
    category: 'Safari Adventures',
    displayCategory: 'CLIMB',
    duration: '7 DAYS',
    rating: 4.9,
    description: 'Conquer Africa\'s highest peak through the most scenic climbing route available.',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800&auto=format&fit=crop',
    badges: ['EXPERT ONLY', 'INCLUSIVE']
  }
]

// --- 2. FILTERING LOGIC ---
const filteredPackages = computed(() => {
  if (activeTab.value === 'All Trips') return packages
  return packages.filter(p => p.category === activeTab.value)
})

const getBadgeClass = (badge) => {
  if (badge === 'BEST SELLER') return 'bg-[#F17216] text-white'
  if (badge === 'INCLUSIVE') return 'bg-black/60 text-white backdrop-blur-sm'
  if (badge === 'CULTURAL') return 'bg-[#3b82f6] text-white'
  if (badge === 'EXPERT ONLY') return 'bg-[#ef4444] text-white'
  return 'bg-gray-100 text-gray-800'
}
</script>

<template>
  <div class="min-h-screen bg-[#F9F9F9] py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      
      <!-- HEADER SECTION -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Curated Travel Packages
          </h1>
          <p class="text-gray-500 max-w-2xl leading-relaxed">
            Experience the best of Kenya and East Africa with our all-inclusive curated trips. 
            From the savanna to the turquoise coast.
          </p>
        </div>
        <button class="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Download Brochure
        </button>
      </div>

      <!-- TABS & VIEW SETTINGS -->
      <div class="flex items-center justify-between border-b border-gray-200 mb-8">
        <div class="flex gap-8 overflow-x-auto no-scrollbar">
          <button 
            v-for="tab in tabs" 
            :key="tab"
            @click="activeTab = tab"
            class="pb-4 text-sm font-bold transition-all relative whitespace-nowrap"
            :class="activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'"
          >
            {{ tab }}
            <div v-if="activeTab === tab" class="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900"></div>
          </button>
        </div>
        <div class="hidden md:flex items-center gap-5 text-gray-400">
            <svg class="w-5 h-5 cursor-pointer hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/></svg>
            <svg class="w-5 h-5 cursor-pointer hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
        </div>
      </div>

      <!-- FILTERS ROW -->
      <div class="flex flex-wrap items-center gap-3 mb-10">
        <button class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
          Price: Low to High 
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <button class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
          Most Popular 
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="flex items-center gap-2 bg-[#F1721615] text-[#F17216] px-4 py-2 rounded-xl text-xs font-bold border border-[#F1721620]">
          Duration: 7–14 Days 
          <svg class="w-3 h-3 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </div>
      </div>

      <!-- PACKAGES GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="pkg in filteredPackages" 
          :key="pkg.id" 
          class="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
        >
          <!-- Image Section -->
          <div class="relative h-64 overflow-hidden">
            <img :src="pkg.image" :alt="pkg.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            
            <!-- Dynamic Badges -->
            <div class="absolute top-4 left-4 flex gap-2">
              <span 
                v-for="badge in pkg.badges" 
                :key="badge"
                class="px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest uppercase"
                :class="getBadgeClass(badge)"
              >
                {{ badge }}
              </span>
            </div>
            
            <button class="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white hover:bg-white hover:text-red-500 transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>
          </div>

          <!-- Content Section -->
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-center mb-3">
              <span class="text-[#F17216] text-[10px] font-black uppercase tracking-[0.15em]">
                {{ pkg.displayCategory }} • {{ pkg.duration }}
              </span>
              <div class="flex items-center gap-1 text-gray-900 font-bold">
                <svg class="w-3.5 h-3.5 text-[#F17216] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span class="text-sm">{{ pkg.rating }}</span>
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#F17216] transition-colors">
              {{ pkg.title }}
            </h3>
            
            <p class="text-gray-400 text-sm leading-relaxed mb-10 flex-grow">
              {{ pkg.description }}
            </p>

            <!-- Bottom Row -->
            <div class="flex items-end justify-between border-t border-gray-50 pt-6">
              <div class="flex flex-col">
                <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Price from</span>
                <span class="text-2xl font-black text-[#F17216]">
                  ${{ pkg.price.toLocaleString() }}
                </span>
              </div>
              
              <button class="bg-[#1D1611] text-white px-7 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-black transition-all">
                View Details
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>