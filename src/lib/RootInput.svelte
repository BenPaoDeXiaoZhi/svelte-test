<script lang="ts">
  let { defaultRoot, root = $bindable(defaultRoot) } = $props();
</script>

<div class="container">
  <div class="hint">input root:</div>
  <input
    value={defaultRoot}
    onblur={function (e) {
      console.log(e);
      root = this.value;
    }}
    onchange={function (e){
      this.blur()
    }}
    id="root"
  />
</div>

<style>
  .container {
    width: 100%;
    display: flex;
  }
  .hint {
    white-space: nowrap;
    background-color: rgb(164, 204, 205);
  }
  input {
    width: 100%;
    background-color: rgb(217, 240, 241);
  }
</style>
