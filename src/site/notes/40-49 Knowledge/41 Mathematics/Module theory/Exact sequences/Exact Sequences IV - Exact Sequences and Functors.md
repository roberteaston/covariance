---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/exact-sequences/exact-sequences-iv-exact-sequences-and-functors/","tags":["module_theory"],"updated":"2024-10-28T13:26:52-07:00"}
---

We would now like to consider how functors (say, from the category $R\textbf{-Mod}$ to another [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Abelian categories\|abelian category]]) interact with chain complexes and exact sequences. Rather than dive into the general situation, we'll look at three specific functors that we've already been working with extensively:
- the "hom-out" functor $\operatorname{Hom}_R(M,-)$
- the "hom-in" functor $\operatorname{Hom}_R(-,N)$
- the tensor product functor $M\otimes_R -$

# The hom-out functor and projective modules

In light of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties III - Yoneda's Lemma\|Universal Properties III - Yoneda's Lemma]], for any fixed object $c$ in a category $C$, understanding the object $c$ is equivalent to understanding the functor $\operatorname{Hom}_C(c,-):C\to \textbf{Set}$. In the context of modules, this means that for any fixed $R$-module $M$ it is worthwhile to study the functor $\operatorname{Hom}_R(M,-)$. We have seen that for every $R$-module $N$ the set $\operatorname{Hom}_R(M,N)$ has a (natural) structure of an abelian group^[What we really want to say is that functor $\operatorname{Hom}_R(M-):R\textbf{-Mod}\to \textbf{Set}$  factors through the forgetful functor $U:\textbf{Ab}\to \textbf{Set}$], so it makes sense to view $\operatorname{Hom}_R(M,N)$ as a functor from the category of $R$-modules to the category of abelian groups. We shall informally call this  "hom-out functor" of $M$ (to contrast it with the "hom-in" functor $\operatorname{Hom}_R(-,M)$).

Let's start with a warm-up property of this functor.

## The hom-out functor and direct products

As with any functor, we are naturally curious about how the functor interacts with the other constructions in our category. For example, we have the following result:

> [!summary] The hom-out functor commutes with direct products
> Suppose $\{N_x\mid x\in X\}$ is a family of $R$-modules. There is a natural isomorphism of abelian groups
> 
> $$\tau_M:\operatorname{Hom}_R\left(M,\prod_{x\in X}N_x\right)\xrightarrow{\sim} \prod_{x\in X}\operatorname{Hom}_R(M,N_x),$$
> 
> given by sending each morphism $\displaystyle f:M\to \prod_{x\in X}N_x$ to the family of morphisms $(\pi_x\circ f)_{x\in X}$, where $\displaystyle \pi_x:\prod_{x'\in X} N_{x'}\to N_x$ is the projection onto the $x$-component.

By the way, if you're wondering about the proof of the above property, here's something hilarious: in the "proper" construction of the direct product of a family of $R$-modules, the above property is built right in to the construction, as an isomorphism natural in $M$! It's part of the universal property of the module $\displaystyle \prod_{x\in X} N_x$, which represents the functor $F:R\textbf{-Mod}\to \textbf{Set}$ defined on objects by $\displaystyle F(M)=\prod_{x\in X} \operatorname{Hom}_R(M,N_x)$.

> [!question] How about direct sums?
> Recall that for finite families of $R$-modules, the direct product and direct sum constructions are isomorphic. So in that case we can replace the direct products with direct sums. Because of this, we might sometimes say that "the hom-out functor commutes with *finite* direct sums." However, we are *not* claiming the functor commutes with infinite direct sums.

## The hom-out functor and exact sequences

Now onto the real matter at hand, which is exploring how this functor interacts with exact sequences. Well, there's partial good news:

