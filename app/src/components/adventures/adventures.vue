<template>
  <!-- Main Hero Container -->
  <section class="relative h-[85vh] w-full overflow-hidden flex items-center bg-gray-900">
    
    <!-- 1. BACKGROUND SLIDER LAYER -->
    <div class="absolute inset-0 z-0">
      <transition-group name="fade">
        <div 
          v-for="(image, index) in images" 
          :key="image"
          v-show="currentImageIndex === index"
          class="absolute inset-0 w-full h-full"
        >
          <img 
            :src="image" 
            class="w-full h-full object-cover animate-kenburns"
            alt="East Africa Adventure"
          />
        </div>
      </transition-group>
      
      <!-- Gradient Overlay: Darker at the bottom for text readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
    </div>

    <!-- TOP RIGHT BADGE -->
    <div class="absolute top-10 right-6 md:right-12 z-30">
      <span class="bg-[#F17216] text-white px-5 py-2.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-lg">
        Live Your Adventure
      </span>
    </div>

    <!-- 2. STATIC CONTENT LAYER (Aligned Left to match image) -->
    <div class="relative z-20 container mx-auto px-6 md:px-12 text-left text-white">
      <!-- Heading: Bold, Uppercase, Non-italicized to match reference -->
      <h2 class="text-5xl md:text-8xl font-bold mb-6 max-w-4xl leading-[0.9] uppercase tracking-tighter drop-shadow-xl">
        Unleash your spirit <br/> in <span class="text-[#F17216]">East Africa</span>
      </h2>
      
      <!-- Subtext: Left-aligned with max width -->
      <p class="text-base md:text-xl font-medium mb-10 max-w-2xl opacity-90 leading-relaxed drop-shadow-md">
        From the jagged peaks of Mt. Kenya to the gorge trails of Hell's Gate, we curate raw, unfiltered adventures for those who seek more.
      </p>

      <!-- Buttons: Left-aligned -->
      <div class="flex flex-row items-center justify-start gap-4 md:gap-6">
        <button class="bg-[#F17216] hover:bg-[#D65D00] text-white px-6 md:px-10 py-4 rounded-xl font-bold text-sm md:text-lg transition-all transform hover:scale-105 shadow-xl">
          View Expeditions
        </button>
        
        <!-- Glassmorphism "Watch Film" button -->
        <button class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 md:px-10 py-4 rounded-xl font-bold text-sm md:text-lg transition-all flex items-center gap-3">
          <div class="bg-white rounded-full p-1.5 flex items-center justify-center">
            <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          Watch Film
        </button>
      </div>
    </div>

    <!-- 3. THE WAVY STRUCTURE (Bottom Divider) -->
    <div class="absolute bottom-0 left-0 w-full z-30 leading-[0]">
        <img 
            src="https://res.cloudinary.com/drbhyey5b/image/upload/v1770152024/footer-light_wwdifr.png" 
            class="w-full h-auto min-h-[40px] md:min-h-[80px] object-cover object-top" 
            alt="wave divider"
        />
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const images = [
  'https://res.cloudinary.com/drbhyey5b/image/upload/v1770294019/Screenshot_2026-02-05_151658_imw6fi.png'
]

const currentImageIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 6000)
})
</script>

<style scoped>
@keyframes kenburns {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.animate-kenburns {
  animation: kenburns 8s ease-out forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>