---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/examples-of-categories/","tags":["category_theory"],"updated":"2024-04-12T07:47:31-07:00"}
---

Examples are abundant! We begin with some really basic categories before discussing the (more complicated) categories you've likely encountered before.

A common convention with very "simple" categories is to simply sketch a visual representation of the category, with dots used to represent objects and arrows to represent ... arrows. It is also common convention not to draw the identity arrows, nor any arrows that are necessarily there by the composition assumption.

---
### Basic diagrams

To every "basic diagram" one can construct a category, by simply including the required identity and composite arrows. For example, the smallest possible category is the empty category, which has no objects or arrows. This category is usually denoted ${\bf 0}$. It is the initial category in the category of categories.

The next smallest categories are the categories that have a single object. It is common to let ${\bf 1}$ denote the category with exactly one object and one arrow (the identity arrow on that object).

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 63.781699214573635 80.68342604232868" width="50" height="80.68342604232868" filter="invert(93%) hue-rotate(180deg)" class="excalidraw-svg">  <!-- svg-source:excalidraw -->    <defs>    <style class="style-fonts">      @font-face {        font-family: "Virgil";        src: url("https://excalidraw.com/Virgil.woff2");      }      @font-face {        font-family: "Cascadia";        src: url("https://excalidraw.com/Cascadia.woff2");      }      @font-face {        font-family: "Assistant";        src: url("https://excalidraw.com/Assistant-Regular.woff2");      }    </style>      </defs>  <g stroke-linecap="round" transform="translate(27.64353771693611 61.367019792328676) rotate(0 4.658203125 4.658203125)"><path d="M3.89 0.36 C4.83 0.16, 6.17 0, 7.06 0.47 C7.96 0.95, 8.91 2.22, 9.25 3.21 C9.6 4.2, 9.6 5.44, 9.14 6.4 C8.68 7.35, 7.39 8.44, 6.47 8.96 C5.56 9.48, 4.53 9.82, 3.63 9.52 C2.73 9.23, 1.64 8.08, 1.07 7.18 C0.5 6.29, 0.14 5.08, 0.22 4.14 C0.29 3.2, 0.79 2.22, 1.5 1.55 C2.2 0.88, 4.04 0.31, 4.45 0.12 C4.85 -0.07, 3.96 0.3, 3.95 0.4 M5.36 -0.13 C6.27 -0.02, 7.33 0.96, 7.93 1.68 C8.53 2.4, 8.85 3.31, 8.96 4.19 C9.08 5.08, 9.05 6.25, 8.62 6.99 C8.19 7.74, 7.28 8.35, 6.36 8.67 C5.44 8.98, 4.07 9.21, 3.11 8.86 C2.14 8.52, 1.11 7.48, 0.57 6.61 C0.04 5.74, -0.34 4.6, -0.09 3.64 C0.16 2.68, 1.21 1.46, 2.06 0.83 C2.92 0.21, 4.51 -0.05, 5.05 -0.11 C5.58 -0.17, 5.31 0.35, 5.28 0.47" stroke="none" stroke-width="0" fill="#1e1e1e"/><path d="M5.46 0.28 C6.37 0.37, 7.46 0.71, 8.12 1.42 C8.78 2.14, 9.32 3.56, 9.42 4.58 C9.53 5.59, 9.32 6.72, 8.73 7.5 C8.14 8.28, 6.9 9.05, 5.87 9.25 C4.84 9.46, 3.48 9.16, 2.58 8.74 C1.68 8.32, 0.9 7.58, 0.47 6.72 C0.03 5.86, -0.36 4.63, -0.04 3.59 C0.28 2.55, 1.56 1.11, 2.38 0.48 C3.21 -0.15, 4.44 -0.16, 4.92 -0.22 C5.39 -0.27, 5.17 0.06, 5.24 0.17 M5.17 0.06 C6.17 0.04, 7.49 0.87, 8.2 1.59 C8.91 2.31, 9.41 3.4, 9.45 4.38 C9.49 5.36, 9.04 6.71, 8.44 7.47 C7.85 8.23, 6.81 8.68, 5.89 8.93 C4.98 9.18, 3.86 9.25, 2.96 8.97 C2.06 8.69, 1.03 8.2, 0.5 7.23 C-0.03 6.26, -0.44 4.13, -0.23 3.14 C-0.02 2.16, 0.97 1.79, 1.75 1.32 C2.53 0.84, 3.87 0.4, 4.44 0.27 C5 0.14, 5.08 0.58, 5.15 0.55" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round"><g transform="translate(22.930259372144775 56.640457292328676) rotate(0 8.6189758991435 -20.912109375)"><path d="M-0.09 0.45 C-1.89 -6.07, -16.18 -32.74, -11.2 -39.91 C-6.21 -47.07, 24.86 -49.4, 29.83 -42.53 C34.8 -35.66, 20.16 -5.93, 18.62 1.29 M-1.59 -0.35 C-3.46 -6.71, -16.92 -32.17, -11.76 -38.97 C-6.59 -45.77, 24.4 -47.5, 29.4 -41.17 C34.41 -34.84, 19.91 -8.07, 18.27 -1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(22.930259372144775 56.640457292328676) rotate(0 8.6189758991435 -20.912109375)"><path d="M18.67 -23.21 C19.18 -16, 16.39 -10.17, 18.27 -1 M18.67 -23.21 C19.04 -16.36, 17.31 -9.93, 18.27 -1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(22.930259372144775 56.640457292328676) rotate(0 8.6189758991435 -20.912109375)"><path d="M32.85 -17.76 C29.58 -12.03, 22.98 -7.66, 18.27 -1 M32.85 -17.76 C28.92 -12.53, 22.83 -7.77, 18.27 -1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/></svg>


Note, however, that there are lots of categories that have a unique object but many arrows. Such categories are in (natural) bijection with monoids.

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
{ #ef81b1}


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
{ #9c9672}


