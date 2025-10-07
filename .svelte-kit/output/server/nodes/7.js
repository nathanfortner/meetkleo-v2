

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/learn/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.34adcb7a.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/index.3053a2dd.js","_app/immutable/chunks/stores.78aa8a67.js","_app/immutable/chunks/singletons.3019dc3d.js","_app/immutable/chunks/index.c1d2a79c.js","_app/immutable/chunks/stores.80c43c27.js","_app/immutable/chunks/each.3d878967.js"];
export const stylesheets = ["_app/immutable/assets/7.d8202396.css"];
export const fonts = [];
