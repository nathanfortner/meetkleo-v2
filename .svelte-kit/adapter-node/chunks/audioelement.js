import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
import "./audioelement.svelte_svelte_type_style_lang.js";
const css = {
  code: ".kaudio.svelte-gmnlgm{margin-left:auto;margin-right:auto;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer}.kaudiotext.svelte-gmnlgm{font-size:16px;font-weight:700;color:var(--k_deeppurple);text-decoration:underline;text-decoration-thickness:1px;text-decoration-style:wavy;text-decoration-color:hsl(288, 64%, 27%, 50%)}@media screen and (min-width: 600px){.kaudiotext.svelte-gmnlgm{font-size:18px}}",
  map: null
};
let kAudioUrl = "https://ddseu0ssi.mo.cloudinary.net/audio/en_nt_de/phrase/";
const Audioelement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayname } = $$props;
  let { pid } = $$props;
  let kAudio;
  let kAudioFullUrl = `${kAudioUrl}${pid}`;
  if ($$props.displayname === void 0 && $$bindings.displayname && displayname !== void 0)
    $$bindings.displayname(displayname);
  if ($$props.pid === void 0 && $$bindings.pid && pid !== void 0)
    $$bindings.pid(pid);
  $$result.css.add(css);
  return `  <div class="kaudio svelte-gmnlgm"><p class="kaudiotext svelte-gmnlgm">${escape(displayname)}</p> <audio type="audio/mpeg"${add_attribute("this", kAudio, 0)}><track kind="captions"><source${add_attribute("src", kAudioFullUrl, 0)}><p>Download <a${add_attribute("href", `${kAudioFullUrl}`, 0)}>MP3</a></p></audio></div> `;
});
export {
  Audioelement as A
};
