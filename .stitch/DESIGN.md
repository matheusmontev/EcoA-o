# Design System Document: Educational Sustainability

## 1. Overview & Creative North Star: "The Living Archive"
This design system moves away from the static, clinical nature of traditional educational platforms. Our Creative North Star is **"The Living Archive"**—a concept where digital space feels like an organic, evolving ecosystem. 

Rather than a rigid grid of boxes, we employ **Intentional Asymmetry** and **Soft Layering**. The layout should feel like a high-end editorial journal: breathable, sophisticated, and deeply human. We use overlapping elements and varying typography scales to guide the eye through a narrative journey of sustainability and social responsibility. By rejecting harsh dividers and embracing tonal depth, we create an environment that is "welcoming" not through clutter, but through clarity and warmth.

---

## 2. Colors & Tonal Depth
We utilize a sophisticated palette of forest greens, deep oceanic blues, and luminous neutrals. The goal is to evoke nature without falling into clichés.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning content. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section should sit directly against a `surface` background to create a natural, "molded" appearance.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine, recycled paper.
*   **Lowest Tier:** `surface-container-lowest` (#ffffff) – Used for primary content cards to provide maximum "pop."
*   **Base Tier:** `surface` (#f8f9fa) – The canvas for the entire experience.
*   **High Tier:** `surface-container-high` (#e7e8e9) – Used for inset components like search bars or secondary sidebars.

### The "Glass & Gradient" Rule
To elevate the "Modern" brand value, use **Glassmorphism** for floating navigation or overlay modals. 
*   **Effect:** Apply `surface` at 70% opacity with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Use subtle linear gradients for Hero banners and primary CTAs, transitioning from `primary` (#0f5238) to `primary_container` (#2d6a4f) at a 135-degree angle. This adds "soul" and prevents the flat, "template" look.

---

## 3. Typography: Editorial Authority
Our typography pairing balances the "Friendly" requirement with "Social Responsibility."

*   **Display & Headlines (Plus Jakarta Sans):** This typeface offers a geometric yet warm personality. Use `display-lg` for impactful environmental statements. Use intentional letter-spacing (-0.02em) on larger headers to create a "tight," premium editorial feel.
*   **Body & Titles (Be Vietnam Pro):** Chosen for its exceptional readability and modern flair. It handles educational content with a gentle, accessible tone.
*   **The Hierarchy Goal:** Use extreme scale contrast. A `display-sm` headline paired with a `body-md` description creates an authoritative, curated look that feels professional and trustworthy.

---

## 4. Elevation & Depth: The Layering Principle
Hierarchy is achieved through **Tonal Layering** rather than traditional drop shadows.

*   **Ambient Shadows:** If an element must float (like a FAB or a modal), use an ultra-diffused shadow. 
    *   *Spec:* `offset-y: 8px, blur: 24px, color: rgba(25, 28, 29, 0.06)`. 
    *   Never use pure black; always tint the shadow with the `on-surface` value.
*   **The "Ghost Border" Fallback:** If accessibility requires a container definition, use the `outline-variant` token at **15% opacity**. This creates a \"suggestion\" of a boundary that doesn't disrupt the visual flow.
*   **Integrated Depth:** Use `surface-container-lowest` cards on `surface-container-low` backgrounds to create a soft \"lift\" that feels integrated into the page, not pasted on top of it.

---

## 5. Components

### 5.1 Buttons & Interactive Elements
*   **Primary Button:** Uses the signature gradient (`primary` to `primary_container`). Shape is `md` (0.75rem) to maintain a modern, friendly balance. No border.
*   **Secondary/Tertiary:** Use `on-primary-fixed-variant` text with no background. On hover, reveal a `surface-container-highest` ghost background with a `full` (pill) radius.

### 5.2 Educational Activity Cards
*   **Rule:** Forbid divider lines. Use `vertical white space` (2rem - 3rem) to separate the title, image, and description.
*   **Style:** `surface-container-lowest` background, `xl` (1.5rem) corner radius. The top-right corner should feature a subtle \"Eco-Tag\" using the `tertiary_fixed` (#b7f558) color to denote activity types.

### 5.3 Methodology Sections
*   **Layout:** Use asymmetrical grids. For example, a 60/40 split where the image overlaps the text container slightly, creating a \"scrapbook\" feel that resonates with childhood and creativity.

### 5.4 Eco-Friendly Icons
*   **Style:** Use \"Duotone\" icons. The primary path in `primary` and the secondary/background path in `primary_fixed` at 40% opacity. This ensures the icons feel custom-designed for this system.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** use generous whitespace (80px+ between major sections).
*   **Do** use `primary_fixed` for background accents to emphasize \"Growth\" without overwhelming the user with dark greens.
*   **Do** ensure all interactive elements have a minimum touch target of 48px, keeping inclusion and children's motor skills in mind.

### Don’t:
*   **Don't** use 100% black text. Always use `on-surface` (#191c1d) to maintain a softer, premium contrast.
*   **Don't** use \"Card-in-Card\" layouts with borders. Use shifts in surface tones to show nesting.
*   **Don't** use standard \"Sky Blue.\" Use the specified `secondary` (#006399) to maintain the \"Trust/Water\" connection with a sophisticated, deep-sea professional edge.
*   **Don't** use sharp 90-degree corners. Everything must feel approachable; use the `md` to `xl` roundedness scale exclusively.
