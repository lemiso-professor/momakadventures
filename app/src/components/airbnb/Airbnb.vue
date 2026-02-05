<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Grid Container -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- PROPERTY CARD -->
      <div v-for="stay in stays" :key="stay.hid" class="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col items-center text-center p-6">
        
        <!-- Header: Heart & Title -->
        <div class="relative w-full">
          <span class="absolute left-0 top-0 text-red-500 text-2xl"></span>
          <h2 class="text-[#A32A2A] font-black text-xl leading-tight px-6 mb-4">
            {{ stay.title }}
          </h2>
        </div>

        <!-- Location -->
        <div class="flex items-center justify-center gap-1 mb-1">
          <MapPin class="w-5 h-5 text-gray-400" />
          <span class="font-black text-xl text-gray-800 tracking-tight">{{ stay.location }}</span>
          <span class="text-xl">🇰🇪</span>
        </div>
        <p class="text-gray-500 text-sm mb-4">{{ stay.city }}</p>

        <!-- HID & Image Count -->
        <!-- <div class="mb-4">
          <p class="font-black text-gray-800 text-lg mb-2">HID: {{ stay.hid }}</p>
          <div class="flex items-center justify-center gap-2 text-gray-500">
            <Camera class="w-4 h-4 text-red-400" />
            <span class="font-bold text-sm">{{ stay.images.length }}</span>
          </div>
        </div> -->

        <!-- Main Image Container -->
        <div 
          @click="openGallery(stay)"
          class="w-full bg-gray-50 rounded-3xl p-4 cursor-pointer hover:bg-gray-100 transition-colors mb-6 border border-gray-100 shadow-inner"
        >
          <img :src="stay.images[0]" class="w-full h-56 object-cover rounded-2xl shadow-md" />
        </div>

        <!-- Booking Actions -->
        <div class="flex items-center justify-center gap-4 mb-6">
          <a :href="generateWhatsAppLink(stay)" target="_blank" class="hover:scale-110 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="w-10 h-10" />
          </a>
          <button @click="generateWhatsAppLink(stay, true)" class="bg-[#21D366] text-white px-6 py-2 rounded-lg font-black text-lg shadow-lg hover:bg-[#1db95a] transition-all">
            Book Today!
          </button>
        </div>

        <!-- Specs -->
        <div class="text-sm font-bold text-gray-800 mb-6">
          {{ stay.guests }} Guests | {{ stay.bedrooms }} Bedroom | {{ stay.beds }} Bed | {{ stay.baths }} Bath
        </div>

        <!-- Price -->
        <div class="text-lg text-gray-700 mb-6">
          Rate Ksh. <span class="font-black text-xl text-black">{{ stay.price.toLocaleString() }}</span> per Night
        </div>

        <!-- Footer Stats -->
        <!-- <div class="flex items-center justify-center gap-6 text-gray-800 w-full pt-4 border-t border-gray-50">
          <div class="flex items-center gap-2">
            <Eye class="w-6 h-6" />
            <span class="font-black text-lg">{{ stay.views }}</span>
          </div>
          <div class="flex items-center gap-2">
            <MessageSquare class="w-6 h-6" />
            <span class="font-black text-lg">{{ stay.comments }}</span>
          </div>
        </div> -->
        
        <!-- <p class="mt-4 text-sm italic font-medium text-gray-500">
          Posted by <span class="font-black text-gray-800">{{ stay.postedBy }}</span>
        </p> -->
      </div>
    </div>

    <!-- SIMPLE GALLERY MODAL -->
    <div v-if="activeStay" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button @click="activeStay = null" class="absolute top-8 right-8 text-white"><X class="w-10 h-10" /></button>
      
      <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <img v-for="(img, idx) in activeStay.images" :key="idx" :src="img" class="w-full h-64 object-cover rounded-xl border-2 border-white/20" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Camera, Eye, MessageSquare, X } from 'lucide-vue-next'

const activeStay = ref(null)

const stays = ref([
  {
    title: "BEACHFRONT 1-BEDROOM APARTMENT IN NYALI",
    location: "NYALI",
    city: "Nyali",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800",
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800"
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    price: 12000.0,
 
  },
  {
    title: "SPACIOUS AND COZY 3 BEDROOM",
    location: "KILIMANI",
    city: "Nairobi Kilimani",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800"
    ],
    guests: 6,
    bedrooms: 3,
    beds: 3,
    baths: 3,
    price: 7500.0,
    
  }
])

const openGallery = (stay) => {
  activeStay.value = stay
}

const generateWhatsAppLink = (stay, redirect = false) => {
  const phone = "254700000000" // Replace with your actual WhatsApp number
  const message = encodeURIComponent(`Hi Momak Adventures! I'm interested in booking HID: ${stay.hid} (${stay.title}) in ${stay.location}.`)
  const url = `https://wa.me/${phone}?text=${message}`
  
  if (redirect) window.open(url, '_blank')
  return url
}
</script>