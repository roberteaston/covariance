---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/direct-products-of-modules/","tags":["module_theory"],"updated":"2024-07-22T05:59:26-07:00"}
---

For any family of modules, there is a construction analogous to the Cartesian product in $\textbf{Set}$ that produces a single module characterized by a universal property.
## Direct product of two modules

First suppose $M_1$ and $M_2$ are two $R$-modules. Let $M_1\times M_2$ denote the $R$-module whose elements are pairs $(m_1, m_2)$ with $m_1\in M_1$ and $m_2\in M_2$, with component-wise addition and scaling. We have two "projection" module morphisms $\pi_1, \pi_2:M_1\times M_2\to M_i$, which send a pair $(m_1,m_2)$ to $m_1$, $m_2$, respectively. This data satisfies the usual universal property for a product, in that it is universal among all such modules equipped with morphisms to $M_1$ and $M_2$. More precisely, for each module $N$ and pair of module morphisms $f_1:N\to M_1$ and $f_2:N\to M_2$ there is a unique module morphism $h:N\to M_1\times M_2$ such that the diagram below commutates:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMSwxLCJNXzFcXHRpbWVzIE1fMiJdLFsxLDIsIk1fMSJdLFsyLDEsIk1fMiJdLFswLDAsIk4iXSxbMCwyLCJcXHBpXzIiLDJdLFswLDEsIlxccGlfMSJdLFszLDEsImZfMSIsMix7ImN1cnZlIjoyfV0sWzMsMiwiZl8yIiwwLHsiY3VydmUiOi0yfV0sWzMsMCwiXFxleGlzdHMhIGgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Observe that, as an abelian group, $M_1\times M_2$ is the usual direct product of abelian groups; similarly, as a set, $M_1\times M_2$ is the usual Cartesian product of sets.^[More precisely, let $U_1:R-\textbf{Mod}\to \textbf{Ab}$ and $U_2:R-\textbf{Mod}\to \textbf{Set}$ denote the usual forgetful functors. Then $U_1(M_1\times M_2)\simeq U_1(M_1)\times U_2(M_2)$ and $U_2(M_1\times M_2)\simeq U_2(M_1)\times U_2(M_2)$.]

---
## Direct product of a finite collection of modules

Analogous to the above construction, for any finite collection of $R$-modules $M_1,\ldots, M_n$ their **direct product** is an $R$-module, denoted $M_1\times\cdots \times M_n$, together with module morphisms $\pi_i:M_1\times \cdots\times M_n\to M_i$, universal among all such data. As an abelian group, this is the usual direct product of the corresponding abelian groups; as a set, it is the usual Cartesian product of the corresponding sets. The additive structure is defined component-wise, as is the action of $R$.

It is common to alternatively denote the direct product by $\displaystyle \prod_{i=1}^n M_i$, in which case the universal property is encoded in the commutative diagram below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMiwxLCJcXGRpc3BsYXlzdHlsZVxccHJvZF97aT0xfV5uIE1faSJdLFswLDIsIk1fMSJdLFsxLDIsIk1fMiJdLFsyLDAsIk4iXSxbMiwyLCJcXGNkb3RzIl0sWzMsMiwiTV9uIl0sWzAsMiwiXFxwaV8yIiwwLHsibGFiZWxfcG9zaXRpb24iOjMwfV0sWzAsMSwiXFxwaV8xIiwyLHsibGFiZWxfcG9zaXRpb24iOjYwfV0sWzMsMSwiZl8xIiwyLHsiY3VydmUiOjJ9XSxbMywyLCJmXzIiLDIseyJjdXJ2ZSI6MX1dLFszLDAsIlxcZXhpc3RzISBoIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsNSwiXFxwaV9uIiwyLHsibGFiZWxfcG9zaXRpb24iOjMwfV0sWzMsNSwiZl9uIiwwLHsiY3VydmUiOi0yfV1d&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

---

## Direct product of an arbitrary family of modules

Finally, suppose $\{M_s\mid s\in S\}$ is a family of $R$-modules indexed by some set $S$. Following the pattern we've established, the **direct product** of this family is an $R$-module, denoted $\displaystyle \prod_{s\in S} M_s$, together with module morphisms $\displaystyle \pi_t:\prod_{s\in S}M_s\to M_t$ for every $t\in S$, universal among all such data. As an abelian group, this is the usual direct product of the corresponding abelian groups; as a set, it is the usual Cartesian product of the corresponding sets.

The only difference here between this general case (which includes infinite sets) and the finite case is that the elements of the set $\displaystyle \prod_{s\in S} M_s$ are not really tuples (or sequences) of elements, since the set $S$ might not be linearly ordered. This is not a problem arising from the fact that the $M_s$ are modules, but an issue that is addressed all the way back with sets in general. One solution is to instead construct the set $\displaystyle \prod_{s\in S} M_s$ as the collection of all set maps $f$ from $S$ such that $f(s)\in M_s$ for every $s\in S$. Ignoring certain set-theoretic considerations^[For example, you might be wondering what the common codomain is for all such functions? The answer is the fixed universe $\mathcal{U}$, which contains all sets were are allowed to consider. In particular, it should contain the union of the sets of elements of all $M_s$.], this does the job. The additive operation and $R$-action are then once again defined "component-wise"; e.g., $(r\cdot f)(s) = r\cdot f(s)$, where the right-hand side indicates the action of $R$ on the $R$-module $M_s$. In other words, for each $s\in S$ we can think of $f(s)$ as the value of the $s$-component of the element $f$.

The finite case can be seen as a special case of this general construction by considering the set $S=\{1,2,\ldots, n\}$ and associating each $n$-tuple $(m_1,m_2,\ldots, m_n)$ with each $m_i\in M_i$ to a function $f$ on $\{1,2,\ldots, n\}$ with $f(i)=m_i$ for each $i$.

---
### A word on language

The terms "Cartesian product" (of sets) and "direct product" (of modules, groups, etc.) is a bit antiquated. Each of these types of objects satisfies the "same" universal property from the point of view of category theory, which is simply that of a **product**. To make matters unnecessarily confusing, categorical products are special cases of a more general notion of **limit**, which was sometimes called "inverse limit" or "projective limit". This was to distinguish them from the dual of notion of **colimit**, which was once called "direct limit" or "inductive limit". So a direct product is an example of an inverse limit (not a direct limit), while a direct sum is an example of a colimit (or direct limit). Oof. Let's be kind to ourselves and stick simply with "product" and "coproduct".