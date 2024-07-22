---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/algebra-theory/algebras/","tags":["algebra_theory"],"updated":"2024-07-21T19:37:23-07:00"}
---

We've seen how the notion of a ring acting on an abelian group leads to the structure of a [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules\|module]]. Can a ring act on another ring? Or, to phrase the question a bit differently, if a ring $R$ acts on a module $M$, is it possible for $M$ to have a second operation that's both compatible with the given $R$-action and makes $M$ into a ring? These two questions lead to the following two equivalent definitions of a structure known as an *algebra*.

>[!note] Definition of an algebra (via modules)
>Let $R$ be a commutative ring (with unity). An **$R$-algebra** is an $R$-module $A$ that is also equipped with a multiplication that makes $A$ into a ring (with unity), with the following compatibility property between the $R$-action and the multiplication in $A$:
>$$r(a_1a_2) = (ra_1)a_2 = a_1(ra_2)$$
>for all $r\in R$ and $a_1, a_2\in A$.

>[!note] Definition of an algebra (via rings)
>Let $R$ be a commutative ring (with unity). An **$R$-algebra** is a ring $A$ (with unity) together with a ring morphism^[We always assume ring morphisms send $1_R$ to $1_A$.] $f:R\to A$ whose image is contained in the center of $A$.

Let's quickly verify these two definitions are actually equivalent. First suppose $A$ is an $R$-algebra in the first sense. For the sake of this analysis, let's use a $\star$ to denote the action of an element $r\in R$ on an element $a\in A$, and reserve a $\cdot$ (or no notation at all) for a product of elements in $A$. Then $A$ is a ring (with unity) and we can consider the map $f:R\to A$ defined by $r\mapsto r\star 1_A$. We claim this is a ring morphism whose image is in the center of $A$. First note we certainly have $f(1_R)=1_R\star 1_A = 1_A$, since part of the assumption of the $R$-action on the module $A$ is that the identity element $1_R$ acts as the identity on $A$. Next note that properties of the $R$-action on the module $A$ guarantee that
$$f(r+r')=(r+r')\star 1_A = r\star 1_A+r'\star 1_A = f(r)+f(r').$$
Finally, observe that
$$\begin{align*}
f(rr')&=f(r'r)\quad \text{(because $R$ is commutative)}\\
&=(r'r)\star 1_A\\
&= r'\star (r\star 1_A)\quad \text{(by the properties of the $R$-action on the module $A$)}\\
&=r'\star f(r)\\
&= r'\star (f(r)\cdot 1_A)\\
&= f(r)\cdot (r'\star 1_A)\quad \text{(by compatibility of the $R$-action with the product in $A$)}\\
&=f(r)\cdot f(r')
.\end{align*}$$
So, our map $f:R\to A$ really is a ring morphism. Moreover, for every $r\in R$ the compatibility condition guarantees that for every $a\in A$ we have
$$f(r)a = (r\star 1_A)a = r\star (1_A\cdot a) = r\star (a\cdot 1_A) = a\cdot (r\star 1_A)=af(r).$$
Thus, $f(r)$ is in the center of $A$.

Conversely, suppose $f:R\to A$ is a ring morphism whose image is contained in the center of $A$. Then $A$ is an abelian group (under its additive operation) and we can define a set map $\star:R\times A\to A$ by $r\star a = f(r)a$. We claim this defines a left action of $R$ on $A$. First note that
$$(r+r')\star a = f(r+r')a = (f(r)+f(r'))a = f(r)a+f(r')a=r\star a+r'\star a,$$
and
$$(rr')\star a = f(rr')a = f(r)f(r')a=r\star f(r')a = r\star (r'\star a).$$
We also have
$$r\star (a_1+a_2)=f(r)(a_1+a_2)=f(r)a_1+f(r)a_2=r\star a_1+r\star a_2$$
and
$$1_R\star a = f(1_R)a=1_A\cdot a = a.$$
So, we have indeed defined a left action of $R$ on $A$, giving $A$ the structure of an $R$-module. We also have
$$r\star (a_1a_2) = f(r)(a_1a_2) = (f(r)a_1)a_2=(r\star a_1)a_2,$$
and also (since the image of $f$ is in the center of $A$)
$$r\star (a_1a_2)=f(r)(a_1a_2)=(f(r)a_1)a_2=(r_1f(r))a_2=r_1(f(r)a_2)=r_1(r\star a_2).$$


>[!warning] Associative? Unital?
>We assume rings have unity, which means we're assuming every algebra also has unity. There is an alternative definition without that assumption, which one would call a **non-unital algebra**.
>
>There is also an alternative definition that results in a very similar structure to an algebra, with the notable exception that the multiplication in $A$ is not (assumed to be) associative. Such a structure (when the multiplication is not associative) is called a **non-associative algebra**.
>
>We will not worry about these slightly more general structures.

### Examples

1. Every ring (with unity) is a ${\bf Z}$-algebra. For each ring $A$ with unity,there is a unique ring morphism ${\bf Z}\to A$, and the image of that ring morphism is always contained in the center of $A$.
2. If $A$ is a commutative ring (with unity), then $A$ is itself an $A$-algebra. More generally, if $A$ is a ring (with unity) and $R\subseteq A$ is a subring of the center of $A$, then $A$ is an $R$-algebra.
3. The ring $\operatorname{M}_n(R)$ of $n\times n$ matrices with entries in a commutative ring $R$ is an $R$-algebra. The ring morphism $f:R\to \operatorname{M}_n(R)$ sends each ring element $r$ to $r\cdot I_n$, the diagonal matrix with $r$ on the diagonal.
4. More generally, if $M$ is an $R$-module then the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules#^5f0b4d\|endomorphism ring]] $\operatorname{End}_R(M)$ is an $R$-algebra.
5. The field of complex numbers ${\bf C}$ is a commutative ${\bf R}$-algebra, with ${\bf R}\to {\bf C}$ the usual inclusion map.
6. The quaternions ${\bf H}$ is an ${\bf R}$-algebra but not a ${\bf C}$-algebra (as the complex numbers are not in the center of the quaternions).
7. The polynomial ring $R[x_1,\ldots , x_n]$ is the free commutative $R$-algebra on the set $\{x_1,\ldots, x_n\}$.
8. The [[40-49 Knowledge/41 Mathematics/Algebra theory/Tensor algebras\|tensor algebra]] $\mathcal{T}(M)$ of an $R$-module $M$ is an $R$-algebra.
9. The [[40-49 Knowledge/41 Mathematics/Algebra theory/Symmetric algebras\|symmetric algebra]] $\mathcal{S}(M)$ and [[40-49 Knowledge/41 Mathematics/Algebra theory/Exterior algebras\|exterior algebra]] $\bigwedge (M)$ of an $R$-module $M$ are both $R$-algebras.

### Category theory interpretation

Much like a ring is a monoid object in the category of abelian groups, an $R$-algebra is a monoid object in the category of $R$-modules.

## Morphisms of algebras

As might be expected, morphisms of $R$-algebras should be maps that respect "the algebraic structures." From the ring-centeric definition, that would mean:

>[!note] Definition of an algebra morphism (via rings)
>Suppose $A$ and $B$ are two $R$-algebras. An $R$-algebra morphism from $A$ to $B$ is a ring morphism $\phi:A\to B$ such that $\phi(r\cdot a)=r\cdot \phi(a)$ for every $r\in R$ and $a\in A$.

In other words, if $f:R\to A$ and $g:R\to B$ are the ring morphisms giving $A$ and $B$ their $R$-actions, then we should have a commutative diagram
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJBIl0sWzIsMCwiQiJdLFsxLDEsIlIiXSxbMiwwLCJmIl0sWzIsMSwiZyIsMl0sWzAsMSwiXFxwaGkiXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
