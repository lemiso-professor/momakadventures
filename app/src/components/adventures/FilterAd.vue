<script setup>
import { ref, computed } from 'vue' // Added computed
import { 
  ChevronDown, 
  ChevronRight, 
  Star, 
  Mountain, 
  Bike, 
  Compass, 
  MountainSnow
} from 'lucide-vue-next'

const activeFilter = ref('Hiking')

const filters = [
  { name: 'Hiking', icon: MountainSnow },
  { name: 'Rock Climbing', icon: Mountain },
  { name: 'Mountain Biking', icon: Bike },
  { name: 'Multi-day Trek', icon: Compass },
]

const expeditions = [
  // --- HIKING (3) ---
  {
    title: 'Mt. Kenya: Sirimon Route',
    description: 'Summit Lenana Peak. A classic trek through diverse ecosystems, from tropical forest to moorlands.',
    image: 'https://images.unsplash.com/photo-1589197331516-4d845f3eb63a?q=80&w=800&auto=format&fit=crop',
    duration: '5 Days',
    price: '$1,250',
    rating: '4.9',
    reviews: '124',
    category: 'Hiking'
  },
  {
    title: 'Mt. Kilimanjaro: Machame',
    description: 'Known as the "Whiskey" route. A scenic climb through rainforests to the snow-capped Uhuru Peak.',
    image: 'https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800&auto=format&fit=crop',
    duration: '7 Days',
    price: '$2,400',
    rating: '4.9',
    reviews: '342',
    category: 'Hiking'
  },
  {
    title: 'Ngong Hills Forest Hike',
    description: 'A favorite day hike near Nairobi offering panoramic views of the Great Rift Valley and the city skyline.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop',
    duration: '1 Day',
    price: '$60',
    rating: '4.6',
    reviews: '189',
    category: 'Hiking'
  },

  // --- ROCK CLIMBING (3) ---
  {
    title: 'Ndeiya Rock Climbing',
    description: "Test your limits on the Great Rift Valley's premier vertical routes with expert safety guides.",
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=800&auto=format&fit=crop',
    duration: '2 Days',
    price: '$450',
    rating: '5.0',
    reviews: '56',
    category: 'Rock Climbing'
  },
  {
    title: "Fischer's Tower: Hell's Gate",
    description: 'Scale the iconic volcanic plug. Perfect for beginners and intermediate climbers looking for adventure.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
    duration: '1 Day',
    price: '$150',
    rating: '4.9',
    reviews: '88',
    category: 'Rock Climbing'
  },
  {
    title: 'Lukenya Hill Technical Crags',
    description: "Kenya's most famous climbing destination. Technical granite routes with multiple pitch options.",
    image: 'https://images.unsplash.com/photo-1601590635155-ebd8ba01b721?q=80&w=800&auto=format&fit=crop',
    duration: '1 Day',
    price: '$220',
    rating: '4.8',
    reviews: '112',
    category: 'Rock Climbing'
  },

  // --- MOUNTAIN BIKING (3) ---
  {
    title: "Hell's Gate Biking Safari",
    description: 'Ride alongside zebras and giraffes. Explore deep gorges and volcanic landscapes on two wheels.',
    image: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=800&auto=format&fit=crop',
    duration: '1 Day',
    price: '$180',
    rating: '4.8',
    reviews: '215',
    category: 'Mountain Biking'
  },
  {
    title: 'Karura Forest Single Track',
    description: 'Navigate through indigenous forests and waterfalls on world-class mountain biking trails in the city.',
    image: 'https://images.unsplash.com/photo-1596568243304-749e755291b0?q=80&w=800&auto=format&fit=crop',
    duration: '1 Day',
    price: '$45',
    rating: '4.8',
    reviews: '156',
    category: 'Mountain Biking'
  },
  {
    title: 'Mt. Suswa Crater Circuit',
    description: 'A rugged ride around a massive double-crater volcano with spectacular geological features and caves.',
    image: 'https://images.unsplash.com/photo-1533561052604-c3eba0155530?q=80&w=800&auto=format&fit=crop',
    duration: '1 Day',
    price: '$120',
    rating: '4.7',
    reviews: '42',
    category: 'Mountain Biking'
  },

  // --- MULTI-DAY TREK (3) ---
  {
    title: 'Aberdare Range Traverse',
    description: "A high-altitude trek through moorlands and bamboo forests, home to spectacular waterfalls.",
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    duration: '4 Days',
    price: '$850',
    rating: '4.7',
    reviews: '82',
    category: 'Multi-day Trek'
  },
  {
    title: 'Mt. Elgon Wilderness Trek',
    description: 'Explore vast caves and the ancient caldera on Africa’s eighth highest mountain on the border.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
    duration: '5 Days',
    price: '$950',
    rating: '4.6',
    reviews: '38',
    category: 'Multi-day Trek'
  },
  {
    title: 'Matthews Range Expedition',
    description: 'An off-the-beaten-path botanical paradise. Trek through ancient forests with local Samburu guides.',
    image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=800&auto=format&fit=crop',
    duration: '6 Days',
    price: '$1,800',
    rating: '5.0',
    reviews: '24',
    category: 'Multi-day Trek'
  }
]
// --- FILTER LOGIC ---
// This computed property automatically filters the list 
// whenever 'activeFilter' changes.
const filteredExpeditions = computed(() => {
  return expeditions.filter(item => item.category === activeFilter.value)
})
</script>

