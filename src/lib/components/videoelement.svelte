<script>

    export let displayname;
    export let pid;

    displayname;
    pid;


    //audio url parts
    let kAudio;
    let kAudioUrl = 'https://ddseu0ssi.mo.cloudinary.net/audio/en_nt_de/phrase/' 
    // let kAudioTag = '_0';
    // let kAudioExtentsion = ".mp3"
    let kAudioFullUrl = `${kAudioUrl}${pid}`;

    function playAudio() {
        kAudio.play();
    }
</script>

    <div class="kaudio" on:click={playAudio}>
        <p class="kaudiotext">{displayname}</p>
        <audio bind:this={kAudio}>
            <source src={kAudioFullUrl}>
            <p>
                    Download <a href={`${kAudioFullUrl}`}>MP3</a>
            </p>
        </audio>
    </div>

    <video
    autoplay
    loop
    playsinline
    muted
    poster="./video/f1.jpg"
    src="./video/resizedvid.mp4"
    type="video/mp4"
    width="300px"
    >

    Download the or <a href="./video/resizedvid.mp4">MP4</a> video.

</video>

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