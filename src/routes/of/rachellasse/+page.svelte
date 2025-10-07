<script>
    let downloadLink = `https://apps.apple.com/us/app/kleo-speak-the-language/id1535893500?ppid=766dd917-548c-46e0-9308-3a9b72bf95b7`;

    let WEB_IMG_BASE_URL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
	let IMG_CLOUD_RESIZE = `?tx=c_fill,g_auto,h_300,w_550`;
    let articleimage = 'offers/r_cover_1162v3_F.jpg'
</script>

<svelte:head>
    <title>YT Lass</title>
    <meta name="description" content="So excited to share" />
    <meta name="robots" content="noindex">
</svelte:head>


<section>
    <div class="flex flex-col flex-auto mx-auto max-w-lg">
        <h1 class="mx-auto">Willkommen!</h1>
        <img class="cover-image" src={`${WEB_IMG_BASE_URL}${articleimage}`} width="647px" height="350px" alt='Rachel from Rachellasse channel smiling warmly.'>
        <div class="mx-auto text-left p-4">
            <p class="py-2">Hallo! You know I feel so lucky having Lasse to help me learn German. I can always ask him questions, and he hasn’t gotten tired of me (yet).</p>
            <p class="py-2">Recently, I’ve also been practicing my German with Kleo, and I love it! Like with Lasse, I can try speaking over and over and get instant feedback that really helps me. I’m more comfortable thinking on my feet, and my pronunciation is improving too (just ask Lasse!).</p>
            <p class="py-2"><b>Join in the fun using our code: RL23</b></p>
        </div>
        <button class="my-2 font-semibold bg-[#FFF563] py-3 px-8 rounded-xl mx-auto shadow-lg">
            <a href={downloadLink} onclick="fathom.trackGoal('SBLQ8WYI', 10);">
                <span>Try it on iPhone</span>
                <span>Download now</span>
            </a>
        </button>
    </div>
    <div class="aspect-square object-cover max-w-[400px] mt-4 mx-auto">
        <img src="https://ddseu0ssi.mo.cloudinary.net/web/images/offers/mar_phv3_F.jpg" alt="Italian teacher asking what your name is.">
    </div>

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
                    125
                </span>
                <span class="text-lg">
                    Countries
                </span>
            </div>
        </div>
    </div>

    <div class="flex flex-col mx-auto">
        <button class="my-8 font-semibold bg-[#FFF563] py-3 px-8 rounded-xl mx-auto shadow-lg">
            <a href={downloadLink} onclick="fathom.trackGoal('SBLQ8WYI', 1);">
                <span>Try it on iPhone</span>
                <span>Download now</span>
            </a>
        </button>
    </div>
</section>


<style>
    section {
        color: rgb(31, 31, 31);
        font-size: 1.35rem;
        line-height: 1.3;
        font-weight: 500;
        /* font-family: 'Manrope'; */
        letter-spacing: .05rem;
        background: white;
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