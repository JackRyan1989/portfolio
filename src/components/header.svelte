<script>

  export let makeSmall;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Open+Sans:wght@400;800&family=Roboto&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class={makeSmall ? "shrinko" : "expando"}>
  <h1 class={makeSmall ? "shrink" : "expand"}>Hi.<span> I'm Jack.</span></h1>
</header>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  header {
    background-color: #fff;
    height: 100vh;
    opacity: 1;
    z-index: 2;
  }

  .expando {
    height: 100vh;
  }

  .expand {
    font-size: 20em;
    text-align: center;
  }

  .shrinko {
    height: 10vh;
    transition-property: height;
    transition-duration: 0.1s;
  }

  .shrink {
    font-size: 2.5em;
    text-align: left;
    transition-property: font-size, text-align;
    transition-duration: 0.5s, 0.5s;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    padding: 0.25em;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: thin #000;
  }

  h1 span {
    font-size: 0.5em;
  }
</style>
