---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/bimodules/bimodules/","tags":["#module_theory"],"updated":"2024-03-06T13:52:46-08:00"}
---

Generalizing the notion of a module, we can consider an abelian group endowed with *both* a left- and right-action. Such a structure is called a *bimodule*.

>[!note] Definition of bimodule
>Let $R$ and $S$ be rings (with unity). An **$(R,S)$-bimodule** consists of an abelian group $M$ with both the structure of a left $R$-module and right $S$-module, such that $r(ms)=(rm)s$ for every $r\in R$, $s\in S$, and $m\in M$.
{ #669e77}


This might seem like a lot to expect out of an abelian group, but it turns out that there are at least as many bimodules as there are modules. [[40-49 Knowledge/41 Mathematics/Module theory/Bimodules/Examples of bimodules\|Here]] are some examples.
## Morphisms of bimodules

### Bimodule morphisms

>[!note] Definition of bimodule morphism
>If $M$ and $N$ are $(R,S)$-bimodules, then a set map $f:M\to N$ is a **bimodule morphism** if it is both a left $R$-module morphism and a right $S$-module morphism.

Short and sweet.

As with $R$-modules, for any pair of $(R,S)$-bimodules $M$ and $N$, the set of bimodule morphisms between them has the structure of an abelian group (using the addition in $N$).
### Other maps between bimodules
There's a lot more to the story about bimodule morphisms, though. First suppose $M$ is an $(R,S)$-bimodule and $N$ is an $(R,S')$-bimodule. If we forget the right-actions and consider the left $R$-modules $M$ and $N$, we can consider the set of left $R$-module morphisms, $\operatorname{Hom}_R(M,N)$. This set actually has the structure of an $(S,S')$-bimodule, as follows.

The addition in $\operatorname{Hom}_R(M,N)$ is defined through the addition in $N$. In other words, given $R$-module morphisms $f,g:M\to N$ we define $f+g:M\to N$ by $(f+g)(m)=f(m)+g(m)$. Observe that $f+g$ is indeed an $R$-module morphism. First, it is additive since $f$ and $g$ are additive; second, it is compatible with the $R$-actions since $f$ and $g$ are compatible with the $R$-actions.

The left $S$-action on $\operatorname{Hom}_R(M,N)$ is defined through the right $S$-action on $M$. In detail, for each $R$-module morphism $f:M\to N$ and $s\in S$ we define $s\cdot f:M\to N$ by $(s\cdot f)(m)=f(ms)$. Again, it is straightforward to verify that $s\cdot f$ is an $R$-module morphism. Moreover, this really does define a left $S$-action on $\operatorname{Hom}_R(M,N)$, since
$$(s_1s_2\cdot f)(m)=f(m(s_1s_2)) = f((ms_1)s_2)=(s_2\cdot f)(ms_1)=(s_1\cdot (s_2\cdot f))(m)$$
In other words, $s_1s_2\cdot f = s_1\cdot (s_2\cdot f)$.

The right $S'$-action on $\operatorname{Hom}_R(M,N)$ is defined through the right $S'$-action on $N$. In detail, for each $R$-module morphism $f:M\to N$ and $s'\in S'$ we define $f\cdot s':M\to N$ by $(f\cdot s')(m)=f(m)s'$. It is once more simple to verify that $f\cdot s'$ is an $R$-module morphism, and that this really does define a right $S'$-action on $\operatorname{Hom}_R(M,N)$.

In summary:
>[!summary] Hom-bimodules
>For each $(R,S)$-bimodule $M$ and $(R, S')$-bimodule $N$, the set of $\operatorname{Hom}_R(M,N)$ of left $R$-module morphisms between $M$ and $N$ (viewed as left $R$-modules) has the structure of an $(S,S')$-bimodule.
>
>Similarly, for each $(R,S)$-bimodule $M$ and $(R',S)$-bimodule $N$, the set $\operatorname{Hom}_S(M,N)$ of right $S$-module morphisms between $M$ and $N$ (viewed as right $S$-modules) has the structure of an $(R',R)$-bimodule.

### Triples of bimodules and hom-sets

Suppose $M$ is an $(R,S)$-bimodule, $N$ is an $(S, T)$-bimodule, and $P$ is an $(R,T)$-bimodule. By the above construction, the set $\operatorname{Hom}_T(N,P)$ has the structure of an $(R,S)$-bimodule. We can then consider the set of $(R,S)$-bimodule morphisms between $M$ and $\operatorname{Hom}_T(N,P)$. This is the set
$$\operatorname{Hom}_{(R,S)}(M,\operatorname{Hom}_T(N,P)).$$
This set will play a critical role with the [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products III - Balanced Maps and the Universal Property of the Tensor Product\|tensor product]] construction on bimodules.