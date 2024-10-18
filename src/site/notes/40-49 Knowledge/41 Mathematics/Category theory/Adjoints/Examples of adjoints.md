---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/adjoints/examples-of-adjoints/","tags":["category_theory"],"updated":"2024-10-09T05:59:21-07:00"}
---

# Left adjoints of forgetful functors

Many forgetful functors have a left adjoint that is some type of "free" construction. Here are just a few.

## Examples in group theory
### The free abelian group functor

Recall that for each set $X$, the **free abelian group on $X$** is usually defined as the set of finite formal ${\bf Z}$-linear combinations of elements in $X$, with additive operation given by addition of coefficients:

$$F(X)=\left\{\sum_{x\in X}n_x x\mid n_x\in {\bf Z},\text{ all but finitely many zero}\right\}.$$
This construction is the object function of a functor $F:\mathbf{Set}\to \mathbf{Ab}$. (Can you describe the map on arrows?) Moreover, the abelian group $F(X)$ has the following universal property: for each abelian group $A$, the set of group morphisms $F(X)\to A$ is in (natural) bijection with set maps $X\to U(A)$, where $U(A)$ is the underlying set of elements of $A$. In other words, there is a (natural) bijection

$$\tau_{X,A}:\operatorname{Hom}_{\mathbf{Ab}}(F(X),A)\xrightarrow{\sim}\operatorname{Hom}_{\mathbf{Set}}(X,U(A)).$$

This is actually the reason the abelian group $F(X)$ is called "free": to define a group morphism from it, you are free to send the "generators" (i.e., the images of the elements of $x$ in $F(X)$) to whichever elements you please in (the set of elements of) $A$. There are no restrictions on your choices, and every choice leads to a unique group morphism $F(X)\to A$.

In the language of adjoints, the free abelian group functor $F:\mathbf{Set}\to \mathbf{Ab}$ is a left adjoint of the forgetful functor $U:\mathbf{Ab}\to \textbf{Set}$. The unit of the adjunction is again the "insertion of generators" set map $X\to U(F(X))$, which maps each element $x\in X$ to the formal linear combination $\displaystyle \sum_{x'\in X}n_{x'}x'$, where $n_x=1$ and $n_{x'}=0$ for all other $x'$.

### The free group functor

Completely analogous to the situation for abelian groups, there is also a **free group** construction. In this case, given a set $X$ the construction of the free group $F(X)$ is somewhat different than above. You can [look it up](https://en.wikipedia.org/wiki/Free_group) to see the construction, but for now simply note that we are now looking for a left adjoint of a different forgetful functor, namely the forgetful functor  $U:\textbf{Grp}\to \textbf{Set}$. This means that the left adjoint is a functor $F:\mathbf{Set}\to \mathbf{Grp}$ that needs to satisfy a different bijection, namely that for every set $X$ and *every* group $G$ (and not just every abelian group), there must be a natural bijection

$$\tau_{X,A}:\operatorname{Hom}_{\mathbf{Grp}}(F(X),G)\xrightarrow{\sim}\operatorname{Hom}_{\mathbf{Set}}(X,U(G)).$$

### The abelianization functor

For the forgetful functor $U:\textbf{Ab}\to \textbf{Grp}$, a left adjoint is the abelianization functor (sometimes called the factor-commutator functor), which has as object function the map $G\mapsto G/[G,G]$. The unit of the adjunction is the projection onto the quotient $G\to G/[G,G]$. Note that here we should technically write $G\to U(G/[G,G])$, but no one ever does.

## Examples in module theory

We will see the following three examples in module theory (as well as some others).

### The free $R$-module functor

For $U:R\textbf{-Mod}\to \textbf{Set}$, a left adjoint is the [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Free modules\|free module]] functor, which has object function $X\mapsto F(X)$. The unit of the adjunction is the "insertion of generators" set map $X\to U(F(X))$.

### The tensor product functor

For $U:R\textbf{-Mod}\to \textbf{Ab}$, a left adjoint is the [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products II - Tensor products of bimodules\|tensor product]] functor $A\mapsto R\otimes_{\bf Z} A$. The unit of the adjunction is $A\to U(R\otimes_{\bf Z} A)$ given by $a\mapsto 1\otimes a$. We will [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products IV - The Adjoint Property\|also see]] the functor $U$ also has a right adjoint, namely the functor $A\mapsto \operatorname{Hom}_{\textbf{Ab}}(U(R),A).$

### The tensor algebra functor

