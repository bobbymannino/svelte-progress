<script>import { navigating } from "$app/stores";
import { fade } from "svelte/transition";
import { checkTailwindColor } from "./checkTailwindColor";
export let color = "#1f5af4";
export let size = "base";
export let shadow = "show";
export let speed = "base";
color = checkTailwindColor(color);
let percent = 0;
let done = false;
let started = false;
let trickleInterval;
const rate = [2, 5, 10];
const trickle = () => {
    percent += Math.random() * rate[speed === "slow" ? 0 : speed === "base" ? 1 : 2];
    percent > 80 && (clearInterval(trickleInterval), (trickleInterval = undefined));
};
function startProgress() {
    done = false;
    started = true;
    // Only start timer if not already going
    !trickleInterval && (trickleInterval = setInterval(trickle, 150));
}
function finishProgress() {
    // If timer is already going remove
    trickleInterval && (clearInterval(trickleInterval), (trickleInterval = undefined));
    percent = 100;
    setTimeout(() => {
        done = true;
        started = false;
        percent = 0;
    }, 150);
}
$: $navigating ? startProgress() : finishProgress();
</script>

{#if !done && started}
	<div out:fade style="--color: {color}; --percent: {percent}%;" data-size={size} class:started data-shadow={shadow} />
{/if}

<style>
	div {
		position: fixed;
		z-index: 9999;
		left: 0;
		top: 0;
		right: 0;
		background-color: var(--tw-color, var(--color));
		pointer-events: none;
		user-select: none;
		transform-origin: left;
		-webkit-transform: scale(var(--percent), 100%, 100%);
		-moz-transform: scale(var(--percent), 100%, 100%);
		-o-transform: scale(var(--percent), 100%, 100%);
		transform: scale(var(--percent), 100%, 100%);
	}

	div[data-shadow="show"] {
		box-shadow: 0 0.25rem 0.25rem hsl(0 0% 0% / 0.25);
	}

	div[data-size="small"] {
		height: 0.1rem;
	}

	div[data-size="base"] {
		height: 0.2rem;
	}

	div[data-size="big"] {
		height: 0.3rem;
	}

	div.started {
		transition: transform 150ms ease;
	}

	@supports (scale: 50% 100% 100%) {
		div {
			scale: var(--percent) 100% 100%;
		}

		div.started {
			transition: scale 150ms ease;
		}
	}
</style>
