---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/direct-products-vs-direct-sums-vs-sums/","tags":["module_theory"],"updated":"2025-09-29T12:36:25-07:00"}
---

Suppose $\{N_s\mid s\in S\}$ is a family of submodules of a fixed $R$-module $M$. We have four constructions available to create a new module:

## Constructions as submodules
---

### The intersection of this family of submodules

This module is denoted $\displaystyle \bigcap_{s\in S} N_s$. As a set, its elements are those elements contained in every submodule $N_s$; i.e., it is the set-theoretic intersection of the sets of elements of the $N_s$. It is a submodule of $M$, and it is the largest submodule of $M$ that is contained within every submodule $N_s$ in the original family.

### The sum of this family of submodules

This module is denoted $\displaystyle \sum_{s\in S} N_s$. As a set, its elements are all finite $R$-linear sums of the form $\displaystyle \sum_{s\in S} r_s n_s$, where each $n_s\in N_s$ and $r_s\in R$ (all but finitely many of which are zero). It is a submodule of $M$, and it is the smallest submodule of $M$ that contains every submodule $N_s$ in the original family. In this module, different sums may represent the same element.

## Constructions as modules
---

### The direct sum of this family as modules

This module is denoted $\displaystyle \bigoplus_{s\in S} N_s$. As a set, its elements are all *formal* finite $R$-linear sums of the form $\displaystyle \sum_{s\in S} r_s n_s$, where each $n_s\in N_s$ and $r_s\in R$ (all but finitely many of which are zero). It is *not* a submodule of $M$, nor does it literally contain any of the modules $N_s$ from the original family; however, it does contain a copy of each of those submodules. In this module, different sums always represent different elements. There are no relations or simplifications, beyond that of combining or simplifying coefficients.


### The direct product of this family as modules

This module is denoted $\displaystyle \prod_{s\in S}N_s$. As a set, its elements consist of maps $f$ from $S$ such that $f(s)\in N_s$ for every $s\in S$. When $S$ is finite, its elements can equivalently be viewed as $S$-tuples of elements $(n_s)_{s\in S}$ with $n_s\in N_s$ for each $s\in S$. It is not a submodule of $M$, nor does it literally contain any of the original submodules $N_s$; however, there are surjective morphisms from $\displaystyle\prod_{s\in S}N_s$ to each $N_s$, and in the finite case we will see there are injective morphisms from each $N_s$ into $\displaystyle\prod_{s\in S} N_s$. This also means that we have an injective morphism $\bigoplus_{s\in S}N_s \to \prod_{s\in S} N_s$. In the case of a finite set $S$, this is an isomorphism.


## Relationships between these constructions
---

We should investigate how these three constructions are related, when (if ever) they are the same, and when (if ever) they are different. We first put these constructions into categorical context, where their differences are immediately obvious.

There are two categories at play here. The first is the category $R\textbf{-Mod}$ of all left $R$-modules. In this category there are no obvious "internal" constructions, by which we mean constructions performed "within" a given $R$-module $M$. In fact, the very concept of submodule is a bit complicated to encode in this category, although it can be done.^[A submodule of an $R$-module $M$ is an equivalence class of monics to $M$.]

The second category is the category $\mathbf{M}$ of the submodules of a fixed $R$-module $M$. We [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Sums of submodules#What's really going on\|encountered]] this category when defining the sum of a family of submodules of a given module. To recap, the objects of $\mathbf{M}$ are the submodules $N$ of $M$, and the arrows $N_1\to N_2$ in $\mathbf{M}$ correspond to the inclusions $N_1\subseteq N_2$ of submodules. It is important to note that there are *no other morphisms besides inclusion morphisms*.

These two categories are related by a forgetful functor $U:\mathbf{M}\to R\textbf{-Mod}$ that sends each submodule $N$ of $M$ to the same module (forgetting the previous inclusion in $M$), and each inclusion arrow $N_1\to N_2$ to the corresponding monic morphism $i:N_1\to N_2$. Note that this functor is *faithful* (no arrows in $\mathbf{M}$ become identified in $R\textbf{-Mod}$) but not *full* (there are module morphisms $N_1\to N_2$ that do not correspond to inclusion maps).^[These notions of "faithful" and "full" are the functorial version of injective (on hom-sets) and surjective (on hom-sets).]

So where does this put us? In a good position, actually. Suppose $\{N_s\mid s\in S\}$ is a family of submodules of a fixed $R$-module $M$. When considered as a family of objects in $\mathbf{M}$ (i.e., as submodules of $M$), we can form the product and coproduct for this family. The coproduct is a submodule of $M$ that every submodule in the family maps to (i.e., is included in), universally so (i.e., is minimal among such submodules). This is precisely the sum of the family of submodules, $\displaystyle \sum_{s\in S} N_s$. The product is a submodule of $M$ that maps to every module in the system (i.e., is included in every submodule), universally so (i.e., is maximal among such submodules). This is precisely the intersection of the family of modules, $\displaystyle \bigcap_{s\in S} N_s$.

However, now suppose we consider the family of submodules as a family of modules in their own right. In other words, suppose we consider the family of objects $\{U(N_s)\mid s\in S\}$ in the category $R\textbf{-Mod}$. We can now consider the product and coproduct for this family. The product is by definition the direct product of these modules, $\displaystyle \prod_{s\in S} N_s$. The coproduct is by definition the direct sum of these modules, $\displaystyle \bigoplus_{s\in S} N_s$.

### When, if ever, do some of these constructions coincide?

As mentioned previously, whenever $S$ is finite there is a natural isomorphism between the direct product over $S$ and the direct sum over $S$. When $S$ is infinite, from our constructions we can see that there is an injective (but not surjective) module morphism $\displaystyle \bigoplus_{s\in S} M_s\to \prod_{s\in S} M_s$.

There is also a special case in which the sum of a family of submodules is isomorphic to the direct sum of the family of submodules (viewed as modules).^[In the finite case, this is also isomorphic to the direct product of those submodules viewed as modules.]

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
