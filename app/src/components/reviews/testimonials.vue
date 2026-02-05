<script setup>
import { ref, computed } from 'vue'

// --- 1. STATE ---
const activeTab = ref('All Reviews')
const tabs = ['All Reviews', 'Verified Trips', 'Video Stories', 'Recent']

// --- 2. DATA (Populated to 12 items) ---
const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'London, UK',
    trip: '12 Days Luxury Safari',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    verified: true,
    category: 'Verified Trips',
    text: "An absolute dream come true. The Maasai Mara migration was spectacular. Our guide Samuel knew exactly where to spot the big cats. Best trip of our lives!"
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    location: 'Madrid, Spain',
    trip: 'Bush & Beach Combo',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    verified: true,
    category: 'Verified Trips',
    text: "The logistics were flawless. From airport pickup in Nairobi to the beach in Diani, everything was handled. Seeing a leopard in the wild was the highlight!"
  },
  {
    id: 3,
    name: 'Elena & David',
    location: 'Berlin, Germany',
    trip: 'Amboseli & Tsavo East',
    avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
    rating: 4,
    verified: true,
    category: 'Recent',
    text: "Amboseli with the elephants against Kilimanjaro is a view I'll never forget. Highly professional staff and beautiful lodges."
  },
  {
    id: 4,
    name: 'James Wilson',
    location: 'New York, USA',
    trip: '7 Days Classic Kenya',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    verified: true,
    category: 'Video Stories',
    text: "I captured the entire Great Migration on my 4K camera. The vantage points the team provided were better than I ever expected. A filmmaker's paradise!"
  },
  {
    id: 5,
    name: 'Sophia Chen',
    location: 'Singapore',
    trip: '10 Days Culture & Wild',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 5,
    verified: true,
    category: 'Verified Trips',
    text: "The connection with the Maasai community felt so authentic. Not your typical tourist trap, but a genuine cultural exchange. My favorite part of the trip."
  },
  {
    id: 6,
    name: 'Liam O’Connor',
    location: 'Dublin, Ireland',
    trip: '5 Days Watamu Retreat',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    rating: 4,
    verified: true,
    category: 'Recent',
    text: "Watamu is a hidden gem. The seafood, the sun, and the snorkeling were perfect. Momak Adventures handled the airport transfers perfectly."
  },
  {
    id: 7,
    name: 'Amara Diop',
    location: 'Paris, France',
    trip: '14 Days Grand East Africa',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    rating: 5,
    verified: true,
    category: 'Video Stories',
    text: "From the dusty plains to the crystal blue waters of Zanzibar, I recorded it all. Kenya has my heart. Thank you for the trip of a lifetime!"
  },
  {
    id: 8,
    name: 'Hans Müller',
    location: 'Munich, Germany',
    trip: '6 Days Amboseli Explorer',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 5,
    verified: true,
    category: 'Verified Trips',
    text: "Professional from start to finish. Everything was on time, the vehicle was clean, and our guide was a master tracker. Saw the Big Five in 48 hours!"
  },
  {
    id: 9,
    name: 'Chloe Thompson',
    location: 'Sydney, Australia',
    trip: '9 Days Trekking Adventure',
    avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
    rating: 4,
    verified: true,
    category: 'Recent',
    text: "Hiking Mt. Kenya was tough but so rewarding. The team made sure we were safe, hydrated, and well-fed. The views at sunrise were worth every step."
  },
  {
    id: 10,
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    trip: '4 Days Masai Mara Express',
    avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    rating: 5,
    verified: true,
    category: 'Video Stories',
    text: "Short trip but huge impact! Captured a pride of lions on video. The equipment provided in the safari jeep made charging my gear so easy."
  },
  {
    id: 11,
    name: 'Isabella Rossi',
    location: 'Rome, Italy',
    trip: '12 Days Honeymoon Special',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    rating: 5,
    verified: true,
    category: 'Verified Trips',
    text: "The private dinners under the stars were so romantic. Every detail of our honeymoon was tailored to us. We felt like royalty in the bush."
  },
  {
    id: 12,
    name: 'Noah Wright',
    location: 'Toronto, Canada',
    trip: '8 Days Hell’s Gate Adventure',
    avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
    rating: 5,
    verified: true,
    category: 'Recent',
    text: "Mountain biking through Hell’s Gate was the highlight of our year. High adrenaline and incredible geological formations. Would do it again tomorrow!"
  }
]

// --- 3. LOGIC ---
const filteredReviews = computed(() => {
  if (activeTab.value === 'All Reviews') return reviews
  return reviews.filter(r => r.category === activeTab.value)
})
</script>

<template>
  <section class="py-16 bg-[#FDFDFD] font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- TABS NAVIGATION -->
      <div class="flex items-center space-x-8 md:space-x-12 border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="activeTab = tab"
          class="pb-4 text-sm md:text-base font-bold transition-all relative whitespace-nowrap"
          :class="activeTab === tab ? 'text-[#F17216]' : 'text-gray-400 hover:text-gray-600'"
        >
          {{ tab }}
          <div v-if="activeTab === tab" class="absolute bottom-0 left-0 w-full h-1 bg-[#F17216] rounded-t-full"></div>
        </button>
      </div>

      <!-- REVIEWS GRID -->
      <transition-group 
        tag="div" 
        name="list" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <div 
          v-for="review in filteredReviews" 
          :key="review.id"
          class="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
        >
          <!-- Top Row -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex gap-1">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= review.rating ? 'text-[#F1B12E]' : 'text-gray-200'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div v-if="review.verified" class="bg-[#EBF3FF] text-[#3B82F6] flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
               Verified Trip
            </div>
          </div>

          <!-- Review Text -->
          <p class="text-gray-700 italic text-lg leading-relaxed mb-10 flex-grow font-medium">
            “{{ review.text }}”
          </p>

          <!-- User Info -->
          <div class="flex items-center gap-4 pt-6 border-t border-gray-50">
            <img :src="review.avatar" :alt="review.name" class="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-md border-2 border-white" />
            <div>
              <h4 class="text-base font-black text-gray-900 leading-none mb-1.5">{{ review.name }}</h4>
              <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                {{ review.location }} • {{ review.trip }}
              </p>
            </div>
          </div>
        </div>
      </transition-group>

    </div>
  </section>
</template>