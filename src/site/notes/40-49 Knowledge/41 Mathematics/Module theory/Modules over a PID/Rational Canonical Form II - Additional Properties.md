---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/modules-over-a-pid/rational-canonical-form-ii-additional-properties/","tags":["module_theory"],"updated":"2025-03-31T13:02:24-07:00"}
---

The following are some additional properties of rational canonical forms.

## Existence and uniqueness of rational canonical forms
---

> [!summary] Rational canonical form for linear transformations
> Let $V$ be a finite-dimensional vector space over a field $F$, and let $T:V\to V$ be a linear endomorphism. Then there is a basis $\mathcal{B}$ for $V$ such that the matrix $\mathcal{M}(T;\mathcal{B})$ for $T$ with respect to the basis $\mathcal{B}$ is in rational canonical form.
>
> The rational canonical form for $T$ is unique.

This is a direct corollary of the [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Modules over a PID - The Fundamental Theorem\|Fundamental Theorem for modules over a PID]] in the case of the ring $R=F[x]$. As explained in [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form I - Definition\|this note]], the isomorphism

$$V\simeq F[x]/\langle a_1(x)\rangle\oplus \cdots \oplus F[x]/\langle a_m(x)\rangle,$$

exactly corresponds to a choice of $F$-basis for $V$ for which the corresponding matrix for $T$ is in rational canonical form. (The uniqueness followed from insisting the invariant factors $a_i(x)$ be monic polynomials, and hence were no longer only unique "up to unit.")

## Rational canonical form and matrix similarity
---

For a given $F$-vector space $V$, each linear endomorphism $T:V\to V$ gives rise to an $F[x]$-module structure on $V$, and conversely. It seems reasonable, then, to ask the question:

> [!question] Question
> When do two linear endomorphisms $S,T:V\to V$ give rise to the "same" (i.e., isomorphic) $F[x]$-modules?

Fortunately, the answer is as simple as you might hope:

> [!summary] Rational canonical form characterizes similarity
> Suppose $S,T:V\to V$ are linear endomorphisms of a finite-dimensional $F$-vector space $V$. Then the following are equivalent:
> 1. The $F[x]$-modules obtained from $V$ via $S$ and $T$ are isomorphic $F[x]$-modules.
> 2. $S$ and $T$ are similar; i.e., there is a linear automorphism $C:V\to V$ such that $S=CTC^{-1}$.
> 3. $S$ and $T$ have the same rational canonical form.

In the above propositions, the same statements hold if "linear transformations" is replaced with $n\times n$ matrices over $F$, where $n=\dim_F(V)$.

At some point we should add a proof of the above result. For now, let's just accept it.

## Invariant factors and minimal/characteristic polynomials
---

In light of the above results, it is reasonable to say that if you know the invariant factors of an $n\times n$ matrix, then you must know every possible property of that matrix. In particular, you should be able to deduce things like its minimal and characteristic polynomials.

Indeed, you can. We've [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form I - Definition#^429f7b\|already noted]] that the minimal polynomial is the largest invariant factor. For the rest, we have the following:

> [!summary] Characteristic polynomials and invariant factors
> Let $A$ be an $n\times n$ matrix over a field $F$. Then:
> 1. The characteristic polynomial of $A$ is the product of the invariant factors of $A$.
> 2. (**The Cayley-Hamilton Theorem**) The minimal polynomial of $A$ divides the characteristic polynomial of $A$.
> 3. The characteristic polynomial of $A$ divides some power of the minimal polynomial of $A$.

The first fact above should probably be the *definition* of the characteristic polynomial of $A$. In any case, the second and third facts both immediately follow from the divisibility condition $a_1(x)\mid a_2(x)\mid \cdots \mid a_m(x)$ and the fact that $a_m(x)$ is the minimal polynomial of $A$.

> [!note] Minor note
> In many textbooks, the characteristic polynomial of $A$ is defined as $p(x)=\det(A-xI_n)$ (or maybe $p(\lambda)=\det(A-\lambda I_n)$, if the focus is on eigenvalues). In our setup, however, the characteristic polynomial is taken to be $\det(xI_n-A)$, which is guaranteed to be monic. In general, the only difference is a possible minus sign, since $\det(A-xI_n)=(-1)^n \det(xI_n-A)$.


## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form III - Computation\|Rational Canonical Form III - Computation]]