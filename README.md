# **Svelte Progress**

## **Description**

A set of Svelte specific loading elements for navigating pages that are:

-   **TypeScript First**
-   **Customizable With Props**
-   **Zero-Config**
-   **TailwindCSS Compatible**

---

## **Demo**

https://user-images.githubusercontent.com/71903402/206724163-faf39db9-5c9d-4db3-ae9c-7aa5814933fe.mp4

[Demo Site](https://svelte-progress.vercel.app)

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
<Bar color="#ffef1f" size="small" shadow="show" speed="fast" />

<!-- All options can be applied to both the spinner and the bar loader with the same syntax -->
```

| Property Name | Property Type                                                                                              | Property Default |
| :------------ | :--------------------------------------------------------------------------------------------------------- | :--------------- |
| size          | 'small' \|\| 'base' \|\| 'big'                                                                             | 'base'           |
| shadow        | 'hide' \|\| 'show'                                                                                         | 'show'           |
| speed         | 'slow' \|\| 'base' \|\| 'fast'                                                                             | 'base'           |
| color         | Any css color represented as a string or if your using TailwindCSS the color and the shade e.g 'amber-200' | '#1f5af4'        |

---

## **Bugs & Features**

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-progress/issues) panel on GitHub
