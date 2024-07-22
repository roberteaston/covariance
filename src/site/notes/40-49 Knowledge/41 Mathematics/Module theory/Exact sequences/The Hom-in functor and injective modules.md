---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/exact-sequences/the-hom-in-functor-and-injective-modules/","tags":["module_theory"],"updated":"2024-03-06T13:54:51-08:00"}
---

For every object $r$ in a category $C$, we can consider the "hom-in" functor that is dual to the [[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/The Hom-out functor and projective modules\|hom-out functor]], that is the functor $\operatorname{Hom}_C(-,r)$. In general this is a functor from $C^{\text{op}}$ to ${\bf Set}$, although just as with the hom-out functor in the case of $R$-modules we can consider it a functor with values in the category of abelian groups.

We now analyze the properties of this functor, in parallel with those of the hom-out functor.

## The hom-in functor and direct products, sums

 How does the hom-in functor interact with direct products? At first glance, it seems somewhat differently than the hom-out functor:

>[!summary] The hom-out functor exchanges direct sums for direct products
>Suppose $D$ is an $R$-module and $\{N_a\mid a\in A\}$ is a family of $R$-modules. There is an $R$-module isomorphism
>$$\operatorname{Hom}_R\left(\bigoplus_{a\in A}N_a,D\right)\xrightarrow{\sim} \prod_{a\in A}\operatorname{Hom}_R(N_a,D),$$
>given by sending a morphism $\displaystyle f:\bigoplus_{a\in A}N_a\to D$ to the family of morphisms $(f\circ i_a)_{a\in A}$, where $\displaystyle i_a:N_a\to \bigoplus_{a'\in A} N_{a'}$ is the canonical injection.

Recall that for finite families the direct product and direct sum constructions are isomorphic, so in that case we can replace the direct product with a direct sum. Because of this, we might sometimes say that "the hom-in functor commutes with finite direct sums." The above result is a more honest picture of the general case, though.

This is actually directly analogous to the property for the hom-out functor, once we recall that the hom-in functor is a contravariant functor; i.e., $\operatorname{Hom}_R(-,D):(R-\textbf{Mod})^{\text{op}}\to \textbf{Ab}$. Note that direct products in the category $(R-\textbf{Mod})^{\text{op}}$ correspond to direct sums in the category $R-\textbf{Mod}$. So the above isomorphism can be viewed as the statement that the functor $\operatorname{Hom}_R(-,D):(R-\textbf{Mod})^{\text{op}}\to \textbf{Ab}$ commutes with direct products in the domain and codomain categories. This is the identical property enjoyed by the functor $\operatorname{Hom}_R(D,-):R-\textbf{Mod}\to \textbf{Ab}$.

## The hom-in functor and exact sequences

>[!summary] The hom-in functor is left exact
>Suppose we have an exact sequence of $R$-modules
>$$M\xrightarrow{g} N\to 0.$$
>Then the corresponding sequence of abelian groups
>$$0\to \operatorname{Hom}_R(N,D)\xrightarrow{-\circ g}\operatorname{Hom}_R(M,D)$$
>is also exact.
>
>More generally, if we have a short exact sequence of $R$-modules
>$$0\to L\xrightarrow{f} M\xrightarrow{g} N\to 0,$$
>then the corresponding sequence of abelian groups below is also exact:
>$$0\to \operatorname{Hom}_R(N,D)\xrightarrow{-\circ g}\operatorname{Hom}_R(M,D)\xrightarrow{-\circ f}\operatorname{Hom}_R(L,D).$$

Notice that the $0$ on the far right of the sequence is gone! We have lost the "right end" of our exact sequence. Because of the above property, we say that the functor $\operatorname{Hom}_R(-,D):R-\textbf{Mod}\to \textbf{Ab}$ is **left exact**.

Is it ever the case that the functor $\operatorname{Hom}_R(-,D)$ is **exact**, in other words sends short exact sequences to short exact sequences?

>[!note] Definition of an injective module
>An $R$-module $Q$ is **injective** if for every short exact sequence of $R$-modules
>$$0\to L\xrightarrow{f} M\xrightarrow{g} N\to 0$$
>the corresponding sequence of abelian groups is also exact:
>$$0\to \operatorname{Hom}_R(N,Q)\xrightarrow{-\circ g}\operatorname{Hom}_R(M,Q)\xrightarrow{-\circ f}\operatorname{Hom}_R(L,Q)\to 0.$$

Here is a nice characterization of injective modules:

>[!summary] Equivalent condition of injective
>An $R$-module $Q$ is injective if and only if whenever $Q$ is a submodule of an $R$-module $M$ then $Q$ is a direct summand of $M$.

Here is a nice characterization of injective $R$-modules when $R$ is a PID:

>[!summary] Injective modules over PIDs
>Suppose $R$ is a PID. An $R$-module $Q$ is injective if and only if $rQ=Q$ for every nonzero $r\in R$.

In particular, an abelian group is injective if and only if it's divisible.

>[!summary] Corollary
>If $R$ is a PID, then any quotient of an injective $R$-module is injective.

### Examples of injective modules

1. Every vector space is injective.
2. The abelian group ${\bf Q}$ is injective.
3. The quotient group ${\bf Q}/{\bf Z}$ is injective.
4. Any direct sum of injective ${\bf Z}$-modules is injective; e.g., ${\bf Q}\oplus {\bf Q}/{\bf Z}$ is injective.

### Examples of non-injective modules

1. The abelian group ${\bf Z}$ is not injective.
2. Any nonzero finitely generated abelian group is not injective.