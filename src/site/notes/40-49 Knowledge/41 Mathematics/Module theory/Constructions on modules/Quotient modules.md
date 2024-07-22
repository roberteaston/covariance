---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/quotient-modules/","tags":["module_theory"],"updated":"2024-03-06T13:54:05-08:00"}
---

>[!summary] Existence of quotient modules
>Suppose $R$ is a ring, $M$ is an $R$-module, and $N\subseteq M$ is a submodule. Then there is an $R$-module $M/N$ together with a module morphism $\pi:M\to M/N$, such that $\ker(\pi)=N$ and any module morphism $g:M\to P$ with $N\subseteq \ker(g)$ factors uniquely through $\pi$:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMSwwLCJNIl0sWzIsMCwiTS9OIl0sWzIsMSwiUCJdLFswLDAsIk4iXSxbMCwyLCJnIiwyXSxbMCwxLCJcXHBpIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzEsMiwiXFxleGlzdHMhIGgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMywwLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dXQ==&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

This might look crazy at first glance, but once we cover universal properties in category theory we will see how it captures the true essence of the quotient module construction. For now, we simply note the following comforting facts.

First, the abelian group structure on $M/N$ is the usual group quotient of the abelian group $M$ by the (automatically normal) subgroup $N$. As such, its elements correspond to the distinct cosets of $N$ in $M$. We can then always represent an element of $M/N$ in the form $m+N$ for some $m\in M$, with the understanding that two cosets $m_1+N$ and $m_2+N$ define the same element in $M/N$ exactly when $m_1-m_2\in N$. Moreover, the additive operation on $M/N$ is exactly coset addition: $(m_1+N)+(m_2+N) = (m_1+m_2)+N$.

Second, the action of $R$ on the $M/N$ is inherited from the action of $R$ on $M$. In other words, for $r\in R$ and $m+N$ in $M/N$ we have $r(m+N) = rm+N$. Convince yourself this is actually well defined!

The projection map $\pi:M\to M/N$ is the same as the projection map for the abelian groups, i.e., $\pi(m)=m+N$. The key fact is that this is an $R$-module morphism: $\pi(rm) = rm+N = r(m+N) = r\pi(m)$.

The fact that $\ker(\pi)=N$ is immediate from the same result for groups and the definition of the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules#^668147\|kernel]] for a module morphism.

The universal property is then almost immediate from the corresponding universal property for quotient groups in the category $\textbf{Ab}$.