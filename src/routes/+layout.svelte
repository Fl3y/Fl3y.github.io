<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	let { children } = $props();

</script>

<nav class="bg-gray-800 text-gray-100 p-4">
	<ul class="flex justify-between">
		<li>
			<a href="{base}/">Home</a>
		</li>
		<li>
			<a href="{base}/about">About</a>
		</li>
	</ul>
</nav>

{@render children()}
