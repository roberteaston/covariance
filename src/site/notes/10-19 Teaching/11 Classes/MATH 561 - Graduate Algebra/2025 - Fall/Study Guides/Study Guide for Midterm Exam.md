---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/study-guides/study-guide-for-midterm-exam/","updated":"2025-11-18T14:21:45-08:00"}
---

The midterm exam problems will be very similar to some of the problems listed below. The exam will consist of approximately five such problems.

# Module Theory

## Problem 1


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $R$ be a commutative ring (with unity). We have shown that for every $R$-module $M$ there is an $R$-module isomorphism $\operatorname{Hom}_{R\text{-{\bf Mod}}}(R,M)\simeq M$. Now show more generally that for each fixed positive integer $n$ there is also an $R$-module isomorphism

$\operatorname{Hom}_{R\text{-{\bf Mod}}}\left(\bigoplus_{i=1}^n R, M\right)\simeq \bigoplus_{i=1}^n M.$

</div></div>


---

## Problem 2


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $R$ be a commutative ring (with unity), $X$ a finite set and $F(X)$ the free $R$-module on $X$. Prove there is an $R$-module isomorphism

$\operatorname{Hom}_{R\text{-{\bf Mod}}}(F(X),R)\simeq F(X).$

</div></div>



---

## Problem 3



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $f:N\to P$ is a $(S,T)$-bimodule morphism.
1. Show that for every $(R,S)$-bimodule $M$ there is an $(R,T)$-bimodule morphism
   $1_M\otimes f:M\otimes_S N\to M\otimes_S P,$
   defined on simple tensors by $m\otimes n\mapsto m\otimes f(n)$.

2. Prove that if $f$ is surjective, then so is $1_M\otimes f$.

3. Show there are isomorphisms of abelian groups ${\bf Z}_2\otimes_{\bf Z}{\bf Z} \simeq {\bf Z}_2$ and ${\bf Z}_2\otimes_{\bf Z}{\bf Q} \simeq 0$, and then explain why this proves tensor product does not in general preserve injections.

</div></div>


---

## Problem 4


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $M_1$ and $M_2$ be $R$-modules and $A_1\subseteq M_1$ and $A_2\subseteq M_2$ be submodules. Prove that $A_1\times A_2$ is (isomorphic to) a submodule of $M_1\times M_2$ and that there is an $R$-module isomorphism
$(M_1\times M_2)/(A_1\times A_2)\simeq (M_1/A_1)\times (M_2/A_2).$

</div></div>


---

## Problem 5


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $V$ be a finite-dimensional vector space over a field $k$ and let $v, w\in V$ be nonzero vectors. Prove that $v\otimes w=w\otimes v$ in $V\otimes_k V$ if and only if $w=av$ for some $a\in k$.

>[!summary]- Hints
>First prove the following lemma: If $\{e_1,\ldots, e_n\}$ is a basis for $V$ as a $k$-vector space, then every element of $V\otimes_k V$ can be written uniquely in the form $\displaystyle \sum_{i=1}^n v_i\otimes e_i$ where $v_i\in V$.
>
>Then suppose $v=c_1e_1+\cdots +c_ne_n$ and $w=d_1e_1+\cdots+d_ne_n$. Under the assumption $v\otimes w=w\otimes v$, use the above lemma to prove that $d_iv=c_iw$ for every $i$.
>
>Note: If necessary, you may use the fact that $\{e_i\otimes e_j\mid 1\leq i,j\leq n\}$ is a $k$-vector space basis for $V\otimes_k V$.

</div></div>


# Category Theory Problems

## Problem 6


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let  $F,G:C\to \textbf{Set}$ be functors and $\tau:F\Rightarrow G$ be a natural transformation between those functors. We say $\tau$ is:
- a **natural bijection** if for every $c\in C$ the set map $\tau_c:F(c)\to G(c)$ is a bijection;
- a **natural isomorphism** if there is a natural transformation $\eta:G\Rightarrow F$ such that $\eta\circ \tau=1_F$ and $\tau\circ \eta=1_G$.

Prove that $\tau$ is a natural bijection if and only if it is a natural isomorphism.

</div></div>


---

## Problem 7


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $C$ is a category that has pullbacks and a terminal object.
1. Prove that $C$ has all (binary) products.
2. Prove that $C$ has all equalizers.

> [!summary]- Hints
> 1. Let $t\in C$ be a terminal object (which is unique up to unique isomorphism). Show that for every pair of objects $a,b$ in $C$, the pullback $a\times_t b$ satisfies the universal property of the product $a\times b$.
> 2. Show that the equalizer of a pair of arrows $f,g:a\to b$ may be constructed as the pullback of $a\xrightarrow{(1_a,f)} a\times b\xleftarrow{(1_a,g)} a$.

