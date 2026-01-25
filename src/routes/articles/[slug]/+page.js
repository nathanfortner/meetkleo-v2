// this could be added after direct to suppress the error message on import if neeed
// but the perfect path name will do so as well - you can not use just a variable in the import/* @vite-ignore */

import { error, redirect } from '@sveltejs/kit';
export const prerender = true;

// Define all article slugs for prerendering since /articles is now dynamic
export function entries() {
    return [
        { slug: 'a-pronunciation-tips' },
        { slug: 'ei-and-ie-pronunciation-in-german' },
        { slug: 'ess-tset-pronunciation-and-meaning' },
        { slug: 'german-alphabet-pronunciation' },
        { slug: 'how-to-maximize-your-learning-in-the-kleo-app' },
        { slug: 'how-to-pronounce-ich-in-german' },
        { slug: 'how-to-pronounce-ig-in-german' },
        { slug: 'how-to-pronounce-the-german-z' },
        { slug: 'how-to-use-and-pronounce-ich-liebe-dich-to-share-your-love' },
        { slug: 'how-to-use-danke-and-variations-to-say-thank-you-in-german' },
        { slug: 'i-am-in-german' },
        { slug: 'mastering-ch-pronunciation-in-german' },
        { slug: 'me-in-german' },
        { slug: 'o-umlaut-made-easy' },
        { slug: 'pronounce-the-german-r-right' },
        { slug: 'putting-kleo-to-work-for-you-every-time' },
        { slug: 'u-umlaut-simplified-like-never-before' },
        { slug: 'how-to-roll-your-r-in-spanish' },
        { slug: 'how-to-say-i-love-you-in-italian' },
        { slug: 'how-to-say-i-love-you-in-spanish' },
        { slug: 'how-to-say-i-love-you-in-ukrainian' },
        { slug: 'how-to-say-thank-you-in-italian' },
        { slug: 'how-to-say-thank-you-in-spanish' },
        { slug: 'how-to-say-thank-you-in-ukrainian' },
        { slug: 'italian-alphabet-pronunciation-guide' },
        { slug: 'italian-c-and-g-sounds' },
        { slug: 'italian-gli-and-gn-sounds' },
        { slug: 'italian-r-pronunciation-guide' },
        { slug: 'spanish-alphabet-pronunciation-guide' },
        { slug: 'spanish-n-pronunciation-guide' },
        { slug: 'ukrainian-alphabet-pronunciation-guide' },
        { slug: 'ukrainian-unique-sounds-yi-ye-g' }
    ];
}

export async function load({ params }) {
    // Validate slug: only allow lowercase letters, numbers, and hyphens
    if (!params.slug || !/^[a-z0-9-]+$/.test(params.slug)) {
        throw error(404, 'Invalid article slug');
    }

    try {
        const Thing = await import(`../posts/k-${params.slug}.md`);
        const {seotitle, title, author, date, longdate, metadescription, fname, coverimage, dateModified, tldr } = Thing.metadata;
        const content = Thing.default;

        return {
          title,
          seotitle,
          author,
          date,
          longdate,
          metadescription,
          fname,
          coverimage,
          dateModified,
          tldr,
          content
        }    
    } catch (error) {
        console.log('could not find the requested blog page', error);
        throw redirect(307, '/learn');
    }
  }