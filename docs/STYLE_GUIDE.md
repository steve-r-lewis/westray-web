# Style Guide for Your TypeScript + Vue 3 + Nuxt 3 Project

This style guide is aimed to maintain consistency with TypeScript, Vue 3 conventions, and your specific setup, including Tailwind CSS, Pinia, and Nuxt. It also incorporates some best practices for scalability and readability.




---

### 🔧 1. **Foundations (Design Tokens)**

**Goal**: Centralise reusable design decisions for theming and clarity.

* **Colour palette**

  * Use Tailwind’s `theme.extend.colors` in `tailwind.config.js` to define your brand/system palette.
  * Include tokens for `primary`, `secondary`, `accent`, `neutral`, `success`, `warning`, `error`, etc.
  * Support dark mode via `dark:` variants or media query strategy (`class` vs `media`).

* **Typography**

  * Set base font sizes, line heights, font families using `@apply` in a global `.css` or `app.vue` layout.
  * Consider setting vertical rhythm and modular scale.

* **Spacing & Sizing**

  * Create standard spacing units (e.g., `--space-xs`, `--space-md`, etc.), map to Tailwind classes.
  * Maintain a consistent rhythm (e.g., multiples of 4 or 8 px).

* **Z-index & Layering**

  * Define clear stacking layers: modal, overlay, tooltip, nav, etc.

---

### 🧱 2. **Component Design Standards**

**Goal**: Codify how components should look and behave.

* **Atomic Design Language**

  * Break components into **Atoms (buttons, inputs)**, **Molecules (forms, cards)**, **Organisms (layouts, navbars)**.
  * Use folders like `/components/atoms`, `/components/molecules`, etc.

* **Naming Convention**

  * Consistent PascalCase for components, kebab-case for file names (`BaseButton.vue`, `AppCard.vue`).
  * Prefix base components with `Base` or `App` to distinguish design system elements from page-specific ones.

* **Reusability & Composition**

  * Create props-driven components with defaults using `defineProps` and `withDefaults` (Nuxt 3-friendly).
  * Use `v-bind="$attrs"` and `inheritAttrs: false` to allow for flexible component extension.

---

### 🎨 3. **Styling Practices**

**Goal**: Clean, predictable, scalable styling with Tailwind.

* **Utility-first classes for layout**, but abstract to components for styling (e.g., use `@apply` in `.vue` `<style>` when patterns emerge).
* **Avoid inline magic numbers**: no arbitrary pixel values in templates — use Tailwind scale or `theme()` function.
* **Theme variants**: custom `.dark .your-class` selectors or Tailwind’s `dark:` utility to handle theming.

---

### ♿ 4. **Accessibility & UX Standards**

**Goal**: Every component should be accessible out-of-the-box.

* Use `aria-*` attributes and keyboard navigation on all interactive components.
* Semantic HTML: buttons must be `<button>`, not `<div>`.
* Handle `:focus-visible` for keyboard users.
* Ensure contrast ratio is WCAG AA at minimum (Tailwind plugins like `@tailwindcss/forms` help).
* Include skip links and dynamic page titles (`useHead()` in Nuxt 3).

---

### 🧠 5. **Behavioural Patterns & State Management**

**Goal**: Keep logic and presentation separate but harmonious.

* **Pinia Stores**: Model stores by domain (`useUserStore`, `useSidebarStore`), with typed states and actions.
* Store logic should be pure — UI side effects should go in components.
* Use composables (`/composables/useTheme.ts`) to encapsulate cross-cutting concerns like dark mode toggling or responsive logic.

---

### 📚 6. **Documentation & Developer Experience**

**Goal**: New devs should understand how to build consistently in <15 mins.

