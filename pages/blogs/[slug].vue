<template>
<!-- ~/pages/blogs/index.vue -->
  <div class="min-h-screen bg-app-bg text-app-text relative">
    <p>Slug</p>
<!--    <NuxtLink-->
<!--        to="/test-layout"-->
<!--        class="fixed top-4 left-4 z-50 p-3 bg-app-secondary-bg text-app-secondary-text rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg"-->
<!--        aria-label="Close post and return to home"-->
<!--    >-->
<!--      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">-->
<!--        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />-->
<!--      </svg>-->
<!--    </NuxtLink>-->
<!--    -->
<!--    <div v-if="pending" class="flex justify-center items-center min-h-screen">-->
<!--      <p class="text-xl text-app-text opacity-75">Loading article...</p>-->
<!--    </div>-->
<!--    <div v-else-if="error || !post" class="flex flex-col justify-center items-center min-h-screen text-center px-4">-->
<!--      <h1 class="text-3xl font-bold text-surface-highlight-light dark:text-surface-highlight-dark mb-4">Oops!</h1>-->
<!--      <p class="text-xl text-app-text mb-6">-->
<!--        {{ error ? 'Could not load the article.' : 'Article not found.' }}-->
<!--      </p>-->
<!--      <NuxtLink to="/test-layout" class="px-6 py-3 bg-primary text-app-secondary-text font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity">-->
<!--        Back to Home-->
<!--      </NuxtLink>-->
<!--    </div>-->
<!--    <article v-else class="container mx-auto px-4 py-16 md:py-24 max-w-3xl">-->
<!--      <header class="mb-8 md:mb-12">-->
<!--        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">-->
<!--          {{ post.title }}-->
<!--        </h1>-->
<!--        <p class="text-app-text opacity-80 text-sm">-->
<!--          Published on <time :datetime="new Date(post.date).toISOString()">{{ formattedDate(post.date) }}</time>-->
<!--        </p>-->
<!--      </header>-->
<!--      -->
<!--      <div v-if="post.imageUrl" class="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-lg">-->
<!--        <img :src="post.imageUrl" :alt="post.title" class="w-full h-auto object-cover aspect-video">-->
<!--      </div>-->
<!--      -->
<!--      <div-->
<!--          class="prose prose-lg dark:prose-invert max-w-none-->
<!--               prose-headings:text-app-text prose-p:text-app-text prose-strong:text-app-text-->
<!--               prose-a:text-primary hover:prose-a:opacity-80-->
<!--               prose-ul:text-app-text prose-ol:text-app-text prose-li:marker:text-primary"-->
<!--          v-html="post.content || post.excerpt"-->
<!--      ></div>-->
<!--    </article>-->
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
  title: 'Blog Post',
  icon: 'web_stories',
  sidebarGroup: 'news',
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

// import { useRoute } from 'vue-router'; // Nuxt auto-imports this
// import type { BlogPost } from '~/types/blogs';
// import { useAppBlogStore } from '~/stores/dataBlogStore'; // Using the updated store name
//
// const route = useRoute();
// const appBlogStore = useAppBlogStore();
//
// const slug = computed(() => {
//   if (Array.isArray(route.params.slug)) {
//     return route.params.slug[0];
//   }
//   return route.params.slug as string;
// });
//
// // Use useAsyncData for fetching data on the page
// // It handles SSR, client-side fetching, and prevents re-fetching on navigation within the same page type.
// const { data: post, pending, error } = await useAsyncData<BlogPost | null>(
//     `blogPost-${slug.value}`, // Unique key for this data fetch
//   async () => {
//       if (!slug.value) return null;
//       // Try to find the post in the store first if posts are already loaded (optional optimization)
//       const existingPost = appBlogStore.posts.find(p => p.slug === slug.value);
//       if (existingPost) {
//         // console.log("Found post in store:", existingPost.title);
//         return existingPost;
//       }
//       // If not in store or store is empty, fetch from the API via store action
//       // console.log("Fetching post from API via store:", slug.value);
//       return appBlogStore.fetchPostBySlug(slug.value);
//     },
//     {
//       watch: [slug] // Re-fetch if the slug changes (e.g., navigating between posts)
//     }
// );
//
// // Set page title and meta description
// useHead(() => ({
//   title: post.value ? `${post.value.title} | Westray Community` : 'Blog Post',
//   meta: [
//     {
//       name: 'description',
//       content: post.value?.excerpt || 'A blogs post from the Westray community.'
//     },
//     // Add OpenGraph tags for social sharing if desired
//     { property: 'og:title', content: post.value?.title || 'Blog Post' },
//     { property: 'og:description', content: post.value?.excerpt || 'A blogs post from the Westray community.' },
//     { property: 'og:image', content: post.value?.imageUrl || 'https://placehold.co/1200x630/fbbd71/42271d?text=Westray+Blog' },
//     { property: 'og:type', content: 'article' },
//     // { property: 'og:url', content: `YOUR_WEBSITE_URL/blogs/${slug.value}` }, // Replace YOUR_WEBSITE_URL
//   ],
// }));
//
// const formattedDate = (dateString: string | Date): string => {
//   if (!dateString) return '';
//   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };
//
// // Handle case where post is not found after fetch attempt
// onMounted(() => {
//   if (!pending.value && !post.value && slug.value) {
//     // console.warn(`Post with slug "${slug.value}" not found.`);
//     // You could redirect to a 404 page or show an in-page message (already handled by v-else-if)
//     // Example: showError({ statusCode: 404, statusMessage: 'Page Not Found' });
//   }
// });
</script>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
/* Additional and component specific @apply CSS goes here if at all required, with new comments. */
/* Add any specific styles for the blogs post page here */
/* The prose classes from @tailwindcss/typography will style the v-html content */
.prose :where(img):not(:where([class~="not-prose"] *)) {
  @apply rounded-lg shadow-md; /* Style images within prose content */
}
</style>
