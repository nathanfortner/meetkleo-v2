import { c as create_ssr_component, a as subscribe, e as escape } from './ssr-fdcc1d70.js';
import { p as page } from './stores2-56d4857e.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 class="text-white">Sorry the page was not found  ${escape($page.status)}: ${escape($page.error.message)}</h1>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-ad05545c.js.map
