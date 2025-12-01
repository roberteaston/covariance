---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2025-summer/reu-1-aaron-and-mark/reu-meeting-2025-08-15/","updated":"2025-08-20T14:44:09-07:00"}
---

This following is a brief summary of our research meetings on 2025-08-14 and 2025-08-15.

## Meeting summary
---

### August 14

On August 14, Aaron carefully described the monoidal structure on $\textbf{Set}^{\bf G}$, which can be summed up as "inheriting the monoidal structure of $\langle\textbf{Set},\times,\{\bullet\}\rangle$ on the outputs of functors $F:{\bf G}\to \textbf{Set}$." We then spent most of our time analyzing what information is contained in a monoid object in the monoidal category $\textbf{Set}^{\bf G}$. Our eventual conclusion was that such a monoidal object was equivalent to a functor $F':{\bf G}\to \textbf{Mon}$. More precisely, we made the conjecture:

> [!note] Conjecture 1
> There is an equivalence of (monoidal?) categories between the category of monoids in $\textbf{Set}^{\bf G}$ and the category $\textbf{Mon}^{\bf G}$.

In the language of our representation theory, this amounts to saying that a monoid in the category of permutation representations of $G$ is effectively the same as a monoidal representation of $G$.

Aaron also took a moment to posit that there was indeed a monoidal structure on $\textbf{Matr}_F$, namely $\langle\textbf{Matr}_F,\otimes, 1\rangle$.

We then moved on to consider the unusual monoidal category $\langle\textbf{Set},\coprod, \emptyset\rangle$, specifically analyzing how to interpret a monoid in that monoidal category. After analyzing the two commutative diagrams required for a monoid, we discovered that the "unit" diagram actually forced the monoid map $\mu:X\coprod X\to X$ to be the "folding map", which simplify identifies the two copies of $X$ with the original set $X$. Since the "unit map" $\lambda:\emptyset \to X$ was the empty map, this led us to conclude that a monoid in this monoidal category was simply a set (with no real additional information). More precisely, we made a second conjecture:

> [!note] Conjecture 2
> There is an equivalence of (monoidal?) categories between the category of monoids in $\langle\textbf{Set},\coprod, \emptyset\rangle$ and the category $\textbf{Set}$.


### August 15

We spent a good chunk of this meeting going over the slides for the "Share-Out" happening later that day. After finishing that, we recapped our discoveries from the previous day and then brainstormed future directions of study. We decided that our next short-term goals are:
1. Translate the notations of submodules and direct sums of modules into the categories $\textbf{Vec}_F$ and $\textbf{Matr}_F$, and then extend the notions of *irreducible* and *indecomposable* to representations of a group into those categories. Our long-term aim in this direction is to see how to extend/define these notions for arbitrary $C$-representations of a group, and then state (and perhaps prove) a general version of Maschke's Theorem.
2. Study the general categorical concept of a Kan extension, and then see how *induced representations* can be viewed as nothing more than Kan extensions of restriction functors. The long-term aim in this direction is to extend the notion of induced representations (including their constructions) to the most general possible setting.

## Tasks for next meeting
---

- Translate the notations of submodules and direct sums of modules into the categories $\textbf{Vec}_F$ and $\textbf{Matr}_F$, and then extend the notions of *irreducible* and *indecomposable* to representations of a group into those categories.
- Read about the general categorical definitions of *subobjects* and *direct sums*.

## References
---

Mac Lane, *Categories for the Working Mathematician*
- Subobjects: See page 105 and onwards
- Direct sums: See page 195 for the connection between direct sums and the more general notion of [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Ab-categories#Biproducts\|biproducts]] in [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Additive categories\|additive categories]]