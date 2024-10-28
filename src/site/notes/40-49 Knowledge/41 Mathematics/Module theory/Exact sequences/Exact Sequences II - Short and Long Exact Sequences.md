---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/exact-sequences/exact-sequences-ii-short-and-long-exact-sequences/","tags":["module_theory"],"updated":"2024-10-28T07:01:48-07:00"}
---

The idea of a relationship between a pair of morphisms through a common object (in this case, a module $M$) leads more generally to the notion of an *exact sequence*.

>[!note] Definition of exactness
>A pair of morphisms $X\xrightarrow{f} Y\xrightarrow{g} Z$ is **exact at $Y$** if $\ker(g)=\operatorname{im}(f)$.
>
>More generally, a sequence of morphisms
>
>$$\cdots \xrightarrow{f_{n-2}} X_{n-1}\xrightarrow{f_{n-1}} X_n\xrightarrow{f_n} X_{n+1}\xrightarrow{f_{n+1}}\cdots$$
>
>is an **exact sequence** if it is exact at every $X_n$.

Note that we have been purposefully vague about the category in which we are working, as this definition is meant to apply in any category for which one has kernels and images. For now, it's safe to assume we're working with either $R$-modules or $(R,S)$-bimodules.

## Example: Injections and surjections

In a category of modules, a sequence of morphisms

$$0\to M\xrightarrow{f} N$$

is exact at $M$ exactly when $f$ is injective.^[Here we haven't labeled the morphism from the zero module, since that morphism is unique (it sends the single element of the zero module to $0_M$).] For example, the natural inclusion of ${\bf Z}$ into ${\bf Q}$ (as abelian groups) corresponds to the exact sequence of abelian groups

$$0\to {\bf Z}\to {\bf Q}.$$


Similarly, a sequence of morphisms 

$$M\xrightarrow{f} N\to 0$$

is exact at $N$ exactly when $f$ is surjective.^[Once again, there is no need to label the unique morphism from $N$ to the zero module (which sends every element in $N$ to the single element in the zero module.)] For example, the canonical projection from ${\bf Z}$ onto the quotient group ${\bf Z}/2{\bf Z}={\bf Z}_2$ corresponds to the exact sequence

$${\bf Z}\to {\bf Z}_2\to 0.$$

---

We can now fully recover the situations in the [[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences I - Illustrative Examples#Submodules and quotient modules\|quotient module example]] and [[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences I - Illustrative Examples#Direct sums of modules\|direct sum example]] with the notion of a *short exact sequence*.

>[!note] Definition of short exact sequence
>A **short exact sequence** is an exact sequence of the form
>
>$$0\to X\xrightarrow{f} Y\xrightarrow{g} Z\to 0.$$

In light of the previous definitions, a sequence of morphisms of the above form is a short exact sequence exactly when:
- $f:X\to Y$ is injective;
- $g:Y\to Z$ is surjective; and
- $\ker(g)=\operatorname{im}(f)$.

## Example: Submodule and quotient modules

For each submodule $N$ of an $R$-module $M$, we have a short exact sequence

$$0\to N\to M\to M/N\to 0.$$

For instance, we have the  short exact sequence of abelian groups

$$0\to 2{\bf Z}\to {\bf Z}\to {\bf Z}_2\to 0.$$



## Example: Direct sum of two modules

For each pair of $R$-modules $M_1$ and $M_2$, we have a short exact sequence of $R$-modules

$$0\to M_1\xrightarrow{j_1} M_1\oplus M_2\xrightarrow{\pi_2} M_2\to 0.$$


## Example: Forming short exact sequences from morphisms

Suppose we have a morphism $f:X\to Y$. We can then form the short exact sequence

$$0\to \ker(f)\to Y\to \operatorname{im}(f)\to 0.$$


## Example: Forming short exact sequences from short, exact sequences

Suppose we have a sequence

$$X\xrightarrow{f} Y\xrightarrow{g} Z$$

that is exact at $Y$; i.e., $\ker(g)=\operatorname{im}(f)$. We can then form the short exact sequence

$$0\to \operatorname{im}(f)\to Y\to Y/\ker(g)\to 0.$$

# Chain complexes

A natural generalization of the notion of an exact sequence is that of a *chain complex*.

>[!note] Definition of chain complex
>A sequence of morphisms
>
>$$\cdots \xrightarrow{f_{n-2}} X_{n-1}\xrightarrow{f_{n-1}} X_n\xrightarrow{f_n} X_{n+1}\xrightarrow{f_{n+1}}\cdots$$
>
>is called a **chain complex** if for every $n$ one has $\operatorname{im}(f_n)\subseteq \ker(f_{n+1})$; equivalently, if $f_{n+1}\circ f_n=0$ for every $n$.

There is also a dual notion of a **chain complex**, but we will not worry about that distinction here. 

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences III - Morphisms of Exact Sequences\|Exact Sequences III - Morphisms of Exact Sequences]]