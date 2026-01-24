# Kleo Website - Codebase Documentation

## Overview

**Project:** meetkleo-v1 - Marketing website for Kleo, a language learning app
**URL:** www.meetkleo.com
**Tagline:** "What if an app and a tutor had a baby?"

## Tech Stack

- **Framework:** SvelteKit 1.20.4 with Vite
- **UI:** Svelte 4.2.20 + Tailwind CSS 3.1.8
- **Content:** mdsvex 0.11.0 (Markdown to Svelte)
- **Deployment:** Node.js adapter (Render)
- **Analytics:** Google Tag Manager, Fathom, Facebook Pixel
- **CDN:** Cloudinary for images

## Project Structure

```
src/
├── app.html                    # Main HTML shell (GTM, analytics)
├── lib/
│   ├── components/             # Reusable Svelte components
│   │   ├── nav.svelte          # Navigation bar
│   │   ├── footer.svelte       # Site footer
│   │   ├── toppage.svelte      # Homepage hero section
│   │   ├── howkleo.svelte      # "How Kleo works" section
│   │   ├── featuretable.svelte # Feature comparison
│   │   ├── team.svelte         # Team bios
│   │   ├── testimonbottom.svelte # Testimonials
│   │   ├── blogposts.svelte    # Article card component
│   │   ├── contentcard.svelte  # Lesson card component
│   │   ├── audioelement.svelte # Audio player
│   │   └── ...
│   └── utils/
│       ├── stores.js           # Svelte stores (state management)
│       └── index.js            # Utilities (fetchMarkdownPosts)
├── routes/
│   ├── +layout.svelte          # Root layout (nav + footer)
│   ├── +page.svelte            # Homepage
│   ├── +error.svelte           # Error page
│   ├── articles/
│   │   ├── +page.svelte        # Article listing
│   │   ├── +page.js            # Fetches posts from API
│   │   ├── post.svelte         # Article layout wrapper
│   │   ├── posts/              # Markdown articles (k-*.md)
│   │   └── [slug]/
│   │       ├── +page.svelte    # Article detail view
│   │       └── +page.js        # Dynamic article loader
│   ├── api/
│   │   └── posts/
│   │       └── +server.js      # GET /api/posts endpoint
│   ├── learn/
│   │   └── +page.svelte        # Free lessons browser
│   ├── downloads/              # App download links
│   ├── more/
│   │   ├── faq/                # FAQ page
│   │   └── news/               # News page
│   ├── of/                     # Feature/influencer landing pages
│   ├── rss/                    # RSS feed
│   └── sitemap.xml/            # XML sitemap
```

## Key Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage - hero, features, team, testimonials |
| `/articles` | Blog listing - fetches from `/api/posts` |
| `/articles/[slug]` | Individual article (markdown rendered) |
| `/learn` | Free lesson browser with language filter |
| `/downloads` | App Store download links |
| `/more` | Hub for news and FAQ |
| `/of/*` | Influencer/feature landing pages |

## State Management

All state lives in Svelte stores (`src/lib/utils/stores.js`):

```javascript
// Key stores
valueLang      // Writable: selected language ('German', 'Italian', 'Spanish', 'Ukrainian')
members        // Readable: team member data
contents       // Readable: 100+ lesson entries
faqs           // Readable: FAQ items
newsitems      // Readable: news entries
```

**Language Flow:**
1. User selects language in nav
2. `$valueLang` store updates
3. Components react (homepage gradient, lesson filtering)
4. Can also set via query param: `/learn?klg=German`

## Articles System

### Markdown Files
Location: `/src/routes/articles/posts/k-*.md`

**Frontmatter:**
```yaml
---
layout: blog
seotitle: "Article SEO Title"
title: "Display Title"
metadescription: "Meta description for SEO"
fname: "article-slug"
date: "01/15/2024"
author: "Author Name"
categories: "German, Grammar"
k_language: "german"
coverimage: "cloudinary-url"
articleimage: "cloudinary-url"
---
```

### Data Flow
1. `/articles` page loads → calls `/api/posts`
2. API uses `fetchMarkdownPosts()` (Vite glob import)
3. Returns sorted array of post metadata
4. User clicks article → `/articles/[slug]`
5. `+page.js` dynamically imports `k-${slug}.md`
6. Content rendered via `<svelte:component this={data.content} />`

