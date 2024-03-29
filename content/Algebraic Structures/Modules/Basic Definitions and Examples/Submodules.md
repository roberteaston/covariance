---
references:
  - "[[Dummit, Foote - Abstract Algebra - 3e.pdf#page=350|Dummit & Foote: Section 10.1]]"
last updated: 2023-12-06T11:19:03-08:00
related:
  - "[[Modules]]"
  - "[[Module morphisms]]"
  - "[[Examples of modules]]"
---
>[!note] Definition of submodule
>Let $R$ be a ring and $M$ be an $R$-module. An *$R$-submodule* of $M$ is a subset $N\subseteq M$ that is a subgroup (under their abelian group structures) and that is closed under the action of ring elements, i.e., $rn\in N$ for every $r\in R$ and $n\in N$.

In the case $R=F$ is a field, submodules are the same as subspaces. Also note that since abelian groups must be nonempty, so must submodules.
## The Submodule Criterion

As usual in algebra, we have an equivalent criterion for checking with a subset of a module is a submodule.

>[!summary] The Submodule Criterion
>Let $R$ be a ring and $M$ ben an $R$-module. A subset $N\subseteq M$ is a submodule of $M$ if and only if $N$ is nonempty and $n_1+rn_2\in N$ for every $r\in R$ and $n_1, n_2\in N$.
