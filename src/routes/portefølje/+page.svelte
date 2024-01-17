<script>
    export let data;

</script>

<div class="p-5 lg:p-10 grid gap-10 sm:grid-cols-2 md:grid-cols-1 max-w-[1200px] m-auto">
{#each data.summaries as {title, subtitle, slug, cover}, i}

<div class="items-center md:grid md:grid-cols-2">
<figure class="peer-hover:opacity-100 select-none opacity-50 hidden md:block text-8xl {(i + 1) % 2 === 0 ? "order-2 text-right" : "order-1"}">
   {i+1}
</figure>
<a class="{(i + 1) % 2 === 0 ? "order-1" : "order-2"} peer hover:opacity-50 transition-all" href="/portefølje/{slug}">
    <h2 class="text-2xl md:text-3xl font-bold whitespace-nowrap">{title}</h2>
    <h3 class="mb-4">{subtitle}</h3>
    <img class="aspect-square object-cover w-full" src={cover} alt="{title} - {subtitle}">
</a>
</div>
{/each}
</div>