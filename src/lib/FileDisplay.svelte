<script lang="ts">
  import FileObject from "./FileObject.svelte";
  import type { IFile, IFolder } from "../../types/files";
  let {
    reslist = [],
    loading = true,
    currentDir = $bindable(),
    emit = function () {
      console.log(currentDir);
    },
  }: {
    reslist: (IFile | IFolder)[];
    loading: boolean;
    currentDir: string;
    emit: () => any;
  } = $props();
  let spots = $state(0);
  const originDir = currentDir;
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
    {#if currentDir != originDir}
      <FileObject
        name="<-"
        file={false}
        onclick={function () {
          const spliced = currentDir.split("/").slice(0, -2);
          console.log(spliced);
          currentDir = spliced.join("/") + "/";
          emit();
        }}
      ></FileObject>
    {/if}
    {#each reslist as res}
      <FileObject
        name={res.name}
        file={res.type == "file"}
        onclick={function () {
          if (res.type == "folder") {
            currentDir += res.name + "/";
            emit();
          } else {
            const tmp = document.createElement("a");
            tmp.href = currentDir + res.name;
            tmp.click();
          }
        }}
      ></FileObject>
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
