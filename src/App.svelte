<script>
  import Header from "./components/header.svelte";
  import Text from "./components/textblurb.svelte";
  import Projects from "./components/projects.svelte";
  import Contact from "./components/contact.svelte";
  import Navlinks from "./components/nav-links.svelte";
  import { onMount } from "svelte";

  let makeSmall = false;
  let setProjects = false;
  let setAbout = true;
  let mediaWidth = window.innerWidth;
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
    switch (setView) {
      case "about":
        setAbout = true;
        setProjects = false;
        break;
      case "projects":
        setAbout = false;
        setProjects = true;
        break;
    }
  };
</script>

<div class="wrapper">
  <div class="header">
    <Header {makeSmall} {mediaWidth}/>
  </div>
    <div class="sidebar">
      <Navlinks {makeSmall} {onClickChangeView} {setAbout} />
      <Contact />
    </div>
    <main class="content" role="main">
      {#if setAbout}
        <section name="text" id="first">
          <Text {makeSmall} />
        </section>
      {:else if setProjects}
        <section name="projects" id="second">
          <Projects />
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
    grid-template-rows: min-content min-content 1fr min-content;
    gap: 1px;
  }

  .header {
    background-color: #fff;
    grid-column: 1 / -1;
    grid-row: 1/ 1;
  }

  .content {
    grid-column: 2 / 3;
    grid-row: 2 / 2;
    overflow: hidden;
  }

  #first {
    overflow-y: scroll;
  }

  #first,
  #second {
    width: 85%;
    margin: 2% 0px;
  }

  .sidebar {
    border-right: solid 1px rgba(211, 211, 211, .4);
  }

</style>
