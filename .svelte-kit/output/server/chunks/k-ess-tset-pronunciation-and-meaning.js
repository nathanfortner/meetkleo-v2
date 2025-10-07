import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./ssr.js";
import { P as Post } from "./audioelement.svelte_svelte_type_style_lang.js";
import { A as Audioelement } from "./audioelement.js";
const kEssTsetPronunciationAndMeaning_md_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1ydh0c8.svelte-1ydh0c8{font-family:Manrope;background-color:white;margin:auto;padding:12px;color:#222;font-size:22px;text-align:left;max-width:50ch}img.svelte-1ydh0c8.svelte-1ydh0c8{height:auto;width:auto;max-height:300px;display:block;margin-right:auto;margin-left:auto;border-radius:10px;border:2px}h1.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:0 0 0.5em;font-size:38px;font-weight:800}h2.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:1.75em 0 0.5em;font-size:30px;font-weight:550;color:#6835F8}p.svelte-1ydh0c8.svelte-1ydh0c8{margin:0 0 1.15em}p.svelte-1ydh0c8+img.svelte-1ydh0c8{margin-top:1.5em}a.svelte-1ydh0c8.svelte-1ydh0c8{color:blue;text-decoration:underline;text-decoration-color:blue}ol.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}li.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:20px}table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;table-layout:auto;width:97%;border-spacing:0.5rem;margin:0 30px 30px 0}th.svelte-1ydh0c8.svelte-1ydh0c8{word-wrap:break-word;vertical-align:bottom;text-align:center}td.svelte-1ydh0c8.svelte-1ydh0c8{vertical-align:center;text-align:center;word-wrap:break-word;padding-left:0.25rem;padding-top:0.75rem;padding-bottom:0.75rem}tbody.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(odd){background:rgb(248, 242, 251, 0.5)}thead.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(1){text-decoration:underline}th.svelte-1ydh0c8.svelte-1ydh0c8:nth-child(n+2){vertical-align:bottom;text-align:center}.hline.svelte-1ydh0c8.svelte-1ydh0c8{margin-top:0.5em;width:25%;height:2px;border-radius:10px;background:#6835F8}.hline.svelte-1ydh0c8+h2.svelte-1ydh0c8{margin-top:0.3em}.wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;text-align:center;align-items:center}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{width:100%;max-height:100%;-o-object-fit:cover;object-fit:cover;margin:auto}.opening-p.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;color:gray;margin:0 0 0.25em 0}.callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:24px;font-weight:bold;margin-left:0.5em;margin-bottom:0.5em;color:#535252;text-align:left}.vline.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:0.5em;margin-left:0.5em;width:5px;height:100px;border-radius:10px;background:#535252}.highlighter.svelte-1ydh0c8.svelte-1ydh0c8{background-color:#FFFF00}.kleo_blog_deep_link_text.svelte-1ydh0c8.svelte-1ydh0c8{color:white;display:inline}.k_blog_deep_link.svelte-1ydh0c8.svelte-1ydh0c8{text-decoration:none}.k_apple_svg.svelte-1ydh0c8.svelte-1ydh0c8{height:25px;width:25px;display:inline;padding-bottom:5px;fill:white}.k_blog_wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;background-color:#524DD0;width:-moz-fit-content;width:fit-content;padding-left:20px;padding-right:20px;padding-top:5px;padding-bottom:5px;margin-left:auto;margin-right:auto;place-content:center;justify-content:center;border-radius:15px}.wrapper_audio.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;justify-content:space-evenly;align-items:center;background-color:rgba(182, 251, 96, 0.267);margin-left:auto;margin-right:auto;margin-bottom:40px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:40px;width:40px;fill:var(--k_deeppurple);display:inline;margin-right:10px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{color:var(--k_deeppurple);font-weight:700;text-decoration:underline;text-decoration-thickness:1px;text-decoration-style:wavy;text-decoration-color:hsl(288, 64%, 27%, 50%)}.extralink.svelte-1ydh0c8.svelte-1ydh0c8{margin-left:auto;margin-right:auto;text-align:center}@media screen and (min-width: 600px){table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:18px}img.svelte-1ydh0c8.svelte-1ydh0c8{height:300px}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{height:350px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:50px;width:50px;fill:var(--k_deeppurple);display:inline;padding-left:1px;padding-right:1px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}}",
  map: null
};
const metadata = {
  "layout": "blog",
  "seotitle": "ß Pronunciation And Meaning (It’s Easier Than It Looks)",
  "title": "ß Pronunciation And Meaning (It’s Easier Than It Looks)",
  "metadescription": "The German ß, or ess-tset, does not exist in English. The ß is pronounced like the double-s in the English word “miss.”",
  "fname": "k-ess-tset-pronunciation-and-meaning",
  "date": "09/18/2022",
  "longdate": "September 18, 2022",
  "author": "Michiyo Kawasaki",
  "categories": "pronunciation, training, speaking",
  "k_language": "german",
  "coverimage": "Articles/esstset_cover1_10_22_22v3F.jpg",
  "articleimage": "Articles/esstset_cover2_10_22_22v4_F.jpg"
};
const { layout, seotitle, title, metadescription, fname, date, longdate, author, categories, k_language, coverimage, articleimage } = metadata;
const K_ess_tset_pronunciation_and_meaning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let WEB_IMG_BASE_URL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
  $$result.css.add(css);
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<article class="svelte-1ydh0c8"><h1 class="svelte-1ydh0c8">${escape(title)}</h1> <p class="opening-p svelte-1ydh0c8">${escape(longdate)}</p> <img class="cover-image svelte-1ydh0c8"${add_attribute("src", `${WEB_IMG_BASE_URL}${articleimage}`, 0)} width="647px" height="350px" alt="Feli from Germany smiling, next to ess-tset character."> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1ge1ke1">The German letter ß, called ess-tset, does not exist in the English alphabet. Though the ess-tset looks different, it makes a sound that is likely familiar. <span class="highlighter svelte-1ydh0c8">ß is pronounced just like the double-s in English, like in the word “miss.”</span></p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-oufp0j">The ß sounds like this:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "f5da52ea-587c-45c7-ba26-6a458422fb38_0.mp3",
          displayname: "heiß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-o8afuv">hot</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "0f987254-ab1f-4dbb-9c69-bfa346d84429_0.mp3",
          displayname: "die Straße"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ohm73w">the street</td></tr></tbody></table> <div class="wrapper_audio svelte-1ydh0c8" data-svelte-h="svelte-de0i79"><span class="audio_text svelte-1ydh0c8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="speaker_icon svelte-1ydh0c8"><path d="M301.2 34.98c-4.289-1.969-8.623-2.902-13.16-2.902c-7.496 0-14.92 2.551-20.82 7.634L164.2 159.1H32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3C273.1 477.4 280.5 479.8 288 479.8c4.531 0 8.881-.8666 13.16-2.835C312.5 471.8 320 460.4 320 447.9V64.12C320 51.62 312.5 40.2 301.2 34.98zM304 447.1c0 6.223-3.656 11.92-9.309 14.53C292.6 463.5 290.3 463.1 288 463.1c-3.477 0-6.844-1.133-9.582-3.207l-106.9-124.8H32c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8c2.742-2.072 6.102-3.203 9.57-3.203c2.324 0 4.586 .4961 6.703 1.467C300.3 52.07 304 57.77 304 63.99V447.1zM540.2 45.53c-3.375-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C589.8 106.8 624 178.1 624 255.1s-34.22 149.2-93.91 198.1c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C603.6 414.5 640 337.8 640 255.1S603.6 97.46 540.2 45.53zM478.1 120.4c-3.344-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C506.4 163.6 528 208.5 528 255.1s-21.56 92.44-59.16 123.3c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C520.3 357.7 544 308.3 544 255.1S520.3 154.2 478.1 120.4zM407.2 195.5c-2.812 3.406-2.312 8.469 1.125 11.25C423.4 219 432 236.1 432 255.1s-8.625 36.97-23.69 49.28c-3.438 2.781-3.938 7.844-1.125 11.25c1.562 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C437.2 302.3 448 279.8 448 255.1s-10.78-46.31-29.56-61.65C415 191.6 409.9 192 407.2 195.5z"></path></svg>
		Click 
		<span class="audio_callout svelte-1ydh0c8">Purple</span> 
		Words to Play</span></div> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-j5xbbv">1. How do I pronounce ß in German?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1cfkrbh">Though the ß looks different, it makes a sound that is likely familiar. The ß is pronounced just like the double-s in English, like in the words “miss” or “hiss.”</p> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-1on0f1l"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">The ß pronunciation is an unvoiced sound</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1wfg1m8">When you make an unvoiced sound, like the double-s sound for ß, you will not feel any vibration on your throat.</p> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/esstset_unvoiced_10.1.22.jpg`, 0)} width="379px" height="300px" alt="Feli from Germany in Kleo lesson, placing fingers on her throat to demonstrate lack of vibration for unvoiced S." class="svelte-1ydh0c8"> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1y1dthr">Compare this to saying the English word “closet,” where the letter S is a voiced sound, and you will feel a vibration on your throat.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-kea3td">Try making the ß sound now. Remember, the pronunciation is just like the double-s in the English words “miss” or “hiss.” Make sure you do not feel any vibration on your throat for the unvoiced ß sound.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-66xa3o">2. Where will I encounter the ß?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1368y8h">Several high frequency words contain the ß letter.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1b9c74h"><b>It is common to see the ß after the vowel combination EI</b>. Listen for the double-s ß sound in these EI words:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-odd81j"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "7f213e66-a2a1-4355-8cb8-0d6239201566_0.mp3",
          displayname: "Ich heiße"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-glvtyq">I am called</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "7f213e66-a2a1-4355-8cb8-0d6239201566_0.mp3",
          displayname: "Ich heiße + Name"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-19tgdfm">I am called + Name</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "9c23575d-b6af-40b4-8e72-5ca5a20d1a8a_0.mp3",
          displayname: "Du heißt"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-rk88zw">You are called</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "6a0e5edb-f179-4992-aafe-6b003c5009f7_0.mp3",
          displayname: "Wie heißt du?"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1vq4jxp">How are you called?</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "10b2b119-5887-4374-ba67-1cbf01fc57e1_0.mp3",
          displayname: "Ich weiß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-og0yo">I know</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "05c371b9-5785-40cc-b4a8-c0c02ff2face_0.mp3",
          displayname: "Ich weiß nicht"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1z0t6gq">I do not know</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "f5da52ea-587c-45c7-ba26-6a458422fb38_0.mp3",
          displayname: "heiß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-o8afuv">hot</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "777c7848-5d8d-42d3-93ba-770c690b1f0d_0.mp3",
          displayname: "Es ist heiß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-23tr8e">It is hot</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-es6ivv"><b>It is also common to see the ess-tset following long vowels</b>. In these examples, listen for the double-s ß sound after a long vowel:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-odd81j"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e5be083c-118f-4069-a7d2-297734e5ef6d_0.mp3",
          displayname: "groß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-qr5h3o">big</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "ac764d8f-8707-45a0-aeca-12bdec212fef_0.mp3",
          displayname: "Es ist groß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-gxnzd1">It is big</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "0f987254-ab1f-4dbb-9c69-bfa346d84429_0.mp3",
          displayname: "die Straße"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ohm73w">the street</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "8d254c33-68c9-4b0d-a7cd-98e3c899dffa_0.mp3",
          displayname: "Die Straße ist groß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-p7nsp6">The street is big</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-oflgop">When it comes to positioning within a word, we have seen the ß used in the middle of a word (like in die Straße) and also at the end of a word (like in groß). Note that you will never encounter the ß at the beginning of a word.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1m4zoh2">3. Does German use the actual double-s in words?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1qtrq8a">In addition to the ß, which is pronounced like a double-s, note that the actual double-s construct also exists in German. <span class="highlighter svelte-1ydh0c8">The pronunciation of the ß and the German double-s is identical</span>. Both are just like the double-s in English and are unvoiced sounds.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1yzfnz0">In these words, notice how the German double-s is identical to the ß pronunciation we have been discussing:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "1fc89a53-5d32-47f7-a05b-125e6d6a74b1_0.mp3",
          displayname: "das Wasser"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1v3x3hm">the water</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "4ebc049f-8bcf-405b-852c-1b50f8214a5f_0.mp3",
          displayname: "das Essen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1lilhar">the food</td></tr></tbody></table> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1jg0lh7">4. How do I write the ß character?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-lp1vt0">To reflect an ß in written word, it is easiest to use a double-s in place of the ß letter. In fact, some German documents default to replacing the ß with two S letters.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-g53hl5">There are various keyboard strokes that will type the ß, but using the double-s works just fine.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-jeq7sg">5. Does ß have any other pronunciations?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-qxom2v">No! Unlike many German letters, the ß has only one pronunciation. ß is always pronounced like the double-s in “miss.”</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1coq69f"><span class="highlighter svelte-1ydh0c8">The pronunciation of the ß is always the same</span>, regardless of where the ß occurs in a word and regardless of what letters the ß occurs alongside.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1pkwehp">6. Where does the ß come from?</h2> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/esstset_castle_10.1.22.jpg`, 0)} width="550px" height="300px" alt="Castle in Germany under beautiful sky." class="svelte-1ydh0c8"> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-pk3rm9">The ß reflects the evolution of German pronunciation over the centuries. The ß is rooted in history stemming back more than a thousand years.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1n54els">At that time, the so-called second Germanic sound shift moved through the country. Among other changes, people began to articulate an S instead of a T in some cases.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-197lfop">From the 14th century onward, the spelling &quot;sz&quot; was used for the sound. The ß character visually resembles the side-by-side placement of the long S and the Z in the old Fraktur script.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-16sr5hu">7. What are other German letters that do not exist in English?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1uwdu4o">The ß is one of four German letters that does not exist in the English alphabet. The ß is the easiest of this group to pronounce, as the ß makes a single sound with a direct equivalent in English.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1fytg1">The other three unique letters are the umlaut vowels Ä, Ö, and Ü. You can learn to make these sounds with practice. In Kleo&#39;s interactive video lessons, you&#39;ll find powerful pronunciation tips and face-to-face speaking practice for these letters and more.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-tbjpq8">8. How can I practice using and pronouncing the ß?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-ou5zzm">When it comes to the ß, you can likely already produce the required double-s sound. The key is remembering to associate the ß with the right sound. This connection will solidify as you use more ß words.</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-14nko5d"><li class="svelte-1ydh0c8"><b>Get feedback on your pronunciation to improve</b>: Check out the interactive video pronunciation lessons in Kleo. You can practice the pronunciation of specific sounds and words, as if you were face-to-face with German friends. Feli from Germany even hosts a popular pronunciation lesson featuring the ß. You can practice important ß phrases with Feli, including many of the examples we’ve covered here.</li> <li class="svelte-1ydh0c8"><b>Produce the ß in context</b>: Use ß words in real-life situations to build muscle memory. The next time you run into someone, try using “Ich heiße” and “Wie heißt du?” to exchange names. In the Kleo app, you can practice speaking these phrases, as well as other ways to share your name.</li></ol> <div class="k_blog_wrapper svelte-1ydh0c8" data-svelte-h="svelte-ib6cs8"><a href="https://meetkleo.page.link/8oBQQhcQzJbeVRoC9" class="k_blog_deep_link svelte-1ydh0c8"><p class="kleo_blog_deep_link_text svelte-1ydh0c8">Start Speaking German - FREE!</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="k_apple_svg svelte-1ydh0c8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div> <br> <div class="extralink svelte-1ydh0c8" data-svelte-h="svelte-1y58vbl"><a href="/learn?klg=German" class="svelte-1ydh0c8">Or Explore Other Free Lessons</a></div> <br></article>`;
    }
  })}`;
});
export {
  K_ess_tset_pronunciation_and_meaning as default,
  metadata
};
