---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/modules/","tags":["module_theory","quotes"],"updated":"2025-10-08T10:15:04-07:00"}
---

> [!quote] Everyone
> A module is just a vector space over a ring.
{ #94791c}


## Definition of module
---

The quote above pretty much says it all. Have you ever wondered what would happen if you had a vector space $V$, but instead of a field of scalars you had a ring of scalars^[We will always assume our rings contain unity.]? If so, you just stumbled upon the definition of a *module*.

> [!note] Definition of module
> Let $R$ be a ring. A **left $R$-module** (or **left module over $R$**) is an abelian group $M$ together with a left action of $R$ on $M$ that satisfies the following compatibility conditions:
> - $(r+s)m=rm+sm$ for all $r,s\in R$ and $m\in M$
> - $(rs)m=r(sm)$ for all $r,s\in R$ and $m\in M$
> - $r(m+n)=rm+rn$ for all $r\in R$ and $m,n\in M$
> - $1 m = m$ for all $m\in M$
>
> Analogously, a **right $R$-module** (or **right module over $R$**) is an abelian group $M$ together with a right action of $R$ on $M$ that satisfies the following compatibility conditions:
> - $m(r+s)=mr+ms$ for all $r,s\in R$ and $m\in M$
> - $m(rs)=(mr)s$ for all $r,s\in R$ and $m\in M$
> - $(m+n)r=mr+nr$ for all $r\in R$ and $m,n\in M$
> - $m1 = m$ for all $m\in M$
{ #ac6884}


You could reasonably complain about the the use of the word "action" in the above definition, since it hasn't been defined here and you possibly only encountered it previously in the context of a group acting on a set. However, it is being used here very much in the same spirit as in group theory, in that it is a set map $R\times M\to M$ that satisfies the expected compatibility conditions between the algebraic structures on $R$ and $M$ (detailed explicitly above). With a bit more category theory under our belts, we could reasonably consider defining the general notion of an *action* of an object of one category on an object of another. Something to keep in the back of our minds...

### Modules over commutative rings

Suppose $M$ is a left module over a commutative ring $R$. For clarity, let's denote the left action of a ring element $r$ on a module element $m$ by $r\cdot m$. Now define a right action of $R$ on $M$ by setting $m\star r = r\cdot m$. You can quickly check that this does indeed define a right action of $R$ on $M$, giving (the underlying abelian group of $M$) the structure of a right $R$-module. The only property that requires the commutativity of $R$ is the "associativity" of the action. Indeed, on the one hand we have

$$m\star (rs) = (rs)\cdot m,$$

while on the other hand we have

$$(m\star r)\star s = (r\cdot m)\star s = s\cdot (r\cdot m) = (sr)\cdot m.$$

Thus, we need the original left $R$-action on $M$ to satisfy $(rs)\cdot m = (sr)\cdot m$ for every $r,s\in R$ and $m\in M$. Fortunately this is true when $R$ is assumed to be commutative.^[It's also theoretically possible this could hold for a noncommutative ring, but I have yet to see a nontrivial example of this.]

> [!note] Modules over commutative rings
> When $R$ is a commutative ring, there is no real distinction between left and right $R$-modules. So, we simply refer to both as $R$-modules. More precisely, the categories of left $R$-modules and right $R$-modules are equivalent (isomorphic, even).

For a general (possibly noncommutative) ring, the phrase "$R$-module" is usually meant to mean "left $R$-module."

### The action of zero

It will be occasionally useful to have the following simple result:

> [!summary] Zero acts as zero
> If $M$ is an $R$-module, then $0_R\cdot m = 0_M$ for every $m\in M$ and $r\cdot 0_M = 0_M$ for every $r\in R$.
{ #06c4a9}

Here's a quick proof, directly analogous to the similar statement for vector spaces (a special case of modules!). For every $m\in M$ we have $0_R \cdot m = (0_R+0_R)m = 0_R\cdot m+0_R\cdot m$. By additive cancellation (in the abelian group $M$) we then have $0_M = 0_R\cdot m$. Similarly, $r\cdot 0_M = r(0_M+0_M) = r\cdot 0_M + r\cdot 0_M$, and additive cancellation once again gives $0_M = r\cdot 0_M$.

## Examples
---

Given the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^94791c\|common quote]] about [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^ac6884\|modules]], our first example of a module really must be:
### Vector Spaces

If $R=k$ is a field then $k$-modules are exactly the same as $k$-vector spaces. What do we really mean when we say "are exactly the same as"? In this case we mean "literally the same, up to naming conventions". A $k$-vector space is [usually defined](https://en.wikipedia.org/wiki/Vector_space) to be a set $V$ together with a binary operation $V\times V\to V$ and a map $k\times V\to V$ satisfying a list of conditions. The first of those conditions are exactly the conditions for $V$ to be an abelian group; the rest are the same as [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^ac6884\|our conditions]] for $V$ to be a $k$-module. So the only differences are that we call $V$ an $k$-vector space (instead of an $k$-module) and call $k$ the field of scalars (instead of simply the ring acting on $V$).

> [!summary]
> Modules over fields are vector spaces. More precisely, the categories of $k$-modules and $k$-vector spaces are equivalent (isomorphic, even).

### Rings as modules

Every ring $R$ can be given the structure of a left module over itself, using the action of left multiplication on itself. In this context, the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules\|submodules]] of $R$ (when considered as a left $R$-module) are exactly the left ideals of $R$ (when considered as a ring).

