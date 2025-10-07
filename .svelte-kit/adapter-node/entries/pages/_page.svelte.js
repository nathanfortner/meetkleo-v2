import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { v as valueLang, m as members, l as listOfTestimonialsData } from "../../chunks/stores.js";
import { R as Reviewcard } from "../../chunks/reviewcard.js";
import { S as Seohead } from "../../chunks/seohead.js";
let deColorFrom = "from-cyan-600";
let deColorTo = "to-[#FDF8B4]";
const Toppage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $valueLang, $$unsubscribe_valueLang;
  $$unsubscribe_valueLang = subscribe(valueLang, (value) => $valueLang = value);
  let colorFrom = deColorFrom;
  let colorTo = deColorTo;
  {
    if ($valueLang === "German") {
      colorFrom = "from-yellow-400";
      colorTo = "to-red-100";
    } else if ($valueLang === "Italian") {
      colorFrom = "from-green-500";
      colorTo = "to-white";
    } else if ($valueLang === "Spanish") {
      colorFrom = "from-red-600";
    } else {
      colorFrom = "from-cyan-600";
    }
  }
  $$unsubscribe_valueLang();
  return `<section><div class="mb-14"><p class="mt-3 md:mt-9 mb-2"><span class="block text-5xl md:text-6xl font-bold text-center text-white px-4" data-svelte-h="svelte-1e6jp5i">What if an app and a tutor had a baby?</span> <span${add_attribute("class", `block text-6xl font-bold text-center text-white  pt-12 text-transparent md:text-8xl bg-clip-text bg-gradient-to-r ${colorFrom} ${colorTo}`, 0)}>Meet Kleo</span></p></div> <div class="flex flex-cols-2 gap-2 mx-auto justify-center items-center p-4"><img src="./images/icons/WhyKleo.jpg" alt="why use kleo, it gets you speaking, propels your learning, and does not waste your time " height="562px" width="367px" class="md:w-[367px] md:h-[562px] rounded-xl"> <div class="hidden md:block md:w-[640px] md:h-[439px]"><img${add_attribute("src", `https://ddseu0ssi.mo.cloudinary.net/images/other/Web/${$valueLang}/${$valueLang}-demo.png`, 0)} alt="kleo app on the phone" height="439px" width="640px" class="object-cover"></div></div></section>`;
});
const Tmoan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <section class="mt-7 mb-4 max-w-screen-xl" data-svelte-h="svelte-1d8agpj"><div class="flex flex-col md:flex-row flex-wrap justify-center flex-auto"><div class="flex flex-col justify-center mx-auto mb-4"><a href="https://apps.apple.com/app/id1535893500" rel="external"><img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="apple download" height="54" width="160px" class="w-[160px] h-[54px] mb-1"></a></div>  <div class="flex flex-col justify-center mx-auto"><img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/quote_all.svg" alt="quotes about how well the app has worked for others" width="358" height="109" class=""></div> </div></section>`;
});
const Howkleo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $valueLang, $$unsubscribe_valueLang;
  $$unsubscribe_valueLang = subscribe(valueLang, (value) => $valueLang = value);
  $$unsubscribe_valueLang();
  return ` <section class="mt-6" id="howkleo"><div class="container bg-white rounded-xl pb-4 mx-auto"><div class="container flex flex-row mb-5 mx-auto justify-center" data-svelte-h="svelte-7o6tud"><h2 class="text-3xl text-center mx-2 mt-4 text-black">- How Kleo Gets You Speaking -</h2></div> <div class="flex flex-row flex-wrap flex-auto justify-center mb-4 gap-x-14 gap-y-4 pl-2 pr-2"><div class="container max-w-sm rounded-xl"><div class="flex justify-center items-center md:h-96 md:w-96"><img${add_attribute("src", `images/${$valueLang}/${$valueLang}-howto-1.webp`, 0)} alt="practice speaking whenever you want" height="384" width="360" class="rounded-xl object-cover"></div> <div class="flex justify-center items-center" data-svelte-h="svelte-l2u2po"><p class="text-black text-left pl-4 pb-4 pr-4">Immersion designed by top language and tech experts. Building your confidence to go out and speak in the real world.</p></div></div> <div class="container max-w-sm rounded-xl"><div class="flex justify-center items-center md:h-96 md:w-96"><img${add_attribute("src", `images/${$valueLang}/${$valueLang}-howto-2.webp`, 0)} alt="learn like you are there" height="384" width="360" class="rounded-xl object-cover"></div> <p class="text-black text-left pl-4 pb-4 pr-4" data-svelte-h="svelte-w8omlt">The magic of learning from a person meets the convenience of an app. A friend to practice with anytime, anywhere.</p></div> <div class="container max-w-sm rounded-xl"><div class="flex justify-center items-center md:h-96 md:w-96"><img${add_attribute("src", `images/${$valueLang}/${$valueLang}-howto-3.webp`, 0)} alt="optimize your learning" height="384" width="360" class="rounded-xl object-cover"></div> <div class="flex justify-center items-center" data-svelte-h="svelte-1fr228d"><p class="text-black text-left pl-4 pb-4 pr-4">Real-time feedback and dynamically created lessons. The entire learning experience evolves just for you, every time.</p></div></div></div></div></section>`;
});
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checkmark = false } = $$props;
  if ($$props.checkmark === void 0 && $$bindings.checkmark && checkmark !== void 0)
    $$bindings.checkmark(checkmark);
  return `${checkmark == true ? `<div class="flex justify-center" data-svelte-h="svelte-1eysvu5"><div class="rounded-lg p-2 text-white" style="background: #6835f8"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillrule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" cliprule="evenodd"></path></svg></div></div>` : `<div class="flex justify-center" data-svelte-h="svelte-i3qzsq"><div class="rounded-lg p-2 bg-gray-100 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillrule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" cliprule="evenodd"></path></svg></div></div>`}`;
});
const Featuretable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let features = [
    {
      "title": "Conversational learning",
      "values": [true, true, false]
    },
    {
      "title": "Personalized feedback",
      "values": [true, true, false]
    },
    {
      "title": "Anytime, anywhere practice",
      "values": [true, false, true]
    },
    {
      "title": "Optimized learning using AI",
      "values": [true, false, true]
    },
    {
      "title": "Less than a typical food delivery order",
      "values": [true, false, true]
    }
  ];
  return ` <section><table class="hidden md:table table-fixed mx-auto w-xl mt-6 border-collapse bg-white shadow-sm rounded-xl"><thead class="bg-purple-400" data-svelte-h="svelte-1g8lfxg"><tr class="text-white text-xl"><th class="lg:w-[600px] text-left p-[30px] rounded-tl-xl">FEATURE</th> <th class="w-[18%] text-center p-[30px]">KLEO</th> <th class="w-[18%] text-center p-[30px]">TUTORS</th> <th class="w-[18%] text-center p-[30px] rounded-tr-xl">APPS</th></tr></thead> <tbody>${each(features, (feature, i) => {
    return `<tr class=""><td class="p-[30px] border-grey-300 border-y-[1px] text-xl font-semibold">${escape(feature.title)}</td> <td class="p-[30px] border-grey-300 border-[1px]">${validate_component(Checkmark, "Checkmark").$$render($$result, { checkmark: feature.values[0] }, {}, {})}</td> <td class="p-[30px] border-grey-300 border-[1px]">${validate_component(Checkmark, "Checkmark").$$render($$result, { checkmark: feature.values[1] }, {}, {})}</td> <td class="p-[30px] border-grey-300 border-y-[1px]">${validate_component(Checkmark, "Checkmark").$$render($$result, { checkmark: feature.values[2] }, {}, {})}</td> </tr>`;
  })}</tbody></table> ${each(features, (feature, i) => {
    return `<div class="grid md:hidden grid-cols-3 max-w-md mx-auto mt-4 shadow-xl rounded-xl"><div class="col-span-3 bg-purple-400 p-3 rounded-t-xl"><p class="text-md text-white text-center">${escape(feature.title)}</p></div> <div class="bg-white p-2 border-b-2" data-svelte-h="svelte-coy93"><p class="text-base text-black text-center">KLEO</p></div> <div class="bg-white p-2 border-b-2 border-l-2" data-svelte-h="svelte-g8lihr"><p class="text-base text-black text-center">TUTORS</p></div> <div class="bg-white p-2 border-b-2 border-l-2" data-svelte-h="svelte-1179ys8"><p class="text-base text-black text-center">APPS</p></div> <div class="bg-white p-2 rounded-bl-xl">${validate_component(Checkmark, "Checkmark").$$render($$result, { checkmark: feature.values[0] }, {}, {})}</div> <div class="bg-white p-2 border-l-2">${validate_component(Checkmark, "Checkmark").$$render($$result, { checkmark: feature.values[1] }, {}, {})}</div> <div class="bg-white p-2 rounded-br-xl border-l-2">${validate_component(Checkmark, "Checkmark").$$render($$result, { checkmark: feature.values[2] }, {}, {})}</div> </div>`;
  })}</section>`;
});
const Membercard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0)
    $$bindings.member(member);
  return ` <div class="container flex flex-col sm:flex-row flex-auto mx-auto max-w-lg items-center sm:items-start mt-5 mb-5 border-0 shadow-lg rounded-xl"><div class="flex flex-col w-[20%] min-w-[110px] p-2 place-content-center items-center"><img${add_attribute("src", `https://ddseu0ssi.mo.cloudinary.net/images/other/Web/${member.photo}`, 0)} loading="lazy" class="rounded-full border-2 border-[#6835f8]" height="75px" width="75px"${add_attribute("alt", `Photo of ${member.name}`, 0)}> <p class="font-bold text-lg leading-5 text-center">${escape(member.name)}</p> <p class="leading-1 text-center">${escape(member.title)}</p></div> <div class="container flex flex-col sm:flex-row w-full p-2"><div class="border-2 border-[#6835f8] mb-4 sm:mr-4 w-1/2 sm:w-1 sm:h-[100px] self-center"></div> <p class="leading-1 text-base text-opacity-20 px-8 sm:px-2 sm:text-left">${escape(member.bio)}</p></div></div>`;
});
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $members, $$unsubscribe_members;
  $$unsubscribe_members = subscribe(members, (value) => $members = value);
  $$unsubscribe_members();
  return ` <section class="mt-6 bg-white rounded-xl" id="aboutkleo"> <div class="container bg-white rounded-xl mx-auto justify-center pt-5" data-svelte-h="svelte-jx3nkk"><h1 class="text-3xl text-center text-black">- Building Kleo -</h1></div>  <div class="container mx-auto" data-svelte-h="svelte-u6yzhw"><div class="flex flex-col bg-gradient-to-r from-[#6835f8] to-[#aa00ff] rounded-xl justify-center w-xl px-1 py-4 sm:p-10 m-5"><h3 class="text-xl text-center text-white font-bold border-b-[1px] w-48 mx-auto leading-1 pb-1">Our Mission</h3> <p class="text-white text-left sm:text-center w-[80%] mx-auto">We aim to cultivate connection through learning and conversation. Let’s get talking to each other. Kleo is the new way to learn languages. Your personal coach you can practice speaking with anytime and receive instant, personalized feedback. Without judgments or limits, Kleo gets you ready to speak in the real world.</p></div></div>  <div class="container flex flex-col sm:flex-row flex-wrap flex-auto gap-2 justify-evenly mx-auto">${each($members, (member) => {
    return `${validate_component(Membercard, "Membercard").$$render($$result, { member }, {}, {})}`;
  })}</div></section>`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonialsData } = $$props;
  const getItemId = (index, carouselName = "review") => `${carouselName}-item-${index}`;
  if ($$props.testimonialsData === void 0 && $$bindings.testimonialsData && testimonialsData !== void 0)
    $$bindings.testimonialsData(testimonialsData);
  if ($$props.getItemId === void 0 && $$bindings.getItemId && getItemId !== void 0)
    $$bindings.getItemId(getItemId);
  return `<div class="flex flex-row gap-2 flex-wrap mx-auto sm:mt-2">${each(testimonialsData, ({ name, title: title2, profile_image, feedback }, index) => {
    return `${validate_component(Reviewcard, "Reviewcard").$$render(
      $$result,
      {
        id: getItemId(index),
        title: title2,
        profile_image,
        feedback,
        name
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Testimonbottom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $listOfTestimonialsData, $$unsubscribe_listOfTestimonialsData;
  $$unsubscribe_listOfTestimonialsData = subscribe(listOfTestimonialsData, (value) => $listOfTestimonialsData = value);
  let testimonialsData = $listOfTestimonialsData;
  $$unsubscribe_listOfTestimonialsData();
  return ` <section class="mt-6 flex flex-col items-center" id="testimon"><div class="container bg-white rounded-xl"><div class="container flex flex-row mx-auto justify-center" data-svelte-h="svelte-1dkdj24"><h2 class="text-3xl text-center mx-2 mt-5 mb-6 text-black">- Users and Experts <span class="block sm:inline">Speak -</span></h2></div> ${validate_component(Carousel, "Carousel").$$render($$result, { testimonialsData }, {}, {})}</div></section>`;
});
let title = "Language Learning";
let metadescription = "unleash the fluent you and start speaking the language using the amazing new interactive video lesson based app Kleo";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seohead, "Seohead").$$render($$result, { title, metadescription }, {}, {})} ${$$result.head += `<!-- HEAD_svelte-r97yl7_START --><link rel="canonical"${add_attribute("href", `https://www.meetkleo.com`, 0)}><!-- HEAD_svelte-r97yl7_END -->`, ""} ${validate_component(Toppage, "Toppage").$$render($$result, {}, {}, {})} ${validate_component(Tmoan, "Tmoan").$$render($$result, {}, {}, {})} ${validate_component(Howkleo, "Howkleo").$$render($$result, {}, {}, {})} ${validate_component(Featuretable, "Featuretable").$$render($$result, {}, {}, {})} ${validate_component(Team, "Team").$$render($$result, {}, {}, {})} ${validate_component(Testimonbottom, "Testimonbottom").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
