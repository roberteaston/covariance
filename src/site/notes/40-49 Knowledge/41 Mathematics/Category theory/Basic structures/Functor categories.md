---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/functor-categories/","tags":["category_theory"],"updated":"2025-10-02T14:54:22-07:00"}
---

The establishment of [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations\|natural transformations]] between functors will allow us to formalize all sorts of concepts and informal definitions. First, let's see how they allow us to think of functors as objects worthy of study in and of themselves.

## Definition of a functor category
---

>[!note] Definition of a functor category
>Suppose $C$ and $D$ are two categories. We denote the category of functors from $C$ to $D$ by $D^C$. The objects of this category are functors $F:C\to D$, and the arrows of this category are natural transformations $\tau:F\Rightarrow G$ between such functors. The composition operation is the [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations#^0d81db\|vertical composition]] of such natural transformations.

> [!question] Why this exponential notation?
> You might be wondering why we use this exponential-style notation for functor categories, and not simply something like $\operatorname{Fun}(C,D)$ or even $\operatorname{Hom}_{\bf Cat}(C,D)$. The first few examples below should hint at a reason. They can eventually be made more formal with the categorical concept of an "exponential object."

One can verify that $D^C$ does indeed satisfy the axioms of a category. The fact that functors between two categories have a notion of arrows between them can be seen as a hint towards some inevitable "higher category theory." A conventional category (i.e., the type we've been studying) consists of objects and arrows, but nothing beyond that. When attempting to turn the lens of category theory in on itself, however, we have discovered that "category of categories" contains objects (categories), arrows (functors between categories) and arrows between the previous arrows (natural transformations between functors).

It's hard not to see this as cracking open Pandora's Box. If natural transformations are so natural, and they appear to act something like "two-dimensional arrows", then surely there is some extension of the notion of "category" to a structure that contains objects, 1-arrows and 2-arrows. How about 3-arrows? 4-arrows? Why stop?

Uh oh. You're sliding down the slope into the world of $\infty$-category theory! Let's not go there, at least for now.

But you can take this observation as at least partial justification for calling arrows between categories "functors" and not "morphisms", since in most familiar situations the morphisms between your objects don't have any (obvious) notion of maps between them.

## Examples
---

The main examples most people stumble across are probably hom-functors (in the context of [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Yoneda's Lemma]]) and presheaves (in algebraic geometry), but for now we will satisfy ourselves with some much simpler examples.

### Functors from the categories $\textbf{0}$

Recall that the empty category $\textbf{0}$ has no objects and no arrows. For each category $C$ there is a unique functor $\textbf{0}\to C$, namely the empty functor (with empty object map and empty arrow map). It is straightforward to verify we have an [[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints#Special Case 2 Equivalences of categories\|equivalence of categories]] $C^{\textbf{0}}\simeq \textbf{1}.$ On objects, this equivalence sends the empty functor ${\bf 0}\to C$ to the unique object of ${\bf 1}$; on arrows, this equivalence sends the unique natural transformation from empty functor to itself (i.e., the empty natural transformation) to the unique (identity) arrow in ${\bf 1}$.

### Functors from the categories $\textbf{1}$

Similar to the previous example, functors $\textbf{1}\to C$ are in bijection with objects of $C$. Moreover, the natural transformations between such functors are in bijection with arrows in $C$. You should now be able to verify we have an equivalence of categories $C^{\textbf{1}}\simeq C$.

Are you feeling a bit better about the exponential notation for functor categories?

### Functors from a discrete category

Generalizing the previous two examples, let $S$ be a set and ${\bf S}$ be the corresponding discrete category. Then each functor $F:{\bf S}\to C$ can viewed as a family $\{F(s)\}_{s\in S}$ of objects in $C$ indexed by $S$. A natural transformation $\tau:F\Rightarrow G$ is exactly a family of arrows $\tau_s:F(s)\to G(s)$ in $C$. (Since ${\bf S}$ is discrete, there is no real naturality condition to satisfy.)

So, the functor category $C^{\bf S}$ consists of families of objects in $C$ (indexed by $S$), together with arrows between such families.

### Commutative diagrams of a fixed shape

Suppose $J$ is a fixed category. [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations#Maps between diagrams\|Recall]] that for any category $C$, functors $F:J\to C$ can be thought of as "commutative diagrams in $C$ of shape $J$." For example, suppose $J$ is the category with three objects and two nonidentity arrows, as illustrated below:

$$j_1\xrightarrow{f} j_3\xleftarrow{g} j_2.$$

Then each functor $F:J\to C$ corresponds to a diagram in $C$ of the form

$$F(j_1)\xrightarrow{F(f)} F(j_3)\xleftarrow{F(g)} F(j_2).$$

This functor category is useful when studying [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples#Pullbacks\|pullbacks]] and [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples#Pushouts/Pushforwards\|pushforwards]].

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints\|Adjoints]]
[[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Universal Properties III - Yoneda's Lemma]]