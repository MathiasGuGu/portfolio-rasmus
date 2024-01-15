<script>

function showMenu() {
   document.querySelector("nav").classList.remove("hidden")
   document.querySelector("#close-btn").classList.remove("hidden");
   document.querySelector("#menu-btn").classList.add("hidden")
}

function hideMenu() {
    document.querySelector("nav").classList.add("hidden")
    document.querySelector("#close-btn").classList.add("hidden");
    document.querySelector("#menu-btn").classList.remove("hidden")
}
</script>

<header class="flex justify-between md:items-center lg:grid lg:grid-cols-3 lg:py-5 lg:px-7">
        <button id="menu-btn" class="p-5 md:hidden" on:click={showMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21M3 12H21M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
        </button>
        <button id="close-btn" class="p-5 hidden z-[1001]" on:click={hideMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5459 17.9541C19.7572 18.1654 19.876 18.4521 19.876 18.751C19.876 19.0499 19.7572 19.3365 19.5459 19.5479C19.3346 19.7592 19.0479 19.8779 18.749 19.8779C18.4501 19.8779 18.1635 19.7592 17.9521 19.5479L12 13.5938L6.0459 19.546C5.83455 19.7573 5.54791 19.8761 5.24902 19.8761C4.95014 19.8761 4.66349 19.7573 4.45215 19.546C4.2408 19.3346 4.12207 19.048 4.12207 18.7491C4.12207 18.4502 4.2408 18.1636 4.45215 17.9522L10.4062 12L4.45402 6.04598C4.24268 5.83463 4.12395 5.54799 4.12395 5.2491C4.12395 4.95022 4.24268 4.66357 4.45402 4.45223C4.66537 4.24089 4.95201 4.12215 5.2509 4.12215C5.54978 4.12215 5.83643 4.24089 6.04777 4.45223L12 10.4063L17.954 4.45129C18.1654 4.23995 18.452 4.12122 18.7509 4.12122C19.0498 4.12122 19.3364 4.23995 19.5478 4.45129C19.7591 4.66264 19.8778 4.94928 19.8778 5.24817C19.8778 5.54705 19.7591 5.8337 19.5478 6.04504L13.5937 12L19.5459 17.9541Z" fill="white"/>
                </svg>
                
                
        </button>
    <nav class="hidden md:flex gap-10 md:gap-0 absolute md:static h-screen md:h-full w-full flex flex-col md:flex-row justify-center md:justify-start items-center z-[1000] bg-black">
        <a on:click={hideMenu} class="hover:opacity-50 transition-all md:p-5" href="/">Hjem</a>
        <a on:click={hideMenu} class="hover:opacity-50 transition-all whitespace-nowrap md:p-5" href="/om">Om meg</a>
        <a on:click={hideMenu} class="hover:opacity-50 transition-all md:p-5" href="/portefølje">Portefølje</a>
    </nav>
    <a class="justify-self-center" href="/">
        <svg class="max-w-[40px] max-h-[40px] lg:max-w-[200px] lg:max-h-[200px] m-5" width="101" height="96" viewBox="0 0 101 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_20)">
            <path d="M56.4083 68.7529L41.5884 43.9536C43.4925 43.3323 45.2628 42.5705 46.8901 41.68L43.2762 36.5323C42.7027 37.3391 42.0601 38.08 41.3465 38.7551C40.7324 39.3368 40.0678 39.8714 39.3506 40.3574C38.6426 40.8374 37.8863 41.2695 37.0751 41.6531C36.4383 41.9559 35.7702 42.2288 35.0707 42.4718C32.2445 43.4527 28.896 43.9536 25.0103 43.9536H20.5085V1.73084H26.2178C36.7834 1.73084 42.65 5.82579 45.2343 12.6893L57.4791 30.2078C58.5756 27.535 59.1519 24.5951 59.1519 21.4572C59.1519 10.0374 48.8347 0 29.5129 0H0.199097V1.03776C4.58998 1.49981 9.5316 3.11327 9.5316 10.4994V70.1383C9.5316 77.5207 4.58998 79.2516 0.199097 79.7136V80.7514H30.0608V79.7136C25.2302 79.2516 20.5085 77.5207 20.5085 70.1383V45.7981H29.9491L34.9768 54.2669L36.9463 57.588L39.399 61.7159L41.4034 65.0968L50.6989 80.7529H69.9118V79.7151C65.9606 79.8288 60.1424 75.0983 56.4083 68.7536V68.7529ZM46.5478 18.1189C46.7563 19.6815 46.8559 21.3346 46.8559 23.0714C46.8559 27.6613 46.0597 31.5282 44.4324 34.6385L48.6404 40.6318C52.0266 38.4359 54.6814 35.6194 56.4773 32.3193L46.5478 18.1181V18.1189Z" fill="white"/>
            <path d="M39.3506 40.3566C38.6426 40.8366 37.8863 41.2688 37.0751 41.6523L36.9463 57.5873L39.399 61.7151L39.3506 40.3566ZM73.7946 13.748V14.7858C81.1519 15.0168 86.3105 19.9783 86.4187 31.8609L86.6385 75.4662L57.9331 34.4045L57.7588 34.1555L56.4773 32.32L46.5478 18.1189L46.2482 17.6897L43.4932 13.748H26.0385V14.7858C32.2965 16.0576 37.2352 22.6303 37.1271 35.2052L37.0958 39.3062C37.5042 39.0841 37.8948 38.8441 38.2662 38.5921C38.6405 38.3372 39.0027 38.0673 39.3456 37.7794L39.3229 27.3607L43.1054 32.7454L44.4331 34.6385L48.6411 40.6318L49.8315 42.3267L49.8856 42.4075L87.518 95.9992H88.7255L89.0535 31.8602C89.0535 18.2467 93.6642 15.0161 100.801 14.785V13.7473H73.7939L73.7946 13.748ZM39.4339 77.3106L39.4083 65.7017L37.7041 62.8247L36.9165 61.4991L36.7998 76.2729C36.6888 90.5787 31.7493 93.117 25.2722 93.4617V94.4994H53.1558V93.4617C46.0213 92.9996 39.4353 88.6168 39.4353 77.3106H39.4339Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_4_20">
            <rect width="100.602" height="96" fill="white" transform="translate(0.199097)"/>
            </clipPath>
            </defs>
            </svg>
    </a>
</header>
