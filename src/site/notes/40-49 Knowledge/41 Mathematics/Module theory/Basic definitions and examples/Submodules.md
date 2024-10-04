---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/submodules/","tags":["module_theory"],"updated":"2024-10-03T19:50:15-07:00"}
---

# Definition

> [!note] Definition of submodule
> Let $R$ be a ring and $M$ be an $R$-module. An *$R$-submodule* of $M$ is a subset $N\subseteq M$ that is a subgroup (under their abelian group structures) and that is closed under the action of ring elements, i.e., $rn\in N$ for every $r\in R$ and $n\in N$.

In the case $R=F$ is a field, submodules are the same as subspaces. Also note that since abelian groups must be nonempty, so must submodules.

As usual in algebra, we have an equivalent criterion for checking to see if a subset of a module is a submodule.

>[!summary] The Submodule Criterion
>Let $R$ be a ring and $M$ be an $R$-module. A subset $N\subseteq M$ is a submodule of $M$ if and only if $N$ is nonempty and $n_1+rn_2\in N$ for every $r\in R$ and $n_1, n_2\in N$.

Do I personally ever use this criterion? I do not. Please do not shame me.

# Examples

## The largest and smallest submodules

For a module $M$, the entire module $M$ itself is a submodule, called the **improper** submodule. At the other extreme, the trivial subgroup $\{0\}\subseteq M$ is also a submodule, called the **trivial** submodule. When viewed as a module in its own right, it is usually called the [[Examples of modules#The zero module\|zero module]].

---
## Submodules and ideals

When a ring $R$ is considered as a left $R$-module (via left multiplication), the submodules of $R$ are in (natural) bijection with the left ideals of $R$.

---
## Submodules and subgroups

[[Examples of modules#Abelian groups are ${ bf Z}$-modules\|Recall]] that a ${\bf Z}$-module is the same as an abelian group. Under this identification, submodules are in (natural) bijection with subgroups.

---
## Submodules and vector spaces

[[Examples of modules#More about vector spaces\|Recall]] that if $F$ is a field, then an $F[x]$-module is the same as an $F$-vector space $V$ together with a linear endomorphism $T:V\to V$. Under this identification, $F[x]$-submodules of $(V,T)$ are the same as $T$-stable subspaces of $V$, i.e., subspaces $U\subseteq V$ such that $T(U)\subseteq U$.

>[!summary]
>$F[x]$-submodules are $T$-stable subspaces

---
## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules\|Module morphisms and submodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]