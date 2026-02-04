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
             class="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
          
          <!-- Package Image -->
          <div class="relative h-56 overflow-hidden">
            <img :src="pkg.image" :alt="pkg.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
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
              <span class="text-xl font-black text-[#F17216]">
                ${{ pkg.price.toLocaleString() }}
              </span>
              <a href="#" class="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-[#F17216] transition group">
                Details
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const packages = [
  {
    title: 'Maasai Mara Classic Safari',
    duration: '7 Days',
    rating: '4.9',
    description: 'All-inclusive tour with luxury tented camps.',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Amboseli Wildlife Escape',
    duration: '5 Days',
    rating: '4.8',
    description: 'View Kilimanjaro while watching elephant herds.',
    price: 890,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Bush to Beach Experience',
    duration: '10 Days',
    rating: '5.0',
    description: 'The perfect mix of savanna and coastline.',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1589197331516-4d845f3eb63a?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: "Hell's Gate Adventure",
    duration: '4 Days',
    rating: '4.7',
    description: 'Cycling and rock climbing in Naivasha.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1523805081730-61f1c046bd27?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: "Samburu Cultural Trail",
    duration: '6 Days',
    rating: '4.8',
    description: 'Discover the unique "Special Five" and local culture.',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1519066632447-479e4f37e980?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: "Mount Kenya Trek",
    duration: '6 Days',
    rating: '4.9',
    description: 'Conquer the second highest peak in Africa.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: "Tsavo Wilderness Explorer",
    duration: '8 Days',
    rating: '4.6',
    description: 'Walk through Mzima Springs and red elephant trails.',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1534149043227-d4677db30297?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: "Diani Beach Relaxation",
    duration: '5 Days',
    rating: '5.0',
    description: 'Crystal waters, white sands, and sunset dhow cruises.',
    price: 780,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop'
  }
]
</script>

<style scoped>
/* Ensuring smooth transitions for hover effects */
section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>