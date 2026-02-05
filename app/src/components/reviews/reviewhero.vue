<template>
  <section class="py-16 bg-white font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 1. HERO BOX -->
      <div class="relative rounded-[2.5rem] overflow-hidden py-20 md:py-32 px-6 text-center text-white shadow-2xl">
        <!-- Background Image -->
        <img 
          src="https://images.unsplash.com/photo-1589197331516-4d845f3eb63a?q=80&w=2070&auto=format&fit=crop" 
          class="absolute inset-0 w-full h-full object-cover"
          alt="Mount Kilimanjaro"
        />
        <!-- Dark Overlay for Readability -->
        <div class="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Wall of Love
          </h2>
          <p class="text-base md:text-lg font-medium mb-10 opacity-90 leading-relaxed">
            Real stories from real travelers. Discover why thousands choose Momak Adventures 
            for their East African bucket-list adventures.
          </p>
          <button class="bg-[#F17216] hover:bg-[#D65D00] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
            Leave a Review
          </button>
        </div>
      </div>

      <!-- 2. STATS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        
        <!-- Happy Travelers -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center transition-all hover:shadow-md">
          <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
            Happy Travelers
          </span>
          <div class="flex items-center gap-4">
            <div class="text-[#F17216]">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0zM11 18H9a3 3 0 01-3-3V7a3 3 0 013-3h2a3 3 0 013 3v8a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span class="text-3xl font-black text-gray-900 tracking-tight">10k+</span>
          </div>
        </div>

        <!-- Average Rating -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center transition-all hover:shadow-md">
          <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
            Average Rating
          </span>
          <div class="flex items-center gap-4">
            <div class="text-[#F17216]">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-3xl font-black text-gray-900 tracking-tight">4.9/5</span>
          </div>
        </div>

        <!-- Verified Reviews -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center transition-all hover:shadow-md">
          <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
            Verified Reviews
          </span>
          <div class="flex items-center gap-4">
            <div class="text-[#3B82F6]">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <span class="text-3xl font-black text-gray-900 tracking-tight">2,500+</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Purely static display for this UI section
</script>

<style scoped>
/* Matching the bold typography exactly */
h2 {
  letter-spacing: -0.03em;
}
</style>