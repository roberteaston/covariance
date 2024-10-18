---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/tensor-products-of-modules/tensor-products-iii-balanced-maps-and-a-universal-property-of-the-tensor-product/","tags":["module_theory"],"updated":"2024-10-18T08:28:35-07:00"}
---

# Balanced maps

Before we state a second universal property of our tensor product construction, we first need to talk about a new class of map between bimodules.

We begin with a slight generalization of the notion of a bimodule, to simply a set $X$ endowed with a left $R$-action and right $S$-action for some rings $R$ and $S$, in a compatible way. In other words, we have set maps $R\times X\to X$ and $X\times S\to X$ such that $r\cdot (x\cdot s) = (r\cdot x)\cdot s$. Note that there are no "distributive" rules since the set $X$ is not assumed to have any binary operations. Also note that any $(R,S)$-bimodule $M$ can also be regarded as an $(R,S)$-set by simply forgetting the addtive operation in $M$.

A **morphism of $(R,S)$**-sets $X$ and $Y$ is simply a set map $f:X\to Y$ that is compatible with the left $R$- and right $S$-actions. In other words, $f(rx)=rf(x)$ and $f(xs)=f(x)s$ for every $x\in X$, $r\in R$ and $s\in S$.

Now suppose $R$, $S$, and $T$ are rings (with unity), $M$ is an $(R,S)$-bimodule and $N$ is an $(S,T)$-bimodule. We can form an $(R,T)$-set denoted $M\times N$ as follows. At the level of sets, it is simply the Cartesian product of the corresponding sets of elements, and so consists of all ordered pairs $(m,n)$ with $m\in M$ and $n\in N$. We can give this set a left $R$-action via the $M$-component and a right $T$-action via the $N$-component, i.e., $r\cdot (m,n) =(rm,n)$ and $(m,n)\cdot t = (m,nt)$.

In this situation, for any $(R,T)$-module $P$ we say a morphism of $(R,T)$-sets $f:M\times N\to P$ is:
- **linear in $M$** if for for every $n\in N$ the map $M\to P$ defined by $m\mapsto f(m,n)$ is a left $R$-module morphism;
- **linear in $N$** if for every $m\in M$ the map $N\to P$ defined by $n\mapsto f(m,n)$ is a right $T$-module morphism;
- bilinear if it is both linear in $M$ and in $N$; and
- **$S$-balanced** (or **middle balanced**) if for every $s\in S$ we have $f(ms,n)=f(m,sn),$ for all $m\in M$ and $n\in N$.

With this new terminology in place, for any triple of bimodules $M$, $N$, $P$ as above, we can talk about the set of bilinear $S$-balanced $(R,T)$-maps $f:M\times N\to P$. These are the maps that satisfy the following conditions:
1. $f(m_1+m_2,n)=f(m_1,n)+f(m_2,n)$ for all $m_1,m_2\in M$ and $n\in N$
2. $f(m,n_1+n_2)=f(m,n_1)+f(m,n_2)$ for all $m\in M$ and $n_1, n_2\in N$
3. $f(rm,n)=rf(m,n)$ for all $r\in R$, $m\in M$, and $n\in N$
4. $f(m,nt)=f(m,n)t$ for all $t\in T$, $m\in M$, and $n\in N$
5. $f(ms,n)=f(m,sn)$ for all $s\in S$, $m\in M$, and $n\in N$

Finally, we can state the universal property of our tensor product construction.
# A universal property of tensor products

