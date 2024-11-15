---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/modules-over-a-pid/modules-over-a-pid-the-fundamental-theorem/","tags":["module_theory"],"updated":"2024-11-15T09:00:28-08:00"}
---

We can use the [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Linear independence, rank and the structure of free modules#^6b70c5\|structure theorem for free modules over a PID]] to prove a structure theorem for finitely generated modules over a PID.
# The Fundamental Theorem: Invariant Factor Form

> [!summary] Fundamental Theorem for Finitely Generated Modules over a PID (Invariant Factor Form)
> Let $R$ be a PID and $M$ be a finitely generated $R$-module. Then:
> 1. There is an $R$-module isomorphism
>    
>    $$M\simeq R^n\oplus R/\langle a_1\rangle\oplus R/\langle a_2\rangle\oplus\cdots \oplus R/\langle a_m\rangle$$
>    
>    for some integer $n\geq 0$ and nonzero nonunit elements $a_i\in R$ that satisfy $a_1\mid a_2\mid \cdots \mid a_m$;
>   2. $M$ is torsion free if and only if $M$ is free; and
>   3. In the direct sum decomposition in (1),
>      
>      $$\operatorname{Tor}(M)\simeq R/\langle a_1\rangle\oplus R/\langle a_2\rangle\oplus\cdots \oplus R/\langle a_m\rangle.$$
>      
>      In particular, $M$ is a torsion module if and only if $n=0$, in which case the annihilator of $M$ is the ideal $\langle a_m\rangle$.

Let's proves this result. Let $\{m_1,\ldots, m_k\}$ be a set of generators for $M$ of minimal cardinality and let $\pi:F(\{x_1, \ldots, x_k\})\to M$ be the corresponding surjective $R$-module morphism. By the First Isomorphism Theorem for modules we then have $F(\{x_1, \ldots, x_k\})/\ker(\pi)\simeq M$. Using our [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Linear independence, rank and the structure of free modules#^6b70c5\|structure theorem for free modules over a PID]] with the module $F(\{x_1,\ldots, x_k\})$ and the submodule $\ker(\pi)$, there is a new basis $\{y_1,\ldots, y_k\}$ for $F(\{x_1,\ldots, x_k\})$ and nonzero elements $a_1,\ldots, a_l\in R$ with $a_1\mid a_2\mid \cdots \mid a_l$ such that $\{a_1y_1,\ldots, a_ly_l\}$ is a basis for $\ker(\pi)$.

For each index $1\leq i\leq l$, let $p_i:R\to R/\langle a_i\rangle$ be the $R$-module projection, while for indices $l<i\leq k$ let $p_i:R\to R$ be the identity map. Noting that $F(\{x_1,\ldots, x_k\})\simeq\langle y_1\rangle\oplus \cdots \oplus \langle y_k\rangle$ and each submodule $\langle y_i\rangle=Ry_i\cong R$, these morphisms together define a surjective $R$-module morphism

$$\phi:F(\{x_1,\ldots, x_k\})\to R/\langle a_1\rangle\oplus\cdots \oplus R/\langle a_l\rangle\oplus \underbrace{R\oplus\cdots \oplus R}_{k-l\text{ times}}.$$

In terms of the elements, this map is given by

$$\bigoplus_{i=1}^k \alpha_i y_i\mapsto \bigoplus_{i=1}^l (\alpha_i+\langle a_i\rangle)+\bigoplus_{i=l+1}^k \alpha_i.$$

Noting that these are all formal sums (which we've tried to indicate using the formal sum notation), it's immediate that the kernel of this map is exactly $\langle a_1y_1\rangle\oplus \cdots \oplus \langle a_ly_l\rangle=\ker(\pi)$. We can thus conclude

$$M\simeq F(\{x_1,\ldots, x_k\})/\ker(\pi)=F(\{x_1, \ldots, x_k\})/\ker(\phi)\simeq R\langle a_1\rangle\oplus\cdots \oplus R/\langle a_l\rangle\oplus \underbrace{R\oplus\cdots \oplus R}_{k-l\text{ times}}.$$

For any of the $a_i$ that are units we have $R/\langle a_i\rangle=\{0\}$, so simply remove those terms from the direct sum. (Such $a_i$ would have to occur first in the list, since $a_i$ is a unit exactly when $\langle a_i\rangle=R$, and the divisibility condition on the $a_i$ is equivalent to the containment condition $\langle a_1\rangle\supseteq \langle a_2\rangle\supseteq \cdots \supseteq \langle a_l\rangle$.) Then upon letting $n=k-l$ and noting $\underbrace{R\oplus \cdots \oplus R}_{n\text{ times}}\simeq R^n$, we have proven (1).

Since $R/\langle a\rangle$ is a torsion $R$-module for any nonzero $a\in R$, property (1) immediately implies $M$ is torsion free exactly when $M\simeq R^n$. This proves (2).

Finally, the annihilator of $R/\langle a\rangle$ is the ideal $\langle a\rangle$, so property (3) immediately follows.

# Free rank and invariant factors

One can check the decomposition

$$M\simeq R^n\oplus R/\langle a_1\rangle\oplus R/\langle a_2\rangle\oplus\cdots \oplus R/\langle a_m\rangle$$

is effectively unique. More precisely, if we have another decomposition

$$M\simeq R^{n'}\oplus R/\langle b_1\rangle\oplus R/\langle a_2\rangle\oplus\cdots \oplus R/\langle b_{m'}\rangle$$

with $b_1\mid b_2\mid\cdots \mid b_{m'}$, then $n'=n$, $m'=m$ and $\langle b_i\rangle=\langle a_i\rangle$ for each $i$ (hence $a_i$ and $b_i$ are the same up to unit). It is the divisibility condition that gives the uniqueness.

> [!note] Definition of free rank and invariant factors
> Let $R$ Be a PID and $M$ be a finitely generated $R$-module. Suppose $M$ has a decomposition
> 
> $$M\simeq R^n\oplus R/\langle a_1\rangle\oplus R/\langle a_2\rangle\oplus\cdots \oplus R/\langle a_m\rangle$$
> 
> with $a_1\mid a_2\mid\cdots \mid a_m$. The integer $n$ is called the **free rank** of $M$, and the elements $a_1,\ldots, a_m\in R$ are called the **invariant factors** of $M$.

Note that the invariant factors are only defined up to multiplication by units.

# The Fundamental Theorem: Elementary Divisor Form

We can use the Chinese Remainder Theorem to decompose the cyclic modules in the invariant factor decomposition so that the new cyclic modules have annihilators that are as simple as possible. To do this, first note that since $R$ is a PID it's also a UFD. So for each nonzero element $a\in R$ we can write

$$a=up_1^{\alpha_1}\cdots p_s^{\alpha_s}$$

for some unit $u$ and distinct primes $p_i$, unique up to multiplication by units. Since the primes are distinct, for each pair $i\neq j$ the ideals $\langle p_i\rangle$ and $\langle p_j\rangle$ are comaximal; i.e., $\langle p_i\rangle+\langle p_j\rangle=R$. The intersection of the ideals $\langle p_1\rangle\cap \cdots \langle p_s\rangle$ is exactly $\langle a\rangle$, so by the Chinese Remainder Theorem we have

$$R/\langle a\rangle\simeq R/\langle p_1^{\alpha_1}\rangle\oplus \cdots \oplus R/\langle p_s^{\alpha_s}\rangle.$$

This is an isomorphism of both rings and $R$-modules.

If we do this to each cyclic factor in the invariant form decomposition of a finitely generated $R$-module $M$, we obtain the following:

> [!summary] Fundamental Theorem for Finitely Generated Modules over a PID (Elementary Divisor Form)
> Let $R$ be a PID and $M$ be a finitely generated $R$-module. Then there is an $R$-module isomorphism
> 
> $$M\simeq R^n\oplus R/\langle p_1^{\alpha_1}\rangle\oplus R/\langle p_2^{\alpha_2}\rangle\oplus \cdots \oplus R/\langle p_t^{\alpha_t}\rangle,$$
> 
> where $n$ is a nonnegative integer and $p_1^{\alpha_1},\ldots, p_t^{\alpha_t}$ are positive powers of (not necessarily distinct) primes in $R$.

Note that the primes are no longer distinct, since different cyclic factors $R/\langle a_i\rangle$ and $R/\langle a_j\rangle$ may decompose into pieces with shared primes. However, as with the Invariant Factor Decomposition, this decomposition of $M$ is unique up to reordering and multiplication by units.

> [!note] Definition of elementary divisors
> Let $R$ Be a PID and $M$ be a finitely generated $R$-module. Suppose $M$ has a decomposition
> 
> $$M\simeq R^n\oplus R/\langle p_1^{\alpha_1}\rangle\oplus R/\langle p_2^{\alpha_2}\rangle\oplus \cdots \oplus R/\langle p_t^{\alpha_t}\rangle,$$
> 
> as in the theorem above. The prime powers $p_1^{\alpha_1},\ldots, p_t^{\alpha_t}$ are called the **elementary divisors** of $M$.

Note that the elementary divisors are only defined up to multiplication by units.

# The Primary Decomposition Theorem

In the elementary divisor form decomposition of an $R$-module $M$, we can group together all of the cyclic summands with the same prime $p$. What we obtain is the submodule $N$ of $M$ consisting of all elements of $M$ that are annihilated by some power of the prime $p$. This idea leads to the following:

> [!summary] The Primary Decomposition Theorem
> Let $R$ be a PID and $M$ be a nonzero torsion $R$-module with nonzero annihilator $a$. Suppose the prime factorization of $a$ in $R$ is
> 
> $$a=up_1^{\alpha_1}\cdots p_s^{\alpha_s},$$
> 
> and let $N_i=\{m\in M\mid p_i^{\alpha_i}m=0\}$. Then $N_i$ is a submodule of $M$ with annihilator $p_i^{\alpha_i}$ and is the submodule of $M$ of all elements annihilated by some power of $p_i$. We have
> 
> $$M\simeq N_1\oplus \cdots \oplus N_s.$$
> 
> If $M$ is finitely generated then each $N_i$ is the direct sum of finitely many cyclic modules whose annhilators are divisors of $p_i^{\alpha_i}$.

In the above decomposition, the submodule $N_i$ is called the **$p_i$-primary component** of $M$.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form I - Definition\|Rational Canonical Form I - Definition]]