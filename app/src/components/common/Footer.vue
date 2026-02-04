<template>
  <!-- Main Footer Wrapper -->
  <footer class="relative mt-40 font-sans">
    
    <!-- 1. THE HORIZON SILHOUETTE -->
    <div class="absolute -top-[63px] md:-top-[95px] left-0 w-full z-20 pointer-events-none">
      <img 
        src="https://res.cloudinary.com/drbhyey5b/image/upload/v1770152025/bg-footer_p3pcus.png" 
        class="w-full h-16 md:h-24 object-cover object-bottom" 
        alt="safari silhouette"
      />
    </div>

    <!-- 2. MAIN FOOTER BODY -->
    <!-- bg-black provides a neutral base for your B&W photo -->
    <div class="relative w-full overflow-hidden bg-black py-20 pt-28 border-t border-white/5">
      
      <!-- BACKGROUND IMAGE LAYER -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <!-- REPLACE THE SRC BELOW WITH YOUR UPLOADED B&W PHOTO URL -->
        <img 
          src="https://res.cloudinary.com/drbhyey5b/image/upload/v1770213968/Screenshot_2026-02-04_170048-modified_b7kklv.png" 
          class="w-full h-full object-cover opacity-50" 
          alt="custom footer background"
        />
        <!-- Neutral Dark Overlay: Ensures your white text is easy to read -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
      </div>

      <!-- 3. FOOTER CONTENT LAYER -->
      <div class="relative z-10 container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-400">
          
          <!-- Column 1: Brand & Socials -->
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="bg-[#F17216] p-2 rounded-lg shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M3 21l8-14 4 7 4-10 4 17" /></svg>
              </div>
              <h2 class="text-xl font-bold text-white leading-tight uppercase tracking-tighter">Momak<br/>Adventures</h2>
            </div>
            <p class="text-sm leading-relaxed opacity-70">
              At Momak Adventures, we specialize in crafting immersive, eco-friendly journeys across the breathtaking landscapes of Kenya and East Africa.
            </p>
            <div class="space-y-4 pt-4">
              <p class="text-[#F17216] font-bold text-xs uppercase tracking-[0.2em]">Follow Us</p>
              <div class="flex gap-3">
                <a v-for="icon in ['instagram', 'facebook-f', 'twitter', 'linkedin-in']" :key="icon" href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F17216] hover:border-[#F17216] text-white transition-all duration-300">
                  <i :class="`fab fa-${icon} text-sm`"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="lg:pl-8">
            <h3 class="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Quick Links</h3>
            <ul class="space-y-4 text-sm">
              <li v-for="link in links" :key="link" class="flex items-center gap-2 hover:text-[#F17216] cursor-pointer transition-colors group">
                <span class="text-[#F17216] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                {{ link }}
              </li>
            </ul>
          </div>

          <!-- Column 3: Get In Touch -->
          <div class="space-y-6">
            <h3 class="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Get In Touch</h3>
            <div class="space-y-5">
                <div class="flex gap-4 items-start text-sm">
                    <i class="fas fa-map-marker-alt text-[#F17216] mt-1"></i>
                    <p>12th Floor, Corner House<br/>Kimathi Street, Nairobi, Kenya</p>
                </div>
                <div class="flex gap-4 items-center text-sm">
                    <i class="fas fa-phone-alt text-[#F17216]"></i>
                    <p>+254 712 345 678</p>
                </div>
                <div class="flex gap-4 items-center text-sm">
                    <i class="fas fa-envelope text-[#F17216]"></i>
                    <p>info@momakadventures.co.ke</p>
                </div>
            </div>
            <button class="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all shadow-xl shadow-green-900/20">
              <i class="fab fa-whatsapp text-xl"></i>
              WhatsApp Booking
            </button>
          </div>

          <!-- Column 4: Newsletter -->
          <div class="space-y-6">
            <h3 class="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Newsletter</h3>
            <p class="text-sm opacity-70">Subscribe to receive the latest travel deals and safari inspiration.</p>
            <div class="space-y-3">
              <input type="email" placeholder="Your Email Address" class="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm text-white focus:outline-none focus:border-[#F17216] transition-colors" />
              <button class="w-full bg-[#F17216] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#D65D00] transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <!-- Copyright & Legal -->
        <div class="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <p>© 2024 MOMAK ADVENTURES. ALL RIGHTS RESERVED.</p>
          <div class="flex gap-8">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" class="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  'Home', 'Safaris', 'Beach Holidays', 'Adventures', 
  'Packages', 'Reviews', 'Contact Us', 'Airbnb'
]
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

img {
    image-rendering: -webkit-optimize-contrast;
}
</style>