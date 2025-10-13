---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/bimodules/bimodule-morphisms/","tags":["#module_theory"],"updated":"2025-10-13T10:13:10-07:00"}
---

## Definition
---

If you had to guess the definition of a bimodule morphism, you'd guess correctly:

>[!note] Definition of bimodule morphism
>If $M$ and $N$ are $(R,S)$-bimodules, then a set map $f:M\to N$ is a **bimodule morphism** if it is both a left $R$-module morphism and a right $S$-module morphism.

This is cheating slightly, of course. We should really say that a bimodule morphism $f:M\to N$ consists of the data of a set map $f:U(M)\to U(N)$ such that the following conditions hold:
- $\phi(m_1+m_2)=\phi(m_1)+\phi(m_2)$, for all $m_1, m_2\in M$
- $\phi(rm)=r\phi(m)$, for all $r\in R$ and $m\in M$
- $\phi(ms)=\phi(m)s$, for all $s\in S$ and $m\in M$

In any case, we can now talk about the *category* of $(R,S)$-bimodules. What should we denote this category? It's not completely agreed upon. Some people denote it $(R,S)\text{-{\bf Bimod}}$. Others denote is $R\text{-{\bf Bimod}-}S$, or $R\text{-{\bf Mod}-}S$, or even $R\textbf{Mod}S$. Choose your favorite, make sure it's clear, and stick with it.

## More than just hom-sets
---

As with $R$-modules, for any pair of $(R,S)$-bimodules $M$ and $N$, the set of bimodule morphisms between them has a (natural) structure of an abelian group (using the addition in $N$).

There's a lot more to the story about bimodule morphisms, though. First suppose $M$ is an $(R,S)$-bimodule and $N$ is an $(R,S')$-bimodule. If we forget the right-actions and consider the left $R$-modules $M$ and $N$, we can consider the set of left $R$-module morphisms, $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$. This set actually has the structure of an $(S,S')$-bimodule, as follows.

The addition in $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$ is defined through the addition in $N$. In other words, given $R$-module morphisms $f,g:M\to N$ we define $f+g:M\to N$ by $(f+g)(m)=f(m)+g(m)$. Observe that $f+g$ is indeed an $R$-module morphism. First, it is additive since $f$ and $g$ are additive; second, it is compatible with the $R$-actions since $f$ and $g$ are compatible with the $R$-actions.

The left $S$-action on $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$ is defined through the right $S$-action on $M$. In detail, for each $R$-module morphism $f:M\to N$ and $s\in S$ we define $s\cdot f:M\to N$ by $(s\cdot f)(m)=f(ms)$. Again, it is straightforward to verify that $s\cdot f$ is an $R$-module morphism. Moreover, this really does define a left $S$-action on $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$, since
$$(s_1s_2\cdot f)(m)=f(m(s_1s_2)) = f((ms_1)s_2)=(s_2\cdot f)(ms_1)=(s_1\cdot (s_2\cdot f))(m)$$
In other words, $s_1s_2\cdot f = s_1\cdot (s_2\cdot f)$.

The right $S'$-action on $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$ is defined through the right $S'$-action on $N$. In detail, for each $R$-module morphism $f:M\to N$ and $s'\in S'$ we define $f\cdot s':M\to N$ by $(f\cdot s')(m)=f(m)s'$. It is once more simple to verify that $f\cdot s'$ is an $R$-module morphism, and that this really does define a right $S'$-action on $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$.

In summary:

>[!summary] Hom-bimodules
>For each $(R,S)$-bimodule $M$ and $(R, S')$-bimodule $N$, the set of $\operatorname{Hom}_{R\text{-{\bf Mod}}}(M,N)$ of left $R$-module morphisms between $M$ and $N$ (viewed as left $R$-modules) has the structure of an $(S,S')$-bimodule.
>
>Similarly, for each $(R,S)$-bimodule $M$ and $(R',S)$-bimodule $N$, the set $\operatorname{Hom}_{S\text{-{\bf Mod}}}(M,N)$ of right $S$-module morphisms between $M$ and $N$ (viewed as right $S$-modules) has the structure of an $(R',R)$-bimodule.

> [!question] A more careful approach?
> We should really be careful here and use forgetful functors to move $M$ and $N$ into the category of left $R$-modules. Can you fill in the details?

## Triples of bimodules and hom-sets
---

Suppose $M$ is an $(R,S)$-bimodule, $N$ is an $(S, T)$-bimodule, and $P$ is an $(R,T)$-bimodule. By the above construction, the set $\operatorname{Hom}_{T\text{-{\bf Mod}}}(N,P)$ has the structure of an $(R,S)$-bimodule. We can then consider the set of $(R,S)$-bimodule morphisms between $M$ and $\operatorname{Hom}_{T\text{-{\bf Mod}}}(N,P)$. This is the set
$$\operatorname{Hom}_{(R,S)\text{-{\bf Bimod}}}(M,\operatorname{Hom}_{T\text{-{\bf Mod}}}(N,P)).$$
This set will play a critical role with the [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products III - Balanced Maps and a Universal Property of the Tensor Product\|tensor product]] construction on bimodules.


## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Module theory/Bimodules/The 2-category of bimodules\|The 2-category of bimodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products II - Tensor products of bimodules\|Tensor Products II - Tensor products of bimodules]]