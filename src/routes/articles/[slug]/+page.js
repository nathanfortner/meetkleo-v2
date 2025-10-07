// this could be added after direct to suppress the error message on import if neeed
// but the perfect path name will do so as well - you can not use just a variable in the import/* @vite-ignore */

import { error, redirect } from '@sveltejs/kit';
export const prerender = true;

export async function load({ params }) {
    try {
        // let direct = `../posts/blog-${params.slug}.md`;
        const Thing = await import(`../posts/k-${params.slug}.md`);
        const {seotitle, title, author, date, longdate, metadescription, fname } = Thing.metadata;
        const content = Thing.default;
        // console.log('inside pagejs -', title);
      
        return {
          title,
          seotitle,
          author,
          date,
          longdate,
          metadescription,
          fname,
          content
        }    
    } catch (error) {
        console.log('could not find the requested blog page', error);
        throw redirect(307, '/learn');
    }
  }