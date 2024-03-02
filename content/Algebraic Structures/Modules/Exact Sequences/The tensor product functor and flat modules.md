---
last updated: 2023-12-05T11:37:21-08:00
related:
  - "[[Exact Sequences I - Illustrative examples]]"
  - "[[Exact Sequences II - Short and long exact sequences]]"
cssclasses:
  - clean-embeds
---
Suppose $D$ is an $(R,S)$-bimodule. We can then consider the two possible functors corresponding to tensoring with $D$, namely the left tensor product functor $D\otimes_S -$ and the right tensor product functor $-\otimes_R D$. The first can be used as a functor from the category of $(S,T)$-bimodules to the category of $(R,T)$-bimodules (for any ring $T$); the latter can be used as a functor from the category of $(T,R)$-bimodules to the category of $(T,S)$-bimodules (for any ring $T$). Both functors will have similar properties, so we'll focus on the former.

## The tensor product and direct sums

![[Tensor Products IV - Additional Properties#^690b7a]]

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