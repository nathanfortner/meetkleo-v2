import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { S as Seohead } from "../../../../chunks/seohead.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let seo_fname = data.fname.slice(2);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Seohead, "Seohead").$$render(
    $$result,
    {
      title: data.title,
      metadescription: data.metadescription,
      canon: `articles/${seo_fname}`
    },
    {},
    {}
  )} <div class="bg-white rounded-xl">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
