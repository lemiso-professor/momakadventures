<template>
  <div class="bg-white font-sans text-gray-900 pb-20">
    
    <!-- 1. FAMILY FUN SECTION (Refined & Linked) -->
    <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="mb-12">
        <span class="text-[#F17216] font-black text-xs tracking-[0.3em] uppercase">For All Ages</span>
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 mt-2 tracking-tight">Family Fun</h2>
        <p class="text-gray-400 font-medium mt-2">Kids' clubs, water parks, and spacious family villas</p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          v-for="(item, index) in familyPackages" 
          :key="index"
          class="flex flex-col md:flex-row bg-[#F9F9F9] rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
        >
          <!-- Left: Image -->
          <div class="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img :src="item.image" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="resort" />
          </div>

          <!-- Right: Content -->
          <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <span class="text-[#F17216] text-[10px] font-black uppercase tracking-[0.2em] mb-4 bg-white w-fit px-3 py-1 rounded-lg shadow-sm">
              {{ item.badge }}
            </span>
            <h3 class="text-xl md:text-2xl font-black mb-4 leading-tight group-hover:text-[#F17216] transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 text-xs font-medium leading-relaxed mb-8">
              {{ item.description }}
            </p>

            <!-- DYNAMIC LINK TO BOOKING PAGE -->
            <router-link 
              :to="{ 
                path: '/booking', 
                query: { name: item.title, image: item.image } 
              }" 
              class="bg-gray-900 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F17216] transition-all transform active:scale-95 shadow-lg shadow-gray-200 w-fit"
            >
              Inquire
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. ADVENTURE & WATER SPORTS SECTION -->
    <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <h2 class="text-2xl md:text-4xl font-black mb-12 tracking-tight">Adventure & Water Sports</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        <div 
          v-for="sport in waterSports" 
          :key="sport.name"
          class="flex flex-col items-center group cursor-pointer"
        >
          <div class="w-full aspect-square rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden transition-all duration-500 group-hover:border-[#F17216] group-hover:scale-105">
            <img :src="sport.image" :alt="sport.name" class="w-full h-full object-cover" />
          </div>
          <span class="mt-6 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-[#F17216] transition-colors">
            {{ sport.name }}
          </span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// FAMILY PACKAGES DATA
const familyPackages = [
  {
    badge: 'TOP FAMILY CHOICE',
    title: 'Baobab Beach Resort',
    description: 'A massive tropical paradise with 3 swimming pools, archery, and daily entertainment programs for kids and adults.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop'
  },
  {
    badge: 'NEW OPENING',
    title: 'Lamu Island Villas',
    description: 'Safe, enclosed beach villas perfect for large families. Experience authentic Swahili culture and calm waters.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
  }
]

// WATER SPORTS DATA
const waterSports = [
  { name: 'Kite Surfing', image: 'https://images.unsplash.com/photo-1500353391642-d812ef81970c?q=80&w=500&auto=format&fit=crop' },
  { name: 'Scuba Diving', image: 'https://images.unsplash.com/photo-1544551763-47a0159c9233?q=80&w=500&auto=format&fit=crop' },
  { name: 'Dhow Safaris', image: 'https://images.unsplash.com/photo-1510172951991-8594506604a8?q=80&w=500&auto=format&fit=crop' },
  { name: 'Dolphin Tours', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=500&auto=format&fit=crop' }
]
</script>

<style scoped>
/* Sharp transitions */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
}
</style>