* Auto-generate component docs (e.g. via [Storybook](https://storybook.js.org/) or [Histoire](https://histoire.dev/) for Vue 3).
* Markdown-based design principles in `/docs/design.md`.
* Create playgrounds in `/dev` or `/stories` directory.

---

### 🧩 Optional Advanced Ideas

* **Design Tokens JSON** → Export Tailwind settings as JSON using tools like Style Dictionary for potential Figma sync.
* **Theme switching** via CSS variables (still Tailwind-compatible, but dynamic).
* **Dark mode preview toggle** component.
* Use **layout and slot architecture** to reduce duplication.

---













---

## **1. Project Structure & Organization**

### General Guidelines:
- Keep a **flat structure** while grouping by functionality. Example:
```
src/
  ├── components/
  ├── pages/
  ├── composables/
  ├── stores/
  ├── plugins/
  ├── assets/
  └── layouts/
```

- Use **PascalCase** for Vue component files (e.g., `SidebarLink.vue`).
- Group related files together using folders (e.g., components with related styles, composables, etc.).

---

## **2. Component Naming and Structure**

### Component Files:
- Use **PascalCase** for component names, files, and directories, e.g., `SidebarLink.vue`.
- Declare props using TypeScript for type safety and improved maintainability.
- Structure components as follows:
    1. **Props** definition at the start.
    2. `setup()` logic.
    3. Template.
    4. Scoped styles as needed.

### Template:
- Follow the **clean and minimal** template design:
    - Keep it semantic and accessible (e.g., add `aria-label`, roles, etc.).
    - Nest slots strategically for flexibility and reuse.

**Example:**

```vue template
<script setup lang="ts">
defineProps<{
  label: string;
  icon?: string;
  onClick?: () => void; // Optional callback for click actions
}>();
</script>

<template>
  <button class="btn" :aria-label="label" @click="onClick">
    <span v-if="icon" class="icon">{{ icon }}</span>
    <span><slot /></span>
  </button>
</template>

<style scoped>
.btn {
  /* Tailwind utilities / custom CSS */
}
.icon {
  /* Separate handle for icon styling */
}
</style>
```


---

## **3. Styling and CSS**

### Tailwind and Scoped Styles:
- **Primary styling** should leverage Tailwind's utility classes.
- Use `@apply` for repetitive classes to reduce clutter.
- Use `scoped` styles only for component-specific customizations.
- Avoid overusing scoped styles — prefer utility classes.

### Conventions:
- Use consistent naming for CSS classes based on the component.
- Maintain light/dark theming compatibility using Tailwind's `dark:` modifier.

**Example:**
```vue template
<style scoped>
.btn {
  @apply flex items-center px-4 py-2 rounded font-medium text-gray-700 dark:text-gray-300 transition-all duration-200;
}

.btn:hover {
  @apply bg-indigo-100 dark:bg-zinc-700 text-indigo-600 dark:text-indigo-300;
}

.icon {
  @apply text-xl mr-2;
}
</style>
```


---

## **4. Scripting and TypeScript**

### General TypeScript Rules:
- Use `defineProps` and `defineEmits` for component props and events.
- Explicitly define prop types to improve developer experience and tool support.
- Use **optional chaining** and **nullish coalescing** over complex conditionals.

### Example:
- Use type-safe props and events in your components:
```typescript
defineProps<{
  to: string;
  icon?: string;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
```


---

## **5. Tailwind Guidelines**

### Tailwind Utility Rules:
- **Avoid class overloading**: Break classes into clean reusable chunks with `@apply`.
- Utilities should handle the **core layout**, while CSS is used minimally for custom styles or edge cases.
- Group related Tailwind classes effectively to improve readability:
```
class="flex items-center px-3 py-2 rounded shadow-lg bg-white dark:bg-gray-900"
```


### Example:
**Link Component Styling**
```vue template
<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-zinc-700 hover:text-indigo-600 dark:hover:text-indigo-300"
    @click="$emit('close')"
  >
    <span class="material-symbols-outlined text-xl">{{ icon }}</span>
    <slot />
  </NuxtLink>
</template>
```


---

## **6. Vue Features and Conventions**

### Vue Directives and Features:
- Use `v-bind` shorthand (`:`) and `v-on` shorthand (`@`) for bindings.
- Use `v-slot` or `<slot />` for flexible component slots. Always provide default slot content if applicable.

**Example:**
```vue template
<template>
  <slot name="header" />
  <slot />
  <slot name="footer" />
</template>
```


---

## **7. Accessibility**

- Use semantic HTML elements (`<nav>`, `<button>`, `<header>`).
- Provide appropriate `aria-*` attributes:
    - Example: `<NuxtLink :to="to" aria-label="Navigate to page">`.

---

## **8. State Management (Pinia)**

- Use **modular stores** for logically grouped state.
- Persist specific data as necessary using `pinia-plugin-persistedstate`.

Example Store:
```textmate
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
  },
});
```


---

## **9. Nuxt-Specific Conventions**

- Use Nuxt features like `NuxtLink` for navigation.
- Adhere to Nuxt's **pages/layouts convention** for routing and layout structure.

Example:
- Pages are auto-routed, e.g., `/pages/about.vue` creates `/about`.
- Use Layouts for consistent view templates.

---

## **10. Documentation**

---

### `docs/` Directory**
Style guide as a file named `STYLE_GUIDE.md` inside the `docs` directory.

**Directory structure:**
```
/
├── src/
├── components/
├── pages/
├── stores/
├── docs/
│   └── STYLE_GUIDE.md
├── package.json
└── README.md
```

### **Where GitHub Will Highlight It**
- GitHub will display `CONTRIBUTING.md` when someone starts an issue or submits a pull request.

---


# 11. **Design Approach**

Based on your preferences:
- A minimalistic interface with carefully chosen spaces, padding, and margins will be emphasized.
- We'll design a **color palette** for both light and dark modes based on the hex codes you provided.
- We'll use **Typography and Layout principles** to ensure readability and clarity.
- We’ll utilize **CSS custom properties (CSS variables)** to manage colors for theming dynamically.

Main colour ways theme ideas;

* #000000
* #fbbd71
* #42271d
* #855d3f
* #648155
* #fa5f30
* #ffffff

General themes and design intentions;

* Clean and clear design with space and minimal clutter.
* Dark mode and a light mode setting.

---

# 12. **Color Palette for Light and Dark Modes**

Using your provided colors, here’s a **themed palette for light mode and dark mode**:

## **Base Colors**
| Color Name  | Light Mode                | Dark Mode                 | Description                     |
|-------------|---------------------------|---------------------------|---------------------------------|
| **Primary** | `#fbbd71` (Soft Orange)  | `#fbbd71`                | For accents, buttons, links    |
| **Secondary** | `#42271d` (Dark Brown) | `#855d3f` (Muted Brown)  | Supporting accent               |
| **Background** | `#ffffff` (White)      | `#000000` (Black)        | Main background colors          |
| **Text**     | `#42271d` (Dark Brown)  | `#ffffff` (White)        | Main text colors                |
| **Surface Highlight** | `#648155` (Fresh Green) | `#fa5f30` (Vivid Orange) | For success/alerts              |
| **Secondary Background** | `#855d3f` (Muted Brown) | `#42271d` (Rich Dark Brown) | For secondary surfaces          |

This palette preserves contrast and creates an appealing visual hierarchy.

---

# 13. **Space-Guided Minimalism**

- Use **consistent spacing scale**, e.g., `4px`, `8px`, `16px`, `24px`, and so on (powers of 2).
- Provide liberal padding for better separation of content.
- Use a maximum container width (e.g., `1200px`) to prevent overly stretched designs.

> Minimalism is about clarity with sufficient whitespace – aim to **space out components** with care.

---

# 14. **Implementing Light and Dark Mode**

We can define a **themed color system using CSS variables**. Below is an example of how this can be implemented.

### Example: **Global Theme with CSS Variables**
You can set up light and dark themes in `tailwind.config.js` with custom Tailwind CSS properties or directly in plain CSS.

#### **Using CSS**
```css
/* Base theme */
:root {
  --primary-color: #fbbd71;
  --primary-text: #42271d;
  --secondary-text: #855d3f;
  --background-color: #ffffff;
  --secondary-bg-color: #f8f2ec;
}

/* Dark theme */
[data-theme='dark'] {
  --primary-color: #fbbd71;
  --primary-text: #ffffff;
  --secondary-text: #fa5f30;
  --background-color: #000000;
  --secondary-bg-color: #42271d;
}

/* Body styling dynamically switches background & text colors */
body {
  background-color: var(--background-color);
  color: var(--primary-text);
}

button {
  color: var(--primary-text);
  background: var(--primary-color);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

button:hover {
  background: var(--secondary-text);
  color: var(--background-color);
}
```


You can toggle the theme dynamically by toggling the `data-theme` attribute on the `html` or `body` element.

### **Example Vue Component for Theme Toggling**
```vue template
<script setup lang="ts">
import { ref } from 'vue';

const currentTheme = ref('light');

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
}
</script>

<template>
  <button class="theme-toggle-btn" @click="toggleTheme">
    Toggle Theme
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  @apply border rounded bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-4 py-2;
}
</style>
```


---

# 15. **Typography**

### Font Guidelines:
- **Sans-Serif:** Use modern, clean sans-serif fonts like `"Inter"`, `"Poppins"`, or `"Roboto"`.
- Font Sizes:
    - Body text: `16px` (1rem).
    - Headings: Use a consistent scale at `1.25`, e.g., `2rem`, `1.6rem`, `1.28rem`.
    - Small text: `0.875rem`.

### Example: CSS for Typography
```css
body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  color: var(--primary-text);
}

p {
  margin-bottom: 1rem;
}
```


---

# 16. **Buttons and Interactive Elements**

Buttons should be:
- Large for **call-to-action** areas.
- Minimal but clear for secondary actions.

### Example Tailwind Classes:

```vue template
<template>
  <button class="cta-btn">Click me</button>
</template>

<style scoped>
.cta-btn {
  @apply px-6 py-2 bg-primary text-white rounded shadow-md transition-all duration-300;
}

.cta-btn:hover {
  @apply bg-secondary;
}
</style>
```


---

# 17. **Tailwind Custom Configuration**

To fully utilize these colors in Tailwind CSS, configure your `tailwind.config.js` file:

```javascript
// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // Enables dark mode toggling
  theme: {
    extend: {
      colors: {
        primary: '#fbbd71',
        secondary: '#42271d',
        text: {
          light: '#42271d',
          dark: '#ffffff',
        },
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        highlight: {
          light: '#648155',
          dark: '#fa5f30',
        },
      },
    },
  },
  plugins: [],
};
```


Then in the HTML/JSX templates:

```html
<div class="bg-background text-text">
  <button class="bg-primary text-white">Example Button</button>
</div>
```


---

## **18. Graphic Design Considerations**

- Use subtle **shadows** and layered surfaces to create depth in your UI.
- Avoid overusing borders; instead, use natural shadows or contrasting background layers (e.g., a card component).

---

## **19. Theme and Colors**

### **Where to Store the Theme Variables**
- **CSS Approach**:
  Store your theme variables (colors, spacing, typography) in a dedicated CSS/SCSS file.

  **File Location:**
```
assets/styles/themes.css
```


**Example `themes.css`:**
```css
/* Light Theme */
  :root {
    --primary-color: #fbbd71;
    --primary-text: #42271d;
    --secondary-text: #855d3f;
    --background-color: #ffffff;
    --secondary-bg-color: #f8f2ec;
    --highlight-color: #648155;
  }

  /* Dark Theme */
  [data-theme='dark'] {
    --primary-color: #fbbd71;
    --primary-text: #ffffff;
    --secondary-text: #fa5f30;
    --background-color: #000000;
    --secondary-bg-color: #42271d;
    --highlight-color: #fa5f30;
  }
```


- **Tailwind CSS Approach**:
  Tailwind configurations can be handled via `tailwind.config.js`.

  **File Location:**
```
tailwind.config.js
```


**Example `tailwind.config.js`:**
```javascript
module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#fbbd71',
          secondary: '#42271d',
          text: {
            light: '#42271d',
            dark: '#ffffff',
          },
          background: {
            light: '#ffffff',
            dark: '#000000',
          },
          highlight: {
            light: '#648155',
            dark: '#fa5f30',
          },
        },
      },
    },
    plugins: [],
  };
```


---

## **20. Typography, Spacing, and Other Styling Details**

Keep global reusable styles in a central file for consistent typography, spacing, and other misc styles.

### **File Location:**
```
assets/styles/globals.css
```


### **Example `globals.css`:**
```css
/* Typography */
body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
}

p {
  margin-bottom: 1rem;
}

/* Global Spacing */
.container {
  padding: 16px;
  max-width: 1200px;
  margin: auto;
}

.card {
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```


> **Tip:** If you're using SCSS for your project instead of plain CSS, you can break these styles into multiple partials (e.g., `_themes.scss`, `_typography.scss`, etc.) and import them into one main SCSS file.

---

## **21. Theme Toggle Logic**

### **Where to Keep the Theme Toggle Logic**

Create a utility composable or store for toggling between light and dark modes.

- **File Location:**
```
composables/useTheme.ts
```


**Example `useTheme.ts`:**
```textmate
import { ref } from 'vue';

  export const useTheme = () => {
    const theme = ref('light');

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme.value);
    };

    return { theme, toggleTheme };
  };
```


---

## **22. Design Guidelines / Documentation**

### **Where to Store Documentation**
Store these in `docs/STYLE_GUIDE.md` or as part of a larger documentation effort.

- **File Location:**
```
docs/STYLE_GUIDE.md
```


**Content Example:**
```markdown
# Style Guide

  ## Color Palette
  - **Primary Color**: `#fbbd71` (Soft Orange)
  - **Secondary Color**: `#42271d` (Dark Brown)
  - **Text Color (Light Mode)**: `#42271d`
  - **Text Color (Dark Mode)**: `#ffffff`
  - **Background (Light Mode)**: `#ffffff`
  - **Background (Dark Mode)**: `#000000`

  ## Typography
  - Base Font: `"Inter", sans-serif`
  - Font Sizes:
    - Paragraph: `1rem` (16px)
    - Headings: Scales of `1.25`
      - H1: `2rem` (32px)
      - H2: `1.6rem` (25.6px)
      - H3: `1.28rem` (20.48px)

  ## Principles
  - Use sufficient white space
  - Clear visual hierarchy using contrast and font sizes
  - Avoid clutter by simplifying UI components
  ...
```

This makes it accessible to all developers working on the project.

---

## **23. Settings for Tailwind CSS**
If using Tailwind CSS for styling, add configuration in `tailwind.config.js`.

### **File Location:**
```
tailwind.config.js
```

This file tracks custom colors, dark mode, typography, etc.

---

## **Folder Structure Example**
Here’s what the structure of these files can look like in your project:

```
/
├── assets/
│   ├── css/
│   │   ├── themes.css
│   │   ├── globals.css
├── composables/
│   ├── useTheme.ts
├── docs/
│   ├── STYLE_GUIDE.md
├── tailwind.config.js
├── components/
│   ├── Navbar.vue
│   ├── Button.vue
...
```


---

## **Summary**
Here's where each part should go:
- **Themes (colors, dynamic theming):** `assets/styles/themes.css` or `tailwind.config.js`.
- **Global styles (typography, spacing):** `assets/styles/globals.css`.
- **Theme toggle logic (Vue settings):** `composables/useTheme.ts`.
- **Design guidelines/documentation:** `docs/STYLE_GUIDE.md`.

Keeping these concepts modular will ensure your codebase stays organized and clean while offering flexibility for theming and future designers/developers. Let me know if you need help setting this up!
