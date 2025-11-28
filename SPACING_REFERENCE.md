# Spacing Reference

Complete spacing system documentation for the Design System Dashboard, including spacing scale, grid examples, and usage heuristics.

> **Design Tokens**: This reference is synced with `design-tokens/spacing.tokens.json`. All spacing values are defined in the JSON file and referenced here.

---

## Table of Contents

1. [Base Spacing Unit](#base-spacing-unit)
2. [Spacing Scale](#spacing-scale)
3. [Spacing Grid Examples](#spacing-grid-examples)
4. [Usage Heuristics](#usage-heuristics)
5. [Container Widths](#container-widths)
6. [Gap Values](#gap-values)
7. [Padding Values](#padding-values)
8. [Quick Reference](#quick-reference)

---

## Base Spacing Unit

The spacing system is built on a **base unit of 4px** (0.25rem), which creates a consistent, scalable spacing rhythm throughout the design system.

**Token**: `spacing.base`  
**Value**: `0.25rem` (4px at 16px base font size)  
**Multiplier System**: All spacing values are multiples of the base unit

### Why 4px Base?

- **Divisibility**: 4px divides evenly into common sizes (8px, 12px, 16px, 24px, 32px, etc.)
- **Visual Harmony**: Creates consistent visual rhythm and alignment
- **Accessibility**: Provides sufficient spacing for touch targets and readability
- **Scalability**: Works well across different screen sizes and zoom levels

---

## Spacing Scale

The spacing scale provides a comprehensive set of spacing values from 0 to 24 (base units), covering all spacing needs from tight to generous.

| Token | Value (rem) | Value (px) | Multiplier | Visual Scale | Common Usage |
|-------|-------------|-----------|------------|-------------|--------------|
| `spacing.scale.0` | `0` | `0px` | 0x | ` ` | No spacing, tight alignment |
| `spacing.scale.0.5` | `0.125rem` | `2px` | 0.5x | `▌` | Ultra-tight spacing, icon adjustments |
| `spacing.scale.1` | `0.25rem` | `4px` | 1x | `▌▌` | Base unit, minimal spacing |
| `spacing.scale.1.5` | `0.375rem` | `6px` | 1.5x | `▌▌▌` | Tight spacing, small gaps |
| `spacing.scale.2` | `0.5rem` | `8px` | 2x | `▌▌▌▌` | Small spacing, button padding |
| `spacing.scale.2.5` | `0.625rem` | `10px` | 2.5x | `▌▌▌▌▌` | Small-medium spacing |
| `spacing.scale.3` | `0.75rem` | `12px` | 3x | `▌▌▌▌▌▌` | Medium spacing, card padding |
| `spacing.scale.3.5` | `0.875rem` | `14px` | 3.5x | `▌▌▌▌▌▌▌` | Medium spacing |
| `spacing.scale.4` | `1rem` | `16px` | 4x | `▌▌▌▌▌▌▌▌` | Standard spacing, default padding |
| `spacing.scale.5` | `1.25rem` | `20px` | 5x | `▌▌▌▌▌▌▌▌▌▌` | Medium-large spacing |
| `spacing.scale.6` | `1.5rem` | `24px` | 6x | `▌▌▌▌▌▌▌▌▌▌▌▌` | Large spacing, section gaps |
| `spacing.scale.8` | `2rem` | `32px` | 8x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Extra large spacing, major sections |
| `spacing.scale.9` | `2.25rem` | `36px` | 9x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Extra large spacing |
| `spacing.scale.10` | `2.5rem` | `40px` | 10x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Very large spacing |
| `spacing.scale.11` | `2.75rem` | `44px` | 11x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Very large spacing |
| `spacing.scale.12` | `3rem` | `48px` | 12x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Extra large spacing, page sections |
| `spacing.scale.14` | `3.5rem` | `56px` | 14x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Hero spacing |
| `spacing.scale.16` | `4rem` | `64px` | 16x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Hero spacing, major breaks |
| `spacing.scale.20` | `5rem` | `80px` | 20x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Maximum spacing, page breaks |
| `spacing.scale.24` | `6rem` | `96px` | 24x | `▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌` | Maximum spacing, full page sections |

### Spacing Scale Visualization

```
0px   4px   8px   12px  16px  20px  24px  32px  40px  48px  64px  80px  96px
│     │     │     │     │     │     │     │     │     │     │     │     │
0     1     2     3     4     5     6     8     10    12    16    20    24
```

---

## Spacing Grid Examples

### 4px Grid (Base Unit)

The fundamental grid for all spacing decisions:

```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  4px│  4px│  4px│  4px│  4px│  4px│  4px│  4px│
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```

**Usage**: Icon adjustments, micro-spacing, fine-tuning

### 8px Grid (2x Base)

Common for small components and tight layouts:

```
┌─────────┬─────────┬─────────┬─────────┬─────────┐
│   8px   │   8px   │   8px   │   8px   │   8px   │
└─────────┴─────────┴─────────┴─────────┴─────────┘
```

**Usage**: Button padding, small gaps, compact lists

### 12px Grid (3x Base)

Standard for card padding and medium spacing:

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│     12px     │     12px     │     12px     │     12px     │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

**Usage**: Card padding, form field spacing, component internal spacing

### 16px Grid (4x Base)

Default spacing for most UI elements:

```
┌──────────────────┬──────────────────┬──────────────────┬──────────────────┐
│       16px       │       16px       │       16px       │       16px       │
└──────────────────┴──────────────────┴──────────────────┴──────────────────┘
```

**Usage**: Default padding, standard gaps, body text spacing

### 24px Grid (6x Base)

Large spacing for sections and major components:

```
┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
│          24px            │          24px            │          24px            │
└──────────────────────────┴──────────────────────────┴──────────────────────────┘
```

**Usage**: Section spacing, large gaps, component separation

### 32px Grid (8x Base)

Extra large spacing for major sections:

```
┌──────────────────────────────────┬──────────────────────────────────┐
│              32px                │              32px                │
└──────────────────────────────────┴──────────────────────────────────┘
```

**Usage**: Page sections, major component separation, layout breaks

### 48px Grid (12x Base)

Maximum spacing for page-level sections:

```
┌──────────────────────────────────────────────────────┐
│                       48px                          │
└──────────────────────────────────────────────────────┘
```

**Usage**: Page sections, hero spacing, major layout breaks

### Component Spacing Example

Example of spacing within a card component:

```
┌─────────────────────────────────────────────────────┐
│  [16px padding]                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │ Title                                        │    │
│  └─────────────────────────────────────────────┘    │
│  [8px gap]                                          │
│  ┌─────────────────────────────────────────────┐    │
│  │ Body text content goes here...              │    │
│  └─────────────────────────────────────────────┘    │
│  [12px gap]                                         │
│  ┌─────────────────────────────────────────────┐    │
│  │ [Button]                                    │    │
│  └─────────────────────────────────────────────┘    │
│  [16px padding]                                     │
└─────────────────────────────────────────────────────┘
```

---

## Usage Heuristics

### When to Use Each Spacing Value

#### 0px (spacing.scale.0)
**Use for**: 
- No spacing needed
- Tight alignment
- Overlapping elements
- Removing default spacing

**Examples**:
```tsx
<div className="m-0">No margin</div>
<div className="gap-0">No gap between items</div>
```

#### 2px (spacing.scale.0.5)
**Use for**: 
- Icon adjustments
- Micro-spacing
- Fine-tuning alignment
- Tight icon-text relationships

**Examples**:
```tsx
<div className="gap-0.5">
  <Icon />
  <span>Text</span>
</div>
```

#### 4px (spacing.scale.1)
**Use for**: 
- Minimal spacing
- Tight component relationships
- Small icon gaps
- Compact layouts

**Examples**:
```tsx
<div className="gap-1">
  <Badge />
  <Badge />
</div>
```

#### 8px (spacing.scale.2)
**Use for**: 
- Small button padding
- Tight gaps between related elements
- Icon and text spacing
- Small component spacing

**Examples**:
```tsx
<button className="px-2 py-2">Button</button>
<div className="gap-2">
  <Icon />
  <span>Label</span>
</div>
```

#### 12px (spacing.scale.3)
**Use for**: 
- Card padding
- Form field spacing
- Medium gaps
- Component internal spacing

**Examples**:
```tsx
<div className="p-3">Card content</div>
<div className="space-y-3">
  <Input />
  <Input />
</div>
```

#### 16px (spacing.scale.4)
**Use for**: 
- Default padding
- Standard gaps
- Body text spacing
- Most common spacing

**Examples**:
```tsx
<div className="p-4">Standard padding</div>
<div className="gap-4">
  <Card />
  <Card />
</div>
```

#### 24px (spacing.scale.6)
**Use for**: 
- Section spacing
- Large gaps
- Component separation
- Major element spacing

**Examples**:
```tsx
<section className="space-y-6">
  <Card />
  <Card />
</section>
```

#### 32px (spacing.scale.8)
**Use for**: 
- Page sections
- Major component separation
- Layout breaks
- Large spacing needs

**Examples**:
```tsx
<div className="space-y-8">
  <Section />
  <Section />
</div>
```

#### 48px (spacing.scale.12)
**Use for**: 
- Page-level sections
- Hero spacing
- Major layout breaks
- Maximum component separation

**Examples**:
```tsx
<main className="space-y-12">
  <Hero />
  <Content />
</main>
```

### Spacing Patterns

#### Tight Pattern (4-8px)
Use for closely related elements:
- Icon + text
- Badge groups
- Tag lists
- Compact navigation

#### Standard Pattern (12-16px)
Use for normal component spacing:
- Card padding
- Form fields
- List items
- Button groups

#### Comfortable Pattern (24-32px)
Use for section separation:
- Card groups
- Content sections
- Major components
- Page sections

#### Generous Pattern (48px+)
Use for major layout breaks:
- Hero sections
- Page-level content
- Full-width sections
- Maximum separation

### Spacing Relationships

#### Internal vs External Spacing

**Internal Spacing** (padding): Use smaller values
- Cards: 12-16px
- Buttons: 8-12px
- Inputs: 12px
- Badges: 4-8px

**External Spacing** (margin/gap): Use larger values
- Between cards: 16-24px
- Between sections: 24-48px
- Between major components: 32-64px

#### Vertical vs Horizontal Spacing

**Vertical Spacing**: Generally larger
- Reading flow requires more vertical space
- Use 1.2-1.5x horizontal spacing
- Example: `space-y-6` vs `gap-4`

**Horizontal Spacing**: Generally smaller
- Side-by-side elements can be closer
- Use 0.8-1x of vertical spacing
- Example: `gap-4` for horizontal layouts

---

## Container Widths

Container widths define maximum content widths for responsive layouts.

| Token | Value (rem) | Value (px) | Usage |
|-------|-------------|------------|-------|
| `spacing.container.xs` | `20rem` | `320px` | Extra small containers, mobile cards |
| `spacing.container.sm` | `24rem` | `384px` | Small containers, narrow content |
| `spacing.container.md` | `28rem` | `448px` | Medium containers, standard content |
| `spacing.container.lg` | `32rem` | `512px` | Large containers, wide content |
| `spacing.container.xl` | `36rem` | `576px` | Extra large containers |
| `spacing.container.2xl` | `42rem` | `672px` | 2X large containers, wide layouts |
| `spacing.container.5xl` | `64rem` | `1024px` | 5X large containers, maximum width |

### Container Usage

```tsx
// Small container for narrow content
<div className="max-w-sm mx-auto">
  <Content />
</div>

// Medium container for standard content
<div className="max-w-md mx-auto">
  <Content />
</div>

// Large container for wide content
<div className="max-w-lg mx-auto">
  <Content />
</div>
```

### Container Width Visualization

```
320px    384px    448px    512px    576px    672px    1024px
│        │        │        │        │        │        │
xs       sm       md       lg       xl       2xl      5xl
```

---

## Gap Values

Gap values are used for spacing between flex and grid items.

| Token | Value (rem) | Value (px) | Usage |
|-------|-------------|------------|-------|
| `spacing.gap.0.5` | `0.125rem` | `2px` | Ultra-tight gaps |
| `spacing.gap.1` | `0.25rem` | `4px` | Tight gaps |
| `spacing.gap.1.5` | `0.375rem` | `6px` | Small gaps |
| `spacing.gap.2` | `0.5rem` | `8px` | Small gaps, icon groups |
| `spacing.gap.3` | `0.75rem` | `12px` | Medium gaps |
| `spacing.gap.4` | `1rem` | `16px` | Standard gaps |
| `spacing.gap.6` | `1.5rem` | `24px` | Large gaps |
| `spacing.gap.8` | `2rem` | `32px` | Extra large gaps |

### Gap Usage Examples

```tsx
// Tight gap for icon groups
<div className="flex gap-1">
  <Icon />
  <Icon />
  <Icon />
</div>

// Standard gap for card grids
<div className="grid grid-cols-3 gap-4">
  <Card />
  <Card />
  <Card />
</div>

// Large gap for sections
<div className="flex flex-col gap-6">
  <Section />
  <Section />
</div>
```

---

## Padding Values

Padding values define internal spacing within components.

| Token | Value (rem) | Value (px) | Usage |
|-------|-------------|------------|-------|
| `spacing.padding.xs` | `0.25rem` | `4px` | Extra small padding, badges |
| `spacing.padding.sm` | `0.5rem` | `8px` | Small padding, compact buttons |
| `spacing.padding.md` | `0.75rem` | `12px` | Medium padding, cards |
| `spacing.padding.lg` | `1rem` | `16px` | Large padding, standard cards |
| `spacing.padding.xl` | `1.5rem` | `24px` | Extra large padding, spacious cards |
| `spacing.padding.2xl` | `2rem` | `32px` | 2X large padding, hero sections |
| `spacing.padding.3xl` | `3rem` | `48px` | 3X large padding, maximum spacing |

### Padding Usage Examples

```tsx
// Small padding for compact components
<button className="px-sm py-sm">Compact</button>

// Standard padding for cards
<div className="p-md">Card content</div>

// Large padding for spacious layouts
<div className="p-xl">Spacious content</div>
```

### Padding Patterns

#### Button Padding
- Small: `px-2 py-2` (8px)
- Default: `px-4 py-2` (16px horizontal, 8px vertical)
- Large: `px-6 py-3` (24px horizontal, 12px vertical)

#### Card Padding
- Compact: `p-3` (12px)
- Standard: `p-4` (16px)
- Spacious: `p-6` (24px)

#### Input Padding
- Standard: `px-3 py-2` (12px horizontal, 8px vertical)

---

## Quick Reference

### Tailwind CSS Classes

```tsx
// Margin
<div className="m-4">All sides: 16px</div>
<div className="mx-4">Horizontal: 16px</div>
<div className="my-4">Vertical: 16px</div>
<div className="mt-4">Top: 16px</div>
<div className="mb-4">Bottom: 16px</div>
<div className="ml-4">Left: 16px</div>
<div className="mr-4">Right: 16px</div>

// Padding
<div className="p-4">All sides: 16px</div>
<div className="px-4">Horizontal: 16px</div>
<div className="py-4">Vertical: 16px</div>
<div className="pt-4">Top: 16px</div>
<div className="pb-4">Bottom: 16px</div>
<div className="pl-4">Left: 16px</div>
<div className="pr-4">Right: 16px</div>

// Gap
<div className="gap-4">Gap: 16px</div>
<div className="gap-x-4">Horizontal gap: 16px</div>
<div className="gap-y-4">Vertical gap: 16px</div>

// Space Between
<div className="space-y-4">Vertical space: 16px</div>
<div className="space-x-4">Horizontal space: 16px</div>
```

### Common Spacing Patterns

```tsx
// Card with standard padding
<div className="p-4 rounded-lg border">
  <h3 className="mb-2">Title</h3>
  <p className="mb-4">Content</p>
  <button className="mt-4">Action</button>
</div>

// Flex container with gap
<div className="flex gap-4">
  <Button />
  <Button />
</div>

// Grid with gap
<div className="grid grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>

// Vertical stack with spacing
<div className="space-y-6">
  <Section />
  <Section />
  <Section />
</div>
```

### Spacing Scale Quick Lookup

| Size | px | rem | Tailwind | Use Case |
|------|----|----|----------|----------|
| 0 | 0 | 0 | `0` | No spacing |
| 0.5 | 2 | 0.125 | `0.5` | Icon adjustments |
| 1 | 4 | 0.25 | `1` | Minimal spacing |
| 2 | 8 | 0.5 | `2` | Small spacing |
| 3 | 12 | 0.75 | `3` | Medium spacing |
| 4 | 16 | 1 | `4` | Standard spacing |
| 6 | 24 | 1.5 | `6` | Large spacing |
| 8 | 32 | 2 | `8` | Extra large spacing |
| 12 | 48 | 3 | `12` | Maximum spacing |

---

## Design Tokens Reference

All spacing tokens are defined in `design-tokens/spacing.tokens.json` following the W3C Design Tokens format. The token structure is:

```json
{
  "spacing": {
    "base": { ... },
    "scale": { ... },
    "container": { ... },
    "gap": { ... },
    "padding": { ... }
  }
}
```

### Token Naming Convention

Tokens follow a hierarchical naming structure:
- `spacing.base` - Base spacing unit
- `spacing.scale.{number}` - Spacing scale values
- `spacing.container.{size}` - Container width tokens
- `spacing.gap.{size}` - Gap spacing tokens
- `spacing.padding.{size}` - Padding spacing tokens

### Using Design Tokens

Design tokens can be consumed by:
- **Style Dictionary**: Transform tokens to platform-specific formats
- **Figma Tokens**: Import into Figma for design system sync
- **CSS Variables**: Generate CSS custom properties
- **JavaScript/TypeScript**: Import JSON directly for programmatic access

---

## Best Practices

### ✅ Do's

1. **Use the spacing scale** - Always use predefined spacing values
2. **Maintain consistency** - Use the same spacing values for similar elements
3. **Consider context** - Use larger spacing for sections, smaller for components
4. **Test responsiveness** - Ensure spacing works across screen sizes
5. **Use semantic spacing** - Prefer `gap` for flex/grid, `margin` for external spacing

### ❌ Don'ts

1. **Don't use arbitrary values** - Avoid custom spacing like `p-[13px]`
2. **Don't mix spacing systems** - Stick to one spacing approach
3. **Don't over-space** - Too much spacing can break visual hierarchy
4. **Don't under-space** - Too little spacing hurts readability
5. **Don't ignore the grid** - Maintain alignment with the 4px base grid

---

*Last updated: Synced with design-tokens/spacing.tokens.json*  
*Design System Dashboard - Spacing Reference v1.0*

