---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/sums-of-submodules/","tags":["module_theory"],"updated":"2024-03-06T13:54:09-08:00"}
---

Given any family of submodules of a given $R$-module $M$, is there a "smallest" submodule of $M$ that contains them all? In other words, is there an analogue of the union operation in $\textbf{Set}$? Yes. It is called the **sum** of the family of submodules.

---
## Sum of two submodules

Suppose $N_1$ and $N_2$ are two submodules of an $R$-module $M$. Let $N_1+N_2$ denote the set whose elements consist of all sums of the form $n_1+n_2$ where $n_1\in N_1$ and $n_2\in N_2$.^[Note that this operation is "real" in that is is the additive operation in the given module $M$. It is a not a formal sum.] This set of elements is certainly a subset of the set of elements of $M$, and is easily seen to be a submodule. Since each submodule $N_1, N_2$ contains $0_M$, this submodule $N_1+N_2$ contains both $N_1$ and $N_2$. Finally, if $P$ is any submodule of $M$ that contains $N_1$ and $N_2$, then by closure under addition $P$ must also contain $N_1+N_2$.

In other words, $N_1+N_2$ is the smallest submodule of $M$ that contains $N_1$ and $N_2$. We call $N_1+N_2$ the **sum** of the submodules $N_1$ and $N_2.$

---
## Sum of finitely many submodules

Now suppose $N_1, N_2,\ldots, N_k$ is a finite collection of submodules of $M$. As you might predict, the set of all sums of the form $\displaystyle \sum_{i=1}^k n_i$ with $n_i\in N_i$ is a submodule of $M$ that contains the original submodules, and is the smallest such submodule of $M$. It is called the **sum** of the family of submodules $N_1,N_2,\ldots, N_k$.

---

## Sum of an arbitrary family of submodules

Most generally, suppose $\{N_s\mid s\in S\}$ is any family of submodules of $M$, indexed by some set $S$. The **sum** of this family of submodules is a submodule, denoted $\displaystyle \sum_{s\in S}N_s$, and is the smallest submodule of $M$ that contains every $N_s$ in the family. As a set, it consists of all *finite* sums of the form $\displaystyle \sum_{s\in S} n_s$.

---
### What's really going on

Sums of submodules has a simple interpretation from the point of view of category theory. For each $R$-module $M$, let $\mathcal{M}$ be the category whose objects are the submodules $N$ of $M$, and for which there is an arrow $N_1\to N_2$ exactly when $N_1$ is a submodule of $N_2$. (In other words, the arrows in $\mathcal{M}$ correspond to the inclusion morphisms of submodules of $M$.) The sum of a family of submodules of $M$ is then exactly the coproduct of the corresponding family of objects in $\mathcal{M}$.

---
## Direct sums of modules vs. sums of submodules

If you've read [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Direct sums of modules\|Direct sums of modules]] you might be wondering why there is a separate note on sums of submodules. Aren't the two notions the same? Sadly, no, but there's a reason for the suggestive name choice. Both constructions satisfy the "same" universal property, which is that of the general categorical coproduct, only they satisfy their universal properties in slightly different categories.

As discussed above, the sum of a family of submodules of a fixed module $M$ is a coproduct in the associated category $\mathcal{M}$. The analogous construction in $\textbf{Set}$ is that of the union of a collection of subsets of a given set $X$.

A direct sum of arbitrary $R$-modules is a coproduct in the category $R-\textbf{Mod}$. It is most closely analogous to the disjoint union in $\textbf{Set}$, and should be viewed as a module constructed "externally" from the original family of modules (which are not assumed to have any relationship or way to be compared).