<script lang="ts">
  let { reslist = [], loading = true } = $props();
  import Folder from "./Folder.svelte";
  let spots = $state(0);
  setInterval(() => {
    spots++;
    spots = spots % 4;
  }, 500);
</script>

<div class="container">
  {#if loading}
    <div class="loadhint">
      loading{".".repeat(spots) + " ".repeat(4 - spots)}
    </div>
  {:else}
    {#each reslist as res}
      {#if res.type == "folder"}
        <Folder name={res.name} />
      {:else if res.type == "file"}
        <div>{res.name}</div>
      {/if}
    {/each}
  {/if}
</div>

<style>
  .container {
    border-style: solid;
    border-radius: 0.2rem;
    border-color: gray;
    display: flex;
    flex-direction: column;
  }
  .loadhint {
    padding-left: 45%;
    width: 100%;
  }
</style>
