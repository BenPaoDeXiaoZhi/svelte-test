<script lang="ts">
let { reslist=[] } = $props()
import Folder from './Folder.svelte'
</script>

<div class="container">
{#each reslist as res}
  {#if res.type == "folder"}
    <Folder name={res.name} />
  {:else if res.type== "file"}
    <div>{res.name}</div>
  {/if}
{/each}
</div>

<style>
.container {
  border-style: solid;
  border-radius: 0.2rem;
  border-color: gray;
  display: flex;
  flex-direction: column;
}
</style>