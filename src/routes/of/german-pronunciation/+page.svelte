<script>
    import Reviewcard from "$lib/components/reviewcard.svelte";
	

    let downloadLink = `https://meetkleo.page.link/vqpBxxXTzDLrK8MJ7`;
</script>

<svelte:head>
    <title>Conquer the Toughest German Sounds</title>
    <meta name="description" content="Kleo introduces the first-ever interactive virtual pronunciation coach, featuring the most comprehensive instruction and practice for German pronunciation." />
    <meta name="robots" content="noindex">
</svelte:head>

<section>
    <!-- learn like your there -->
    <div class="grid-container">
        <div class="flex-col-container">
            <h1>
                <span>The Perfect Solution If You Want To Feel </span>
                <span class="text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-yellow-500 to-white">More Confident In Your German Pronunciation </span>
            </h1>
            <p>
                You're one click away from unlocking the world's first-ever interactive video pronunciation series. Join German learners from 110 countries - finally accessing the interactive practice and feedback needed to <strong class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">get communicating with ease</strong>
            </p>
            
                <button class="mt-4 font-semibold">
                    <a href={downloadLink} onclick="fathom.trackGoal('EQAQD10G', 10);">
                        <span>Explore Free Lesson</span>
                        <span>Download Now - iPhone</span>
                    </a>
                </button>
            
        </div>
        <div class="aspect-square object-cover max-w-[400px]">
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/feli_phone_111922v2_F.png" alt="Feli from Germany asking what your name is while teaching German in Kleo app.">
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
            Want to conquer German's toughest sounds and feel more confident when you speak?
        </h3>
        <p class="font-light text-slate-300">Focusing on connecting and communicating, not worrying about how you sound</p>
        <br />
        <p class="font-light text-slate-300">Never hesitating to speak up</p>
        <br />
        <h3 class="text-3xl my-2">
            Tired of practicing your pronunciation in the mirror (or in the car or shower)?
        </h3>
        <p class="font-light text-slate-300">You've studied the rules, but you need a productive way to practice</p>
        <br />
        <p class="font-light text-slate-300">You don't have anyone (like a German friend or tutor) to give you consistent feedback on how you sound</p>
      </div>
    
    <!-- Unlesah the italian you -->
    <div class="bg-white">
        <div class="flex flex-col px-4 max-w-[700px] text-black mx-auto pt-10">
            <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/pron_coach_111322v2_F.png" alt="Woman holding phone playing Kleo app featuring Feli from Germany teaching German pronunciation." loading="lazy">
        <h3 class="text-3xl my-6">
                <span>Meet Kleo -</span>
                <span>The First-Ever Virtual Pronunciation Coach</span>
            </h3>
        </div>

    <div class="flex flex-col px-4 max-w-[700px] mx-auto">
            <p class="text-black">Fueled by revolutionary interactive video technology. Powerful pronunciation tips, instant feedback, infinite practice - at your fingertips. You'll <b>see results faster than you ever imagined possible</b>
            </p>    
    </div>
        <br>
        <div class="flex flex-row flex-wrap gap-2 mx-auto mb-4 mt-4 max-w-[750px]">
            <div class="flex min-w-[300px] md:min-w-[350px] mx-auto">
                <Reviewcard
                id={'peter'}
                title={`"Kleo is as close as you can get to having a teacher in the classroom giving you feedback"`}
                name={`Peter Chase, Co-Author National German Exams; 15-Time College Board AP Reader`}
                feedback={`It’s a brilliant idea to have so much voice recognition built into the app. Like an athlete who has to do a lot of repetition, we’re building the muscle memory for sounds and sentence structure. We have to push ourselves to speak as much as we can`}
                profile_image={`peter_de_111322_F.jpg`}
                isOffer={'true'}
            />
            </div>
            <div class="flex min-w-[300px] md:min-w-[350px] mx-auto">
                <Reviewcard
                id={'scott'}
                title={`"Kleo provides a sense of private instruction like no other application I've tried"`}
                name={`Scott, World Traveler`}
                feedback={`Thanks to Kleo, I am confident I can find my way around German-speaking countries. Kleo keeps the lessons fun and engaging, explaining German in a way that even I can remember!`}
                profile_image={`scott_tiny.jpg`}
                isOffer={'true'}
            />
            </div>
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
                     <div class="flex flex-col px-4 max-w-[700px] mx-auto">
                <button class="mt-2 text-slate-100 px-2 py-1">
                    <a href={downloadLink} onclick="fathom.trackGoal('EQAQD10G', 20);">
                        <span>Explore Free Lesson</span>
                        <span>Download Now - iPhone</span>
                    </a>
                </button>    
            </div>
        </div>

    <!-- image sections -->
    <div class="bg-white">
        <div class="flex flex-col flex-wrap md:flex-row px-4 max-w-[700px] text-black mx-auto gap-4">
            <p class="font-semibold text-[32px] mt-2 text-center"><span>Everything You Need To Rock The Toughest German Sounds</span></p>
         
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4"><strong>
                    <span>Robust Instruction</span>
                    <span class="mb-3">From Top Experts</span>
                </strong>
            </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/tiles_111322_F.png" alt="Concept lessons from the Kleo app. Feli from Germany teaching German pronunciation." loading="lazy">
                    <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Powerful interactive video course</li>
                    <li class="mb-2">Comprehensive modules unlocking all the sounds you'll need: Building Blocks; Legendary Letters; Signature Sounds; Pro Tips</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4"><strong>
                    <span class="mb-3">Interactive Practice & Feedback</span>
                </strong>
            </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/practice_de_111322_F.png" alt="German woman waving warmly while teaching." loading="lazy">
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">“Face-to-face” speaking drills, helping you think on your feet and achieve ultimate confidence</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto mb-3">
                <h5 class="text-center mt-4"><strong>
                    <span class="mb-3">Contextual Learning</span>
                </strong>
            </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/context_de_111322_F.png" alt="German woman holding out rose in German market." loading="lazy">
                                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Immersions in real-life situations, honing your new sounds and building muscle memory</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4">
                    <strong>
                       <span class="mb-3">Dynamic Vocabulary Builders</span> 
                    </strong>
                </h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/vocab_de_111322_F.png" alt={`Vocabulary lessons from Kleo app, with a range of speaking results from "not quite" to "like a native."`} loading="lazy">
                    <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Interactive vocabulary lessons, with every word hand-selected to fine-tune your new sounds</li>
                </ol>
            </div>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto">
                <h5 class="text-center mt-4"><strong>Cutting-Edge AI Technology</strong></h5>
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/tech_de_111322_F.png" alt="German woman in a restaurant asking, in front of various AI tools from Kleo app." loading="lazy">
                 <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Ultimate insight into your progress, fueling your motivation and helping you learn faster than ever</li>
                </ol>
            </div>
            <br>
            <div class="min-w-[250px] md:max-w-[300px] mx-auto mb-4">
                <Reviewcard
                    id={'chris1'}
                    title={`"I was able to communicate with ease because of the interactive nature of your app"`}
                    name={`Chris, Traveler & Language Learner`}
                    feedback={`The app was really helpful in the weeks leading up to my trip to get me practicing and verbal. I have used several programs and formats, but Kleo is by far the most interactive and enjoyable. I have loved using the app`}
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
                <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/jonas_phone_111322_F.png" alt="German man teaching interactive video lesson in Kleo app held in a woman's hands." loading="lazy">
                <ol class="list-disc text-[20px] px-[2em] mt-2">
                    <li class="mb-2">Keep advancing with speaking drills customized just for you - every time!</li>
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
                        <span>Start <h6 class="inline text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">Your</h6> Pronunciation Transformation</span>
                    </strong>
                </p>
            </div>
        </div>
    <div class="flex flex-col max-w-[700px] mx-auto justify-center mt-4">
        <button class="text-slate-100 px-2 py-1">
            <a href={downloadLink} onclick="fathom.trackGoal('EQAQD10G', 30);">  
            <span>Explore Free Lesson</span>
            <span>Download Now - iPhone</span>
            </a>
        </button>
        <ol class="list-disc text-[20px] px-[2em] text-black ">
            <li class="">Available for purchase exclusively in Apple App Store</li>
            <li class="">Range of subscription choices, including a 1-week option</li>
        </ol>
        <br>
        <div class="min-w-[250px] md:max-w-[500px] max-w-[90%] mx-auto mb-4 mt-2">
            <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/demo_de_111322_F.png" alt="Two mobile phones showcasing interactive video lessons, in front of Kleo logo with background of German city." loading="lazy">
            <h5 class="text-[24px] font-semibold text-center mt-8 text-black">Practice With Us - Anytime!</h5>
            <br>
        </div> 
        <div class="flex flex-row flex-wrap gap-4 mx-auto mt-1 max-w-[750px]">
            <div class="flex min-w-[300px] md:min-w-[350px]  mx-auto">
                <Reviewcard
                id={'feli'}
                title={`"Kleo is a game-changer. This will boost your speaking confidence immensely!"`}
                name={`Feli from Germany; 390K YouTube Subscribers, Kleo Contributor`}
                feedback={`"Kleo makes language learning so much more personal and lets you practice in everyday situations without ever leaving the country"`}
                profile_image={'feli1_F_111322.jpg'} 
                isOffer={'true'}
            />
            />
            </div>
            <div class="flex min-w-[300px] md:min-w-[350px] mx-auto">
                <Reviewcard
                id={'eric'}
                title={`"This app does what I always needed. Powerful!"`}
                name={`Eric, Music Professor`}
                feedback={`It's like you have instructors making you speak to them in your new language. It puts you on the spot. I have been frustrated with language apps that do not take it to the next level in my past. This app is awesome. Even after stressful days, I look forward to speaking a language I just love very much`}
                profile_image={`E.png`}
                isOffer={'true'}
            />
            </div>
            <div class="flex min-w-[300px] md:min-w-[350px]  mx-auto">
                <Reviewcard
                id={'Rose'}
                title={`"This app is what heaven must be like"`}
                name={'Rosemarie, Avid Language Learner'}
                feedback={`I've been a language hobbyist all my life. Bless you all.  The pedagogy is spot on and the AI, speech recognition, technology, etc. render the experience surreal`}
                profile_image={`R_cropped.png`}
                isOffer={'true'}
            />
            </div>
        </div>          
        <div class="md:max-w-[500px] mx-auto mt-8 text-black">
            <p class="text-[26px] font-semibold tex-center">
            <span>Unleash The <h6 class="inline text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">German You</h6></span>       
            </p>
        </div>
    </div>
</div>

    <div class="flex flex-col px-4 max-w-[700px] mx-auto">
        <button class="mt-6 text-slate-100 px-2 py-1">
            <a href={downloadLink} onclick="fathom.trackGoal('EQAQD10G', 40);">
            <span>Explore Free Lesson</span>
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
        padding-top: 45px;
        
    }

    h1 {
        font-size: 1.5em;
        font-weight: 500;
        line-height: 1.25;
        margin-top: 0.15rem;
        margin-bottom: 1.1rem;
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
        background-color: #FF9900;
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