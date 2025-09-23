---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/module-morphisms-and-submodules/","tags":["module_theory"],"updated":"2025-09-23T06:59:05-07:00"}
---

There is a tight connection between module morphisms and submodules.

## Kernels
---

Suppose $f:M\to N$ is an $R$-module morphism. Let $\operatorname{ker}(f)$ be the usual kernel of $f$ when it is viewed as simply a morphism of abelian groups, i.e.., $\operatorname{ker}(f)=\{m\in M\mid f(m)=0_N\}$. This set is not only a subgroup of $M$ (when viewed as an abelian group), but also a submodule of $M$. It is still called the **kernel** of the morphism $f$. One can also give a definition of the kernel without reference to any elements using the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms#The zero morphism\|zero morphism]] (see [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Abelian categories#Kernels and Cokernels\|here]]).

For future reference, we should cryptically note that the kernel of the module morphism $f:M\to N$ should really be the "inclusion" morphism $i:K\to M$, where $K=\ker(f)$ is the submodule defined above.

## Images
---

Similarly, let $\operatorname{im}(f)$ be the usual image of $f$ (as a set map or group morphism). As with the kernel, this set is not just a subgroup of $N$ (when viewed as abelian group), but also a submodule of $N$. It is still called the **image** of the morphism $f$.

As with the kernel, we should really define the image of $f:M\to N$ as a certain module morphism $j:I\to N$ through which $f$ "factors", but we'll hold off on that until we study [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Yoneda's Lemma]] and maybe even [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Abelian categories\|abelian categories]].

## Hom-sets? More like hom-modules!
---

For each pair of $R$-modules $M$ and $N$, we can consider the set $\operatorname{Hom}_R(M,N)$ of all $R$-module morphisms from $M$ to $N$. This set has a natural (!) structure of an abelian group; when  is commutative, it even has the structure of an -module. Both of these facts lead one naturally to consider the concept of an [enriched category](https://en.wikipedia.org/wiki/Enriched_category).

When $N=M$, the set $\operatorname{Hom}_R(M,M)$ has the natural structure of a ring with unity. It is called the **endomorphism ring** of $M$ and is sometimes denoted $\operatorname{End}_R(M)$; when $R$ is commutative, the ring $\operatorname{End}_R(M)$ has the natural structure of an $R$-[[40-49 Knowledge/41 Mathematics/Algebra theory/Algebras\|algebra]].
{ #5f0b4d}

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/The Isomorphism Theorems for Modules\|The Isomorphism Theorems for Modules]]