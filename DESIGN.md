---
name: Ashfaq Amin — Portfolio
description: A monochrome, Airbnb-restraint portfolio where the work is the only color.
colors:
  paper-white: "#ffffff"
  gallery-grey: "#f7f7f7"
  near-black-slab: "#222222"
  warm-linen: "#f5f1e8"
  ink: "#000000"
  muted-graphite: "#646464"
  warm-stone: "#665d4f"
  on-dark: "#ffffff"
  hairline: "#dddddd"
  hairline-subtle: "#ebebeb"
  signal-purple: "#8947ff"
  signal-purple-deep: "#7c3aed"
  signal-tint: "#f3eeff"
  signal-tint-hover: "#ece4ff"
typography:
  display:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Figtree"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.19
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Figtree"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0em"
  body:
    fontFamily: "Figtree"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Figtree"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.04em"
rounded:
  sm: "8px"
  btn: "10px"
  md: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
  s10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.signal-purple}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.btn}"
    height: "36px"
    padding: "0 12px"
  button-primary-hover:
    backgroundColor: "{colors.signal-purple-deep}"
    textColor: "{colors.on-dark}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    height: "36px"
    padding: "0 12px"
  button-ghost:
    backgroundColor: "{colors.signal-tint}"
    textColor: "{colors.signal-purple-deep}"
    rounded: "{rounded.btn}"
    height: "36px"
    padding: "0 12px"
  nav-link:
    textColor: "{colors.muted-graphite}"
    typography: "{typography.body}"
  nav-link-active:
    textColor: "{colors.ink}"
  card-frame:
    backgroundColor: "{colors.gallery-grey}"
    rounded: "{rounded.md}"
---

# Design System: Ashfaq Amin — Portfolio

## Overview

**Creative North Star: "The Quiet Gallery"**

The portfolio is a white wall and hairline frames; the work is the only thing allowed to carry color. Nothing in the chrome competes with a case study — hierarchy comes entirely from **size, weight, and negative space**, in the Airbnb manner. A single geometric sans does all the typographic work. One purple accent is reserved for the act of *doing* something (a primary call to action, an accent link); every other pixel stays monochrome, so the accent means something when it appears.

The feel is calm, confident, and editorial: generous air, soft 12px frames on media, hairline rules instead of shadows, and a type scale that leans on scale jumps rather than decoration. This is an **Experience** surface — the interface recedes, the artifact leads from the first viewport. Boldness is spent on the hero statement and the space around it; everything else is held quiet on purpose.

The explicit anti-reference is the legacy build this replaces: a Bootstrap 3 theme with a red accent, dense cards, and templated rhythm. The redesign rejects category-generic "portfolio template" instincts — no busy grids, no drop-shadow cards, no multi-color tagging.

**Key Characteristics:**
- Monochrome ground; one purple accent, used sparingly.
- Figtree only — hierarchy from size + weight, never a second family.
- Hairline borders over shadows; bold negative space.
- 12px soft corners on media and cards; near-black statement slabs for punctuation.
- Motion is subtle and consistent: short, eased, purposeful.

## Colors

A fully neutral palette named by role, with a single chromatic accent. Every surface pairs with a text token that clears **4.5:1** (3:1 for text ≥24px, borders, and icons).

