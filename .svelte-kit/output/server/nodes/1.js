

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.62d97e6c.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/index.3053a2dd.js","_app/immutable/chunks/stores.78aa8a67.js","_app/immutable/chunks/singletons.3019dc3d.js","_app/immutable/chunks/index.c1d2a79c.js"];
export const stylesheets = [];
export const fonts = [];
