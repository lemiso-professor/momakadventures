<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- HERO SECTION -->
    <div class="max-w-7xl mx-auto px-4 pt-8">
      <div class="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl">
        <!-- Background Image -->
        <img 
          src="https://res.cloudinary.com/drbhyey5b/image/upload/v1770198796/mtkenya_adventure_yufdmh.webp" 
          alt="Contact Hero" 
          class="absolute inset-0 w-full h-full object-cover"
        />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/40 flex flex-col justify-center px-12">
          <h1 class="text-4xl md:text-6xl font-black text-white mb-4">Let's Plan Your Safari</h1>
          <p class="text-white/90 text-lg md:text-xl max-w-2xl">
            We're experts in East African adventures. Reach out and start your journey.
          </p>
        </div>
      </div>
    </div>

    <!-- MAIN CONTENT AREA -->
    <div class="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- LEFT COLUMN: FORM & WHATSAPP -->
      <div class="lg:col-span-7 space-y-6">
        <!-- Message Form Card -->
        <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 class="text-2xl font-bold mb-8">Send us a message</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Row: First & Last Name -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input type="text" placeholder="John" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F17216] focus:border-[#F17216] outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input type="text" placeholder="Doe" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F17216] focus:border-[#F17216] outline-none transition-all" />
              </div>
            </div>

            <!-- Email Address -->
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" placeholder="john@example.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F17216] focus:border-[#F17216] outline-none transition-all" />
            </div>

            <!-- Subject Dropdown -->
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Subject</label>
              <select class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F17216] focus:border-[#F17216] outline-none appearance-none bg-no-repeat bg-[right_1rem_center] cursor-pointer">
                <option>Safari Inquiry</option>
                <option>Booking Modification</option>
                <option>Payment Issue</option>
                <option>Other</option>
              </select>
            </div>

            <!-- Message Textarea -->
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
              <textarea rows="5" placeholder="Tell us about your dream trip..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F17216] focus:border-[#F17216] outline-none transition-all resize-none"></textarea>
            </div>

            <!-- Submit Button -->
            <button class="w-full bg-[#F17216] hover:bg-[#d9620f] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#F17216]/20 transition-all transform active:scale-95">
              Send Message
            </button>
          </form>
        </div>

        <!-- WhatsApp Banner -->
        <div class="bg-[#e8f5ed] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between border border-green-100">
          <div class="flex items-center gap-4 mb-4 md:mb-0">
            <div class="bg-[#25D366] p-3 rounded-xl">
              <MessageSquare class="text-white w-6 h-6" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900">Instant Support</h3>
              <p class="text-sm text-gray-600 font-medium">Chat with us directly on WhatsApp</p>
            </div>
          </div>
          <a href="#" class="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-xl font-bold transition-all">
            WhatsApp Us
          </a>
        </div>
      </div>

      <!-- RIGHT COLUMN: CONTACT INFO & MAP -->
      <div class="lg:col-span-5 space-y-6">
        
        <!-- Info Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Phone Card -->
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <Phone class="text-[#F17216] w-6 h-6 mb-4" />
            <h3 class="font-bold text-lg mb-4">Phone</h3>
            <p class="text-gray-600 text-sm font-medium">+254 700 000 000</p>
            <p class="text-gray-600 text-sm font-medium">+254 711 111 111</p>
          </div>
          <!-- Email Card -->
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <Mail class="text-[#F17216] w-6 h-6 mb-4" />
            <h3 class="font-bold text-lg mb-4">Email</h3>
            <p class="text-gray-600 text-sm font-medium">hello@momakadventures.com</p>
            <p class="text-gray-600 text-sm font-medium">bookings@momakadventures.com</p>
          </div>
        </div>

        <!-- Office & Map Card -->
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="p-8 pb-4">
            <h3 class="font-bold text-lg">Our Office</h3>
            <p class="text-gray-500 text-sm mt-1">Karen Office Park, Langata Road, Nairobi, Kenya</p>
          </div>
          
          <!-- Map (Using an iframe for a real map placeholder) -->
          <div class="h-80 w-full px-6 pb-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.03154101452!2d36.7214!3d-1.3464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjAnNDcuMCJTIDM2wrA0MycxNy4wIkU!5e0!3m2!1sen!2ske!4v1634567890123!5m2!1sen!2ske"
              class="w-full h-full rounded-2xl border-0  opacity-90"
              allowfullscreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="flex items-center gap-6 pt-4">
          <span class="text-[10px] font-black tracking-widest text-gray-400 uppercase">Follow Us:</span>
          <div class="flex gap-4">
            <a href="#" class="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-600 hover:text-[#F17216] transition-all">
              <Globe class="w-5 h-5" />
            </a>
            <a href="#" class="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-600 hover:text-[#F17216] transition-all">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-600 hover:text-[#F17216] transition-all">
              <Share2 class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { 
  Phone, Mail, MessageSquare, 
  Globe, Instagram, Share2 
} from 'lucide-vue-next'

const handleSubmit = () => {
  alert("Message sent! We'll get back to you soon.");
}
</script>

<style scoped>
/* Custom dropdown arrow for standard select */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-size: 1.2rem;
}
</style>