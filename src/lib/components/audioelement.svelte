<script>

    export let displayname;
    export let pid;
    export let lang = 'de'; // default to German for backwards compatibility

    // Language code mapping for audio paths
    const langCodes = {
        'de': 'en_nt_de',
        'es': 'en_nt_es',
        'it': 'en_nt_it',
        'uk': 'en_nt_uk'
    };

    //audio url parts
    let kAudio;
    const kAudioBaseUrl = 'https://ddseu0ssi.mo.cloudinary.net/audio/';
    $: langPath = langCodes[lang] || 'en_nt_de';
    $: kAudioFullUrl = `${kAudioBaseUrl}${langPath}/phrase/${pid}`;

    function playAudio() {
        if (!kAudio) {
            return;
        }

        if (kAudio.readyState === 0) {
            kAudio.load();
        }

        kAudio.play().catch(err => {
            console.error('Audio playback failed:', err);
        });
    }
</script>
    <!-- svelte-ignore a11y-media-has-caption -->
    <div class="kaudio" on:click={playAudio} on:keydown={(e) => e.key === 'Enter' && playAudio()} role="button" tabindex="0">
        <p class="kaudiotext">{displayname}</p>
        <audio bind:this={kAudio} preload="auto">
            <track kind="captions">
            <source src={kAudioFullUrl} type="audio/mpeg">
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