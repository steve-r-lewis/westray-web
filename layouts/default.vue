<template>
  <!-- ~/layouts/default.vue -->
  
  <div class="layout-default">
    <!--
      - The `layout-default` class is now applied.
      - This class, via `layout-base` in `main.css`, handles:
        - flex flex-col min-h-screen
        - bg-app-surface-bg text-app-text-primary
        - transition-colors duration-300 ease-in-out
        - px-4 py-4 (base padding)
      - The direct Tailwind utility classes for these properties have been removed from this div.
    -->
<!--    <HeaderPublic />-->
    
<!--    <HeroPublic />-->
    
    <!--
      This div acts as a wrapper for the slot content.
      - `flex-grow`: Allows this section to expand and push the footer down.
      - `content-wrapper`: Applies max-width, centering, and horizontal padding from `main.css`.
      - `py-4`: Vertical padding for the content area.
      It inherits text color from its parent. Its background is transparent,
      showing the `bg-app-surface-bg` of the parent (via .layout-default).
    -->
    <main class="flex-grow content-wrapper py-4">
      <slot />
    </main>
    
    <!--
      Similar to the <header>, this <footer> will inherit styles. The FooterPublic
      component is responsible for its own specific styling.
      -->
<!--    <FooterPublic />-->
  </div>
</template>

<script setup lang="ts">
// import HeroPublic from '~/components/layout/hero-banners/HeroPublic.vue';
// import HeaderPublic from '~/components/layout/headers/HeaderPublic.vue';
// import FooterPublic from '~/components/layout/footers/FooterPublic.vue';

// TODO: Add any specific script logic needed for LayoutDevelopment.
// For example, this layout might be used for debugging or feature previews.
// Consider if any development-specific stores or composables should be used here.

// TODO: If this layout is for specific development routes, consider adding route meta checks
// or other logic to restrict its usage if necessary.
</script>

<style scoped>
/* TODO: Add component-specific styles for LayoutDevelopment if utility classes are insufficient. */
/* Consider any custom styles here also use semantic CSS variables (e.g., var(--app-accent)) for theming if needed. */
</style>
