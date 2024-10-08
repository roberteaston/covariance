---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/functor-categories/","tags":["category_theory"],"updated":"2024-10-07T19:40:57-07:00"}
---

# Definition

We can now think of functors between two fixed categories as objects worthy of study, with [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Natural transformations\|natural transformations]] as the arrows between them.

>[!note] Definition of a functor category
>Suppose $C$ and $D$ are two categories. We denote the category of functors from $C$ to $D$ by $D^C$. The objects of this category are functors $F:C\to D$, and the arrows of this category are natural transformations $\tau:F\Rightarrow G$ between such functors.

One can verify that $D^C$ does indeed satisfy the axioms of a category.

> [!info] Why this notation?
> You might be wondering why we use this exponential-style notation for functor categories. The first few examples below should hint at a reason. They can eventually be made more formal with the categorical concept of an "exponential object."


---
# Examples

The main examples most people stumble across are probably [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Yoneda's Lemma\|Yoneda's Lemma]] and presheaves (in algebraic geometry), but for now we will satisfy ourselves with some much simpler examples.

## Functors from the categories $\textbf{0}$ and $\textbf{1}$

Recall that the empty category $\textbf{0}$ has no objects and no arrows. For each category $C$ there is a unique functor $\textbf{0}\to C$, namely the empty functor (with empty object map and empty arrow map). It is straightforward to verify we have an equivalence of categories $C^{\textbf{0}}\simeq \textbf{1}.$

Similarly, the category $\textbf{1}$ has a single object and only the identity arrow on that object. Convince yourself that functors $\textbf{1}\to C$ are in bijection with objects of $C$. Moreover, the natural transformations between such functors are in bijection with arrows in $C$. You should now be able to verify we have an equivalence of categories $C^{\textbf{1}}\simeq C$.

## Commutative diagrams of a fixed shape

Suppose $J$ is a fixed category. Recall that for any category $C$, functors $F:J\to C$ can be thought of as "commutative diagrams in $C$ of shape $J$." For example, suppose $J$ is the category with three objects and two nonidentity arrows, as illustrated below:

$$a\xrightarrow{f} c\xleftarrow{g} b.$$

Then each functor $F:J\to C$ corresponds to a diagram in $C$ of the form

$$F(a)\xrightarrow{F(f)} F(c)\xleftarrow{F(g)} F(b).$$

This functor category is useful when studying pullbacks and pushforwards.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Yoneda's Lemma\|Yoneda's Lemma]]