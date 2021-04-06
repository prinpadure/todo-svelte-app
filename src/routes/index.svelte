<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch("/todos");
		const jsonRes = await res.json();
		return { props: { todos: jsonRes.todos } };
	};
</script>

<script lang="ts">
	export let todos: any[];
	var text: string = "";
	const addTodo = async () => {
		try {
			if (!text) return;
			const todo = {
				text,
				completed: false
			};
			await fetch("/todos", { method: "post", body: JSON.stringify(todo) });
			await fetchTodos();
			text = "";
		} catch (e) {
			alert(e);
		}
	};

	const completeTodo = async (todo) => {
		try {
			await fetch("/todos", { method: "put", body: JSON.stringify(todo) });
			await fetchTodos();
		} catch (error) {
			alert(error);
		}
	};

	const fetchTodos = async () => {
		try {
			const res = await fetch("/todos");
			const jsonRes = await res.json();
			todos = jsonRes.todos;
		} catch (error) {
			alert(error);
		}
	};
</script>

<main>
	<h1>My Todos</h1>
	<input type="text" bind:value={text} placeholder="Enter Todo" />
	<button on:click={addTodo}>Add Todo</button>
	<div>
		<ul>
			{#each todos as todo}
				<li>
					<input
						type="checkbox"
						bind:checked={todo.completed}
						on:change={(_) => completeTodo(todo)}
					/>{todo.text}
				</li>
			{/each}
		</ul>
	</div>
</main>

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

	input {
		border: 1px solid black;
	}
</style>
