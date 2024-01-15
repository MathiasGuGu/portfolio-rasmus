<script>
  import "../app.css";
  import Header from "../lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte";
</script>

<body class="bg-black relative
 text-white min-h-[100vh]">
 <Header />
 <main class="pb-[181px] sm:pb-[136px]">
<slot />
</main>
<Footer />
</body>