<script setup>
// --- DATA ---
const videoStories = [
  {
    title: '"Unbelievable Wildlife Encounters"',
    author: 'The Henderson Family • 10-day Safari Adventure',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: '"Hot Air Ballooning Over the Mara"',
    author: 'James & Claire • Anniversary Special',
    image: 'https://images.unsplash.com/photo-1533561052604-c3eba0155530?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
]
</script>

<template>
  <div class="bg-white font-sans text-gray-900 pb-20">
    
    <!-- 1. VIDEO STORIES SECTION -->
    <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Video Stories</h2>
        <a href="#" class="text-[#F17216] font-bold text-sm hover:underline transition-all">
          Watch all on YouTube
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(video, index) in videoStories" 
          :key="index"
          class="group relative aspect-[16/10] md:aspect-video rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
        >
          <!-- Background Image -->
          <img 
            :src="video.image" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            :alt="video.title" 
          />

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          
          <!-- Bottom Gradient (for text readability) -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <!-- Play Button (Centered) -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-[#F17216] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <!-- Text Content -->
          <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white pr-4">
            <h3 class="text-xl md:text-2xl font-bold mb-1 drop-shadow-md italic">{{ video.title }}</h3>
            <p class="text-xs md:text-sm font-medium opacity-80">{{ video.author }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. REVIEW CTA SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-[#F9F1E7] rounded-[2.5rem] py-16 px-6 md:px-12 text-center border border-[#E8DCCF]">
        
        <!-- Icon Badge -->
        <div class="flex justify-center mb-8">
          <div class="w-16 h-16 bg-[#F17216] rounded-full flex items-center justify-center shadow-lg text-white">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
        </div>

        <h2 class="text-3xl md:text-4xl font-extrabold mb-6">Have you traveled with us?</h2>
        <p class="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Your stories inspire fellow travelers to explore the wonders of East Africa. Share your experience and help others start their journey.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="w-full sm:w-auto bg-[#F17216] hover:bg-[#D65D00] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-700/20 transition-all transform hover:scale-105">
            Leave a Review
          </button>
          <button class="w-full sm:w-auto bg-white border-2 border-[#F17216] text-[#F17216] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#F1721610] transition-all transform hover:scale-105">
            View Tours
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Smooth font weights and rounding */
h2, h3 {
  letter-spacing: -0.02em;
}
</style>