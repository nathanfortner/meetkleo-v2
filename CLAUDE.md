# Kleo Website - Codebase Documentation

## Git Workflow Rules

**IMPORTANT: Before pushing to `main` branch:**
1. Ask user for confirmation FIRST time
2. Ask user for confirmation SECOND time
3. Only push after receiving two explicit approvals

This applies to:
- `git push` to main
- `git merge` to main followed by push
- Any direct commits to main

Feature branches (like `ai_upgrade`) can be pushed freely.

---

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

---

## Content Creation Guide

### Creating New Articles

1. **Create the markdown file**
   - Location: `src/routes/articles/posts/`
   - Filename format: `k-{slug}.md` (the slug becomes the URL)
   - Example: `k-how-to-say-hello-in-german.md` → `/articles/how-to-say-hello-in-german`

2. **Add required frontmatter**
```yaml
---
layout: blog
seotitle: "SEO-optimized title (60 chars max)"
title: "Display Title"
metadescription: "Meta description for search results (155 chars max)"
fname: "k-how-to-say-hello-in-german"
date: "01/24/2026"
dateModified: "01/24/2026"
longdate: "January 24, 2026"
author: "Kleo Team"
categories: "phrases, training, speaking"
k_language: "german"
coverimage: "Articles/your-cover-image.jpg"
articleimage: "Articles/your-article-image.jpg"
tldr: "Brief summary for AI/search snippets"
---
```

3. **k_language values** (used for filtering):
   - `german`, `italian`, `spanish`, `ukrainian`, `all`

4. **Add audio elements** (for pronunciation):
```svelte
<script>
    import Kaudio from '$lib/components/audioelement.svelte';
</script>

<Kaudio lang={'de'} pid={'uuid-from-s3_0.mp3'} displayname={'Guten Tag'} />
```
   - Language codes: `de` (German), `es` (Spanish), `it` (Italian), `uk` (Ukrainian)

5. **Images in articles**:
```svelte
<script>
    let WEB_IMG_BASE_URL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
</script>

<img src={`${WEB_IMG_BASE_URL}Articles/image-name.jpg`} alt="Description">
```

---

### Creating Thumbnails

Thumbnails are extracted from lesson videos or generated using AI.

#### Setup
```bash
cd scripts/thumbnails
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### Environment Variables
Create `.env` file:
```
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
GEMINI_API_KEY=your_gemini_key
```

#### Extract Frames from Lesson Videos

1. **List available videos**:
```bash
python extract_thumbnails.py list --lang de --env prod
```
   - Languages: `de`, `es`, `it`, `uk`
   - Environments: `dev`, `staging`, `prod`

2. **Extract a single frame**:
```bash
python extract_thumbnails.py extract D57_S1_C1.mp4 --lang de --env prod -t 2 -o output/thumbnail.jpg
```
   - `-t`: Timestamp in seconds
   - `-o`: Output filename

3. **Batch extract** (multiple timestamps):
```bash
python extract_thumbnails.py batch --lang de --env prod --timestamp 3
```

#### Generate/Enhance Thumbnails with AI

Use Gemini to polish or enhance existing images:

```bash
python generate_thumbnail.py input.jpg output.jpg --model "gemini-2.0-flash-exp"
```

**Enhancement prompt** (keeps original scene):
```bash
python generate_thumbnail.py input.jpg output.jpg --prompt "Lightly enhance this photo:
- Improve lighting and color balance
- Sharpen slightly for clarity
- Keep the original scene exactly as is
- Do not change faces or poses"
```

**Creative generation** (transforms the image):
```bash
python generate_thumbnail.py reference.jpg output.jpg --prompt "Create a professional thumbnail based on this reference. Clean background, warm lighting."
```

#### Upload to Cloudinary

After creating thumbnails, upload to Cloudinary:
```bash
python extract_thumbnails.py upload output/thumbnail.jpg --name Articles/article-name
```

The image will be available at:
`https://ddseu0ssi.mo.cloudinary.net/web/images/Articles/article-name.jpg`

---

### Image Management

#### Cloudinary Structure
- **Base URL**: `https://ddseu0ssi.mo.cloudinary.net/web/images/`
- **Article images**: `Articles/` folder
- **Transformations**: Add `?tx=` parameter for resizing

#### Common Transformations
```
?tx=c_fill,g_auto,h_300,w_550    # Fill with auto gravity
?tx=c_thumb,g_face,z_0.7,ar_1:1  # Face-centered thumbnail
?tx=h_200,w_150                   # Simple resize
```

#### Image Naming Convention
- Article covers: `{language}_{topic}_v{version}.jpg`
- Examples: `italian_love_v3.jpg`, `german_r_pronunciation_v2.jpg`

#### S3/CloudFront (App Assets)
- **Prod CloudFront**: `https://d302naonb9wq01.cloudfront.net`
- **Lesson tiles**: `/images/en_nt_{lang}/lesson/tile/{lessonID}_0.jpg`
- **Audio files**: `/audio/en_nt_{lang}/phrase/{uuid}.mp3`

---

### Audio Files

Audio files are stored in S3 and served via CloudFront.

#### Path Structure
```
s3://kleo-prod/audio/en_nt_{lang}/phrase/{uuid}_0.mp3
```

#### Generate TTS Audio (ElevenLabs)
```bash
cd scripts/tts
source venv/bin/activate
python generate_audio.py --lang de --text "Guten Tag"
```

#### Using Audio in Articles
```svelte
<Kaudio lang={'de'} pid={'6ccb5332-2452-44a6-92f1-1faf28802a07_0.mp3'} displayname={'rot'} />
```

The `pid` is the S3 object key (UUID + suffix).
