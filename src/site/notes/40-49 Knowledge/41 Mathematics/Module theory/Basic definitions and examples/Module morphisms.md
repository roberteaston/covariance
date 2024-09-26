---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/module-morphisms/","tags":["module_theory"],"updated":"2024-09-26T05:29:57-07:00"}
---

As we will see, the road to understanding modules is through understanding the connections between modules, i.e., the maps between modules.

>[!note] Definition of module morphism
>Let $R$ be a ring and $M$ and $N$ be $R$-modules. An **$R$-module (homo)morphism** from $M$ to $N$ is a set map $\phi:M\to N$ that respects the module structures, i.e., such that:
>- $\phi(m_1+m_2)=\phi(m_1)+\phi(m_2)$ for all $m_1, m_2\in M$; and
>- $\phi(rm)=r\phi(m)$ for all $r\in R$ and $m\in M$.

In other words, morphisms of $R$-modules are group morphisms (of the underlying abelian groups) that respect the action of $R$.

Although we will usually check a given map is a module morphism by directly verifying the two properties above, there is a slightly more efficient method available:

>[!summary] Criterion for module morphisms
>Let $M$, $N$, and $L$ be $R$-modules. A map $\phi:M\to N$ is an $R$-module morphism if and only if $\phi(rm_1+m_2)=r\phi(m_1)+\phi(m_2)$ for all $m_1, m_2\in M$ and $r\in R$.

## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Examples of module morphisms\|Examples of module morphisms]]
[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules\|Module morphisms and submodules]]