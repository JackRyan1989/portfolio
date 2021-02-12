<script>
  import PROJECTS from "../constants/projects";
</script>

<section>
  <h2>Projects</h2>
  <article>
    {#each PROJECTS as project}
      <div class="item-grid" id={project.id}>
        <a class="item" href={project.url} target="_blank">
          <div class="item-content">
            <div>
              <h3 class="item-heading">{project.title}</h3>
            </div>
            <div>
              <span class="item-category">{@html project.tech}</span>
            </div>
            <div>
              {@html project.tasks}
            </div>
          </div>
        </a>
      </div>
    {:else}
      <div>
        <p>Hey something went wrong loading projects!</p>
      </div>
    {/each}
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
  }

  article {
    align-items: flex-start;
    display: flex;
    min-height: 100%;
    justify-content: center;
    padding: 0px var(--spacing-l) var(--spacing-xxl) var(--spacing-l);
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
  }

  .item:hover {
    transform: scale(1.05) translateZ(0);
  }

  .item-grid:hover > .item:not(:hover) {
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }

    .item-category {
      font-size: .85em;
      font-style: italic;
    }


  .item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 25%;
    padding: 0.5em;
    margin: 0.5em;
    min-height: 4em;
    text-decoration: none;
    border: solid lightgrey 1px;
    color: #000;
    border-radius: 0.5em;
  }

  a:hover {
    text-decoration: none;
  }
</style>
