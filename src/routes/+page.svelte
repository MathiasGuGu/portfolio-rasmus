<script>
    import NextButton from "$lib/components/NextButton.svelte";
</script>

<div class="p-5 flex flex-col md:flex-row max-w-[1200px] m-auto lg:p-10 md:absolute gap-8 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full justify-center">
    <h1 class="text-2xl lg:text-4xl font-serif flex flex-col">Mitt navn er <span>Rasmus Nilsen</span></h1>
    <img class="self-center" src="/assets/Ellipse_1.png" alt="Rasmus smiler mens han holder armen sin opp mot hodet">
    <div class="self-end">
        <NextButton href="/om">Om meg</NextButton>
    </div>
    
</div>
