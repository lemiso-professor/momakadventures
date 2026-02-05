<script setup>
// --- DATA ---
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

const waterSports = [
  { name: 'Kite Surfing', image: 'https://images.unsplash.com/photo-1500353391642-d812ef81970c?q=80&w=500&auto=format&fit=crop' },
  { name: 'Scuba Diving', image: 'https://images.unsplash.com/photo-1544551763-47a0159c9233?q=80&w=500&auto=format&fit=crop' },
  { name: 'Dhow Safaris', image: 'https://images.unsplash.com/photo-1510172951991-8594506604a8?q=80&w=500&auto=format&fit=crop' },
  { name: 'Dolphin Tours', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=500&auto=format&fit=crop' }
]
</script>

<template>
  <div class="bg-white font-sans text-gray-900 pb-20">
    
    <!-- 1. FAMILY FUN SECTION -->
    <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Family Fun</h2>
        <p class="text-gray-400 font-medium">Kids' clubs, water parks, and spacious family villas</p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          v-for="(item, index) in familyPackages" 
          :key="index"
          class="flex flex-col md:flex-row bg-[#F9F9F9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- Left: Image -->
          <div class="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img :src="item.image" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" alt="resort" />
          </div>
          <!-- Right: Content -->
          <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <span class="text-[#2DD4BF] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
              {{ item.badge }}
            </span>
            <h3 class="text-xl md:text-2xl font-black mb-4 leading-tight">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              {{ item.description }}
            </p>
            <button class="bg-[#F17216] text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-[#D65D00] transition w-fit">
              Explore Options
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. ADVENTURE & WATER SPORTS SECTION -->
    <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-12">Adventure & Water Sports</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        <div 
          v-for="sport in waterSports" 
          :key="sport.name"
          class="flex flex-col items-center group cursor-pointer"
        >
          <!-- Circular Image with border and shadow -->
          <div class="w-full aspect-square rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img :src="sport.image" :alt="sport.name" class="w-full h-full object-cover" />
          </div>
          <!-- Label -->
          <span class="mt-6 text-sm md:text-base font-bold text-center group-hover:text-[#F17216] transition-colors">
            {{ sport.name }}
          </span>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Ensure smooth font rendering */
h2, h3 {
  letter-spacing: -0.02em;
}
</style>