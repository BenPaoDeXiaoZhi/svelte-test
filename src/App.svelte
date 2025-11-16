<script lang="ts">
  import Banner from "./lib/Banner.svelte";
  import FileDisplay from './lib/FileDisplay.svelte'
  let reslist=$state([])
</script>

<Banner --bg-color="#196090">
  <img src={svelteIcon} />
  <div>file manager</div>
</Banner>
<FileDisplay reslist={reslist}>
<button onclick={(e)=>reslist.push({
  type:"folder",
  name:"abc"+reslist.length
})}>

<style>
  img {
    height: 100%;
    display: inline;
  }
</style>