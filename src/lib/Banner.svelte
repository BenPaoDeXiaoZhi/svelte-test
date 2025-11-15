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
  height: calc(var(--size, 2rem) + 0.5rem);
  line-height: calc(var(--size, 2rem) + 0.5rem);
}
</style>
