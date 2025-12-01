---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/ab-categories/","tags":["category_theory/abelian_categories"],"updated":"2025-12-01T06:51:57-08:00"}
---

> [!quote] [Wikipedia](https://en.wikipedia.org/wiki/Preadditive_category)
> "...a particularly perverse category theorist might define a ring as a preadditive category with exactly one object (in the same way that a monoid can be viewed as a category with only one object ...)"

## $\textbf{Ab}$-categories
---

There are many familiar categories in which the hom-sets have additional structure:
- In the category $\textbf{Vec}_F$ of vector spaces over a field $F$, each hom-set $\operatorname{Hom}_{\textbf{Vec}_F}(V,W)$ has a (natural) structure of an $F$-vector space. Addition is defined by addition of outputs; i.e., $(S+T)(v)=S(v)+T(v)$ for every $v\in V$. The additive identity is the zero map.
- In the category $R\textbf{-Mod}$ of left $R$-modules over a fixed ring $R$, each hom-set $\operatorname{Hom}_R(M,N)$ has a (natural) structure of an abelian group. Once again, addition of morphisms is defined via addition of outputs.
- When $R$ is commutative, the hom-sets in $R\textbf{-Mod}$ have a (natural) structure of $R$-modules.
- In the category $\textbf{Ab}$ of abelian groups, each hom-set $\operatorname{Hom}_{\textbf{Ab}}(A,B)$ has a (natural) structure of an abelian group, via addition of outputs.

Why have I cryptically written "... a (natural) structure ..." in each of the above examples? Intuitively, we would like composition to "respect" these added structures.

Rather than make this precise in full generality, let's focus on the examples of the categories $\textbf{Ab}$ and $R\textbf{-Mod}$, in which the hom-sets have a (natural) structure of abelian groups.

> [!note] Definition of an ${\bf Ab}$-category
> A **$\textbf{Ab}$-category** (also called an **preadditive category**) is a category $A$ in which each hom-set $\operatorname{Hom}_A(a,b)$ has the structure of an abelian group, in such a way that composition is bilinear. In other words, for morphisms $f,f':a\to b$ and $g,g':b\to c$ we have
> 
> $$(g+g')\circ (f+f')=g\circ f+g\circ f'+g'\circ f+g'\circ f'.$$
{ #b61743}


Note that because the composition of morphisms is bilinear, it can also be written using the tensor product (over ${\bf Z}$) as a linear map:

$$\operatorname{Hom}_A(b,c)\otimes_{\bf Z}\operatorname{Hom}_A(a,b)\to \operatorname{Hom}_A(a,c)$$

### An alternative definition: enriched categories

Although the definition above is fairly straightforward, I'm not a huge fan of it. To me, it seems rather "extrinsic" to conventional category theory. What I mean by that is the definition requires structure beyond the usual reference to categories, functors and natural transformations. Is there a more "intrinsic" definition? Maybe, although that depends on what counts as "intrinsic."

One alternative is to define a preadditive category directly (without first defining a category), as given by the following data:
1. A set of objects.
2. A function that assigns to each ordered pair of objects $(b,c)$ an abelian group $A(b,c)$.
3. For each ordered triple of objects $(a,b,c)$ a morphism of abelian groups
   
   $$A(b,c)\otimes_{\bf Z}A(a,b)\to A(a,c).$$
   
   This morphism is called "composition" and written $g\otimes f\mapsto g\circ f$.
4. For each object $a$ a group morphism ${\bf Z}\to A(a,a)$. (This is the analogue of each object in a category having a unique identity arrow, which corresponds to a set map $\{*\}\to \operatorname{Hom}_A(a,a)$.)

These data are required to satisfy the usual associative and unit laws for composition. This is a definition of ${\bf Ab}$-category completely analogous to the definition of a conventional category, with:
- $\textbf{Set}$ replaced by $\textbf{Ab}$
- Cartesian product $\times$ in $\textbf{Set}$ replaced by tensor product $\otimes_{\bf Z}$ in $\textbf{Ab}$
- the one-point set $\{*\}$ replaced by ${\bf Z}$

Because of this definition, an ${\bf Ab}$-category is sometimes called a category **enriched over $\textbf{Ab}$**. As the name suggests, this leads to a more general concept of **enriched categories**. For now, we'll leave that tantalizing idea for future exploration. 

## Additive functors
---

If we are dealing with ${\bf Ab}$-categories, we will probably want to restrict our functors to those that respect addition of morphisms:

> [!note] Definition of additive functors
> If $A$ and $B$ are ${\bf Ab}$-categories, a functor $T:A\to B$ is said to be **additive** when every function $T:\operatorname{Hom}_A(a,a')\to \operatorname{Hom}_B(T(a),T(a'))$ is a group morphism; i.e., when $T(f+f')=T(f)+T(f')$ for all parallel morphisms $f,f'$.

When talking about functors between ${\bf Ab}$-categories, we will always assume we mean additive functors.

## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Additive categories\|Additive categories]]