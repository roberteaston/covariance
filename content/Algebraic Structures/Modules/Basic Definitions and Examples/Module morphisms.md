---
references:
  - "[[Dummit, Foote - Abstract Algebra - 3e.pdf#page=358|Dummit & Foote: Section 10.2]]"
last updated: 2023-10-29T06:00:17-07:00
related:
  - "[[Examples of module morphisms]]"
  - "[[Modules]]"
  - "[[Module morphisms and submodules]]"
---
As we will see, the road to understanding modules is through understanding the connections between modules, i.e., the maps between modules.

>[!note] Definition of module morphism
>Let $R$ be a ring and $M$ and $N$ be $R$-modules. An **$R$-module (homo)morphism** from $M$ to $N$ is a set map $\phi:M\to N$ that respects the module structures, i.e., such that:
>- $\phi(m_1+m_2)=\phi(m_1)+\phi(m_2)$ for all $m_1, m_2\in M$; and
>- $\phi(rm)=r\phi(m)$ for all $r\in R$ and $m\in M$.

In other words, morphisms of $R$-modules are simply group morphisms (of the underlying abelian groups) that respect the action of $R$.

Although we will usually check a given map is a module morphism by directly verifying the two properties above, there is a slightly more efficient method available:

>[!summary] Criterion for module morphisms
>Let $M$, $N$, and $L$ be $R$-modules. A map $\phi:M\to N$ is an $R$-module morphism if and only if $\phi(rm_1+m_2)=r\phi(m_1)+\phi(m_2)$ for all $m_1, m_2\in M$ and $r\in R$.
