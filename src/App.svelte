<script>
  import Header from "./components/header.svelte";
  import Text from "./components/textblurb.svelte";
  import Projects from "./components/projects.svelte";
  import Footer from "./components/footer.svelte"
</script>

<Header />
<main role="main">
  <Text />
  <Projects />
</main>

<Footer/>

<style>

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  main {
    display: grid;
    place-items: center;
  }
</style>
