<script lang="ts">
  import Banner from "./lib/Banner.svelte";
  import svelteIcon from "./assets/svelte.svg";
  import FileDisplay from "./lib/FileDisplay.svelte";
  import RootInput from "./lib/RootInput.svelte";

  import type { IFile, IFolder } from "../types/files";
  let reslist: (IFile | IFolder)[] = $state([]);
  const defaultRoot = "https://files.schale.qzz.io/";
  let root = $state(defaultRoot);
  let loading = $state(true);
  function fetchFiles() {
    reslist = [];
    fetch(root + "index.json")
      .then((res) => {
        if (res.ok) return res.text();
        else {
          throw new Error("404");
        }
      })
      .then((raw) => {
        loading = false;
        const raw_list: { dir: string[]; files: string[] } = JSON.parse(raw);
        for (let dir of raw_list.dir) {
          reslist.push({
            type: "folder",
            name: dir,
          });
        }
        for (let fileName of raw_list.files) {
          reslist.push({
            type: "file",
            name: fileName,
          });
        }
        $state.snapshot(reslist);
      })
      .catch((e) => {
        loading = false;
        console.error(e);
      });
    loading = true;
  }
  fetchFiles();
</script>

<Banner --bg-color="#196090">
  <img src={svelteIcon} alt="icon" />
  <div>file manager</div>
</Banner>
<RootInput bind:root emit={fetchFiles}></RootInput>
<FileDisplay {reslist} {loading} bind:currentDir={root} emit={fetchFiles} />

<style>
  img {
    height: 100%;
    display: inline;
  }
</style>
