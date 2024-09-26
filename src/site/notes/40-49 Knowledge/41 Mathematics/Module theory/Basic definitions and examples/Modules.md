---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/modules/","tags":["module_theory","quotes"],"updated":"2024-09-26T05:40:25-07:00"}
---

> [!quote] Everyone
> A module is just a vector space over a ring.
{ #94791c}


The quote above pretty much says it all. Have you ever wondered what would happen if you had a vector space $V$, but instead of the scalars coming from a field they came more generally from a ring^[We will always assume our rings contain unity.]? If so, you just stumbled upon the definition of a *module*.

> [!note] Definition of module
> Let $R$ be a ring. A *left $R$-module* (or *left module over $R$*) is an abelian group $M$ together with a left action of $R$ on $M$ that satisfies the following compatibility conditions:
> - $(r+s)m=rm+sm$ for all $r,s\in R$ and $m\in M$
> - $(rs)m=r(sm)$ for all $r,s\in R$ and $m\in M$
> - $r(m+n)=rm+rn$ for all $r\in R$ and $m,n\in M$
> - $1 m = m$ for all $m\in M$
>
> Analogously, a *right $R$-module* (or *right module over $R$*) is an abelian group $M$ together with a right action of $R$ on $M$ that satisfies the following compatibility conditions:
> - $m(r+s)=mr+ms$ for all $r,s\in R$ and $m\in M$
> - $m(rs)=(mr)s$ for all $r,s\in R$ and $m\in M$
> - $(m+n)r=mr+nr$ for all $r\in R$ and $m,n\in M$
> - $m1 = m$ for all $m\in M$
{ #ac6884}


You could reasonably complain about the the use of the word "action" in the above definition, since it hasn't been defined here and you possibly only encountered it previously in the context of a group acting on a set. However, it is being used here very much in the same spirit as in group theory, in that it is a set map $R\times M\to M$ that satisfies the expected compatibility conditions between the algebraic structures on $R$ and $M$ (detailed explicitly above). With a bit more category theory under our belts, we could reasonably consider defining the general notion of an *action* of an object of one category on an object of another. Something to keep in the back of our minds...

# Modules over commutative rings

Consider the case of a commutative ring $R$ and suppose $M$ is a left $R$-module. For clarity, denote the left action of a ring element $r$ on a module element $m$ by $r\cdot m$. Now define a right action of $R$ on $M$ by setting $m\star r = r\cdot m$. You can quickly check that this does indeed define a right $R$-action on $M$, giving (the underlying abelian group of $M$) the structure of a right $R$-module. The only property that requires the commutativity of $R$ is the "associativity" of the action. Indeed, on the one hand we have

$$m\star (rs) = (rs)\cdot m,$$

while on the other hand we have

$$(m\star r)\star s = (r\cdot m)\star s = s\cdot (r\cdot m) = (sr)\cdot m.$$

Thus, we need the original left $R$-action on $M$ to satisfy $(rs)\cdot m = (sr)\cdot m$ for every $r,s\in R$ and $m\in M$. Fortunately this is true when $R$ is assumed to be commutative.^[It's also theoretically possible this could hold for a noncommutative ring, but I have yet to see an example of this.]

> [!note] Modules over commutative rings
> When $R$ is a commutative ring, there is no real distinction between left and right $R$-modules. So, we simply refer to both as $R$-modules.

For a general (possibly noncommutative) ring, the phrase "$R$-module" is usually meant to mean "left $R$-module."

## A small note about the action of zero

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
