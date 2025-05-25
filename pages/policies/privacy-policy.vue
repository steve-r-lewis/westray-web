<template>
<!-- ~/pages/policies/privacy-policy.vue -->
  <section class="prose dark:prose-invert mx-auto px-4 py-10 max-w-4xl">
    <h1 class="text-3xl font-bold">Privacy Policy</h1>
    <NuxtLink to="/policies">Back to Policies Index</NuxtLink>
    <p>
      We collect only the data necessary to operate the application, provide services, and ensure community safety.
      Personal data is stored securely and never shared with third parties without explicit consent unless required by
      law.
    </p>
    <p>
      Users may request a copy of their data or request deletion by contacting us directly via the
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
  title: 'Privacy Policy',
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
