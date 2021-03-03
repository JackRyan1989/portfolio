<script>
  export let makeSmall;
  export let setAbout;
  export let onClickChangeView = () => {};
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class={makeSmall ? "shrinko" : "expando"}>
  <h1 class={makeSmall ? "shrink" : "expand"}>Hi.<span> I'm Jack.</span></h1>
  <div class={makeSmall ? "links" : "no-links"}>
    {#if !setAbout}
      <button
        role="navigation"
        aria-labelledby="aboutLink"
        tabindex="0"
        on:click={() => onClickChangeView("about")}
        ><span id="aboutLink" class="underline">About</span></button
      >
    {:else if setAbout}
      <button
        role="navigation"
        aria-labelledby="projectsLink"
        tabindex="0"
        on:click={() => onClickChangeView("projects")}
        ><span id="projectsLink" class="underline">Projects</span></button
      >
    {/if}
  </div>
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
    border-bottom: solid 1px rgba(211, 211, 211, 0)
  }

  .expand {
    font-size: 20em;
    text-align: center;
  }

  .shrinko {
    height: 10vh;
    border-bottom: solid 1px rgba(211, 211, 211, .4);
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

  .no-links {
    display: none;
    opacity: 0;
  }

  .links {
    position: fixed;
    top: 0;
    right: 0;
    margin: 2%;
    display: block;
    font-family: "Nunito", sans-serif;
    font-weight: 200;
  }

  .links button {
    padding: 2%;
  }

  .underline {
    font-size: 1.50rem;
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: black;
    z-index: 1;
    transition-property: color;
    transition-duration: 0.25s;
  }

  .underline:hover {
    color: white;
  }

  .underline::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.025em;
    height: 0.1em;
    width: 100%;
    padding: 0px 1px;
    background: black;
    z-index: -1;
    transition: height 0.25s cubic-bezier(0.6, 0, 0.4, 1);
  }

  .underline:hover::after {
    height: 1.1em;
  }
</style>
