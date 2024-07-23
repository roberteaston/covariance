---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/natural-transformations/","tags":["category_theory","quotes"],"updated":"2024-07-22T20:02:22-07:00"}
---


> [!quote] [[Maclane - Categories for the Working Mathematician.pdf#page=28|Eilenberg and Mac Lane]]
> ..."category" has been defined in order to be able to define "functor" and "functor" has been defined in order to be able to define "natural transformation."

Have you ever been reading a math textbook (or even these notes!) and come across the phrase "there is a natural map" or "there is a natural isomorphism" and wondered if there was a precise meaning to the use of the word "natural"? If so, the answer is yes and it is codified in the idea of a *natural transformation*.

>[!note] Definition of natural transformation
>Suppose $C$ and $D$ are categories and $F,G:C\to D$ are two functors between those categories. A **natural transformation** $\tau: F\Rightarrow G$ is a function that assigns to each object $c\in C$ an arrow $\tau_c:Fc\to Gc$ in $D$ such that for every arrow $f:c\to c'$ in $C$ one has the following commutative diagram in $D$:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJGYyJdLFsxLDAsIkdjIl0sWzAsMSwiRmMnIl0sWzEsMSwiR2MnIl0sWzAsMiwiRmYiLDJdLFswLDEsIlxcdGF1X2MiXSxbMiwzLCJcXHRhdV97Yyd9IiwyXSxbMSwzLCJHZiJdXQ==&embed" width="200" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
>The arrows $\tau_c$ are called the **components** of the natural transformation, while the commutativity of the above diagrams is often referred to as the **naturality condition**.

A natural transformation is often called a **morphism of functors**. It can also be viewed as a way to compare the images of two functors, since it directly connects every image of one functor $F$ with the image (of the same object) of another functor $G$; the naturality condition guarantees that these comparisons are compatible with arrow composition.