<template>
  <section class="py-16 bg-[#F9F9F9] font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 1. FILTER HEADER -->
      <div class="flex items-center gap-3 mb-8">
        <div class="w-8 h-[2px] bg-[#F17216]"></div>
        <h3 class="text-xs font-bold uppercase tracking-widest text-gray-700">Filter Experiences</h3>
      </div>

      <!-- 2. FILTER TABS -->
      <div class="flex flex-wrap gap-4 mb-16">
        <button 
          v-for="filter in filters" 
          :key="filter.name"
          @click="activeFilter = filter.name"
          :class="[
            'flex items-center gap-3 px-5 py-2.5 rounded-xl border transition-all duration-300 shadow-sm',
            activeFilter === filter.name 
              ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-lg shadow-green-900/20' 
              : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200'
          ]"
        >
          <component :is="filter.icon" class="w-4 h-4" :class="activeFilter === filter.name ? 'text-white' : 'text-gray-400'" />
          <span class="text-sm font-bold tracking-tight">{{ filter.name }}</span>
          <ChevronDown class="w-3.5 h-3.5 opacity-40 ml-1" />
        </button>
      </div>

      <!-- 3. SECTION TITLE -->
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Featured Expeditions
        </h2>
        <a href="#" class="flex items-center gap-1.5 text-[#F17216] font-bold text-sm hover:underline">
          See All <ChevronRight class="w-4 h-4" />
        </a>
      </div>

      <!-- 4. EXPEDITION CARDS GRID -->
      <!-- Added TransitionGroup for a smooth effect when cards change -->
      <transition-group 
        tag="div" 
        name="list" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div 
          v-for="item in filteredExpeditions" 
          :key="item.title"
          class="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col group cursor-pointer"
        >
          <!-- Card Image Header -->
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="item.image" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            <!-- Duration Badge -->
            <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-lg">
              {{ item.duration }}
            </div>

            <!-- Price Badge -->
            <div class="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg font-black text-sm shadow-lg">
              {{ item.price }}
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-8 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#F17216] transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              {{ item.description }}
            </p>

            <!-- Card Footer -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-50">
              <div class="flex items-center gap-2">
                <Star class="w-4 h-4 text-[#F17216] fill-current" />
                <span class="text-xs font-bold text-gray-700">{{ item.rating }}</span>
                <span class="text-xs font-medium text-gray-400">({{ item.reviews }} reviews)</span>
              </div>
              <ChevronRight class="w-5 h-5 text-[#F17216] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </transition-group>

    </div>
  </section>
</template>

<style scoped>
h2, h3 {
  letter-spacing: -0.015em;
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

/* --- List Animation Styles --- */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>