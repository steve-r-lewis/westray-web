<template>
<!-- ~/pages/contact/index.vue -->
  <main class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
    <!-- Form Section -->
    <section class="lg:col-span-2 xl:col-span-3 bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Have a question about our policies, want to provide feedback, or need help? Reach out to the site admin/data controller using the form below.
      </p>
      
      <form @submit.prevent="submitForm" class="space-y-6 max-w-3xl">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
          <input
              v-model="form.name"
              id="name"
              type="text"
              required
              class="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-4 py-2 focus:ring focus:outline-none"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
          <input
              v-model="form.email"
              id="email"
              type="email"
              required
              class="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-4 py-2 focus:ring focus:outline-none"
          />
        </div>
        
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Subject</label>
          <input
              v-model="form.subject"
              id="subject"
              type="text"
              required
              class="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-4 py-2 focus:ring focus:outline-none"
          />
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
          <textarea
              v-model="form.message"
              id="message"
              rows="5"
              required
              class="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-4 py-2 focus:ring focus:outline-none"
          ></textarea>
        </div>
        
        <div>
          <button
              type="submit"
              :disabled="submitting"
              class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
          <span v-if="submitted" class="ml-4 text-green-600 dark:text-green-400 text-sm">Message sent!</span>
        </div>
      </form>
    </section>
    
    <!-- Sidebar Info -->
    <aside class="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-6 xl:col-span-1">
      <div>
        <h4 class="text-xl font-semibold">Data Controller Info</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          The Westray Community App is overseen by the Westray Digital Access Group.
          <br />
          Please allow 2–3 business days for a response.
        </p>
      </div>
      
      <div>
        <h4 class="text-xl font-semibold">Other Enquiries</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          For requests about your personal data, GDPR, or moderation concerns, use this form and specify your topic.
        </p>
      </div>
    </aside>
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
  title: 'Contact',
  icon: 'contact_page',
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

/**
 * - All original script comments from the input component must be preserved here.
 * - TypeScript code for the component goes here with suitable DocBlock type comments as necessary for new/changed logic.
 */
//
// const form = reactive({
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// });
//
// const submitting = ref(false);
// const submitted = ref(false);
//
// function submitForm() {
//   submitting.value = true;
//   setTimeout(() => {
//     submitted.value = true;
//     submitting.value = false;
//     // Reset form for demo purposes
//     form.name = '';
//     form.email = '';
//     form.subject = '';
//     form.message = '';
//   }, 1500);
// }
</script>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
/* Additional and component specific @apply CSS goes here if at all required, with new comments. */
</style>
