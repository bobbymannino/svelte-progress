<script>import { navigating } from '$app/stores';
export let backgroundColor = '#1f5af4';
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
    if (started && !done) {
        done = true;
        started = false;
        percent = 0;
    }
    done = false;
    started = true;
    trickleTimer = setTimeout(trickle, 150);
}
function finishProgress() {
    trickleTimer && (clearTimeout(trickleTimer), trickleTimer = null);
    percent = 100;
    setTimeout(() => {
        done = true;
        started = false;
        percent = 0;
    }, 150);
}
$: ($navigating) ? startProgress() : finishProgress();
</script>

<div style:--bg-color={backgroundColor} style:--percent="{percent}%" class:done class:started />

<style>
    div {
        height: 0.25rem;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        right: 0;
        background-color: var(--bg-color);
        box-shadow: 0 .25rem .25rem hsl(0 0% 0% / .25);
        pointer-events: none;
        user-select: none;
        transform-origin: left;
        transform: scale(var(--percent), 100%, 100%);
    }
    
    div.started {
        transition: transform 150ms ease;
    }

    div.done {
        transition: opacity 150ms ease;
        opacity: 0;
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