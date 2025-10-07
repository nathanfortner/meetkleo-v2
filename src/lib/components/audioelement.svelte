<script>

    export let displayname;
    export let pid;

    displayname;
    pid;


    //audio url parts
    let kAudio;
    let kAudioUrl = 'https://ddseu0ssi.mo.cloudinary.net/audio/en_nt_de/phrase/'
    //let kAudioUrl = 'https://ddseu0ssi.mo.cloudinary.net/audio/en_nt_de/phrase/'
    // https://d302naonb9wq01.cloudfront.net 
    // let kAudioTag = '_0';
    // let kAudioExtentsion = ".mp3"
    let kAudioFullUrl = `${kAudioUrl}${pid}`;

    function playAudio() {
        kAudio.play();
    }
</script>
    <!-- svelte-ignore a11y-media-has-caption -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="kaudio" on:click={playAudio}>
        <p class="kaudiotext">{displayname}</p>
        <audio bind:this={kAudio} type="audio/mpeg">
            <track kind="captions">
            <source src={kAudioFullUrl}>
            <p>
                    Download <a href={`${kAudioFullUrl}`}>MP3</a>
            </p>
        </audio>
    </div>

<!-- style -->
<style>
 
    .kaudio {
        margin-left: auto;
        margin-right: auto;
        height: fit-content;
        width: fit-content;
        cursor: pointer;
    }

     .kaudiotext {
        font-size: 16px;
        font-weight: 700;
        color: var(--k_deeppurple);
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-decoration-style: wavy;
        text-decoration-color: hsl(288, 64%, 27%, 50%);
    }

    @media screen and (min-width: 600px) {
        .kaudiotext {
            font-size: 18px;
        }

}
</style>