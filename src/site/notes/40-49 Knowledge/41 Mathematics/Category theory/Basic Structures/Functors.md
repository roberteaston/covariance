---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/functors/","tags":["category_theory","quotes"],"updated":"2024-07-22T20:01:39-07:00"}
---

> [!quote] [[Riehl - Category Theory in Context.pdf#page=31|Eilenberg and Mac Lane]]
> ...whenever new abstract objects are constructed in a specified way out of given ones, it is advisable to regard the construction of the corresponding induced mappings on these objects as an integral part of their definition.

> [!quote] [[Riehl - Category Theory in Context.pdf#page=31|John Baez]]
> ...every sufficiently good analogy is yearning to become a functor.

> [!quote] [[Vakil - The Rising Sea.pdf#page=25|Brian Conrad]]
> Before functoriality, people lived in caves.

Maps between categories are called *functors*. Briefly, a functor between categories consists of a maps of objects and arrows that preserves the structure of a category. In more detail:

>[!note] Definition of functor
>Suppose $C$ and $D$ are categories. A **functor** $F:C\to D$ consists of the following data:
>- For each object $c\in C$, an object $Fc\in D$
>- For each arrow $f:c\to c'$ in $C$, an arrow $Ff: Fc\to Fc'$ in $D$
>
>with the following properties:
>1. (Compatibility with composition) For every pair of composable arrows $f,g$ in $C$, we must have $F(g\circ f)=Fg\circ Ff$
>2. (Identity Preservation) For every object $c\in C$, one has $F1_c = 1_{Fc}$
{ #a05956}

