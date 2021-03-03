<script>
  import PROJECTS from "../constants/projects";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section>
  <h2>Projects</h2>
  <article id="container" role="group">
    <div class="item-grid">
      {#each PROJECTS as project}
        <a
        id = {project.id}
          role="link"
          tabindex="0"
          class="item"
          href={project.url}
          target="_blank"
        >
          <div class="item-content">
            <div class="title">
              <h3 class="item-heading">{project.title}</h3>
              <div class="image">
                <img role="img" src={project.image} alt={project.alt} />
              </div>
            </div>
            <div class="tag-tasks-container">
              <div class="tags">
                <ul>
                  {#each project.tech as tech}
                    <li class="item-category">{tech}</li>
                  {/each}
                </ul>
                <div class="projects">
                  {@html project.tasks}
                </div>
              </div>
            </div>
          </div>
        </a>
      {:else}
        <div>
          <p>Hey something went wrong loading projects!</p>
        </div>
      {/each}
    </div>
  </article>
</section>

<style>
  :root {
    --text-light: rgba(255, 255, 255, 0.6);
    --text-lighter: rgba(255, 255, 255, 0.9);
    --spacing-s: 8px;
    --spacing-m: 16px;
    --spacing-l: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;
    --width-container: 1200px;
  }

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
    font-family: "Nunito", sans-serif;
    font-weight: 200;
    padding: 0.25em 0.5em;
  }

  #container {
    min-height: 100%;
    height: 60vh;
    overflow-y: scroll;
    overflow-x: visible;
    z-index: 3;
    padding-left: 2%;
    scrollbar-width: none;
  }

  #container::-webkit-scrollbar {
    display: none;
}

  h2 {
    margin: 0px 0px 2% 0;
  }

  .item-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: var(--spacing-l);
    grid-row-gap: var(--spacing-l);
    max-width: var(--width-container);
    width: 100%;
  }

  .item {
    position: relative;
    height: 100%;
    border-radius: 8px;
  }

  .item:hover {
    transform: scale(1.05) translateZ(0);
    scale: 103%;
    transition-property: transform, scale;
    transition-duration: 0.5s;
  }

  .item-grid:hover > .item:not(:hover) {
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(1px);
    transition-property: filter;
    transition-duration: 0.5s;
  }

  ul {
    list-style: none;
  }
  
  .item-category {
    display: inline-flex;
    font-size: 0.85em;
    font-style: italic;
    padding: 1%;
    margin: 2%;
  }

  .item-category:hover {
    scale: 110%;
    color: steelblue;
    transition-property: scale, color;
    transition-duration: 0.25s;
  }

  .item-category::before {
    content: "#";
    vertical-align: baseline;
    opacity: 1;
  }


  .item-content {
    display: flex;
    flex-direction: row;
    justify-content: center; 
    min-width: 25%;
    padding: 0.5em;
    margin: 0.5em;
    min-height: 4em;
    text-decoration: none;
    color: #000;
    border-radius: 0.5em;
  }

  a:hover {
    text-decoration: none;
  }

  .tag-tasks-container {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    width: 100%;
  }

  .title {
    padding: 0.25em;
    margin: 0 0 2% 0;
    text-decoration: underline;
    width: 100%;
  }

  .tags {
    display: flex;
    flex-direction: row;
  }

  .tags,
  .projects {
    padding: 0 1em;
  }

  .image {
    margin: 2% 0;
  }
  .image img {
    object-fit: contain;
    width: 25%;
    height: auto;
  }
</style>
