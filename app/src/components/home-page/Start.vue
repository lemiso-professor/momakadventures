<template>
  <div>
    <!-- TESTIMONIAL SECTION -->
    <section class="bg-[#1D1611] py-24 px-4 text-center text-white">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">What Our Adventurers Say</h2>
        
        <!-- Star Rating -->
        <div class="flex justify-center gap-1 mb-10">
          <svg v-for="i in 5" :key="i" class="w-5 h-5 text-[#F17216]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <!-- Quote -->
        <blockquote class="text-lg md:text-2xl italic leading-relaxed mb-12 opacity-90 font-light">
          "The safari in Maasai Mara was beyond my wildest dreams. Our guide from Momak Adventures was incredibly knowledgeable and found all of the Big Five in just two days! The attention to detail and personal service made this the trip of a lifetime."
        </blockquote>

        <!-- Profile Info -->
        <div class="flex flex-col items-center">
          <!-- <div class="w-16 h-16 rounded-full border-2 border-[#F17216] p-1 mb-4">
             Replace with actual image 
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Sarah Jenkins" 
              class="w-full h-full rounded-full object-cover"
            />
          </div> -->
          <h4 class="text-xl font-bold mb-1">Sarah Wambui</h4>
          <span class="text-[#F17216] text-xs font-bold tracking-[0.2em] uppercase">Nairobi , Kenya</span>
        </div>
      </div>
    </section>

  <!-- NEWSLETTER / CTA SECTION -->
<section class="bg-white py-16 px-4">
  <div class="max-w-6xl mx-auto bg-[#F17216] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-orange-200">
    
    <!-- Text content -->
    <div class="text-white text-center md:text-left flex-1">
      <h2 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
        Ready for your next adventure?
      </h2>
      <p class="text-white/90 text-lg">
        Subscribe to get exclusive safari deals and travel tips directly in your inbox.
      </p>
    </div>

    <!-- Form -->
    <div class="w-full md:w-auto flex flex-col sm:flex-row gap-3">
      <!-- Added bg-white explicitly and border-none -->
      <input 
        type="email" 
        placeholder="Your email address" 
        class="bg-white text-gray-800 px-6 py-4 rounded-xl w-full md:w-80 outline-none border-none focus:ring-4 focus:ring-black/10 placeholder:text-gray-400"
      />
      <button class="bg-[#1D1611] text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg active:scale-95 whitespace-nowrap">
        Join Now
      </button>
    </div>

  </div>
</section>
  </div>
</template>

<script setup>
// No complex logic needed for these static views
</script>

<style scoped>
/* Ensuring fonts look clean */
section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>