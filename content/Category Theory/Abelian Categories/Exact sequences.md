---
last updated: 2023-12-04T06:46:20-08:00
related:
  - "[[Abelian categories]]"
  - "[[Additive categories]]"
  - "[[Monomorphisms, Epimorphisms and Isomorphisms]]"
---
## Exact sequences

>[!summary] Factorization into monomorphism and epimorphism
>In an abelian category $A$, every morphism $f$ has a factorization $f=me$ with $m$ a [[Monomorphisms, Epimorphisms and Isomorphisms#^676200|monomorphism]] and $e$ an [[Monomorphisms, Epimorphisms and Isomorphisms#^205688|epimorphism]]. Moreover,
>$$m=\ker(\operatorname{coker} f),\quad e=\operatorname{coker}(\ker f).$$
>We can thus define the (usual) image and coimage of $f=me:a\to b$ as
>$$m=\operatorname{im}(f),\quad e=\operatorname{coim}(f).$$

The image and coimage are unique up to isomorphism, so the **image** of $f$ is really a subobject of $b$, while the **coimage** is a quotient object of $a$.

With images and coimages now defined, we can talk about exact sequences.

>[!note] Exact sequence in an abelian category
>In an abelian category $A$, a pair of composable morphisms
>$$a\xrightarrow{f} b\xrightarrow{g} c$$
>is **exact at $b$** when $\operatorname{im}(f)\equiv \ker(g)$ (or equivalently, when $\operatorname{coker}(f)\equiv \operatorname{coim}(g)$).

Here the symbol $\equiv$ indicates equivalence as subobjects (which are isomorphism classes of monomorphisms to a common object).

>[!note] Short exact sequence in an abelian category
>In an abelian category, a diagram
>$$0\to a\xrightarrow{f} b\xrightarrow{g} c\to 0$$
>is a **short exact sequence** when it is exact at $a$, $b$, and $c$.
>
>Equivalently, $f=\ker(g)$ and $g=\operatorname{coker}(f)$.

## Exact functors

>[!note] Definition of exact functor
>A functor $T:A\to B$ between abelian categories is **exact** when it preserves all finite limits and colimits.
>

In particular, an exact functor preserves kernels and cokernels:
$$\ker(T(f))=T(\ker(f))\quad\text{and}\quad \operatorname{coker}(T(f))=T(\operatorname{coker}(f)).$$
It also preserves images and coimages, and carries exact sequences to exact sequences.

A functor is **left exact** when it preserves all finite limits; equivalently, when it is additive and preserves short left exact sequences. The dual notion is a functor that is **right exact**.