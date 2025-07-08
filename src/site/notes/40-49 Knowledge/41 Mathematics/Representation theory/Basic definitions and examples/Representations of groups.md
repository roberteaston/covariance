---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/representation-theory/basic-definitions-and-examples/representations-of-groups/","tags":["representation_theory"],"updated":"2025-07-08T09:26:18-07:00"}
---

> [!warning] Warning
> This page is currently under construction. Consider everything here tentative until this warning is removed.

## Types of representations
---

In this note we will stick to representations of groups, but in the back of our minds we should consider the extent to which we can extend these concepts to other structures.
### Matrix representations over a field

> [!note] Definition of matrix representation of a group
> Let $G$ be a group and $F$ be a field. A **matrix representation of $G$ over $F$** is a group morphism
> 
> $$\phi:G\to \operatorname{GL}_n(F),$$
> 
> where $\operatorname{GL}_n(F)$ is the group of invertible $n\times n$ matrices with entries in $F$.

In other words, a matrix representation of $G$ assigns to each group element $g\in G$ an invertible $n\times n$ matrix $\phi(g)$, in a manner compatible with the group structure; i.e., such that $\phi(g_1g_2) = \phi(g_1)\phi(g_2)$ for all $g_1, g_2\in G$.

#### Example

(coming soon)

### Vector space representations

> [!note] Definition of vector space representation of a group
> Let $G$ be a group and $F$ be a field. A **vector space representation of $G$ over $F$** is a group morphism
> 
> $$\phi:G\to \operatorname{GL}(V),$$
> 
> where $V$ is an $F$-vector space and $\operatorname{GL}(V)$ is the group of invertible $F$-linear endomorphisms of $V$.

(mention connection between this and matrix representations)

#### Example

(coming soon)

### Permutation representations

> [!note] Definition of a matrix representation of a group
> Let $G$ be a group. A **permutation representation of $G$** is a group morphism
> 
> $$\phi:G\to S_X,$$
> 
> where $X$ is a set and $S_X$ is the group of permutations (i.e., self-bijections) of $X$.

#### Example

(include maybe a dihedral group acting on some geometric feature of the polygon)

### Representations in your favorite category

> [!note] Definition of a matrix representation of a group
> Let $G$ be a group and $C$ be a category. A **representation of $G$ in $C$** is a group morphism
> 
> $$\phi:G\to \operatorname{Aut}_C(c),$$
> 
> where $c$ is an object of $C$ and $\operatorname{Aut}_C(c)$ is the group of automorphisms of $c$ in $C$.

Notice that this final definition subsumes the previous three. Indeed, observe:
- If $C = \textbf{Mat}_F$ is the category of matrices with entries in $F$, then each object in $C$ corresponds to a positive integer $n$. The arrows $n\to n$ correspond to $n\times n$ matrices with entries in $F$, and the automorphisms of $n$ correspond to invertible $n\times n$ matrices. Thus, $\operatorname{Aut}_{\textbf{Mat}_F}(n)=\operatorname{GL}_n(F)$.
- If $C =\textbf{Vec}_F$ is the category of $F$-vector spaces, then each object in $C$ corresponds to an $F$-vector space $V$. The arrows $V\to V$ correspond to $F$-linear transformations, and the automorphisms of $V$ correspond to invertible $F$-linear endomorphisms of $V$. Thus, $\operatorname{Aut}_{\textbf{Vec}_F}(V)=\operatorname{GL}(V)$.
- If $C=\textbf{Set}$ is the category of sets, then each object in $C$ corresponds to a set $X$. The arrows $X\to X$ correspond to set maps, and the automorphisms of $X$ correspond to bijective set maps $X\to X$; i.e., permutations of $X$. Thus, $\operatorname{Aut}_{\textbf{Set}}(X)=S_X$.


## Representations as functors
---


## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Representation theory/Basic definitions and examples/Similar representations\|Similar representations]]