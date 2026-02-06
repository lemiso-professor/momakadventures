<template>
  <section class="py-16 bg-[#F9FAFB] font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-12">
        <span class="text-[#F17216] font-black text-xs tracking-[0.3em] uppercase">Tailored Adventures</span>
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 mt-3 tracking-tight">Our Safari Collections</h2>
        <p class="text-gray-500 mt-4 max-w-2xl font-medium italic">Customized itineraries designed for the ultimate African experience. Inquire today for a personalized quote.</p>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(pkg, index) in packages" :key="index" 
             class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group">
          
          <div class="relative h-60 overflow-hidden">
            <img :src="pkg.image" :alt="pkg.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-lg font-black text-gray-900 mb-3 leading-tight group-hover:text-[#F17216] transition-colors">
              {{ pkg.title }}
            </h3>
            <p class="text-gray-400 text-xs font-medium leading-relaxed mb-6 flex-grow">
              {{ pkg.description }}
            </p>

            <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <span class="text-[10px] font-black text-[#F17216] uppercase tracking-widest">Price on Request</span>
              
              <button @click="selectedPackage = pkg" class="text-xs font-black text-gray-900 hover:text-[#F17216] flex items-center gap-1 transition-all">
                DETAILS <ArrowRight class="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PACKAGE DETAILS MODAL -->
    <transition name="modal">
      <div v-if="selectedPackage" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-sm" @click="selectedPackage = null"></div>
        
        <div class="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
          <img :src="selectedPackage.image" class="w-full h-52 object-cover" />
          
          <div class="p-8">
            <h2 class="text-2xl font-black text-gray-900 mb-4">{{ selectedPackage.title }}</h2>
            <p class="text-gray-500 font-medium text-sm leading-relaxed mb-8">
              {{ selectedPackage.description }} Our safari experts will coordinate with you to determine the best rates based on your travel dates and group preferences.
            </p>
            
            <div class="flex items-center justify-between gap-6 border-t border-gray-100 pt-6">
              <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Custom Itinerary</span>

              <router-link 
                :to="{ 
                  path: '/booking', 
                  query: { name: selectedPackage.title, image: selectedPackage.image } 
                }" 
                class="bg-[#F17216] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-[#F17216]/20 hover:bg-[#d9620f] transition-all"
              >
                Request Quote
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const selectedPackage = ref(null)

const packages = [
  { title: 'Maasai Mara Classic Safari', description: 'Experience the world-famous migration and the Big Five in luxury.', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215760/maasaimara_ygaud9.jpg' },
  { title: 'Amboseli Wildlife Escape', description: 'Stunning views of Kilimanjaro and legendary elephant herds.', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215756/amboseli_ty1yef.jpg' },
  { title: 'Bush to Beach Experience', description: 'A perfect transition from the savanna to the white sands of Diani.', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215756/beach_sgfvbf.avif' },
  { title: "Diani Beach Relaxation", description: 'Crystal waters and Swahili culture on Kenya\'s premier coastline.', image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770215756/diani_au8diu.avif' }
]
</script>