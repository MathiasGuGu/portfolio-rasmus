<script>
  import "../app.css";
  import Header from "../lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte";
</script>

<body class="bg-black relative
 text-white min-h-[100vh] h-full">
 <Header />
 <main class="pb-[181px] sm:pb-[136px] h-full">
<slot />
</main>
<Footer />
</body>