---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/groups-as-categories/","updated":"2025-10-04T14:41:38-07:00"}
---

[[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Categories#Groups as categories\|Recall]] that to any group  we can associate a category ${\bf B}G$ that has a unique object, an arrow for each element of $G$, and arrow composition given by the group law in $G$. (See a bit more [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Categories#Groups as categories\|here]].)
1. Show there is a correspondence^[You can turn this into a bijection if you are willing to talk about isomorphism classes of groups and the like.] between groups and one-object categories in which every arrow is invertible.
2. Suppose $G$ and $H$ are groups. Show that group morphisms $\phi:G\to H$ correspond^[Following the previous footnote, you can turn this into an equivalence of certain categories.] to functors $\Phi:{\bf B}G\to {\bf B}H$.
3. Recall that a *permutation representation* of $G$ is a group morphism $\phi:G\to S_X$, where $S_X$ is the permutation group on a set $X$. Show that permutation representations of $G$ correspond to functors ${\bf B}G\to {\bf Set}$.
4. Suppose $\phi,\psi:G\to H$ are group morphisms, with corresponding functors $\Phi,\Psi:{\bf B}G\to {\bf B}H$. Show there is a natural transformation $\Phi\Rightarrow \Psi$ if and only if $\phi$ and $\psi$ are conjugate, i.e., there is an element $h\in H$ such that $\psi(g)=h(\phi(g))h^{-1}$ for all $g\in G$.