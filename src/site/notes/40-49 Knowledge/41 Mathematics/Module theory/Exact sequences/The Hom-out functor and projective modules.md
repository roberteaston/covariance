---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/exact-sequences/the-hom-out-functor-and-projective-modules/","tags":["module_theory"],"updated":"2024-03-06T13:54:55-08:00"}
---

In light of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties III - Yoneda's Lemma\|Universal Properties III - Yoneda's Lemma]], for any fixed object $r$ in a category $C$, understanding the object $r$ is equivalent to understanding the functor $\operatorname{Hom}_C(r,-):C\to \textbf{Set}$.

In the context of modules, this means that for any fixed $R$-module $D$ it is worthwhile to study the functor $\operatorname{Hom}_R(D,-)$. We have seen that for every $R$-module $N$ the set $\operatorname{Hom}_R(D,N)$ has a natural structure of an abelian group, so it makes sense to view $\operatorname{Hom}_R(D,N)$ as a functor from the category of $R$-modules to the category of abelian groups. We shall informally call this the "hom functor" of $D$, or more specifically the "hom-out functor" of $D$ (to contrast it with the "hom-in" functor $\operatorname{Hom}_R(-,D)$).

## The hom-out functor and direct products

As with any functor, we are naturally curious about how the functor interacts with the other constructions in our category. For example, we have the following result:

>[!summary] The hom-out functor commutes with direct products
>Suppose $D$ is an $R$-module and $\{N_a\mid a\in A\}$ is a family of $R$-modules. There is an isomorphism of abelian groups
>$$\operatorname{Hom}_R\left(D,\prod_{a\in A}N_a\right)\xrightarrow{\sim} \prod_{a\in A}\operatorname{Hom}_R(D,N_a),$$
>given by sending a morphism $\displaystyle f:D\to \prod_{a\in A}N_a$ to the family of morphisms $(\pi_a\circ f)_{a\in A}$, where $\displaystyle \pi_a:\prod_{b\in A} N_b\to N_a$ is the projection onto the $a$-component.

Recall that for finite families the direct product and direct sum constructions are isomorphic, so in that case we can replace the direct products with direct sums. Because of this, we might sometimes say that "the hom-out functor commutes with finite direct sums." The above result is a more honest picture of the general case, though.

By the way, if you're wondering about the proof of the above property, here's something hilarious: in the "proper" construction of the direct product of a family of $R$-modules, the above property is built right in to the construction, as an isomorphism natural in $D$!

## The hom-out functor and exact sequences

>[!summary] The hom-out functor is left exact
>Suppose we have an exact sequence of $R$-modules
>$$0\to L\xrightarrow{f} M.$$
>Then the corresponding sequence of abelian groups
>$$0\to \operatorname{Hom}_R(D,L)\xrightarrow{f\circ -}\operatorname{Hom}_R(D,M)$$
>is also exact.
>
>More generally, if we have a short exact sequence of $R$-modules
>$$0\to L\xrightarrow{f} M\xrightarrow{g} N\to 0,$$
>then the corresponding sequence of abelian groups below is also exact:
>$$0\to \operatorname{Hom}_R(D,L)\xrightarrow{f\circ -}\operatorname{Hom}_R(D,M)\xrightarrow{g\circ -}\operatorname{Hom}_R(D,N).$$

Notice that the $0$ on the far right of the sequence is gone! We have lost the "right end" of our exact sequence. Because of the above property, we say that the functor $\operatorname{Hom}_R(D,-):R-\textbf{Mod}\to \textbf{Ab}$ is **left exact**.

Is it ever the case that the functor $\operatorname{Hom}_R(D,-)$ is **exact**, in other words sends short exact sequences to short exact sequences?

>[!note] Definition of a projective module
>An $R$-module $P$ is **projective** if for every short exact sequence of $R$-modules
>$$0\to L\xrightarrow{f} M\xrightarrow{g} N\to 0$$
>the corresponding sequence of abelian groups is also exact:
>$$0\to \operatorname{Hom}_R(P,L)\xrightarrow{f\circ -}\operatorname{Hom}_R(P,M)\xrightarrow{g\circ -}\operatorname{Hom}_R(P,N)\to 0.$$

Here is a nice characterization of projective modules:

>[!summary] Equivalent condition of projective
>An $R$-module $P$ is projective if and only if it is a direct summand of a free $R$-module.

>[!summary] Corollary
>- Free modules are projective.
>- Every module is a quotient of a projective module.

>[!summary] Tensor product of projective is projective
>If $R$ is a commutative ring, then the tensor product of two projective $R$-modules is projective.

### Examples of projective modules

1. Every vector space is projective.
2. The abelian group ${\bf Z}$ is projective.
3. The direct sum of two projective modules is projective.

### Examples of non-projective modules

1. Every nonzero finite abelian group is not projective.
2. The abelian group ${\bf Q}$ is not projective.
3. The quotient group ${\bf Q}/{\bf Z}$ is not projective.