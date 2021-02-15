<script>
</script>

<section>
  <h3>Contact Me</h3>
  <div tabindex="0" class="contact-links">
    <a tabindex="0" href="https://www.linkedin.com/in/johnanthonyryan/" target="_blank"
      ><span class="underline">LinkedIn</span></a
    >
    <a tabindex="0" href="mailto:jack.jackryan@protonmail.com"
      ><span class="underline">Email</span></a
    >
    <a tabindex="0" href="https://github.com/JackRyan1989" target="_blank"
      ><span class="underline">Github</span></a
    >
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
    margin: 2% 0%;
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

  .underline {
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
