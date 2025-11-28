# Color Reference

Complete color system documentation for the Design System Dashboard, including semantic colors, roles, usage guidelines, and gradient palettes.

> **Design Tokens**: This reference is synced with `design-tokens/color.tokens.json`. All color values are defined in the JSON file and referenced here.

---

## Table of Contents

1. [Semantic Colors](#semantic-colors)
2. [Color Roles](#color-roles)
3. [Usage Guidelines](#usage-guidelines)
4. [Gradient Palettes](#gradient-palettes)
5. [Chart Colors](#chart-colors)
6. [Sidebar Colors](#sidebar-colors)
7. [Color Palette](#color-palette)

---

## Semantic Colors

Semantic colors are purpose-driven colors that convey meaning and context. They adapt automatically between light and dark modes.

### Core Semantic Colors

#### Primary

**Role**: Main brand color, primary actions, important elements

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.primary` | `#030213` | <div style="background: #030213; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Primary buttons, brand elements, headings |
| Dark | `color.semantic.dark.primary` | `oklch(0.985 0 0)` | <div style="background: oklch(0.985 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Primary buttons, brand elements, headings |

**Foreground Colors**:
- Light: `color.semantic.light.primaryForeground` → `oklch(1 0 0)` (white)
- Dark: `color.semantic.dark.primaryForeground` → `oklch(0.205 0 0)` (dark gray)

```css
/* Light Mode */
--primary: #030213;
--primary-foreground: oklch(1 0 0);

/* Dark Mode */
--primary: oklch(0.985 0 0);
--primary-foreground: oklch(0.205 0 0);
```

#### Secondary

**Role**: Secondary actions, supporting elements, subtle backgrounds

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.secondary` | `oklch(0.95 0.0058 264.53)` | <div style="background: oklch(0.95 0.0058 264.53); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Secondary buttons, subtle backgrounds |
| Dark | `color.semantic.dark.secondary` | `oklch(0.269 0 0)` | <div style="background: oklch(0.269 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Secondary buttons, subtle backgrounds |

**Foreground Colors**:
- Light: `color.semantic.light.secondaryForeground` → `#030213`
- Dark: `color.semantic.dark.secondaryForeground` → `oklch(0.985 0 0)`

#### Accent

**Role**: Accent elements, hover states, interactive highlights

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.accent` | `#e9ebef` | <div style="background: #e9ebef; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Hover states, accent backgrounds |
| Dark | `color.semantic.dark.accent` | `oklch(0.269 0 0)` | <div style="background: oklch(0.269 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Hover states, accent backgrounds |

**Foreground Colors**:
- Light: `color.semantic.light.accentForeground` → `#030213`
- Dark: `color.semantic.dark.accentForeground` → `oklch(0.985 0 0)`

#### Destructive

**Role**: Error states, destructive actions, warnings

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.destructive` | `#d4183d` | <div style="background: #d4183d; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Error messages, delete buttons, warnings |
| Dark | `color.semantic.dark.destructive` | `oklch(0.396 0.141 25.723)` | <div style="background: oklch(0.396 0.141 25.723); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Error messages, delete buttons, warnings |

**Foreground Colors**:
- Light: `color.semantic.light.destructiveForeground` → `#ffffff`
- Dark: `color.semantic.dark.destructiveForeground` → `oklch(0.637 0.237 25.331)`

### Surface Colors

#### Background

**Role**: Main application background

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.background` | `#ffffff` | <div style="background: #ffffff; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Main page background |
| Dark | `color.semantic.dark.background` | `oklch(0.145 0 0)` | <div style="background: oklch(0.145 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Main page background |

#### Foreground

**Role**: Primary text color

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.foreground` | `oklch(0.145 0 0)` | <div style="background: oklch(0.145 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Primary text |
| Dark | `color.semantic.dark.foreground` | `oklch(0.985 0 0)` | <div style="background: oklch(0.985 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Primary text |

#### Card

**Role**: Card and panel backgrounds

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.card` | `#ffffff` | <div style="background: #ffffff; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Card backgrounds |
| Dark | `color.semantic.dark.card` | `oklch(0.145 0 0)` | <div style="background: oklch(0.145 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Card backgrounds |

**Foreground Colors**:
- Light: `color.semantic.light.cardForeground` → `oklch(0.145 0 0)`
- Dark: `color.semantic.dark.cardForeground` → `oklch(0.985 0 0)`

#### Muted

**Role**: Subtle backgrounds, disabled states, secondary information

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.muted` | `#ececf0` | <div style="background: #ececf0; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Subtle backgrounds, disabled states |
| Dark | `color.semantic.dark.muted` | `oklch(0.269 0 0)` | <div style="background: oklch(0.269 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Subtle backgrounds, disabled states |

**Foreground Colors**:
- Light: `color.semantic.light.mutedForeground` → `#717182`
- Dark: `color.semantic.dark.mutedForeground` → `oklch(0.708 0 0)`

### Interactive Elements

#### Border

**Role**: Borders, dividers, outlines

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.border` | `rgba(0, 0, 0, 0.1)` | <div style="background: rgba(0, 0, 0, 0.1); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Borders, dividers |
| Dark | `color.semantic.dark.border` | `oklch(0.269 0 0)` | <div style="background: oklch(0.269 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Borders, dividers |

#### Input

**Role**: Input field borders and backgrounds

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.input` | `transparent` | - | Input borders |
| Light | `color.semantic.light.inputBackground` | `#f3f3f5` | <div style="background: #f3f3f5; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Input backgrounds |
| Dark | `color.semantic.dark.input` | `oklch(0.269 0 0)` | <div style="background: oklch(0.269 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Input borders |

#### Ring

**Role**: Focus rings, focus indicators

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.ring` | `oklch(0.708 0 0)` | <div style="background: oklch(0.708 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Focus rings |
| Dark | `color.semantic.dark.ring` | `oklch(0.439 0 0)` | <div style="background: oklch(0.439 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Focus rings |

#### Popover

**Role**: Popover and tooltip backgrounds

| Mode | Token | Value | Swatch | Usage |
|------|-------|-------|--------|-------|
| Light | `color.semantic.light.popover` | `oklch(1 0 0)` | <div style="background: oklch(1 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Popover backgrounds |
| Dark | `color.semantic.dark.popover` | `oklch(0.145 0 0)` | <div style="background: oklch(0.145 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Popover backgrounds |

**Foreground Colors**:
- Light: `color.semantic.light.popoverForeground` → `oklch(0.145 0 0)`
- Dark: `color.semantic.dark.popoverForeground` → `oklch(0.985 0 0)`

---

## Color Roles

### Primary Role

**Purpose**: Brand identity, primary actions, key interactive elements

**Usage**:
- Primary buttons (`bg-primary text-primary-foreground`)
- Brand logos and headings
- Important call-to-action elements
- Navigation active states

**Examples**:
```tsx
// Primary button
<button className="bg-primary text-primary-foreground">
  Submit
</button>

// Brand heading
<h1 className="text-primary">Design System</h1>
```

### Secondary Role

**Purpose**: Secondary actions, supporting elements

**Usage**:
- Secondary buttons (`bg-secondary text-secondary-foreground`)
- Supporting UI elements
- Alternative action options

**Examples**:
```tsx
// Secondary button
<button className="bg-secondary text-secondary-foreground">
  Cancel
</button>
```

### Accent Role

**Purpose**: Interactive highlights, hover states, emphasis

**Usage**:
- Hover states (`hover:bg-accent hover:text-accent-foreground`)
- Interactive element backgrounds
- Subtle emphasis

**Examples**:
```tsx
// Hoverable element
<div className="hover:bg-accent hover:text-accent-foreground">
  Interactive Item
</div>
```

### Destructive Role

**Purpose**: Error states, destructive actions, warnings

**Usage**:
- Delete buttons (`bg-destructive text-destructive-foreground`)
- Error messages
- Warning indicators
- Destructive actions

**Examples**:
```tsx
// Destructive button
<button className="bg-destructive text-destructive-foreground">
  Delete
</button>

// Error message
<div className="text-destructive">
  Something went wrong
</div>
```

### Muted Role

**Purpose**: Subtle backgrounds, disabled states, secondary information

**Usage**:
- Disabled elements (`bg-muted text-muted-foreground`)
- Subtle backgrounds
- Secondary text
- Placeholder content

**Examples**:
```tsx
// Disabled button
<button disabled className="bg-muted text-muted-foreground">
  Disabled
</button>

// Secondary text
<p className="text-muted-foreground">Additional information</p>
```

---

## Usage Guidelines

### When to Use Semantic Colors

1. **Always prefer semantic colors** over raw palette colors for UI elements
2. **Use semantic colors** for:
   - Buttons and interactive elements
   - Text and backgrounds
   - Borders and dividers
   - States (hover, focus, active, disabled)
   - Error and warning messages

3. **Use palette colors** for:
   - Data visualization (charts, graphs)
   - Custom illustrations
   - Brand-specific elements that need exact color matching

### Color Contrast Guidelines

All semantic color pairs meet WCAG AA contrast requirements:

- **Text on Background**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Minimum 3:1 contrast ratio

### Light vs Dark Mode

- **Automatic Adaptation**: Semantic colors automatically adapt between light and dark modes
- **Consistent Meaning**: Color roles remain consistent across modes
- **Testing**: Always test components in both light and dark modes

### Do's and Don'ts

**✅ Do:**
- Use semantic color tokens in components
- Test color combinations for accessibility
- Use foreground colors with their corresponding background colors
- Leverage automatic dark mode adaptation

**❌ Don't:**
- Use raw hex colors for UI elements (use semantic tokens)
- Mix light and dark mode colors manually
- Use low contrast color combinations
- Override semantic colors without good reason

---

## Gradient Palettes

Gradients are used for confidence indicators and special visual effects.

### Positive Green Gradient

**Token**: `color.gradient.positiveGreen`  
**Value**: `linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%)`  
**Usage**: High confidence tags, success indicators

```css
.bg-positive-green {
  background: linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%);
}
```

**Color Swatches**:
```
Start: #4FDD39 (Bright Green)
████████████████████████████████████████████████████████████████
End:   #8BE07E (Light Green)
████████████████████████████████████████████████████████████████
```

**Usage Example**:
```tsx
<div className="bg-positive-green text-green-900 border-green-400/50">
  High Confidence (94%)
</div>
```

### Medium Confidence Gradient

**Token**: `color.gradient.mediumConfidence`  
**Value**: `linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)`  
**Usage**: Medium confidence tags, warning indicators

```css
.medium-confidence-gradient {
  background: linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%);
}
```

**Color Swatches**:
```
Start: #FF7935 (Orange)
████████████████████████████████████████████████████████████████
End:   #F5A57C (Light Orange)
████████████████████████████████████████████████████████████████
```

**Usage Example**:
```tsx
<div 
  style={{ 
    background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' 
  }}
  className="text-orange-900 border-orange-400/50"
>
  Medium Confidence (68%)
</div>
```

### Low Confidence Gradient

**Token**: `color.gradient.lowConfidence`  
**Value**: `linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)`  
**Usage**: Low confidence tags, error indicators

```css
.low-confidence-gradient {
  background: linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%);
}
```

**Color Swatches**:
```
Start: #FF3879 (Pink)
████████████████████████████████████████████████████████████████
End:   #F57EA5 (Light Pink)
████████████████████████████████████████████████████████████████
```

**Usage Example**:
```tsx
<div 
  style={{ 
    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' 
  }}
  className="text-pink-900 border-pink-400/50"
>
  Low Confidence (42%)
</div>
```

### Gradient Usage Guidelines

1. **Confidence Indicators**: Use gradients for confidence score tags
2. **Visual Hierarchy**: Gradients add visual interest and help distinguish confidence levels
3. **Text Contrast**: Always use dark text colors on gradient backgrounds for readability
4. **Border Colors**: Use semi-transparent borders that complement the gradient

---

## Chart Colors

Chart colors are used for data visualization and graphs. They have separate light and dark mode variants.

### Light Mode Chart Colors

| Token | Value | Swatch | Usage |
|-------|-------|--------|-------|
| `color.semantic.chart.1` | `oklch(0.646 0.222 41.116)` | <div style="background: oklch(0.646 0.222 41.116); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 1 |
| `color.semantic.chart.2` | `oklch(0.6 0.118 184.704)` | <div style="background: oklch(0.6 0.118 184.704); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 2 |
| `color.semantic.chart.3` | `oklch(0.398 0.07 227.392)` | <div style="background: oklch(0.398 0.07 227.392); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 3 |
| `color.semantic.chart.4` | `oklch(0.828 0.189 84.429)` | <div style="background: oklch(0.828 0.189 84.429); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 4 |
| `color.semantic.chart.5` | `oklch(0.769 0.188 70.08)` | <div style="background: oklch(0.769 0.188 70.08); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 5 |

### Dark Mode Chart Colors

| Token | Value | Swatch | Usage |
|-------|-------|--------|-------|
| `color.semantic.chart.dark.1` | `oklch(0.488 0.243 264.376)` | <div style="background: oklch(0.488 0.243 264.376); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 1 |
| `color.semantic.chart.dark.2` | `oklch(0.696 0.17 162.48)` | <div style="background: oklch(0.696 0.17 162.48); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 2 |
| `color.semantic.chart.dark.3` | `oklch(0.769 0.188 70.08)` | <div style="background: oklch(0.769 0.188 70.08); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 3 |
| `color.semantic.chart.dark.4` | `oklch(0.627 0.265 303.9)` | <div style="background: oklch(0.627 0.265 303.9); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 4 |
| `color.semantic.chart.dark.5` | `oklch(0.645 0.246 16.439)` | <div style="background: oklch(0.645 0.246 16.439); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Chart series 5 |

**Usage**:
```tsx
// Chart color usage
<div style={{ backgroundColor: 'var(--chart-1)' }}>Series 1</div>
<div style={{ backgroundColor: 'var(--chart-2)' }}>Series 2</div>
<div style={{ backgroundColor: 'var(--chart-3)' }}>Series 3</div>
<div style={{ backgroundColor: 'var(--chart-4)' }}>Series 4</div>
<div style={{ backgroundColor: 'var(--chart-5)' }}>Series 5</div>
```

---

## Sidebar Colors

Sidebar colors are specialized semantic colors for the navigation sidebar component.

### Light Mode Sidebar Colors

| Token | Value | Swatch | Usage |
|-------|-------|--------|-------|
| `color.semantic.sidebar.light.background` | `oklch(0.985 0 0)` | <div style="background: oklch(0.985 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar background |
| `color.semantic.sidebar.light.foreground` | `oklch(0.145 0 0)` | <div style="background: oklch(0.145 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar text |
| `color.semantic.sidebar.light.primary` | `#030213` | <div style="background: #030213; width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar primary elements |
| `color.semantic.sidebar.light.accent` | `oklch(0.97 0 0)` | <div style="background: oklch(0.97 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar accent/hover |
| `color.semantic.sidebar.light.border` | `oklch(0.922 0 0)` | <div style="background: oklch(0.922 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar borders |
| `color.semantic.sidebar.light.ring` | `oklch(0.708 0 0)` | <div style="background: oklch(0.708 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar focus ring |

### Dark Mode Sidebar Colors

| Token | Value | Swatch | Usage |
|-------|-------|--------|-------|
| `color.semantic.sidebar.dark.background` | `oklch(0.205 0 0)` | <div style="background: oklch(0.205 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar background |
| `color.semantic.sidebar.dark.foreground` | `oklch(0.985 0 0)` | <div style="background: oklch(0.985 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar text |
| `color.semantic.sidebar.dark.primary` | `oklch(0.488 0.243 264.376)` | <div style="background: oklch(0.488 0.243 264.376); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar primary elements |
| `color.semantic.sidebar.dark.accent` | `oklch(0.269 0 0)` | <div style="background: oklch(0.269 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar accent/hover |
| `color.semantic.sidebar.dark.border` | `oklch(0.269 0 0)` | <div style="background: oklch(0.269 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar borders |
| `color.semantic.sidebar.dark.ring` | `oklch(0.439 0 0)` | <div style="background: oklch(0.439 0 0); width: 100px; height: 40px; border: 1px solid #ccc;"></div> | Sidebar focus ring |

**Usage**:
```tsx
// Sidebar component
<aside className="bg-sidebar text-sidebar-foreground border-sidebar-border">
  <nav>
    <a className="text-sidebar-primary hover:bg-sidebar-accent">
      Navigation Item
    </a>
  </nav>
</aside>
```

---

## Color Palette

The color palette provides a comprehensive set of colors for custom use cases, data visualization, and brand-specific elements.

### Red Palette

**Usage**: Error states, destructive actions, warnings

```
50:  oklch(.971 .013 17.38)  ████████████████████████████████████████████████████
100: oklch(.936 .032 17.717) ████████████████████████████████████████████████████
200: oklch(.885 .062 18.334) ████████████████████████████████████████████████████
300: oklch(.808 .114 19.571) ████████████████████████████████████████████████████
400: oklch(.704 .191 22.216) ████████████████████████████████████████████████████
500: oklch(.637 .237 25.331) ████████████████████████████████████████████████████
600: oklch(.577 .245 27.325) ████████████████████████████████████████████████████
700: oklch(.505 .213 27.518) ████████████████████████████████████████████████████
800: oklch(.444 .177 26.899) ████████████████████████████████████████████████████
```

### Orange Palette

**Usage**: Warnings, medium confidence indicators

```
50:  oklch(.98 .016 73.684)  ████████████████████████████████████████████████████
100: oklch(.954 .038 75.164) ████████████████████████████████████████████████████
200: oklch(.901 .076 70.697) ████████████████████████████████████████████████████
300: oklch(.837 .128 66.29)  ████████████████████████████████████████████████████
400: oklch(.75 .183 55.934)  ████████████████████████████████████████████████████
600: oklch(.646 .222 41.116) ████████████████████████████████████████████████████
700: oklch(.553 .195 38.402) ████████████████████████████████████████████████████
800: oklch(.47 .157 37.304)  ████████████████████████████████████████████████████
```

### Amber Palette

**Usage**: Warnings, attention indicators

```
50:  oklch(.987 .022 95.277) ████████████████████████████████████████████████████
100: oklch(.962 .059 95.617) ████████████████████████████████████████████████████
200: oklch(.924 .12 95.746)  ████████████████████████████████████████████████████
300: oklch(.879 .169 91.605) ████████████████████████████████████████████████████
400: oklch(.828 .189 84.429) ████████████████████████████████████████████████████
600: oklch(.666 .179 58.318) ████████████████████████████████████████████████████
700: oklch(.555 .163 48.998) ████████████████████████████████████████████████████
800: oklch(.473 .137 46.201) ████████████████████████████████████████████████████
900: oklch(.414 .112 45.904) ████████████████████████████████████████████████████
950: oklch(.279 .077 45.635) ████████████████████████████████████████████████████
```

### Green Palette

**Usage**: Success states, positive indicators, high confidence

```
50:  oklch(.982 .018 155.826) ████████████████████████████████████████████████████
100: oklch(.962 .044 156.743) ████████████████████████████████████████████████████
200: oklch(.925 .084 155.995) ████████████████████████████████████████████████████
300: oklch(.871 .15 154.449)  ████████████████████████████████████████████████████
400: oklch(.792 .209 151.711) ████████████████████████████████████████████████████
600: oklch(.627 .194 149.214) ████████████████████████████████████████████████████
700: oklch(.527 .154 150.069) ████████████████████████████████████████████████████
800: oklch(.448 .119 151.328) ████████████████████████████████████████████████████
```

### Blue Palette

**Usage**: Primary actions, links, information

```
50:  oklch(.97 .014 254.604)  ████████████████████████████████████████████████████
100: oklch(.932 .032 255.585) ████████████████████████████████████████████████████
200: oklch(.882 .059 254.128) ████████████████████████████████████████████████████
300: oklch(.809 .105 251.813) ████████████████████████████████████████████████████
400: oklch(.707 .165 254.624) ████████████████████████████████████████████████████
500: oklch(.623 .214 259.815) ████████████████████████████████████████████████████
600: oklch(.546 .245 262.881) ████████████████████████████████████████████████████
700: oklch(.488 .243 264.376) ████████████████████████████████████████████████████
800: oklch(.424 .199 265.638) ████████████████████████████████████████████████████
```

### Gray Palette

**Usage**: Neutral elements, borders, backgrounds, text

```
50:  oklch(.985 .002 247.839) ████████████████████████████████████████████████████
100: oklch(.967 .003 264.542) ████████████████████████████████████████████████████
200: oklch(.928 .006 264.531) ████████████████████████████████████████████████████
300: oklch(.872 .01 258.338)  ████████████████████████████████████████████████████
400: oklch(.707 .022 261.325) ████████████████████████████████████████████████████
500: oklch(.551 .027 264.364) ████████████████████████████████████████████████████
600: oklch(.446 .03 256.802)  ████████████████████████████████████████████████████
700: oklch(.373 .034 259.733) ████████████████████████████████████████████████████
800: oklch(.278 .033 256.848) ████████████████████████████████████████████████████
900: oklch(.21 .034 264.665)  ████████████████████████████████████████████████████
```

### Additional Palette Colors

- **Yellow**: `oklch(.852 .199 91.936)` - Attention, highlights
- **Cyan**: `oklch(.984 .019 200.873)` (50), `oklch(.789 .154 211.53)` (400) - Information, links
- **Sky**: `oklch(.828 .111 230.318)` (300) - Light blue accents
- **Indigo**: `oklch(.93 .034 272.788)` (100) - Secondary actions
- **Purple**: `oklch(.714 .203 305.504)` (400), `oklch(.627 .265 303.9)` (500) - Special elements
- **Rose**: `oklch(.969 .015 12.422)` (50), `oklch(.941 .03 12.58)` (100), `oklch(.586 .253 17.585)` (600), `oklch(.41 .159 10.272)` (900) - Error states, destructive actions
- **White**: `#fff` - Pure white

---

## Quick Reference

### CSS Variables

```css
/* Semantic Colors */
--primary: #030213;
--primary-foreground: oklch(1 0 0);
--secondary: oklch(0.95 0.0058 264.53);
--secondary-foreground: #030213;
--accent: #e9ebef;
--accent-foreground: #030213;
--destructive: #d4183d;
--destructive-foreground: #ffffff;
--muted: #ececf0;
--muted-foreground: #717182;
--background: #ffffff;
--foreground: oklch(0.145 0 0);
--card: #ffffff;
--card-foreground: oklch(0.145 0 0);
--border: rgba(0, 0, 0, 0.1);
--ring: oklch(0.708 0 0);
```

### Tailwind Classes

```tsx
// Primary
<div className="bg-primary text-primary-foreground">Primary</div>

// Secondary
<div className="bg-secondary text-secondary-foreground">Secondary</div>

// Accent
<div className="bg-accent text-accent-foreground">Accent</div>

// Destructive
<div className="bg-destructive text-destructive-foreground">Destructive</div>

// Muted
<div className="bg-muted text-muted-foreground">Muted</div>
```

---

## Design Tokens Reference

All color tokens are defined in `design-tokens/color.tokens.json` following the W3C Design Tokens format. The token structure is:

```json
{
  "color": {
    "semantic": { ... },
    "palette": { ... },
    "gradient": { ... }
  }
}
```

### Token Naming Convention

Tokens follow a hierarchical naming structure:
- `color.semantic.{mode}.{role}` - Semantic color tokens
- `color.semantic.sidebar.{mode}.{role}` - Sidebar-specific tokens
- `color.semantic.chart.{number}` - Chart color tokens
- `color.palette.{color}.{shade}` - Palette color tokens
- `color.gradient.{name}` - Gradient tokens

### Using Design Tokens

Design tokens can be consumed by:
- **Style Dictionary**: Transform tokens to platform-specific formats
- **Figma Tokens**: Import into Figma for design system sync
- **CSS Variables**: Generate CSS custom properties
- **JavaScript/TypeScript**: Import JSON directly for programmatic access

---

*Last updated: Synced with design-tokens/color.tokens.json*  
*Design System Dashboard - Color Reference v1.0*

