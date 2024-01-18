<script>
    import TextBox from "$lib/components/TextBox.svelte"
    import NextButton from "$lib/components/NextButton.svelte"
    export let data;
</script>

<article class="max-w-[1200px] m-auto p-5 lg:p-10">

    <div class="flex flex-col items-center gap-10 lg:gap-20 w-full">
        <h1 class="text-4xl sm:text-5xl font-bold">{data.casestudy.title}</h1>

        <div class="w-full grid gap-10 lg:gap-0 items-center lg:grid lg:grid-cols-4">
          
                <NextButton direction="left" href="/portefolje">TILBAKE</NextButton>
           
            <div class="lg:col-start-2 lg:col-span-2">
            <TextBox>{data.casestudy.content}</TextBox>
        </div>
        </div>
    </div>
    
    
    <h2 class="text-2xl md:text-3xl font-bold mb-6 mt-16 md:mb-10">Emballasjedesign:</h2>
    <img class="w-full" src={data.casestudy.cover.src} alt="{data.casestudy.cover.alt}"/>
    
    <h2 class="text-2xl md:text-3xl font-bold mb-6 mt-16 md:mb-10">Stanseriss:</h2>
    <img src={data.casestudy.stanseriss} alt="Stanseriss av {data.casestudy.title}">
    
    <h2 class="text-2xl md:text-3xl font-bold mb-6 mt-16 md:mb-10">Annonser:</h2>
    <div class="flex flex-col md:flex-row gap-4 w-full">
    {#each data.casestudy.annonser as annonse}
        <img class="overflow-hidden" src={annonse.src} alt="{annonse.alt}">
    {/each}
    </div>
</article>

