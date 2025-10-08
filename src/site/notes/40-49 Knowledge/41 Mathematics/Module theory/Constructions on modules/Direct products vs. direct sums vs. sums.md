---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/direct-products-vs-direct-sums-vs-sums/","tags":["module_theory"],"updated":"2025-10-08T14:29:16-07:00"}
---

Suppose $\{N_s\mid s\in S\}$ is a family of submodules of a fixed $R$-module $M$. We have four constructions available to create a new module:

## Constructions as submodules
---

Let's first consider  $\{N_s\}_{s\in S}$ as a family of objects in the category  (whose objects are the submodules of ).

### The intersection of this family of submodules

 In this category, the product of this family is called their **intersection** and is denoted $\displaystyle \bigcap_{s\in S} N_s$. As a set, its elements are those elements contained in every submodule ; i.e., it is the set-theoretic intersection of the sets of elements of all $N_s$. It is a submodule of $M$, the largest submodule of $M$ contained within every submodule $N_s$ in the original family.

### The sum of this family of submodules

Still considered as a family of objects in $\mathcal{M}$, the coproduct of the family is their **sum** and is denoted $\displaystyle \sum_{s\in S} N_s$. As a set, its elements are all finite $R$-linear sums of the form $\displaystyle \sum_{s\in S} r_s n_s$, where each $n_s\in N_s$ and $r_s\in R$ (all but finitely many of which are zero). It is a submodule of $M$, the smallest submodule of $M$ that contains every submodule $N_s$ in the original family. In this module, different sums may represent the same element.

## Constructions as modules
---

Now let's consider $\{N_s\}_{s\in S}$ as a family of objects in the category $R\text{-{\bf Mod}}$.

### The direct product of this family as modules

 In this category, the product of this family is called the **(direct) product** and is denoted $\displaystyle \prod_{s\in S}N_s$. As a set, its elements consist of maps $f$ from $S$ such that $f(s)\in N_s$ for every $s\in S$. When $S$ is finite, its elements can equivalently be viewed as $S$-tuples of elements $(n_s)_{s\in S}$ with $n_s\in N_s$ for each $s\in S$. It is not a submodule of $M$, nor does it literally contain any of the original submodules ; however, there are surjective morphisms from $\displaystyle\prod_{s\in S}N_s$ to each $N_s$, and in the finite case there are injective morphisms from each $N_s$ into $\displaystyle\prod_{s\in S} N_s$. This also means that we have an injective morphism $\bigoplus_{s\in S}N_s \to \prod_{s\in S} N_s$. In the case of a finite set $S$, this is an isomorphism.


### The direct sum of this family as modules

In this category, the coproduct of this family is called their **direct sum** and is denoted $\displaystyle \bigoplus_{s\in S} N_s$. As a set, its elements are sometimes described as all *formal* finite $R$-linear sums of the form $\displaystyle \sum_{s\in S} r_s n_s$, where each $n_s\in N_s$ and $r_s\in R$ (all but finitely many of which are zero). As mentioned previously, however, we should really view the elements of $\bigoplus_{s\in S}N_s$ as functions $f:S\to Z$ where $f(s)\in N_s$, all but finitely many zero (and where $Z$ is any set containing all of the elements of every $N_s$).

In any case, it is *not* a submodule of $M$, nor does it literally contain any of the modules  from the original family; however, it does contain a copy of each of those submodules. In this module, different "formal sums" always represent different elements. There are no relations or simplifications, beyond that of combining or simplifying coefficients.

## Relationships between these constructions
---

As mentioned previously, whenever $S$ is finite there is a natural isomorphism between the direct product over $S$ and the direct sum over $S$. When $S$ is infinite, from our constructions we can see that there is an injective (but not surjective) module morphism $\displaystyle \bigoplus_{s\in S} M_s\to \prod_{s\in S} M_s$.

There is also a special case in which the sum of a family of submodules is isomorphic to the direct sum of the family of submodules (viewed as modules).^[In the finite case, this is also isomorphic to the direct product of those submodules viewed as modules.] We'll state the finite result for simplicity.

>[!summary] When a sum is a direct sum
>Suppose $N_1,\ldots, N_k$ is a family of submodules of an $R$-module $M$. There is an $R$-module isomorphism
>$$N_1\oplus\cdots \oplus N_k\simeq N_1+\cdots +N_k$$
>exactly when $N_j\cap (N_1+\cdots +\hat{N_j}+\cdots +N_k)=(0)$ for every $j$. In this case, the map is given simply by sending each formal sum $n_1+\cdots +n_k$ to the corresponding (actual) sum in $M$.

### A word on language

The terms "Cartesian product" (of sets) and "direct product" (of modules, groups, etc.) is a bit antiquated. Each of these types of objects satisfies the "same" universal property from the point of view of category theory, which is simply that of a **product**. To make matters unnecessarily confusing, categorical products are special cases of a more general notion of **limit**, which was sometimes called "inverse limit" or "projective limit". This was to distinguish them from the dual of notion of **colimit**, which was once called "direct limit" or "inductive limit". So a direct product is an example of an inverse limit (not a direct limit), while a direct sum is an example of a colimit (or direct limit). Oof. Let's be kind to ourselves and stick simply with "product" and "coproduct".

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations\|Natural transformations]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Free modules\|Free modules]]
