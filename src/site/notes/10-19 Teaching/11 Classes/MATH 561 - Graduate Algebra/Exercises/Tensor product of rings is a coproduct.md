---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/tensor-product-of-rings-is-a-coproduct/","updated":"2024-12-11T08:19:09-08:00"}
---

Suppose $R$ and $S$ are commutative rings (with unity). We can form their tensor product $R\otimes S$ in the category of commutative rings as follows. First, as abelian groups (i.e., $({\bf Z},{\bf Z})$-bimodule) we can form the tensor product $R\otimes_{\bf Z} S$, which we simply denote $R\otimes S$. We can then define a multiplication in $R\otimes S$ is "component-wise", i.e., $(r_1\otimes s_1)\cdot (r_2\otimes s_2)=(r_1r_2)\otimes (s_1s_2)$. This operation gives $R\otimes S$ the structure of a commutative ring (with unity $1_R\otimes 1_S$).

Define $i_1:R\to R\otimes S$ by $r\mapsto r\otimes 1_S$, and $i_2:S\to R\otimes S$ by $s\mapsto 1_R\otimes s$.
1. Verify $i_1$ and $i_2$ are ring morphisms.
2. Show that the ring $R\otimes S$ together with these ring morphisms is a coproduct of $R$ and $S$ in the category of commutative rings.