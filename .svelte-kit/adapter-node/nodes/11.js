

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.de46f6f6.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/index.3053a2dd.js"];
export const stylesheets = [];
export const fonts = [];
