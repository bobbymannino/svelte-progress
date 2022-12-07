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
export type BarProps = typeof __propDef.props;
export type BarEvents = typeof __propDef.events;
export type BarSlots = typeof __propDef.slots;
export default class Bar extends SvelteComponentTyped<BarProps, BarEvents, BarSlots> {
}
export {};
