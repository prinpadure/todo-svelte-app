<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch("/todos?completed=true");
		const jsonRes = await res.json();
		return { props: { todos: jsonRes.todos } };
	};
</script>

<script>
	export let todos;
</script>

<h1>Completed Todos</h1>
<div>
	<ul>
		{#each todos as todo}
			<li>
				<input type="checkbox" bind:checked={todo.completed} disabled />{todo.text}
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
	}

	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}

	h1 {
		@apply text-red-600;
		@apply uppercase;
		@apply text-6xl;
		@apply font-thin;
		@apply leading-tight;
		@apply my-16 mx-auto;
		@apply max-w-xs;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>
