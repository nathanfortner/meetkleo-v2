<script>
    import Reviewcard from "$lib/components/reviewcard.svelte";
	import { empty } from "svelte/internal";

    let downloadLink = `https://apps.apple.com/us/app/kleo-language-learning/id1535893500?ppid=cfd30d31-cb4e-49b9-82ec-cdc93db14e5f`;
</script>

<svelte:head>
    <title>Learn Italian Like You're There</title>
    <meta name="description" content="Kleo brings you as close to Italy as you can get with out a plane ticket. Learn Italian like you are in Italy." />
    <meta name="robots" content="noindex">
</svelte:head>

<section>
    <!-- learn like your there -->
    <div class="grid-container">
        <div class="flex-col-container">
            <h1>
                <span>Learn Italian</span>
                <span class="text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-white"> Like You're There</span>
            </h1>
            <p>
                A slice of Italy, always in the palm of your hand. Immersive learning and conversational practice. At last - Everything you need to <strong class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300">communicate with ease</strong>
            </p>
            
                <button class="mt-4 font-semibold">
                    <a href={downloadLink} onclick="fathom.trackGoal('SBUWXUVP', 10);">
                        <span>Start My Immersion</span>
                        <span>Download Now - iPhone</span>
                    </a>
                </button>
            
        </div>
        <div class="aspect-square object-cover max-w-[400px]">
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/top_image_10_23_22v8_F.png" alt="Italian teacher asking what your name is.">
        </div>
    </div>

    <!-- learners span the globe -->
    <div class="globe">
        <!-- <img src="../images/Italian/Italian-howto-1.webp" alt=""> -->
        <h2>       
            <span>LEARNERS SPAN THE GLOBE</span>
        </h2>
        <div class="flex flex-row justify-around mx-auto text-4xl text-center">
            <div class="flex flex-col">
                <span class="font-bold mt-3">
                    50
                </span>
                <span class="text-lg">
                    U.S. States
                </span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold mt-3">
                    110
                </span>
                <span class="text-lg">
                    Countries
                </span>
            </div>
        </div>
    </div>

    <!-- feel your best -->
    <div class="flex flex-col px-4 max-w-[700px] mx-auto my-[20px]">
        <h3 class="text-3xl my-2">
            You Can't Move To Italy, But You Wish You Could Learn Like You're There
        </h3>
        <p class="my-2"><strong>You want to learn in real-life situations</strong></p>
        <p class="font-light text-slate-300">Immersing yourself in context, just like top experts recommend</p>
        <p class="my-2"><strong>You want to practice speaking Italian with real people</strong></p>
        <p class="font-light text-slate-300">Building your confidence, so you don't freeze up in conversation</p>
        <p class="my-2"><strong>You want to connect with the people and culture through the language</strong></p>
        <p class="font-light text-slate-300">Feeling part of the beauty and soaking in the energy</p>
    <br />
        <h3 class="text-3xl my-2">
            You've Tried To Capture This Experience, But You Haven't Found A Way
        </h3>
        <p class="my-2"><strong>You've tried the existing apps</strong></p>
        <p class="font-light text-slate-300">. . . but you get bored typing and clicking around</p>
        <p class="my-2"><strong>You may have even explored tutors or classes</strong></p>
        <p class="font-light text-slate-300 mb-4">. . . but it's hard to find a perfect fit. And the scheduling and cost make it hard to stay consistent</p>
    </div>
    
    <!-- Unlesah the italian you -->
    <div class="bg-white">
        <div class="flex flex-col px-4 max-w-[700px] text-black mx-auto pt-10">
            <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/imagine_10_23_23_F.png" alt="Boat floating by in Venice, Italy." loading="lazy">
            <h3 class="text-3xl mt-4">
                Imagine - What if you could somehow "drop by" Italy, any old time?
            </h3>
            
        <br>
            <!-- list of fun items -->
            <div class="icon-grid">
                <div class="icon-item-icon">
                    <img src="../images/icons/flower.svg" class="" alt="Flower-shaped bullet point." loading="lazy">
                </div>
                <div class="icon-item-title">
                        Becoming a regular at the local market or pizzeria
                </div>
                <div class="icon-itm-dscp">
                        Learning to communicate with ease in real-life situations    
                </div>
            </div>
                <div class="icon-grid">
                <div class="icon-item-icon">
                    <img src="../images/icons/flower.svg" class="" alt="Flower-shaped bullet point." loading="lazy">
                </div>
                <div class="icon-item-title">
                    With Italian friends always there for you
                </div>
                <div class="icon-itm-dscp">
                    Helping you practice and never getting tired of listening to you!
                </div>
            </div>
            <div class="icon-grid">
                <div class="icon-item-icon">
                    <img src="../images/icons/flower.svg" class="" alt="Flower-shaped bullet point." loading="lazy">
                </div>
                <div class="icon-item-title">
                    Losing yourself in Italian culture every day
                </div>
                <div class="icon-itm-dscp">
                    Having a blast communicating in Italian and growing in confidence at every turn
                </div>
            </div>
            <div class="icon-grid">
                <div class="icon-item-icon">
                    <img src="../images/icons/flower.svg" class="" alt="Flower-shaped bullet point." loading="lazy">
                </div>
                <div class="icon-item-title">
                    Having the immersion you've always wanted
                </div>
                <div class="icon-itm-dscp">
                    Fitting into your schedule and budget, without missing a beat!
                </div>
            </div>
            
            <h3 class="text-3xl my-6">
                <span>Meet Kleo -</span>
                <span>Unlock The Power Of Immersion Learning At Your Fingertips</span>
            </h3>
        </div>

    <div class="flex flex-col px-4 max-w-[700px] mx-auto">
            <p class="text-black">Fueled by revolutionary interactive video technology. You'll speak your heart out and <b>see results faster than you ever imagined possible</b>
            </p>    
    </div>
        <br>
        <div class="flex flex-row flex-wrap gap-2 mx-auto mb-4 mt-4 max-w-[750px]">
            <div class="flex min-w-[300px] md:min-w-[350px] mx-auto">
                <Reviewcard 
                    id={'daniella'}
                    title={`"Why hasn't this been created sooner?!"`}
                    name={`Daniella, Mom & Educator`}
                    feedback={`Wow. My number one complaint with any language learning platform is the lack of practice. With just a few lessons from Kleo, I already feel more confident. Thank you for creating this - finally!!!`}
                    profile_image={'d_cropped.png'}
                    isOffer={`true`}
                />
            </div>
            <div class="flex min-w-[300px] md:min-w-[350px] mx-auto">
                <Reviewcard
                    id={'andrea'}
                    title={`"Kleo has managed to do what no one else has ever managed to do before..."`}
                    name={`Andrea, Simplitalian; 100K Instagram Learners`}
                    feedback={`"Kleo brings real language interaction on a smartphone. You know that I consider learning a language as learning a new skill, and for that reason, I never recommended apps or programs to my students until I met Kleo."`}
                    profile_image={'andrea_10_24_22_F.png'} 
                    isOffer={'true'}
                />
            </div>
            <div class="flex flex-col px-4 max-w-[700px] mx-auto">
                <button class="mt-2 text-slate-100 px-2 py-1">
                    <a href={downloadLink} onclick="fathom.trackGoal('SBUWXUVP', 20);">
                        <span>I Want To Learn Like I'm There</span>
                        <span>Download Now - iPhone</span>
                    </a>
                </button>    
            </div>
        </div>

    <!-- image sections -->
    <div class="bg-white">
        <div class="flex flex-col flex-wrap md:flex-row px-4 max-w-[700px] text-black mx-auto gap-4">
            <p class="font-semibold text-[32px] mt-2 text-center">Everything You Need To Unleash The Italian You</p>
            <div class="min-w-[250px] md:max-w-[500px] mx-auto">
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/course_10_23_22v4_F.png?tx=h_500" alt="Italian Nonna holding out plate of food during interactive video lesson in Kleo app." loading="lazy">
               
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4"><strong>
                    <span>World-Class Instruction</span>
                    <span>In Real-Life Situations</span>
                </strong>
            </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/concepts_10_23_22v4_F.png" alt="Concept lessons from the Kleo app. Smiling Italian woman teaching Sono. Family at pizzeria teaching verb conjugation." loading="lazy">
                <h5 class="text-center mt-1">Understanding, not just memorizing</h5>
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">65+ key concept lessons in a structured, interactive video course, breaking down the language like never before</li>
                    <li>Advancing you to the independent speaking level</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4"><strong>
                    <span>Dynamic, Rapid-Fire</span>
                    <span>Speaking Practice</span>
                </strong>
            </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/practice_10_23_22_F.png" alt="Italian woman gesturing warmly while teaching." loading="lazy">
                <h5 class="text-center mt-1">Achieving ultimate confidence</h5>
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">100 interactive video “face-to-face” speaking drills, helping you think on your feet and build muscle memory</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto mb-3">
                <h5 class="text-center mt-4"><strong>
                    <span>Interactive Immersions</span>
                    <span>With Locals</span>
                </strong>
            </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/culture_10_23_22v2_F.png" alt="Italian man in front of outdoor restaurant holding up glass of wine and saying Cheers." loading="lazy">
                <h5 class="text-center mt-1">Exploring the culture</h5>
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Special guest lessons, helping you feel and sound like a local</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4">
                    <strong>
                       <span>Interactive Vocabulary Builders</span> 
                       <span class="mb-3">And Pronunciation Feedback</span>
                    </strong>
                </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/vocab_10_23_22v4_F.png" alt={`Vocabulary lessons from Kleo app, with a range of speaking results from "not quite" to "like a native."`} loading="lazy">
                <h5 class="text-center mt-1">Building your vocabulary in context</h5>
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">100 interactive vocabulary lessons, with every word hand-selected to amplify the reach of your new skills</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4"><strong>Cutting-Edge AI Technology</strong></h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/aitec_10_23_22v2_F.png" alt="Italian woman smelling white rose in a market, in front of various AI tools from Kleo app." loading="lazy">
                <h5 class="text-center mt-1">Learning Faster Than Ever</h5>
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Ultimate insight to your stats and progress, focusing you on the right areas and fueling your motivation</li>
                </ol>
            </div>
            <br>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto mb-4">
                <Reviewcard
                    id={'chris1'}
                    title={`"I was able to communicate with ease because of the interactive nature of your app"`}
                    name={`Chris, Traveler & Italian Learner`}
                    feedback={`I have loved using the app, and I just returned from three weeks in Sicily.  The app was really helpful in the weeks leading up to my trip to get me practicing and verbal. I have used several programs and formats . . . but Kleo is by far the most interactive and enjoyable`}
                    profile_image={'C_cropped.png'}
                    isOffer={'true'}
                />
            </div>
        </div>
    </div>

    <!-- Act Now -->
    <div class="bg-white">
        <div class="flex flex-col flex-wrap md:flex-row px-4 max-w-[700px] text-black mx-auto gap-4">
            <div class="min-w-[250px] md:max-w-[500px] mx-auto">
                <p class="font-semibold text-[32px] mt-3">You'll Also Unlock Revolutionary Tools To Power Your Learning Like Never Before</p>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <div class="flex flex-row justify-center mx-auto mt-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-5 md:h-6 fill-current -rotate-45"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"/></svg>
                    <h5 class="ml-2"><strong>Adaptive Practice Platform</strong></h5>
                </div>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/adaptive_nonna_10_23_22v2_F.png" alt="Nonna teaching interactive video lesson in Kleo app held in a woman's hands." loading="lazy">
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">You'll keep growing with speaking practice customized just for you - every time</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <div class="flex flex-row justify-center mx-auto mt-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-5 md:h-6 fill-current -rotate-45"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"/></svg>
                    <h5 class="ml-2"><strong>Hands-Free Learning</strong></h5>
                </div>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/hands_free_10_23_22v2_F.png" alt="Woman jogging in the woods with headphones." loading="lazy">
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Put your phone in your pocket and speak on the go. So convenient you'll never miss a day!</li>
                </ol>
            </div>
            <br>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto mb-4">
                <Reviewcard
                    id={'dave1'}
                    title={`"Thanks again, I used it for 2 hours yesterday"`}
                    name={'Dave, Avid Language Learner'}
                    feedback={`I've tried over 20 apps......I tried virtual reality.....this is hands down the best app I've tried. Why?  Because the HUMAN interaction makes it seem like I'm on facetime or zoom, it makes it SO EASY to spend time on. The other apps are boring, you have to push yourself to do them. This is enjoyable which makes it the BEST experience`}
                    profile_image={'none'}
                    isOffer={'true'}
                />
            </div>
            <div class="min-w-[250px] md:max-w-[500px] mx-auto">
                <p class="text-[26px]">
                    <strong class="text-center">
                        <span>Get <h6 class="inline text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-pink-600 to-pink-300">Your</h6> Italian Immersion</span>
                        <span>Try For Free</span>
                        <span>(4 Free Lessons)</span>
                    </strong>
                </p>
            </div>
        </div>
    <div class="flex flex-col max-w-[700px] mx-auto justify-center mt-4">
        <button class="text-slate-100 px-2 py-1">
            <a href={downloadLink} onclick="fathom.trackGoal('SBUWXUVP', 30);">  
            <span>Start My Immersion</span>
            <span>Download Now - iPhone</span>
            </a>
        </button>
        <ol class="list-disc text-[20px] px-[2em] text-black ">
            <li class="">Available for purchase exclusively in the Apple App Store</li>
        </ol>
        <br>
        <div class="min-w-[250px] md:max-w-[500px] max-w-[90%] mx-auto mb-4 mt-2">
            <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/final_10_23_22_F.png" alt="Two mobile phones showcasing interactive video lessons, in front of Kleo logo with background of Italian cobblestone street." loading="lazy">
            <h5 class="text-[24px] font-semibold text-center mt-8 text-black">Start Your Immersion Today</h5>
            <br>
        </div> 
        <div class="flex flex-row flex-wrap gap-4 mx-auto mt-1 max-w-[750px]">
            <div class="flex min-w-[300px] md:min-w-[350px]  mx-auto">
                <Reviewcard
                    id={'Rose'}
                    title={`"This app is what heaven must be like"`}
                    name={'Rosemarie, Avid Italian Learner'}
                    feedback={`I've been a language hobbyist all my life with my great passion being Italian. Bless you all.  The pedagogy is spot on and the AI, speech recognition, technology, etc. render the experience surreal`}
                    profile_image={`R_cropped.png`}
                    isOffer={'true'}
                />
            </div>
            <div class="flex min-w-[300px] md:min-w-[350px] mx-auto">
                <Reviewcard
                    id={'chris1'}
                    title={`"This app does what I always needed but thought I didn't need"`}
                    name={`Eric, Music Professor`}
                    feedback={`Powerful! It's like you have instructors making you speak to them in your new language. It puts you on the spot. I have been frustrated with language apps that do not take it to the next level in my past. This app is awesome. Even after stressful days, I look forward to speaking a language I just love very much`}
                    profile_image={`E.png`}
                    isOffer={'true'}
                />
            </div>
            <div class="flex min-w-[300px] md:min-w-[350px]  mx-auto">
            <Reviewcard
                id={'Shelly'}
                title={`"Honestly, I was skeptical of another language app"`}
                name={`Shelly, Regular App User`}
                feedback={`I've been using Duolingo for 4 years and I've liked it a lot. However, I prefer Kleo's format - I like interacting with real people, and it seems to get to the heart of what's important to know`}
                profile_image={`S.jpg`}
                isOffer={'true'}
            />
            </div>
        </div>              
        <div class="md:max-w-[500px] mx-auto mt-8 text-black">
            <p class="text-[26px] font-semibold tex-center">
                    <span>A Slice Of Italy In The</span>
                    <span>Palm Of
                        <h6 class="inline text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-pink-600 to-pink-300">Your</h6>
                        Hand</span>
            </p>
        </div>
    </div>
