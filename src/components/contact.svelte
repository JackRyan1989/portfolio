<script>
  export let onClickChangeView = () => {};
</script>

<section>
  <div class="contact-links">
    <a href="https://www.linkedin.com/in/johnanthonyryan/" target="_blank"
      >LinkedIn</a
    >
    <a href="mailto:jack.jackryan@protonmail.com">Email</a>
    <a href="https://github.com/JackRyan1989" target="_blank">Github</a>
  </div>
  <div class="links">
    <button on:click={() => onClickChangeView("about")}>About</button
    >
    <button on:click={() => onClickChangeView("projects")}>Projects</button>
  </div>
</section>

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

  section {
    display: grid;
  }

  div.contact-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  div.contact-links a {
    padding: 0.5em;
    min-height: 1em;
    text-decoration: none;
    text-align: center;
    color: #000;
    border-radius: 0.5em;
  }

  .links {
    padding: 0.5em 0;
    display: flex;
    flex-direction: row;
  }

  .links button:nth-child(even) {
    padding: 0 0.5em;
  }
</style>
