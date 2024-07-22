---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/modules-over-a-pid/modules-over-a-pid-the-fundamental-theorem/","tags":["module_theory"],"updated":"2024-03-06T13:55:31-08:00"}
---

We can use the [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Linear independence and rank#^6b70c5\|structure theorem for free modules over a PID]] to prove a structure theorem for finitely generated modules over a PID.
## The Fundamental Theorem: Invariant Factor Form

>[!summary] Fundamental Theorem for Finitely Generated Modules over a PID (Invariant Factor Form)
>Let $R$ be a PID and $M$ be a finitely generated $R$-module. Then:
>1. There is an $R$-module isomorphism
>   $$M\simeq R^n\oplus R/(a_1)\oplus R/(a_2)\oplus\cdots \oplus R/(a_m)$$
>   for some integer $n\geq 0$ and nonzero elements $a_i\in R$ that are not units and satisfy $a_1\mid a_2\mid \cdots \mid a_m$;
> 2. $M$ is torsion free if and only if $M$ is free; and
> 3. In the direct sum decomposition in (1),
>    $$\operatorname{Tor}(M)\simeq R/(a_1)\oplus R/(a_2)\oplus\cdots \oplus R/(a_m).$$
>    In particular, $M$ is a torsion module if and only if $k=0$ (and in this case the annihilator of $M$ is the ideal $(a_m)$).


Let $A=\{m_1,\ldots, m_k\}$ be a set of generators for $M$ of minimal cardinality and let $\pi:F(A)\to M$ be the corresponding surjective $R$-module morphism, where $A=\{x_1,\ldots, x_k\}$. By the First Isomorphism Theorem for modules we then have $F(A)/\ker(\pi)\simeq M$. Using our [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Linear independence and rank#^6b70c5\|structure theorem for free modules over a PID]] with the module $F(A)$ and submodule $\ker(\pi)$, there is a new basis $\{y_1,\ldots, y_k\}$ for $F(A)$ (hence $F(A)=(y_1)\oplus \cdots (y_k)$) and nonzero elements $a_1,\ldots, a_l\in R$ with $a_1\mid a_2\mid \cdots \mid a_l$ such that $\{a_1y_1,\ldots, a_ly_l\}$ is a basis for $\ker(\pi)$ (hence $\ker(\pi)=(a_1y_1)\oplus\cdots (a_ly_l)$).

For each index $1\leq i\leq l$ we can let $p_i:R\to R/(a_i)$ be the $R$-module projection, while for indices $l<i\leq k$ we can let $p_i:R\to R$ be the identity map. Noting that $F(A)=(y_1)\oplus \cdots \oplus (y_k)$ and each submodule $(y_i)=Ry_i\cong R$, these morphisms together define a surjective $R$-module morphism
$$\phi:F(A)\to R/(a_1)\oplus\cdots \oplus R/(a_l)\oplus \underbrace{R\oplus\cdots \oplus R}_{k-l\text{ times}}.$$
In terms of the elements, this map is given by
$$\bigoplus_{i=1}^k \alpha_i y_i\mapsto \bigoplus_{i=1}^l (\alpha_i+(a_i))+\bigoplus_{i=l+1}^k \alpha_i.$$
Noting that these are all formal sums, it's immediate that the kernel of this map is exactly $(a_1y_1)\oplus \cdots \oplus (a_ly_l)=\ker(\pi)$. We can thus conclude
$$M\simeq F(A)/\ker(\pi)=F(A)/\ker(\phi)\simeq R/(a_1)\oplus\cdots \oplus R/(a_l)\oplus \underbrace{R\oplus\cdots \oplus R}_{k-l\text{ times}}.$$
For any of the $a_i$ that are units we have $R/(a_i)=(0)$, so simply remove those terms from the direct sum. (Such $a_i$ would have to occur first in the list, since $a_i$ is a unit exactly when $(a_i)=R$, and the divisibility condition on the $a_i$ is equivalent to the containment condition $(a_1)\supseteq (a_2)\supseteq \cdots \supseteq (a_l)$.) Then upon letting $n=k-l$ and noting $\underbrace{R\oplus \cdots \oplus R}_{n\text{ times}}\simeq R^n$, we have proven (1).

Since $R/(a)$ is a torsion $R$-module for any nonzero $a\in R$, property (1) immediately implies $M$ is torsion free exactly when $M\simeq R^n$. This proves (2).

Finally, the annihilator of $R/(a)$ is the ideal (a), so property (3) immediately follows.

---

## Uniqueness of the decomposition

One can check the decomposition
$$M\simeq R^n\oplus R/(a_1)\oplus R/(a_2)\oplus\cdots \oplus R/(a_m)$$
is effectively unique. More precisely, if we have another decomposition
$$M\simeq R^{n'}\oplus R/(b_1)\oplus R/(a_2)\oplus\cdots \oplus R/(b_{m'})$$
with $b_1\mid b_2\mid\cdots \mid b_{m'}$, then $n'=n$, $m'=m$ and $(b_i)=(a_i)$ for each $i$ (hence $a_i$ and $b_i$ are the same up to unit). It is the divisibility condition that gives the uniqueness.

>[!note] Definition of free rank and invariant factors
>Let $R$ Be a PID and $M$ be a finitely generated $R$-module. Suppose $M$ has a decomposition
>$$M\simeq R^n\oplus R/(a_1)\oplus R/(a_2)\oplus\cdots \oplus R/(a_m)$$
>with $a_1\mid a_2\mid\cdots \mid a_m$. The integer $n$ is called the **free rank** of $M$, and the elements $a_1,\ldots, a_m\in R$ are called the **invariant factors** of $M$.

Note that the invariant factors are only defined up to multiplication by units.

---

## The Fundamental Theorem: Elementary Divisor Form

We can use the Chinese Remainder Theorem to decompose the cyclic modules in the invariant factor decomposition so that the new cyclic modules have annihilators that are as simple as possible.

To do this, first note that since $R$ is a PID it's also a UFD. So for each nonzero element $a\in R$ we can write
$$a=up_1^{\alpha_1}\cdots p_s^{\alpha_s}$$
for some unit $u$ and distinct primes $p_i$, unique up to multiplication by units. Since the primes are distinct, for each pair $i\neq j$ the ideals $(p_i)$ and $(p_j)$ are comaximal; i.e., $(p_i)+(p_j)=R$. The intersection of the ideals $(p_1)\cap \cdots (p_s)$ is exactly $(a)$, so by the Chinese Remainder Theorem we have
$$R/(a)\simeq R/(p_1^{\alpha_1})\oplus \cdots \oplus R/(p_s^{\alpha_s}).$$
This is an isomorphism of both rings and $R$-modules.

If we do this to each cyclic factor in the invariant form decomposition of a finitely generated $R$-module $M$, we obtain the following:

>[!summary] Fundamental Theorem for Finitely Generated Modules over a PID (Elementary Divisor Form)
>Let $R$ be a PID and $M$ be a finitely generated $R$-module. Then there is an $R$-module isomorphism
>$$M\simeq R^n\oplus R/(p_1^{\alpha_1})\oplus R/(p_2^{\alpha_2})\oplus \cdots \oplus R/(p_t^{\alpha_t}),$$
>where $n$ is a nonnegative integer and $p_1^{\alpha_1},\ldots, p_t^{\alpha_t}$ are positive powers of (not necessarily distinct) primes in $R$.

Note that the primes are no longer distinct, since different cyclic factors $R/(a_i)$ and $R/(a_j)$ may decompose into pieces with shared primes. However, as with the Invariant Factor Decomposition, this decomposition of $M$ is unique up to reordering and multiplication by units.

>[!note] Definition of elementary divisors
>Let $R$ Be a PID and $M$ be a finitely generated $R$-module. Suppose $M$ has a decomposition
>$$M\simeq R^n\oplus R/(p_1^{\alpha_1})\oplus R/(p_2^{\alpha_2})\oplus \cdots \oplus R/(p_t^{\alpha_t}),$$
>as in the theorem above. The prime powers $p_1^{\alpha_1},\ldots, p_t^{\alpha_t}$ are called the **elementary divisors** of $M$.

Note that the elementary divisors are only defined up to multiplication by units.

---

## The Primary Decomposition Theorem

In the elementary divisor form decomposition of an $R$-module $M$, we can group together all of the cyclic summands with the same prime $p$. What we obtain is the submodule $N$ of $M$ consisting of all elements of $M$ that are annihilated by some power of the prime $p$. This idea leads to the following:

>[!summary] The Primary Decomposition Theorem
>Let $R$ be a PID and $M$ be a nonzero torsion $R$-module with nonzero annihilator $a$. Suppose the prime factorization of $a$ in $R$ is
>$$a=up_1^{\alpha_1}\cdots p_s^{\alpha_s},$$
>and let $N_i=\{m\in M\mid p_i^{\alpha_i}m=0\}$. Then $N_i$ is a submodule of $M$ with annihilator $p_i^{\alpha_i}$ and is the submodule of $M$ of all elements annihilated by some power of $p_i$. We have
>$$M\simeq N_1\oplus \cdots \oplus N_s.$$
>If $M$ is finitely generated then each $N_i$ is the direct sum of finitely many cyclic modules whose annhilators are divisors of $p_i^{\alpha_i}$.

In the above decomposition, the submodule $N_i$ is called the **$p_i$-primary component** of $M$.