### Article Loading Code (`[slug]/+page.js`)
```javascript
export async function load({ params }) {
    const post = await import(`../posts/k-${params.slug}.md`);
    const { title, author, date, metadescription, fname } = post.metadata;
    const content = post.default;
    return { content, title, author, date, metadescription, fname };
}
```

## Components

### Navigation (`nav.svelte`)
- Responsive with mobile menu toggle
- Language selector dropdown
- "Get Speaking" CTA button
- Sticky positioning

### Blog Card (`blogposts.svelte`)
- Displays article thumbnail, title, date, categories
- Links to `/articles/${path}`
- Used in article listing page

### Content Card (`contentcard.svelte`)
- Lesson card with language/type filtering
- Shows lock status, new release badge
- Lazy loading for images

### Audio Element (`audioelement.svelte`)
- Embedded in markdown articles
- Used for pronunciation examples

## Configuration

### Tailwind (`tailwind.config.cjs`)
Custom colors:
- `k_primary`: #AA00FF (brand purple)
- `k_purple_*`: Purple shade variants
- Custom breakpoints: `iphoneSE`, `navBreak`

### SvelteKit (`svelte.config.js`)
- Node adapter for deployment
- mdsvex preprocessor for markdown
- Blog layout: `src/routes/articles/post.svelte`

## Deployment

- **Platform:** Render (see `render.yaml`)
- **Build:** `npm run build`
- **Output:** `build/` directory
- **Prerendering:** Static pages prerendered

## Site Flow

```
Landing (/)
    ↓
Choose Language → Updates $valueLang store
    ↓
├── Learn (/learn) → Browse lessons → External app
├── Articles (/articles) → Read blog → Individual articles
├── Downloads (/downloads) → App Store
└── More (/more) → News, FAQ
```

## Known Patterns

- **Reactivity:** `$:` statements for conditional rendering
- **Dynamic imports:** Markdown loaded at runtime
- **Prerendering:** `export const prerender = true` for static pages
- **Cloudinary:** All images served via CDN
- **SEO:** Meta tags, canonicals, JSON-LD via SEO component

## SEO Rules - READ BEFORE MAKING CHANGES

### Critical Rules

1. **NEVER change URLs** - URL changes destroy Google rankings. If a page ranks well, its URL must stay exactly the same.

2. **NEVER change filenames in `/articles/posts/`** - The filename (e.g., `k-pronounce-the-german-r-right.md`) determines the URL.

3. **NEVER significantly alter H1 tags or main content** on high-ranking pages without explicit approval.

### High-Ranking Pages (HANDLE WITH CARE)

These pages have strong Google rankings. Be extremely cautious:

| Page | URL | Notes |
|------|-----|-------|
| German R Pronunciation | `/articles/pronounce-the-german-r-right` | Top ranked - DO NOT modify URL or H1 |
| All articles in `/articles/*` | Various | Assume all are indexed - preserve URLs |
| Homepage | `/` | Core landing page |

**Safe changes for high-ranking pages:**
- Styling/CSS updates
- Adding structured data (schema)
- Improving page speed
- Adding internal links TO the page
- Bug fixes that don't alter content

**Risky changes (require approval):**
- Changing page titles or H1s
- Rewriting or removing content
- Changing URL structure
- Removing internal links

### Low-Risk Pages (Safe to Modify)

These pages have low/no rankings - safe to experiment:

| Page | URL | Notes |
|------|-----|-------|
| News | `/more/news` | Low traffic, safe to redesign |
| FAQ | `/more/faq` | Low traffic, safe to modify |
| Downloads | `/downloads` | Utility page |
| Learn | `/learn` | Internal page |
| Influencer pages | `/of/*` | Campaign pages |

### Before Making Page Changes

Always ask:
1. Does this change affect a URL? → **STOP, get approval**
2. Does this change the H1 or main content? → **Check if page ranks well first**
3. Is this a design/style change only? → **Usually safe**
4. Am I adding content (not removing)? → **Usually safe**
