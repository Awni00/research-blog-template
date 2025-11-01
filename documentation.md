# Documentation

## Videos

By default, videos displayed using the `Video` component will be muted and play automatically. To display a video that contains audio, I recommend the following settings:

```mdx
<Video src={...} muted={false} autoplay={false} playsinline={false} />
```

Note that `autoplay` is set to false – autoplaying a video with audio is bad form, and most modern browsers won't even let you do it anyway. `playsinline` is also set to false, so when the user begins playing the video on mobile, it will go fullscreen.

You can disable the controls to make your video appear like a GIF would. Do this instead of literally using a GIF; it's much more performant.

```mdx
<Video src={...} controls={false} />
```

For longer videos, you probably want to use a hosted video service, like YouTube:

```mdx
<YouTubeVideo videoId="..." />
```

(Or [Mux](https://docs.astro.build/en/guides/media/mux/), if you're feeling fancy or want more control.)

## Table of contents

The interactive table of contents for each page is provided by the `TableOfContents` component (`webpage/src/components/TableOfContents.tsx`). It extracts second-level headings (`<h2>`) from the rendered content and renders a lightweight navigation list.

```mdx
import TableOfContents from "../components/TableOfContents";

<TableOfContents client:load />
```

When no `headings` prop is supplied (the common case) the component runs on the client and gathers headings at runtime. If you have pre-computed heading data, pass it as:

```mdx
<TableOfContents headings={[{ depth: 2, slug: "introduction", text: "Introduction" }]} />
```

Only depth 2 headings are rendered, and any ↩︎ symbols from “back to ToC” links are stripped automatically.

## Math and equations

Use the `LaTeX` component (`webpage/src/components/LaTeX.astro`) for KaTeX-backed math rendering. Set `inline` to show math inline with prose, or omit it for centered block math:

```mdx
import LaTeX from "../components/LaTeX.astro";

<LaTeX inline formula="E = mc^2" />

<LaTeX formula="\int_0^1 x^2 \, dx = \tfrac{1}{3}" />
```

For highlighted derivations or callouts, wrap math content in `MathBlock` (`webpage/src/components/MathBlock.astro`). Provide a `title` and optionally a hex `color` to tweak the accent stripe:

```mdx
import MathBlock from "../components/MathBlock.astro";

<MathBlock title="Gradient Update" color="#0ea5e9">
  <LaTeX formula="\nabla_\theta \mathcal{L} = \frac{\partial \mathcal{L}}{\partial \theta}" />
</MathBlock>
```

If an invalid color is supplied, the component falls back to the default blue accent.

## Page header utilities

The layout supports an optional “homepage” pill and theme toggle that sit in the header bar.

### Homepage link

`HomeLinkHeader` (`webpage/src/components/HomeLinkHeader.astro`) is wired into `Layout.astro` and enabled via page frontmatter. Add a `homeLink` object to opt in:

```yaml
homeLink:
  link: "https://awni.xyz"
  title: "Homepage"    # optional, defaults to "Homepage"
  icon: ri:home-4-line # optional Iconify name
  newTab: true         # optional, opens in a new tab when true
```

Omit the block entirely to hide the button on that page.

### Theme toggle

The `ThemeToggle` React component (`webpage/src/components/ThemeToggle.tsx`) respects the `theme` value from frontmatter (`device`, `light`, or `dark`) and lets readers switch modes. It now accepts an optional `className` prop so you can fine-tune positioning if you reuse it elsewhere:

```astro
<ThemeToggle client:load initialTheme="device" className="flex justify-end" />
```

## Fonts

[The original Nerfies project page](https://nerfies.github.io/) uses the Google Sans font, which is technically [licensed by Google and unavailable for public use](https://developers.google.com/fonts/faq#can_i_use_the_product_sans_or_google_sans_fonts). Instead, I choose to use [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans), which looks similar, supports a wide range of glyphs, and is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) (so it loads faster).

If you want to use a different font, consult the docs on [Astro's experimental Fonts API](https://docs.astro.build/en/reference/experimental-flags/fonts/). You'll have to edit the following lines. If you're using a [Google Font](https://fonts.google.com/), it's simple as editing the font name.

In `/astro.config.ts`:

```ts
experimental: {
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
      weights: ["100 900"],
    },
  ];
}
```

In `/src/layouts/Layout.astro`:

```astro
<Font cssVariable="--font-noto-sans" preload />

...

<body class="font-(family-name:--font-noto-sans) ...">
```

## Icons

This template uses the [Astro Icon](https://www.astroicon.dev/) library for the icons in the buttons in the header.

To use a custom icon:

1. Search on [Iconify](https://icon-sets.iconify.design/) to find the icon you want. For example, the Hugging Face icon is `simple-icons:huggingface`, from the Simple Icons icon set.
1. Install the corresponding icon set: `npm install @iconify-json/simple-icons`.
1. If you're using the icon in one of the link buttons, put the icon name in the value of the `icon` key, like this:

```yaml
- name: Hugging Face
  url: https://huggingface.co/
  icon: simple-icons:huggingface
```

Or, to use it anywhere in an Astro component or MDX file:

```mdx
import { Icon } from "astro-icon/components";

<Icon name={"simple-icons:huggingface"} />
```
