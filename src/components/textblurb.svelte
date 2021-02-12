<script>
    import ABOUT from '../constants/aboutme'
</script>

<section>
  <h2>About Me</h2>
  <section>
    {@html ABOUT.aboutme}
  </section>
  <section>
        {@html ABOUT.contact.linkedin}
        {@html ABOUT.contact.github}
        {@html ABOUT.contact.protonmail}
    </section>
</section>

<style>
    section {
        display: grid;
    }

    a:hover {
        text-decoration: none;
    }
</style>
