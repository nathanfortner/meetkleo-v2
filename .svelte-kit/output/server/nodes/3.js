import * as universal from '../entries/pages/articles/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/articles/+page.js";
export const imports = ["_app/immutable/nodes/3.04320f19.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/index.3053a2dd.js","_app/immutable/chunks/each.3d878967.js"];
export const stylesheets = [];
export const fonts = [];
