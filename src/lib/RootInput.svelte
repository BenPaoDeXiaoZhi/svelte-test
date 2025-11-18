<script lang="ts">
  let {
    root = $bindable(),
    emit = function (dat: string) {
      console.log(dat);
    },
  } = $props();
</script>

<div class="container">
  <div class="hint">input root:</div>
  <input
    bind:value={root}
    type="text"
    onchange={function (e) {
      console.log(e);
      if (!root.endsWith("/")) {
        root += "/";
      }
      emit();
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
