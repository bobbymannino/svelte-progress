import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        color?: string | undefined;
        size?: "small" | "base" | "big" | undefined;
        shadow?: "show" | "hide" | undefined;
        speed?: "base" | "slow" | "fast" | undefined;
        startProgress?: (() => void) | undefined;
        finishProgress?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SpinnerProps = typeof __propDef.props;
export type SpinnerEvents = typeof __propDef.events;
export type SpinnerSlots = typeof __propDef.slots;
export default class Spinner extends SvelteComponentTyped<SpinnerProps, SpinnerEvents, SpinnerSlots> {
    get startProgress(): () => void;
    get finishProgress(): () => void;
}
export {};
