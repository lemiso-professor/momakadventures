<template>
  <section class="py-16 bg-[#F9F9F9] font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 1. FILTER HEADER -->
      <div class="flex items-center gap-3 mb-8">
        <div class="w-8 h-[2px] bg-[#F17216]"></div>
        <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Filter Experiences</h3>
      </div>

      <!-- 2. FILTER TABS -->
      <div class="flex flex-wrap gap-3 mb-16">
        <button 
          v-for="filter in filters" 
          :key="filter.name"
          @click="activeFilter = filter.name"
          :class="[
            'flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300',
            activeFilter === filter.name 
              ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-lg shadow-green-900/20' 
              : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200'
          ]"
        >
          <component :is="filter.icon" class="w-4 h-4" :class="activeFilter === filter.name ? 'text-white' : 'text-[#F17216]'" />
          <span class="text-xs font-black uppercase tracking-widest">{{ filter.name }}</span>
        </button>
      </div>

      <!-- 3. SECTION TITLE -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 class="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Featured Expeditions
          </h2>
          <p class="text-gray-400 text-sm font-medium mt-2 italic">Professional-led mountain adventures. Inquiry for custom group rates.</p>
        </div>
      </div>

      <!-- 4. EXPEDITION CARDS GRID -->
      <transition-group 
        tag="div" 
        name="list" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div 
          v-for="item in filteredExpeditions" 
          :key="item.title"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100"
        >
          <!-- Card Image Header -->
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="item.image" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            
            <!-- Duration Badge -->
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#F17216] text-[10px] font-black px-4 py-2 rounded-xl shadow-sm uppercase tracking-widest">
              Flexible Duration
            </div>

            <!-- Category Badge -->
            <div class="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
              {{ item.category }}
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-2 mb-4">
              <Star class="w-3.5 h-3.5 text-[#F17216] fill-current" />
              <span class="text-xs font-black text-gray-900">{{ item.rating }}</span>
              <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">({{ item.reviews }} Reviews)</span>
            </div>

            <h3 class="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#F17216] transition-colors">
              {{ item.title }}
            </h3>
            
            <p class="text-gray-400 text-xs font-medium leading-relaxed mb-8 flex-grow">
              {{ item.description }}
            </p>

            <!-- Card Footer: Inquiry Only -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-50">
              <div class="flex flex-col">
                <span class="text-[9px] font-black text-gray-300 uppercase tracking-widest">Pricing</span>
                <span class="text-[11px] font-black text-[#F17216] uppercase tracking-tighter">On Request</span>
              </div>
              
              <!-- DYNAMIC LINK TO BOOKING -->
              <router-link 
                :to="{ 
                  path: '/booking', 
                  query: { name: item.title, image: item.image } 
                }" 
                class="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-gray-200 hover:bg-[#F17216] transition-all transform active:scale-95"
              >
                Inquire
              </router-link>
            </div>
          </div>
        </div>
      </transition-group>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
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
  {
    title: 'Mt. Kenya: Sirimon Route',
    description: 'Summit Lenana Peak. A classic trek through diverse ecosystems, from tropical forest to moorlands.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383532/mt_kenyasirimon_route_symygb.jpg',
    rating: '4.9',
    reviews: '124',
    category: 'Hiking'
  },
  {
    title: 'Mt. Kilimanjaro: Machame',
    description: 'Known as the "Whiskey" route. A scenic climb through rainforests to the snow-capped Uhuru Peak.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383532/mount_kilimanjaro_machane_elmjew.jpg',
    rating: '4.9',
    reviews: '342',
    category: 'Hiking'
  },
  {
    title: 'Ngong Hills Forest Hike',
    description: 'A favorite day hike near Nairobi offering panoramic views of the Great Rift Valley.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383532/ngong_hills_xufzdm.jpg',
    rating: '4.6',
    reviews: '189',
    category: 'Hiking'
  },
  {
    title: 'Ndeiya Rock Climbing',
    description: "Test your limits on the Great Rift Valley's premier vertical routes with expert safety guides.",
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383533/ndeiya_rock_climbing_dtrsq3.jpg',
    rating: '5.0',
    reviews: '56',
    category: 'Rock Climbing'
  },
  {
    title: "Fischer's Tower: Hell's Gate",
    description: 'Scale the iconic volcanic plug. Perfect for beginners and intermediate climbers.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383531/Fischer_s_Tower_Hell_s_Gate_lcizgy.jpg',
    rating: '4.9',
    reviews: '88',
    category: 'Rock Climbing'
  },
  {
    title: 'Lukenya Hill Technical Crags',
    description: "Kenya's most famous climbing destination. Technical granite routes with multiple pitches.",
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383531/Lukenya_Hill_Technical_Crags_z0o9nb.jpg',
    rating: '4.8',
    reviews: '112',
    category: 'Rock Climbing'
  },
  {
    title: "Hell's Gate Biking Safari",
    description: 'Ride alongside zebras and giraffes. Explore deep gorges and volcanic landscapes on two wheels.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383531/hells_gate_biking_safari_jeqwmq.jpg',
    rating: '4.8',
    reviews: '215',
    category: 'Mountain Biking'
  },
  {
    title: 'Karura Forest Single Track',
    description: 'Navigate through indigenous forests and waterfalls on world-class mountain biking trails.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383531/Karura_Forest_Single_Track_qvogce.jpg',
    rating: '4.8',
    reviews: '156',
    category: 'Mountain Biking'
  },
  {
    title: 'Aberdare Range Traverse',
    description: "A high-altitude trek through moorlands and bamboo forests, home to spectacular waterfalls.",
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770383531/Aberdare_Range_Traverse_hth0zm.jpg',
    rating: '4.7',
    reviews: '82',
    category: 'Multi-day Trek'
  }
];

const filteredExpeditions = computed(() => {
  return expeditions.filter(item => item.category === activeFilter.value)
})
</script>

<style scoped>
/* List Animation Styles */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>