<template>
  <header class="fixed top-0 w-full z-50 shadow-md font-sans">
    
    <!-- 1. TOP UTILITY BAR (Hides on scroll) -->
    <div :class="['bg-[#2E251E] text-white transition-all duration-500 overflow-hidden border-b border-white/5', scrolled ? 'max-h-0 opacity-0' : 'max-h-24 py-2']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <!-- Left: Contact Info with Icons -->
        <div class="hidden md:flex items-center space-x-6 text-[11px] font-medium text-gray-300 uppercase tracking-wider">
          <a href="tel:+254700000000" class="flex items-center gap-2 hover:text-[#F17216] transition-colors">
            <svg class="w-3.5 h-3.5 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +254 111 555 749
          </a>
          <a href="mailto:info@momakadventures.com" class="flex items-center gap-2 hover:text-[#F17216] transition-colors">
            <svg class="w-3.5 h-3.5 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            support@momakadventures.com
          </a>
        </div>

        <!-- Right: Auth Links with Icons -->
        <div class="flex items-center gap-6 ml-auto md:ml-0 text-[11px] font-bold tracking-widest uppercase">
          <a href="#" class="flex items-center gap-2 hover:text-[#F17216] transition-colors">
            <svg class="w-4 h-4 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            Register
          </a>
          <a href="#" class="flex items-center gap-2 hover:text-[#F17216] transition-colors border-l border-white/10 pl-6">
            <svg class="w-4 h-4 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Login
          </a>
        </div>
      </div>
    </div>

    <!-- 2. MAIN NAVIGATION -->
    <nav class="bg-[#6A6354] text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          
          <!-- Logo with Mountain Icon -->
          <router-link to="/" class="flex items-center gap-3 group">
            <div class="bg-[#F17216] p-2 rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M3 21l8-14 4 7 4-10 4 17" /></svg>
            </div>
            <div>
              <h1 class="text-lg md:text-xl font-bold tracking-tight">Momak Adventures</h1>
              <p class="text-[8px] tracking-[0.3em] uppercase opacity-60 -mt-1 font-bold">Explore Africa</p>
            </div>
          </router-link>

          <!-- Desktop Menu with Icons -->
          <div class="hidden lg:flex items-center space-x-6">
            <router-link
              v-for="(item, index) in navigation"
              :key="index"
              :to="item.href"
              class="flex items-center gap-1.5 text-[11px] xl:text-[12px] font-bold tracking-wider transition-all hover:text-[#F17216]"
              :class="route.path === item.href ? 'text-[#F17216]' : 'text-white'"
            >
              <!-- Dynamic Icon Component/SVG -->
              <span v-html="item.icon" class="w-4 h-4 opacity-70"></span>
              {{ item.name }}
            </router-link>
            
            <!-- Book Now Button with Icon -->
            <router-link to="/booking">
              <button class="bg-[#F17216] hover:bg-[#D65D00] text-white px-6 py-2.5 rounded-full font-bold text-[11px] tracking-widest transition-all transform hover:scale-105 shadow-md flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                BOOK NOW
              </button>
            </router-link>
          </div>

          <!-- Mobile Toggle Button -->
          <div class="lg:hidden">
            <button @click="toggleMenu" class="text-white p-2">
              <svg v-if="!isOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition 
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
      >
        <div v-if="isOpen" class="lg:hidden bg-[#5a5447] border-t border-[#7a7364] absolute w-full left-0 shadow-2xl z-40">
          <div class="px-4 py-6 space-y-1">
            <router-link
              v-for="(item, index) in navigation"
              :key="index"
              :to="item.href"
              class="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold uppercase transition-colors"
              :class="route.path === item.href ? 'bg-[#F17216] text-white' : 'text-gray-200'"
              @click="isOpen = false"
            >
              <span v-html="item.icon" class="w-5 h-5"></span>
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>
  
  <div :class="scrolled ? 'h-16 md:h-20' : 'h-24 md:h-28'" class="transition-all duration-500"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isOpen = ref(false);
const scrolled = ref(false);

// Navigation with theme-specific SVG icons
const navigation = [
  { 
    name: "Home", 
    href: "/", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` 
  },
  { 
    name: "Safaris", 
    href: "/safaris", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` // Using heart as placeholder, but Safari icons are usually custom
  },
  { 
    name: "Beach Holidays", 
    href: "/beacholidays", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>` 
  },
  { 
    name: "Adventures", 
    href: "/adventures", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>` 
  },
  { 
    name: "Packages", 
    href: "/packages", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>` 
  },
  { 
    name: "Reviews", 
    href: "/reviews", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>` 
  },
  { 
    name: "Contact Us", 
    href: "/contact", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>` 
  },
  { 
    name: "Airbnb", 
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` 
  },
];

const toggleMenu = () => (isOpen.value = !isOpen.value);
const handleScroll = () => { scrolled.value = window.scrollY > 20; };

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>