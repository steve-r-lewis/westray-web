<template>
  <!-- ~/pages/test-layout/index.vue -->
  <div class="min-h-screen bg-app-bg text-app-text">
    <h1>Test-Layout</h1>
  </div>
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
  title: 'Test Layout',
  icon: 'dashboard_customize',
  sidebarGroup: 'testing',
  showInSidebar: true,
  navWidgetGroup: 'testing',
  showInNavWidget: true,
  showInNavWidgetDropdown: true,
  parentComponent: '/testing',
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
