---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/tensor-products-of-modules/tensor-products-iv-the-adjoint-property/","tags":["module_theory"],"updated":"2025-10-24T08:45:38-07:00"}
---

You might be wondering if there is a way to avoid inventing these new objects (the $(R,T)$-sets) together with the extremely specific notion of balanced bilinear maps between such objects. The answer is yes, through the following result:

>[!summary] Alternate (better?) universal property of the tensor product
>Suppose $M$ is an $(R,S)$-bimodule and $N$ is an $(S, T)$-bimodule. Then there is a natural bijection for every $(R,T)$-bimodule $P$
>$$\tau_P:\operatorname{Hom}_{(R,T)\text{-{\bf Bimod}}}(M\otimes_S N,P)\xrightarrow{\sim} \operatorname{Hom}_{(R,S)\text{-{\bf Bimod}}}(M,\operatorname{Hom}_{\text{{\bf Mod}-}T}(N,P)).$$
{ #4dc916}


Let's investigate this bijection. First suppose $f:M\otimes_S N\to P$ is an $(R,T)$-bimodule morphism. By the original universal property of the tensor product, this corresponds uniquely to an $S$-balanced bilinear $(R,T)$-map $g:M\times N\to P$ with $g(m,n)= f(m\otimes n)$. We will now produce an $(R,S)$-bimodule morphism $h:M\to \operatorname{Hom}_T(N,P)$. For each $m\in M,$ consider the map $h_m:N\to P$ defined by $h_m(n)=g(m,n).$ The linearity of $g$ in the second factor implies $h_m$ is additive; the compatibility of $g$ with the right $T$-actions on $N$ and $P$ implies $h_m$ is a right $T$-module morphism. We can therefore define $h(m)=h_m$. In terms of the original morphism $f$, we have $h_m=f(m\otimes -)$.

Why is $h$ an $(R,S)$-bimodule morphism? The additivity of $h$ follows from the linearity of $g$ in the first factor:
$$\begin{align*}
h(m_1+m_2)&=h_{m_1+m_2}\\
&=g(m_1+m_2,-)\\
&=g(m_1,-)+g(m_2,-)\\
&=h_{m_1}+h_{m_2}\\
&=h(m_1)+h(m_2).
\end{align*}$$
Here we've used a dash ($-$) to indicate where the input (from $N$) would go. This is to minimize the number of parentheses involved, so that we don't have to write awkward things like $h(m)(n)$.

Before we check the compatibilities with the ring actions, [[40-49 Knowledge/41 Mathematics/Module theory/Bimodules/Bimodule morphisms#More than just hom-sets\|recall]] how the abelian group $\operatorname{Hom}_T(N,P)$ was given the structure of an $(R,S$)-bimodule: the left $R$-action arose from the left $R$-action on $P$, while the right $S$-action arose from the left $S$-action on $N$. In terms of elements, if $f:N\to P$ is morphism of right $T$-modules, then for each $r\in R$ we defined the map $r\cdot f$ by
$$(r\cdot f)(n)=r\cdot f(n),$$
while for each $s\in S$ we defined $f\cdot s$ by
$$(f\cdot s)(n)=f(sn).$$
We now return to our situation. To see that $h$ is compatible with the left $R$-action, observe that
$$\begin{align*}
r\cdot h(m) &= r\cdot h_m\\
&= r\cdot f(m\otimes -)\\
&= f(r\cdot (m\otimes -))\\
&= f(rm\otimes -)\\
&= h_{rm}\\
&= h(rm).
\end{align*}$$

To see that $h$ is compatible with the right $S$-action, observe that
$$\begin{align*}
h(m)\cdot s&= h_m\cdot s\\
&= h_m(s\cdot -)\\
&= f(m\otimes (s\cdot -))\\
&= f(ms\otimes -)\\
&=h_{ms}\\
&= h(ms)
\end{align*}$$
We've finally verified that our map $h:M\to\operatorname{Hom}_T(N,P)$ really is an $(R,S)$-bimodule morphism. This association $f\mapsto h$ is our set map
$$\tau_P:\operatorname{Hom}_{(R,T)}(M\otimes_S N,P)\to\operatorname{Hom}_{(R,S)}(M,\operatorname{Hom}_T(N,P)).$$
We have not yet shown that $\tau_P$ is natural (in $P$), nor that it is bijective. We'll leave verifying naturality as [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/A universal property of tensor products\|an exercise]], but we will verify $\tau_P$ is a bijection by constructing the inverse map.

To that end, suppose $h:M\to\operatorname{Hom}_T(N,P)$ is an $(R,S)$-bimodule morphism. As above, for each $m\in M$ let's write $h_m$ for $h(m)$, to cut down on parentheses. Define a set map $g:M\times N\to P$ by $g(m,n)=h_m(n).$ This set map is linear in $M$ because $h$ is additive:
$$g(m_1+m_2,-)=h(m_1+m_2)=h(m_1)+h(m_2)=g(m_1,-)+g(m_2,-).$$
It is linear in $N$ because each $h_m$ is additive:
$$g(m,n_1+n_2)=h_m(n_1+n_2)=h_m(n_1)+h_m(n_2)=g(m,n_1)+g(m,n_2).$$
To see $g$ is $S$-balanced, first note that $g(ms,-)=h(ms)=h(m)\cdot s=h_m\cdot s$, and so
$$g(ms,n)=(h_m\cdot s)(n)=h_m(sn)=g(m,sn).$$
It is compatible with the left $R$-actions:
$$g(rm,n)=h_{rm}(n)=(r\cdot h_m)(n)=r\cdot h_m(n)=r\cdot g(m,n).$$
And it is compatible with the right $T$-actions:
$$g(m,nt)=h_m(nt)=h_m(n)\cdot t=g(m,n)\cdot t.$$
It now follows from the original universal property of the tensor product that the corresponding map $f:M\otimes_S N\to P$ defined on simple tensors by $f(m\otimes n)=g(m,n)$ is an $(R,T)$-bimodule morphism. This association $h\mapsto f$ is our set map
$$\eta_P:\operatorname{Hom}_{(R,S)\text{-{\bf Bimod}}}(M,\operatorname{Hom}_{\text{{\bf Mod}-}T}(N,P))\to\operatorname{Hom}_{(R,T)\text{-{\bf Bimod}}}(M\otimes_S N,P).$$
From our explicit constructions one can verify that the set maps $\tau_P$ and $\eta_P$ are mutual inverses, and hence both are bijections.

## An immediate consequence
---

 Now that we know the tensor product functor $M\otimes_S -$ is a [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products III - Balanced Maps and a Universal Property of the Tensor Product#^4dc916\|left adjoint]], we also know it [[40-49 Knowledge/41 Mathematics/Category theory/Adjoints/Properties of adjoints#^6063ae\|commutes with all colimits]], such as direct sums.

>[!summary] The tensor product commutes with direct sums
>Suppose $M$ is an $(R,S)$-bimodule and $\{N_x\}_{x\in X}$ is a family of $(S,T)$-bimodules. Then there is a unique isomorphism of $(R,T)$-bimodules
$$M\otimes_S \left(\bigoplus_{x\in X} N_x\right)\simeq \bigoplus_{x\in X} \left(M\otimes_S N_i\right)$$
{ #690b7a}


The analogous result is true with the positions of the tensor product and direct sum exchanged, i.e., right-tensoring distributes across direct sums. Because of this, we say that **tensor product commutes with direct sums**. (As finite direct products are isomorphic to the corresponding direct sums, this also implies that tensor product commutes with finite direct products.)

### Extending scalars on free modules

A special case of the above property is that "extending scalars" commutes with the free module construction. More precisely:

>[!summary] Corollary
>Suppose $R\subseteq S$ are rings and $R^n=R\oplus\cdots \oplus R$ is the free module on a set of size $n$. 
>Then there is an $S$-module isomorphism
>
>$$S\otimes_R R^n \simeq S^n.$$
>

Indeed, observe that
$$\begin{align*}
S\otimes_R R^n&\simeq S\otimes_R \left(R\oplus \cdots \oplus R\right)\\
&\simeq (S\otimes_R R)\oplus\cdots (S\otimes_R R)\\
&\simeq S\oplus\cdots S\\
&\simeq S^n
\end{align*}$$

### Tensor products of free modules

Another consequence of the above property is that the tensor product of two free $R$-modules is again a free $R$-module. More precisely:

>[!summary] Corollary
>Suppose $M\simeq R^a$ and $N\simeq R^b$ are free $R$-modules of ranks $a$ and $b$, respectively. We then have an $R$-module isomorphism
>
> $$M\otimes_R N\simeq R^{ab}.$$
> 
> Furthermore, if $\{m_1,\ldots, m_a\}$ and $\{n_1,\ldots, n_b\}$ are bases for $M$ and $N$ as free $R$-modules, respectively, then a basis for $M\otimes_R N$ as a free $R$-module is $\{m_i\otimes n_j\mid 1\leq i\leq a,\quad 1\leq j\leq b\}$.

The statement about bases follows from our explicit isomorphism (involving tensor products of direct sums) above.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Algebra theory/Tensor algebras\|Tensor algebras]]
[[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Diagram lemmas\|Diagram lemmas]]