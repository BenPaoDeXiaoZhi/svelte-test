<script lang="ts">
  import Banner from "./lib/Banner.svelte";
  import svelteIcon from.'./assets/svelte.svg'
</script>

<Banner --bg-color="#196090">
<img src={svelteIcon} />
file manager
</Banner>

<style>
img {
  height: 100%;
  display: inline;
}
</style>