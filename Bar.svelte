<script>import { navigating } from "$app/stores";
import { fade } from "svelte/transition";
export let color = "#1f5af4";
export let size = "base";
let percent = 0;
let done = false;
let started = false;
let trickleTimer;
const trickle = () => {
    percent += Math.random() * 5;
    if (percent > 80)
        return;
    trickleTimer = setTimeout(trickle, 150);
};
function startProgress() {
    done = false;
    started = true;
    // Only start timer if not already going
    if (trickleTimer == null)
        trickleTimer = setTimeout(trickle, 150);
}
function finishProgress() {
    // If timer is already going remove and start new one
    trickleTimer && (clearTimeout(trickleTimer), (trickleTimer = null));
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
	<div out:fade style:--color={color} data-size={size} style:--percent="{percent}%" class:started {...$$restProps} />
{/if}

<style>
	div {
		position: fixed;
		z-index: 9999;
		left: 0;
		top: 0;
		right: 0;
		background-color: var(--color);
		box-shadow: 0 0.25rem 0.25rem hsl(0 0% 0% / 0.25);
		pointer-events: none;
		user-select: none;
		transform-origin: left;
		transform: scale(var(--percent), 100%, 100%);
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
