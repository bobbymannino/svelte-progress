# **Svelte Progress**

## **Description**

A set of Svelte specific loading elements for navigating pages that are:

-   **TypeScript First**
-   **Customizable With Props**
-   **Zero-Config**

---

## **Demo**

https://user-images.githubusercontent.com/71903402/207066100-fe6dbd3d-0f79-4792-8702-3d24fdcd350b.mov


[Demo Site](https://bobbymannino.vercel.app/svelte-progress)

---

## **Installation**

```
npm install --save-dev @bobbymannino/svelte-progress
```

---

## **Usage**

```html
<!-- layout.svelte -->

<script lang="ts">
	import { Bar, Spinner } from "@bobbymannino/svelte-progress";
</script>

<Bar />
<Spinner />
```

---

## **Configuration**

```html
<!-- layout.svelte -->

<Bar color="#ffef1f" size="small" shadow="show" speed="fast" />
<Spinner color="#ffef1f" size="small" shadow="show" speed="fast" />
```

| Property Name | Property Type                         | Property Default |
| :------------ | :------------------------------------ | :--------------- |
| size          | 'small' \|\| 'base' \|\| 'big'        | 'base'           |
| shadow        | 'hide' \|\| 'show'                    | 'show'           |
| speed         | 'slow' \|\| 'base' \|\| 'fast'        | 'base'           |
| color         | Any CSS color represented as a string | '#1f5af4'        |

---

## **Manual Usage**

```html
<!-- layout.svelte -->

<script lang="ts">
	let startBar: () => void;
	let finishBar: () => void;
	let startSpinner: () => void;
	let finishSpinner: () => void;

	function s() {
		startBar();
		startSpinner();
	}

	function f() {
		finishBar();
		finishSpinner();
	}
</script>

<Bar bind:startProgress="{startBar}" bind:finishProgress="{finishBar}" />
<Spinner bind:startProgress="{startSpinner}" bind:finishProgress="{finishSpinner}" />

<button on:click="{s}">Start</button>
<button on:click="{f}">Finish</button>
```

---

## **Bugs & Features**

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-progress/issues) panel on GitHub
