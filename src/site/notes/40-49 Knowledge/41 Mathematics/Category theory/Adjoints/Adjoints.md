---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/adjoints/adjoints/","tags":["category_theory","quotes"],"updated":"2024-07-22T20:00:39-07:00"}
---

> [!quote] [[Maclane - Categories for the Working Mathematician.pdf#page=117|Saunders Mac Lane]]
> ...good general theory does not search for the maximum generality, but for the right generality.


## Definition

There a several equivalent definitions, but we'll give the one that most resembles the situations we've seen:

>[!note] Definition of an adjunction
>Suppose $C$ and $D$ are categories. An **adjunction** from $C$ to $D$ is a triple $\langle F, G, \tau\rangle:C\rightharpoonup D$ where $F$ and $G$ are functors in opposite directions between categories $C$ and $D$
>$$F:C\rightleftarrows D:G$$
>and $\tau$ is a function that assigns to every pair of objects $c\in C$, $d\in D$ a natural^[This can be phrased in a way such that the given maps define a natural transformation between two functors.] bijection
>$$\tau_{c,d}:\operatorname{Hom}_D(F(c),d)\xrightarrow{\sim} \operatorname{Hom}_C(c,G(d)).$$
>The functor $F$ is said to be a **left adjoint** for $G$, while $G$ is called a **right adjoint** for $F$.

## What else do we know?

There is a lot of additional information that can be extracted from an adjunction, and some of that information is equivalent to the adjunction itself. Here we list some of that data.

For each arrow $f:F(c)\to d$ in $D$, the corresponding arrow $\tau f:c\to G(d)$ is called the **right adjunct** of $f$. Similarly, for each arrow $g:c\to G(d)$, the corresponding arrow $\tau^{-1}g:F(c)\to d$ is called the **left adjunct** of $g$.

If we set $d=F(c)$ in the natural bijection of the adjunction, then the left-hand hom-set contains the identity arrow $1_{F(c)}$; let $\eta_c$ denote its image under $\tau$. This arrow is a universal arrow from $c$ to $G$, and the function $c\mapsto \eta_c$ defines a natural transformation from the identity functor $I_C$ to $GF$:
$$\eta:I_C\Rightarrow GF$$
We call $\eta$ the **unit** of the adjunction.

Similarly, if we set $c=G(d)$ in the natural bijection above, then the right-hand hom-set contains the identity arrow $1_{G(d)}$; let $\varepsilon_d$ denote its preimage under $\tau$. This arrow is a universal arrow from $F$ to $d$, and the function $d\mapsto \varepsilon_d$ defines a natural transformation from $FG$ to the identity functor $I_D$:
$$\varepsilon:FG\Rightarrow I_D$$
We call $\varepsilon$ the **counit** of the adjunction.

Moreover, the unit and counits satisfy two "triangular" identities:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJGIl0sWzEsMSwiRiJdLFsxLDAsIkZHRiJdLFsyLDAsIkdGRyJdLFszLDAsIkciXSxbMiwxLCJHIl0sWzAsMiwiRlxcZXRhIiwwLHsibGV2ZWwiOjJ9XSxbMiwxLCJcXGVwc2lsb24gRiIsMCx7ImxldmVsIjoyfV0sWzAsMSwiMV9GIiwyLHsibGV2ZWwiOjJ9XSxbNCwzLCJcXGV0YSBHIiwyLHsibGV2ZWwiOjJ9XSxbMyw1LCJHXFxlcHNpbG9uIiwyLHsibGV2ZWwiOjJ9XSxbNCw1LCIxX0ciLDAseyJsZXZlbCI6Mn1dXQ==&embed" width="300" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
These identities give specific natural isomorphisms of $F\simeq FGF$ and $G\simeq GFG$.


---
## Examples

### Left adjoints of forgetful functors

Most forgetful functors have a left adjoint that is some type of "free" construction. Here are just a few.

For $U:\textbf{Ab}\to \textbf{Set}$, the left adjoint is the free abelian group functor $X\mapsto F(X)$.  The unit of the adjunction is again the "insertion of generators" set map $X\to U(F(X))$.

For $U:\textbf{Grp}\to \textbf{Set}$, the left adjoint is the free group functor $X\mapsto F(X)$.  The unit of the adjunction is again the "insertion of generators" set map $X\to U(F(X))$.

For $U:\textbf{Ab}\to \textbf{Grp}$, the left adjoint is the factor-commutator group functor $G\mapsto G/[G,G]$. The unit of the adjunction is the projection onto the quotient $G\to G/[G,G]$.

For $U:R\textbf{-Mod}\to \textbf{Set}$, the left adjoint is the free $R$-module functor $X\mapsto F(X)$. The unit of the adjunction is the "insertion of generators" set map $X\to U(F(X))$.

For $U:R\textbf{-Mod}\to \textbf{Ab}$, the left adjoint is the tensor product functor $A\mapsto R\otimes_{\bf Z} A$. The unit of the adjunction is $A\to U(R\otimes_{\bf Z} A)$ given by $a\mapsto 1\otimes a$. The functor $U$ also has a right adjoint, namely the functor $A\mapsto \operatorname{Hom}_{\textbf{Ab}}(U(R),A).$

For $U:R\textbf{-Alg}\to R\textbf{-Mod}$, the left adjoint is the tensor algebra functor $M\mapsto \mathcal{T}(M)$. The unit of the adjunction is the "insertion of generators" $M\hookrightarrow \mathcal{T}(M)$.

---
### Left and right adjoints of diagonal functors

Another common type of a functor is a "diagonal" or "constant" functor. Much like with forgetful functors, these functors often have familiar adjoints. Below we list some examples, although note that these adjoints do not always exist in a given category $C$. When in doubt, you may assume $C=\textbf{Set}$ for a specific example.

If $\Delta:C\to C\times C$ is the diagonal functor (with object function $c\mapsto (c,c)$), then its left adjoint is the coproduct functor $\coprod:C\times C\to C$. When $C=\textbf{Set}$ the unit of the adjunction (which for each object $(a,b)$ in $C\times C$ is an arrow in $C\times C$ from $(a,b)$ to $(a\coprod b, a\coprod b)$) is the pair of injections $(a\to a\coprod b, b\to a\coprod b)$. The counit is the "folding" map $c\coprod c\to c$.

The right adjoint of $\Delta$ is the product functor $\prod:C\times C\to C$. When $C=\textbf{Set}$ the unit of that adjunction is the diagonal arrow $\delta_c:c\to c\times c$ and the counit is the pair of projections $(a\times b\to a, a\times b\to b)$.

----

If $C\to \textbf{1}$ is the unique functor to the category with one object, then the left adjoint $\textbf{1}\to C$ is the functor that selects the initial object of $C$, while the right adjoint $\textbf{1}\to C$ is the functor that selects the terminal object of $C$.
{ #ecad8c}


---

If $J$ is the category with two objects and two distinct parallel arrows between them and $\Delta:C\to C^J$ is the diagonal functor, then the left adjoint is the coequalizer functor (with unit the coequalizing arrow) and the right adjoint is the equalizer functor (with counit the equalizing arrow).

More generally, for any category $J$, if $\Delta:C\to C^J$ is the diagonal functor, then the left adjoint is the colimit functor (with unit the universal cone) and the right adjoint is the limit object (with counit the universal cone).

---
### Dual vector spaces

In the category $\textbf{Vec}_F$ of vector spaces over a field $F$, the notion of the dual vector space $V^*=\operatorname{Hom}_{\textbf{Vec}_F}(V,F)$ leads to an interesting adjunction. For every pair of $F$-vector spaces $V$ and $W$ there is a bijection
$$\phi_{V,W}:\operatorname{Hom}_{\textbf{Vec}_F}(V,W^*)\xrightarrow{\sim} \operatorname{Hom}_{\textbf{Vec}_F}(W,V^*).$$
This leads to two different functors with the same object function (that sends each vector space to its dual):
$$D:\textbf{Vec}_F^{\text{op}}\to \textbf{Vec}_F,\quad D^{\text{op}}:\textbf{Vec}_F\to \textbf{Vec}_F^{\text{op}}$$
The bijection above then becomes the natural bijection
$$\operatorname{Hom}_{\textbf{Vec}_F^{\text{op}}}(D^{\text{op}}W,V)\simeq \operatorname{Hom}_{\textbf{Vec}_F}(W,DV).$$
Moreover, the unit of this adjunction is exactly the canonical isomorphism $W\to DD^{\text{op}}(W)$ of a vector space with its double dual.

---
## Additional properties of adjoints

>[!summary] Uniqueness of adjoints
>Any two right adjoints of a given functor $F:C\to D$ are naturally isomorphic, as are any two left adjoints of a functor $G:D\to C$.

>[!summary] Adjoints and (co)limits
>Suppose $F:C\to D$ is a functor and $T:J\to C$ is a diagram of shape $J$ in $C.$
>
>If $F$ is a left adjoint (of some functor $G:D\to C$) and if the diagram $T$ has a colimiting cone $\tau:T\Rightarrow c$ in $C$, then $FT$ has the colimiting cone $F\tau:F(c)\Rightarrow FT$ in $D$.
>
>If $F$ is right adjoint (of some functor $G:D\to C$), and if the diagram $T$ has a limiting cone $\tau:c\Rightarrow T$ in $C$, then $FT$ has the limiting cone $F\tau:FT\Rightarrow F(c)$ in $D$.
{ #6063ae}


In short, left adjoints preserve colimits (that exist) and right adjoints preserve limits (that exist).
### Examples of adjoints preserving (co)limits

The free $R$-module functor $F:\textbf{Set}\to R\textbf{-Mod}$ is left adjoint to the forgetful functor $U:R\textbf{-Mod}\to \textbf{Set}$, so it commutes with colimits. In particular, it commutes with coproducts, which in the category $\textbf{Set}$ is disjoint union and in the category $R\textbf{-Mod}$ is direct sum. Thus, for any family of sets $\{S_i\mid i\in I\}$ we have an isomorphism
$$F\left(\coprod_{i\in I} S_i\right)\simeq \bigoplus_{i\in I}F(S_i).$$

---

The tensor product functor $R\otimes_{\bf z}-:\textbf{Ab}\to R\textbf{-Mod}$ is left adjoint to the corresponding forgetful functor, so it also commutes with colimits (and hence coproducts). The coproduct in the category $\textbf{Ab}$ is the direct sum, so for any family of abelian groups $\{G_i\mid i\in I\}$ we have an isomorphism
$$R\otimes_{\bf Z}\left(\bigoplus_{i\in I} G_i\right)\simeq \bigoplus_{i\in I}\left(R\otimes_{\bf Z} G_i\right).$$
The hom functor $\operatorname{Hom}_{\textbf{Ab}}(U(R),-):\textbf{Ab}\to R\textbf{-Mod}$ is right adjoint to the corresponding forgetful functor, so it commutes with limits (and hence products). So for any family of abelian groups as above we also have an isomorphism
$$\operatorname{Hom}_{\textbf{Ab}}\left(U(R),\prod_{i\in I}G_i\right)\simeq \prod_{i\in I}\operatorname{Hom}_{\textbf{Ab}}(U(R),G_i). $$