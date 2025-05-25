<template>
  <!-- ~/pages/policies/cookies-policy.vue -->
  <section class="prose dark:prose-invert mx-auto px-4 py-10 max-w-4xl">
    <h1 class="text-3xl font-bold">Cookies Policy</h1>
    <NuxtLink to="/policies">Back to Policies Index</NuxtLink>
    <p>
      This site uses cookies to enhance your user experience, remember preferences, and support analytics. You can
      disable cookies in your browser settings, but this may affect site functionality.
    </p>
    <p>
      We do not use cookies to track or profile users across sites, and all cookie usage is compliant with applicable
      UK regulations.
    </p>
  </section>
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
  title: 'Cookies Policy',
  icon: 'policy',
  sidebarGroup: 'information',
  showInSidebar: false,
  navWidgetGroup: 'policies',
  showInNavWidget: true,
  showInNavWidgetDropdown: true,
  parentComponent: '/policies',
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
