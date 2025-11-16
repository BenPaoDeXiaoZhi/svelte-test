<script lang="ts">
import folderIcon from '../assets/folder.svg'
let { name } = $props()
</script>

<div class="container">
  <img src={folderIcon} display="inline" height="70%" alt="folder">
  <div class="name">
    {name}
  </div>
</div>

<style>
.container {
  width: 100%;
  height: 1.5rem;
  background-color: white;
  border-style: solid;
  border-color: grey;
  border-width: 0.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0.5rem
}
.name {
  font-size: 1rem;
  color:black;
}
</style>