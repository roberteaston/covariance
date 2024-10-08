---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/free-modules/","tags":["module_theory"],"updated":"2024-10-08T10:07:05-07:00"}
---

## Free objects

At the most intuitive level, a "free object" is an object with no other "relations" beyond those required of every object of that type, e.g., a "free group" is a group with no relations beyond those required of every group. To formalize this, we first start with a set $A$ and then define the "free object on $A$" as the "smallest" or "simplest" object $F(A)$ one can create (of the desired type) beginning from only the set $A$. But how do we formalize "smallest" or "simplest"? We might [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Yoneda's Lemma\|reasonably suggest]] that the definition be such that $F(A)$ has a desired universal property. For example, the free group $F(A)$ should be the group such that group morphisms $F(A)\to G$ correspond bijectively (and "naturally") to set maps $A\to U(G)$, where $U(G)$ is the set of elements of $G$ (i.e., $U$ is the forgetful functor $\textbf{Grp}\to \textbf{Set}$). In this way, the set $A$ would act like a "basis" for the object $F(A)$, in that maps from $F(A)$ are entirely determined by the images of the "basis" elements $A$. The "free" adjective could then be interpreted as the fact that there are no conditions on the maps from $A$ to $U(G)$; they are simply set maps. You can map the elements of $A$ "freely" to any elements you'd like in $U(G)$, and to every such choice there is a unique corresponding object morphism from the free object $F(A)$ to $G$.
## Free modules
### The universal property of $F(A)$

Let's now consider this general idea in the specific case of modules. Let $R$ be a fixed ring and  $U:R-\textbf{Mod}\to \textbf{Set}$ be the forgetful functor from $R$-modules to sets. We will show there is a functor $F:\textbf{Set}\to R-\textbf{Mod}$ that associates to each set $A$ a "minimal" $R$-module $F(A)$ with the "free" type of property outlined above. Specifically, for every $R$-module $M$ and set $A$ there will be a (natural) bijection of sets $\phi_{A,M}:\operatorname{Hom}_R(F(A), M)\to\operatorname{Hom}_{\textbf{Set}}(A, U(M))$. In other words, to every $R$-module morphism $F(A)\to M$ there will correspond a unique set map $A\to U(M)$, and conversely.
### The naturality condition

What will naturality actually mean in this context? Naturality "in $M$" will mean that for every $R$-module morphism $f:M\to N$ we have a commutative diagram
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG9wZXJhdG9ybmFtZXtIb219X1IoRihBKSwgTSkiXSxbMCwxLCJcXG9wZXJhdG9ybmFtZXtIb219X1IoRihBKSxOKSJdLFsyLDAsIlxcb3BlcmF0b3JuYW1le0hvbX1fe1xcdGV4dGJme1NldH19KEEsVShNKSkiXSxbMiwxLCJcXG9wZXJhdG9ybmFtZXtIb219X3tcXHRleHRiZntTZXR9fShBLFUoTikpIl0sWzAsMSwiZlxcY2lyYyAtIiwyXSxbMiwzLCJVKGYpIl0sWzAsMiwiXFxwaGlfe0EsTX0iXSxbMSwzLCJcXHBoaV97QSxOfSIsMl1d&embed" width="700" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Similarly, naturality "in $A$" will mean that for every set map $g:A\to B$ we have a commutative diagram^[If you're wondering why the vertical arrows in the second diagram are flipped, it's because a certain functor is "contravariant" (or equivalently, we need to use an "opposite" category as part of the formal formulation of what's going on).]
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG9wZXJhdG9ybmFtZXtIb219X1IoRihBKSwgTSkiXSxbMCwxLCJcXG9wZXJhdG9ybmFtZXtIb219X1IoRihCKSxNKSJdLFsyLDAsIlxcb3BlcmF0b3JuYW1le0hvbX1fe1xcdGV4dGJme1NldH19KEEsVShNKSkiXSxbMiwxLCJcXG9wZXJhdG9ybmFtZXtIb219X3tcXHRleHRiZntTZXR9fShCLFUoTSkpIl0sWzAsMSwiLVxcY2lyYyBGKGcpIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMiwzLCItXFxjaXJjIGciLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJhcnJvd2hlYWQifSwiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFswLDIsIlxccGhpX3tBLE19Il0sWzEsMywiXFxwaGlfe0IsTX0iLDJdXQ==&embed" width="700" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

These naturality conditions will have many consequences for our construction, which we'll investigate later.
### The construction of $F(A)$

Let $A$ be a fixed set. We first define the set $F(A)$ to be the collection of formal finite $R$-linear combinations of elements of $A$.^[Equivalently, we can define $F(A)$ to be the collection of all set maps $f:A\to R$ with the property that $f(a)=0_R$ for all but finitely many $a\in A$] In other words, $F(A)$ consists of expressions of the form $\displaystyle\sum_{a\in A} r_a a$, where $r_a=0_R$ for all but finitely many $a\in A$. We then define a binary operation on $F(A)$ by "combining coefficients." In other words, if $m_1 =\displaystyle\sum_{a\in A} r_a a$ and $m_2 = \displaystyle\sum_{a\in A} s_a a$ are two elements of $F(A)$, then we define $m_1+m_2 = \displaystyle \sum_{a\in A} (r_a+s_a)a$. You can then verify that this operation is commutative and associative, that there is an identity element (the trivial combination), and that every element has a inverse (obtained by taking the combination with the additive inverse coefficients). In other words, this gives the set $F(A)$ the structure of an abelian group^[This is precisely the construction of the free abelian group on the set $A$. Do you see how one could convert any finite formal sum of the given form into such a set map, and conversely?].

Finally, we let $R$ act on the left of $F(A)$ by left multiplication of the coefficients: $s\cdot \displaystyle \sum_{a\in A} r_a a = \sum_{a\in A} (sr_a) a$. It is then straightforward to verify this gives $F(A)$ the structure of an $R$-module.

In summary:

>[!tldr] The construction/definition of free modules
>Given a set $A$, the **free $R$-module on $A$** is the set $$F(A)=\left\{\sum_{a\in A}r_a a\mid r_a\in R,\, r_a=0_R\text{ for all but finitely many }a\right\}.$$
>The group operation in $F(A)$ is addition of coefficients, and the $R$-action is by left multiplication of coefficients.

One more observation (to be elaborated upon later): there is a "copy"^[More precisely, there is an injective set map from $A$ to the underlying set of elements of $F(A)$, i.e., there is a set map $A\to U(F(A))$. This is a common feature of [[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints\|adjoints]].] of the set $A$ inside of the free module $F(A)$, obtained by identifying each element $a_0 \in A$ with the $R$-linear combination that has coefficient $1_R$ for $a_0$, and coefficient $0_R$ for all other $a\in A$. These specific linear combinations are the analogue in module theory of the standard basis vectors in linear algebra.
### Verifying our construction has the desired universal property

First suppose $M$ is any $R$-module and $f:F(A)\to M$ is a module morphism. By using the identification above of a copy of $A$ in $F(A)$, we then also have a set map $A\to U(M)$. More specifically, for each $a_0\in A$ let $e_{a_0}\in F(A)$ be the "standard basis element" corresponding to $a_0$, i.e., the $R$-linear combination that has coefficient $1_R$ for $a_0$, and coefficient $0_R$ for all other $a\in A$. We can then send $a_0$ to the image of $e_{a_0}$ under the given morphism $f$. This is how we construct our set map $$\phi_{A,M}:\operatorname{Hom}_R(F(A),M)\to \operatorname{Hom}_{\textbf{Set}}(A, U(M)).$$
We can verify this set map is bijective by constructing the inverse set map. Suppose $g:A\to U(M)$ is any set map. We can then define a map on $F(A)$ by applying $g$ to the "basis" elements and "using linearity." More precisely, suppose $v=\displaystyle \sum_{a\in A} r_a a$ is an element in the free module $F(A)$. Define a map $\psi_{A,M}(g):F(A)\to M$ that sends $v$ to the element in $M$ given by $\displaystyle \sum_{a\in A} r_a g(a)$. 
**Challenge**. Verify our two set maps $\phi_{A,M}$ and $\psi_{A,M}$ are mutually inverse.

## What it means for a given module to be free

>[!note] Definition of free
>Suppose $M$ is an $R$-module. We say $M$ is **free** if $M$ is isomorphic (as an $R$-module) to $F(A)$ for some finite set $A$. In that case we can also say $M$ is **free on $A$**.

In terms of elements, this is just like a basis for a vector space. If $A$ is a subset of the elements of $M$, then $M$ is free on $A$ exactly when the elements of $A$ [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Generators for modules and submodules\|generate]] $M$ and are $R$-linearly independent in $M$; the first condition guarantees that every $m\in M$ can be written as $\displaystyle m= \sum_{a\in A}r_a a$ for some $r_a\in A$, while the second condition guarantees that such an expression is unique.

For a more categorical approach, observe the following about subsets $A$ of elements of $M$:
1. The set $A$ generates $M$ exactly when the corresponding module morphism $\pi:F(A)\to M$ is surjective; and
2. The set $A$ is "linearly independent in $M$" exactly when the corresponding module morphism $\pi:F(A)\to M$ is injective. We can take this as the definition of linear independence, and declare the *relations* on $A$ as the elements of the submodule $\ker(\pi)$.



