<script>
    import Intro from "../components/homepage/Intro.svelte"
    import ExperienceList from "../components/homepage/ExperienceList.svelte"
	import Headshot from "../components/homepage/Headshot.svelte"
</script>

<div>
    <Intro/>
	<Headshot/>
    <ExperienceList/>
</div>

<style>
    div {
        text-align: center;
        width: 800px;
        margin: auto;
    }
</style>