<script>
</script>

<section>
  <h2>Howdy!</h2>
  <section>
    <p>
      In February 2020 I graduated from the UPenn LPS Coding Bootcamp. Shortly
      there after I started my first job as a web developer at Drexel
      University; where I currently work as a frontend developer.
    </p>
    <p>
      I'm passionate about quality and accessible design and code. I'm also the
      proud father of a human and two cats!
    </p>
    <p>
      This site serves as both a portfolio to demonstrate past work and also a
      sandbox for me to play in.
    </p>
  </section>
  <section>
    <h2>Hit Me Up!</h2>
    <div class="links">
      <a href="https://www.linkedin.com/in/johnanthonyryan/" target="_blank"
        >LinkedIn</a
      >
      <a href="mailto:jack.jackryan@protonmail.com">Email</a>
      <a href="https://github.com/JackRyan1989" target="_blank">Github</a>
    </div>
  </section>
</section>

<style>
  section {
    display: grid;
  }

  div.links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  div.links a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 25%;
    padding: 0.5em;
    margin: 0.5em;
    min-height: 4em;
    text-decoration: none;
    text-align: center;
    border: solid lightgrey 1px;
    color: #000;
    transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(1deg);
    box-shadow: 2em 4em 6em -2em rgba(0, 0, 0, 0.9),
      1em 2em 3.5em -1.5em rgba(0, 0, 0, .5);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    border-radius: 0.5em;
  }

  div.links a:hover {
    transform: rotate3d(0, 0, 0, 0deg) rotate(0deg);
  }
</style>
