---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/finite-abelian-groups-are-neither-injective-nor-projective/","updated":"2024-10-30T14:17:11-07:00"}
---

Let $A$ be a nonzero finite abelian group. Prove that:
1. $A$ is not projective
2. $A$ is not injective

> [!info]- Hints
> - If you want to be sneaky, you can use [[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences IV - Exact Sequences and Functors#^8dd436\|this]] characterization of projective modules and [[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences IV - Exact Sequences and Functors#^fd1cd5\|this]] characterization of injective modules over a PID.
> - If you would prefer a direct approach, consider the following strategy:
> 	- Note that a direct summand of a projective/injective module is also projective/injective
> 	- By the Fundamental Theorem of Finite Abelian Groups, $A$ has a direct summand of the form $\textbf{Z}_{p^k}$ for some prime $p$ and positive integer $k$
> 	- By considering the short exact sequence below, you can show $\textbf{Z}_{p^k}$ is neither injective nor surjective:
> 	  
> 	  $$0\to p^k\textbf{Z}_{p^{2k}}\to \textbf{Z}_{p^{2k}}\to \textbf{Z}_{p^k}\to 0$$

