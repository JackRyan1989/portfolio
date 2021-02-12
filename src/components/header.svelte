<script>
  import { onMount } from 'svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Open+Sans:wght@400;800&family=Roboto&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <h1>Hi.<span> I'm Jack.</span></h1>
</header>

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
  
  header {
    background-color: #FFF;
    height: 100vh;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    padding: 0.25em;
    font-size: 20em;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: thin #000;
    text-align: center;
  }

  h1 span {
    font-size: .5em;
  }

</style>
