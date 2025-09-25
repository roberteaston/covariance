---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/module-morphisms-and-submodules/","tags":["module_theory"],"updated":"2025-09-25T14:23:24-07:00"}
---

There is a tight connection between module morphisms and submodules.

## Kernels
---

Suppose $f:M\to N$ is an $R$-module morphism. Let $\operatorname{ker}(f)$ be the usual kernel of $f$ when it is viewed as simply a morphism of abelian groups, i.e.., $\operatorname{ker}(f)=\{m\in M\mid f(m)=0_N\}$. This set is not only a subgroup of $M$ (when viewed as an abelian group), but also a submodule of $M$. It is still called the **kernel** of the morphism $f$. One can also give a definition of the kernel without reference to any elements using the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms#The zero morphism\|zero morphism]] (see [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Abelian categories#Kernels and Cokernels\|here]]).

For future reference, we should cryptically note that the kernel of the module morphism $f:M\to N$ should really be the "inclusion" morphism $i:K\to M$, where $K=\ker(f)$ is the submodule defined above.

## Images
---

Similarly, let $\operatorname{im}(f)$ be the usual image of $f$ (as a set map or group morphism). As with the kernel, this set is not just a subgroup of $N$ (when viewed as abelian group), but also a submodule of $N$. It is still called the **image** of the morphism $f$.

As with the kernel, we should really define the image of $f:M\to N$ as a certain "special" module morphism $j:I\to N$ through which $f$ "factors", but we'll hold off on that until we study [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Yoneda's Lemma]] and maybe even [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Abelian categories\|abelian categories]].

## Hom-sets? More like hom-modules!
---

For each pair of $R$-modules $M$ and $N$, we can consider the set $\operatorname{Hom}_R(M,N)$ of all $R$-module morphisms from $M$ to $N$. (You might also see this set sometimes denoted $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$, which is more in line with the default notation $\operatorname{Hom}_C(a,b)$ for two objects $a, b$ in a category $C$.) This set has a natural (!) structure of an abelian group, where addition of morphisms is defined by "addition of outputs"; i.e., $(f+g)(m)=f(m)+g(m)$.

Of course, to be careful one should verify that if $f,g:M\to N$ are $R$-module morphisms, then $f+g:M\to N$ defined in this way is indeed an $R$-module morphism. And then we should verify that this operation on $\operatorname{Hom}_R(M,N)$ does indeed give the set the structure of an abelian group. (What's the additive identity? Can you describe the additive inverse of a morphism $f$?) We will skip those details here (at least for now), but I promise there are no surprises. Everything checks out as directly as you might hope.

Along the same lines, when $R$ is commutative, the set $\operatorname{Hom}_R(M,N)$ even has the structure of an $R$-module. Specifically, define a left action of $R$ on the hom-set through the $R$-action on the outputs, i.e., using the $R$-action in $N$. In other words, for each $R$-module morphism $f:M\to N$ and $r\in R$ define a map $rf:M\to N$ by $(rf)(m)=r\cdot f(m)$. As above, technically we should check that $rf$ is indeed a module morphism $M\to N$, and it is in the compatibility with the $R$-actions that the commutativity of $R$ is required (or at least enough to guarantee the result we need). Indeed, for each $s\in R$ and $m\in M$ we must verify that $(rf)(sm)=s\cdot (rf)(m)$. On the left-hand side we have

$$(rf)(sm) = r\cdot f(sm) = r\cdot (s\cdot f(m)) = (rs)\cdot f(m).$$

On the other hand, we have

$$s\cdot (rf)(m) = s\cdot (r\cdot f(m)) = (sr)\cdot f(m).$$

If $R$ is commutative, then $rs=sr$ and so $(rs)\cdot f(m)=(sr)\cdot f(m)$, as desired.

When $N=M$, one can check that the set $\operatorname{Hom}_R(M,M)$ has a natural structure of a ring (with unity). It is called the **endomorphism ring** of $M$ and is sometimes denoted $\operatorname{End}_R(M)$; when $R$ is commutative, the ring $\operatorname{End}_R(M)$ has a natural structure of an $R$-[[40-49 Knowledge/41 Mathematics/Algebra theory/Algebras\|algebra]].
{ #5f0b4d}


> [!info] Enriched categories
> Discoveries like these, namely of categories in which hom-sets naturally have additional structure, inevitably lead one to the concept of an [enriched category](https://en.wikipedia.org/wiki/Enriched_category).

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/The Isomorphism Theorems for Modules\|The Isomorphism Theorems for Modules]]