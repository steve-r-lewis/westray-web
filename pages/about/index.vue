<template>
  <!-- ~/pages/about/index.vue -->
  <!--
    This <main> element is inside the <slot /> of the 'default' layout.
    The 'default' layout already provides a 'content-wrapper' for max-width and base horizontal padding,
    and 'layout-default' (via 'layout-base') provides overall page padding (px-4 py-4).
    The classes here (px-4 py-12 max-w-5xl mx-auto) are for further refining the
    content area specifically for this "About" page. This is acceptable as it's
    an additional layer of layout within the page itself.
    Text color will be inherited from `text-app-text-primary` applied by the layout.
  -->
  <main class="px-4 py-12 max-w-5xl mx-auto">
    <!--
      Replaced text-gray-800 dark:text-white with text-app-text-primary.
      Font size and weight are fine as utility classes.
    -->
    <h1 class="text-4xl font-bold text-app-text-primary mb-6">About Westray Online</h1>
    
    <!--
      Replaced text-gray-700 dark:text-gray-300 with text-app-text-secondary
      for the main paragraph text, assuming it's slightly less emphasized than primary.
      If it should be primary, text-app-text-primary can be used.
    -->
    <p class="text-lg text-app-text-secondary mb-6">
      Welcome to the digital home of the <strong class="text-app-text-primary">Westray community</strong>, one of the vibrant Orkney Islands. This web application is designed to support, connect and empower our island's residents and visitors alike — combining commerce, community, and culture under one roof.
      <!--
        The <strong> tag can inherit its color, but explicitly setting it to text-app-text-primary
        ensures it stands out if text-app-text-secondary is used for the surrounding paragraph.
      -->
    </p>
    
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-semibold text-app-text-primary mb-2">Island Marketplace</h2>
        <p class="text-app-text-secondary">
          Our online marketplace lets residents create and manage their own shops, selling handmade crafts, fresh produce, services, and more. It’s a space to support local talent and keep the island economy flourishing — even when the weather isn't.
        </p>
      </div>
      
      <div>
        <h2 class="text-2xl font-semibold text-app-text-primary mb-2">Clubs & Organisations</h2>
        <p class="text-app-text-secondary">
          From the gardening club to the heritage trust, Westray is home to a rich tapestry of local organisations. Each has its own spotlight on our platform, featuring updates, events, and resources. On the homepage, you’ll find a live scroll of what's happening across the island.
        </p>
      </div>
      
      <div>
        <h2 class="text-2xl font-semibold text-app-text-primary mb-2">Social & Forums</h2>
        <p class="text-app-text-secondary">
          Whether you're sharing a photo of last night’s sunset, organising a beach clean, or chatting about ferry times, our social space is built for connection. Forums can be public or private, so you can speak freely among friends or broadcast to the wider community.
        </p>
      </div>
    </div>
    
    <!--
      Replaced border-gray-300 dark:border-gray-700 with border-app-border,
      which is your semantic token for borders.
    -->
    <hr class="my-12 border-app-border" />
    
    <!--
      Replaced text-gray-500 dark:text-gray-400 with text-app-text-secondary,
      assuming this less prominent text should use the secondary text color.
    -->
    <div class="text-sm text-app-text-secondary">
      <p>
        The Westray Community Web is a grassroots project built for and by the people of Westray. Whether you're a resident, a relative, or a curious traveller from afar — you’re very welcome here.
      </p>
    </div>
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
  title: 'About',
  icon: 'info',
  sidebarGroup: 'information',
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
