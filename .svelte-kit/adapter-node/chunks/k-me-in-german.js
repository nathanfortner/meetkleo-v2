import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./ssr.js";
import { P as Post } from "./audioelement.svelte_svelte_type_style_lang.js";
import { A as Audioelement } from "./audioelement.js";
const kMeInGerman_md_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1ydh0c8.svelte-1ydh0c8{font-family:Manrope;background-color:white;margin:auto;padding:12px;color:#222;font-size:22px;text-align:left;max-width:50ch}img.svelte-1ydh0c8.svelte-1ydh0c8{height:auto;width:auto;max-height:300px;display:block;margin-right:auto;margin-left:auto;border-radius:10px;border:2px}h1.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:0 0 0.5em;font-size:38px;font-weight:800}h2.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:1.75em 0 0.5em;font-size:30px;font-weight:550;color:#6835F8}p.svelte-1ydh0c8.svelte-1ydh0c8{margin:0 0 1.15em}p.svelte-1ydh0c8+img.svelte-1ydh0c8{margin-top:1.5em}a.svelte-1ydh0c8.svelte-1ydh0c8{color:blue;text-decoration:underline;text-decoration-color:blue}ol.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}li.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:20px}ul.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;table-layout:auto;width:97%;border-spacing:0.5rem;margin:0 30px 30px 0}th.svelte-1ydh0c8.svelte-1ydh0c8{word-wrap:break-word;vertical-align:bottom;text-align:center}td.svelte-1ydh0c8.svelte-1ydh0c8{vertical-align:center;text-align:center;word-wrap:break-word;padding-left:0.25rem;padding-top:0.75rem;padding-bottom:0.75rem}tbody.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(odd){background:rgb(248, 242, 251, 0.5)}thead.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(1){text-decoration:underline}th.svelte-1ydh0c8.svelte-1ydh0c8:nth-child(n+2){vertical-align:bottom;text-align:center}.hline.svelte-1ydh0c8.svelte-1ydh0c8{margin-top:0.5em;width:25%;height:2px;border-radius:10px;background:#6835F8}.hline.svelte-1ydh0c8+h2.svelte-1ydh0c8{margin-top:0.3em}.wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;text-align:center;align-items:center}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{width:100%;max-height:100%;-o-object-fit:cover;object-fit:cover;margin:auto}.opening-p.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;color:gray;margin:0 0 0.25em 0}.callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:24px;font-weight:bold;margin-left:0.5em;margin-bottom:0.5em;color:#535252;text-align:left}.vline.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:0.5em;margin-left:0.5em;width:5px;height:100px;border-radius:10px;background:#535252}.highlighter.svelte-1ydh0c8.svelte-1ydh0c8{background-color:#FFFF00}.kleo_blog_deep_link_text.svelte-1ydh0c8.svelte-1ydh0c8{color:white;display:inline}.k_blog_deep_link.svelte-1ydh0c8.svelte-1ydh0c8{text-decoration:none}.k_apple_svg.svelte-1ydh0c8.svelte-1ydh0c8{height:25px;width:25px;display:inline;padding-bottom:5px;fill:white}.k_blog_wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;background-color:#524DD0;width:-moz-fit-content;width:fit-content;padding-left:20px;padding-right:20px;padding-top:5px;padding-bottom:5px;margin-left:auto;margin-right:auto;place-content:center;justify-content:center;border-radius:15px}.wrapper_audio.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;justify-content:space-evenly;align-items:center;background-color:rgba(182, 251, 96, 0.267);margin-left:auto;margin-right:auto;margin-bottom:40px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:40px;width:40px;fill:var(--k_deeppurple);display:inline;margin-right:10px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{color:var(--k_deeppurple);font-weight:700;text-decoration:underline;text-decoration-thickness:1px;text-decoration-style:wavy;text-decoration-color:hsl(288, 64%, 27%, 50%)}.extralink.svelte-1ydh0c8.svelte-1ydh0c8{margin-left:auto;margin-right:auto;text-align:center}@media screen and (min-width: 600px){table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:18px}img.svelte-1ydh0c8.svelte-1ydh0c8{height:300px}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{height:350px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:50px;width:50px;fill:var(--k_deeppurple);display:inline;padding-left:1px;padding-right:1px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}}",
  map: null
};
const metadata = {
  "layout": "blog",
  "seotitle": "Me in German (Mich Or Mir - Choose Right Every Time)",
  "title": "Me in German (Mich Or Mir - Choose Right Every Time)",
  "metadescription": "Mich - direct object, with accusative prepositions. Mir - indirect object, with dative prepositions. Let's see examples!",
  "fname": "k-me-in-german",
  "date": "11/1/2022",
  "longdate": "November 1, 2022",
  "author": "Michiyo Kawasaki",
  "categories": "grammar, training, speaking",
  "k_language": "german",
  "coverimage": "Articles/me_cover1_11_1_22_F.jpg",
  "articleimage": "Articles/me_cover2_11_1_22_F.jpg"
};
const { layout, seotitle, title, metadescription, fname, date, longdate, author, categories, k_language, coverimage, articleimage } = metadata;
const K_me_in_german = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let WEB_IMG_BASE_URL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
  $$result.css.add(css);
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<article class="svelte-1ydh0c8"><h1 class="svelte-1ydh0c8">${escape(title)}</h1> <p class="opening-p svelte-1ydh0c8">${escape(longdate)}</p> <img class="cover-image svelte-1ydh0c8"${add_attribute("src", `${WEB_IMG_BASE_URL}${articleimage}`, 0)} width="647px" height="350px" alt="Smiling German teacher in green sweater getting ready to teach in the Kleo app."> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1uu2voc">There are two ways to say &quot;me&quot; in German - mich and mir.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-3y1a92"><span class="highlighter svelte-1ydh0c8">Use mich as a direct object and after accusative prepositions. Use mir as an indirect object and after dative prepositions</span>. We&#39;ll use some examples to show exactly what this means!</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-35140u">The words sound like this:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-odd81j"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `bc862116-02ed-48b7-8737-3af61c177834_0.mp3`,
          displayname: `mich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-i0a6x4">me</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `8ac6da57-2e6b-4f75-9d04-8a3aca6ac8b7_0.mp3`,
          displayname: `Du liebst mich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bo8vux">You love me</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `8d70f22e-ffb7-438c-9e91-cf1666c86163_0.mp3`,
          displayname: `mir`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-i0a6x4">me</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `6e82e34b-e824-4d86-b7dd-5fe305448735_0.mp3`,
          displayname: `Bring mir die Kamera!`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1dx3x7x">Bring me the camera!</td></tr></tbody></table> <div class="wrapper_audio svelte-1ydh0c8" data-svelte-h="svelte-de0i79"><span class="audio_text svelte-1ydh0c8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="speaker_icon svelte-1ydh0c8"><path d="M301.2 34.98c-4.289-1.969-8.623-2.902-13.16-2.902c-7.496 0-14.92 2.551-20.82 7.634L164.2 159.1H32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3C273.1 477.4 280.5 479.8 288 479.8c4.531 0 8.881-.8666 13.16-2.835C312.5 471.8 320 460.4 320 447.9V64.12C320 51.62 312.5 40.2 301.2 34.98zM304 447.1c0 6.223-3.656 11.92-9.309 14.53C292.6 463.5 290.3 463.1 288 463.1c-3.477 0-6.844-1.133-9.582-3.207l-106.9-124.8H32c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8c2.742-2.072 6.102-3.203 9.57-3.203c2.324 0 4.586 .4961 6.703 1.467C300.3 52.07 304 57.77 304 63.99V447.1zM540.2 45.53c-3.375-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C589.8 106.8 624 178.1 624 255.1s-34.22 149.2-93.91 198.1c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C603.6 414.5 640 337.8 640 255.1S603.6 97.46 540.2 45.53zM478.1 120.4c-3.344-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C506.4 163.6 528 208.5 528 255.1s-21.56 92.44-59.16 123.3c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C520.3 357.7 544 308.3 544 255.1S520.3 154.2 478.1 120.4zM407.2 195.5c-2.812 3.406-2.312 8.469 1.125 11.25C423.4 219 432 236.1 432 255.1s-8.625 36.97-23.69 49.28c-3.438 2.781-3.938 7.844-1.125 11.25c1.562 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C437.2 302.3 448 279.8 448 255.1s-10.78-46.31-29.56-61.65C415 191.6 409.9 192 407.2 195.5z"></path></svg>
		Click 
		<span class="audio_callout svelte-1ydh0c8">Purple</span> 
		Words to Play</span></div> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-iahpk4">1. When should I use mich?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-t6bje6">The word &quot;mich&quot; is one of two ways to say &quot;me&quot; in German. Mich functions as a direct object pronoun. Use mich in two key instances.</p> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-tavm10"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">Use mich in a direct object position</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-532mk3"><span class="highlighter svelte-1ydh0c8">A direct object answers the question - What or whom is being &quot;verbed?&quot;</span> For example - &quot;Whom do you love?&quot; You love ME, in this case mich. In German - Du liebst mich.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-hrdpqo">In these sentences, notice how mich plays the role of direct object, answering the question - Whom is being &quot;verbed&quot; - loved/seen/made happy?:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `8ac6da57-2e6b-4f75-9d04-8a3aca6ac8b7_0.mp3`,
          displayname: `Du liebst mich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bo8vux">You love me</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `ce8e8fbc-7a68-4b46-98e0-6a29ed42800e_0.mp3`,
          displayname: `Du siehst mich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1whpcdo">You see me</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `9d0d4807-6cfb-406f-b920-a32d5713459c_0.mp3`,
          displayname: `Du machst mich glücklich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1drwhv1">You make me happy</td></tr></tbody></table> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-1m7vzeg"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">Use mich after accusative prepositions</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-c4m1t6">Prepositions are connector words that relay information about the nouns and verbs in a sentence. There are three types of prepositions in German. After accusative prepositions, use &quot;mich&quot; for &quot;me.&quot;</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-171qzbp">Examples of accusative prepositions include the words &quot;für/for&quot; and &quot;ohne/without.&quot;</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-12p6pow">In these sentences, notice how we use mich following an accusative preposition:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "1007383a-467b-425c-9d14-8518659f8595_0.mp3",
          displayname: "Das ist für mich"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-g6aoko">That is for me</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "21000c6c-6959-4841-b10d-a2504d2d6f48_0.mp3",
          displayname: "Nicht ohne mich!"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-tqtpxi">Not without me!</td></tr></tbody></table> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/girl_smiling_restv2_11_2_22_F.jpg`, 0)} width="550px" height="300px" alt="Overhead shot of hands holding out small wrapped present with background of star lights." class="svelte-1ydh0c8"> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-wirdbi">2. When should I use mir?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1l5mcgp">The word &quot;mir&quot; is the second way to say &quot;me&quot; in German. Mir is called an indirect object pronoun. Use mir in two key instances.</p> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-uvm2lk"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">Use mir in an indirect object position</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-j6q8sm"><span class="highlighter svelte-1ydh0c8">An indirect object answers the question &quot;To/for whom?&quot; and reflects the recipient of an action</span>. For example - &quot;Bring the camera to whom?&quot; Bring ME the camera, in this case mir. In German - Bring mir die Kamera.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-caa5vv">In these sentences, notice how mir plays the role of indirect object, reflecting the recipient of the actions - bring/give/help:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `6e82e34b-e824-4d86-b7dd-5fe305448735_0.mp3`,
          displayname: `Bring mir die Kamera!`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1dx3x7x">Bring me the camera!</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `163f66ef-d2e2-4497-9594-8314940b1b38_0.mp3`,
          displayname: `Gib mir das!`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-nanns9">Give me that!</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `13b3f78f-1117-4e33-b742-9a3f4240b566_0.mp3`,
          displayname: `Hilf mir!`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1336y7s">Help me!</td></tr></tbody></table> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-1y5f9ha"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">Use mir after dative prepositions</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-119qs4u">Dative prepositions are another group of German prepositions. After dative prepositions, use &quot;mir&quot; for &quot;me.&quot;</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1gf1umc">Examples of dative prepositions include the words &quot;mit/with&quot; and &quot;von/from.&quot;</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-t2zmwg">In these sentences, notice how we use mir following a dative preposition:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `b9f4b846-aff1-454a-a85b-ae2c1ccec238_0.mp3`,
          displayname: `Sprichst du mit mir?`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ixomjs">Are you speaking with/to me?</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `66c567e4-0d5b-46cf-8d62-8f8fdb840cd0_0.mp3`,
          displayname: `Das Geschenk ist von mir`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-11qjitn">The gift is from me</td></tr></tbody></table> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/present_11_1_22_F.jpg`, 0)} width="550px" height="300px" alt="Overhead shot of hands holding out small wrapped present with background of star lights." class="svelte-1ydh0c8"> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-jsgmq0">3. What if I choose the wrong pronoun?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-yg2w70"><span class="highlighter svelte-1ydh0c8">Choosing between mich and mir is a finer detail that you can refine over time</span>, as you learn more and more German. This more advanced point will not impact communication, so keep pushing to share your thoughts!</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-unp2a3">4. How do I pronounce mich?</h2> <ul class="svelte-1ydh0c8" data-svelte-h="svelte-9pv0zy"><li class="svelte-1ydh0c8"><b>Letter M</b>: The M in German is always pronounced just like in English, like in the English word &quot;man.&quot;</li> <li class="svelte-1ydh0c8"><b>Short I</b>: The I in mich is a short German I, which is like the I in the English word “in.”</li> <li class="svelte-1ydh0c8"><b>Soft CH</b>: <span class="highlighter svelte-1ydh0c8">In the word mich, we pronounce the CH as the soft ich sound</span>. This is the softer of the two CH pronunciations. This sound does not exist in English. It&#39;s like the sound of a hissing cat or like whispering a giggle.</li></ul> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1d2tuzr">Listen to these important words that leverage similar sounds:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-10q81nc"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `bc862116-02ed-48b7-8737-3af61c177834_0.mp3`,
          displayname: `mich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-i0a6x4">me</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `b9c1469c-b834-4a88-9ffe-eecc270fcc72_0.mp3`,
          displayname: `ich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-17one6z">I</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `596b454f-dbe6-43d9-8b45-a70a8c704636_0.mp3`,
          displayname: `dich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-b9j7vb">you</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1akl2bd">You can find pronunciation tips for the soft CH sound here:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1x385lf"><li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/mastering-ch-pronunciation-in-german" class="text-blue-600 svelte-1ydh0c8">Mastering CH Pronunciation in German</a></li></ol> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/twoch_softch_mich_11_1_22_F.jpg`, 0)} width="550px" height="300px" alt="German woman pretending to hiss like a cat and whisper a giggle, in order to demonstrate pronunciation tips for the soft CH sound in the word mich." class="svelte-1ydh0c8"> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1aoqrdt">5. How do I pronounce mir?</h2> <ul class="svelte-1ydh0c8" data-svelte-h="svelte-15om76v"><li class="svelte-1ydh0c8"><b>Letter M</b>: The M in German is always pronounced just like in English, like in the English word &quot;man.&quot;</li> <li class="svelte-1ydh0c8"><b>Long I</b>: The I in mir is a long German I, which actually sounds like the E in the English word &quot;eat.&quot;</li> <li class="svelte-1ydh0c8"><b>Letter R</b>: <span class="highlighter svelte-1ydh0c8">In the word mir, we barely pronounce the R</span>. We use this barely-there pronunciation because the R is at the end of the word.</li></ul> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1j3cmxv">You can hear this same ending in the indirect object pronoun for &quot;you (informal),&quot; which is dir:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-10q81nc"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `8d70f22e-ffb7-438c-9e91-cf1666c86163_0.mp3`,
          displayname: `mir`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-i0a6x4">me</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `4695f8a6-f514-4e7a-9858-e1025118b8f2_0.mp3`,
          displayname: `dir`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-b9j7vb">you</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-q1lfg">You can find pronunciation tips for the barely-there R sound (and the gargling R sound!) here:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-3lwgof"><li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/pronounce-the-german-r-right" class="text-blue-600 svelte-1ydh0c8">Pronounce The German R Right</a></li></ol> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-5786mw">6. Is the word mich used in any other way?</h2> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-lfonjt"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">Mich is also used as a reflexive pronoun (myself)</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1x57pyn">In addition to serving as the direct object pronoun &quot;me,&quot; the word mich also serves as the reflexive pronoun &quot;myself.&quot; The reflexive construct is used in German when an action is done to or for oneself.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-d0rdkx">Though the word mich is used both for the direct object pronoun and for the reflexive pronoun, the function is distinct in each case.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-4m8ttz">In these examples, the word mich functions as a reflexive pronoun, indicating an action that is done to oneself:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-10q81nc"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "1a564f11-4d1d-42ec-864b-61e5577c2955_0.mp3",
          displayname: "Ich dusche mich"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-kbx1gx">I shower</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "162c0c67-f3ce-4ffb-9404-d7f83e3dddf2_0.mp3",
          displayname: "Ich wasche mich"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-df29f9">I wash (myself)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "2145b949-8570-4189-b00b-2f81c2692f06_0.mp3",
          displayname: "Ich rasiere mich"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-19g3zsh">I shave (myself)</td></tr></tbody></table> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-3gpkmh">7. What about the object pronoun for &quot;you&quot; in German?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-njp220"><span class="highlighter svelte-1ydh0c8">Just as we choose between mich and mir for &quot;me,&quot; we choose between two object pronouns for the word &quot;you (informal)&quot; - dich and dir</span>.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1mh6gu0">To determine whether to use dich or dir, follow the same rules we&#39;ve discussed. Use dich for a direct object and after an accusative preposition. Use dir for an indirect object and after a dative preposition. See this in action in the following examples:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-rqdgbz"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">Note</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `ad3b285a-054f-4b40-aec4-127fb964f14a_0.mp3`,
          displayname: `Ich liebe dich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1s42xow">I love you</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ekpuym">direct object</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `8c3109ec-d2d0-4f05-9864-1ece3accbb42_0.mp3`,
          displayname: `Das ist für dich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-4pfunv">That is for you</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-p4evma">accusative preposition</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `71a4ae86-6c6d-4664-8674-2551e899ed22_0.mp3`,
          displayname: `Ich bringe dir die Kamera`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1sl0cjk">I bring you the camera</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1s8fbnd">indirect object</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `f5866a8e-80ce-40cb-a89c-56bf420332fa_0.mp3`,
          displayname: `Ist das Geschenk von dir?`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-oau8r3">Is the gift from you?</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-17z312d">dative preposition</td></tr></tbody></table> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-mdvy8">8. What about the other object pronouns?</h2> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/family_park_11_1_22_F.jpg`, 0)} width="550px" height="300px" alt="Family of four walking in the park through a floor of leaves." class="svelte-1ydh0c8"> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1hidall">Take a look at the additional pairs of direct and indirect object pronouns:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-120sbfk"><tr class="svelte-1ydh0c8"><th colspan="1" class="svelte-1ydh0c8"></th> <th colspan="2" class="svelte-1ydh0c8">German Object Pronoun</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">Direct</th> <th class="svelte-1ydh0c8">Indirect</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-i0a6x4">me</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `bc862116-02ed-48b7-8737-3af61c177834_0.mp3`,
          displayname: `mich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `8d70f22e-ffb7-438c-9e91-cf1666c86163_0.mp3`,
          displayname: `mir`
        },
        {},
        {}
      )}</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-1o6dkfk">you (informal)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `596b454f-dbe6-43d9-8b45-a70a8c704636_0.mp3`,
          displayname: `dich`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `4695f8a6-f514-4e7a-9858-e1025118b8f2_0.mp3`,
          displayname: `dir`
        },
        {},
        {}
      )}</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-150y4e8">him</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `323b892a-0c12-4eb3-a75f-9b51c717a477_0.mp3`,
          displayname: `ihn`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `0deb2a07-063e-4217-93e4-f5380250fd65_0.mp3`,
          displayname: `ihm`
        },
        {},
        {}
      )}</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-acnci7">her</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `1e1381ad-0b24-4fbd-9004-fc55b2e51f1e_0.mp3`,
          displayname: `sie`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `25e1b4ac-7ebc-4684-a8ad-2411122a9c64_0.mp3`,
          displayname: `ihr`
        },
        {},
        {}
      )}</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-mxc0xy">us</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `815b877c-4b7d-43f3-9cb8-ffef29d2451c_0.mp3`,
          displayname: `uns`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `fbef50c4-1b43-49cd-820b-1f16523184b8_0.mp3`,
          displayname: `uns`
        },
        {},
        {}
      )}</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-1r1709m">you all</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `bec0d2f3-6143-47dd-aab1-85fa8e70fbab_0.mp3`,
          displayname: `euch`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `24ab023f-83b4-4706-bb4e-50b0913f3e77_0.mp3`,
          displayname: `euch`
        },
        {},
        {}
      )}</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-1xtt1n0">them</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `1a110235-be9c-4f63-bf1d-0912702f1bcd_0.mp3`,
          displayname: `sie`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `8b1961e3-4c8d-44df-be35-a5da21cd94ae_0.mp3`,
          displayname: `ihnen`
        },
        {},
        {}
      )}</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-rjkitx">you (formal)</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `69cf6fe4-3bc1-40d8-aa45-4312d6b43339_0.mp3`,
          displayname: `Sie`
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: `f5411674-9110-4b37-9508-8a8239eb330e_0.mp3`,
          displayname: `Ihnen`
        },
        {},
        {}
      )}</td></tr></tbody></table> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1j1m0bj">9. How can I practice choosing the right object pronoun?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1y98bh7">You can learn to conquer this finer detail with practice.</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1wo54ff"><li class="svelte-1ydh0c8"><b>Listen actively</b>: Listen for mich and mir, as well as the other object pronoun pairs, used in conversation around you. Try to determine why a given word was used in each case. Keep a running list of the examples you&#39;ve encountered. This is a great way to learn.</li> <li class="svelte-1ydh0c8"><b>Practice the pronouns in context</b>: The best way to solidify new concepts is to use them in real-life situations. Challenge yourself to incorporate new concepts into your conversations, even when you are still working through the finer details. Kleo&#39;s interactive video lessons provide a convenient way to practice speaking German, getting instant feedback in a risk-free environment that feels real. The lessons provide many chances to practice using the various pronouns we&#39;ve introduced here and make it all stick!</li></ol> <div class="k_blog_wrapper svelte-1ydh0c8" data-svelte-h="svelte-qcfg0d"><a href="https://meetkleo.page.link/8oBQQhcQzJbeVRoC9" class="k_blog_deep_link svelte-1ydh0c8"><p class="kleo_blog_deep_link_text svelte-1ydh0c8">Start Speaking German - FREE!</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="k_apple_svg svelte-1ydh0c8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div> <br> <div class="extralink svelte-1ydh0c8" data-svelte-h="svelte-1y58vbl"><a href="/learn?klg=German" class="svelte-1ydh0c8">Or Explore Other Free Lessons</a></div></article>`;
    }
  })}`;
});
export {
  K_me_in_german as default,
  metadata
};
