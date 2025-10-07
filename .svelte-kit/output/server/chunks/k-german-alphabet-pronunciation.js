import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./ssr.js";
import { P as Post } from "./audioelement.svelte_svelte_type_style_lang.js";
import { A as Audioelement } from "./audioelement.js";
const kGermanAlphabetPronunciation_md_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1ydh0c8.svelte-1ydh0c8{font-family:Manrope;background-color:white;margin:auto;padding:12px;color:#222;font-size:22px;text-align:left;max-width:50ch}img.svelte-1ydh0c8.svelte-1ydh0c8{height:auto;width:auto;max-height:300px;display:block;margin-right:auto;margin-left:auto;border-radius:10px;border:2px}h1.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:0 0 0.5em;font-size:38px;font-weight:800}h2.svelte-1ydh0c8.svelte-1ydh0c8{line-height:1.2;margin:1.75em 0 0.5em;font-size:30px;font-weight:550;color:#6835F8}p.svelte-1ydh0c8.svelte-1ydh0c8{margin:0 0 1.15em}p.svelte-1ydh0c8+img.svelte-1ydh0c8{margin-top:1.5em}a.svelte-1ydh0c8.svelte-1ydh0c8{color:blue;text-decoration:underline;text-decoration-color:blue}ol.svelte-1ydh0c8.svelte-1ydh0c8{list-style-type:circle;margin-left:30px;margin-right:15px}li.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:20px}table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;table-layout:auto;width:97%;border-spacing:0.5rem;margin:0 30px 30px 0}th.svelte-1ydh0c8.svelte-1ydh0c8{word-wrap:break-word;vertical-align:bottom;text-align:center}td.svelte-1ydh0c8.svelte-1ydh0c8{vertical-align:center;text-align:center;word-wrap:break-word;padding-left:0.25rem;padding-top:0.75rem;padding-bottom:0.75rem}tbody.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(odd){background:rgb(248, 242, 251, 0.5)}thead.svelte-1ydh0c8 tr.svelte-1ydh0c8:nth-child(1){text-decoration:underline}th.svelte-1ydh0c8.svelte-1ydh0c8:nth-child(n+2){vertical-align:bottom;text-align:center}.hline.svelte-1ydh0c8.svelte-1ydh0c8{margin-top:0.5em;width:25%;height:2px;border-radius:10px;background:#6835F8}.hline.svelte-1ydh0c8+h2.svelte-1ydh0c8{margin-top:0.3em}.wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;text-align:center;align-items:center}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{width:100%;max-height:100%;-o-object-fit:cover;object-fit:cover;margin:auto}.opening-p.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px;color:gray;margin:0 0 0.25em 0}.callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:24px;font-weight:bold;margin-left:0.5em;margin-bottom:0.5em;color:#535252;text-align:left}.vline.svelte-1ydh0c8.svelte-1ydh0c8{margin-bottom:0.5em;margin-left:0.5em;width:5px;height:100px;border-radius:10px;background:#535252}.highlighter.svelte-1ydh0c8.svelte-1ydh0c8{background-color:#FFFF00}.kleo_blog_deep_link_text.svelte-1ydh0c8.svelte-1ydh0c8{color:white;display:inline}.k_blog_deep_link.svelte-1ydh0c8.svelte-1ydh0c8{text-decoration:none}.k_apple_svg.svelte-1ydh0c8.svelte-1ydh0c8{height:25px;width:25px;display:inline;padding-bottom:5px;fill:white}.k_blog_wrapper.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;background-color:#524DD0;width:-moz-fit-content;width:fit-content;padding-left:20px;padding-right:20px;padding-top:5px;padding-bottom:5px;margin-left:auto;margin-right:auto;place-content:center;justify-content:center;border-radius:15px}.wrapper_audio.svelte-1ydh0c8.svelte-1ydh0c8{display:flex;flex-direction:row;width:100%;justify-content:space-evenly;align-items:center;background-color:rgba(182, 251, 96, 0.267);margin-left:auto;margin-right:auto;margin-bottom:40px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:40px;width:40px;fill:var(--k_deeppurple);display:inline;margin-right:10px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:16px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{color:var(--k_deeppurple);font-weight:700;text-decoration:underline;text-decoration-thickness:1px;text-decoration-style:wavy;text-decoration-color:hsl(288, 64%, 27%, 50%)}.extralink.svelte-1ydh0c8.svelte-1ydh0c8{margin-left:auto;margin-right:auto;text-align:center}@media screen and (min-width: 600px){table.svelte-1ydh0c8.svelte-1ydh0c8{font-size:18px}img.svelte-1ydh0c8.svelte-1ydh0c8{height:300px}.cover-image.svelte-1ydh0c8.svelte-1ydh0c8{height:350px}.speaker_icon.svelte-1ydh0c8.svelte-1ydh0c8{height:50px;width:50px;fill:var(--k_deeppurple);display:inline;padding-left:1px;padding-right:1px}.audio_text.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}.audio_callout.svelte-1ydh0c8.svelte-1ydh0c8{font-size:22px}}",
  map: null
};
const metadata = {
  "layout": "blog",
  "seotitle": "German Alphabet Pronunciation (Ultimate Guide, Every Letter)",
  "title": "German Alphabet Pronunciation (Ultimate Guide, Every Letter)",
  "metadescription": "With this ultimate guide, take control of German alphabet pronunciation. Enjoy tips and audio for every single letter!",
  "fname": "k-german-alphabet-pronunciation",
  "date": "10/21/2022",
  "longdate": "October 21, 2022",
  "author": "Michiyo Kawasaki",
  "categories": "pronunciation, training, speaking",
  "k_language": "german",
  "coverimage": "Articles/alphabet_cover2_3_27_23_F.jpg",
  "articleimage": "Articles/alphabet_cover2_11_18_22_F.jpg"
};
const { layout, seotitle, title, metadescription, fname, date, longdate, author, categories, k_language, coverimage, articleimage } = metadata;
const K_german_alphabet_pronunciation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let WEB_IMG_BASE_URL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
  $$result.css.add(css);
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<article class="svelte-1ydh0c8"><h1 class="svelte-1ydh0c8">${escape(title)}</h1> <p class="opening-p svelte-1ydh0c8">${escape(longdate)}</p> <img class="cover-image svelte-1ydh0c8"${add_attribute("src", `${WEB_IMG_BASE_URL}${articleimage}`, 0)} width="647px" height="350px" alt="Feli from Germany smiling, next to words A to Z."> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-fhod1d">Take control of your German pronunciation with this ultimate guide. <span class="highlighter svelte-1ydh0c8">Enjoy pronunciation tips and audio for every single letter</span>!</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-5giuur"><b>In this guide, you’ll find:</b></p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-19jly8q"><li class="svelte-1ydh0c8">Pronunciation tips for every letter, as well as key letter combinations (like CH)</li> <li class="svelte-1ydh0c8">Detail for letters that make more than one sound (Many resources skip this)</li> <li class="svelte-1ydh0c8">Example audio for each sound</li> <li class="svelte-1ydh0c8">A powerful way to sharpen your pronunciation with interactive practice and feedback (No more practicing in the mirror!)</li></ol> <p class="svelte-1ydh0c8" data-svelte-h="svelte-e3kkic"><b>What you need to know first:</b></p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1hbs9jd"><li class="svelte-1ydh0c8">The German alphabet uses the same twenty-six letters as the English alphabet, plus it has four unique letters.</li> <li class="svelte-1ydh0c8">Many German letters are pronounced the same as in English, but of course some pronunciations are distinct and take practice.</li> <li class="svelte-1ydh0c8">We will be covering standard Northern German pronunciation. There are regional variations you will encounter as you hear more German.</li></ol> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-18sn7o1">1. First - RELAX - 3 reasons why you don&#39;t have to fear German pronunciation!</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-10qx872">German pronunciation can certainly feel scary. However, don’t let this intimidate you one bit!</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-gksh2e">First, rest easy that <b>pronunciation nuances rarely hinder communication</b>. Even when your pronunciation may not be picture perfect, you will be able to convey your message.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-rm2eaj">Secondly, <b>German is a phonetic language</b>. Therefore, once you know how to pronounce each letter and sound, you’ll even be able to correctly pronounce words that you’ve never encountered before (even really long ones!)</p> <div class="wrapper svelte-1ydh0c8" data-svelte-h="svelte-15ey1uj"><span class="vline svelte-1ydh0c8"></span> <span class="callout svelte-1ydh0c8">German is a phonetic language, meaning most words are pronounced the way they are spelled</span></div> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-gds7mm">A third piece of of good news? There are <b>a number of German letters and letter combinations that are pronounced similarly to English</b>.</p> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-10zh6hz">2. The Four Distinct Letters in German</h2> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/unique_letters_10_24_22v2_F.png`, 0)} width="550x" height="300px" alt="Feli from Germany smiling while teaching lesson in Kleo app, next to the letters umlaut A, O, and U, as well as the ess-tset." class="svelte-1ydh0c8"> <p class="svelte-1ydh0c8" data-svelte-h="svelte-wigvxe">German has four letters that do not exist in the English alphabet:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1owb4w5"><li class="svelte-1ydh0c8"><b>Ess-tset ß</b>: This letter looks different, but there is an equivalent sound in English</li> <li class="svelte-1ydh0c8"><b>Three umlauts</b>: The two dots over each vowel change how the letter is pronounced. Each umlaut has both a long and a short pronunciation, just like their vowel counterparts.</li></ol> <div class="wrapper_audio svelte-1ydh0c8" data-svelte-h="svelte-de0i79"><span class="audio_text svelte-1ydh0c8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="speaker_icon svelte-1ydh0c8"><path d="M301.2 34.98c-4.289-1.969-8.623-2.902-13.16-2.902c-7.496 0-14.92 2.551-20.82 7.634L164.2 159.1H32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3C273.1 477.4 280.5 479.8 288 479.8c4.531 0 8.881-.8666 13.16-2.835C312.5 471.8 320 460.4 320 447.9V64.12C320 51.62 312.5 40.2 301.2 34.98zM304 447.1c0 6.223-3.656 11.92-9.309 14.53C292.6 463.5 290.3 463.1 288 463.1c-3.477 0-6.844-1.133-9.582-3.207l-106.9-124.8H32c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8c2.742-2.072 6.102-3.203 9.57-3.203c2.324 0 4.586 .4961 6.703 1.467C300.3 52.07 304 57.77 304 63.99V447.1zM540.2 45.53c-3.375-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C589.8 106.8 624 178.1 624 255.1s-34.22 149.2-93.91 198.1c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C603.6 414.5 640 337.8 640 255.1S603.6 97.46 540.2 45.53zM478.1 120.4c-3.344-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C506.4 163.6 528 208.5 528 255.1s-21.56 92.44-59.16 123.3c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C520.3 357.7 544 308.3 544 255.1S520.3 154.2 478.1 120.4zM407.2 195.5c-2.812 3.406-2.312 8.469 1.125 11.25C423.4 219 432 236.1 432 255.1s-8.625 36.97-23.69 49.28c-3.438 2.781-3.938 7.844-1.125 11.25c1.562 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C437.2 302.3 448 279.8 448 255.1s-10.78-46.31-29.56-61.65C415 191.6 409.9 192 407.2 195.5z"></path></svg>
		Click 
		<span class="audio_callout svelte-1ydh0c8">Purple</span> 
		Words to Play</span></div> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-3uzjbm"><tr class="svelte-1ydh0c8"><th colspan="1" class="svelte-1ydh0c8"></th> <th colspan="2" class="svelte-1ydh0c8">Example Word</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">Letter</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">Similar English Sound</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-19zwowd">ß</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e5be083c-118f-4069-a7d2-297734e5ef6d_0.mp3",
          displayname: "groß"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-qr5h3o">big</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1kg2wi8">&quot;ss” sound in mi<b>ss</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-19ixfki">Ä</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "d03ef9b0-5b18-493b-9d7f-f5986d6dd711_0.mp3",
          displayname: "Äpfel"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-2wsuvz">apples</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bou0vr">short: &quot;e&quot; in s<b>e</b>t</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-19ixfki">Ä</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "8cdbf726-d4c4-4efb-8556-ae0b9d40096e_0.mp3",
          displayname: "Käfer"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1h07pip">beetle</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-92rywm">long: no equivalent; start with short-Ä and lengthen it</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-19tgs94">Ö</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "2a89000e-a6dd-469f-be33-4c175df42909_0.mp3",
          displayname: "Höhle"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1esr70f">cave</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1xd56ea">long: no equivalent; like you&#39;re disgusted</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-19tgs94">Ö</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "dcd52e29-bbd5-46c4-9374-7c1cf2853f24_0.mp3",
          displayname: "öffnen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1w3rvq7">to open</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1drq664">short: no equivalent; shorter-Ö sound; tenser, more open</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-19wz4ei">Ü</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "efdae50e-09d3-4e52-94f0-c947d9c3a54a_0.mp3",
          displayname: "üben"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bw0fls">to practice</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-wwuq3z">long: no equivalent; like you&#39;ve smelled something unpleasant</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-19wz4ei">Ü</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "bb4f1f03-b51f-4499-b9e7-2a48b67b2e49_0.mp3",
          displayname: "Lücke"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-177mwt2">gap</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-h1twao">short: no equivalent; shorter Ü-sound; less lip rounding</td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-5kc8id">There are helpful tips and tricks you can use to produce these distinct sounds.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-15ivujf">In Kleo&#39;s pronunciation series, featuring interactive video lessons, you can learn these powerful tips and even practice speaking &quot;face-to-face&quot; with top German experts and YouTube star Feli from Germany.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1ptfj3x">Here&#39;s where you can explore more about these distinct letters:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-acgwff"><li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/ess-tset-pronunciation-and-meaning" class="text-blue-600 svelte-1ydh0c8">ß Pronunciation And Meaning (It’s Easier Than It Looks)</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/a-pronunciation-tips" class="text-blue-600 svelte-1ydh0c8">Ä Pronunciation Tips (How To Handle A Umlaut Like a Pro)</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/o-umlaut-made-easy" class="text-blue-600 svelte-1ydh0c8">O Umlaut Made Easy (Ö Pronunciation Guide)</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/u-umlaut-simplified-like-never-before" class="text-blue-600 svelte-1ydh0c8">U Umlaut Simplified Like Never Before (Ü Pronunciation Tips)</a></li></ol> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1rwx83y">3. The Twenty-Six Letters Shared with English</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-q0vgls">When it comes to the letters that German shares with English, here are some points to note:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1amnhj5"><li class="svelte-1ydh0c8"><b>Vowels</b>: Every German vowel has two pronunciations - long and short</li> <li class="svelte-1ydh0c8"><b>Alternate sounds</b>: Some letters make more than one sound, depending on the linguistic context</li> <li class="svelte-1ydh0c8"><b>Distinct sounds</b>: <span class="highlighter svelte-1ydh0c8">Some German letters do not have an equivalent sound in English</span>. You can learn to make these sounds with practice</li> <p class="svelte-1ydh0c8">Here is a comprehensive guide to help keep it all straight:</p></ol> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-3uzjbm"><tr class="svelte-1ydh0c8"><th colspan="1" class="svelte-1ydh0c8"></th> <th colspan="2" class="svelte-1ydh0c8">Example Word</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">Letter</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">Similar English Sound</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17jytn7">A</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "7b11f9ce-a1c1-4e15-9fcb-8013aea79a6c_0.mp3",
          displayname: "Rat"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1vdnl6i">advice</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-19ayw9h">long: &quot;a&quot; in f<b>a</b>ther</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17jytn7">A</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "4a38ca59-9044-44dc-adc4-549bc171a88c_0.mp3",
          displayname: "Ratte"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-uqzez7">rat</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1w538ty">short: no equivalent; really short German A</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17jchr8">B</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "f74ad3f0-1122-4753-a696-5f551fba1c5a_0.mp3",
          displayname: "Banane"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-17neivf">banana</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-a2ybpv">start/mid of word: &quot;b&quot; in <b>b</b>anana</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17jchr8">B</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "0f386df3-5f8a-4c47-9995-181819d63e4c_0.mp3",
          displayname: "Laub"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-9p97z6">leaves</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1uep5b6">end of word: &quot;p&quot; in <b>p</b>o<b>p</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17l4vpt">C</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "750dd8ce-73b8-4909-aa78-1443a3cd6825_0.mp3",
          displayname: "Cola"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ishgq7">cola</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-14brdo9">start of word (not in combo): &quot;k&quot; in <b>k</b>id</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17kjrma">D</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "aed8d7ff-9ccf-4527-b5cc-1e80fb78ba73_0.mp3",
          displayname: "denn"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-4ltlna">because</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-15rrpfc">start/mid of word: &quot;d&quot; in <b>d</b>og</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17kjrma">D</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "65ea4d80-02fd-476d-81b3-e3c99229fc2f_0.mp3",
          displayname: "Hund"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-vktw5c">dog</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1f3vq33">end of word: &quot;t&quot; in ho<b>t</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17mba1j">E</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "72768e74-3ba3-48c5-9c8e-5d14e669016a_0.mp3",
          displayname: "sehr"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-19ikzhu">very</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1vnq4tr">long: no equivalent; like &quot;ay&quot; sound when shrugging at something mediocre</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17mba1j">E</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "9519e29b-04db-4f2f-bf84-9df15aee3192_0.mp3",
          displayname: "Bett"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-7cqj9z">bed</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1rmqlnc">short: like &quot;e&quot; in b<b>e</b>t; stressed sound</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17mba1j">E</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "53ba596b-3413-4d9a-8729-7a414dc52198_0.mp3",
          displayname: "bitte"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bork5s">please</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-gudsqt">end of word: &quot;a&quot; in <b>a</b>dorable; short, unstressed sound</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17lq00o">F</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "c9dec82d-93cd-4c99-ac13-059090e2ff04_0.mp3",
          displayname: "Fisch"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1veryck">fish</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1uwdvh6">&quot;f&quot; in <b>f</b>ish</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17nhc45">G</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "45d6bd88-18e8-47e5-b3d8-d7f68996f296_0.mp3",
          displayname: "gehen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-12go5i9">to go</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ogs4tj">start/mid of word: &quot;g&quot; in <b>g</b>o</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17nhc45">G</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "00c3b469-d9e7-40c8-b6f3-5a09167cf2cd_0.mp3",
          displayname: "klug"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-dgrfrd">intelligent</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1f80fty">end of word: like &quot;k&quot; in <b>k</b>id</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17mw80m">H</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "3de80aa6-99a8-4a3b-9ce6-90cac11739e6_0.mp3",
          displayname: "Hunger"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1klxpjl">hunger</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-4oth2h">&quot;h&quot; in <b>h</b>ome</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17one6z">I</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "2354e292-5f9b-490d-bbd9-2118d5c75162_0.mp3",
          displayname: "Idee"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-yurwxx">idea</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1989e83">long: &quot;e&quot; in <b>e</b>at</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17one6z">I</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "7ff20854-e1a8-4e1a-b444-5941563dd7f2_0.mp3",
          displayname: "immer "
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-u11go3">always</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1tqh3vm">short: &quot;i&quot; in <b>i</b>n</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17o2g0c">J</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "3cad5517-0ba4-49a1-9ce2-051651172997_0.mp3",
          displayname: "ja"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1qcopqr">yes</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ldg0a5">&quot;y&quot; in <b>y</b>oung</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17o2g0c">J</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "93e7d18d-eb25-4c41-8213-5210fd17ed78_0.mp3",
          displayname: "Jeans"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-5p3knb">jeans</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-wjk3al">loan words: &quot;j&quot; in <b>j</b>am</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17ptg9l">K</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "bd1696b2-d418-41d5-949f-09dc020562c6_0.mp3",
          displayname: "Kinder"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bjtjy5">children</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1d1603f">&quot;k&quot; in <b>k</b>id</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17p8c62">L</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "c9b9ad8c-e4a5-4ac6-8412-57926a5c3590_0.mp3",
          displayname: "lernen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1044isd">to learn</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1foftg5">&quot;l&quot; in <b>l</b>ook</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17qzulb">M</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "29700a5c-119b-4416-b3d3-00de3eb2e5d6_0.mp3",
          displayname: "Mann"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-o8ub8u">man</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-11573w5">&quot;m&quot; in <b>m</b>an</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17qejr4">N</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "70617a0b-a0a8-4e3c-b15e-ec34bdf3fdff_0.mp3",
          displayname: "nein"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-l481n1">no</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1sq0ya3">&quot;n&quot; in <b>n</b>o</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17s5wnx">O</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "f1b3a8f9-e7ec-4a73-851f-01c2b1a53561_0.mp3",
          displayname: "Obst"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-3iodko">fruit</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1u9u60f">long: &quot;o&quot; in <b>o</b>val</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17s5wnx">O</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "441a8c82-5505-41a1-a526-02b5448638fd_0.mp3",
          displayname: "Gott"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-318gks">God</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-8r8473">short: &quot;o&quot; in British word n<b>o</b>t</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17rkske">P</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "688062ae-a024-4e85-86ce-e59c765348f7_0.mp3",
          displayname: "Party"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ungcam">party</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-bhazcy">&quot;p&quot; in <b>p</b>arty</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17tbxxf">Q</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "547c705d-e946-4298-aba9-f33c3f380451_0.mp3",
          displayname: "Qualität"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-w2iyx1">quality</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-34t8za">occurs as &quot;QU&quot;; no equivalent; pronounced as &quot;kv&quot;</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17sr0k4">R</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "6ccb5332-2452-44a6-92f1-1faf28802a07_0.mp3",
          displayname: "rot"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-7m3nk7">red</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-138bdij">start of word: no equivalent; consonantal r (gargling)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17sr0k4">R</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "172908ea-5fa3-4382-b715-54644a008239_0.mp3",
          displayname: "fahren"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-wedli7">to drive</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1xjqbho">before vowel: no equivalent; consonantal r (gargling)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17sr0k4">R</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "60b4fca8-a7ee-4455-a354-ad29e0acb390_0.mp3",
          displayname: "Wasser"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bmordz">water</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ghsjhh">end of word: no equivalent; vocalic r (barely there)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17sr0k4">R</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "755d440d-8af7-44d3-a892-94da0727650c_0.mp3",
          displayname: "werden"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-9piwlk">to become</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1jntsv">before consonant: no equivalent; vocalic r (barely there)</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17ui001">S</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "6d3fbc4f-7c32-485d-bd4a-aa7879d75fe7_0.mp3",
          displayname: "Sohn"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-rdgvoe">son</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1vu1wq3">start of word: &quot;z&quot; in <b>z</b>oo</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17ui001">S</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "470158e1-28d9-4ebe-bf04-14bdd66774b8_0.mp3",
          displayname: "Haus"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-10md4hm">house</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1yr1rxf">mid/end of word: &quot;s&quot; in <b>s</b>ink</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17twvwi">T</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "44ecd694-2692-4ca1-aadb-c5835ac9265d_0.mp3",
          displayname: "Tasse"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-11lv18m">cup</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1f262x8">&quot;t&quot; in <b>t</b>ea</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17voebr">U</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "9d2fdaa5-67bb-4f8b-83f0-d73a58904cfe_0.mp3",
          displayname: "Kuh"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1hanj0r">cow</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1cehnly">long: “u” in fl<b>u</b>te</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17voebr">U</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "aa058550-7ed4-4c0a-8cd7-ace5a82a1d11_0.mp3",
          displayname: "Fluss"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1qsn5e8">river</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1usotdb">short: “u” in p<b>u</b>t</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17v34aw">V</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "14ab1d40-f66b-4c2a-8103-7eab94008c90_0.mp3",
          displayname: "Vater"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1utlegg">father</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ll6x9a">&quot;f&quot; in <b>f</b>ather</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17v34aw">V</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e2543d71-bcde-4585-8588-c87f2d3c953a_0.mp3",
          displayname: "Vase"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-6vh9lv">vase</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-7gda2e">loan words: &quot;v&quot; in <b>v</b>an</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17wuged">W</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "60b4fca8-a7ee-4455-a354-ad29e0acb390_0.mp3",
          displayname: "Wasser"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1bmordz">water</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1qhbbyv">&quot;v&quot; in <b>v</b>an</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17w9cau">X</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "1b435adb-b6e9-4380-a51b-02bffc045d44_0.mp3",
          displayname: "Xylophon"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-zysfq4">xylophone</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-xel4ft">no equivalent; pronounced as &quot;ks&quot;</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17y0ih7">Y</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "75cc00ee-e579-4d41-b037-c343047bcdbf_0.mp3",
          displayname: "Yoga"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1w7bojy">yoga</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-s892gg">start of word: &quot;y&quot; in <b>y</b>oga</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17y0ih7">Y</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "2f64356a-904e-4b89-90bf-da3d6e93d2c1_0.mp3",
          displayname: "typisch"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1d1fwy2">typical</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-11kdl1o">mid-word: no equivalent; like German Ü</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17y0ih7">Y</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "f560aa7d-0737-4aa2-8bbb-b6aac2742949_0.mp3",
          displayname: "Handy"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-cntkei">cell phone</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ek8psh">end of word: &quot;y&quot; in hobb<b>y</b></td> </tr><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-17xfke4">Z</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "d03bb085-a5c8-43ef-a990-37e429e22a9e_0.mp3",
          displayname: "zehn"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-qn4rv3">ten</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1nf0jyq">&quot;ts” sound in ca<b>ts</b></td></tr></tbody></table> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/aerialviewofmunich_102222_F.jpg`, 0)} width="550x" height="300px" alt="Aerial view of Munich, Germany." class="svelte-1ydh0c8"> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-n3uest">Come back to this guide whenever you need a reminder of how to pronounce a specific letter. As you speak more German, your pronunciation will start to flow more naturally and with ease.</p> <p class="svelte-1ydh0c8" data-svelte-h="svelte-11kjko3">In the Kleo app, powered by revolutionary interactive video technology, you can practice speaking German with top experts anytime. This risk-free practice is a great way to build your confidence and get the productive feedback you need to improve. By pushing yourself to speak as much as you can, you will be sharpening your pronunciation as you go.</p> <div class="k_blog_wrapper svelte-1ydh0c8" data-svelte-h="svelte-ib6cs8"><a href="https://meetkleo.page.link/8oBQQhcQzJbeVRoC9" class="k_blog_deep_link svelte-1ydh0c8"><p class="kleo_blog_deep_link_text svelte-1ydh0c8">Start Speaking German - FREE!</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="k_apple_svg svelte-1ydh0c8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div> <br> <p class="svelte-1ydh0c8" data-svelte-h="svelte-gt5w18">Read more about important German sounds here:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-tn5z5i"><li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/pronounce-the-german-r-right" class="text-blue-600 svelte-1ydh0c8">Pronounce The German R Right (Tips, Audio For Both R Sounds)</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/how-to-pronounce-the-german-z" class="text-blue-600 svelte-1ydh0c8">How To Pronounce The German Z (Pizza Anyone?)</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/of/german-pronunciation" class="text-blue-600 svelte-1ydh0c8">Meet The World&#39;s First-Ever Virtual Pronunciation Coach</a></li></ol> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-1luaaby">4. Important Letter Combinations (Vowel)</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-yoz8te">German has several vowel combinations, wherein two vowels combine to make a different sound:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-bzkfqa"><tr class="svelte-1ydh0c8"><th colspan="1" class="svelte-1ydh0c8"></th> <th colspan="2" class="svelte-1ydh0c8">Example Word</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">Combo</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">Similar English Sound</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-3cczbc">AI</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "1da23a94-f40e-4870-aab4-80760890a05f_0.mp3",
          displayname: "Mai"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-lybmt">May</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1sx2vu1">like letter “i” in English alphabet</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-3a0vkk">EI</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "c9eb36d1-f05c-421a-ae69-10a63f4b438d_0.mp3",
          displayname: "mein"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-rl5udo">my</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1sx2vu1">like letter “i” in English alphabet</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-1bn7mc">IE</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "51e14e2a-f918-4f0b-8242-c14558b5b7c3_0.mp3",
          displayname: "Lied"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-12cj8e3">song</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1wq4dyl">like letter “e” in English alphabet</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-auagis">EY</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "2594ce51-bda5-408b-9d0c-f0f683a1253c_0.mp3",
          displayname: "Hockey"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1josbpv">hockey</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-19ot2sw">loan words: like letter “e” in English alphabet</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-90havg">AU</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "470158e1-28d9-4ebe-bf04-14bdd66774b8_0.mp3",
          displayname: "Haus"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-10md4hm">house</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1s04paq">&quot;ow” sound in l<b>ou</b>d</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-8wyslu">OU</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e89ef942-016f-402b-86b5-845faae3af04_0.mp3",
          displayname: "Account"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1sgkg1n">account</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1s04paq">&quot;ow” sound in l<b>ou</b>d</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-8wyslu">OU</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "70ee685b-80bc-4daf-a3ec-fd9e4f7d2533_0.mp3",
          displayname: "Route"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1r6h2rx">route</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1srol7i">&quot;u” in r<b>u</b>le</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-92tem8">EU</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "ba77acb8-c136-44e5-be96-dec0f5992b08_0.mp3",
          displayname: "heute"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ynxomt">today</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-47t4pa">“oy” sound in t<b>oy</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-b2yllp">ÄU</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e58f804a-421c-4dbc-86b3-2e4d34cee6de_0.mp3",
          displayname: "Bäume"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-8qifm1">trees</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-47t4pa">“oy” sound in t<b>oy</b></td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1trg25m">You can read more about the EI and IE combinations and learn a helpful rule to pronounce these correctly every time. In addition, see how you can even practice these combos &quot;face-to-face&quot; with YouTube star Feli from Germany:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-m1rdet"><li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/ei-and-ie-pronunciation-in-german" class="text-blue-600 svelte-1ydh0c8">EI And IE Pronunciation In German (The Only Rule You Need)</a></li></ol> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-lhad6e">5. Important Letter Combinations (With Consonants)</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-clyxi2">German also has several important letter combinations with consonants. You&#39;ll see two or more letters combine to make a different sound:</p> <table class="svelte-1ydh0c8"><thead class="svelte-1ydh0c8" data-svelte-h="svelte-bzkfqa"><tr class="svelte-1ydh0c8"><th colspan="1" class="svelte-1ydh0c8"></th> <th colspan="2" class="svelte-1ydh0c8">Example Word</th></tr> <tr class="svelte-1ydh0c8"><th class="svelte-1ydh0c8">Combo</th> <th class="svelte-1ydh0c8">German</th> <th class="svelte-1ydh0c8">English</th> <th class="svelte-1ydh0c8">Similar English Sound</th></tr></thead> <tbody class="svelte-1ydh0c8"><tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4w7wdl">CH</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "43d6e5a1-b77b-45a3-bec6-a07213f20039_0.mp3",
          displayname: "Nacht"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-xmjg3g">night</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1y3c054">after A/O/U/AU: no equivalent; guttural ach-sound</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4w7wdl">CH</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "b9c1469c-b834-4a88-9ffe-eecc270fcc72_0.mp3",
          displayname: "ich"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-17one6z">I</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1gix5ia">after all other letters except S: no equivalent; soft ich-sound</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4w7wdl">CH</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "e47332a7-70a3-4941-b950-de72d3c2e2af_0.mp3",
          displayname: "Chance"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1yuajtq">chance</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ex6do">loan words: &quot;sh&quot; sound in <b>sh</b>eep</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-93bfc8">SCH</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "585d1452-5fb3-4833-9f80-0072d1a36ad9_0.mp3",
          displayname: "Schule"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1qslxyy">school</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1am7wh5">&quot;sh&quot; sound in <b>sh</b>eep</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-mxvadi">CHS</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "b79567be-2b67-4a67-bdab-b502669f10c4_0.mp3",
          displayname: "sechs"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-elri56">six</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1fsfasa">“x” in fo<b>x</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4847j2">IG</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "c92d8db5-4e82-4f90-b981-57e28570968a_0.mp3",
          displayname: "fertig"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1194ip4">finished</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1vajh4n">end of word: no equivalent; soft CH ich-sound</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-6a077s">CK</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "56ebca8f-d743-4fb5-856f-f156fd0f82b8_0.mp3",
          displayname: "lecker"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-veu0sd">delicious</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-nzuc04">“ck” sound in che<b>ck</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4ddvd1">NG</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "bc28ff93-cbe8-472a-9541-ed66b29e81ff_0.mp3",
          displayname: "Engel"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-dyxkrd">angel</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1ku6cy6">&quot;ng&quot; sound in ri<b>ng</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-6e3ngp">NK</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "af752d1b-524e-48e4-a7e6-7d09f5e9f7a6_0.mp3",
          displayname: "Danke"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1iqq7fn">Thanks</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ervmqe">&quot;nk&quot; sound in ba<b>nk</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-8exjg1">SP</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "357d7b2e-7daa-4d63-b485-400483599385_0.mp3",
          displayname: "sprechen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1309xbx">to speak</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1mwuraq">start of word: no equivalent; pronounced like &quot;shp&quot;</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-8exjg1">SP</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "7678ffe8-c558-4ffe-85af-04538ead5916_0.mp3",
          displayname: "Wespe"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-adys75">wasp</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1wpv1dn">mid/end of word: &quot;sp&quot; sound in li<b>sp</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-atpcml">ST</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "7e5582fc-f152-40a5-ac03-94066641c310_0.mp3",
          displayname: "Stadt"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-b43vx">city</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1sc5ace">start of word: no equivalent; pronounced like &quot;sht&quot;</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-atpcml">ST</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "110bbfaf-1f11-4cf9-8d53-0a6af70079b0_0.mp3",
          displayname: "fast"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-7d4rys">almost</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-ci215h">mid/end of word: &quot;st&quot; sound in <b>st</b>op</td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-abg2y8">SS</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "0e7c2560-800e-4f99-9c40-aa7bfec4aa91_0.mp3",
          displayname: "Essen"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-47z4zq">food</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1kg2wi8">&quot;ss” sound in mi<b>ss</b></td></tr> <tr class="svelte-1ydh0c8"><td class="svelte-1ydh0c8" data-svelte-h="svelte-4ojebe">TH</td> <td class="svelte-1ydh0c8">${validate_component(Audioelement, "Kaudio").$$render(
        $$result,
        {
          pid: "31393c7f-f11f-41a3-9828-f7879bbe99c8_0.mp3",
          displayname: "Theater"
        },
        {},
        {}
      )}</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-1wptlex">theater</td> <td class="svelte-1ydh0c8" data-svelte-h="svelte-kdxogn">loan words: &quot;t” in ho<b>t</b></td></tr></tbody></table> <p class="svelte-1ydh0c8" data-svelte-h="svelte-o0h5e0">With practice, you can refine your pronunciation of these letter combinations, including the prevalent CH. In the Kleo app, you can even get real-time feedback on your pronunciation, practicing until you get the sounds just right. You can read more here:</p> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1krknxq"><li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/mastering-ch-pronunciation-in-german" class="text-blue-600 svelte-1ydh0c8">Mastering CH Pronunciation in German</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/how-to-pronounce-ich-in-german" class="text-blue-600 svelte-1ydh0c8">How to Pronounce Ich In German</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/articles/how-to-pronounce-ig-in-german" class="text-blue-600 svelte-1ydh0c8">How To Pronounce IG In German</a></li> <li class="svelte-1ydh0c8"><a href="https://www.meetkleo.com/of/german-pronunciation" class="text-blue-600 svelte-1ydh0c8">Meet The World&#39;s First-Ever Virtual Pronunciation Coach</a></li></ol> <div class="hline svelte-1ydh0c8"></div> <h2 class="svelte-1ydh0c8" data-svelte-h="svelte-2u5eto">6. How can I refine my German pronunciation?</h2> <p class="svelte-1ydh0c8" data-svelte-h="svelte-1sjctb8">Keep pushing to share your thoughts, even when you are unsure of the exact sounds! The more you do this, the more your pronunciation will improve naturally!</p> <img${add_attribute("src", `${WEB_IMG_BASE_URL}Articles/girl_woman_at_door_10_22_22_F.jpg`, 0)} width="550x" height="300px" alt="Friendly woman smiling warmly at open door to German home." class="svelte-1ydh0c8"> <br> <ol class="svelte-1ydh0c8" data-svelte-h="svelte-1ps44o6"><li class="svelte-1ydh0c8"><b>Get feedback on your pronunciation to improve</b>: Check out the interactive video pronunciation lessons in Kleo. You can practice the pronunciation of specific sounds and words, as if you were face-to-face with German friends, including YouTube star Feli from Germany. You can practice with her and top German experts anytime, receiving the consistent and productive feedback you need to improve.</li> <li class="svelte-1ydh0c8"><b>Practice in context</b>: The best way to build muscle memory is to use new sounds and words in real-life situations. Kleo’s popular interactive video lessons unlock a powerful way to practice speaking German in context, refining your pronunciation as you go.</li></ol> <div class="k_blog_wrapper svelte-1ydh0c8" data-svelte-h="svelte-c9kgw4"><a href="https://meetkleo.page.link/8oBQQhcQzJbeVRoC9" class="k_blog_deep_link svelte-1ydh0c8"><p class="kleo_blog_deep_link_text svelte-1ydh0c8">Start Speaking German - FREE</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="k_apple_svg svelte-1ydh0c8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div> <br> <div class="extralink svelte-1ydh0c8" data-svelte-h="svelte-1k53ffa"><a href="/learn?klg=German" class="svelte-1ydh0c8">Explore Other Free Lessons</a></div> <br></article>`;
    }
  })}`;
});
export {
  K_german_alphabet_pronunciation as default,
  metadata
};
