---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/examples-of-modules/","tags":["module_theory"],"updated":"2024-03-06T13:42:00-08:00"}
---

Given the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^94791c\|common quote]] about [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^ac6884\|modules]], our first example of a module really must be:
### Vector Spaces

If $R=F$ is a field then $F$-modules are exactly the same as $F$-vector spaces. What do we really mean when we say "are exactly the same as"? In this case we mean "literally the same, up to naming conventions". An $F$-vector space is [usually defined](https://en.wikipedia.org/wiki/Vector_space) to be a set $V$ together with a binary operation $V\times V\to V$ and a map $F\times V\to V$ satisfying a list of conditions. The first of those conditions are exactly the conditions for $V$ to be an abelian group; the rest are the same as [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^ac6884\|our conditions]] for $V$ to be an $F$-module. So the only differences are that we call $V$ an $F$-vector space (instead of an $F$-module) and call $F$ the field of scalars (instead of simply the ring acting on $V$).

>[!summary]
>Modules over fields are vector spaces

---
### Rings as modules

Every ring $R$ is a left $R$-module, using the action of left multiplication on itself. In this context, the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules\|submodules]] of $R$ (when considered as a left $R$-module) are exactly the left ideals of $R$ (when considered as a ring).

Once again, we should ask what we mean when we say "are exactly the left ideals." Here we mean that there is a bijection between the set of left ideals of the ring $R$ and the set of submodules of $R$.

In theory, one could consider $R$-module structures on $R$ defined by other (left) actions of $R$ on itself, but in practice I have never seen that done. Perhaps it is because of the notational issues, as you would need to be very careful to distinguish between when the operation is the internal multiplication of the ring, as opposed to the ring action; perhaps one could write $rs$ for the former and $r\bullet s$ for the latter? If I come across a discussion or example of this in action (pun intended), I'll be sure to link it here.

>[!summary]
>Rings are modules over themselves

---
### Abelian groups are ${\bf Z}$-modules
{ #706a2e}


It is [[Dummit, Foote - Abstract Algebra - 3e.pdf#page=352|simple to show]] that ${\bf Z}$-modules are "exactly the same" as abelian groups. 

>[!summary] Abelian groups are the same as ${\bf Z}$-modules
### Same group, different modules

For example, the field ${\bf R}$ can be viewed as ${\bf R}$-module, a ${\bf Q}$-module, or a ${\bf Z}$-module.  (As usual, what we really mean is that the abelian group consisting of the real numbers under addition can have the structure of a module over various rings.)

A given abelian group can even have different module structures for the same ring, $R$.  Being specific about the type of module (i.e., the ring doing the acting) can be important when talking about [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms\|module morphisms]].

>[!summary]
>A given abelian group $M$ can have many different module structures.

---
### Vector spaces with linear endomorphisms

Suppose $F$ is a field. If $V$ is an $F$-vector space and $T:V\to V$ is a linear transformation, then we can define an $F[x]$-module structure on $V$ by $p(x)v=p(T)v$ for every $p(x)\in F[x]$ and $v\in V$. It is [[Dummit, Foote - Abstract Algebra - 3e.pdf#page-353|straightforward to show]] the converse is also true, and that we have a bijection between the collection of $F[x]$-modules and pairs $(V,T)$ of $F$-vector spaces with linear endomorphisms. One can then also show that under this bijection the $F[x]$-submodules correspond to $T$-stable subspaces. We'll explore this more fully later.

>[!summary]
>$F[x]$-modules are $F$-vector spaces together with a fixed linear endomorphism

---
### Passing to quotient rings

Suppose $M$ is an $R$-module and $I\subseteq R$ is a two-sided ideal of $R$. Suppose $I$ [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilates]] $M$, i.e., $im=0$ for all $i\in I$ and $m\in M$. Then we can define an $R/I$-module structure on $M$ in the obvious way: $(r+I)m = rm$ for $r\in R$ and $m\in M$.

For example, if $M$ is a finite abelian group of order $n$, then $nm=0$ for every $m\in M$, i.e., the ideal $(n)\subseteq {\bf Z}$ [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilates]] $M$. We can therefore also view $M$ as a ${\bf Z}/n{\bf Z}$-module.

---
### The zero module

For every ring $R$, the trivial group $\{0\}$ is also an $R$-module (with trivial action of $R$). This module is often denoted simply $0$. It is the zero object in the category of left $R$-modules, i.e., it is both an initial and a terminal object in the category. For each $R$-module $M$, there is both a unique module morphism $0\to M$ (sending the element $0$ to $0_M$) and a unique module morphism $M\to 0$ (sending every element $m\in M$ to $0$). A module morphism $f:M\to N$ is trivial (i.e., $f(m)=0_N$ for all $m\in M$) exactly when it factors through the 0 module.
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwxLCJNIl0sWzIsMSwiTiJdLFsxLDAsIjAiXSxbMCwyXSxbMiwxXSxbMCwxLCJmIiwyXV0=&embed" width="200" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