For $U:R\textbf{-Alg}\to R\textbf{-Mod}$, a left adjoint is the [[40-49 Knowledge/41 Mathematics/Algebra theory/Tensor algebras\|tensor algebra]] functor $M\mapsto \mathcal{T}(M)$. The unit of the adjunction is the "insertion of generators" $M\hookrightarrow \mathcal{T}(M)$.

---

> [!warning] Not every forgetful functor has a left adjoint!
> It is tempting to think that the "free" construction can be extended to any category, or at least any category with a (forgetful) functor to $\textbf{Set}$. Sadly, this is not always true. Probably the most famous example of this is the forgetful functor $U:\mathbf{Field}\to \mathbf{Set}$. Intuitively, this is because morphisms from fields are very restrictive, in that they are always injective (and can only map to other fields of the same characteristic). Can you turn this intuitive idea into a proof (say, by contradiction) that there does not exist a functor that is a left adjoint to the forgetful functor $U:\mathbf{Field}\to \mathbf{Set}$?


---
# Left and right adjoints of diagonal functors

Another common type of a functor is a "diagonal" or "constant" functor. We saw [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties II - Commutative diagrams, cones and limits#Example of a constant diagram\|examples]] of these when we considered "constant" diagrams. Much like with forgetful functors, these functors often have familiar adjoints. Below we list some examples, although note that these adjoints do not always exist in a given category $C$. When in doubt, assume $C=\textbf{Set}$.

## Products and coproducts

For the diagonal functor $\Delta:C\to C\times C$ (with object function $c\mapsto (c,c)$), a left adjoint is the coproduct functor $\coprod:C\times C\to C$. When $C=\textbf{Set}$, this functor sends each pair of sets $X, Y$ to their disjoint union. The unit of the adjunction is the pair of injections $(X\to X\coprod Y, Y\to X\coprod Y)$. The counit is the so-called "folding" map $X\coprod X\to X$.

A right adjoint of $\Delta$ is the product functor $\prod:C\times C\to C$. When $C=\textbf{Set}$, this functor sends each pair of sets $X, Y$ to their Cartesian product. The unit of that adjunction is the diagonal map $\delta_X:X\to X\times X$ and the counit is the pair of projections $(X\times Y\to X, X\times Y\to Y)$.

## Initial and terminal objects

If $C\to \textbf{1}$ is the unique functor to the category with one object, then a left adjoint $\textbf{1}\to C$ is the functor that selects the initial object of $C$, while a right adjoint $\textbf{1}\to C$ is the functor that selects the terminal object of $C$.
{ #ecad8c}


## Limits and colimits

Suppose $J$ is the category with two objects and two distinct parallel arrows between them and $\Delta:C\to C^J$ is the diagonal functor that sends each object $c$ to the constant diagram of shape $J$ with value $c$, i.e., the pair of identity arrows from $c$ to $c$. Then a left adjoint is the coequalizer functor (with unit the coequalizing arrow) and a right adjoint is the equalizer functor (with counit the equalizing arrow).

More generally, for any category $J$, if $\Delta:C\to C^J$ is the diagonal functor, then a left adjoint is the colimit functor (with unit the universal cone) and a right adjoint is the limit object (with counit the universal cone).

---
# Dual vector spaces

In the category $\textbf{Vec}_F$ of vector spaces over a field $F$, the notion of the dual vector space $V^*=\operatorname{Hom}_{\textbf{Vec}_F}(V,F)$ leads to an interesting adjunction. For every pair of $F$-vector spaces $V$ and $W$ there is a natural bijection

$$\phi_{V,W}:\operatorname{Hom}_{\textbf{Vec}_F}(V,W^*)\xrightarrow{\sim} \operatorname{Hom}_{\textbf{Vec}_F}(W,V^*).$$

This leads to two different functors with the same object function (that sends each vector space to its dual):

$$D:\textbf{Vec}_F^{\text{op}}\to \textbf{Vec}_F,\quad D^{\text{op}}:\textbf{Vec}_F\to \textbf{Vec}_F^{\text{op}}$$

The bijection above then becomes the natural bijection

$$\operatorname{Hom}_{\textbf{Vec}_F^{\text{op}}}(D^{\text{op}}W,V)\simeq \operatorname{Hom}_{\textbf{Vec}_F}(W,DV).$$

Moreover, the unit of this adjunction is exactly the canonical isomorphism $W\to DD^{\text{op}}(W)$ of a vector space with its double dual.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Properties of adjoints\|Properties of adjoints]]