</div></div>


---

## Problem 8


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $C$ is a category that has all equalizers.
1. The map that assigns to each pair of parallel arrows $f,g:a\to b$ the equalizer object $\operatorname{Eq}(f,g)$ is the object function of a functor to $C$. What is the domain of that functor, and what is the arrow function of that functor?
2. The equalizer functor above is right adjoint to a certain diagonal (or constant) functor from $C$. Describe:
   - a) the other functor;
   - b) the natural bijection of the adjunction; and
   - c) the unit and counit of the adjunction.

</div></div>


## Problem 9


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




To each category $C$ we can associate an **opposite** category $C^{\text{op}}$. The objects of $C^{\text{op}}$ are the objects of $C$, and the arrows of $C^{\text{op}}$ are arrows $f^{\text{op}}$ in one-to-one correspondence $f\mapsto f^{\text{op}}$ with the arrows $f$ of $C$. For each arrow $f:a\to b$ in $C$, the corresponding arrow is $f^{\text{op}}:b\to a$ in $C^{\text{op}}$.
1. Suppose $F:C\to D$ is a functor. Show that the maps $c\mapsto F(c)$ and $f^{\text{op}}\mapsto (F(f))^{\text{op}}$ together define a functor $F^{\text{op}}:C^{\text{op}}\to D^{\text{op}}$.
2. Consider a functor $F:C^{\text{op}}\to D$. If we write $\overline{F}(f)$ for $F(f^{\text{op}})$, show how the functor $F$ can be expressed directly in terms of the original category $C$ as maps (both denoted $\overline{F}$) on objects and arrows in $C$. How does $\overline{F}$ interact with composition of arrows?
   
   Such maps are sometimes called **contravariant functors** from $C$ to $D$, in which case our usual functors are called **covariant functors**.
3. For each fixed object $b$ in a category $C$, show how to define a functor
   
   $\operatorname{Hom}_C(-,b):C^{\text{op}}\to {\bf Set}.$
   
   This functor is sometimes called the **contravariant hom-functor** (associated to the object $b$).

</div></div>


---

## Problem 10


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $C$ is a category, $F:C\to \textbf{Set}$ is a functor and $r\in C$ is an object of $C$, and let $H_r=\operatorname{Hom}_C(r,-)$ be the hom-out functor associated to the object $r$. Each natural isomorphism $\alpha:H_r\xrightarrow{\sim} F$ is called a **representation** of the functor $F$ and a **universal property** for the object $r$.

Suppose $\alpha:H_r\xrightarrow{\sim} F$ and $\beta:H_s\xrightarrow{\sim} F$ are two natural isomorphisms.
1. Show there is a unique arrow $f:r\to s$ in $C$ such that $\beta = \alpha\circ H(f)$.^[This is if we're considering $H$ as a contravariant functor from $C$ to $\textbf{Set}^C$. If we're considering $H$ as a functor from $C^{\text{op}}$ to $\textbf{Set}$, then this should be $H(f^{\text{op}})$.]
2. Show that the unique arrow $f$ in part (a) is an isomorphism; i.e., there is an arrow $g:s\to r$ in $C$ such that $g\circ f=1_r$ and $f\circ g=1_s$.

Because of this result, we say that "representations of functors are unique up to unique isomorphism," and also "objects that satisfy a universal property are unique up to unique isomorphism."

>[!summary]- Hints
>For the first part, to show the existence first consider the natural isomorphism $\alpha^{-1}\circ \beta:H_s\xrightarrow{\sim} H_r.$ By Yoneda's Lemma, this corresponds to a unique element of the set $H_s(r)=\operatorname{Hom}_C(r,s)$; i.e., a unique arrow $f:r\to s.$ Under this correspondence, the natural transformation $\alpha^{-1}\circ \beta$ is $H(f)$, the "precompose with f" natural transformation. Uniqueness follows by a similar argument, since $H(f)$ is uniquely determined by the factorization $\beta=\alpha\circ H(f)$.
>
>For the second part of the problem, switch the roles of $r$ and $s$ to show there is a unique arrow $g:s\to r$ such that $\alpha=\beta\circ H(g)$. But then $H(g)\circ H(f)$ is the identity natural transformation from $H_s$ to itself, and $H(f)\circ H(g)$ is the identity natural transformation from $H_r$ to itself. Yoneda's Lemma then guarantees that these most correspond to the identity arrows on $s$ and $r$, respectively ...



</div></div>
