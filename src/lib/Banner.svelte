<script>
  let { children } = $props();
</script>
<h1>
{@render children()}
</h1>

<style>
h1 {
  background-color: blue;
  width: 100vw;
  color: var(--color, white);
  text-align: center;
}
</style>
