---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/tensor-products-of-modules/tensor-products-iv-additional-properties/","tags":["module_theory"],"updated":"2024-03-06T13:56:23-08:00"}
---

This universal property of the tensor product can be used to prove many properties, the most important of which we list below. Proofs will be added at some point, but for now we will simply state (and allow ourselves to use) each property.

---
## Identity, Associativity, and Symmetry

We have properties similar to the basic properties of conventional multiplication, at least when commutative rings are involved. To that end, suppose $R$, $S$, and $T$ are commutative rings (with unity).
#### Identity

>[!summary] Proposition
>Suppose $M$ is an $(R,S)$-bimodule. If we consider the ring $R$ with its standard $(R,R)$-bimodule structure, then there is a isomorphism of $(R,S)$-modules $$R\otimes_R M\xrightarrow{\simeq} M,$$
>given specifically on simple tensors by $r\otimes m \mapsto rm$.

#### Associativity

>[!summary] Proposition
>Suppose $M$, $N$, and $P$ are $(R,S)$-, $(S, T)$-, and $(T, U)$-bimodules, respectively. Then there is an isomorphism of $(R,U)$-bimodules $$(M\otimes_S N)\otimes_T P\xrightarrow{\simeq} M\otimes_S (N\otimes_T P),$$
>given specifically on simple tensors by $(m\otimes n)\otimes p\mapsto m\otimes (n\otimes p)$.

#### Symmetry

>[!summary] Proposition
>Suppose $M$ and $N$ are $R$-modules and we give them the standard $(R,R)$-bimodule structure. Then there is an $R$-module isomorphism $$M\otimes_R N\xrightarrow{\simeq} N\otimes_R M,$$
>given specifically on simple tensors by $m\otimes n\mapsto n\otimes m$.

The proof of this property is left as [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Symmetry of tensor product\|an exercise]].

---
## Tensor products commute with direct sums

>[!summary] The tensor product commutes with direct sums
>Suppose $M$ is an $(R,S)$-bimodule and $\{N_i\mid i\in I\}$ is a family of $(S,T)$-bimodules. Then there is a unique isomorphism of $(R,T)$-bimodules
$$M\otimes_S \left(\bigoplus_{i\in I} N_i\right)\simeq \bigoplus_{i\in I} \left(M\otimes_S N_i\right)$$
{ #690b7a}


We could prove this directly, but we can also simply note that the tensor product functor $M\times_S -$ is a [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products III - Balanced Maps and a Universal Property of the Tensor Product#^4dc916\|left adjoint]] and hence [[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Adjoints#^6063ae\|commutes with all colimits]], such as direct sums.

The analogous result is true with the positions of the tensor product and direct sum exchanged, i.e., right-tensoring distributes across direct sums. Because of this, we say that **tensor product commutes with direct sums**. As finite direct products are isomorphic to the corresponding direct sums, this also implies that **tensor product commutes with finite direct products**.

#### Extending scalars on free modules
A special case of the above property is that "extending scalars" commutes with the free module construction. More precisely:

>[!summary] Corollary
>Suppose $R\subseteq S$ are rings and $R^n$ is the free $R$-module of rank $n$, i.e., the free $R$-module on a set of $n$ elements. Then there is an $S$-module isomorphism
>$$S\otimes_R R^n \simeq S^n.$$
>

Indeed, observe that
$$\begin{align*}
S\otimes_R R^n&\simeq S\otimes_R \left(R\oplus \cdots \oplus R\right)\\
&\simeq (S\otimes_R R)\oplus\cdots (S\otimes_R R)\\
&\simeq S\oplus\cdots S\\
&\simeq S^n
\end{align*}$$

#### Tensor products of free modules
Another consequence of the above property is that the tensor product of two free $R$-modules is again a free $R$-module. More precisely:

>[!summary] Corollary
>Suppose $M\simeq R^a$ and $N\simeq R^b$ are free $R$-modules of ranks $a$ and $b$, respectively. We then have an $R$-module isomorphism
$$M\otimes_R N\simeq R^{ab}.$$
Furthermore, if $\{m_1,\ldots, m_a\}$ and $\{n_1,\ldots, n_b\}$ are bases for $M$ and $N$ as free $R$-modules, respectively, then a basis for $M\otimes_R N$ as a free $R$-module is $\{m_i\otimes n_j\mid 1\leq i\leq a,\quad 1\leq j\leq b\}$.

The statement about bases follows from our explicit isomorphism (involving tensor products of direct sums) above.

---
## Tensor products of morphisms

Suppose $\phi:M_1\to M_2$ is an $(R,S)$-bimodule morphism and $\psi:N_1\to N_2$ is an $(S,T)$-bimodule morphism. We can define a map $\phi\otimes \psi:M_1\otimes_S N_1\to M_2\otimes_S N_2$ by
$$(\phi\otimes\psi)(m_1\otimes n_1)=\phi(m_1)\otimes \psi(n_1),$$
and then extending linearly to all tensors. One can check that this is well defined and an $(R,T)$-bimodule morphism.

---
## Tensor product with a fraction field

>[!summary] Proposition
>Suppose $D$ is an integral domain with field of fractions $Q$. The tensor product $Q\otimes_D M$ is closely related to the torsion in the module $M$, in the following ways:
>1. f $j:M\to Q\otimes_D M$ is the morphism given by $m\mapsto 1_Q\otimes m$, then $\ker(j)=\operatorname{Tor}(M).$
>2. For any $D$-module $M$, the tensor product $Q\otimes_D M$ is zero if and only if $M$ is torsion.
>3. For any $D$-module $M$, we have an isomorphism of $D$-modules $Q\otimes_D M\simeq Q\otimes_D (M/\operatorname{Tor}(M))$.

