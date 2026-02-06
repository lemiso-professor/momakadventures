<template>
  <div class="min-h-screen bg-[#f8fafd] py-8 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-6xl mx-auto">
      
      <!-- HEADER -->
      <div class="mb-8 flex flex-col md:flex-row justify-between items-end border-b border-gray-100 pb-6 gap-4">
        <div>
          <h1 class="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Price Inquiry</h1>
          <p class="text-gray-500 text-sm font-medium">Requesting a custom quote for <span class="text-[#F17216] font-bold">{{ bookingData.name }}</span></p>
        </div>
        <div class="bg-[#F17216]/10 text-[#F17216] px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest">
          Inquiry Ref: #{{ Math.floor(Math.random() * 90000) + 10000 }}
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- INQUIRY FORM -->
        <div class="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          
          <!-- Section 1: Itinerary Request -->
          <div class="mb-10">
            <h2 class="text-sm font-black text-gray-900 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
              <span class="w-6 h-6 bg-[#F17216] text-white rounded-full flex items-center justify-center text-[10px]">1</span>
              Itinerary Request
            </h2>
            
            <div class="space-y-4">
              <!-- Row 1: Package Display -->
              <div class="flex flex-col bg-gray-50 p-4 rounded-xl border border-gray-100">
                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Selected Package</label>
                <p class="text-sm font-bold text-gray-800">{{ bookingData.name }}</p>
              </div>

              <!-- Row 2: Numbers (Days, Adults, Kids) -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="flex flex-col">
                  <label class="text-[10px] font-black text-gray-600 mb-2 uppercase tracking-widest">Planned Days</label>
                  <input type="number" v-model="userInput.days" min="1" class="border border-gray-200 rounded-xl p-3 text-sm focus:border-[#F17216] outline-none bg-white font-black" />
                </div>
                <div class="flex flex-col">
                  <label class="text-[10px] font-black text-gray-600 mb-2 uppercase tracking-widest">Adults</label>
                  <input type="number" v-model="userInput.adults" min="1" class="border border-gray-200 rounded-xl p-3 text-sm focus:border-[#F17216] outline-none bg-white font-black" />
                </div>
                <div class="flex flex-col">
                  <label class="text-[10px] font-black text-gray-600 mb-2 uppercase tracking-widest">Children (Under 12)</label>
                  <input type="number" v-model="userInput.children" min="0" class="border border-gray-200 rounded-xl p-3 text-sm focus:border-[#F17216] outline-none bg-white font-black" />
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Contact Information -->
          <div class="mb-10">
            <h2 class="text-sm font-black text-gray-900 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
              <span class="w-6 h-6 bg-[#F17216] text-white rounded-full flex items-center justify-center text-[10px]">2</span>
              Contact Information
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" class="border border-gray-200 rounded-xl p-3 text-sm focus:border-[#F17216] outline-none font-medium" />
              <input type="email" placeholder="Email Address" class="border border-gray-200 rounded-xl p-3 text-sm focus:border-[#F17216] outline-none font-medium" />
            </div>
          </div>

          <!-- Section 3: Message -->
          <div class="mb-8">
            <h2 class="text-sm font-black text-gray-900 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
              <span class="w-6 h-6 bg-[#F17216] text-white rounded-full flex items-center justify-center text-[10px]">3</span>
              Special Interests
            </h2>
            <textarea rows="4" placeholder="Mention any specific wildlife, luxury level, or dietary needs..." class="w-full border border-gray-200 rounded-xl p-4 text-sm bg-gray-50 focus:border-[#F17216] outline-none transition-all font-medium"></textarea>
          </div>

          <!-- Submit -->
          <button class="w-full md:w-auto bg-[#F17216] text-white px-12 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#F17216]/20 hover:bg-[#d9620f] transition-all transform active:scale-95">
            Submit Price Inquiry
          </button>
        </div>

        <!-- SIDEBAR INFO -->
        <div class="lg:col-span-4 space-y-4">
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img :src="bookingData.image" class="w-full h-40 object-cover" />
            <div class="p-6">
              <h3 class="text-base font-black text-gray-900 mb-4">{{ bookingData.name }}</h3>
              
              <div class="bg-[#fdf6f0] p-4 rounded-xl border border-[#F17216]/10 mb-6">
                <p class="text-[10px] font-black text-[#F17216] uppercase tracking-widest mb-2">Quote Status</p>
                <p class="text-xs text-gray-600 font-medium leading-relaxed">
                  Our safari experts will review your group size ({{ userInput.adults + userInput.children }} people) and duration to send a personalized quote within 24 hours.
                </p>
              </div>

              <div class="flex items-center gap-2 text-gray-400">
                <ShieldCheck class="w-4 h-4" />
                <span class="text-[10px] font-black uppercase tracking-widest">Official Inquiry</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { ShieldCheck } from 'lucide-vue-next'

const route = useRoute()

const bookingData = reactive({
  name: route.query.name || 'Custom Safari',
  image: route.query.image || 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600'
})

const userInput = reactive({ 
  days: 1,
  adults: 2,
  children: 0
})
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera - Remove arrows from number inputs for a cleaner look */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>