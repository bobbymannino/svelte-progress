import { SvelteComponentTyped } from "svelte";
import type { SizePropType } from "./types";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        size?: SizePropType | undefined;
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
}
export {};
