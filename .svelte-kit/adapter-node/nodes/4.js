import * as universal from '../entries/pages/articles/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/articles/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.0cb1bae2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.c6708bed.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/index.3053a2dd.js","_app/immutable/chunks/seohead.3833ee9c.js"];
export const stylesheets = ["_app/immutable/assets/k-a-pronunciation-tips.2d78a3c2.css","_app/immutable/assets/audioelement.8189825e.css","_app/immutable/assets/k-ess-tset-pronunciation-and-meaning.4f6c4ece.css","_app/immutable/assets/k-how-to-maximize-your-learning-in-the-kleo-app.c0b67011.css","_app/immutable/assets/k-how-to-use-and-pronounce-ich-liebe-dich-to-share-your-love.9736a633.css","_app/immutable/assets/k-how-to-use-danke-and-variations-to-say-thank-you-in-german.9241be86.css","_app/immutable/assets/k-mastering-ch-pronunciation-in-german.0d6ef41a.css","_app/immutable/assets/k-o-umlaut-made-easy.b1f5d3d9.css","_app/immutable/assets/k-putting-kleo-to-work-for-you-every-time.f14079df.css","_app/immutable/assets/k-u-umlaut-simplified-like-never-before.86d4b1f8.css"];
export const fonts = [];
