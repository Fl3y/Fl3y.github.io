<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	let { children } = $props();

</script>

<nav class="bg-gray-800 text-gray-100 sm:text-2xl  xl:text-6xl">
	<ul class="flex justify-between px-2">
		<li>
			<a href="{base}/">Home</a>
		</li>
		<li>
			<a href="{base}/about">About</a>
		</li>
	</ul>
</nav>

<main class="p-12 flex content-center ">
	{@render children()}
</main>


