import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        backgroundColor?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
export default class Progress extends SvelteComponentTyped<ProgressProps, ProgressEvents, ProgressSlots> {
}
export {};