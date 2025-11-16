<script lang="ts">
  import Banner from "./lib/Banner.svelte";
  import svelteIcon from './assets/svelte.svg'
  import FileDisplay from './lib/FileDisplay.svelte'
  let reslist=$state([])
</script>

<Banner --bg-color="#196090">
  <img src={svelteIcon} alt="icon" />
  <div>file manager</div>
</Banner>
<FileDisplay reslist={reslist} />
<button onclick={(e)=>reslist.push({
  type:"folder",
  name:"abc"+reslist.length
})}>add abc file</button>

<style>
  img {
    height: 100%;
    display: inline;
  }
</style>