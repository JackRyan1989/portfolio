<script>
  import Header from "./components/header.svelte";
  import Text from "./components/textblurb.svelte";
  import Projects from "./components/projects.svelte";
  import Contact from "./components/contact.svelte";
  import { onMount } from "svelte";

  let makeSmall = false;
  let setProjects = false;
  let setContact = false;
  let setAbout = true;
  const delayedTextShrink = function() {
    makeSmall = true;
  }
  onMount(() => {
    let timer = setTimeout(() => {
      delayedTextShrink()
    },
      1500
    );
    return () => clearTimeout(timer)
  });

  const onClickAbout = function() {
    setAbout = !setAbout;
  }

  const onClickProjects = function() {
    setProjects = !setProjects;
  }

  const onClickContact = function() {
    setContact = !setContact;
  }

</script>

<div class="wrapper">
  <div class="header">
    <Header makeSmall={makeSmall} />
  </div>
  <main class="content" role="main">
    <section name="text" id="first">
      <Text />
    </section>
    <section name="projects" id="second">
      <Projects />
    </section>
    <section name="contact" id="third">
      <Contact />
    </section>
  </main>
</div>

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

  .wrapper {
    display: grid;
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
    grid-template-rows: min-content min-content 1fr;
    gap: 1px;
  }

  .header {
    grid-column: 1 / -1;
    position: fixed;
    top: 0;
  }

  .content {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  #first {
    width: 75%;
    margin: 25% 0px;
  }
  #second {
    width: 75%;
    margin: 5% 0px;
  }
</style>
