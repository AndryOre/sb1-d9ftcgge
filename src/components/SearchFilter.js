export const SearchFilter = `
  <div class="w-[280px]">
    <!-- Search Input -->
    <div class="relative mb-8">
      <input 
        type="text" 
        x-model="searchQuery"
        placeholder="Search for an integration"
        class="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1E2432] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4B5563]"
      >
      <div class="absolute left-3 top-3.5 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-white mb-6">Filter</h2>
      
      <!-- Categories -->
      <div class="border-t border-[#374151]">
        <button 
          @click="toggleCategoriesVisible"
          class="flex items-center justify-between w-full py-4 text-lg text-[#94A3B8] hover:text-white transition-colors"
        >
          <span>Categories</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            class="w-4 h-4 transition-transform duration-200"
            :class="categoriesVisible ? 'rotate-180' : ''"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        
        <div x-show="categoriesVisible" class="space-y-3 py-2">
          <template x-for="category in categories" :key="category">
            <label class="flex items-center gap-3 group cursor-pointer">
              <div class="relative">
                <input 
                  type="checkbox"
                  :value="category"
                  @click="toggleCategory(category)"
                  :checked="selectedCategories.includes(category)"
                  class="peer sr-only"
                >
                <div class="w-5 h-5 border-2 border-[#374151] rounded peer-checked:border-astro-blue peer-checked:bg-astro-blue"></div>
                <svg 
                  class="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="3" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span 
                class="text-[#94A3B8] group-hover:text-white transition-colors"
                x-text="category"
              ></span>
            </label>
          </template>
        </div>
      </div>
    </div>
  </div>
`