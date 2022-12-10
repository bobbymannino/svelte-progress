<script>import { navigating } from "$app/stores";
import { fade } from "svelte/transition";
export let color = "#1f5af4";
export let size = "base";
export let shadow = "show";
export let speed = "base";
</script>

{#if $navigating}
	<div style="--color: {color};" data-size={size} transition:fade data-shadow={shadow} data-speed={speed}>
		{#each Array(8) as _}<span />{/each}
	</div>
{/if}

<style>
	div {
		position: fixed;
		z-index: 9999;
		top: 1rem;
		right: 1rem;
		pointer-events: none;
		user-select: none;
		width: var(--wrapper-size);
		height: var(--wrapper-size);
		display: grid;
		place-items: center;
	}

	div[data-size="small"] {
		--dot-size: 0.4rem;
		--wrapper-size: 1.8rem;
	}

	div[data-size="base"] {
		--dot-size: 0.6rem;
		--wrapper-size: 2.8rem;
	}

	div[data-size="big"] {
		--dot-size: 0.8rem;
		--wrapper-size: 3.8rem;
	}

	div[data-speed="slow"] {
		--speed: 1200ms;
	}

	div[data-speed="base"] {
		--speed: 800ms;
	}

	div[data-speed="fast"] {
		--speed: 400ms;
	}

	span {
		display: block;
		width: var(--dot-size);
		height: var(--dot-size);
		position: absolute;
		background-color: var(--color);
		border-radius: 100vmax;
		-webkit-animation: pulse var(--speed) ease infinite;
		-o-animation: pulse var(--speed) ease infinite;
		-moz-animation: pulse var(--speed) ease infinite;
		animation: pulse var(--speed) ease infinite;
	}

	div[data-shadow="show"] span {
		box-shadow: 0 0.25rem 0.25rem hsl(0 0% 0% / 0.25);
	}

	@-webkit-keyframes pulse {
		50% {
			opacity: 0;
		}
	}

	@-o-keyframes pulse {
		50% {
			opacity: 0;
		}
	}

	@-moz-keyframes pulse {
		50% {
			opacity: 0;
		}
	}

	@keyframes pulse {
		50% {
			opacity: 0;
		}
	}

	span:nth-child(1) {
		top: 0;
	}

	span:nth-child(2) {
		top: 12.5%;
		right: 12.5%;
		animation-delay: calc(var(--speed) / 8);
	}

	span:nth-child(3) {
		right: 0;
		animation-delay: calc((var(--speed) / 8) * 2);
	}

	span:nth-child(4) {
		bottom: 12.5%;
		right: 12.5%;
		animation-delay: calc((var(--speed) / 8) * 3);
	}

	span:nth-child(5) {
		bottom: 0;
		animation-delay: calc((var(--speed) / 8) * 4);
	}

	span:nth-child(6) {
		bottom: 12.5%;
		left: 12.5%;
		animation-delay: calc((var(--speed) / 8) * 5);
	}

	span:nth-child(7) {
		left: 0;
		animation-delay: calc((var(--speed) / 8) * 6);
	}

	span:nth-child(8) {
		top: 12.5%;
		left: 12.5%;
		animation-delay: calc((var(--speed) / 8) * 7);
	}
</style>
