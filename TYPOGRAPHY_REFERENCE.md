# Typography Reference

Complete typography system documentation for the Design System Dashboard, including design tokens, CSS variables, Tailwind tokens, font specifications, and component-level mappings.

> **Design Tokens**: This reference is synced with `design-tokens/typography.tokens.json`. All token values are defined in the JSON file and referenced here.

---

## Table of Contents

1. [Font Families](#font-families)
2. [Font Sizes](#font-sizes)
3. [Font Weights](#font-weights)
4. [Line Heights](#line-heights)
5. [Base Typography Styles](#base-typography-styles)
6. [Tailwind CSS Classes](#tailwind-css-classes)
7. [Component-Level Mappings](#component-level-mappings)
8. [Usage Guidelines](#usage-guidelines)

---

## Font Families

### Design Tokens

| Token Name | Value | Usage | Source |
|------------|-------|-------|--------|
| `typography.fontFamily.urbanist` | `Urbanist, sans-serif` | Headings (h1-h6) | Google Fonts |
| `typography.fontFamily.inter` | `Inter, sans-serif` | Body text, UI elements | Google Fonts |
| `typography.fontFamily.mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace` | Code blocks, technical text | System fallback |
| `typography.fontFamily.sans` | `ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'` | System sans-serif fallback | System |

### Primary Fonts

| Font Family | Usage | Source | Weights Available |
|------------|-------|--------|-------------------|
| **Urbanist** | Headings (h1-h6) | Google Fonts | 400, 500, 600, 700 |
| **Inter** | Body text, UI elements | Google Fonts | 400, 500, 600, 700 |
| **Monospace** | Code blocks, technical text | System fallback | Inherits from system |

### CSS Variable Definitions

```css
--default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
```

### Implementation

```css
/* Body text uses Inter */
body {
  font-family: 'Inter', sans-serif;
}

/* Headings use Urbanist */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Urbanist', sans-serif;
}

/* Code uses monospace */
code, kbd, samp, pre {
  font-family: var(--default-mono-font-family);
}
```

---

## Font Sizes

### Design Tokens

| Token Name | Value | Value (px) | Usage |
|------------|-------|------------|-------|
| `typography.fontSize.html` | `16px` | 16px | Base HTML font size |
| `typography.fontSize.xs` | `0.75rem` | 12px | Extra small text, labels, captions |
| `typography.fontSize.sm` | `0.875rem` | 14px | Small text, buttons, inputs |
| `typography.fontSize.base` | `1rem` | 16px | Base body text, default size |
| `typography.fontSize.lg` | `1.125rem` | 18px | Large text (used in dialogs) |
| `typography.fontSize.2xl` | `1.5rem` | 24px | Large headings, emphasis |
| `typography.fontSize.h1` | `56px` | 56px | Page titles, hero headings |
| `typography.fontSize.h2` | `44px` | 44px | Section headings |
| `typography.fontSize.h3` | `32px` | 32px | Subsection headings |
| `typography.fontSize.h4` | `28px` | 28px | Card titles, component headings |
| `typography.fontSize.h5` | `24px` | 24px | Small headings, list titles |
| `typography.fontSize.h6` | `18px` | 18px | Smallest headings, labels |
| `typography.fontSize.body` | `14px` | 14px | Paragraph text, body content |
| `typography.fontSize.label` | `14px` | 14px | Form labels |
| `typography.fontSize.button` | `14px` | 14px | Button text |
| `typography.fontSize.input` | `14px` | 14px | Input field text |

### CSS Variables (Tailwind Tokens)

| Token | CSS Variable | Value (rem) | Value (px) | Usage |
|-------|--------------|-------------|------------|-------|
| `text-xs` | `--text-xs` | 0.75rem | 12px | Extra small text, labels, captions |
| `text-sm` | `--text-sm` | 0.875rem | 14px | Small text, buttons, inputs |
| `text-base` | `--text-base` | 1rem | 16px | Base body text, default size |
| `text-2xl` | `--text-2xl` | 1.5rem | 24px | Large headings, emphasis |

### Base HTML Font Size

```css
--font-size: 16px
html {
  font-size: var(--font-size);
}
```

### Semantic Heading Sizes

| Element | Font Size | Token Reference | Usage |
|---------|-----------|-----------------|-------|
| `h1` | 56px | `typography.fontSize.h1` | Page titles, hero headings |
| `h2` | 44px | `typography.fontSize.h2` | Section headings |
| `h3` | 32px | `typography.fontSize.h3` | Subsection headings |
| `h4` | 28px | `typography.fontSize.h4` | Card titles, component headings |
| `h5` | 24px | `typography.fontSize.h5` | Small headings, list titles |
| `h6` | 18px | `typography.fontSize.h6` | Smallest headings, labels |

### Body Text Sizes

| Element | Font Size | Token Reference | Usage |
|---------|-----------|-----------------|-------|
| `p` | 14px | `typography.fontSize.body` | Paragraph text, body content |
| `label` | 14px | `typography.fontSize.label` | Form labels |
| `button` | 14px | `typography.fontSize.button` | Button text |
| `input` | 14px | `typography.fontSize.input` | Input field text |

### Additional Size Utilities

| Class | Value | Usage |
|-------|-------|-------|
| `text-[14px]` | 14px | Inline size override |
| `text-lg` | 18px (1.125rem) | Large text (used in dialogs) - matches `typography.fontSize.lg` |

---

## Font Weights

### Design Tokens

| Token Name | Value | Usage |
|------------|-------|-------|
| `typography.fontWeight.normal` | `400` | Normal font weight for body text |
| `typography.fontWeight.medium` | `500` | Medium font weight for headings and UI elements |
| `typography.fontWeight.semibold` | `600` | Semibold font weight for dialog titles and emphasis |
| `typography.fontWeight.bold` | `700` | Bold font weight (available but rarely used) |

### CSS Variables

| Token | CSS Variable | Value | Usage |
|-------|--------------|-------|-------|
| `font-normal` | `--font-weight-normal` | 400 | Body text, paragraphs, inputs |
| `font-medium` | `--font-weight-medium` | 500 | Headings, labels, buttons, emphasis |

### Additional Weights

| Weight | Value | Token Reference | Usage | Components |
|-------|-------|-----------------|-------|------------|
| `font-semibold` | 600 | `typography.fontWeight.semibold` | Dialog titles, sheet titles, drawer titles | `Dialog`, `Sheet`, `Drawer`, `AlertDialog` |
| `bolder` | Inherited | - | Strong/bold text | `<b>`, `<strong>` elements |

### Weight Distribution

- **400 (Normal)**: Default for body text, inputs, paragraphs - `typography.fontWeight.normal`
- **500 (Medium)**: Default for headings, labels, buttons, UI elements - `typography.fontWeight.medium`
- **600 (Semibold)**: Used for modal/dialog titles and emphasis - `typography.fontWeight.semibold`
- **700 (Bold)**: Available but rarely used - `typography.fontWeight.bold`

---

## Line Heights

### Design Tokens

| Token Name | Value | Type | Usage |
|------------|-------|------|-------|
| `typography.lineHeight.none` | `1` | number | Tight line height for single-line text |
| `typography.lineHeight.tight` | `1.2` | number | Tight line height for h1 |
| `typography.lineHeight.snug` | `1.3` | number | Snug line height for h2, h3 |
| `typography.lineHeight.normal` | `1.4` | number | Normal line height for h4, h5, h6, labels, buttons |
| `typography.lineHeight.relaxed` | `1.5` | number | Relaxed line height for inputs and labels |
| `typography.lineHeight.loose` | `1.6` | number | Loose line height for paragraphs |
| `typography.lineHeight.xs` | `1.33` | number | Line height for text-xs (calculated: 1 / 0.75) |
| `typography.lineHeight.sm` | `1.43` | number | Line height for text-sm (calculated: 1.25 / 0.875) |
| `typography.lineHeight.base` | `1.5` | number | Line height for text-base (calculated: 1.5 / 1) |
| `typography.lineHeight.2xl` | `1.33` | number | Line height for text-2xl (calculated: 2 / 1.5) |
| `typography.lineHeight.fixed-6` | `1.5rem` | dimension | Fixed line height of 24px (1.5rem) |

### CSS Variables (Calculated)

| Token | CSS Variable | Calculated Value | Ratio | Token Reference |
|-------|--------------|------------------|-------|-----------------|
| `text-xs` | `--text-xs--line-height` | `calc(1 / .75)` = 1.33 | 1.33:1 | `typography.lineHeight.xs` |
| `text-sm` | `--text-sm--line-height` | `calc(1.25 / .875)` = 1.43 | 1.43:1 | `typography.lineHeight.sm` |
| `text-base` | `--text-base--line-height` | `calc(1.5 / 1)` = 1.5 | 1.5:1 | `typography.lineHeight.base` |
| `text-2xl` | `--text-2xl--line-height` | `calc(2 / 1.5)` = 1.33 | 1.33:1 | `typography.lineHeight.2xl` |

### Semantic Element Line Heights

| Element | Line Height | Token Reference | Usage |
|---------|------------|-----------------|-------|
| `h1` | 1.2 | `typography.lineHeight.tight` | Tight spacing for large headings |
| `h2` | 1.3 | `typography.lineHeight.snug` | Compact spacing for section headings |
| `h3` | 1.3 | `typography.lineHeight.snug` | Compact spacing for subsections |
| `h4` | 1.4 | `typography.lineHeight.normal` | Balanced spacing for card titles |
| `h5` | 1.4 | `typography.lineHeight.normal` | Balanced spacing for small headings |
| `h6` | 1.4 | `typography.lineHeight.normal` | Balanced spacing for labels |
| `p` | 1.6 | `typography.lineHeight.loose` | Comfortable reading for paragraphs |
| `label` | 1.5 | `typography.lineHeight.relaxed` | Standard spacing for form labels |
| `button` | 1.5 | `typography.lineHeight.relaxed` | Standard spacing for button text |
| `input` | 1.5 | `typography.lineHeight.relaxed` | Standard spacing for input text |

### Utility Classes

| Class | Value | Token Reference | Usage |
|-------|-------|-----------------|-------|
| `leading-none` | 1 | `typography.lineHeight.none` | Tight spacing, single-line text |
| `leading-6` | 1.5rem (24px) | `typography.lineHeight.fixed-6` | Fixed line height in spacing units |
| `leading-relaxed` | ~1.625 | - | More relaxed spacing for readability |

### Default Line Height

```css
html, :host {
  line-height: 1.5; /* Default for all elements */
}
```

---

## Base Typography Styles

### Heading Hierarchy

```css
h1 {
  font-size: 56px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.2;
  font-family: 'Urbanist', sans-serif;
}

h2 {
  font-size: 44px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.3;
  font-family: 'Urbanist', sans-serif;
}

h3 {
  font-size: 32px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.3;
  font-family: 'Urbanist', sans-serif;
}

h4 {
  font-size: 28px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.4;
  font-family: 'Urbanist', sans-serif;
}

h5 {
  font-size: 24px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.4;
  font-family: 'Urbanist', sans-serif;
}

h6 {
  font-size: 18px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.4;
  font-family: 'Urbanist', sans-serif;
}
```

### Body Text

```css
p {
  font-size: 14px;
  font-weight: var(--font-weight-normal); /* 400 */
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}
```

### Form Elements

```css
label {
  font-size: 14px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
}

button {
  font-size: 14px;
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
}

input {
  font-size: 14px;
  font-weight: var(--font-weight-normal); /* 400 */
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
}
```

### Code Elements

```css
code, kbd, samp, pre {
  font-family: var(--default-mono-font-family);
  font-size: 1em; /* Inherits from parent */
}
```

### Special Elements

```css
small {
  font-size: 80%; /* Relative to parent */
}

sub, sup {
  font-size: 75%; /* Relative to parent */
  line-height: 0;
}
```

---

## Tailwind CSS Classes

### Font Size Classes

| Class | CSS Variable | Size (px) | Usage Example |
|-------|--------------|-----------|---------------|
| `text-xs` | `--text-xs` | 12px | `<span className="text-xs">Caption</span>` |
| `text-sm` | `--text-sm` | 14px | `<span className="text-sm">Button text</span>` |
| `text-base` | `--text-base` | 16px | `<p className="text-base">Body text</p>` |
| `text-2xl` | `--text-2xl` | 24px | `<h2 className="text-2xl">Heading</h2>` |
| `text-lg` | - | 18px | `<h6 className="text-lg">Large text</h6>` |
| `text-[14px]` | - | 14px | Inline size override |

### Font Weight Classes

| Class | CSS Variable | Value | Usage Example |
|-------|--------------|-------|---------------|
| `font-normal` | `--font-weight-normal` | 400 | `<p className="font-normal">Text</p>` |
| `font-medium` | `--font-weight-medium` | 500 | `<span className="font-medium">Emphasis</span>` |
| `font-semibold` | - | 600 | `<h2 className="font-semibold">Title</h2>` |

### Line Height Classes

| Class | Value | Usage Example |
|-------|-------|---------------|
| `leading-none` | 1 | `<span className="leading-none">Tight</span>` |
| `leading-6` | 1.5rem (24px) | `<p className="leading-6">Fixed height</p>` |
| `leading-relaxed` | ~1.625 | `<p className="leading-relaxed">Readable</p>` |

### Font Family Classes

| Class | Font Family | Usage Example |
|-------|-------------|---------------|
| `font-mono` | Monospace | `<code className="font-mono">Code</code>` |

---

## Component-Level Mappings

### UI Components

#### Buttons (`ui/button.tsx`)
- **Size**: `text-sm` (14px)
- **Weight**: `font-medium` (500)
- **Usage**: All button variants

#### Labels (`ui/label.tsx`)
- **Size**: `text-sm` (14px)
- **Weight**: `font-medium` (500)
- **Line Height**: `leading-none`

#### Inputs (`ui/input.tsx`)
- **Size**: `text-base` (16px) / `md:text-sm` (14px on medium+ screens)
- **Weight**: `font-normal` (400)
- **File selector**: `text-sm font-medium`

#### Badges (`ui/badge.tsx`)
- **Size**: `text-xs` (12px)
- **Weight**: `font-medium` (500)

#### Dialogs (`ui/dialog.tsx`, `ui/alert-dialog.tsx`)
- **Title Size**: `text-lg` (18px)
- **Title Weight**: `font-semibold` (600)
- **Title Line Height**: `leading-none`

#### Sheets & Drawers (`ui/sheet.tsx`, `ui/drawer.tsx`)
- **Title Weight**: `font-semibold` (600)

#### Tooltips (`ui/tooltip.tsx`)
- **Size**: `text-xs` (12px)

#### Tables (`ui/table.tsx`)
- **Header**: `font-medium` (500)
- **Cell**: Inherits from base

#### Cards (`ui/card.tsx`)
- **Title**: Inherits from heading styles
- **Content**: Inherits from paragraph styles

### Demo Components

#### Confidence Tags
- **High/Medium/Low Confidence Tags**: `text-xs` (12px)
- **Usage**: Tag labels, percentages, confidence scores

#### Error Handling
- **Error Messages**: `text-xs` (12px) or `text-sm` (14px)
- **Error Buttons**: `text-sm` (14px) with `font-medium` (500)
- **Error Descriptions**: `text-xs` (12px) with `text-muted-foreground`

#### Hint Text (`demos/HintText.tsx`)
- **Size**: `text-sm` (14px)
- **Weight**: `font-medium` (500)
- **Usage**: Informational hints, warnings, success messages

#### Fallback Messages (`demos/FallbackMessageCard.tsx`)
- **Title**: `text-base font-medium` (16px, 500)
- **Body**: `text-[14px] leading-5` (14px, 1.25 line height)

#### Highlighted Evidence Links (`demos/HighlightedEvidenceLinks.tsx`)
- **Size**: `text-xs` (12px) or `text-sm` (14px)
- **Weight**: `font-medium` (500)

### Sidebar Component (`Sidebar.tsx`)

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| Version text | `text-xs` | Normal | Version label |
| Section headers | `text-xs` | Normal | "Recent searches" |
| Menu items | `text-sm` | Normal | Navigation links |
| Category names | `text-sm` | Normal | Category labels |

### Code Block Component (`CodeBlock.tsx`)

| Element | Size | Weight | Font Family | Usage |
|---------|------|--------|-------------|-------|
| Line numbers | `text-sm` | Normal | `font-mono` | Code line numbers |
| Code content | `text-sm` | Normal | `font-mono` | Code text |
| Copy button | `text-xs` | `font-medium` | System | Button text |

---

## Usage Guidelines

### When to Use Each Font Size

#### `text-xs` (12px)
- **Use for**: Captions, labels, metadata, confidence percentages, tooltips, badges
- **Examples**: 
  - Confidence tag labels: "High Confidence (94%)"
  - Error messages: "Something went wrong"
  - Version numbers, timestamps
  - Tooltip content

#### `text-sm` (14px)
- **Use for**: Buttons, form inputs, small body text, UI labels, navigation items
- **Examples**:
  - Button text: "Retry", "Dismiss"
  - Input field text
  - Sidebar navigation items
  - Hint text, warnings

#### `text-base` (16px)
- **Use for**: Default body text, paragraphs, main content
- **Examples**:
  - Article content
  - Card descriptions
  - Default paragraph text

#### `text-2xl` (24px)
- **Use for**: Large headings, emphasis, section titles
- **Examples**:
  - Page section headings
  - Card titles
  - Prominent display text

### When to Use Each Font Weight

#### `font-normal` (400)
- **Use for**: Body text, paragraphs, inputs, readable content
- **Examples**: Paragraphs, input fields, descriptions

#### `font-medium` (500)
- **Use for**: Headings, labels, buttons, UI elements, emphasis
- **Examples**: All headings (h1-h6), button text, form labels, badges

#### `font-semibold` (600)
- **Use for**: Dialog titles, modal headings, strong emphasis
- **Examples**: Dialog titles, sheet titles, drawer titles

### Font Family Guidelines

#### Urbanist (Headings)
- **Use for**: All heading elements (h1-h6)
- **Purpose**: Distinctive, modern heading style
- **Weights**: 400, 500, 600, 700 available

#### Inter (Body)
- **Use for**: Body text, UI elements, buttons, labels
- **Purpose**: Clean, readable body font
- **Weights**: 400, 500, 600, 700 available

#### Monospace (Code)
- **Use for**: Code blocks, technical text, inline code
- **Purpose**: Technical readability
- **Fallback**: System monospace fonts

### Line Height Guidelines

#### Tight (1.2-1.3)
- **Use for**: Large headings, single-line text
- **Examples**: h1, h2, h3, display text

#### Normal (1.4-1.5)
- **Use for**: Headings, labels, buttons, UI elements
- **Examples**: h4, h5, h6, labels, buttons

#### Relaxed (1.6+)
- **Use for**: Paragraphs, body text, long-form content
- **Examples**: Paragraphs, descriptions, articles

### Responsive Considerations

- **Input fields**: Use `text-base` on mobile, `md:text-sm` on medium+ screens
- **Body text**: Generally consistent across breakpoints
- **Headings**: Fixed sizes, consider responsive adjustments if needed

### Accessibility Notes

- **Minimum font size**: 12px (`text-xs`) for readable text
- **Line height**: Minimum 1.4 for body text (WCAG recommendation)
- **Contrast**: Ensure sufficient contrast ratios for all text sizes
- **Font weights**: Use medium (500) for better readability in UI elements

---

## Quick Reference Table

| Element/Use Case | Font Family | Size | Weight | Line Height | Tailwind Classes | Token Reference |
|-----------------|-------------|------|--------|------------|------------------|-----------------|
| Page Title | Urbanist | 56px | 500 | 1.2 | `h1` | `fontSize.h1`, `fontWeight.medium`, `lineHeight.tight` |
| Section Heading | Urbanist | 44px | 500 | 1.3 | `h2` | `fontSize.h2`, `fontWeight.medium`, `lineHeight.snug` |
| Subsection | Urbanist | 32px | 500 | 1.3 | `h3` | `fontSize.h3`, `fontWeight.medium`, `lineHeight.snug` |
| Card Title | Urbanist | 28px | 500 | 1.4 | `h4` | `fontSize.h4`, `fontWeight.medium`, `lineHeight.normal` |
| Small Heading | Urbanist | 24px | 500 | 1.4 | `h5` | `fontSize.h5`, `fontWeight.medium`, `lineHeight.normal` |
| Label Heading | Urbanist | 18px | 500 | 1.4 | `h6` | `fontSize.h6`, `fontWeight.medium`, `lineHeight.normal` |
| Body Text | Inter | 14px | 400 | 1.6 | `p` | `fontSize.body`, `fontWeight.normal`, `lineHeight.loose` |
| Button | Inter | 14px | 500 | 1.5 | `text-sm font-medium` | `fontSize.button`, `fontWeight.medium`, `lineHeight.relaxed` |
| Input | Inter | 14px | 400 | 1.5 | `text-sm` | `fontSize.input`, `fontWeight.normal`, `lineHeight.relaxed` |
| Label | Inter | 14px | 500 | 1.5 | `text-sm font-medium` | `fontSize.label`, `fontWeight.medium`, `lineHeight.relaxed` |
| Caption | Inter | 12px | 400 | 1.33 | `text-xs` | `fontSize.xs`, `fontWeight.normal`, `lineHeight.xs` |
| Badge | Inter | 12px | 500 | 1.33 | `text-xs font-medium` | `fontSize.xs`, `fontWeight.medium`, `lineHeight.xs` |
| Tooltip | Inter | 12px | 400 | 1.33 | `text-xs` | `fontSize.xs`, `fontWeight.normal`, `lineHeight.xs` |
| Code | Monospace | 1em | Inherited | Inherited | `font-mono` | `fontFamily.mono` |
| Dialog Title | Inter | 18px | 600 | 1 | `text-lg font-semibold leading-none` | `fontSize.lg`, `fontWeight.semibold`, `lineHeight.none` |

---

## File Locations

### CSS Files
- **`src/styles/globals.css`**: Base typography definitions, font imports, heading styles
- **`src/index.css`**: Tailwind CSS variables, utility classes, base styles

### Component Files
- **`src/components/ui/*.tsx`**: UI component typography implementations
- **`src/components/demos/*.tsx`**: Demo component typography examples
- **`src/components/Sidebar.tsx`**: Sidebar typography styles
- **`src/components/CodeBlock.tsx`**: Code block typography

---

## Notes

- All typography styles are scoped to elements without Tailwind text classes using the `:not(:has([class*=' text-']))` selector
- Font sizes use CSS variables for consistency and theming
- Line heights are calculated dynamically based on font sizes
- The base HTML font size is 16px, making rem calculations straightforward
- Urbanist and Inter fonts are loaded from Google Fonts
- Monospace fonts fall back to system fonts for better performance

---

## Design Tokens Reference

All typography tokens are defined in `design-tokens/typography.tokens.json` following the W3C Design Tokens format. The token structure is:

```json
{
  "typography": {
    "fontFamily": { ... },
    "fontSize": { ... },
    "fontWeight": { ... },
    "lineHeight": { ... },
    "letterSpacing": { ... }
  }
}
```

### Token Naming Convention

Tokens follow a hierarchical naming structure:
- `typography.fontFamily.{name}` - Font family tokens
- `typography.fontSize.{name}` - Font size tokens
- `typography.fontWeight.{name}` - Font weight tokens
- `typography.lineHeight.{name}` - Line height tokens
- `typography.letterSpacing.{name}` - Letter spacing tokens

### Using Design Tokens

Design tokens can be consumed by:
- **Style Dictionary**: Transform tokens to platform-specific formats
- **Figma Tokens**: Import into Figma for design system sync
- **CSS Variables**: Generate CSS custom properties
- **JavaScript/TypeScript**: Import JSON directly for programmatic access

---

*Last updated: Synced with design-tokens/typography.tokens.json*
*Design System Dashboard - Typography Reference v1.1*

