<script>
    import TextBox from "$lib/components/TextBox.svelte"
    import NextButton from "$lib/components/NextButton.svelte"
    export let data;
</script>

<article class="max-w-[1200px] m-auto p-5 lg:p-10">

    <div class="flex flex-col items-center gap-10 lg:gap-20 w-full">
        <h1 class="text-4xl sm:text-5xl font-bold">{data.casestudy.title}</h1>

        <div class="w-full grid gap-10 lg:gap-0 items-center lg:grid lg:grid-cols-4">
          
                <NextButton direction="left" href="/portefølje">TILBAKE</NextButton>
           
            <div class="lg:col-start-2 lg:col-span-2">
            <TextBox>{data.casestudy.content}</TextBox>
        </div>
        </div>
    </div>
    
    
    <h2>Emballasjedesign:</h2>
    <img src={data.casestudy.cover} alt="{data.casestudy.title} - {data.casestudy.subtitle}"/>
    
    <h2>Stanseriss:</h2>
    <img src={data.casestudy.stanseriss} alt="Stanseriss av {data.casestudy.title}">
    
    <h2>Annonser:</h2>
    {#each data.casestudy.annonser as annonse}
        <img src={annonse} alt="Annonse plakat av {data.casestudy.title}">
    {/each}

</article>

