<script>
	import { onMount } from 'svelte';

	export let data;
	let loading = true;
	let error = null;
</script>

<div class="container">
	{#each data?.return as d}
		<div class="bubble">
			<div class="user">
				<img
					src="https://cdn.discordapp.com/avatars/{d.author.id}/{d.author.avatar}.webp?size=100"
					alt=""
				/>
				<h3>{d.author.username}</h3>
			</div>
			<div>{d.content}</div>
			<img width="100%" src={d.attachments[0]?.url} alt="" />
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 50%;
		gap: 20px;
	}
	.user {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.user img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.bubble {
		background-color: rgb(225, 225, 225);
		padding: 20px;
		border-radius: 20px;
	}
</style>
