<script>
  let { children } = $props();
</script>
<div>
{@render children()}
</div>

<style>
div {
  background-color: var(--bg-color, blue);
  width: 100%;
  color: var(--color, white);
  text-align: center;
  font-size: var(--size, 2rem);
}
</style>
