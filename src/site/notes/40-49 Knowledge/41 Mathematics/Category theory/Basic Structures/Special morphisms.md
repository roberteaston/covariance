---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/special-morphisms/","tags":["category_theory"],"updated":"2024-07-21T20:29:40-07:00"}
---

## Monomorphisms

>[!note] Definition of monomorphism
>A morphism $f:X\to Y$ in a category $C$ is called a **monomorphism** (or **monic**) if it is *left cancellable*; i.e., if for every pair of morphisms $g_1, g_2:W\to X$ with $fg_1=fg_2$ one has $g_1=g_2$.
{ #676200}


Equivalently, a morphism $f:X\to Y$ is a monomorphism if and only if the induced map $f\circ -:\operatorname{Hom}_C(Z,X)\to \operatorname{Hom}_C(Z,Y)$ is injective for every object $Z$ in $C$. This is equivalent to the natural transformation $Hf: \operatorname{Hom}_C(-,X)\Rightarrow \operatorname{Hom}_C(-,Y)$ being a monomorphism in the functor category ${\bf Set}^C$.

### Examples

In a concrete category, every morphism whose underlying set map is injective is an epimorphism. In most concrete categories (but not all) the converse is also true. For example, in the category ${\bf Div}$ of divisible abelian groups there are non-injective monomorphisms. Such examples seem rare, however.
### Properties of monomorphisms

- Every isomorphism is a monomorphism. In fact, any morphism with a left-sided inverse is a monomorphism.
- The composition of two monomorphisms is a monomorphism.
- If a composition $fg$ is an monomorphism, then $g$ must be a monomorphism.
- Every equalizer is a monomorphism, but the converse is not true in all categories. For example, in the category ${\bf SGrp}$ of semigroups the inclusion of the multiplicative semigroups ${\bf N}\hookrightarrow {\bf Z}$ is not an equalizer (of any pair of morphisms in ${\bf SGrp}$). 
## Epimorphisms


>[!note] Definition of epimorphism
>A morphism $f:X\to Y$ in a category $C$ is called an **epimorphism** (or **epi**) if it is *right cancellable*; i.e., if for every pair of morphisms $g_1, g_2:Y\to Z$ with $g_1f=g_2f$ one has $g_1=g_2$.
{ #205688}


Equivalently, a morphism $f:X\to Y$ is an epimorphism if and only if the induced map $-\circ f:\operatorname{Hom}_C(Y,Z)\to \operatorname{Hom}_C(X,Z)$ is injective for every object $Z$ in $C$. This is equivalent to the natural transformation $Hf: \operatorname{Hom}_C(Y,-)\Rightarrow \operatorname{Hom}_C(X,-)$ being a monomorphism in the functor category ${\bf Set}^C$.

### Examples

In a concrete category, every morphism whose underlying set map is surjective is an epimorphism. In some concrete categories (but not all!) the converse is also true. For example, in the following categories the epimorphisms are exactly those morphisms whose underlying set maps are surjective:
- ${\bf Set}$
- ${\bf Ab}$
- ${\bf Grp}$
- ${\bf Vec}_F$
- ${\bf Mod-}R$
- ${\bf Top}$
However, there are familiar concrete categories in which there exist non-surjective epimorphisms. For example, in the category ${\bf Ring}$ of rings (with unity) the inclusion morphism ${\bf Z}\to {\bf Q}$ is not surjective but is an epimorphism.

>[!quote] [Wikipedia](https://en.wikipedia.org/wiki/Epimorphism)
>It is a common mistake to believe that epimorphisms are either identical to surjections or that they are a better concept. Unfortunately this is rarely the case; epimorphisms can be very mysterious and have unexpected behavior. It is very difficult, for example, to classify all the epimorphisms of rings. In general, epimorphisms are their own unique concept, related to surjections but fundamentally different.

### Properties of epimorphisms

- Every isomorphism is an epimorphism. In fact, any morphism with a right-sided inverse is an epimorphism.
- The composition of two epimorphisms is an epimorphism.
- If a composition $fg$ is an epimorphism, then $f$ must be an epimorphism.
- Every coequalizer is an epimorphism, but the converse is not true in all categories.
## Bimorphisms and isomorphisms

>[!note] Definition of bimorphism and isomorphism
>A morphism $f:X\to Y$ is called:
>- a **bimorphism** if is is both a monomorphism and an epimorphism;
>- an **isomorphism** if there is a morphism $g:Y\to X$ such that $gf=1_X$ and $fg=1_Y$. When such a morphism $g$ exists it is unique and is called the **inverse** of $f$.

Every isomorphism is a bimorphism, but the converse is not true in all categories. For example, in the category ${\bf CRing}$ of commutative rings the inclusion ${\bf Z}\to {\bf Q}$ is actually a bimorphism, even though it is not an isomorphism.

Categories in which all bimorphisms are isomorphisms are sometimes called **balanced categories**.