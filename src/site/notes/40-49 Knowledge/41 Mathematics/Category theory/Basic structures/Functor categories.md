---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/functor-categories/","tags":["category_theory"],"updated":"2025-09-30T11:05:38-07:00"}
---

## Definition
---

 It will often be helpful to think of functors between two fixed categories as objects worthy of study on their own, namely as objects of a new category in which [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations\|natural transformations]] between such functors are the arrows between them.

>[!note] Definition of a functor category
>Suppose $C$ and $D$ are two categories. We denote the category of functors from $C$ to $D$ by $D^C$. The objects of this category are functors $F:C\to D$, and the arrows of this category are natural transformations $\tau:F\Rightarrow G$ between such functors. The composition operation is the "vertical composition" of natural transformations.

One can verify that $D^C$ does indeed satisfy the axioms of a category.

> [!info] Why this notation?
> You might be wondering why we use this exponential-style notation for functor categories. The first few examples below should hint at a reason. They can eventually be made more formal with the categorical concept of an "exponential object."


## Examples
---

The main examples most people stumble across are probably hom-functors (in the context of [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Yoneda's Lemma]]) and presheaves (in algebraic geometry), but for now we will satisfy ourselves with some much simpler examples.

### Functors from the categories $\textbf{0}$ and $\textbf{1}$

Recall that the empty category $\textbf{0}$ has no objects and no arrows. For each category $C$ there is a unique functor $\textbf{0}\to C$, namely the empty functor (with empty object map and empty arrow map). It is straightforward to verify we have an equivalence of categories $C^{\textbf{0}}\simeq \textbf{1}.$

Similarly, the category $\textbf{1}$ has a single object and only the identity arrow on that object. Convince yourself that functors $\textbf{1}\to C$ are in bijection with objects of $C$. Moreover, the natural transformations between such functors are in bijection with arrows in $C$. You should now be able to verify we have an equivalence of categories $C^{\textbf{1}}\simeq C$.

Are you feeling a bit better about the exponential notation $D^C$?

### Commutative diagrams of a fixed shape

Suppose $J$ is a fixed category. For any category $C$, functors $F:J\to C$ can be thought of as "commutative diagrams in $C$ of shape $J$." For example, suppose $J$ is the category with three objects and two nonidentity arrows, as illustrated below:

$$a\xrightarrow{f} c\xleftarrow{g} b.$$

Then each functor $F:J\to C$ corresponds to a diagram in $C$ of the form

$$F(a)\xrightarrow{F(f)} F(c)\xleftarrow{F(g)} F(b).$$

This functor category is useful when studying pullbacks and pushforwards.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints\|Adjoints]]
[[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Universal Properties III - Yoneda's Lemma]]