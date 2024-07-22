---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/direct-sums-of-modules/","tags":["module_theory"],"updated":"2024-03-06T13:53:43-08:00"}
---

As is always the case with category-theoretic constructions, there is a construction exactly dual to that of the direct product of modules, called the **direct sum** of modules. It is characterized by the property dual to that of direct product. To reflect this duality, this note will be an entirely identical "dual" version of the note for [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Direct products of modules\|direct products of modules]].

## Direct sum of two modules

First suppose $M_1$ and $M_2$ are two $R$-modules. Let $M_1\bigoplus M_2$ denote the $R$-module whose elements consist of all formal combinations of the form $m_1+m_2$, with "component-wise" addition and scaling.^[The choice of symbol is deliberate. The direct sum of modules is not the same as the direct sum of submodules of a given module, so the notation is use to distinguish the two constructions. However, both share the same universal property, only in different categories. Thus the desire to give both a "sum-like" notation.]  We have two "injection" module morphisms $j_1, j_2:M_i\to M_1\bigoplus M_2$, which send an element $m_1\in M_1$ (resp., $m_2\in M_2$) to the element $m_1+0_{M_2}$ (resp., $0_{M_1}+m_2$). This data satisfies the usual universal property for a coproduct, in that it is universal among all such modules equipped with morphisms from $M_1$ and $M_2$. More precisely, for each module $N$ and pair of module morphisms $f_1:M_1\to N$ and $f_2:M_2\to N$ there is a unique module morphism $h:M_1\bigoplus M_2\to N$ such that the diagram below commutates:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMSwxLCJNXzFcXGJpZ29wbHVzIE1fMiJdLFswLDEsIk1fMSJdLFsxLDAsIk1fMiJdLFsyLDIsIk4iXSxbMSwwLCJqXzEiXSxbMiwwLCJqXzIiLDJdLFsxLDMsImZfMSIsMix7ImN1cnZlIjoyfV0sWzIsMywiZl8yIiwwLHsiY3VydmUiOi0yfV0sWzAsMywiXFxleGlzdHMhaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Observe that, as an abelian group, $M_1\bigoplus M_2$ is the usual direct sum (i.e., coproduct) of abelian groups; however, as a set, $M_1\bigoplus M_2$ is not (bijective to) the usual disjoint union (i.e., coproduct) of sets.^[More precisely, let $U_1:R-\textbf{Mod}\to \textbf{Ab}$ and $U_2:R-\textbf{Mod}\to \textbf{Set}$ denote the usual forgetful functors. Then $U_1(M_1\bigoplus M_2)\simeq U_1(M_1)\bigoplus U_2(M_2)$ while $U_2(M_1\bigoplus M_2)\not\simeq U_2(M_1)\sqcup U_2(M_2)$.] 

---
## Direct sum of a finite collection of modules

Analogous to the above construction, for any finite collection of $R$-modules $M_1,\ldots, M_n$ their **direct sum** is an $R$-module, denoted $\displaystyle \bigoplus_{i=i}^n M_i$, together with module morphisms $\displaystyle j_i:M_i\to \bigoplus_{i=1}^n M_i$, universal among all such data. As an abelian group, this is the usual direct sum of the corresponding abelian groups, with elements consisting of all formal sums of the form $\displaystyle \sum_{i=1}^n m_i$ with $m_i\in M_i$. The additive structure is defined "component-wise", as is the action of $R$.

The universal property is encoded in the commutative diagram below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMiwxLCJcXGRpc3BsYXlzdHlsZVxcYmlnb3BsdXNfe2k9MX1ebiBNX2kiXSxbMCwwLCJNXzEiXSxbMSwwLCJNXzIiXSxbMiwyLCJOIl0sWzIsMCwiXFxjZG90cyJdLFszLDAsIk1fbiJdLFsxLDAsImpfMSIsMSx7ImxhYmVsX3Bvc2l0aW9uIjozMH1dLFsyLDAsImpfMiJdLFs1LDAsImpfbiIsMl0sWzUsMywiZl9uIiwwLHsiY3VydmUiOi0yfV0sWzEsMywiZl8xIiwyLHsiY3VydmUiOjJ9XSxbMiwzLCJmXzIiLDIseyJjdXJ2ZSI6MX1dLFswLDMsIlxcZXhpc3RzIWgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

---

## Direct sum of an arbitrary family of modules

Finally, suppose $\{M_s\mid s\in S\}$ is a family of $R$-modules indexed by some set $S$. Following the pattern we've established, the **direct sum** of this family is an $R$-module, denoted $\displaystyle \bigoplus_{s\in S} M_s$, together with module morphisms $\displaystyle j_t:M_t\to \bigoplus_{s\in S}M_s$ for every $t\in S$, universal among all such data. As an abelian group, this is the usual direct sum of the corresponding abelian groups.

The only difference here between this general case (which includes infinite sets) and the finite case is that the elements of the set $\displaystyle \bigoplus_{s\in S} M_s$ are *finite* formal sums of elements of the form $\displaystyle \sum_{s\in S}m_s$, with $m_s\in S$ (all but finitely many zero).