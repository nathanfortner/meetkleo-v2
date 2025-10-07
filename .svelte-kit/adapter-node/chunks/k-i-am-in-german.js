import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./ssr.js";
import { P as Post } from "./audioelement.svelte_svelte_type_style_lang.js";
import { A as Audioelement } from "./audioelement.js";
const kIAmInGerman_md_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1ydh0c8.svelte-1ydh0c8{font-family:Manrope;background-color:white;margin:auto;padding:12px;color:#222;font-size:22px;text-align:left;max-width:50ch}img.svelte-1ydh0c8.svelte-1ydh0c8{height:auto;width:auto;max-height:300px;display:block;margin-right:auto;margin-left:auto;border-radius:10px;border:2px}h1.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:0 0 0.5em;font-size:38px;font-weight:800}h2.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:1.75em 0 0.5em;font-size:30px;font-weight:550;color:#6835F8}p.svelte-1ydh0c8.svelte-1ydh0c8{margin:0 0 1.15em}p.svelte-1ydh0c8+img.svelte-1ydh0c8{margin-top:1.5em}a.svelte-1ydh0c8.svelte-1ydh0c8{color:blue;text-decoration:underline;text-decoration-color:blue}ol.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}li.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:20px}ul.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;table-layout:auto;width:97%;border-spacing:0.5rem;margin:0 30px 30px 0}th.svelte-1ydh0c8.svelte-1ydh0c8{word-wrap:break-word;vertical-align:bottom;text-align:center}td.svelte-1ydh0c8.svelte-1ydh0c8{vertical-align:center;text-align:center;word-wrap:break-word;padding-left:0.25rem;padding-top:0.75rem;padding-bottom:0.75rem}tbody.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(odd){background:rgb(248, 242, 251, 0.5)}thead.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(1){text-decoration:underline}th.svelte-1ydh0c8.svelte-1ydh0c8:nth-child(n+2){vertical-align:bottom;text-align:center}.hline.svelte-1ydh0c8.svelte-1ydh0c8{margin-top:0.5em;width:25%;height:2px;border-radius:10px;background:#6835F8}.hline.svelte-1ydh0c8+h2.svelte-1ydh0c8{margin-top:0.3em}.wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;text-align:center;align-items:center}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{width:100%;max-height:100%;-o-object-fit:cover;object-fit:cover;margin:auto}.opening-p.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;color:gray;margin:0 0 0.25em 0}.callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:24px;font-weight:bold;margin-left:0.5em;margin-bottom:0.5em;color:#535252;text-align:left}.vline.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:0.5em;margin-left:0.5em;width:5px;height:100px;border-radius:10px;background:#535252}.highlighter.svelte-1ydh0c8.svelte-1ydh0c8{background-color:#FFFF00}.kleo_blog_deep_link_text.svelte-1ydh0c8.svelte-1ydh0c8{color:white;display:inline}.k_blog_deep_link.svelte-1ydh0c8.svelte-1ydh0c8{text-decoration:none}.k_apple_svg.svelte-1ydh0c8.svelte-1ydh0c8{height:25px;width:25px;display:inline;padding-bottom:5px;fill:white}.k_blog_wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;background-color:#524DD0;width:-moz-fit-content;width:fit-content;padding-left:20px;padding-right:20px;padding-top:5px;padding-bottom:5px;margin-left:auto;margin-right:auto;place-content:center;justify-content:center;border-radius:15px}.wrapper_audio.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;justify-content:space-evenly;align-items:center;background-color:rgba(182, 251, 96, 0.267);margin-left:auto;margin-right:auto;margin-bottom:40px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:40px;width:40px;fill:var(--k_deeppurple);display:inline;margin-right:10px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{color:var(--k_deeppurple);font-weight:700;text-decoration:underline;text-decoration-thickness:1px;text-decoration-style:wavy;text-decoration-color:hsl(288, 64%, 27%, 50%)}.extralink.svelte-1ydh0c8.svelte-1ydh0c8{margin-left:auto;margin-right:auto;text-align:center}@media screen and (min-width: 600px){table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:18px}img.svelte-1ydh0c8.svelte-1ydh0c8{height:300px}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{height:350px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:50px;width:50px;fill:var(--k_deeppurple);display:inline;padding-left:1px;padding-right:1px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}}",
  map: null
};
const metadata = {
  "layout": "blog",
  "seotitle": "I am In German (Ich Bin Is Powerful And You Can Use It Now)",
  "title": "I am In German (Ich Bin Is Powerful And You Can Use It Now)",
  "metadescription": `To say "I am" in German, use ich bin. Let's see the types of information we can share and refine our pronunciation too!`,
  "fname": "k-i-am-in-german",
  "date": "11/4/2022",
  "longdate": "November 4, 2022",
  "author": "Michiyo Kawasaki",
  "categories": "grammar, training, speaking",
  "k_language": "german",
  "coverimage": "Articles/ichbin_cover1_11722_F.jpg",
  "articleimage": "Articles/ichbin_cover2_11722_F.jpg"
};
const { layout, seotitle, title, metadescription, fname, date, longdate, author, categories, k_language, coverimage, articleimage } = metadata;
const K_i_am_in_german = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let WEB_IMG_BASE_URL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
  $$result.css.add(css);
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<article class="svelte-1ydh0c8"><h1 class="svelte-1ydh0c8">${escape(title)}</h1> <p class="opening-p svelte-1ydh0c8">${escape(longdate)}</p> <img class="cover-image svelte-1ydh0c8"${add_attribute("src", `${WEB_IMG_BASE_URL}${articleimage}`, 0)} width="647px" height="350px" alt="German teacher smiling kindly next to words &quot;ich bin&quot;, meaning &quot;I am&quot; in German."> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1llwv1x">To say I am in German, use “ich bin.” You can pair ich bin with many words and phrases, in order to share all types of information about yourself. <span class="highlighter svelte-1ydh0c8">“Ich bin” is one of the best ways for a new German learner to cover lots of ground - fast</span>.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-5qw760">Let’s see how to use this powerful phrase now. The phrase sounds like this:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `281ab56b-f01a-4d62-bf94-f3544149b9d2_0.mp3`,
          displayname: `ich bin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1877vqh">I am</td></tr></tbody></table> <div class="wrapper_audio svelte-1ydh0c8" data-svelte-h="svelte-de0i79"><span class="audio_text svelte-1ydh0c8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="speaker_icon svelte-1ydh0c8"><path d="M301.2 34.98c-4.289-1.969-8.623-2.902-13.16-2.902c-7.496 0-14.92 2.551-20.82 7.634L164.2 159.1H32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3C273.1 477.4 280.5 479.8 288 479.8c4.531 0 8.881-.8666 13.16-2.835C312.5 471.8 320 460.4 320 447.9V64.12C320 51.62 312.5 40.2 301.2 34.98zM304 447.1c0 6.223-3.656 11.92-9.309 14.53C292.6 463.5 290.3 463.1 288 463.1c-3.477 0-6.844-1.133-9.582-3.207l-106.9-124.8H32c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8c2.742-2.072 6.102-3.203 9.57-3.203c2.324 0 4.586 .4961 6.703 1.467C300.3 52.07 304 57.77 304 63.99V447.1zM540.2 45.53c-3.375-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C589.8 106.8 624 178.1 624 255.1s-34.22 149.2-93.91 198.1c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C603.6 414.5 640 337.8 640 255.1S603.6 97.46 540.2 45.53zM478.1 120.4c-3.344-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C506.4 163.6 528 208.5 528 255.1s-21.56 92.44-59.16 123.3c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C520.3 357.7 544 308.3 544 255.1S520.3 154.2 478.1 120.4zM407.2 195.5c-2.812 3.406-2.312 8.469 1.125 11.25C423.4 219 432 236.1 432 255.1s-8.625 36.97-23.69 49.28c-3.438 2.781-3.938 7.844-1.125 11.25c1.562 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C437.2 302.3 448 279.8 448 255.1s-10.78-46.31-29.56-61.65C415 191.6 409.9 192 407.2 195.5z"></path></svg>
		Click 
		<span class="audio_callout svelte-1ydh0c8">Purple</span> 
		Words to Play</span></div> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-lrbgnz">1. Where does ich bin come from?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1y6a8rn"><span class="highlighter svelte-1ydh0c8">Ich bin, or I am, comes from the verb sein, meaning to be</span>. Ich bin is the first-person singular conjugation of sein.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-155r89m">Ich means I. The verb sein is irregular, meaning its conjugations do not follow the standard patterns and must be committed to memory over time.</p> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-ckolu"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">The verb sein is the top-used verb in German</span></div> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-uu8nt4">2. What introductory details can I share using ich bin?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-82x7aw">Just like in English, German has several ways to share the basics about yourself, such as your name and where you are from. Using “ich bin” is one of the simplest ways to share these important introductory details.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1kzwfqg">Use ich bin in these foundational ways:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-10q81nc"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `433da745-cc15-43c0-ad48-efdad03c2fce_0.mp3`,
          displayname: `Ich bin + Name`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-kzswm1">I am + Name</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `fd0abbda-d85b-4c00-b446-30023aa46526_0.mp3`,
          displayname: `Ich bin aus + Place`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ftcqsr">I am from + Region/Country</td></tr></tbody></table> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/name_11722_F.jpg`, 0)} width="550px" height="300px" alt="Woman introducing herself to a couple, shaking hands with the man." class="svelte-1ydh0c8"> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-15mg05l">3. How can I describe myself using ich bin?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1kidm92">The construct “I am/ich bin” in German works similarly to “I am” in English. Unlike with “I am” in Spanish, using “I am” in German does not require us to consider temporary versus permanent characteristics or the gender of the subject.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-k6dfd6">Start with ich bin, tack on an adjective, and you are good to go. <span class="highlighter svelte-1ydh0c8">The “ich bin + adjective” construct works for all types of characteristics and for speakers of any gender</span>.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-zsznrq">Here are some common characteristics you can share using ich bin:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-odd81j"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `bffe2dd6-ec58-4110-a78e-9be48bff36f3_0.mp3`,
          displayname: `bereit`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-icif8f">ready</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `0a945d3b-6db8-4338-b24f-36c0c9fdc7ad_0.mp3`,
          displayname: `Ich bin bereit`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-i7i1ue">I am ready</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `00c3b469-d9e7-40c8-b6f3-5a09167cf2cd_0.mp3`,
          displayname: `klug`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1fwovf5">smart</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `b5a05d3e-8f5c-474f-be5a-5b433f9e5c11_0.mp3`,
          displayname: `Ich bin klug`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1osz5gc">I am smart</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `64208ad5-eed8-4f8f-8b08-603a95b19da9_0.mp3`,
          displayname: `glücklich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-vsrb2s">happy</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `1a4ad9cc-448a-4a78-b39f-174c942be5c2_0.mp3`,
          displayname: `Ich bin glücklich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ja9g9n">I am happy</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `9ef03c2b-ab7f-4c5c-b5d3-bbb3cff2fd5f_0.mp3`,
          displayname: `traurig`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-9gdpr2">sad</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `04d597c8-4c69-4d7d-a942-5095f85f9023_0.mp3`,
          displayname: `Ich bin traurig`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-p1ra6x">I am sad</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `e5be083c-118f-4069-a7d2-297734e5ef6d_0.mp3`,
          displayname: `groß`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-os98k1">tall</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `1272b8f2-dc1f-4b40-8347-f630680d4827_0.mp3`,
          displayname: `Ich bin groß`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-2xbaos">I am tall</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `80624b5c-1e69-4bbb-be01-d2360a06080f_0.mp3`,
          displayname: `müde`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-x48jsc">tired</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `7025cf40-dd63-457b-bf7f-2220dde07156_0.mp3`,
          displayname: `Ich bin müde`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ugie77">I am tired</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `152dc695-492c-4c1d-9a5b-97289993a088_0.mp3`,
          displayname: `krank`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-d1yt9c">sick</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `f0017149-f2d8-43eb-936f-eb6858d449b0_0.mp3`,
          displayname: `Ich bin krank`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-th146f">I am sick</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1xayffw">Here’s a PRO TIP. <span class="highlighter svelte-1ydh0c8">If you want to negate statements like these, simply add “nicht”, meaning &quot;not,&quot; in front of the adjective</span>.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-15vim9j">Take a look at the negation of the characteristics we’ve just shared:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-10q81nc"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `86544436-ce7d-475b-a935-379f9881f3ac_0.mp3`,
          displayname: `Ich bin nicht bereit`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-8mafzz">I am not ready</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `4abb8141-fe40-449d-b93d-cb85d02fc356_0.mp3`,
          displayname: `Ich bin nicht klug`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1m4fjx">I am not smart</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `fbcc7f6b-5b9f-408e-b334-3828e8a2e3e9_0.mp3`,
          displayname: `Ich bin nicht glücklich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-rblq5a">I am not happy</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `def8eca1-a464-452a-8b82-b659d296198a_0.mp3`,
          displayname: `Ich bin nicht traurig`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-kp6ubg">I am not sad</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `5561ea72-e8af-4552-9379-473a2d2ae85b_0.mp3`,
          displayname: `Ich bin nicht groß`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ax3tx9">I am not tall</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `a99af933-96ae-455f-9b62-a8437d4c57e8_0.mp3`,
          displayname: `Ich bin nicht müde`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-xkqmqu">I am not tired</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `28b50d7e-837d-4f97-8067-b4fa6ff05198_0.mp3`,
          displayname: `Ich bin nicht krank`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-17lrqgi">I am not sick</td></tr></tbody></table> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1opr4os">4. What’s another easy way to leverage ich bin?</h2> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/here_11722_F.jpg`, 0)} width="550px" height="300px" alt="Two woman outside coffee shop gesturing to friend through the window." class="svelte-1ydh0c8"> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-18ppyqk">Another straightforward way to use ich bin is to add on an adverb of place to describe your current location. For example, you can tell someone – I am here, or ich bin hier.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1l0cu7l">Take a look at these locations that are easy to share using ich bin:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-odd81j"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `b88ded90-3d39-47d6-93a2-b5f7c48117e0_0.mp3`,
          displayname: `hier`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1p53oe0">here</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `67d61ab6-ed40-44e6-9ad8-ddafcc28b19d_0.mp3`,
          displayname: `Ich bin hier`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-fdb2sv">I am here</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `d81cbd25-bd0e-4b57-9a38-294ab8540c08_0.mp3`,
          displayname: `drinnen`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-288p2y">inside</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `d48c28a6-e609-4261-bcd9-fd611d36e1f6_0.mp3`,
          displayname: `Ich bin drinnen`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ghx4kl">I am inside</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `be63118f-6327-498c-bb93-e58a2ad5d925_0.mp3`,
          displayname: `draußen`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-i6e6sr">outside</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `d8bbcce5-5376-462b-91d1-0dc3ab054171_0.mp3`,
          displayname: `Ich bin draußen`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1p1m3iq">I am outside</td></tr></tbody></table> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1nbty5i">5. How do I pronounce ich bin?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1nrgssv">The word ich is one of the most frequently used words in German. Ich is also one of the most mispronounced words by German learners. Here&#39;s what you need to know to conquer the pronunciation of ich bin:</p> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/ich_softchinich_10_1_22.jpg`, 0)} width="550px" height="300px" alt="Woman pretending to hiss like a cat and whisper a giggle, showing practice tips for the soft pronunciation of German CH, which is present in the word ich." class="svelte-1ydh0c8"> <br> <ul class="svelte-1ydh0c8" data-svelte-h="svelte-1awoql"><li class="svelte-1ydh0c8"><b>Soft CH</b>: <span class="highlighter svelte-1ydh0c8">In the word ich, we pronounce the CH as the soft ich sound</span>. This is the softer of the two CH pronunciations. This sound does not exist in English. The soft ich pronunciation is like the sound of a hissing cat or like whispering a giggle.</li> <li class="svelte-1ydh0c8"><b>Short I</b>: <span class="highlighter svelte-1ydh0c8">In ich and bin, the I is a short German I</span>, which is pronounced like the I in the English word “in.”</li> <li class="svelte-1ydh0c8"><b>Letters B and N</b>: In the word bin, we pronounce the consonants just as we do in English. The German B is like the B in the English word &quot;banana,&quot; which is always the case when B starts a word. The German N is always like the N in the English word &quot;no.&quot;</li></ul> <div class="k_blog_wrapper svelte-1ydh0c8" data-svelte-h="svelte-1vtn61b"><a href="https://meetkleo.page.link/TrG7Z5jp9BipTBP58" class="k_blog_deep_link svelte-1ydh0c8"><p class="kleo_blog_deep_link_text svelte-1ydh0c8">Pronunciation lesson FREE</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="k_apple_svg svelte-1ydh0c8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1tr9t6j">6. How can I share a role using ich bin?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1n75u5x">Another valuable usage of ich bin is to share what you do. This construct works differently than in English in two key ways:</p> <ul class="svelte-1ydh0c8" data-svelte-h="svelte-nsieo"><li class="svelte-1ydh0c8">In German, <span class="highlighter svelte-1ydh0c8">the word for a given role is often different for a male versus a female</span>. You see this in English with some professions like waiter and waitress. In German, this concept is much more prevalent. In many cases, to form the female role, Germans add the letters “I-N.” For example, to say university student, Germans use “Student” for a male and “Studentin” for a female.</li> <li class="svelte-1ydh0c8">When sharing a role in German, there is no need to include the word for “a” or “an,” as in “I am a student.” You can just say ich bin Student or ich bin Studentin.</li></ul> <p class="svelte-1ydh0c8" data-svelte-h="svelte-142hwzb">Take a look at some example professions and roles:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-odd81j"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `948f3346-b129-4a8f-9e93-84a31950c332_0.mp3`,
          displayname: `Student`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-2s2dq3">university student (M)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `6f3c63ba-fe73-478c-980a-39d2def26b59_0.mp3`,
          displayname: `Ich bin Student`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1hlo6sb">I am a student (M)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `6f00ce83-9679-4108-a927-d2e1724000a1_0.mp3`,
          displayname: `Studentin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-zisuck">university student (F)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `7e985471-8d73-44c5-ac22-d4321d2fb16e_0.mp3`,
          displayname: `Ich bin Studentin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-phkvbk">I am a student (F)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `ac17519d-4969-46c7-a5f6-ab3d42334d47_0.mp3`,
          displayname: `Arzt`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-14sizib">doctor (M)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `d1a54d14-3fe6-47d9-bb4d-064fa50a49c3_0.mp3`,
          displayname: `Ich bin Arzt`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1h05as9">I am a doctor (M)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `d3086b2b-abe7-4e05-a83d-93dbe2e5a1ae_0.mp3`,
          displayname: `Ärztin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ohg2z8">doctor (F)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `f9a04d7e-ee56-4329-84dd-8f3acd2a891d_0.mp3`,
          displayname: `Ich bin Ärztin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1jym3sc">I am a doctor (F)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `12771144-ca1f-4dbf-b63e-0e6e50e37a79_0.mp3`,
          displayname: `Polizist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-asmvlo">police officer (M)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `0e5a462f-6c81-4207-9a1d-9e49c7d3096c_0.mp3`,
          displayname: `Ich bin Polizist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-8qtzes">I am a police officer (M)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `e44f4f23-c3f4-4ba0-995c-321d1105de25_0.mp3`,
          displayname: `Polizistin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ckg85r">police officer (F)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `904b2b4a-db41-4e4c-a5d1-941dbe06588e_0.mp3`,
          displayname: `Ich bin Polizistin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-qszbrp">I am a police officer (F)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `3e031aeb-a707-4daf-998c-c42262e1f26d_0.mp3`,
          displayname: `Sportler`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-11rkdrt">athlete (M)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `f94c7f35-76ab-4883-8edf-b8aa3d478831_0.mp3`,
          displayname: `Ich bin Sportler`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-dh7pv">I am an athlete (M)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `6df1dfab-2ca1-44fe-9892-98843450afe4_0.mp3`,
          displayname: `Sportlerin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1lh17hg">athlete (F)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `b92eb4dd-0196-48cd-b8d4-1db1e38c1776_0.mp3`,
          displayname: `Ich bin Sportlerin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1vum972">I am an athlete (F)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `9dada01e-0d05-48a7-a151-ed913cf6c06e_0.mp3`,
          displayname: `Tourist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-d3kyk2">tourist (M)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `6f0067e3-67be-4430-b248-34d200759c09_0.mp3`,
          displayname: `Ich bin Tourist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-y5vzby">I am a tourist (M)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `33af658d-0aaf-4d4f-acb4-43dd656a5012_0.mp3`,
          displayname: `Touristin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-v1dgxv">tourist (F)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `13779d11-7744-419a-877c-b10a442ecedc_0.mp3`,
          displayname: `Ich bin Touristin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ig2l21">I am a tourist (F)</td></tr></tbody></table> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/tourist_11722_F.jpg`, 0)} width="550px" height="300px" alt="Female tourist in a German city." class="svelte-1ydh0c8"> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-ltk6fs">In addition to what you do, you can use ich bin to share other roles, such as your role in the family or your nationality.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-pprpyd">7. How can I practice using ich bin?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1xryjrm">Ich bin is a poweful phrase that can enable you to share lots of great information about yourself. Here&#39;s some great ways to grow comfortable with using this phrase:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1nim2uw"><li class="svelte-1ydh0c8"><b>Challenge yourself to use ich bin as much as you can</b>: The next time you run into someone, use “ich bin” to share your name. Also share what region or country you’re from using “ich bin aus.”</li> <li class="svelte-1ydh0c8"><b>Listen actively</b>: You will hear “ich bin” used in conversation all the time. Keep track of the various types of information you hear conveyed using this valuable construct. Pick a few new options to practice each day.</li> <li class="svelte-1ydh0c8"><b>Practice ich bin in context</b>: You’ve probably been told that the best way to develop muscle memory for a new concept is to use the concept as it’s needed in real-life situations. It can be challenging to get this type of practice, especially if you aren’t surrounded by German friends. Fortunately, Kleo’s top interactive lesson features “ich bin.” You can practice using ich bin while meeting new friends, including YouTube star Feli from Germany. Practice as much as you want to make it stick.</li> <li class="svelte-1ydh0c8"><b>Refine your pronunciation of ich</b>: As you grow more confident in your pronunciation, you will start to feel more natural and comfortable when you speak. You’re probably sick of practicing German sounds by yourself - in the car or in the shower. Instead, you can pop over to Kleo and practice all your favorite sounds in Kleo’s interactive pronunciation lessons. Feli from Germany even hosts a lesson sharing her best pronunciation tips for the soft CH sound in ich. You can practice pronouncing ich and other soft CH words “face-to-face” with Feli, receiving instant feedback to improve.</li></ol> <div class="k_blog_wrapper svelte-1ydh0c8" data-svelte-h="svelte-18hb73b"><a href="https://meetkleo.page.link/8oBQQhcQzJbeVRoC9" class="k_blog_deep_link svelte-1ydh0c8"><p class="kleo_blog_deep_link_text svelte-1ydh0c8">Try ich bin lesson - FREE</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="k_apple_svg svelte-1ydh0c8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div> <br> <div class="extralink svelte-1ydh0c8" data-svelte-h="svelte-1y58vbl"><a href="/learn?klg=German" class="svelte-1ydh0c8">Or Explore Other Free Lessons</a></div> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1hy9mrw">8. What are the other conjugations of sein?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-cp1u0q">Now that you&#39;ve seen how to use &quot;ich bin&quot; to share lots of valuable information, you can extend these same constructs to talk about other subjects.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-736ojr">The verb sein is just as irregular as it is frequently used. The sein conjugations look like this:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `281ab56b-f01a-4d62-bf94-f3544149b9d2_0.mp3`,
          displayname: `ich bin`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1877vqh">I am</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `1ef20e61-036b-4385-88cd-67dbefb10640_0.mp3`,
          displayname: `du bist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ulvpym">you are (informal)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `59757140-c40c-4e3a-a22f-4b2854ac2743_0.mp3`,
          displayname: `er ist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-9g5h45">he is</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `9b23cb5d-83fc-4991-8e30-3010f9e773a6_0.mp3`,
          displayname: `sie ist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-9tfn24">she is</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `e94b588d-db45-4aa4-bff9-5843c8847ca4_0.mp3`,
          displayname: `es ist`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-htlu2z">it is</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `02df2b5b-5819-4d6d-8947-b5250ad4ddb1_0.mp3`,
          displayname: `wir sind`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1iujsqk">we are</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `7e3b215e-1a7b-4d95-b107-fd1ccecf7990_0.mp3`,
          displayname: `ihr seid`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1mohp1k">you all are</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `5df9f1b3-53a2-4dcd-a617-e064a39af6a0_0.mp3`,
          displayname: `sie sind`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ipuyja">they are</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `fa82210e-7b6d-4f79-bb4c-3b7ba3bf3e39_0.mp3`,
          displayname: `Sie sind`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1u82nuv">you are (formal)</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1f0qfn3">To use the various conjugations, simply remove ich bin from any of the phrases we tried above. Replace ich bin with whatever conjugation you need. When sharing a role only – remember to keep the subject’s gender in mind.</p></article>`;
    }
  })}`;
});
export {
  K_i_am_in_german as default,
  metadata
};
