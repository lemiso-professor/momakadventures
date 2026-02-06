<template>
  <header class="fixed top-0 w-full z-50 shadow-md font-sans">
    
    <!-- 1. TOP UTILITY BAR (Hides on scroll) -->
    <div :class="['bg-[#2E251E] text-white transition-all duration-500 overflow-hidden border-b border-white/5', scrolled ? 'max-h-0 opacity-0' : 'max-h-24 py-2']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] md:text-[11px]">
        
        <!-- Left: Contact Info -->
        <div class="hidden md:flex items-center space-x-4 uppercase tracking-wider">
          <a href="tel:+254111555749" class="flex items-center gap-1.5 hover:text-[#F17216] transition-colors">
            <svg class="w-3 h-3 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +254 111 555 749
          </a>
          <a href="mailto:support@momakadventures.com" class="flex items-center gap-1.5 hover:text-[#F17216] transition-colors">
            <svg class="w-3 h-3 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            support@momakadventures.com
          </a>
        </div>

        <!-- Right: Auth Links -->
        <div class="flex items-center gap-4 ml-auto md:ml-0 font-bold tracking-widest uppercase text-[10px] md:text-xs">
  
  <!-- CASE A: User is NOT logged in -->
  <template v-if="!authStore.user">
    <router-link to="/register" class="flex items-center gap-1.5 hover:text-[#F17216] transition-colors">
      <svg class="w-3.5 h-3.5 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
      Register
    </router-link>

    <router-link to="/signin" class="flex items-center gap-1.5 hover:text-[#F17216] transition-colors border-l border-white/10 pl-4">
      <svg class="w-3.5 h-3.5 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      Login
    </router-link>
  </template>

  <!-- CASE B: User IS logged in -->
  <template v-else>
    <router-link to="/dashboard" class="flex items-center gap-1.5 hover:text-[#F17216] transition-colors">
      <svg class="w-3.5 h-3.5 text-[#F17216]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      Dashboard
    </router-link>

    <button @click="handleLogout" class="flex items-center gap-1.5 hover:text-red-500 transition-colors border-l border-white/10 pl-4">
      Logout
    </button>
  </template>

</div>
      </div>
    </div>

    <!-- 2. MAIN NAVIGATION -->
    <nav class="bg-[#6A6354] text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20 gap-2">
          
          <!-- Logo (shrink-0 prevents it from squishing) -->
          <router-link to="/" class="flex items-center gap-2 group shrink-0">
            <div class="bg-[#F17216] p-1.5 rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M3 21l8-14 4 7 4-10 4 17" /></svg>
            </div>
            <div>
              <h1 class="text-sm md:text-lg font-bold tracking-tight leading-none">Momak Adventures</h1>
              <p class="text-[7px] tracking-[0.2em] uppercase opacity-60 font-bold">Explore Africa</p>
            </div>
          </router-link>

          <!-- Desktop Menu (Changed lg to xl to prevent overlap) -->
          <div class="hidden xl:flex items-center space-x-3 xl:space-x-5">
            <router-link
              v-for="(item, index) in navigation"
              :key="index"
              :to="item.href"
              class="flex items-center gap-1 text-[10px] xl:text-[11px] font-bold tracking-wider transition-all hover:text-[#F17216] whitespace-nowrap"
              :class="route.path === item.href ? 'text-[#F17216]' : 'text-white'"
            >
              <span v-html="item.icon" class="w-3.5 h-3.5 opacity-70"></span>
              {{ item.name }}
            </router-link>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 shrink-0">
            <router-link to="/booking">
              <button class="bg-[#F17216] hover:bg-[#D65D00] text-white px-3 md:px-5 py-2 rounded-full font-bold text-[10px] md:text-[11px] tracking-widest transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                BOOK NOW
              </button>
            </router-link>

            <!-- Mobile Toggle Button (Changed lg to xl) -->
            <button @click="toggleMenu" class="xl:hidden p-1 text-white">
              <svg v-if="!isOpen" class="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              <svg v-else class="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Menu (Changed lg to xl) -->
      <transition 
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
      >
        <div v-if="isOpen" class="xl:hidden bg-[#5a5447] border-t border-[#7a7364] absolute w-full left-0 shadow-2xl z-40">
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
import { useRoute, useRouter } from "vue-router"; // 1. Added useRouter here
import { useAuthStore } from "@/stores/auth";    // 2. Added this import

const route = useRoute();
const router = useRouter();       // 3. Initialize router
const authStore = useAuthStore(); // 4. Initialize authStore

const isOpen = ref(false);
const scrolled = ref(false);

// 5. Add the logout function so the button works
const handleLogout = async () => {
  await authStore.logout();
  isOpen.value = false; // Close mobile menu if open
  router.push('/');    // Redirect to home
};

const navigation = [
  { name: "Home", href: "/", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` },
  { name: "Safaris", href: "/safaris", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
  { name: "Beach", href: "/beacholidays", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>` },
  { name: "Adventures", href: "/adventures", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>` },
  { name: "Packages", href: "/packages", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>` },
  { name: "Gallery", href: "/gallery", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>` },
  { name: "Reviews", href: "/reviews", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>` },
  { name: "Contact", href: "/contact", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>` },
  { name: "Airbnb", href: "/airbnb", icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` },
];

const toggleMenu = () => (isOpen.value = !isOpen.value);
const handleScroll = () => { scrolled.value = window.scrollY > 20; };

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>