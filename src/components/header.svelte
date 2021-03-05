<script>
  export let makeSmall;
  export let mediaWidth;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class={makeSmall ? "shrinko" : "expando"}>
  <h1 class={makeSmall ? "shrink" : "expand"}>
    Hi.
    {#if mediaWidth < 600}
      <br class="hide" />
    {/if}
    <span> I'm Jack.</span>
  </h1>
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
    height: 100vh;
    width: 100%;
    opacity: 1;
    z-index: 2;
  }

  .expando {
    height: 100vh;
    border-bottom: solid 1px rgba(211, 211, 211, 0);
  }

  .expand {
    font-size: 20em;
    text-align: center;
  }

  .shrinko {
    height: 10vh;
    border-bottom: solid 1px rgba(211, 211, 211, 0.4);
    transition-property: height, border-bottom;
    transition-duration: 0.1s, 0.3s;
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

  .hide {
    display: none;
  }

  /* Phone Screen Sizing */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    .expand {
      font-size: 10em;
      max-width: 40ex;
    }

    h1 span {
      font-size: 0.5em;
    }
  }

  /* Tablet Screen Sizing */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    .expand {
      font-size: 10em;
      max-width: 40ex;
    }

    .shrinko {
      height: 6vh;
    }

    h1 span {
      font-size: 0.5em;
    }
  }

</style>