>[!summary] Universal property of the tensor product
>Suppose $R$, $S$, and $T$ are rings (with unity), $M$ is an $(R,S)$-bimodule, and $N$ is an $(S,T)$-bimodule. Then there is a natural bijection for every $(R,T)$-bimodule $P$ between the set of $(R,T)$-bimodule morphisms $M\otimes_S N\to P$, with the set of $S$-balanced bilinear $(R,T)$-maps $M\times N\to P$.
{ #b2963b}


How does this bijection work? First suppose $f:M\otimes_S N\to P$ is an $(R,T)$-bimodule morphism. Define a set map $g:M\times N\to P$ by $g(m,n)=f(m\otimes n)$. We claim this is an $S$-balanced bilinear $(R,T)$-map. That's a lot to unpack, so let's start verifying properties.

First observe that, using the fact that $f$ is compatible with the additive operation in $M$, for every $m_1, m_2\in M$ and $n\in N$ we have
$$\begin{align*}
g(m_1+m_2,n)&=f((m_1+m_2)\otimes n)\\
&=f(m_1\otimes n+m_2\otimes n)\\
&=f(m_1\otimes n)+f(m_2\otimes n)\\
&=g(m_1,n)+g(m_2,n).
\end{align*}$$
The similar argument shows that $g(m,n_1+n_2)=g(m,n_1)+g(m,n_2)$ for every $m\in M$ and $n_1, n_2\in N$. So $g$ is a bilinear map from $M\times N$.

Next observe that since $f$ is compatible with the left $R$-action on $M\otimes_S N$, for every $r\in R$, $m\in M$, and $n\in N$ we have
$$g(rm,n)=f(rm\otimes n)=f(r\cdot (m\otimes n))=r\cdot f(m\otimes n)=r\cdot g(m,n).$$
So $g$ is compatible with the left $R$-action on $M\times N$. Similarly, $g(m,nt)=g(m,n)\cdot t$ for every $t\in T$, $m\in M$, and $n\in N$, and so $g$ is compatible with the right $T$-action on $M\times N$.

Finally, observe that for every $s\in S$, $m\in M$, and $n\in N$ we have
$$g(ms,n)=f(ms\otimes n)=f(m\otimes sn)=g(m,sn).$$
Thus, the map $g$ is $S$-balanced. We've thus verified that our map $g:M\times N\to P$ is indeed an $S$-balanced $(R,T)$-map.

Let's try the inverse direction. Suppose $g:M\times N\to P$ is an $S$-balanced bilinear $(R,T)$-map. By the universal property of the free ${\bf Z}$-module $F(U(M)\times U(N))$, and since $U(M\times N)\simeq U(M)\times U(N)$, we immediately have a corresponding ${\bf Z}$-module morphism $\tilde{g}:F(U(M)\times U(N))\to P$, which is really nothing more than the phrase "extend linearly" applied to $g$. Moreover, the generators for the subgroup $H$ all lie in the kernel of $\tilde{g}$, since $g$ is an $S$-balanced bilinear $(R,T)$-map. It follows that $\tilde{g}$ factors through the quotient $F(U(M)\times U(N))/H=M\otimes_S N$, and this is our desired $(R,T)$-bimodule morphism $f:M\otimes_S N\to P$.

## Categorical interpretation

For each $(R,T)$-bimodule $P$, let $F(P)$ denote the set of bilinear, $S$-balanced $(R,T)$-set maps $g:U_1(M)\times U_2(N)\to U_3(P)$, where the $U_i$ are the appropriate forgetful functors to $\textbf{Set}$. One can check that $F$ is the object function of a functor $F:(R,T)\textbf{-Bimod}\to \textbf{Set}$. The universal property above can then be viewed as a natural isomorphism $\operatorname{Hom}_{(R,T)}(M\otimes_S N,-)\simeq F$. In view of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Yoneda's Lemma\|Yoneda's Lemma]], this characterizes the bimodule $M\otimes_S N$ uniquely up to unique isomorphism.

# Additional properties of the tensor product

Our [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products III - Balanced Maps and a Universal Property of the Tensor Product#A universal property of tensor products\|universal property]] of the tensor product can be used to prove many properties, including many similar to basic properties of conventional multiplication, at least when commutative rings are involved. To that end, suppose $R$, $S$, and $T$ are commutative rings (with unity).

(Proofs will be added at some point, but for now we will simply state (and allow ourselves to use) each property.)
## Identity

>[!summary] Proposition
>Suppose $M$ is an $(R,S)$-bimodule. If we consider the ring $R$ with its usual $(R,R)$-bimodule structure, then there is a isomorphism of $(R,S)$-modules
>
>$$R\otimes_R M\xrightarrow{\sim} M,$$
>
>given specifically on simple tensors by $r\otimes m \mapsto rm$.

## Associativity

>[!summary] Proposition
>Suppose $M$, $N$, and $P$ are $(R,S)$-, $(S, T)$-, and $(T, U)$-bimodules, respectively. Then there is an isomorphism of $(R,U)$-bimodules
>
>$$(M\otimes_S N)\otimes_T P\xrightarrow{\sim} M\otimes_S (N\otimes_T P),$$
>
>given specifically on simple tensors by $(m\otimes n)\otimes p\mapsto m\otimes (n\otimes p)$.

## Symmetry

>[!summary] Proposition
>Suppose $M$ and $N$ are $R$-modules and we give them the standard $(R,R)$-bimodule structure. Then there is an $R$-module isomorphism
>
>$$M\otimes_R N\xrightarrow{\sim} N\otimes_R M,$$
>
>given specifically on simple tensors by $m\otimes n\mapsto n\otimes m$.

## Tensor product with a fraction field

The following fact can be occasionally useful:

>[!summary] Proposition
>Suppose $D$ is an integral domain with field of fractions $Q$. The tensor product $Q\otimes_D M$ is closely related to the torsion in the module $M$, in the following ways:
>1. f $j:M\to Q\otimes_D M$ is the morphism given by $m\mapsto 1_Q\otimes m$, then $\ker(j)=\operatorname{Tor}(M).$
>2. For any $D$-module $M$, the tensor product $Q\otimes_D M$ is zero if and only if $M$ is torsion.
>3. For any $D$-module $M$, we have an isomorphism of $D$-modules $Q\otimes_D M\simeq Q\otimes_D (M/\operatorname{Tor}(M))$.

# Tensor products of morphisms

Suppose $\phi:M_1\to M_2$ is an $(R,S)$-bimodule morphism and $\psi:N_1\to N_2$ is an $(S,T)$-bimodule morphism. We can define a map $\phi\otimes \psi:M_1\otimes_S N_1\to M_2\otimes_S N_2$ by
$$(\phi\otimes\psi)(m_1\otimes n_1)=\phi(m_1)\otimes \psi(n_1),$$
and then extending linearly to all tensors. One can check that this is well defined and an $(R,T)$-bimodule morphism.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products IV - The Adjoint Property\|Tensor Products IV - The Adjoint Property]]