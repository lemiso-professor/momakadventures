<template>
  <!-- Main Hero Container -->
  <section class="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-gray-900">
    
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
            alt="East Africa Safari"
          />
        </div>
      </transition-group>
      
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/40 z-10"></div>
    </div>

    <!-- 2. STATIC CONTENT LAYER -->
    <div class="relative z-20 container mx-auto px-4 text-center text-white pb-12">
      <h2 class="text-3xl md:text-6xl font-bold mb-4 max-w-5xl mx-auto leading-tight drop-shadow-lg">
        Discover the Spirit of Africa
      </h2>
      
      <p class="text-base md:text-lg font-medium mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
        Hand-picked safari experiences through Kenya, Tanzania, and beyond.<br/>Encounter the legendary Big Five in their natural habitat.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="w-full sm:w-auto bg-[#F17216] hover:bg-[#D65D00] text-white px-8 py-3 rounded-lg font-bold text-base transition-all transform hover:scale-105 shadow-xl">
          View Packages
        </button>
        <button class="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-lg font-bold text-base transition-all transform hover:scale-105">
          Watch Video
        </button>
      </div>
    </div>

    <!-- 3. THE WAVY STRUCTURE (Bottom Divider) -->
    <!-- This div holds your wavy image at the very bottom -->
    <div class="absolute bottom-0 left-0 w-full z-30 leading-[0]">
        <!-- Replace 'path-to-your-wave-image.png' with your actual image path -->
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
  
  'https://res.cloudinary.com/drbhyey5b/image/upload/v1770152160/Safaris-Tours_nbozaa.jpg'
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
  100% { transform: scale(1.15); }
}

.animate-kenburns {
  animation: kenburns 7s ease-out forwards;
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