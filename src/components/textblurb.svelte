<script>
  import Contact from "./contact.svelte";
  export let makeSmall;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section class={makeSmall ? "fadeIn" : null}>
  {#if makeSmall}
  <article>
    <h2>Howdy!</h2>
    <br />
    <p>
      In February 2020 I graduated from the UPenn LPS Coding Bootcamp. Shortly
      there after I started my first job as a web developer at Drexel
      University; where I currently work as a frontend developer. I'm passionate
      about quality and accessible design and code. I'm also the proud father of
      a human and two cats!
      <br />
      <br />
      This site serves as both a portfolio to demonstrate recent and not so recent
      past work and also a sandbox for me to play in. I also put in a little bit
      about my past life in cognitive-neuroscience research, because that was neat
      too.
    </p>
      <div>
        <Contact />
      </div>
    </article>
    {/if}
</section>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  section {
    display: grid;
    padding: 0.25em 0.5em;
    font-family: Nunito, sans-serif;
    font-weight: 200;
    opacity: 0;
  }

  .fadeIn {
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(.97,-0.01,.93,.43);
  }

</style>
