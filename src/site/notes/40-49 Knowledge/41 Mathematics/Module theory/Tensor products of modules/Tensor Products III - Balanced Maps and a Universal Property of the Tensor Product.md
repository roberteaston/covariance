---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/tensor-products-of-modules/tensor-products-iii-balanced-maps-and-a-universal-property-of-the-tensor-product/","tags":["module_theory"],"updated":"2024-10-15T10:28:33-07:00"}
---

# Balanced maps

Before we state the universal property of our tensor product construction, we first need to talk about a new class of map between bimodules.

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

# Avoiding balanced maps

You might be wondering if there is a way to avoid inventing these new objects (the $(R,T)$-sets) together with the extremely specific notion of balanced bilinear maps between such objects. The answer is yes, through the following result:

>[!summary] Alternate (better?) universal property of the tensor product
>Suppose $M$ is an $(R,S)$-bimodule and $N$ is an $(S, T)$-bimodule. Then there is a natural bijection for every $(R,T)$-bimodule $P$
>$$\tau_P:\operatorname{Hom}_{(R,T)}(M\otimes_S N,P)\xrightarrow{\sim} \operatorname{Hom}_{(R,S)}(M,\operatorname{Hom}_T(N,P)).$$
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

Before we check the compatibilities with the ring actions, [[40-49 Knowledge/41 Mathematics/Module theory/Bimodules/Bimodules#Other maps between bimodules\|recall]] how the abelian group $\operatorname{Hom}_T(N,P)$ was given the structure of an $(R,S$)-bimodule: the left $R$-action arose from the left $R$-action on $P$, while the right $S$-action arose from the left $S$-action on $N$. In terms of elements, if $f:N\to P$ is morphism of right $T$-modules, then for each $r\in R$ we defined the map $r\cdot f$ by
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
We have not yet shown that $\tau_P$ is natural (in $P$), nor that it is bijective. We'll leave verifying naturality as [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/The universal property of tensor products\|an exercise]], but we will verify $\tau_P$ is a bijection by constructing the inverse map.

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
$$\eta_P:\operatorname{Hom}_{(R,S)}(M,\operatorname{Hom}_T(N,P))\to\operatorname{Hom}_{(R,T)}(M\otimes_S N,P).$$
From our explicit constructions one can verify that the set maps $\tau_P$ and $\eta_P$ are mutual inverses, and hence both are bijections.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products IV - Additional Properties\|Tensor Products IV - Additional Properties]]