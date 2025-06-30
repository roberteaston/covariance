---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2025-summer/reu-1-aaron-and-mark/reu-meeting-2025-06-30/","updated":"2025-06-30T10:41:54-07:00"}
---

This following is a brief summary of our research meeting on 2025-06-30.

## Meeting summary
---

We began by briefly chatting about the tasks set at the end of the last meeting. We noted the following:
- A matrix representation of $G$ is a group morphism $G\to \operatorname{GL}_n(F)=\operatorname{Aut}_{\textbf{Mat}_F}(n)$.
- An $F$-linear representation of $G$ is a group morphism $G\to \operatorname{GL}(V)=\operatorname{Aut}_{\textbf{Vec}_F}(V)$.
- A permutation representation of $G$ is a group morphism $G\to S_X =\operatorname{Aut}_{\textbf{Set}}(X)$.
- In general, a representation of $G$ by an object $c$ in a category $C$ is a group morphism $G\to \operatorname{Aut}_C(c)$. (
  Note that in any category $C$, the set of automorphisms of an object $c$ in $C$ is naturally a group under composition.)

Aaron noted that representations of $G$ can also be thought of as actions of $G$ (on the corresponding objects). This led to the slightly generalization to representations of *monoids*, as monoid morphisms $M\to \operatorname{End}_C(c)$.

We briefly recapped the "categorification" of a group $G$ as a one-object category, $\textbf{G}$. We noted that this same construction could apply to any monoid.

We then roughly sketched out the equivalence of the following three categories:
1. the category of $F$-linear representations of a group $G$. In this category, the objects are pairs $(V, \rho)$ where $V$ is an $F$-vector space and $\phi:G\to \operatorname{GL}(V)$ is a group morphism, and the arrows are **intertwining maps**;
2. the category of $F[G]$-modules, whose objects are $F[G]$-modules and arrows are module morphisms; and
3. the category $\textbf{Vec}_F^{\textbf{G}}$, whose objects are functors $\textbf{G}\to \textbf{Vec}_F$ and arrows are natural transformations.

Our plan is to translate everything (as much as we can) from the first two categories into statements in the third category.

## Tasks for next meeting
---

1. Carefully describe the "categorification" construction.
	- Can you define a "categorization" functor $\textbf{Grp}\to \textbf{Cat}$? Make sure to describe what happens to arrows in $\textbf{Grp}$, i.e., group morphisms.
	- What is the "image" of this functor?
	- Verify that functors $\textbf{G}\to \textbf{H}$ correspond to group morphisms $G\to H$.
	- Do you see how to similarly "categorify" any monoid?
2. Explicitly describe the functors between the three categories listed above.\
	- Make sure to verify that arrows in the third (functor) category correspond to intertwiners.
	- Convince yourselves the categories are equivalent.
	- Are any of the categories isomorphic?

## References
---

Dummit & Foote: Section 18.1
Mac Lane: Chapter 1