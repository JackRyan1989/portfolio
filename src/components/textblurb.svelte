<script>
  export let onClickChangeView = () => {};
</script>

<section>
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
    <div class="links">
      <button on:click={() => onClickChangeView("projects")}>My Projects</button>
      <button on:click={() => onClickChangeView("contact")}>Contact</button>
    </div>
  </article>
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
  }

  .links {
    padding: .5em 0;
    display: flex;
    flex-direction: row;
  }
  
  .links button:nth-child(even) {
    padding: 0 .5em;
  }

</style>
