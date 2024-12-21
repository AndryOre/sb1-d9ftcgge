export const IntegrationCard = `
  <a href="#" class="block">
    <div class="bg-card hover:bg-card-hover transition-colors duration-200 rounded-lg p-6 relative">
      <!-- NEW Badge -->
      <template x-if="integration.isNew">
        <div class="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-astro-orange text-black rounded">NEW</div>
      </template>

      <div class="flex items-start gap-4">
        <!-- Icon -->
        <div class="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
          <template x-if="integration.icon">
            <img :src="integration.icon" :alt="integration.name" class="w-6 h-6">
          </template>
          <template x-if="!integration.icon">
            <span x-text="integration.name.charAt(0)" class="text-xl font-bold text-white"></span>
          </template>
        </div>

        <div class="min-w-0">
          <!-- Title and Official Badge -->
          <div class="flex items-center gap-2 mb-1">
            <h3 class="font-semibold text-lg text-white truncate" x-text="integration.name"></h3>
            <template x-if="integration.official">
              <svg class="w-5 h-5 text-astro-blue shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </div>

          <!-- Description -->
          <p class="text-[#94A3B8] text-sm mb-4 line-clamp-2" x-text="integration.description"></p>

          <!-- Downloads -->
          <div class="flex items-center gap-1 text-[#64748B]">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-sm" x-text="integration.downloads"></span>
          </div>
        </div>
      </div>
    </div>
  </a>
`