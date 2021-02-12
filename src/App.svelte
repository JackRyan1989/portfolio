
<script>
	import Header from "./components/header.svelte"
	import Text from "./components/textblurb.svelte"
	import Projects from "./components/projects.svelte"
</script>

<Header/>
<main role="main">
	<Text/>
	<Projects/>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		width: 75%;
		padding: .25em;
	}
</style>