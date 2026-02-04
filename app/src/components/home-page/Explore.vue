<template>
  <div>
    <!-- Section 1: Expert Services -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mb-10 text-left">
          <span class="text-[#F17216] font-bold text-xs tracking-widest uppercase">Explore Categories</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Our Expert Services</h2>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="group cursor-pointer">
            <div class="overflow-hidden rounded-2xl shadow-lg mb-4">
              <img 
                :src="service.image" 
                :alt="service.title" 
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ service.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Why Choose Us -->
    <section class="py-20 bg-[#F9F9F9]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Why Choose Momak Adventures</h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            We pride ourselves on providing authentic, safe, and sustainable travel experiences that connect you with the true heart of Africa.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(feature, index) in features" :key="index" class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-left transition-all hover:shadow-xl">
            <!-- Icon -->
            <div class="mb-6">
              <component :is="feature.icon" class="w-8 h-8 text-[#F17216]" />
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ShieldCheck, Map, Leaf } from 'lucide-vue-next'

// Data for Expert Services
const services = [
  {
    title: 'Wildlife Safaris',
    description: 'Experience the Big Five in their natural habitat across Kenya\'s national parks.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770152025/Botswana-Gallery-1_gfw6uh.jpg'
  },
  {
    title: 'Beach Getaways',
    description: 'Relax on the pristine white sands of the Swahili Coast and Zanzibar archipelago.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770198577/beach-front_xuty4l.webp'
  },
  {
    title: 'Adventure Tours',
    description: 'Hike Mount Kenya or explore the dramatic landscapes of the Great Rift Valley.',
    image: 'https://res.cloudinary.com/drbhyey5b/image/upload/v1770198796/mtkenya_adventure_yufdmh.webp'
  }
]

// Data for Why Choose Us
const features = [
  {
    title: 'Expert Local Guides',
    description: 'Our guides are born and raised here, offering deep cultural insights and wildlife expertise.',
    icon: ShieldCheck
  },
  {
    title: 'Customized Itineraries',
    description: 'We build trips around your schedule, interests, and budget—no two journeys are the same.',
    icon: Map
  },
  {
    title: 'Eco-Conscious Travel',
    description: 'We support wildlife conservation and local community development in everything we do.',
    icon: Leaf
  }
]
</script>