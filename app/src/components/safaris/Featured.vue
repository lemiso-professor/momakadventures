<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <!-- Top Header & Sort -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900">Featured Safaris</h1>
          <p class="text-gray-500 mt-1">Showing 12 unique adventures</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">Sort by:</span>
          <select class="bg-transparent font-semibold text-gray-900 focus:outline-none cursor-pointer">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- SIDEBAR FILTERS -->
        <aside class="w-full lg:w-64 flex-shrink-0">
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <div class="flex justify-between items-center mb-6">
              <h2 class="font-bold text-lg">Filters</h2>
              <button class="text-[#F17216] text-xs font-bold uppercase tracking-wider">Reset</button>
            </div>

            <!-- Destinations -->
            <div class="mb-8">
              <h3 class="font-bold text-sm mb-4">Destinations</h3>
              <div class="space-y-3">
                <label v-for="dest in ['Kenya', 'Tanzania', 'Uganda']" :key="dest" class="flex items-center gap-3 cursor-pointer group">
                  <div class="w-5 h-5 border-2 rounded border-gray-300 flex items-center justify-center group-hover:border-[#F17216] transition-colors"
                       :class="{'bg-[#F17216] border-[#F17216]': dest === 'Tanzania'}">
                    <Check v-if="dest === 'Tanzania'" class="w-3 h-3 text-white" />
                  </div>
                  <span class="text-sm text-gray-600 font-medium">{{ dest }}</span>
                </label>
              </div>
            </div>

            <!-- Duration -->
            <div class="mb-8">
              <h3 class="font-bold text-sm mb-4">Duration</h3>
              <div class="space-y-2">
                <button v-for="time in ['3-5 Days', '6-10 Days', '11+ Days']" :key="time"
                  :class="time === '3-5 Days' ? 'bg-[#F17216]/10 text-[#F17216] border-[#F17216]/20' : 'text-gray-500 border-transparent hover:bg-gray-50'"
                  class="w-full flex items-center gap-3 p-3 rounded-xl border text-sm font-semibold transition-all"
                >
                  <Clock class="w-4 h-4" />
                  {{ time }}
                </button>
              </div>
            </div>

            <!-- Safari Type -->
            <div>
              <h3 class="font-bold text-sm mb-4">Safari Type</h3>
              <div class="flex flex-wrap gap-2">
                <button v-for="type in ['Wildlife', 'Photography', 'Luxury', 'Camping']" :key="type"
                  :class="type === 'Photography' ? 'bg-[#F17216] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
                  class="px-3 py-1.5 rounded-full text-xs font-bold transition-colors"
                >
                  {{ type }}
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- SAFARI GRID -->
        <main class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="safari in safaris" :key="safari.id" class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <!-- Image Container -->
              <div class="relative h-64 overflow-hidden">
                <img :src="safari.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <!-- Heart Icon -->
                <button class="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all">
                  <Heart class="w-5 h-5" />
                </button>
                <!-- Badge -->
                <div v-if="safari.badge" 
                  :class="safari.badge === 'BESTSELLER' ? 'bg-[#F17216]' : 'bg-yellow-600'"
                  class="absolute top-4 left-4 px-3 py-1 rounded-md text-[10px] font-black text-white tracking-widest uppercase">
                  {{ safari.badge }}
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-gray-900 leading-tight group-hover:text-[#F17216] transition-colors">
                    {{ safari.title }}
                  </h3>
                  <div class="flex items-center gap-1 text-[#F17216]">
                    <Star class="w-4 h-4 fill-current" />
                    <span class="font-bold text-sm">{{ safari.rating }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-1 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-6">
                  <MapPin class="w-3 h-3" />
                  {{ safari.location }}
                </div>

                <div class="flex items-end justify-between border-t border-gray-50 pt-4">
                  <div>
                    <span class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">From</span>
                    <span class="text-2xl font-black text-[#F17216]">${{ safari.price.toLocaleString() }}</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-gray-900 font-bold text-sm">
                    <Calendar class="w-4 h-4 text-gray-400" />
                    {{ safari.duration }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="mt-12 flex justify-center items-center gap-2">
            <button class="p-2 text-gray-400 hover:text-gray-900"><ChevronLeft class="w-5 h-5" /></button>
            <button class="w-10 h-10 rounded-xl bg-[#F17216] text-white font-bold shadow-lg shadow-[#F17216]/30">1</button>
            <button class="w-10 h-10 rounded-xl hover:bg-gray-200 font-bold text-gray-600 transition-colors">2</button>
            <button class="w-10 h-10 rounded-xl hover:bg-gray-200 font-bold text-gray-600 transition-colors">3</button>
            <span class="px-2 text-gray-400">...</span>
            <button class="w-10 h-10 rounded-xl hover:bg-gray-200 font-bold text-gray-600 transition-colors">8</button>
            <button class="p-2 text-gray-400 hover:text-gray-900"><ChevronRight class="w-5 h-5" /></button>
          </div>
        </main>

      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  Check, Clock, MapPin, Star, Heart, 
  Calendar, ChevronLeft, ChevronRight 
} from 'lucide-vue-next'

const safaris = [
  {
    id: 1,
    title: 'Maasai Mara Great Migration',
    location: 'KENYA',
    price: 1200,
    rating: 4.9,
    duration: '5 Days',
    badge: 'BESTSELLER',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770152025/Botswana-Gallery-1_gfw6uh.jpg'
  },
  {
    id: 2,
    title: 'Amboseli Elephant Trail',
    location: 'KENYA / TANZANIA BORDER',
    price: 950,
    rating: 4.8,
    duration: '3 Days',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770239471/home1lg_go7ssu.png'
  },
  {
    id: 3,
    title: 'Tsavo West Wilderness',
    location: 'TSAVO NATIONAL PARK',
    price: 1100,
    rating: 4.7,
    duration: '4 Days',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770198796/mtkenya_adventure_yufdmh.webp'
  },
  {
    id: 4,
    title: 'Lamu Cultural Safari',
    location: 'COASTAL KENYA',
    price: 800,
    rating: 4.9,
    duration: '3 Days',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770198577/beach-front_xuty4l.webp'
  },
  {
    id: 5,
    title: 'Uganda Gorilla Trekking',
    location: 'BWINDI, UGANDA',
    price: 2450,
    rating: 5.0,
    duration: '4 Days',
    badge: 'RARE EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Serengeti Explorer',
    location: 'TANZANIA',
    price: 1850,
    rating: 4.8,
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800'
  }
]
</script>