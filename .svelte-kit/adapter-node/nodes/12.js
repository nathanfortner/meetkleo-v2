

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/more/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.cedb7877.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/index.3053a2dd.js","_app/immutable/chunks/seohead.3833ee9c.js"];
export const stylesheets = [];
export const fonts = [];
