<template>
<!-- ~/pages/blogs/index.vue -->
  <div class="min-h-screen bg-app-bg text-app-text">
    <header class="py-4 bg-app-secondary-bg shadow-sm">
      <div class="container mx-auto px-4 md:px-6">
        <NuxtLink to="/" class="text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
          Westray Community Portal
        </NuxtLink>
        <p class="text-app-secondary-text text-sm mt-1">{{ missionStatement }}</p>
      </div>
    </header>
    
<!--    <main class="py-8">-->
<!--      <ContentScroller-->
<!--          title="Island News & Stories"-->
<!--          :items="appBlogStore.posts"-->
<!--          :fetch-more-items="handleFetchMoreBlogPosts"-->
<!--          item-key-prop="id" >-->
<!--        <template #item="{ item }">-->
<!--          <BlogPostCard :post="item as BlogPost" />-->
<!--        </template>-->
<!--      </ContentScroller>-->
<!--      -->
<!--      <div class="container mx-auto px-4 md:px-6 mt-12">-->
<!--        <h2 class="text-2xl font-bold mb-4 text-app-text">Another Section</h2>-->
<!--        <div class="bg-app-secondary-bg p-6 rounded-lg text-app-secondary-text">-->
<!--          <p>-->
<!--            This is a placeholder for other content.-->
<!--            <span v-if="appBlogStore.totalPosts > 0"> Total blog posts: {{ appBlogStore.totalPosts }}</span>-->
<!--          </p>-->
<!--          <div v-if="appBlogStore.isLoading && appBlogStore.posts.length === 0" class="mt-4 text-sm opacity-75">-->
<!--            Fetching initial blog posts...-->
<!--          </div>-->
<!--          <div v-else-if="!appBlogStore.hasMoreContent && appBlogStore.posts.length > 0 && appBlogStore.posts.length >= appBlogStore.totalPosts" class="mt-4 text-sm opacity-75">-->
<!--            All {{ appBlogStore.totalPosts }} blog posts loaded.-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </main>-->
<!--    -->
<!--    <footer class="py-6 mt-12 bg-app-secondary-bg text-app-secondary-text text-center text-sm">-->
<!--      <p>&copy; {{ new Date().getFullYear() }} Westray Community. All rights reserved.</p>-->
<!--    </footer>-->
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
  title: 'Blogs',
  icon: 'web_stories',
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
/**
 * - All original script comments from the input component must be preserved here.
 * - TypeScript code for the component goes here with suitable DocBlock type comments as necessary for new/changed logic.
 */

/**
 * Note: BlogPostCard is now used within the slot, so direct import here might not be needed
 * if it's globally registered or auto-imported by Nuxt for use in templates.
 * However, for type casting `item as BlogPost`, BlogPost type is needed.
 */
// import ContentScroller from '~/components/shared/ContentScroller.vue'; // Import the generic scroller
// import BlogPostCard from '~/components/page-content/blogs/BlogPostCard.vue'; // Still needed if used directly in slot
// import ThemeModeSwitcher from '~/components/theme/ThemeModeSwitcher.vue';
// import { useAppBlogStore } from '~/stores/dataBlogStore';
// import type { BlogPost } from '~/types/blogs';
// import type { Video } from '~/types/video'; // Example for a video type
// import { useAppVideoStore } from '~/stores/appVideoStore'; // Example for a video store

// const missionStatement: string = "Westray community web application. An eCommerce, business and social platform for the Orcadian island of Westray.";
// const appBlogStore = useAppBlogStore();
// const appVideoStore = useAppVideoStore(); // Example

// const handleFetchMoreBlogPosts = async (): Promise<BlogPost[]> => {
//   return await appBlogStore.fetchMorePosts();
// };

// Example for videos
// const handleFetchMoreVideos = async (): Promise<Video[]> => {
//   return await appVideoStore.fetchMoreVideos();
// };

// const { pending: initialLoadPending, error: initialLoadError } = await useAsyncData(
//     'initialBlogPosts',
//     async () => {
//       if (appBlogStore.posts.length === 0) {
//         return appBlogStore.fetchInitialPosts();
//       }
//       return Promise.resolve();
//     },
//     { server: true }
// );

// Example for videos initial load
// await useAsyncData('initialVideos', async () => { /* ... fetch initial videos ... */ }, { server: true });
</script>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
/* Additional and component specific @apply CSS goes here if at all required, with new comments. */
</style>
