<template>
  <div class="min-h-screen bg-[#F9F9F9] p-4 md:p-10 font-sans text-gray-800">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      
      <!-- SIDEBAR FILTERS -->
      <aside class="w-full md:w-64 flex-shrink-0">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-10">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-xl font-bold text-gray-900">Filters</h2>
            <button @click="resetFilters" class="text-xs font-black text-[#f17216] uppercase tracking-widest hover:underline transition-all">
              Reset
            </button>
          </div>

          <!-- Destinations Group (Single Selection Logic) -->
          <div class="mb-8">
            <h3 class="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Destinations</h3>
            <div class="space-y-3">
              <label v-for="dest in ['Kenya', 'Tanzania', 'Uganda']" :key="dest" class="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  :checked="selectedDestination === dest"
                  @change="selectedDestination = (selectedDestination === dest ? null : dest)"
                  class="w-5 h-5 rounded border-gray-300 text-[#f17216] focus:ring-[#f17216] cursor-pointer transition-all"
                >
                <span class="ml-3 text-sm font-bold text-gray-600 group-hover:text-black transition-colors">{{ dest }}</span>
              </label>
            </div>
          </div>

          <!-- Duration Group -->
          <div class="mb-8 border-t border-gray-50 pt-6">
            <h3 class="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Duration</h3>
            <div class="space-y-2">
              <button 
                v-for="range in [{l:'Short (3–5 Days)', v:'3-5'}, {l:'Long (6–10 Days)', v:'6-10'}]" 
                :key="range.v"
                @click="selectedDurationRange = (selectedDurationRange === range.v ? null : range.v)"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-3',
                  selectedDurationRange === range.v ? 'bg-[#f1721615] text-[#f17216] border border-[#f17216]/20' : 'text-gray-500 hover:bg-gray-50 border border-transparent'
                ]"
              >
                <Clock class="w-4 h-4"/>
                {{ range.l }}
              </button>
            </div>
          </div>
        </div>
      </aside>

      <!-- MAIN CONTENT -->
      <main class="flex-grow">
        <div class="mb-10">
          <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">Our Safari Collections</h1>
          <p class="text-sm text-gray-400 font-bold uppercase tracking-widest">
            Showing {{ filteredSafaris.length }} experiences in {{ selectedDestination || 'East Africa' }}
          </p>
        </div>

        <!-- SAFARI GRID -->
        <div v-if="filteredSafaris.length > 0" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="safari in filteredSafaris" :key="safari.id" 
            class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col relative"
          >
            <!-- IMAGE AREA -->
            <div class="relative h-64 overflow-hidden">
              <img :src="safari.image" :alt="safari.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              
              <!-- Dark Overlay -->
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

              <!-- Floating Badge -->
              <div v-if="safari.badge" class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg">
                <span class="text-[#F17216] text-[10px] font-black uppercase tracking-widest">{{ safari.badge }}</span>
              </div>

              <!-- Favorite Button -->
              <button class="absolute top-4 right-4 p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all shadow-xl">
                <Heart class="w-4 h-4" />
              </button>
            </div>
            
            <!-- CONTENT AREA -->
            <div class="p-6 flex flex-col flex-grow">
              <!-- Rating & Category -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                  <Star class="w-3.5 h-3.5 text-[#f17216] fill-current" />
                  <span class="text-xs font-black text-[#f17216]">{{ safari.rating }}</span>
                </div>
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{{ safari.type }} Safari</span>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-black text-gray-900 mb-2 leading-tight group-hover:text-[#F17216] transition-colors">
                {{ safari.title }}
              </h3>

              <!-- Location -->
              <p class="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-8">
                <MapPin class="w-3.5 h-3.5 text-[#F17216]" /> {{ safari.location }}
              </p>
              
              <!-- FOOTER: Inquiry Mode -->
              <div class="mt-auto pt-5 border-t border-gray-50 flex justify-between items-center">
                <div>
                  <p class="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Pricing</p>
                  <p class="text-xs font-black text-[#F17216] uppercase tracking-tighter">Available on Request</p>
                </div>
                
                <!-- LINK TO INQUIRY PAGE -->
                <router-link 
                  :to="{ path: '/booking', query: { name: safari.title, image: safari.image } }"
                  class="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#F17216] transition-all transform active:scale-95 shadow-lg shadow-gray-200"
                >
                  Inquire Now
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="flex flex-col items-center justify-center py-24 text-center">
          <RotateCcw class="w-16 h-16 text-gray-200 mb-4 animate-spin-slow"/>
          <h3 class="text-xl font-bold text-gray-900">No matching safaris</h3>
          <p class="text-gray-500 mb-6 text-sm">Try selecting a different region or clearing your filters.</p>
          <button @click="resetFilters" class="bg-gray-900 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest">Clear all filters</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { MapPin, Clock, Star, Heart, RotateCcw } from 'lucide-vue-next'

// --- MOCK DATA ---
const safaris = [
  { id: 1, title: 'Maasai Mara Great Migration', destination: 'Kenya', location: 'MAASAI MARA, KENYA', rating: 4.9, duration: 5, type: 'Wildlife', badge: 'BESTSELLER', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770294020/Screenshot_2026-02-05_151809_vokiu4.png' },
  { id: 2, title: 'Amboseli Elephant Trail', destination: 'Kenya', location: 'AMBOSELI, KENYA', rating: 4.8, duration: 3, type: 'Wildlife', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770372502/amboseli_elephant_trail_djjng6.png' },
  { id: 3, title: 'Serengeti Explorer', destination: 'Tanzania', location: 'SERENGETI, TANZANIA', rating: 4.8, duration: 7, type: 'Wildlife', badge: 'TOP RATED', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770372501/serengeti_hfbpyn.jpg' },
  { id: 4, title: 'Zanzibar Beach & Spice', destination: 'Tanzania', location: 'ZANZIBAR, TANZANIA', rating: 4.7, duration: 5, type: 'Luxury', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770372501/zanzibar_beach_do4rms.avif' },
  { id: 5, title: 'Uganda Gorilla Trekking', destination: 'Uganda', location: 'BWINDI, UGANDA', rating: 5.0, duration: 4, type: 'Wildlife', badge: 'RARE EXPERIENCE', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770372501/gorilla_uganda_swej1r.jpg' },
  { id: 6, title: 'Tsavo West Wilderness', destination: 'Kenya', location: 'TSAVO WEST, KENYA', rating: 4.7, duration: 4, type: 'Wildlife', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770372501/tsavo_west_ruumwe.jpg' },
  { id: 7, title: 'Kilimanjaro Summit Hike', destination: 'Tanzania', location: 'MOSHI, TANZANIA', rating: 4.9, duration: 8, type: 'Luxury', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770372501/kilimanjaro_b04zwc.avif' }
];

// --- FILTER STATE ---
const selectedDestination = ref(null) 
const selectedDurationRange = ref(null)

// --- FILTERING LOGIC ---
const filteredSafaris = computed(() => {
  return safaris.filter(safari => {
    const destMatch = !selectedDestination.value || safari.destination === selectedDestination.value
    
    let durMatch = true
    if (selectedDurationRange.value === '3-5') durMatch = safari.duration >= 3 && safari.duration <= 5
    if (selectedDurationRange.value === '6-10') durMatch = safari.duration >= 6 && safari.duration <= 10

    return destMatch && durMatch
  })
})

const resetFilters = () => {
  selectedDestination.value = null
  selectedDurationRange.value = null
}
</script>

<style scoped>
/* Remove default checkbox focus ring and style custom check */
input[type="checkbox"] {
  @apply transition-all duration-300;
}

.animate-spin-slow {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>