---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/submodules/","tags":["module_theory"],"updated":"2025-10-08T10:36:01-07:00"}
---

I have certain opinions on whether subobjects should really be studied (at least early on in a theory, and possibly ever). While category theory can certainly be forced to incorporate such a notion, it always seems (at least to me) exactly like that: forcing the theory to accommodate a concept for which it was not naturally built. I've also yet to encounter a situation in which the notion of subobject was strictly necessary and couldn't be replaced by a closely related concept (e.g., simply a monic arrow).

Nevertheless, for now I shall bow to the unstoppable collective compulsion to immediately introduce the notion of subobject after defining a new type of object. I will, however, frequently ask the question "Did we really need the notion of subobject here?" I think we'll find that the answer is usually "No, not really."

## Definition of submodule
---

> [!note] Definition of submodule
> Let $R$ be a ring and $M$ be an $R$-module. An **$R$-submodule** of $M$ is a subset $N\subseteq M$ that is a subgroup (under the abelian group structure) and that is closed under the action of ring elements, i.e., $rn\in N$ for every $r\in R$ and $n\in N$.

Note that, since abelian groups must be nonempty, so must submodules.

As usual in algebra, we have an equivalent criterion for checking to see if a subset of a module is a submodule.

>[!summary] The Submodule Criterion
>Let $R$ be a ring and $M$ be an $R$-module. A subset $N\subseteq M$ is a submodule of $M$ if and only if $N$ is nonempty and $n_1+rn_2\in N$ for every $r\in R$ and $n_1, n_2\in N$.

Do I personally ever use this criterion? I do not. Please do not shame me.

## Examples
---

### The largest and smallest submodules

For each module $M$, the entire module $M$ itself is a submodule, called the **improper** submodule. At the other extreme, the trivial subgroup $\{0_M\}\subseteq M$ is also a submodule, called the **trivial** submodule.

### Submodules and ideals

When a ring $R$ is considered as a left $R$-module (via left multiplication), the submodules of $R$ are in (natural) bijection with the left ideals of $R$.

### Submodules and subgroups

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#Abelian groups are ${ bf Z}$-modules\|Recall]] that a ${\bf Z}$-module is "the same" as an abelian group. Under this identification, submodules are in (natural) bijection with subgroups.

### Submodules and vector spaces

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#Vector Spaces\|Recall]] that when $R=k$ is a field, modules are the same as $k$-vector spaces. In this case, submodules are exactly the same as subspaces.

### Submodules of $k[x]$-modules

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#Vector spaces with linear endomorphisms\|Recall]] that if $k$ is a field, then an $k[x]$-module consists of a $k$-vector space $V$ together with a $k$-linear endomorphism $T:V\to V$. Under this identification, $k[x]$-submodules of $(V,T)$ are the $T$-stable subspaces of $V$, i.e., subspaces $U\subseteq V$ such that $T(U)\subseteq U$.

>[!summary]
>$k[x]$-submodules correspond to $T$-stable subspaces, where $T$ is the $k$-linear endomorphism encoding the action of $x$.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules\|Module morphisms and submodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]