</div>

    <div class="flex flex-col px-4 max-w-[700px] mx-auto">
        <button class="mt-6 text-slate-100 px-2 py-1">
            <a href={downloadLink} onclick="fathom.trackGoal('SBUWXUVP', 40);">
            <span>Never Look Back</span>
            <span>Download Now - iPhone</span>
            </a>
        </button>    
    </div>
</div>

    
</section>


<style>
    section {
        color: rgb(236, 236, 236);
        font-size: 1.25rem;
        line-height: 1.25;
        font-weight: 400;
        font-family: 'Manrope';
        letter-spacing: .05rem;
        background: black;
        padding-top: 50px;
        
    }

    h1 {
        font-size: 2.5em;
        font-weight: 700;
        line-height: 1.3;
        margin-top: 0.15rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        padding-top: 1.5rem;
    }

    span {
        display: block;
    }

    button {
        background-color: #E32D55;
        margin-bottom: 2rem;
    }

    img {
        margin: auto;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
    }

    .flex-col-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        padding-left: 20px;
        padding-right: 20px;
        /* background-color: green; */
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto;
        padding-left: 20px;
        padding-right: 20px;
    }
   
    .globe {
        background-image: url("https://ddseu0ssi.mo.cloudinary.net/web/images/offers/world.png");
        background-size: cover;
        min-height: 175px;
        width: 100%;
        margin-top: 1rem;
        padding: none;
        color: black;
    }

    .icon-grid {
        display: grid;
        width: 100%;
        grid-template-columns: 60px 1fr 1fr;
        grid-gap: 1px;
        grid-template-areas: 
        "gicon gtitle gtitle"
        "gicon gdscp gdscp";
        align-items: center;
        margin-bottom: 20px;
    }

    .icon-item-icon {
        grid-area: gicon;

    }

    .icon-item-title {
        grid-area: gtitle;
        font-size: 22px;
        font-weight: 600;
        
    }

    .icon-itm-dscp {
        grid-area: gdscp;
        font-size: 20px;
        font-weight: 300;
    }
    


    @media (min-width: 600px) {
        .grid-container {
            grid-template-columns: auto auto;
        }
    }
    
    @media (min-width: 900px) {
        .grid-container {
            grid-template-columns: 600px auto;
        }
    }
/* 
    @media (max-width: 900px) {
        section {
            font-size: 3rem;
        }
    }
    @media (min-width: 300px) {
        section {
            font-size: 1.25rem;
        }
    } */
</style>