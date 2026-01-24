import { fetchMarkdownPosts } from '$lib/utils';

export const prerender = true;

export async function GET() {
    const posts = await fetchMarkdownPosts();
    const today = new Date().toISOString().split('T')[0];

    // Static pages
    const staticPages = [
        { url: '', priority: '1.0', changefreq: 'weekly' },
        { url: 'articles', priority: '0.9', changefreq: 'daily' },
        { url: 'learn', priority: '0.8', changefreq: 'weekly' },
        { url: 'downloads', priority: '0.7', changefreq: 'monthly' },
        { url: 'more/faq', priority: '0.8', changefreq: 'monthly' },
        { url: 'more/news', priority: '0.6', changefreq: 'weekly' },
        { url: 'more', priority: '0.5', changefreq: 'monthly' },
        { url: 'legal', priority: '0.3', changefreq: 'yearly' },
    ];

    // Generate article URLs from markdown posts
    const articleUrls = posts.map(post => ({
        url: `articles/${post.path}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: post.meta.date ? convertDateFormat(post.meta.date) : today
    }));

    const allUrls = [...staticPages.map(p => ({ ...p, lastmod: today })), ...articleUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1">
${allUrls.map(page => `  <url>
    <loc>https://www.meetkleo.com/${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap.trim(), {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=3600'
        }
    });
}

// Convert MM/DD/YYYY to YYYY-MM-DD
function convertDateFormat(dateStr) {
    if (!dateStr) return new Date().toISOString().split('T')[0];
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        const [month, day, year] = parts;
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return dateStr;
}
