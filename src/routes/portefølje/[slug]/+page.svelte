<script>
    import TextBox from "$lib/components/TextBox.svelte"
    import NextButton from "$lib/components/NextButton.svelte"
    export let data;
</script>

<h1>{data.casestudy.title}</h1>
<NextButton direction="left" href="/portefølje">TILBAKE</NextButton>
<TextBox>{data.casestudy.content}</TextBox>

<h2>Emballasjedesign:</h2>
<img src={data.casestudy.cover} alt="{data.casestudy.title} - {data.casestudy.subtitle}"/>

<h2>Stanseriss:</h2>
<img src={data.casestudy.stanseriss} alt="Stanseriss av {data.casestudy.title}">

<h2>Annonser:</h2>
{#each data.casestudy.annonser as annonse}
    <img src={annonse} alt="Annonse plakat av {data.casestudy.title}">
{/each}