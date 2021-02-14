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
  const delayedTextShrink = function () {
    makeSmall = true;
  };
  onMount(() => {
    let timer = setTimeout(() => {
      delayedTextShrink();
    }, 1500);
    return () => clearTimeout(timer);
  });

  const onClickChangeView = function (setView) {
    console.log("Clicked")
    switch (setView) {
      case "about":
        setAbout = true;
        setProjects = false;
        setContact = false;
        break;
      case "projects":
        setAbout = false;
        setProjects = true;
        setContact = false;
        break;
      case "contact":
        setAbout = false;
        setProjects = false;
        setContact = true;
        break;
    }
  };
</script>

<div class="wrapper">
  <div class="header">
    <Header {makeSmall} />
  </div>
  <main class="content" role="main">
    {#if setAbout}
    <section name="text" id="first">
      <Text onClickChangeView={onClickChangeView}/>
    </section>
    {:else if setProjects}
    <section name="projects" id="second">
      <Projects onClickChangeView={onClickChangeView} />
    </section>
    {:else if setContact}
    <section name="contact" id="third">
      <Contact onClickChangeView={onClickChangeView} />
    </section>
    {/if}
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

  #first, #second, #third {
    width: 75%;
    margin: 25% 0px;
  }
  
</style>
