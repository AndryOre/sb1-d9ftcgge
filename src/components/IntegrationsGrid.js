export const IntegrationsGrid = `
  <div class="flex-1">
    <!-- Recently Added Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-white">Recently added</h2>
        <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
          View all new integrations
        </a>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template x-for="integration in recentIntegrations" :key="integration.name">
          <div x-html="integrationCard(integration)"></div>
        </template>
      </div>
    </div>

    <!-- Popular Integrations Section -->
    <div>
      <h2 class="text-2xl font-bold text-white mb-4">Popular integrations</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template x-for="integration in popularIntegrations" :key="integration.name">
          <div x-html="integrationCard(integration)"></div>
        </template>
      </div>
    </div>
  </div>
`