---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/functor-categories/","tags":["category_theory"],"updated":"2024-03-06T14:02:51-08:00"}
---

>[!note] Definition of a functor category
>Suppose $C$ and $D$ are two categories. We denote the category of functors from $C$ to $D$ by $D^C$. The objects of this category are functors $F:C\to D$, and the arrows of this category are natural transformations $\tau:F\Rightarrow G$ between such functors.

One can verify that $D^C$ does indeed satisfy the axioms of a category.

---

## Examples

### Commutative diagrams of a fixed shape

Suppose $\mathcal{J}$ is a fixed category. For any category $C$, functors $F:\mathcal{J}\to C$ can be thought of as "commutative diagrams in $C$ of shape $\mathcal{J}$." For example, if $\mathcal{J}=1$ is the category with a unique object and only the identity arrow on that object, then functors $F:\mathcal{J}\to C$ are in bijection with objects $c\in C$.

For a more interesting example, suppose $\mathcal{J}$ is the category with three objects and two nonidentity arrows, as illustrated below:
$$a\xrightarrow{f} c\xleftarrow{g} b.$$
Then each functor $F:\mathcal{J}\to C$ corresponds to a diagram in $C$ of the form
$$F(a)\xrightarrow{F(f)} F(c)\xleftarrow{F(g)} F(b).$$
This functor category is useful when studying pullbacks and pushforwards.

### Yoneda's lemma

Suppose $C$ is a fixed category. For each object $r\in C$ we can construct a functor $H_r=\operatorname{Hom}_C(r,-):C\to \textbf{Set}$. This functor assigns to each object $c\in C$ the set $H_r(c)=\operatorname{Hom}_C(r,c)$ of arrows $r\to c$ in $C$, and to each arrow $f:c\to c'$ the set map $H_r(f):H_r(c)\to H_r(c')$ that sends each arrow $g:r\to c$ to the arrow $f\circ g:r\to c'$. (For this reason, we might reasonably write $H_r(f)=f\circ -$.)

Yoneda's Lemma then characterizes the natural transformations from such a functor $H_r$ to a general functor $F:C\to \textbf{Set}$. This ultimately leads to an "embedding"
$$y:C^{\text{op}}\to \textbf{Set}^C.$$
Thus, the functor category $\textbf{Set}^C$ can be viewed as a generalization (or extension) of the original category $C$. This embedding is also critical in formalizing the general notion of a "universal property" of an object.

---

## Justification of notation

There is a justification for the use of the exponential notation for functor categories. The best reason probably has to do with the idea of something called *exponential objects*. If we have time, we might return to this.