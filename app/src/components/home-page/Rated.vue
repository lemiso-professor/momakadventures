<template>
  <section class="py-16 bg-[#F9FAFB]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-end justify-between mb-10">
        <div>
          <span class="text-[#F17216] font-bold text-xs tracking-widest uppercase">Top Rated</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Featured Packages</h2>
        </div>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(pkg, index) in packages" :key="index" 
             class="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
          
          <!-- Package Image -->
          <div class="relative h-56 overflow-hidden">
            <img :src="pkg.image" :alt="pkg.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex flex-col flex-grow">
            <!-- Badge & Rating Row -->
            <div class="flex items-center justify-between mb-4">
              <span class="bg-orange-50 text-[#F17216] text-[11px] font-bold px-3 py-1.5 rounded-lg">
                {{ pkg.duration }}
              </span>
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4 text-[#F17216]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-sm font-bold text-[#F17216]">{{ pkg.rating }}</span>
              </div>
            </div>

            <!-- Title & Description -->
            <h3 class="text-lg font-extrabold text-gray-900 mb-2 leading-tight">
              {{ pkg.title }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {{ pkg.description }}
            </p>

            <!-- Price & Details Footer -->
            <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <div class="flex flex-col">
                <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">From</span>
                <span class="text-xl font-black text-[#F17216]">
                  KSh {{ pkg.price.toLocaleString('en-KE') }}
                </span>
              </div>
              
              <!-- Interaction: Click event added here -->
              <button @click="selectedPackage = pkg" class="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-[#F17216] transition group/btn">
                Details
                <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SIMPLE DETAILS MODAL (Interactive Change) -->
    <transition name="fade">
      <div v-if="selectedPackage" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="selectedPackage = null"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-[2.5rem] max-w-lg w-full overflow-hidden shadow-2xl">
          <img :src="selectedPackage.image" class="w-full h-48 object-cover" />
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-2xl font-black text-gray-900">{{ selectedPackage.title }}</h2>
              <button @click="selectedPackage = null" class="text-gray-400 hover:text-gray-900">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <p class="text-gray-500 mb-6">{{ selectedPackage.description }} Our expert guides ensure an unforgettable journey through East Africa's most iconic landscapes.</p>
            
            <div class="flex items-center justify-between">
              <div class="text-[#F17216]">
                <p class="text-xs font-bold uppercase">Starting Price</p>
                <p class="text-2xl font-black">KSh {{ selectedPackage.price.toLocaleString('en-KE') }}</p>
              </div>
              <button class="bg-[#F17216] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition active:scale-95">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedPackage = ref(null)

const packages = [
  {
    title: 'Maasai Mara Classic Safari',
    duration: '7 Days',
    rating: '4.9',
    description: 'All-inclusive tour with luxury tented camps and game drives.',
    price: 185500,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215760/maasaimara_ygaud9.jpg'
  },
  {
    title: 'Amboseli Wildlife Escape',
    duration: '5 Days',
    rating: '4.8',
    description: 'View Kilimanjaro while watching world-famous elephant herds.',
    price: 125000,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215756/amboseli_ty1yef.jpg'
  },
  {
    title: 'Bush to Beach Experience',
    duration: '10 Days',
    rating: '5.0',
    description: 'The perfect mix of wild savanna and Diani coastline.',
    price: 245000,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215756/beach_sgfvbf.avif'
  },
  {
    title: "Hell's Gate Adventure",
    duration: '4 Days',
    rating: '4.7',
    description: 'Cycling through gorges and rock climbing in Naivasha.',
    price: 45000,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215757/hellgate_utmi2x.jpg'
  },
  {
    title: "Samburu Cultural Trail",
    duration: '6 Days',
    rating: '4.8',
    description: 'Discover the unique "Special Five" and local Samburu culture.',
    price: 142000,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215762/samburu_eiubuz.jpg'
  },
  {
    title: "Mount Kenya Trek",
    duration: '6 Days',
    rating: '4.9',
    description: 'A challenging trek to conquer Point Lenana peak.',
    price: 85000,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215760/mountkenya_w8qyvr.jpg'
  },
  {
    title: "Tsavo Wilderness Explorer",
    duration: '8 Days',
    rating: '4.6',
    description: 'Walk through Mzima Springs and follow red elephant trails.',
    price: 165000,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215763/tsavo_y4xy6x.jpg'
  },
  {
    title: "Diani Beach Relaxation",
    duration: '5 Days',
    rating: '5.0',
    description: 'Crystal waters, white sands, and sunset dhow cruises.',
    price: 95000,
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215756/diani_au8diu.avif'
  }
]
</script>

<style scoped>
section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Modal Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>