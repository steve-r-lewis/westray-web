<template>
<!-- ~/pages/policies/index.vue -->
  <section class="prose dark:prose-invert mx-auto px-4 py-10 max-w-4xl">
    <h1 class="text-3xl font-bold">Westray Online Our Policies</h1>
    <p class="mt-4">
      This application is governed by a number of community-centred policies designed to protect, support, and respect the members of the Westray island community. We encourage transparency, privacy, and responsible use.
    </p>
    <p>
      If you have questions, comments, or requests regarding any of the policies listed below, please don’t hesitate to
      <NuxtLink to="/contact" class="text-blue-600 underline hover:text-blue-800">contact the site admin/data controller</NuxtLink>.
    </p>
    
    <ul class="mt-8 space-y-4">
      <li>
        <NuxtLink to="/policies/code-of-conduct" class="text-xl font-semibold text-blue-700 hover:underline">
          Code of Conduct
        </NuxtLink>
        <p class="text-sm text-gray-600">Community expectations, respectful behaviour, and moderation.</p>
      </li>
      <li>
        <NuxtLink to="/policies/privacy-policy" class="text-xl font-semibold text-blue-700 hover:underline">
          Privacy Policy
        </NuxtLink>
        <p class="text-sm text-gray-600">How we handle your data and respect your digital privacy.</p>
      </li>
      <li>
        <NuxtLink to="/policies/cookies-policy" class="text-xl font-semibold text-blue-700 hover:underline">
          Cookies Policy
        </NuxtLink>
        <p class="text-sm text-gray-600">Understanding how we use cookies to improve your experience.</p>
      </li>
      <li>
        <NuxtLink to="/policies/gdpr-and-uk-gdpr" class="text-xl font-semibold text-blue-700 hover:underline">
          GDPR & UK GDPR Compliance
        </NuxtLink>
        <p class="text-sm text-gray-600">Your rights under UK and EU data protection legislation.</p>
      </li>
    </ul>
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
  title: 'Policies',
  icon: 'policy',
  sidebarGroup: 'information',
  showInSidebar: true,
  navWidgetGroup: 'policies',
  showInNavWidget: true,
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
