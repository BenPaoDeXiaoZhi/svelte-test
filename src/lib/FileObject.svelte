<script lang="ts">
  import folderIcon from "../assets/folder.svg";
  import fileIcon from "../assets/file.svg";
  let {
    name,
    file = true,
    onclick = function () {
      console.log("not setted");
    },
  } = $props();
</script>

<button class="container" {onclick} type="button">
  <img src={file ? fileIcon : folderIcon} height="70%" alt="folder" />
  <div class="name">
    {name}
  </div>
</button>

<style>
  .container {
    width: 100%;
    height: 1.5rem;
    border: 0;
    border-top-style: solid;
    border-top-color: grey;
    border-top-width: 0.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0.5rem;
    box-sizing: border-box;
    cursor: pointer;
  }
  .name {
    font-size: 1rem;
    color: black;
    padding: 0px 0.2rem;
  }
</style>
