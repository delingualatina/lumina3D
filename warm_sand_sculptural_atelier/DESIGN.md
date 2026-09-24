---
name: Warm Sand Sculptural Atelier
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#554336'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#904d00'
  primary: '#8d4b00'
  on-primary: '#ffffff'
  primary-container: '#b15f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77d'
  secondary: '#5f5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e4e1e6'
  on-secondary-container: '#656467'
  tertiary: '#006b2e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00873c'
  on-tertiary-container: '#f7fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#e4e1e6'
  secondary-fixed-dim: '#c8c5ca'
  on-secondary-fixed: '#1b1b1e'
  on-secondary-fixed-variant: '#47464a'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-mono:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2rem
  margin: 1.25rem
  margin-md: 2.5rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system crafts the digital presence of an artisanal lighting studio specializing in parametric 3D-printed luminaires. The visual identity merges warm Scandinavian hygge with monolithic architectural restraint. The interface reflects the physical reality of the fixtures: layered bio-filaments diffusing luminous warmth across raw tactile planes.

The target audience consists of interior architects, boutique hospitality curators, and design-conscious homeowners seeking statement lighting. The interface must evoke calm sophistication, tangible materiality, and radiant comfort. Clean spatial rhythms showcase mathematical textures, layer-lines, and translucent organic geometries without decorative distraction.

## Colors

The palette balances incandescent luminescence with structural earth tones and an authentic direct-sales touchpoint.

- **Primary (`#D97706`)**: Radiant Amber. Represents illuminated filament warmth, 2700K ambient light, and interactive active states.
- **Secondary (`#18181B`)**: Architectural Charcoal. Imparts structural weight, typographic contrast, and brutalist grounding across key actions and framing.
- **Tertiary (`#25D366`)**: Direct Atelier Contact. Reserved strictly for direct architectural consultations, customized commission requests, and concierge conversion flows.
- **Neutral (`#FAF7F2`)**: Warm Sand Canvas. Evokes raw cornstarch PLA, calcified ceramic powders, and natural morning light, serving as the fundamental surface foundation.

Sub-surfaces utilize a muted tint (`#F3EDE2`) for subtle architectural depth, while text levels step from pure deep charcoal (`#18181B`) down through warm taupe stone (`#716B64`) for secondary metadata.

## Typography

The type system relies entirely on Plus Jakarta Sans to deliver an approachable, geometric warmth. Display and headline levels capitalize on the typeface's sculpted alternate terminals and generous x-height, lending organic character to technical 3D manufacturing metrics.

Body text uses open tracking with deliberate leading to preserve reading comfort over warm tinted backgrounds. Technical dimensions, print layer heights (e.g., `0.24mm nozzle layer`), lumen ratings, and SKU numbers use `label-mono` with uppercase styling and expanded letter spacing for workshop precision.

## Layout & Spacing

The layout employs a 12-column responsive fluid grid anchored by architectural white space:
- **Mobile (< 768px)**: 4 columns, 20px gutters, 20px outer margins. Single column full-bleed product showcases with tight metadata pairings.
- **Tablet (768px - 1024px)**: 8 columns, 24px gutters, 40px outer margins. Asymmetric 5:3 splits for imagery and specification sheets.
- **Desktop (> 1024px)**: 12 columns, 32px gutters, maximum container width of 1440px with 64px margins. Expansive architectural layouts allowing lighting objects to breathe against soft surfaces.

Spacing rhythm follows a strict 8pt base model. Generous vertical section offsets (`space-2xl`) emulate the unhurried pacing of an upscale design gallery.

## Elevation & Depth

Visual hierarchy rejects sharp drop shadows in favor of ambient luminescence and soft tonal tiers that evoke diffused backlighting:

- **Level 0 (Base Canvas)**: `#FAF7F2` flat background.
- **Level 1 (Sub-tier Layer)**: `#F3EDE2` flat surface container without drop shadows, framed with an ultra-soft border (`rgba(24, 24, 27, 0.06)`).
- **Level 2 (Hover & Interactive Cards)**: Ambient warm occlusion shadow: `0 12px 32px -8px rgba(217, 119, 6, 0.12), 0 4px 12px -2px rgba(24, 24, 27, 0.04)`. Mimics a lamp projecting warm radial light downward onto a surface.
- **Level 3 (Modals, Overlays & Sticky Nav)**: Translucent warm sand backdrop blur (`rgba(250, 247, 242, 0.85)` with `backdrop-filter: blur(12px)`) combined with a quiet silhouette shadow: `0 24px 48px -12px rgba(24, 24, 27, 0.10)`.

## Shapes

The shape system aligns with roundedness level 2:
- Base components (buttons, input fields, badges) use **8px (`0.5rem`)**.
- Content cards, spec sheets, and product media containers use **16px (`1rem`)**.
- Hero frames, immersive dialog modals, and floating panels use **24px (`1.5rem`)**.

These radius proportions capture the organic curvature of parametric lamp shades while retaining the structural precision of modern CNC and 3D additive manufacturing.

## Components

### Buttons
- **Primary**: Background `#18181B`, label `#FAF7F2`, border radius `0.5rem`. On hover, background shifts smoothly to `#D97706` with subtle amber bloom.
- **Secondary / Ghost**: Background transparent, 1px solid border `rgba(24, 24, 27, 0.15)`, text `#18181B`. On hover, surface fills with `#F3EDE2`.
- **WhatsApp Concierge**: Background `#25D366`, text `#FFFFFF`, font weight 600. Includes integrated chat icon; displays a localized micro-status indicating atelier availability.

### Chips & Badges
- **Filament & Material Badges**: Height 28px, corner radius `0.5rem`, background `#F3EDE2`, text `#716B64`, uppercase `label-mono`.
- **Lighting Temperature Tags (e.g., '2700K Warm')**: Include a 6px glowing dot colored `#D97706` paired with amber-tinted background `rgba(217, 119, 6, 0.08)`.

### Cards
- **Product Lamp Showcase**: Constructed with `#FAF7F2` surface, 16px corner radius, and 1px border `rgba(24, 24, 27, 0.06)`. Media container provides an intentional neutral sand backdrop to accentuate filament shadows. On hover, the image scales subtly (1.02x) and triggers the Level 2 amber ambient shadow.
- **Parametric Detail Card**: Compact `#F3EDE2` containers highlighting technical traits: print duration, bio-polymer source, weight, and luminaire socket size.

### Inputs & Selectors
- **Form Controls**: Background `#FAF7F2`, 1px solid border `rgba(24, 24, 27, 0.15)`, 8px radius, text `#18181B`. Active focus transitions border to `#D97706` with an accompanying `0 0 0 3px rgba(217, 119, 6, 0.15)` ring.
- **Checkboxes & Radios**: 8px rounded corners for radios (pill geometry) and 4px for checkboxes. Checked state fills with `#D97706` displaying a crisp white glyph.

### Specialized Atelier Components
- **Dimmer Simulator Slider**: A bespoke tactile track component allowing users to slide light levels from 10% to 100%, updating the lamp preview card in real time with ambient radial gradients.
- **Filament Swatch Picker**: Circular 32px material swatches displaying macro-textures of Terracotta PLA, Raw Sandstone, Bone White, and Basalt Slate, surrounded by an amber focus ring on selection.