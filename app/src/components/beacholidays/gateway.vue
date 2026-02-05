<script setup>
import { ref, computed } from 'vue'
import { MapPin } from 'lucide-vue-next'

// --- DATA ---
const categories = [
  { 
    id: 'romantic', 
    name: 'Romantic Getaways', 
    subtitle: 'Honeymoon suites and private sunset dinners',
    items: [
      { title: 'Watamu Sunset Retreat', location: 'Watamu Marine Park', image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=800&auto=format&fit=crop' },
      { title: 'Diani Luxury Palms', location: 'Diani South Coast', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop' },
      { title: 'Malindi Love Nest', location: 'Malindi Bay', image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  { 
    id: 'family', 
    name: 'Family Fun', 
    subtitle: 'Kid-friendly resorts and group activities',
    items: [
      { title: 'Baobab Beach Resort', location: 'Diani Beach', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop' },
      { title: 'Turtle Bay Club', location: 'Watamu', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop' },
      { title: 'Nyali Family Suites', location: 'Mombasa', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  { 
    id: 'water', 
    name: 'Water Sports', 
    subtitle: 'Surfing, diving and deep sea fishing', 
    items: [
      { title: 'Diani Kite Surfing', location: 'Galu Beach', image: 'https://images.unsplash.com/photo-1500353391642-d812ef81970c?q=80&w=800&auto=format&fit=crop' },
      { title: 'Wasini Island Diving', location: 'Kisite-Mpunguti', image: 'https://images.unsplash.com/photo-1544551763-47a0159c9233?q=80&w=800&auto=format&fit=crop' },
      { title: 'Malindi Reef Safari', location: 'Malindi Marine', image: 'https://images.unsplash.com/photo-1510172951991-8594506604a8?q=80&w=800&auto=format&fit=crop' }
    ] 
  },
  { 
    id: 'luxury', 
    name: 'Luxury Resorts', 
    subtitle: 'High-end villas and exclusive service', 
    items: [
      { title: 'The Maji Boutique', location: 'Diani Beach', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop' },
      { title: 'Medina Palms Luxury', location: 'Watamu', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop' },
      { title: 'Hemingways Residences', location: 'Watamu Beach', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop' }
    ] 
  },
]

const activeTabId = ref('romantic')
const isShowingAll = ref(false)

// Function to handle tab click
const setTab = (id) => {
  activeTabId.value = id
  isShowingAll.value = false // Close 'See All' mode if a specific tab is clicked
}

// Logic to switch header text
const currentCategory = computed(() => {
  if (isShowingAll.value) return { name: 'All Beach Getaways', subtitle: 'Explore every amazing destination we offer' }
  return categories.find(cat => cat.id === activeTabId.value)
})

// Logic to switch displayed items
const displayItems = computed(() => {
  if (isShowingAll.value) {
    // Flatten all items from all categories into one list
    return categories.flatMap(cat => cat.items)
  }
  return currentCategory.value.items
})
</script>

<template>
  <section class="py-12 bg-white font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 1. CATEGORY TABS -->
      <nav class="flex space-x-8 border-b border-gray-100 mb-10 overflow-x-auto no-scrollbar">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="setTab(cat.id)"
          class="pb-4 text-sm font-bold tracking-tight transition-all duration-300 relative whitespace-nowrap"
          :class="activeTabId === cat.id && !isShowingAll ? 'text-[#F17216]' : 'text-gray-400 hover:text-gray-800'"
        >
          {{ cat.name }}
          <!-- Active underline -->
          <div v-if="activeTabId === cat.id && !isShowingAll" class="absolute bottom-0 left-0 w-full h-[3px] bg-[#F17216] rounded-t-full"></div>
        </button>
      </nav>

      <!-- 2. SECTION HEADER -->
      <div class="flex items-end justify-between mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            {{ currentCategory.name }}
          </h2>
          <p class="text-gray-400 text-sm md:text-base font-medium">
            {{ currentCategory.subtitle }}
          </p>
        </div>
        
        <!-- SEE ALL ACTION -->
        <button 
          @click="isShowingAll = !isShowingAll" 
          class="text-[#F17216] font-bold text-sm hover:underline flex items-center gap-1 transition-all"
          :class="{ 'opacity-50': isShowingAll }"
        >
          {{ isShowingAll ? 'Show less' : 'See all' }}
        </button>
      </div>

      <!-- 3. CARD GRID -->
      <transition-group 
        tag="div" 
        name="list"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div 
          v-for="(item, index) in displayItems" 
          :key="item.title"
          class="group relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
        >
          <!-- Background Image -->
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <!-- Dark Gradient Overlay (Bottom) -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <!-- Text Content -->
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-bold mb-1">{{ item.title }}</h3>
            <div class="flex items-center gap-1.5 opacity-90">
              <MapPin class="w-3.5 h-3.5 text-white" />
              <span class="text-xs font-medium">{{ item.location }}</span>
            </div>
          </div>
        </div>
      </transition-group>

    </div>
  </section>
</template>

<style scoped>
/* Hides scrollbar for the mobile tab navigation */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Grid Entrance Animation */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>