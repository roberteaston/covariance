---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/universal-properties/examples-of-universal-properties-revisited/","tags":["category_theory"],"updated":"2024-10-04T05:39:18-07:00"}
---

In light of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Yoneda's Lemma\|Yoneda's Lemma]], it is useful to revisit [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples\|Universal Properties I - Inspiring Examples]] to see how each can be framed in the same language: as a natural isomorphism between a hom-functor and another $\textbf{Set}$-valued functor.

---
# Examples in $\textbf{Set}$

## The Cartesian product of two sets

If $X$ and $Y$ are sets, then there is a natural bijection between the set of maps $Z\to X\times Y$, and the set of pairs of maps $Z\to X$, $Z\to Y$. In other words, there is a natural bijection
$$\phi_Z:\operatorname{Hom}_{\textbf{Set}}(Z,X\times Y)\xrightarrow{\sim} \{(g_1,g_2)\mid g_1\in \operatorname{Hom}_{\textbf{Set}}(Z,X),\, g_2\in \operatorname{Hom}_{\textbf{Set}}(Z, Y)\}.$$
This bijection requires the two projection maps $\pi_1:X\times Y\to X$ and $\pi_2:X\times Y\to Y$ defined by $(x,y)\mapsto x$ and $(x,y)\mapsto y$, respectively. The bijection $\phi_Z$ above is defined by sending each set map $f:Z\to X\times Y$ to the pair of set maps $\pi_1\circ f:Z\to X$, $\pi_2\circ f:Z\to Y$.

---
# Examples in $\textbf{Ab}$

## The direct sum of two abelian groups

If $A$ and $B$ are abelian groups, their direct sum is the abelian group $A\oplus B$. As a set, it consists of all pairs of formal sums $a+b$ with $a\in A$ and $b\in B$. The operation is defined "component-wise": $(a+b)+(a'+b')=(a+a')+(b+b')$. (Although not common, one could reasonably argue that a different notation should be used for the formal sum symbol, such as $a\oplus b$.) One can verify that $A\oplus B$ is an abelian group, and that it comes equipped with two injective group morphisms $i_1:A\to A\oplus B$ and $i_2:B\to A\oplus B$. Moreover, there is a natural bijection between group morphisms from $A\oplus B$ and pairs of groups morphisms $A\to C$, $B\to C$:
$$\phi_C:\operatorname{Hom}_{\textbf{Ab}}(A\oplus B, C)\xrightarrow{\sim} \{(g_1,g_2)\mid g_1\in\operatorname{Hom}_{\textbf{Ab}}(A,C),\, g_2\in\operatorname{Hom}_{\textbf{Ab}}(B,C)\}$$
This bijection is very similar to that for the direct product of sets, above. Each group morphism $f:A\oplus B\to C$ is sent to the pair of group morphisms $f\circ i_1:A\to C$, $f\circ i_2:B\to C$.

---
# Examples in $\textbf{Grp}$

## The quotient group construction

If $N$ is a normal subgroup of a group $G$, then there is a natural bijection between the set of group morphisms $G/N\to H$, and the of group morphisms $G\to H$ with $N$ contained in the kernel. In other words, there is a natural bijection
$$\phi_H:\operatorname{Hom}_{\textbf{Grp}}(G/N,H)\xrightarrow{\sim}\{g:G\to H\mid g\in \operatorname{Hom}_{\textbf{Grp}},\, N\leq \ker(g)\}.$$
This bijection requires the "canonical" projection morphism $\pi:G\to G/N$. Using that map, the bijection $\phi_H$ sends each group morphism $f:G/N\to H$ to the group morphism $f\circ \pi:G\to H$.

---
# Examples in $R\textbf{-Mod}$

## The tensor product construction

Suppose $R$ is a commutative ring and $M$ and $N$ are left $R$-modules. By taking the standard $R$-module structure (i.e., $(R,R)$-bimodule structure) on $M$ and the canonical $(R,{\bf Z})$-bimodule structure on $N$, we can form the tensor product $M\otimes_R N$. The result is an $(R,{\bf Z})$-bimodule, i.e., a left $R$-module. There is a natural bijection between $R$-module morphisms $M\otimes_S N\to P$ and certain set maps:
$$\phi_P:\operatorname{Hom}_{R\textbf{-Mod}}(M\otimes_R N,P)\xrightarrow{\sim}\{g:M\times N\to P\mid g\text{ bilinear, $R$-balanced $(R,\textbf{Z})$-set map}\}$$