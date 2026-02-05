<script setup>
import { ref, computed, onMounted } from 'vue'
import { MapPin, Clock, Star, Heart, RotateCcw } from 'lucide-vue-next'

// --- 1. MOCK DATA ---
const safaris = [
  // --- KENYA (6) ---
  { id: 1, title: 'Maasai Mara Great Migration', destination: 'Kenya', location: 'MAASAI MARA, KENYA', rating: 4.9, price: 185000, duration: 5, type: 'Wildlife', badge: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Amboseli Elephant Trail', destination: 'Kenya', location: 'AMBOSELI, KENYA', rating: 4.8, price: 125000, duration: 3, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Tsavo West Wilderness', destination: 'Kenya', location: 'TSAVO WEST, KENYA', rating: 4.7, price: 145000, duration: 4, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1523805081730-61f1c046bd27?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Samburu Cultural Safari', destination: 'Kenya', location: 'SAMBURU, KENYA', rating: 4.8, price: 160000, duration: 4, type: 'Wildlife', badge: 'CULTURAL', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Lake Nakuru Flamingo Trail', destination: 'Kenya', location: 'NAKURU, KENYA', rating: 4.6, price: 110000, duration: 2, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Diani Beach Relaxation', destination: 'Kenya', location: 'DIANI, KENYA', rating: 5.0, price: 85000, duration: 4, type: 'Luxury', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800' },

  // --- TANZANIA (6) ---
  { id: 3, title: 'Serengeti Explorer', destination: 'Tanzania', location: 'SERENGETI, TANZANIA', rating: 4.8, price: 195000, duration: 7, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1519066632447-479e4f37e980?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Zanzibar Beach & Spice', destination: 'Tanzania', location: 'ZANZIBAR, TANZANIA', rating: 4.7, price: 95000, duration: 5, type: 'Luxury', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800' },
  { id: 10, title: 'Ngorongoro Crater Tour', destination: 'Tanzania', location: 'NGORONGORO, TANZANIA', rating: 4.9, price: 210000, duration: 3, type: 'Wildlife', badge: 'TOP RATED', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800' },
  { id: 11, title: 'Mt. Kilimanjaro Trek', destination: 'Tanzania', location: 'KILIMANJARO, TANZANIA', rating: 4.9, price: 280000, duration: 7, type: 'Luxury', image: 'https://images.unsplash.com/photo-1580191947416-62d35a55e71d?auto=format&fit=crop&q=80&w=800' },
  { id: 12, title: 'Tarangire Elephant Haven', destination: 'Tanzania', location: 'TARANGIRE, TANZANIA', rating: 4.6, price: 135000, duration: 3, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800' },
  { id: 13, title: 'Lake Manyara Adventure', destination: 'Tanzania', location: 'MANYARA, TANZANIA', rating: 4.7, price: 120000, duration: 2, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800' },

  // --- UGANDA (6) ---
  { id: 5, title: 'Uganda Gorilla Trekking', destination: 'Uganda', location: 'BWINDI, UGANDA', rating: 5.0, price: 245000, duration: 4, type: 'Wildlife', badge: 'RARE EXPERIENCE', image: 'https://images.unsplash.com/photo-1534149043227-d4677db30297?auto=format&fit=crop&q=80&w=800' },
  { id: 14, title: 'Murchison Falls Safari', destination: 'Uganda', location: 'MURCHISON, UGANDA', rating: 4.8, price: 175000, duration: 4, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800' },
  { id: 15, title: 'Queen Elizabeth Wildlife', destination: 'Uganda', location: 'KASEESE, UGANDA', rating: 4.7, price: 155000, duration: 3, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800' },
  { id: 16, title: 'Kibale Chimpanzee Trek', destination: 'Uganda', location: 'KIBALE, UGANDA', rating: 4.9, price: 190000, duration: 3, type: 'Wildlife', badge: 'POPULAR', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800' },
  { id: 17, title: 'Lake Mburo Zebra Trail', destination: 'Uganda', location: 'MBARARA, UGANDA', rating: 4.5, price: 115000, duration: 2, type: 'Wildlife', image: 'https://images.unsplash.com/photo-1523805081730-61f1c046bd27?auto=format&fit=crop&q=80&w=800' },
  { id: 18, title: 'Jinja Source of the Nile', destination: 'Uganda', location: 'JINJA, UGANDA', rating: 4.8, price: 90000, duration: 2, type: 'Luxury', image: 'https://images.unsplash.com/photo-1501560379315-a1f27426e9c5?auto=format&fit=crop&q=80&w=800' },
];
// --- 2. FILTER STATE ---
// We use a string for selectedDestination to allow only one to be checked at a time
const selectedDestination = ref('Tanzania') 
const selectedDurationRange = ref(null)

// --- 3. FILTERING LOGIC ---
const filteredSafaris = computed(() => {
  return safaris.filter(safari => {
    // Single selection check: if no destination is selected, show all. 
    // Otherwise, show only the one that matches.
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

<template>
  <div class="min-h-screen bg-[#F9F9F9] p-4 md:p-10 font-sans text-gray-800">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      
      <!-- SIDEBAR FILTERS -->
      <aside class="w-full md:w-64 flex-shrink-0">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-10">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-xl font-bold text-gray-900">Filters</h2>
            <button @click="resetFilters" class="text-xs font-bold text-[#f17216] uppercase tracking-wider">Reset</button>
          </div>

          <!-- Destinations Group (Single Selection Logic) -->
          <div class="mb-8">
            <h3 class="text-sm font-bold mb-4">Destinations</h3>
            <div class="space-y-3">
              <label v-for="dest in ['Kenya', 'Tanzania', 'Uganda']" :key="dest" class="flex items-center group cursor-pointer">
                <!-- 
                  Logic: We bind 'checked' to a comparison. 
                  When clicked, we check if it's already selected; 
                  if yes, we unselect it (null), if no, we select it. 
                -->
                <input 
                  type="checkbox" 
                  :checked="selectedDestination === dest"
                  @change="selectedDestination = (selectedDestination === dest ? null : dest)"
                  class="w-5 h-5 rounded border-gray-300 text-[#f17216] focus:ring-[#f17216] cursor-pointer"
                >
                <span class="ml-3 text-sm font-medium text-gray-600 group-hover:text-black transition-colors">{{ dest }}</span>
              </label>
            </div>
          </div>

          <!-- Duration Group -->
          <div class="mb-8 border-t border-gray-50 pt-6">
            <h3 class="text-sm font-bold mb-4">Duration</h3>
            <div class="space-y-2">
              <button 
                v-for="range in [{l:'3–5 Days', v:'3-5'}, {l:'6–10 Days', v:'6-10'}]" 
                :key="range.v"
                @click="selectedDurationRange = (selectedDurationRange === range.v ? null : range.v)"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3',
                  selectedDurationRange === range.v ? 'bg-[#f1721615] text-[#f17216]' : 'text-gray-500 hover:bg-gray-50'
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
        <div class="mb-8">
          <h1 class="text-3xl font-extrabold mb-1">Featured Safaris</h1>
          <p class="text-sm text-gray-400 font-medium">
            Showing {{ filteredSafaris.length }} adventures in {{ selectedDestination || 'all regions' }}
          </p>
        </div>

        <!-- GRID -->
        <div v-if="filteredSafaris.length > 0" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="safari in filteredSafaris" :key="safari.id" class="bg-white rounded-[2rem] overflow-hidden group border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div class="relative h-52 overflow-hidden">
              <img :src="safari.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div v-if="safari.badge" class="absolute top-4 left-4 bg-[#f17216] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
                {{ safari.badge }}
              </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-lg leading-tight group-hover:text-[#f17216] transition-colors">{{ safari.title }}</h3>
                <div class="flex items-center gap-1 text-[#f17216] font-bold">
                  <Star class="w-4 h-4 fill-current"/>
                  <span class="text-sm">{{ safari.rating }}</span>
                </div>
              </div>
              <p class="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-6">
                <MapPin class="w-3.5 h-3.5"/> {{ safari.location }}
              </p>
              
              <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between items-end">
                <div>
                  <span class="block text-[10px] text-gray-400 font-bold uppercase mb-1">From</span>
                  <span class="text-2xl font-black text-[#f17216]">KSh {{ safari.price.toLocaleString() }}</span>
                </div>
                <div class="flex items-center gap-1 text-xs font-bold text-gray-500 mb-1">
                   <Clock class="w-3.5 h-3.5 opacity-40"/> {{ safari.duration }} Days
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="flex flex-col items-center justify-center py-24 text-center">
          <RotateCcw class="w-16 h-16 text-gray-200 mb-4"/>
          <h3 class="text-xl font-bold text-gray-900">No matching safaris</h3>
          <p class="text-gray-500 mb-6">Try selecting a different destination or duration.</p>
          <button @click="resetFilters" class="text-[#f17216] font-bold hover:underline">Clear all filters</button>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Custom orange checkmark for the checkbox */
input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
</style>