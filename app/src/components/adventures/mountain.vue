<script setup>
const stats = [
  { value: '12k+', label: 'Trees Planted' },
  { value: '100%', label: 'Local Guides' },
  { value: '250', label: 'Miles of Trail Managed' }
]
</script>

<template>
  <section class="bg-[#2D3A2D] text-white py-16 md:py-24 relative overflow-hidden font-sans">
    
    <!-- Large Mountain Background Graphic (Subtle) -->
    <div class="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none hidden lg:block">
      <svg class="w-[600px] h-[600px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19.77h20L12 2zm0 3.77l6.6 11.5H5.4L12 5.77z" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <!-- Left Content -->
        <div>
          <!-- Heading -->
          <h2 class="text-3xl md:text-5xl font-black uppercase leading-[1.1] tracking-tight mb-6">
            Respect the mountain,<br />
            <span class="text-[#F17216]">Preserve the wild</span>
          </h2>

          <!-- Description -->
          <p class="text-white/70 text-base md:text-lg max-w-xl mb-12 font-medium leading-relaxed">
            We are committed to low-impact tourism. 5% of every booking goes towards 
            local reforestation projects on the slopes of Mt. Kenya and trail 
            maintenance in our national parks.
          </p>

          <!-- Stats Row -->
          <div class="flex flex-wrap gap-8 md:gap-16">
            <div v-for="stat in stats" :key="stat.label">
              <p class="text-[#F17216] text-3xl md:text-5xl font-black mb-2">{{ stat.value }}</p>
              <p class="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50 whitespace-nowrap">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side Graphic (Visible on Desktop only) -->
        <div class="hidden lg:flex justify-end opacity-20">
          <!-- Styled Mountain Graphic to match the image -->
          <div class="relative w-80 h-80">
             <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
               <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
             </svg>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Matching the heavy typography from the image */
h2 {
  font-family: 'Inter', sans-serif; /* Ensure you have a bold sans-serif loaded */
}
</style>