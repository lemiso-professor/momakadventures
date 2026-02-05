<template>
  <section class="py-16 bg-white font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- HEADER -->
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Traveler Moments
        </h2>
        <p class="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
          Experience the magic of East Africa through the lens of our global community.<br />
          From the golden plains of the Mara to the azure coasts of Diani.
        </p>
      </div>

      <!-- GALLERY GRID -->
      <!-- We use a 3-column grid for desktop with specific row heights -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[180px]">
        
        <!-- 1. ELEPHANT (Left Tall) -->
        <div class="md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Elephant in the wild"
          />
        </div>

        <!-- 2. LION (Center Small) -->
        <div class="rounded-2xl md:rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Lion portrait"
          />
        </div>

        <!-- 3. ACACIA TREE (Wide span across 2 columns) -->
        <div class="hidden md:block md:col-span-2 rounded-2xl md:rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1519066632447-479e4f37e980?q=80&w=1200&auto=format&fit=crop" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Savannah sunset"
          />
        </div>

        <!-- 4. OCEAN (Bottom Left Small) -->
        <div class="rounded-2xl md:rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Diani Beach coast"
          />
        </div>

        <!-- 5. LEOPARD (Bottom Center Tall) -->
        <div class="md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Leopard portrait"
          />
        </div>

        <!-- 6. HOT AIR BALLOON (Bottom Right) -->
        <div class="rounded-2xl md:rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1533561052604-c3eba0155530?q=80&w=800&auto=format&fit=crop" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Safari balloon"
          />
        </div>

      </div>

      <!-- Divider line matching your footer style -->
      <div class="mt-20 border-t border-gray-100"></div>

    </div>
  </section>
</template>

<script setup>
// No reactive logic needed for a static gallery
</script>

<style scoped>
/* Matching the bold typography scale */
h2 {
  letter-spacing: -0.02em;
}
</style>