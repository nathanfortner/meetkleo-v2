<script>
 import Nav from '$lib/components/nav.svelte';
 import Footer from '$lib/components/footer.svelte';
 import "../app.css";
</script>

<nav class="container mx-auto max-w-screen-xl sticky top-0 backdrop-blur-sm z-30">
   <Nav />	
</nav>

<main class="relative container mx-auto max-w-screen-xl z-2">
   <slot></slot>
</main>
   
<footer class="relative container mx-auto max-w-screen-xl">
   <Footer />
</footer>