Once again, we should ask what we mean when we say "are exactly the left ideals." Here we mean that there is a (natural) bijection between the set of left ideals of the ring $R$ and the set of submodules of $R$.

In theory, one could consider $R$-module structures on $R$ defined by other (left) actions of $R$ on itself, but in practice I have never seen that done. Perhaps it is because of the inherent notational issues, as you would need to be very careful to distinguish between when the operation is the internal multiplication of the ring and when it is the ring action; perhaps one could write $rs$ for the former and $r\bullet s$ for the latter? If I come across a discussion or example of this in action (pun intended), I'll be sure to link it here.

> [!summary]
> Rings can be considered as modules over themselves.

(This statement can be made categorically precise, but it requires some setup.)
### Abelian groups are ${\bf Z}$-modules
{ #706a2e}


It is simple to show^[See, for instance, page 338 in Dummit & Foote.] that ${\bf Z}$-modules are "exactly the same" as abelian groups.

> [!summary]
> Abelian groups are the same as ${\bf Z}$-modules. More precisely, the categories of abelian groups and (left) ${\bf Z}$-modules are equivalent (isomorphic, even).

### Same group, different modules

A given abelian group can even have different module structures, even for the same ring $R$.  Being specific about the type of module (i.e., the ring doing the acting) can be important when talking about [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms\|module morphisms]].

For example, the field ${\bf R}$ can be viewed as an ${\bf R}$-module, a ${\bf Q}$-module, or a ${\bf Z}$-module.  (As usual, what we really mean is that the abelian group consisting of the real numbers under addition can be endowed with the structure of a module over various rings.)

> [!summary]
> A given abelian group $M$ can have many different module structures, even for the same ring $R$. In other words, the forgetful functor $U:R\text{-{\bf Mod}}\to {\bf Ab}$ is not injective on objects.

### Vector spaces with linear endomorphisms

Suppose $k$ is a field. If $V$ is an $k$-vector space and $T:V\to V$ is a $k$-linear transformation, then we can define an $k[x]$-module structure on $V$ by $p(x)v=p(T)v$ for every $p(x)\in k[x]$ and $v\in V$. It is straightforward to show^[See page 339 in Dummit & Foote.] the converse is also true, and that we have a bijection between the collection of $k[x]$-modules and pairs $(V,T)$ of consisting of a $k$-vector space and a $k$-linear endomorphism of that vector space. One can then also show that under this bijection the $k[x]$-submodules correspond to $T$-stable subspaces. We'll explore this more fully later.

> [!summary]
> When $k$ is a field, modules over the polynomial ring $k[x]$ are (equivalent to) $k$-vector spaces together with a fixed linear endomorphism.

### Passing to quotient rings

Suppose $M$ is an $R$-module and $I\subseteq R$ is a two-sided ideal of $R$ that [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilates]] $M$, i.e., $im=0$ for all $i\in I$ and $m\in M$. Then we can define an $R/I$-module structure on $M$ in the obvious way: $(r+I)m = rm$ for $r\in R$ and $m\in M$. (You should verify that the "annihilation" condition is needed to ensure this action is well defined.)

