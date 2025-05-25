<template>
<!-- ~/pages/policies/gdpr-and-uk-gdpr.vue -->
  <section class="prose dark:prose-invert mx-auto px-4 py-10 max-w-4xl">
    <h1 class="text-3xl font-bold">GDPR & UK GDPR Compliance</h1>
    <NuxtLink to="/policies">Back to Policies Index</NuxtLink>
    <p>
      As a UK-based platform, we adhere to the General Data Protection Regulation (GDPR) and its UK counterpart. This
      means you have rights regarding your personal data including:
    </p>
    <ul>
      <li>The right to access your data</li>
      <li>The right to request corrections</li>
      <li>The right to be forgotten</li>
      <li>The right to data portability</li>
    </ul>
    <p>
      For more details or to exercise your rights, please reach out via the
      <NuxtLink to="/contact-us" class="text-blue-600 underline hover:text-blue-800">contact page</NuxtLink>.
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
  title: 'GDPR and UK-GDPR',
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
