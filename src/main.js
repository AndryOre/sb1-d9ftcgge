import './style.css'
import Alpine from 'alpinejs'
import { integrationsList } from './data/integrations'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { SearchFilter } from './components/SearchFilter'
import { IntegrationCard } from './components/IntegrationCard'
import { IntegrationsGrid } from './components/IntegrationsGrid'

document.addEventListener('alpine:init', () => {
  Alpine.data('integrations', () => ({
    integrations: integrationsList,
    searchQuery: '',
    categoriesVisible: true,
    categories: [
      'Recently Added',
      'Official',
      'Frameworks',
      'Content Loaders',
      'Adapters',
      'CSS + UI',
      'Performance + SEO',
      'Analytics',
      'Accessibility',
      'Images + Media',
      'Dev Toolbar',
      'Utilities',
      'Uncategorized'
    ],
    selectedCategories: [],
    navigation: Navigation,
    hero: Hero,
    searchFilter: SearchFilter,
    integrationsGrid: IntegrationsGrid,
    integrationCard: () => IntegrationCard,

    toggleCategoriesVisible() {
      this.categoriesVisible = !this.categoriesVisible
    },

    toggleCategory(category) {
      const index = this.selectedCategories.indexOf(category)
      if (index === -1) {
        this.selectedCategories.push(category)
      } else {
        this.selectedCategories.splice(index, 1)
      }
    },

    get filteredIntegrations() {
      return this.integrations.filter(integration => {
        const matchesSearch = integration.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            integration.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        
        if (this.selectedCategories.length === 0) return matchesSearch
        
        const matchesCategory = this.selectedCategories.some(category => {
          if (category === 'Recently Added') return integration.isNew
          if (category === 'Official') return integration.official
          return integration.category === category
        })

        return matchesSearch && matchesCategory
      })
    },

    get recentIntegrations() {
      return this.filteredIntegrations.filter(i => i.isNew).slice(0, 2)
    },

    get popularIntegrations() {
      return this.filteredIntegrations
        .filter(i => !i.isNew)
        .sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads))
        .slice(0, 6)
    }
  }))
})

Alpine.start()