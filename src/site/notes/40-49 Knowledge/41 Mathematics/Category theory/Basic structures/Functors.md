---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/functors/","tags":["category_theory","quotes"],"updated":"2025-03-31T12:46:52-07:00"}
---

> [!quote] [[Riehl - Category Theory in Context.pdf#page=31|Eilenberg and Mac Lane]]
> ...whenever new abstract objects are constructed in a specified way out of given ones, it is advisable to regard the construction of the corresponding induced mappings on these objects as an integral part of their definition.

> [!quote] [[Riehl - Category Theory in Context.pdf#page=31|John Baez]]
> ...every sufficiently good analogy is yearning to become a functor.

> [!quote] [[Vakil - The Rising Sea.pdf#page=25\|Brian Conrad]]
> Before functoriality, people lived in caves.

## Definition

Maps between categories are called *functors*. Briefly, a functor between categories consists of maps of objects and arrows that preserve the categorical structure. In more detail:

>[!note] Definition of functor
>Suppose $C$ and $D$ are categories. A **functor** $F:C\to D$ consists of the following data:
>- For each object $c\in C$, an object $F(c)\in D$
>- For each arrow $f:c\to c'$ in $C$, an arrow $F(f): F(c)\to F(c')$ in $D$
>
>with the following properties:
>1. (Compatibility with composition) For every pair of composable arrows $f,g$ in $C$, we must have $F(g\circ f)=F(g)\circ F(f)$
>2. (Identity Preservation) For every object $c\in C$, one has $F(1_c) = 1_{Fc}$
{ #a05956}


> [!question] Covariant? Contravariant?
> You may run across the phrase "covariant functor" or "contravariant functor." Both are holdovers from the early days of category theory, when the foundations were still being established. Back then, many of the inspiring examples in algebraic geometry and algebraic topology involved functor-like maps that reversed the directions of arrows. We will even see examples of this in both module theory (see [[The Hom-in functor and injective modules\|here]]) and category theory (see [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Universal Properties III - Yoneda's Lemma]]). In other words, we'll see maps between categories that send an arrow $f:c_1\to c_2$ in $C$ to an arrow $F(f):F(c_2)\to F(c_1)$ in $D$. In other words, the direction of the arrow is being reversed.
> 
> Since such maps between categories arose naturally and behaved well in all other respects, they were called **contravariant functors**. By contrast, our usual (direction-preserving) maps were called **covariant functors**.^[Hence the origin for the name of this wiki!] Note that a contravariant functor "reverses" composition, i.e., satisfies $F(f\circ g)=F(g)\circ F(g)$.
> 
> The more modern view has reverted to simply "functors", and has incorporated the contravariant functors via the notion of [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Categories#Opposite categories\|opposite categories]]: a contravariant functor $C\to D$ is equivalent to a (covariant) functor $C\to D^{\text{op}}$ (and also to a covariant functor $C^{\text{op}}\to D$).
{ #70ab9e}


## Examples
---

### The power set functor

One of the first constructions you usually see in set theory is that of the *power set*. Indeed, it is usually part of the very axioms of set theory. This construction is the object map of a functor. The **power set functor** $\mathcal{P}:{\bf Set}\to {\bf Set}$ is defined as follows:
- Objects: For each set $X$ we assign its power set $\mathcal{P}(X)$, i.e., the set of all subsets of $X$
- Arrows: For each set map $f:X\to Y$, we assign the set map $\mathcal{P}(f):\mathcal{P}(X)\to \mathcal{P}(Y)$ defined by sending a subset $S\subseteq X$ to its image $f(S)\subseteq Y$.
You should verify for yourself that these maps satisfy the [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Functors#^a05956\|properties]] of a functor.

### Forgetful functors

A functor that simply "forgets" some or all of the structure of an algebraic object is commonly called a **forgetful** (or **underlying**) functor. For example, the forgetful functor $U:{\bf Grp}\to {\bf Set}$ assigns to each group $G$ the set $U(G)$ of its elements ("forgetting" the multiplication and hence the group structure), and assigns to each group homomorphism $f:G\to G'$ the same function $f$, regarded simply as a set map. Below are some other common forgetful functors:
- $U:{\bf Ab}\to {\bf Grp}$
- $U:{\bf Ab}\to {\bf Set}$
- $U:{\bf Ring}\to {\bf Ab}$
- $U:{\bf Top}\to {\bf Set}$
- $U:{\bf Field}\to {\bf Ring}$

> [!question] What purpose could forgetting possibly serve?
> A fair question. For now the answer is simply "Let's wait and see." Soon we will see that many (all?) constructions and "[[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples\|universal properties]]" depend crucially on the category in which one is working. As such, being able to be incredibly specific about which category is being considered will often prove critically important.

### Remember me not

Are there functors inverse to "forgetting?" Sadly, we will see that the answer to that question is generally no: that which is forgotten cannot be remembered. However, we will also see that there is a type of functor which can be regarded as complementary to forgetting (later to be codified in the idea of an [[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints\|adjoint]]). 

For example, there is a functor $F:{\bf Set}\to {\bf Grp}$ that assigns to each set $X$ the so-called **free group** $F(X)$. This is the group whose elements are finite "words" with letters the elements $x\in X$ (along with their formal inverses), modulo an equivalence relation that equates the words $xx^{-1}$ and $x^{-1}x$ with the empty word (which is the identity for the group). The operation on this free group $F(X)$ is concatenation. An alternative name for this functor could be the "groupification" functor, since it creates a group from a given set.

Note that these two functors are definitely not inverses. For instance, even if $G$ is the trivial group (with a single element), the free group on the one-element set $U(G)$ is infinite. In other words, $F(U(G))\neq G$. So what is the relation between the functors $U$ and $F$? That is something we will explore in detail when we study [[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints\|adjoint functors]].

### Abelianization
{ #0e69de}

Suppose $G$ is a group. For each pair of elements $x,y\in G$, the element $xyx^{-1}y^{-1}$ is called the commutator $[x,y]$ of $x$ and $y$ in $G$. Notice that this element is the identity exactly when the elements $x$ and $y$ commute. The subgroup generated by the set of all commutators in $G$ is a normal subgroup of $G$, called the **commutator subgroup** and denoted $[G,G]$. You can verify the following facts:
1. $G/[G,G]$ is always an abelian group;
3. Any group morphism $G\to H$ carries commutators to commutators, hence $[G,G]$ to $[H,H]$
4. Every group morphism $G\to H$ to an abelian group $H$ factors uniquely through the projection $G\to G/[G,G]$
5. The assignment $G\mapsto G/[G,G]$ is the object function of a functor ${\bf Grp}\to {\bf Ab}$, called the **abelianization** functor (or sometimes **factor-commutator** functor).
The abelianization functor is [[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints\|adjoint]] to the forgetful functor $U:\textbf{Ab}\to \textbf{Grp}$.

### A non-functor

Although nearly every common construction in algebra is the object function of a functor, there are a few notable exceptions. One such is the assignment to each group $G$ of its center $\operatorname{Z}(G)$. Intuitively, that is because a homomorphism $G\to H$ can carry an element in the center of $G$ to one not in the center of $H$, and hence we do *not* have an induced morphism $\operatorname{Z}(G)\to \operatorname{Z}(H)$. For additional details, check out [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/There is no 'center' functor on Grp\|this exercise]].

### General linear group

For each commutative ring $R$, the set of all invertible $n\times n$ matrices with entries in $R$ is called **general linear group** $\operatorname{GL}_n(R)$. Moreover, for each ring morphism $R\to S$ between commutative rings there is a set map that takes each matrix with entries in $R$ to a  matrix with entries in $S$ (by simply applying the ring morphism on each entry of the matrix). You can also verify that this map sends invertible matrices with entries in $R$ to invertible matrices with entries in $S$, and in fact is a group morphism $\operatorname{GL}_n(R)\to \operatorname{GL}_n(S)$. Convince yourself that this defines a functor $\operatorname{GL}_n:{\bf CRing}\to {\bf Grp}$.

### Unit groups

This example is [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations#The determinant\|closely related]] to the previous. For each ring $R$, the set of (multiplicative) units in $R$ forms a group $R^{\times}$, and since ring homomorphisms preserve units we have for each ring homomorphism $R\to S$ an induced group homomorphism $R^{\times}\to S^{\times}$. Convince yourself again this defines a functor $\bullet^{\times}:{\bf Ring}\to {\bf Grp}$. We similarly have a functor $\bullet^{\times}:{\bf CRing}\to {\bf Ab}$.

### Examples in topology

Singular homology in a given dimension $n$ assigns to each topological space $X$ an abelian group $\operatorname{H}_n(X)$, and also to each continuous map $X\to Y$ a group morphism $\operatorname{H}_n(X)\to \operatorname{H}_n(Y)$. If you are familiar with homology, you should convince yourself this defines a functor $\operatorname{H}_n:{\bf Top}\to {\bf Ab}$.

Similarly, the assignment of a homotopy group $\pi_n(X,x)$ to each pointed topological space is (the object function of) a functor $\pi_n:{\bf Top}_*\to {\bf Grp}$. Alternatively, it's possible to defined a functor on $\textbf{Top}$ that assigns to each topological space its **fundamental groupoid**.

### Families of objects in a category

Suppose $C$ is any category and $S$ is any set. A **family of objects in $C$ indexed by $S$** is, as it sounds, a collection of the form $\{c_s\in C\mid s\in S\}$. We can equivalently package this information in the form of a functor. Let $\textbf{S}$ denote the discrete category on $S$, i.e., the category whose objects are the elements of $S$ and that only has identity arrows. A functor $F:\textbf{S}\to C$ is then exactly the information of a set map (usually also denoted $F$) from the set $S$ to the set of objects of $C$; indeed, the arrow function of $F$ is completed fixed, since $\textbf{S}$ only contains identity arrows $1_s$ for each $s\in S$ and we must have $F(1_s)=1_{F(s)}$ for all $s\in S$.

For example, the set of objects of $C$ is in (natural) bijection with the set of functors $\textbf{1}\to C$, while the set of pairs of objects in $C$ is in (natural) bijection with the set of functors $\textbf{S}\to C$, where $\textbf{S}$ is the discrete category on the set $\{1,2\}$.

In general, we have a (natural) bijection
$$\operatorname{Hom}_{\textbf{Set}}(S,\operatorname{Ob}(C))\simeq \operatorname{Hom}_{\textbf{Cat}}(\textbf{S},C).$$
This allows us to interchangeably think of families of objects in a given category $C$ as either collections of objects in $C$ indexed by $S$, or functors from the discrete category $\textbf{Set}$ to $C$.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations\|Natural transformations]]
[[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples\|Universal Properties I - Inspiring Examples]]
