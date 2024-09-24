---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/modules/","tags":["module_theory","quotes"],"updated":"2024-09-24T11:15:12-07:00"}
---

> [!quote] Everyone
> A module is just a vector space over a ring.
{ #94791c}


The quote above pretty much says it all. Have you ever wondered what would happen if you had a vector space $V$, but instead of the scalars coming from a field they came more generally from a ring^[We will always assume our rings contain unity.]? If so, you just stumbled upon the definition of a *module*.

> [!note] Definition of a module
> Let $R$ be a ring. A *left $R$-module* (or *left module over $R$*) is an abelian group $M$ together with a left action of $R$ on $M$ that satisfies the expected compatibility conditions:
> - $(r+s)m=rm+sm$ for all $r,s\in R$ and $m\in M$
> - $(rs)m=r(sm)$ for all $r,s\in R$ and $m\in M$
> - $r(m+n)=rm+rn$ for all $r\in R$ and $m,n\in M$
> - $1 m = m$ for all $m\in M$
{ #ac6884}


You could reasonably complain about the the use of the word "action" in the above definition, since it hasn't been defined here and you possibly only encountered it previously in the context of a group acting on a set. However, it is being used here very much in the same spirit as in group theory, in that it is a set map $R\times M\to M$ that satisfies the expected compatibility conditions between the algebraic structures on $R$ and $M$ (detailed explicitly above). With a bit more category theory under our belts, we could reasonably consider defining the general notion of an *action* of an object of one category on an object of another. Something to keep in the back of our minds...

### A small note about the action of zero

It will be occasionally useful to have the following simple result:
>[!summary] Zero acts as zero
>If $M$ is an $R$-module, then $0_R\cdot m = 0_M$ for every $m\in M$ and $r\cdot 0_M = 0_M$ for every $r\in R$.
{ #06c4a9}

Here's a quick proof, directly analogous to the similar statement for vector spaces (a special case of modules!). For any $m\in M$ we have $0_R \cdot m = (0_R+0_R)m = 0_R\cdot m+0_R\cdot m$. By additive cancellation (in the abelian group $M$) we then have $0_M = 0_R\cdot m$. Similarly, $r\cdot 0_M = r(0_M+0_M) = r\cdot 0_M + r\cdot 0_M$, and additive cancellation once again gives $0_M = r\cdot 0_M$.

## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Examples of modules\|Examples of modules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms\|Module morphisms]]
[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules\|Submodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]
