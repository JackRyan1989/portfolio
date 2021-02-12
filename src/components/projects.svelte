<script>
  import PROJECTS from '../constants/projects'
</script>

<section>
  <h2>Projects</h2>
  <article>
  {#each PROJECTS as project}
    <div id={project.id}>
      <h3>{project.title}</h3>
      {@html project.role}
      <a href={project.url} target="_blank"><i class="fab fa-github-square"></i> Github</a>
    </div>
    {:else}
    <div>
        <p>Hey something went wrong loading projects!</p>
    </div>
  {/each}
</article>
</section>

<style>

    section {
        display: grid;
    }

    article {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: .5em;
    }

    div {
        padding: 1em;
    }

</style>