### Primary (accent)
- **Signal Purple** (#8947ff): the one accent. Primary call-to-action fills (as a subtle vertical gradient to Signal Purple Deep), the focus ring, and the animating hero word. White text on it clears 4.76:1.
- **Signal Purple Deep** (#7c3aed): CTA hover/press, and the accent as *text* on light surfaces (accent links, ghost-button label) — darker so it clears 4.5:1 on white and on the tint.
- **Signal Tint** (#f3eeff) / **Signal Tint Hover** (#ece4ff): soft accent fills for the ghost button at rest and hover.

### Neutral
- **Ink** (#000000): primary text and headings.
- **Muted Graphite** (#646464): secondary text, captions, nav links at rest, meta labels. Clears 4.5:1.
- **Warm Stone** (#665d4f): tertiary / decorative text, large sizes only (≥24px).
- **Paper White** (#ffffff): default page background and raised surfaces.
- **Gallery Grey** (#f7f7f7): the signature Airbnb grey — alternating section bands, recessed panels, media frame fills.
- **Warm Linen** (#f5f1e8): warm off-white for highlight panels.
- **Near-Black Slab** (#222222): inverse background for statement sections and the footer; pair with on-dark text.
- **On Dark** (#ffffff): text on inverse backgrounds and on the primary action.
- **Hairline** (#dddddd): default divider and border — the primary structural device. **Hairline Subtle** (#ebebeb) for dense lists.

### Named Rules
**The One Voice Rule.** Purple appears only where the visitor acts — primary CTAs, accent links, focus ring, and the single animating hero word. It is never used for decoration, headings, icons, or state that isn't interactive. Its rarity is the point; everything else stays monochrome.

**The Color-Is-The-Work Rule.** The chrome is colorless so project imagery (screens, gifs, video) provides all the chroma on a page.

## Typography

**Display / Body / Label Font:** Figtree (with -apple-system / system-sans fallback, so the site stays on-brand before the webfont loads).

**Character:** One geometric humanist sans, close to Airbnb Cereal — friendly but precise. Emphasis comes from weight and size only; never a second family, never a new color for emphasis.

### Hierarchy
- **Display XL** (700, 64/64, -0.03em): hero headline. Also fluid on the live hero via `clamp(30px → 56px)`.
- **Display L** (700, 48/52, -0.025em): big statement openers.
- **Headline / H1** (700, 40/46, -0.02em): page title / top of a case study.
- **Title / H2** (700, 32/38, -0.015em): major section title.
- **H3** (600, 24/30) · **H4** (600, 20/28) · **H5** (600, 16/24): sub-section and card heads.
- **Lead** (400, 24/32): standfirst paragraph below a heading.
- **Body** (400, 16/26): default copy; keep the measure near 36rem (~65–75ch).
- **Body Strong** (600, 16/26): a key inline sentence.
- **Small** (400, 14/21): captions, meta values, dense secondary copy.
- **Label** (600, 12/16, 0.04em): overlines and meta labels.

### Named Rules
**The One Family Rule.** Figtree does everything. There is no serif and no second sans. If something needs to stand out, make it bigger or heavier — not different.

**Sentence case.** Headings, titles, nav items, and buttons are sentence case. The eyebrow is simply a smaller, heavier line, not an all-caps label.

## Layout

A single shared container governs every section so left and right edges align down the whole page: `max-width: 1728px`, centered, with `clamp(24px, 4vw, 72px)` side padding. On laptops (≤1728px) the content runs nearly full-width with ~60px gutters; on larger displays it caps at 1728px and centers with even margins.

- **Section rhythm:** vertical padding `clamp(64px, 6vw, 96px)` (space-8 → space-9). Sections are separated by background alternation (Paper White ↔ Gallery Grey) and hairline rules, not by heavy dividers.
- **Portfolio slides:** full-viewport (`100svh`) scroll-snap sections, a ~31% info column beside a ~69% media frame; collapses to a single stacked column below 992px.
- **Hero:** sized to the exact visible viewport (`100svh − nav height`), statement vertically centered, a "View work" cue pinned at the bottom edge.
- **Spacing scale:** 8px-based (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128).
- **Box model:** `box-sizing: border-box` globally — padding is included in sizing, never added on top.

## Elevation & Depth

Depth is conveyed by **hairline borders and background tone, not shadows**. Blocks are separated by `#dddddd` hairlines and by alternating Paper White / Gallery Grey bands. Shadows are reserved for genuinely lifted or framed objects:

### Shadow Vocabulary
- **shadow-sm** (`0 1px 2px rgba(0,0,0,.08)`): resting card / button elevation.
- **shadow-md** (`0 6px 16px rgba(0,0,0,.12)`): card hover lift, popovers, the NDA password modal.
- **shadow-lg** (`0 2px 8px rgba(0,0,0,.06), 0 16px 40px rgba(0,0,0,.12)`): soft lift for framed media (images, gifs, video).

### Named Rules
**The Hairline-First Rule.** Reach for a 1px `#dddddd` border or a tone change before a shadow. Shadows mean "this object is physically lifted," so they stay rare.

## Shapes

Airbnb-soft, consistent corners; no sharp edges, no heavy outlines.

- **radius-sm 8px**: inputs.
- **button radius 10px**: all buttons (BoardUI-derived button model).
- **radius-md 12px**: cards, media frames, image corners — the signature corner.
- **radius-lg 16px**: large feature panels.
- **radius-pill 999px**: tags, chips, round controls, the nav's pagination dots.
- Single-sided accents (e.g. `border-left`) are avoided; corners are fully rounded on all sides or not at all.

## Components

- **Button — primary** (`.btn.btn--primary`): the one strong action per view. A subtle top-to-bottom gradient from Signal Purple to Signal Purple Deep, white label, 10px radius, 36px tall, `shadow-sm`. This is the only place purple fills. Darkens on hover/press. The gated case-study CTA uses this with a leading lock icon and the label "Enter password to view"; once a valid session password exists, it becomes a plain "View case study" link.
- **Button — secondary** (`.btn--secondary`): white surface, hairline border, `shadow-sm`; fills with Gallery Grey on hover. The neutral action.
- **Button — ghost** (`.btn--ghost`): Signal Purple Deep label on a Signal Tint fill; deepens on hover. Low-emphasis but clearly interactive.
- **Site nav** (`.site-nav`): sticky top bar, Paper White, hairline appears on scroll. Wordmark and links all sit at Muted Graphite at rest and turn Signal Purple Deep on hover; the section the viewer is in is marked active in Ink (black) via scrollspy. Figtree throughout.
- **Section** (`.section`): the page-rhythm primitive. `--sunken` paints the Gallery Grey band; `--ink` paints the Near-Black statement/footer slab with on-dark text.
- **Media frame** (`.pf-screens`): 16:10 aspect-locked, 12px corners, Gallery Grey fill, hairline border; images/gifs/video fill via `object-fit: cover`. Best source ratio is 16:10 (e.g. 1600×1000, or 2000×1250 for retina).
- **Meta list** (`.pf-meta`): label/value rows at Small (14px), hairline dividers between rows, no border after the last row.

### Named Rules
**One primary per view.** At most one `btn--primary` is visible at a time; on the scroll-snap portfolio, that's one per slide. Everything else is secondary, ghost, or a plain link.

## Do's and Don'ts

**Do**
- Let project media carry the color; keep the chrome monochrome.
- Use size and weight for hierarchy; keep one shared container so all edges align.
- Reserve purple for action; reserve shadows for lifted/framed objects.
- Keep sentence case everywhere; keep motion short, eased, and consistent.
- Export media at 16:10 so it fills the frame without cropping.

**Don't**
- Don't introduce a second typeface, or a second accent color.
- Don't put purple on headings, icons, or non-interactive elements.
- Don't use drop-shadow cards or colored tags for structure — use hairlines and tone.
- Don't let the nav/footer use anything but Figtree and the token colors.
- Don't split the token source of truth: `css/tokens.css` (generated from the design-system artifact) is canonical.
