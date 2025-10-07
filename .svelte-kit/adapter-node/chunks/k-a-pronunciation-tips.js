import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./ssr.js";
import { P as Post } from "./audioelement.svelte_svelte_type_style_lang.js";
import { A as Audioelement } from "./audioelement.js";
const kAPronunciationTips_md_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1ydh0c8.svelte-1ydh0c8{font-family:Manrope;background-color:white;margin:auto;padding:12px;color:#222;font-size:22px;text-align:left;max-width:50ch}img.svelte-1ydh0c8.svelte-1ydh0c8{height:auto;width:auto;max-height:300px;display:block;margin-right:auto;margin-left:auto;border-radius:10px;border:2px}h1.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:0 0 0.5em;font-size:38px;font-weight:800}h2.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:1.75em 0 0.5em;font-size:30px;font-weight:550;color:#6835F8}p.svelte-1ydh0c8.svelte-1ydh0c8{margin:0 0 1.15em}p.svelte-1ydh0c8+img.svelte-1ydh0c8{margin-top:1.5em}a.svelte-1ydh0c8.svelte-1ydh0c8{color:blue;text-decoration:underline;text-decoration-color:blue}ol.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}li.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:20px}ul.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;table-layout:auto;width:97%;border-spacing:0.5rem;margin:0 30px 30px 0}th.svelte-1ydh0c8.svelte-1ydh0c8{word-wrap:break-word;vertical-align:bottom;text-align:center}td.svelte-1ydh0c8.svelte-1ydh0c8{vertical-align:center;text-align:center;word-wrap:break-word;padding-left:0.25rem;padding-top:0.75rem;padding-bottom:0.75rem}tbody.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(odd){background:rgb(248, 242, 251, 0.5)}thead.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(1){text-decoration:underline}th.svelte-1ydh0c8.svelte-1ydh0c8:nth-child(n+2){vertical-align:bottom;text-align:center}.hline.svelte-1ydh0c8.svelte-1ydh0c8{margin-top:0.5em;width:25%;height:2px;border-radius:10px;background:#6835F8}.hline.svelte-1ydh0c8+h2.svelte-1ydh0c8{margin-top:0.3em}.wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;text-align:center;align-items:center}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{width:100%;max-height:100%;-o-object-fit:cover;object-fit:cover;margin:auto}.opening-p.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;color:gray;margin:0 0 0.25em 0}.callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:24px;font-weight:bold;margin-left:0.5em;margin-bottom:0.5em;color:#535252;text-align:left}.vline.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:0.5em;margin-left:0.5em;width:5px;height:100px;border-radius:10px;background:#535252}.highlighter.svelte-1ydh0c8.svelte-1ydh0c8{background-color:#FFFF00}.kleo_blog_deep_link_text.svelte-1ydh0c8.svelte-1ydh0c8{color:white;display:inline}.k_blog_deep_link.svelte-1ydh0c8.svelte-1ydh0c8{text-decoration:none}.k_apple_svg.svelte-1ydh0c8.svelte-1ydh0c8{height:25px;width:25px;display:inline;padding-bottom:5px;fill:white}.k_blog_wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;background-color:#524DD0;width:-moz-fit-content;width:fit-content;padding-left:20px;padding-right:20px;padding-top:5px;padding-bottom:5px;margin-left:auto;margin-right:auto;place-content:center;justify-content:center;border-radius:15px}.wrapper_audio.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;justify-content:space-evenly;align-items:center;background-color:rgba(182, 251, 96, 0.267);margin-left:auto;margin-right:auto;margin-bottom:40px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:40px;width:40px;fill:var(--k_deeppurple);display:inline;margin-right:10px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{color:var(--k_deeppurple);font-weight:700;text-decoration:underline;text-decoration-thickness:1px;text-decoration-style:wavy;text-decoration-color:hsl(288, 64%, 27%, 50%)}.extralink.svelte-1ydh0c8.svelte-1ydh0c8{margin-left:auto;margin-right:auto;text-align:center}@media screen and (min-width: 600px){table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:18px}img.svelte-1ydh0c8.svelte-1ydh0c8{height:300px}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{height:350px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:50px;width:50px;fill:var(--k_deeppurple);display:inline;padding-left:1px;padding-right:1px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}}",
  map: null
};
const metadata = {
  "layout": "blog",
  "seotitle": "Ä Pronunciation Tips (How To Handle A Umlaut Like a Pro)",
  "title": "Ä Pronunciation Tips (How To Handle A Umlaut Like a Pro)",
  "metadescription": "The short pronunciation of Ä is like the E in the English word “set.” Lengthen the sound for the long pronunciation.",
  "fname": "k-a-pronunciation-tips",
  "date": "10/01/2022",
  "longdate": "October 1, 2022",
  "author": "Michiyo Kawasaki",
  "categories": "pronunciation, training, speaking",
  "k_language": "german",
  "coverimage": "Articles/a_umlaut_cover1v2_10_1_22.jpg",
  "articleimage": "Articles/a_umlaut_cover2v2_10_1_22.jpg"
};
const { layout, seotitle, title, metadescription, fname, date, longdate, author, categories, k_language, coverimage, articleimage } = metadata;
const K_a_pronunciation_tips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let WEB_IMG_BASE_URL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
  $$result.css.add(css);
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<article class="svelte-1ydh0c8"><h1 class="svelte-1ydh0c8">${escape(title)}</h1> <p class="opening-p svelte-1ydh0c8">${escape(longdate)}</p> <img class="cover-image svelte-1ydh0c8"${add_attribute("src", `${WEB_IMG_BASE_URL}${articleimage}`, 0)} width="647px" height="350px" alt="Feli from Germany smiling, next to A umlaut character."> <p class="svelte-1ydh0c8" data-svelte-h="svelte-10z9rsx">The A umlaut is one of three German vowels that does not exist in the English alphabet. These distinct vowels are called umlauts.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-15dr1hj">Ä is often considered the simplest umlaut to pronounce, as there is an equivalent sound in English.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-pz82pq">Like all German vowels, the A umlaut has a short pronunciation and a long pronunciation. The short pronunciation is like the E in the English word “set.” Lengthen the sound to form the long pronunciation of Ä.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-14qbye1">The Ä pronunciations sound like this:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-19txul0"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">Ä Sound</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4xr1oo">Short</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e51a8931-9e47-4655-b913-8a56889c13b8_0.mp3",
          displayname: "die Äpfel"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-cw9b0y">the apples</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-122h7rc">Long</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "eb2e43ff-c096-4c6c-aa53-0bf6f2cb5864_0.mp3",
          displayname: "der Käfer"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-36xct8">the beetle</td></tr></tbody></table> <div class="wrapper_audio svelte-1ydh0c8" data-svelte-h="svelte-de0i79"><span class="audio_text svelte-1ydh0c8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="speaker_icon svelte-1ydh0c8"><path d="M301.2 34.98c-4.289-1.969-8.623-2.902-13.16-2.902c-7.496 0-14.92 2.551-20.82 7.634L164.2 159.1H32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3C273.1 477.4 280.5 479.8 288 479.8c4.531 0 8.881-.8666 13.16-2.835C312.5 471.8 320 460.4 320 447.9V64.12C320 51.62 312.5 40.2 301.2 34.98zM304 447.1c0 6.223-3.656 11.92-9.309 14.53C292.6 463.5 290.3 463.1 288 463.1c-3.477 0-6.844-1.133-9.582-3.207l-106.9-124.8H32c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8c2.742-2.072 6.102-3.203 9.57-3.203c2.324 0 4.586 .4961 6.703 1.467C300.3 52.07 304 57.77 304 63.99V447.1zM540.2 45.53c-3.375-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C589.8 106.8 624 178.1 624 255.1s-34.22 149.2-93.91 198.1c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C603.6 414.5 640 337.8 640 255.1S603.6 97.46 540.2 45.53zM478.1 120.4c-3.344-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C506.4 163.6 528 208.5 528 255.1s-21.56 92.44-59.16 123.3c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C520.3 357.7 544 308.3 544 255.1S520.3 154.2 478.1 120.4zM407.2 195.5c-2.812 3.406-2.312 8.469 1.125 11.25C423.4 219 432 236.1 432 255.1s-8.625 36.97-23.69 49.28c-3.438 2.781-3.938 7.844-1.125 11.25c1.562 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C437.2 302.3 448 279.8 448 255.1s-10.78-46.31-29.56-61.65C415 191.6 409.9 192 407.2 195.5z"></path></svg>
		Click 
		<span class="audio_callout svelte-1ydh0c8">Purple</span> 
		Words to Play</span></div> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-qrodw6">1. What is the A umlaut?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-jy5bsu">Ä is one of the three German umlauts. These vowels do not exist in the English alphabet.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-mvhp2s">We have Ö and Ü, as well as the Ä we are discussing here. The two dots change how the vowel is pronounced.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-585pw5">2. Why is the A umlaut important?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-mrzbnj">The A umlaut contributes to the uniqueness of the German language, as the letter does not exist in English. In addition, the long pronunciation of Ä does not really have a perfect equivalent sound in English. Therefore, the Ä pronunciation contributes to the distinct sound and feeling of German.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1i1evw0">Also, <span class="highlighter svelte-1ydh0c8">umlauts are used in the plural form of many important nouns</span>, so you will use umlauts often. For example, we see the A umlaut in these common plural nouns:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e51a8931-9e47-4655-b913-8a56889c13b8_0.mp3",
          displayname: "die Äpfel"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-cw9b0y">the apples</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "d52b5505-8dc1-44fb-a0db-c76d3aa8c655_0.mp3",
          displayname: "die Männer"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-jze4lr">the men</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "d8b55fe6-421c-47f3-a7db-046f3b914753_0.mp3",
          displayname: "die Hände"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-fhxlw9">the hands</td></tr></tbody></table> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/a_umlaut_apples_10_1_22.jpg`, 0)} width="550px" height="300px" alt="Smiling German teacher in market holding up two apples." class="svelte-1ydh0c8"> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-qci97o">3. What are the two pronunciations of Ä (short and long)?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1ugrhpf">Like all German vowels, the A umlaut has both a short and a long pronunciation.</p> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-qxat6h"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">For the short Ä, make the E sound in the English words “set” or “met&quot;</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-4sq6nx">Listen for the short Ä sound in these words:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-odd81j"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e51a8931-9e47-4655-b913-8a56889c13b8_0.mp3",
          displayname: "die Äpfel"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-cw9b0y">the apples</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "b2b2811c-dc72-4dd4-9a4e-4376a24b6a00_0.mp3",
          displayname: "Ich kaufe die Äpfel"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-14n35oz">I buy the apples</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "d52b5505-8dc1-44fb-a0db-c76d3aa8c655_0.mp3",
          displayname: "die Männer"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-jze4lr">the men</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "d1946c00-bd96-417b-b188-95581f298653_0.mp3",
          displayname: "Die Männer sind hier"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1tatt8f">The men are here</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-e79ry"><span class="highlighter svelte-1ydh0c8">You will hear that the short Ä actually makes the same sound as the short German E</span>.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1j064n7">Listen for the same sound in these short-Ä and short-E words:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-1tdvqpq"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Short-Ä</th> <th colspan="2" class="svelte-1ydh0c8">Short-E</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "b254db07-9d8e-415b-bb98-2edb31b9cb21_0.mp3",
          displayname: "Männer"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-q7bklu">men</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "dd58b8ff-5a9e-4f20-897f-d6cfb9552335_0.mp3",
          displayname: "nett"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ogxlur">nice</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "0118c0e7-5c10-4177-9a59-a570ae655dfc_0.mp3",
          displayname: "Hände"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1q8m6s">hands</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "9519e29b-04db-4f2f-bf84-9df15aee3192_0.mp3",
          displayname: "Bett"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-7cqj9z">bed</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-19ue5hp">As for the long pronunciation of Ä, there really is no perfect equivalent sound in English.</p> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-1t4cnkm"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">For the long A umlaut, start with the short Ä sound and gradually lengthen it</span></div> <p class="svelte-1ydh0c8" data-svelte-h="svelte-6m2oe5">Listen for the long Ä sound in these words:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-16fzqok"><tr class="svelte-1ydh0c8"><th colspan="2" class="svelte-1ydh0c8">Example</th> <th colspan="2" class="svelte-1ydh0c8">In Context</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "eb2e43ff-c096-4c6c-aa53-0bf6f2cb5864_0.mp3",
          displayname: "der Käfer"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-36xct8">the beetle</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "a8026064-7559-43b5-8085-70e59ef78ec0_0.mp3",
          displayname: "Der Käfer ist groß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1tti732">The beetle is big</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "68eb73e8-3634-43cc-9e46-4149c4a47ef2_0.mp3",
          displayname: "die Träne"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-11hw7rn">the tear</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "976c19e2-fdae-4cc7-8dcc-ea0bdac9fb38_0.mp3",
          displayname: "Ich sehe eine Träne"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1nvn7vb">I see a tear</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "bafdd50a-698c-4c26-ba5f-31b3be899a03_0.mp3",
          displayname: "gähnen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-9s6xg2">to yawn</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "60998614-b3fd-4834-a86c-c133ae1821fe_0.mp3",
          displayname: "Wir gähnen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-hbv86b">We yawn</td></tr></tbody></table> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/a_umlaut_yawn_10_1_22.jpg`, 0)} width="550px" height="300px" alt="Shaggy white and grey dog yawning." class="svelte-1ydh0c8"> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-10tvt0s">4. How do I know which Ä pronunciation to use?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1539ox4">There are some guidelines for when to use the short vs. long pronunciation for German vowels, including umlauts.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-xxppjh">For instance, before a double consonant, use a short umlaut. Listen for the short Ä sound before the double consonant in these words:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "d52b5505-8dc1-44fb-a0db-c76d3aa8c655_0.mp3",
          displayname: "die Männer"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-jze4lr">the men</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "b338a54e-4f32-4bac-a1a5-7577edc472ba_0.mp3",
          displayname: "die Ehemänner"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-seniur">the husbands</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-bg3xr6">On the other hand, before the letter H, use a long umlaut. Listen for the long Ä sound before the letter H in these words:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-an8tia"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "bafdd50a-698c-4c26-ba5f-31b3be899a03_0.mp3",
          displayname: "gähnen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-9s6xg2">to yawn</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "85876dcc-d700-4201-9040-d32d55cc0ccb_0.mp3",
          displayname: "die Zähne"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1n2njih">the teeth</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1albjzp">With practice, you will develop a feel for what sounds right.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1pao4yu">5. Are there any variations in how Ä is pronounced?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-14d89tb">Yes! In certain instances, you will hear some German speakers pronounce the long Ä as a long German E. The long German E is another letter without a perfect equivalent sound in English.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1b1ami7">We like to say that the long German E is kind of similar to the sound when shrugging your shoulders at something mediocre and saying “ay.”</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1a3xie4">A common example of this pronunciation variation is the word Mädchen, the German word for girl. You will hear this word pronounced with either the long Ä sound or the long German E sound. You will pick this up, as you start to hear more German.</p> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/a_umlaut_girl_10_1_22.jpg`, 0)} width="550px" height="300px" alt="Young girl peaks out of a tree house." class="svelte-1ydh0c8"> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1y8v4ct">6. How is the vowel A pronounced (not umlaut)?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1r61pv6">So that’s the pronunciation made when the letter A has two dots on top. Now you may be wondering how to pronounce the base vowel A, with no dots over it.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-65uqhd">Like all German vowels, the vowel A has both a long pronunciation and a short pronunciation:</p> <ul class="svelte-1ydh0c8" data-svelte-h="svelte-cm4zzt"><li class="svelte-1ydh0c8"><b>Long A</b>: The long German A is like the A in the English word “father.”</li> <li class="svelte-1ydh0c8"><b>Short A</b>: The short German A is just a really short version of the long German A.</li></ul> <p class="svelte-1ydh0c8" data-svelte-h="svelte-jgqt5a">Listen for the two different pronunciations of the base vowel A in these examples:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-yv4bx5"><tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">A Sound</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-122h7rc">Long</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "7b11f9ce-a1c1-4e15-9fcb-8013aea79a6c_0.mp3",
          displayname: "Rat"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1vdnl6i">advice</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4xr1oo">Short</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "4a38ca59-9044-44dc-adc4-549bc171a88c_0.mp3",
          displayname: "Ratte"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-uqzez7">rat</td></tr></tbody></table> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-d2wuz7">7. How can I refine my Ä pronunciation?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-jz8aq8">You can learn to conquer the German Ä sound with practice.</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1r8d8nu"><li class="svelte-1ydh0c8"><b>Listen for German words containing the E sound from the word &quot;set&quot; in English</b>: Each time you hear one, jot down the spelling you believe to be accurate. Reserve a set time to check your work, keeping a running list of short-Ä and short-E words you&#39;ve encountered.</li> <li class="svelte-1ydh0c8"><b>Listen actively for the long Ä sound</b>: Listen for the long A umlaut used in conversation around you. Try to repeat the word out loud (if the setting permits) or silently to yourself.</li> <li class="svelte-1ydh0c8"><b>Improve with productive feedback</b>: Try the interactive Pronunciation lessons in Kleo, featuring top German experts. In these interactive video lessons, you can learn powerful tips for the toughest sounds. You can receive real-time feedback on your pronunciation, practicing until you get it just right. In one popular lesson, Feli from Germany breaks down the A umlaut like never before. You can even hear her take on the important word Mädchen, meaning girl.</li> <li class="svelte-1ydh0c8"><b>Practice the Ä sound in context</b>: The best way to build muscle memory is by using new sounds in real-life situations. It can be difficult to get this opportunity on a regular basis. Fortunately, some of Kleo’s most popular interactive video lessons feature the Ä sound. For example, join your Kleo friends in a German market, as they show how to build the plural form of words, including die Äpfel. This is a great way to practice speaking German in context.</li></ol> <div class="k_blog_wrapper svelte-1ydh0c8" data-svelte-h="svelte-ib6cs8"><a href="https://meetkleo.page.link/8oBQQhcQzJbeVRoC9" class="k_blog_deep_link svelte-1ydh0c8"><p class="kleo_blog_deep_link_text svelte-1ydh0c8">Start Speaking German - FREE!</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="k_apple_svg svelte-1ydh0c8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div> <br> <div class="extralink svelte-1ydh0c8" data-svelte-h="svelte-1y58vbl"><a href="/learn?klg=German" class="svelte-1ydh0c8">Or Explore Other Free Lessons</a></div> <br> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-16mbc7t">8. What are other German letters that do not exist in English?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-mf1k9y">Since the Ä does not exist in English, it is challenging and rewarding to master this letter, especially the long pronunciation. There are three other German letters that do not exist in English.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1h2ewlq">The U umlaut (Ü) makes the sound like you&#39;ve smelled something unpleasant. We also have the O umlaut (Ö), where you can pretend you&#39;re disgusted by something. Lastly, the ess-tset (ß) is pronounced just like the double-s in English, like in the word “miss.”</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-zwnofr">Fun, right? You can practice all of these sounds, and more, in Kleo&#39;s interactive pronunciation lessons.</p></article>`;
    }
  })}`;
});
export {
  K_a_pronunciation_tips as default,
  metadata
};
