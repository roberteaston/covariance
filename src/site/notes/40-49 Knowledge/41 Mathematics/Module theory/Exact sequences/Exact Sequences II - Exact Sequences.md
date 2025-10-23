---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/exact-sequences/exact-sequences-ii-exact-sequences/","tags":["module_theory"],"updated":"2025-10-23T14:38:04-07:00"}
---

The idea of a relationship between a pair of morphisms through a common object (in this case, a module $M$) leads more generally to the notion of an *exact sequence*.

>[!note] Definition of exactness
>Suppose $C$ is a category that "has kernels and images" (e.g., $R\text{-{\bf Mod}}$). A sequence of morphisms $X\xrightarrow{f} Y\xrightarrow{g} Z$ in $C$ is **exact at $Y$** if $\ker(g)=\operatorname{im}(f)$.
>
>More generally, a sequence of morphisms
>
>$$\cdots \xrightarrow{f_{n-2}} X_{n-1}\xrightarrow{f_{n-1}} X_n\xrightarrow{f_n} X_{n+1}\xrightarrow{f_{n+1}}\cdots$$
>
>is an **exact sequence** if it is exact at every $X_n$.
{ #b7a639}


## Examples
---

### Injections and surjections

In $R\text{-{\bf Mod}}$, a sequence of morphisms

$$0\to M\xrightarrow{f} N$$

is exact at $M$ exactly when $f$ is injective.^[Here we haven't labeled the morphism from the zero module, since that morphism is unique (it sends the single element of the zero module to $0_M$).] For example, the natural inclusion of ${\bf Z}$ into ${\bf Q}$ (as abelian groups) corresponds to the exact sequence of abelian groups

$$0\to {\bf Z}\to {\bf Q}.$$


Similarly, a sequence of morphisms 

$$M\xrightarrow{f} N\to 0$$

is exact at $N$ exactly when $f$ is surjective.^[Once again, there is no need to label the unique morphism from $N$ to the zero module (which sends every element in $N$ to the single element in the zero module.)] For example, the canonical projection from the abelian group ${\bf Z}$ onto the quotient group ${\bf Z}/2{\bf Z}={\bf Z}_2$ corresponds to the exact sequence

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

> [!question] Are there shorter exact sequences?
> You might reasonably ask whether exact sequences of the above type are really the shortest exact sequences. The answer is no, but among sequences that start and end with $0$, they're the shortest ones that can be interesting.
> 
> Indeed, the shortest sequence that starts and ends with $0$ and which we can even consider the notion of exactness is one of the form $0\to X\to 0$. This sequence is exact at $X$ exactly when $X\simeq 0$. Not very interesting.
> 
> The next longer sequence is one of the form $0\to X\xrightarrow{f} Y\to 0$. You should convince yourself that this sequence is exactly exactly when $f$ is an isomorphism. Again, not especially interesting.
> 
> So the shortest sequences starting and ending with $0$ for which exactness might be interesting are the so-called short exact sequences. 

### Submodules and quotient modules

For each submodule $N$ of an $R$-module $M$, we have a short exact sequence

$$0\to N\to M\to M/N\to 0.$$

For instance, we have the  short exact sequence of abelian groups

$$0\to 2{\bf Z}\to {\bf Z}\to {\bf Z}_2\to 0.$$



### Direct sums of two modules

For each pair of $R$-modules $M_1$ and $M_2$, we have a short exact sequence of $R$-modules

$$0\to M_1\xrightarrow{j_1} M_1\oplus M_2\xrightarrow{\pi_2} M_2\to 0.$$


### Forming short exact sequences from morphisms

Suppose we have a morphism $f:X\to Y$. We can then form the short exact sequence

$$0\to \ker(f)\to X\to \operatorname{im}(f)\to 0.$$

If the quotient $Y/\operatorname{im}(f)$ exists (e.g., we're working in $R\text{-{\bf Mod}}$), then we also have a short exact sequence

$$0\to \operatorname{im}(f)\to Y\to Y/\operatorname{im}(f)\to 0.$$


### Forming short exact sequences from very short, exact sequences

Suppose we have a sequence

$$X\xrightarrow{f} Y\xrightarrow{g} Z$$

that is exact at $Y$; i.e., $\ker(g)=\operatorname{im}(f)$. Using the fact that $Y/\operatorname{im}(f)=Y/\ker(g)$, we can then form the short exact sequence

$$0\to \operatorname{im}(f)\to Y\to Y/\ker(g)\to 0.$$

## Chain complexes
---

A natural generalization of the notion of an exact sequence is that of a *chain complex*.

> [!note] Definition of chain complex
> A sequence of morphisms
>
> $$\cdots \xrightarrow{f_{n-2}} X_{n-1}\xrightarrow{f_{n-1}} X_n\xrightarrow{f_n} X_{n+1}\xrightarrow{f_{n+1}}\cdots$$
>
> is called a **chain complex** if for every $n$ one has $\operatorname{im}(f_n)\subseteq \ker(f_{n+1})$; equivalently, if $f_{n+1}\circ f_n=0$ for every $n$.
>
> More generally, the sequence above is called an **$N$-chain complex** if the composition of any $N$ successive morphisms is always $0$.

Why generalize from exact sequences to chain complexes? Functors! Given any sequence of morphisms, say in the category of $R$-modules

$$\cdots \xrightarrow{f_{n-2}} M_{n-1}\xrightarrow{f_{n-1}} M_n\xrightarrow{f_n} M_{n+1}\xrightarrow{f_{n+1}}\cdots$$

and a functor $F$ (from that category to another, say to the category $\textbf{Ab}$ of abelian groups), functoriality guarantees we have a chain of morphisms

$$\cdots \xrightarrow{F(f_{n-2})} F(M_{n-1})\xrightarrow{F(f_{n-1})} F(M_n)\xrightarrow{F(f_n)} F(M_{n+1})\xrightarrow{F(f_{n+1})}\cdots$$
We will soon see that if the original sequence of morphisms is exact, the resulting sequence often will not be. That failure of exactness will actually be something we study in more detail.

However, we will see that if the original sequence is a chain complex (which includes the case of an exact sequence), then the resulting sequence will at least still be a chain complex. So chain complexes seem like the right type of object to consider to make things categorical.

In fact, if we define morphisms of chain complexes, then we could consider an actual [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Chain complexes\|category of chain complexes]] ...


## Sequences of morphisms
---

Chain complexes and exact sequences are special types of sequences of morphisms, so you might be wondering whether we could give a more categorical definition. The answer is yes, as it always is.

First let's abuse notation for the millionth time and write ${\bf Z}$ for the preorder category of the integers. This is the category whose objects are indexed by the integers, and for which there is a unique arrow $m\to n$ exactly when $m\leq n$. We can visualize this category as just an infinite sequence of arrows:

$$\cdots \to -2\to -1\to 0\to 1\to 2\to \cdots$$
A **sequence of morphisms** in a category $C$ is then nothing more than a functor $F:{\bf Z}\to C$. Indeed, it assigns to each integer $n\in {\bf Z}$ an object $X_n:=F(n)$ in $C$, and to each unique arrow $n\to n+1$ an arrow $f_n:X_n\to X_{n+1}$. (All other arrows are compositions of such arrows, hence are determined by functoriality.)

The advantage to this formality is that it's clear how we should/must define a **morphism between sequences of morphisms**: it must be a natural transformation between such functors. (We'll have a picture in the next note.)
{ #5a731e}


And now we have a full-on category of sequences of morphisms in $C$, namely the functor category $C^{\bf Z}$.

## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences III - Morphisms of Exact Sequences\|Exact Sequences III - Morphisms of Exact Sequences]]