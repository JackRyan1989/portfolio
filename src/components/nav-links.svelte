<script>
  export let makeSmall;
  export let setAbout;
  export let onClickChangeView = () => {};
</script>

<div class={makeSmall ? "links" : "no-links"}>
    {#if !setAbout}
      <button
        role="navigation"
        aria-labelledby="aboutLink"
        tabindex="0"
        on:click={() => onClickChangeView("about")}
        ><h3 id="aboutLink" class="underline">About</h3></button
      >
    {:else if setAbout}
      <button
        role="navigation"
        aria-labelledby="projectsLink"
        tabindex="0"
        on:click={() => onClickChangeView("projects")}
        ><h3 id="projectsLink" class="underline">Projects</h3></button
      >
    {/if}
  </div>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }
  .no-links {
    display: none;
    opacity: 0;
  }

  .links {
    margin: 1%;
    display: block;
    font-family: "Nunito", sans-serif;
    font-weight: 200;
  }

  .links button {
    padding: 1%;
  }

  .underline {
    font-size: 1.35rem;
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

  /* Phone Screen Sizing */
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    
    h3 {
      font-size: 1rem !important;
    }

    h3::after {
      width: 85%;
    }
}




</style>

