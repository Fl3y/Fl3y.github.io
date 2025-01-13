<script lang="ts">
	import '../app.css';
	let { children } = $props();

</script>

<nav class="bg-gray-800 text-gray-100 p-4">
	<ul class="flex justify-between">
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
	</ul>
</nav>

{@render children()}
