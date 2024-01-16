<script>
    export let data;
</script>

{#each data.summaries as {id, title, subtitle, slug}}
    <a href="/portefølje/{slug}">{title}</a>
{/each}