> [!summary] The hom-out functor is left exact
> Suppose we have an exact sequence of $R$-modules
> 
> $$0\to L\xrightarrow{f} M.$$
> 
> Then the corresponding sequence of abelian groups
> 
> $$0\to \operatorname{Hom}_R(D,L)\xrightarrow{f\circ -}\operatorname{Hom}_R(D,M)$$
> 
> is also exact.
>
> More generally, if we have a short exact sequence of $R$-modules
> 
> $$0\to L\xrightarrow{f} M\xrightarrow{g} N\to 0,$$
> 
> then the corresponding sequence of abelian groups below is also exact:
> 
> $$0\to \operatorname{Hom}_R(D,L)\xrightarrow{f\circ -}\operatorname{Hom}_R(D,M)\xrightarrow{g\circ -}\operatorname{Hom}_R(D,N).$$

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

# The hom-in functor and injective modules

For every object $r$ in a category $C$, we can consider the "hom-in" functor that is dual to the [[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences IV - Exact Sequences and Functors\|hom-out functor]], that is the functor $\operatorname{Hom}_C(-,r)$. In general this is a functor from $C^{\text{op}}$ to ${\bf Set}$, although just as with the hom-out functor in the case of $R$-modules we can consider it a functor with values in the category of abelian groups.

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

# The tensor product functor and flat modules

Suppose $D$ is an $(R,S)$-bimodule. We can then consider the two possible functors corresponding to tensoring with $D$, namely the left tensor product functor $D\otimes_S -$ and the right tensor product functor $-\otimes_R D$. The first can be used as a functor from the category of $(S,T)$-bimodules to the category of $(R,T)$-bimodules (for any ring $T$); the latter can be used as a functor from the category of $(T,R)$-bimodules to the category of $(T,S)$-bimodules (for any ring $T$). Both functors will have similar properties, so we'll focus on the former.

## The tensor product and direct sums


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/40-49-knowledge/41-mathematics/module-theory/tensor-products-of-modules/tensor-products-iv-the-adjoint-property/#690b7a" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



>[!summary] The tensor product commutes with direct sums
>Suppose $M$ is an $(R,S)$-bimodule and $\{N_i\mid i\in I\}$ is a family of $(S,T)$-bimodules. Then there is a unique isomorphism of $(R,T)$-bimodules
$M\otimes_S \left(\bigoplus_{i\in I} N_i\right)\simeq \bigoplus_{i\in I} \left(M\otimes_S N_i\right)$

</div></div>


## The tensor product and exact sequences

>[!summary] The tensor product functor is right exact
>Let $D$ be an $(R,S)$-bimodule, and suppose we have a short exact sequence of $(R,T)$-bimodules
>$$0\to L\xrightarrow{f} M\xrightarrow{g} N\to 0.$$
>Then the corresponding sequence of $(R,T)$-bimodules
>$$D\otimes_S L\xrightarrow{1_D\otimes f} D\otimes_S M\xrightarrow{1_D\otimes g} D\otimes_S N \to 0$$
>is exact.

Notice that the $0$ on the far left of the sequence is gone! We have lost the "left end" of our exact sequence. Because of the above property, we say that the functor $D\otimes_S -$ is **right exact**.

Is it ever the case that the functor $D\otimes_S -$ is **exact**, in other words sends short exact sequences to short exact sequences?

>[!note] Definition of a flat module
>An $S$-module $D$ is **flat** if for every short exact sequence of $S$-modules
>$$0\to L\xrightarrow{f} M\xrightarrow{g} N\to 0$$
>the corresponding sequence of abelian groups is also exact:
>$$0\to D\otimes_S L\xrightarrow{1_D\otimes f} D\otimes_S M\xrightarrow{1_D\otimes g} D\otimes_S N \to 0$$

>[!summary] Projective modules are flat
> Every projective $R$-module is also flat.

In particular, free modules are flat.

### Examples of flat modules

1. The abelian group ${\bf Z}$ is projective and hence also flat.
2. The abelian group ${\bf Q}$ is flat.
3. Any direct sum of flat modules is flat; e.g., the abelian group ${\bf Z}\oplus {\bf Q}$ is flat (but neither injective nor projective).

### Examples of non-flat modules

1. The abelian group ${\bf Z}_2$ is not flat.
2. The quotient group ${\bf Q}/{\bf Z}$ is not flat (although it is injective).

---

## Suggested next note

(coming soon)