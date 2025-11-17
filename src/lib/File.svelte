<script lang="ts">
  import fileIcon from "../assets/file.svg";
  let { name } = $props();
</script>

<div class="container">
  <img src={fileIcon} height="70%" alt="folder" />
  <div class="name">
    {name}
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 1.5rem;
    border-top-style: solid;
    border-top-color: grey;
    border-top-width: 0.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0.5rem;
    box-sizing: border-box;
  }
  .name {
    font-size: 1rem;
    color: black;
    padding: 0px 0.2rem;
  }
</style>
