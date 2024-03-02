---
references:
  - "[[Maclane - Categories for the Working Mathematician.pdf#page=10|Categories for the Working Mathematician]]"
last updated: 2024-02-28T11:06:15-08:00
related:
  - "[[Categories]]"
  - "[[Functors]]"
---
Examples are abundant! We begin with some really basic categories before discussing the (more complicated) categories you've likely encountered before.

A common convention with very "simple" categories is to simply sketch a visual representation of the category, with dots used to represent objects and arrows to represent ... arrows. It is also common convention not to draw the identity arrows, nor any arrows that are necessarily there by the composition assumption.

---
### Basic diagrams

To every "basic diagram" one can construct a category, by simply including the required identity and composite arrows. For example, the smallest possible category is the empty category, which has no objects or arrows. This category is usually denoted ${\bf 0}$. It is the initial category in the category of categories.

The next smallest categories are the categories that have a single object. It is common to let ${\bf 1}$ denote the category with exactly one object and one arrow (the identity arrow on that object). Note, however, that there are lots of categories that have a unique object but many arrows. Such categories are in (natural) bijection with monoids.

Continuing the pattern, the category denoted ${\bf 2}$ is the category with two objects and exactly one non-identity arrow. Since identity arrows are not usually included when sketching visual representations of categories, a picture of the category ${\bf 2}$ is
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMixbMCwwLCJcXGJ1bGxldCJdLFsxLDAsIlxcYnVsbGV0Il0sWzAsMV1d&embed" width="200" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

As one last basic example in this specific sequence of categories, the category ${\bf 3}$ has three objects and the following non-identity arrows:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwxLCJcXGJ1bGxldCJdLFsxLDAsIlxcYnVsbGV0Il0sWzIsMSwiXFxidWxsZXQiXSxbMCwxXSxbMSwyXSxbMCwyXV0=&embed" width="200" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Note that the bottom arrow is equal to the composition of the top two arrows.

---
### Sets as categories

A category is **discrete** when every arrow is an identity arrow. In other words, it's basically just a set (of objects). For example, a discrete category with six objects might be visualized as below. As usual, the identity arrows are not shown
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMSwxLCJcXGJ1bGxldCJdLFszLDEsIlxcYnVsbGV0Il0sWzIsMCwiXFxidWxsZXQiXSxbMCwyLCJcXGJ1bGxldCJdLFsyLDIsIlxcYnVsbGV0Il0sWzQsMSwiXFxidWxsZXQiXV0=&embed" width="200" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe> 

---
### Groups as categories

A group can be viewed as a category, with a single object and an arrow for each element of the group. In this context, the group operation corresponds to arrow composition.

---
### Matrices over a fixed commutative ring

For each commutative ring $R$, the set of all matrices with entries in $R$ is the arrow set of a category $\textbf{Matr}_R$. The objects of this category are the positive integers, and each $m\times n$ matrix $A$ is regarded as an arrow $A:n\to m$. Composition of arrows corresponds to matrix product.

---
### Preorders

A **preorder** is a category $P$ in which there is at most a single arrow between any two objects. We can then define a relation $\leq$ on the objects of $P$ by saying $p\leq p'$ if and only if there is an arrow $p\to p'$ in $P$. This relation is reflexive (identity arrows!) and transitive (composition of arrows). Each of the basic categories ${\bf 0}, {\bf 1}, {\bf 2}, {\bf 3},\ldots$ is a preorder.

---
### Large categories

| Category         | Objects                                     | Arrows                                |
| ---------------- | ------------------------------------------- | ------------------------------------- |
| $\textbf{Set}$   | sets                                        | functions                             |
| $\textbf{Set}_*$ | sets with selected base point               | base-point-preserving functions       |
| $\textbf{Cat}$   | categories                                  | functors                              |
| $\textbf{Mon}$   | monoids                                     | morphisms of monoids                  |
| $\textbf{Grp}$   | groups                                      | group homomorphisms                   |
| $\textbf{Ab}$    | abelian groups                              | group homomorphisms                   |
| $\textbf{Ring}$  | rings (with unity)                          | ring homomorphisms                    |
| $\textbf{CRing}$ | commutative rings (with unity)              | ring homomorphisms                    |
| $R-\textbf{Mod}$ | left modules over the ring $R$              | $R$-module homomorphisms              |
| $\textbf{Mod}-R$ | right modules over the ring $R$             | $R$-module homomorphisms              |
| $\textbf{Top}$   | topological spaces                          | continuous maps                       |
| $\textbf{Toph}$  | topological spaces                          | homotopy classes of maps              |
| $\textbf{Top}_*$ | topological spaces with selected base point | base point-preserving continuous maps |