For example, if $M$ is a finite abelian group of order $n$, then $nm=0$ for every $m\in M$, i.e., the ideal $\langle n\rangle\subseteq {\bf Z}$ [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilates]] $M$. We can therefore also view $M$ as a $({\bf Z}/n{\bf Z})$-module.

### The zero module

For every ring $R$ the trivial group $\{0\}$ is also an $R$-module (with trivial action of $R$). This module is often denoted simply $0$. It is the zero object in the category of left $R$-modules, i.e., it is both an initial and a terminal object in the category. For each $R$-module $M$, there is a unique module morphism $0\to M$ (sending the element $0$ to $0_M$) as well as a unique module morphism $M\to 0$ (sending every element $m\in M$ to $0$). A module morphism $f:M\to N$ is trivial (i.e., $f(m)=0_N$ for all $m\in M$) exactly when it factors through the 0 module.

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 149.47216796875 94.41209411621094" width="200" height="94.41209411621094" class="excalidraw-svg"><!-- svg-source:excalidraw --><metadata/><defs><symbol id="image-d8a806aad02357da8ecf5f01ca311e094968f690"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjA1ZXg7IiB3aWR0aD0iMjEuMzEiIGhlaWdodD0iMTUuNTciIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjY2IDUwMCA2ODgiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTMtVEVYLU4tMzAiIGQ9Ik05NiA1ODVRMTUyIDY2NiAyNDkgNjY2UTI5NyA2NjYgMzQ1IDY0MFQ0MjMgNTQ4UTQ2MCA0NjUgNDYwIDMyMFE0NjAgMTY1IDQxNyA4M1EzOTcgNDEgMzYyIDE2VDMwMSAtMTVUMjUwIC0yMlEyMjQgLTIyIDE5OCAtMTZUMTM3IDE2VDgyIDgzUTM5IDE2NSAzOSAzMjBRMzkgNDk0IDk2IDU4NVpNMzIxIDU5N1EyOTEgNjI5IDI1MCA2MjlRMjA4IDYyOSAxNzggNTk3UTE1MyA1NzEgMTQ1IDUyNVQxMzcgMzMzUTEzNyAxNzUgMTQ1IDEyNVQxODEgNDZRMjA5IDE2IDI1MCAxNlEyOTAgMTYgMzE4IDQ2UTM0NyA3NiAzNTQgMTMwVDM2MiAzMzNRMzYyIDQ3OCAzNTQgNTI0VDMyMSA1OTdaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibW4iPjx1c2UgZGF0YS1jPSIzMCIgeGxpbms6aHJlZj0iI01KWC0xMy1URVgtTi0zMCIvPjwvZz48L2c+PC9nPjxzdHlsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgdHlwZT0idGV4dC9jc3MiPi5tangtc29saWQgeyBzdHJva2Utd2lkdGg6IDgwcHg7IH08L3N0eWxlPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-9e65bd4f479e2abe345821d8c20587e1a7fe003e"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjAuMDkiIGhlaWdodD0iMTUuNDUiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjgzIDg4OCA2ODMiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTItVEVYLUktMUQ0NDEiIGQ9Ik0yMzQgNjM3UTIzMSA2MzcgMjI2IDYzN1EyMDEgNjM3IDE5NiA2MzhUMTkxIDY0OVExOTEgNjc2IDIwMiA2ODJRMjA0IDY4MyAyOTkgNjgzUTM3NiA2ODMgMzg3IDY4M1Q0MDEgNjc3UTYxMiAxODEgNjE2IDE2OEw2NzAgMzgxUTcyMyA1OTIgNzIzIDYwNlE3MjMgNjMzIDY1OSA2MzdRNjM1IDYzNyA2MzUgNjQ4UTYzNSA2NTAgNjM3IDY2MFE2NDEgNjc2IDY0MyA2NzlUNjUzIDY4M1E2NTYgNjgzIDY4NCA2ODJUNzY3IDY4MFE4MTcgNjgwIDg0MyA2ODFUODczIDY4MlE4ODggNjgyIDg4OCA2NzJRODg4IDY1MCA4ODAgNjQyUTg3OCA2MzcgODU4IDYzN1E3ODcgNjMzIDc2OSA1OTdMNjIwIDdRNjE4IDAgNTk5IDBRNTg1IDAgNTgyIDJRNTc5IDUgNDUzIDMwNUwzMjYgNjA0TDI2MSAzNDRRMTk2IDg4IDE5NiA3OVEyMDEgNDYgMjY4IDQ2SDI3OFEyODQgNDEgMjg0IDM4VDI4MiAxOVEyNzggNiAyNzIgMEgyNTlRMjI4IDIgMTUxIDJRMTIzIDIgMTAwIDJUNjMgMlQ0NiAxUTMxIDEgMzEgMTBRMzEgMTQgMzQgMjZUMzkgNDBRNDEgNDYgNjIgNDZRMTMwIDQ5IDE1MCA4NVExNTQgOTEgMjIxIDM2MkwyODkgNjM0UTI4NyA2MzUgMjM0IDYzN1oiLz48L2RlZnM+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIj48ZyBkYXRhLW1tbC1ub2RlPSJtYXRoIj48ZyBkYXRhLW1tbC1ub2RlPSJtaSI+PHVzZSBkYXRhLWM9IjFENDQxIiB4bGluazpocmVmPSIjTUpYLTEyLVRFWC1JLTFENDQxIi8+PC9nPjwvZz48L2c+PHN0eWxlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiB0eXBlPSJ0ZXh0L2NzcyI+Lm1qeC1zb2xpZCB7IHN0cm9rZS13aWR0aDogODBweDsgfTwvc3R5bGU+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-135f81b937fda165747e4ca78d83bc1791007a6a"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjMuNzgiIGhlaWdodD0iMTUuNDUiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjgzIDEwNTEgNjgzIj48ZGVmcz48cGF0aCBpZD0iTUpYLTExLVRFWC1JLTFENDQwIiBkPSJNMjg5IDYyOVEyODkgNjM1IDIzMiA2MzdRMjA4IDYzNyAyMDEgNjM4VDE5NCA2NDhRMTk0IDY0OSAxOTYgNjU5UTE5NyA2NjIgMTk4IDY2NlQxOTkgNjcxVDIwMSA2NzZUMjAzIDY3OVQyMDcgNjgxVDIxMiA2ODNUMjIwIDY4M1QyMzIgNjg0UTIzOCA2ODQgMjYyIDY4NFQzMDcgNjgzUTM4NiA2ODMgMzk4IDY4M1Q0MTQgNjc4UTQxNSA2NzQgNDUxIDM5Nkw0ODcgMTE3TDUxMCAxNTRRNTM0IDE5MCA1NzQgMjU0VDY2MiAzOTRRODM3IDY3MyA4MzkgNjc1UTg0MCA2NzYgODQyIDY3OFQ4NDYgNjgxTDg1MiA2ODNIOTQ4UTk2NSA2ODMgOTg4IDY4M1QxMDE3IDY4NFExMDUxIDY4NCAxMDUxIDY3M1ExMDUxIDY2OCAxMDQ4IDY1NlQxMDQ1IDY0M1ExMDQxIDYzNyAxMDA4IDYzN1E5NjggNjM2IDk1NyA2MzRUOTM5IDYyM1E5MzYgNjE4IDg2NyAzNDBUNzk3IDU5UTc5NyA1NSA3OTggNTRUODA1IDUwVDgyMiA0OFQ4NTUgNDZIODg2UTg5MiAzNyA4OTIgMzVRODkyIDE5IDg4NSA1UTg4MCAwIDg2OSAwUTg2NCAwIDgyOCAxVDczNiAyUTY3NSAyIDY0NCAyVDYwOSAxUTU5MiAxIDU5MiAxMVE1OTIgMTMgNTk0IDI1UTU5OCA0MSA2MDIgNDNUNjI1IDQ2UTY1MiA0NiA2ODUgNDlRNjk5IDUyIDcwNCA2MVE3MDYgNjUgNzQyIDIwN1Q4MTMgNDkwVDg0OCA2MzFMNjU0IDMyMlE0NTggMTAgNDUzIDVRNDUxIDQgNDQ5IDNRNDQ0IDAgNDMzIDBRNDE4IDAgNDE1IDdRNDEzIDExIDM3NCAzMTdMMzM1IDYyNEwyNjcgMzU0UTIwMCA4OCAyMDAgNzlRMjA2IDQ2IDI3MiA0NkgyODJRMjg4IDQxIDI4OSAzN1QyODYgMTlRMjgyIDMgMjc4IDFRMjc0IDAgMjY3IDBRMjY1IDAgMjU1IDBUMjIxIDFUMTU3IDJRMTI3IDIgOTUgMVQ1OCAwUTQzIDAgMzkgMlQzNSAxMVEzNSAxMyAzOCAyNVQ0MyA0MFE0NSA0NiA2NSA0NlExMzUgNDYgMTU0IDg2UTE1OCA5MiAyMjMgMzU0VDI4OSA2MjlaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ0MCIgeGxpbms6aHJlZj0iI01KWC0xMS1URVgtSS0xRDQ0MCIvPjwvZz48L2c+PC9nPjxzdHlsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgdHlwZT0idGV4dC9jc3MiPi5tangtc29saWQgeyBzdHJva2Utd2lkdGg6IDgwcHg7IH08L3N0eWxlPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-d15281175165b430f8410abd6d237300e7a282c2"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQ2NGV4OyIgd2lkdGg9IjIyLjQ0IiBoZWlnaHQ9IjIwLjU5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTcwNSA1NTAgOTEwIj48ZGVmcz48cGF0aCBpZD0iTUpYLTEwLVRFWC1JLTFENDUzIiBkPSJNMTE4IC0xNjJRMTIwIC0xNjIgMTI0IC0xNjRUMTM1IC0xNjdUMTQ3IC0xNjhRMTYwIC0xNjggMTcxIC0xNTVUMTg3IC0xMjZRMTk3IC05OSAyMjEgMjdUMjY3IDI2N1QyODkgMzgyVjM4NUgyNDJRMTk1IDM4NSAxOTIgMzg3UTE4OCAzOTAgMTg4IDM5N0wxOTUgNDI1UTE5NyA0MzAgMjAzIDQzMFQyNTAgNDMxUTI5OCA0MzEgMjk4IDQzMlEyOTggNDM0IDMwNyA0ODJUMzE5IDU0MFEzNTYgNzA1IDQ2NSA3MDVRNTAyIDcwMyA1MjYgNjgzVDU1MCA2MzBRNTUwIDU5NCA1MjkgNTc4VDQ4NyA1NjFRNDQzIDU2MSA0NDMgNjAzUTQ0MyA2MjIgNDU0IDYzNlQ0NzggNjU3TDQ4NyA2NjJRNDcxIDY2OCA0NTcgNjY4UTQ0NSA2NjggNDM0IDY1OFQ0MTkgNjMwUTQxMiA2MDEgNDAzIDU1MlQzODcgNDY5VDM4MCA0MzNRMzgwIDQzMSA0MzUgNDMxUTQ4MCA0MzEgNDg3IDQzMFQ0OTggNDI0UTQ5OSA0MjAgNDk2IDQwN1Q0OTEgMzkxUTQ4OSAzODYgNDgyIDM4NlQ0MjggMzg1SDM3MkwzNDkgMjYzUTMwMSAxNSAyODIgLTQ3UTI1NSAtMTMyIDIxMiAtMTczUTE3NSAtMjA1IDEzOSAtMjA1UTEwNyAtMjA1IDgxIC0xODZUNTUgLTEzMlE1NSAtOTUgNzYgLTc4VDExOCAtNjFRMTYyIC02MSAxNjIgLTEwM1ExNjIgLTEyMiAxNTEgLTEzNlQxMjcgLTE1N0wxMTggLTE2MloiLz48L2RlZnM+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIj48ZyBkYXRhLW1tbC1ub2RlPSJtYXRoIj48ZyBkYXRhLW1tbC1ub2RlPSJtaSI+PHVzZSBkYXRhLWM9IjFENDUzIiB4bGluazpocmVmPSIjTUpYLTEwLVRFWC1JLTFENDUzIi8+PC9nPjwvZz48L2c+PHN0eWxlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiB0eXBlPSJ0ZXh0L2NzcyI+Lm1qeC1zb2xpZCB7IHN0cm9rZS13aWR0aDogODBweDsgfTwvc3R5bGU+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol><style class="style-fonts">/**/</style></defs><g stroke-linecap="round"><g transform="translate(30.736549377441406 50.91346740722656) rotate(0 17.188568115234375 -14.415951706262035)"><path d="M0 0 C5.73 -4.81, 28.65 -24.03, 34.38 -28.83 M0 0 C5.73 -4.81, 28.65 -24.03, 34.38 -28.83" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(30.736549377441406 50.91346740722656) rotate(0 17.188568115234375 -14.415951706262035)"><path d="M34.38 -28.83 L28.03 -15.24 L19.89 -24.95 L34.38 -28.83" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M34.38 -28.83 C32.76 -25.36, 31.14 -21.89, 28.03 -15.24 M34.38 -28.83 C33.03 -25.95, 31.68 -23.06, 28.03 -15.24 M28.03 -15.24 C25.5 -18.27, 22.96 -21.29, 19.89 -24.95 M28.03 -15.24 C25.89 -17.79, 23.75 -20.34, 19.89 -24.95 M19.89 -24.95 C24.87 -26.29, 29.86 -27.62, 34.38 -28.83 M19.89 -24.95 C24.86 -26.28, 29.83 -27.62, 34.38 -28.83 M34.38 -28.83 C34.38 -28.83, 34.38 -28.83, 34.38 -28.83 M34.38 -28.83 C34.38 -28.83, 34.38 -28.83, 34.38 -28.83" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(87.18595123291016 23.26147659146929) rotate(0 18.4912109375 15.070341324727039)"><path d="M0 0 C6.16 5.02, 30.82 25.12, 36.98 30.14 M0 0 C6.16 5.02, 30.82 25.12, 36.98 30.14" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(87.18595123291016 23.26147659146929) rotate(0 18.4912109375 15.070341324727039)"><path d="M36.98 30.14 L22.44 26.47 L30.45 16.64 L36.98 30.14" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M36.98 30.14 C31.46 28.75, 25.94 27.35, 22.44 26.47 M36.98 30.14 C31.7 28.8, 26.41 27.47, 22.44 26.47 M22.44 26.47 C24.07 24.46, 25.7 22.46, 30.45 16.64 M22.44 26.47 C25.57 22.63, 28.69 18.79, 30.45 16.64 M30.45 16.64 C32.71 21.31, 34.97 25.98, 36.98 30.14 M30.45 16.64 C32.78 21.45, 35.11 26.27, 36.98 30.14 M36.98 30.14 C36.98 30.14, 36.98 30.14, 36.98 30.14 M36.98 30.14 C36.98 30.14, 36.98 30.14, 36.98 30.14" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(32.746498107910156 62.94920349121094) rotate(0 42.61621093749999 -0.05374317820881913)"><path d="M0 0 C14.21 -0.02, 71.03 -0.09, 85.23 -0.11 M0 0 C14.21 -0.02, 71.03 -0.09, 85.23 -0.11" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(32.746498107910156 62.94920349121094) rotate(0 42.61621093749999 -0.05374317820881913)"><path d="M85.23 -0.11 L71.65 6.25 L71.63 -6.43 L85.23 -0.11" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M85.23 -0.11 C80.15 2.27, 75.06 4.65, 71.65 6.25 M85.23 -0.11 C80.1 2.29, 74.97 4.69, 71.65 6.25 M71.65 6.25 C71.64 2.15, 71.64 -1.94, 71.63 -6.43 M71.65 6.25 C71.64 3.5, 71.64 0.75, 71.63 -6.43 M71.63 -6.43 C75.21 -4.77, 78.78 -3.11, 85.23 -0.11 M71.63 -6.43 C74.69 -5.01, 77.76 -3.58, 85.23 -0.11 M85.23 -0.11 C85.23 -0.11, 85.23 -0.11, 85.23 -0.11 M85.23 -0.11 C85.23 -0.11, 85.23 -0.11, 85.23 -0.11" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(59.594154357910156 69.41209411621094) rotate(0 8 7.5)"><use href="#image-d15281175165b430f8410abd6d237300e7a282c2" width="16" height="15" opacity="1"/></g><g transform="translate(10 57.74299621582031) rotate(0 8.5 5.5)"><use href="#image-135f81b937fda165747e4ca78d83bc1791007a6a" width="17" height="11" opacity="1"/></g><g transform="translate(125.47216796875 58.39079284667969) rotate(0 7 5.5)"><use href="#image-9e65bd4f479e2abe345821d8c20587e1a7fe003e" width="14" height="11" opacity="1"/></g><g transform="translate(67.22674560546875 10) rotate(0 7.5 5.5)"><use href="#image-d8a806aad02357da8ecf5f01ca311e094968f690" width="15" height="11" opacity="1"/></g></svg>


## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms\|Module morphisms]]
[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules\|Submodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]
