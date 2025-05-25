<template>
  <!-- ~/pages/index.vue -->
  
  <!-- Main Content -->
  <main class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
    <!-- Marketplace -->
    <section class="card p-4 lg:col-span-2 xl:col-span-3">
      <h3 class="text-2xl font-bold mb-4 text-app-text-primary">Island Marketplace</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div class="border border-app-border p-4 text-center rounded-md bg-app-distinct-bg text-app-text-secondary">Product 1</div>
        <div class="border border-app-border p-4 text-center rounded-md bg-app-distinct-bg text-app-text-secondary">Product 2</div>
        <div class="border border-app-border p-4 text-center rounded-md bg-app-distinct-bg text-app-text-secondary">Product 3</div>
        <div class="border border-app-border p-4 text-center rounded-md bg-app-distinct-bg text-app-text-secondary">Product 4</div>
      </div>
    </section>
    
    <!-- Sidebar -->
    <aside class="card p-4 space-y-6 xl:col-span-1">
      <div>
        <h4 class="text-xl font-semibold text-app-text-primary">Photo of the Week</h4>
        <div class="h-32 bg-app-distinct-bg flex items-center justify-center rounded-md mt-2 text-app-text-secondary">📷</div>
      </div>
      
      <div>
        <h4 class="text-xl font-semibold text-app-text-primary">Community Poll</h4>
        <p class="text-sm text-app-text-secondary mt-1">What's your favourite picnic spot?</p>
        
        <ul class="text-sm list-disc pl-5 mt-2 space-y-1 text-app-text-secondary">
          <li>Linklet Bay</li>
          <li>Castle o' Burrian</li>
          <li>Gill Pier</li>
        </ul>
      </div>
    </aside>
    
    <!-- Noticeboard -->
    <section class="card p-4 lg:col-span-2 xl:col-span-3">
      <h3 class="text-2xl font-bold mb-4 text-app-text-primary">Community Noticeboard</h3>
      
      <ul class="space-y-2 text-sm">
        <li class="border border-app-border p-3 rounded-md bg-app-highlight">
          "Need a ride to Kirkwall on Friday." – John M.
        </li>
        
        <li class="border border-app-border p-3 rounded-md bg-app-highlight">
          "Free firewood at the harbour." – Mags F.
        </li>
      </ul>
    </section>
    
    <!-- Events -->
    <section class="card p-4 lg:col-span-2 xl:col-span-3">
      <h3 class="text-2xl font-bold mb-4 text-app-text-primary">Upcoming Events</h3>
      
      <ul class="space-y-2 text-sm">
        <li class="border border-app-border p-3 rounded-md bg-app-distinct-bg text-app-text-secondary">
          May 15 – Westray Ceilidh @ Community Hall
        </li>
        
        <li class="border border-app-border p-3 rounded-md bg-app-distinct-bg text-app-text-secondary">May 20 – Beach Clean-Up @ Grobust</li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
/**
 * Defines page metadata for Nuxt.
 * - layout: Specifies the layout to be used for this page.
 * - title: Sets the title of the page, often used in browser tabs and SEO.
 * - icon: Defines an icon associated with the page (usage depends on how icons are implemented, e.g., for sidebar).
 * - sidebarGroup: Groups this page under 'pages' in a sidebar navigation structure.
 * - showInSidebar: Boolean indicating whether this page link should appear in the sidebar.
 */
definePageMeta({
  layoutComponent: 'default',
  title: 'Home',
  icon: 'home',
  sidebarGroup: 'pages',
  showInSidebar: true,
  navWidgetGroup: 'null',
  showInNavWidget: false,
  showInNavWidgetDropdown: false,
  parentComponent: 'null',
});

/**
 * SEO metadata is handled by individual pages.
 */
useSeoMeta({
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
});

/**
 * - All original script comments from the input component must be preserved here.
 * - TypeScript code for the component goes here with suitable DocBlock type comments as necessary for new/changed logic.
 */

// TODO: Add any specific script logic needed for LayoutDevelopment.
// For example, this layout might be used for debugging or feature previews.
// Consider if any development-specific stores or composables should be used here.

// TODO: If this layout is for specific development routes, consider adding route meta checks
// or other logic to restrict its usage if necessary.

</script>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
/* Additional and component specific @apply CSS goes here if at all required, with new comments. */
</style>
