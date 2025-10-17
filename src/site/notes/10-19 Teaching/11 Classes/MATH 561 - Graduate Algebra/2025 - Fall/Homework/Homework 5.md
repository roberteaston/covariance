---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/homework/homework-5/","updated":"2025-10-13T06:44:23-07:00"}
---

## Problem 1
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Show that ${\bf C}\otimes_{\bf R}{\bf C}$ and ${\bf C}\otimes_{\bf C}{\bf C}$ are not isomorphic as ${\bf R}$-modules.

*Note:* Our notation is intentionally a bit sloppy here, since this is how you'll often see statements like this written. For clarity, we note that:
- In the first tensor product, the copy of ${\bf C}$ on the right is the ${\bf R}$-module (i.e., $({\bf R},{\bf Z})$-bimodule) of complex numbers (i.e., the additive group of complex numbers along with scaling by real numbers), while the ${\bf C}$ on the left is $({\bf C},{\bf R})$-bimodule of complex numbers. The resulting tensor product is therefore a $({\bf C},{\bf Z})$-bimodule, which by "restriction of scalars" we can also view as an $({\bf R},{\bf Z})$-bimodule, i.e., an ${\bf R}$-module.
- In the second tensor product, the copy of ${\bf C}$ on the right is the ${\bf C}$-module (i.e., $({\bf C},{\bf Z})$-bimodule) of complex numbers (i.e., the ring of complex numbers), while the ${\bf C}$ on the left is the ring of complex numbers with the standard $({\bf C},{\bf C})$-bimodule structure. The resulting tensor product is therefore a $({\bf C},{\bf Z})$-bimodule, which by "restriction of scalars" we can also view as an $({\bf R},{\bf Z})$-bimodule, i.e., an ${\bf R}$-module.
Your argument will prove that the two constructions are also not isomorphic as ${\bf C}$-modules.

>[!summary]- Hints
>You often hear the complex numbers described as "two-dimensional as a real vector space." For us, this means that the ${\bf R}$-module ${\bf C}$ is isomorphic to the free ${\bf R}$-module on a two-element set, the latter of which is isomorphic as an ${\bf R}$-module to ${\bf R}\oplus {\bf R}\simeq {\bf R}^2$.
>
>With that in mind, show ${\bf  C}\otimes_{\bf R}{\bf C}$ is isomorphic as an ${\bf R}$-module to ${\bf R}^4$. What can you say about ${\bf C}\otimes_{\bf C}{\bf C}$ as a ${\bf C}$-module, and as an ${\bf R}$-module? (Remember that ${\bf R}$-modules are just real vector spaces!)

</div></div>



## Problem 2
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $D$ is an integral domain with quotient field^["Quotient field" is another term for "field of fractions."] $Q$ and $M$ is a left $D$-module. Prove that every element of $Q\otimes_D M$ can be written as a simple tensor of the form $\frac{1}{d}\otimes m$ for some nonzero $d\in D$ and $m\in M$.

>[!summary]- Hints
>Try first showing the result for simple tensors $q\otimes m$, and then extend the result to handle general tensors $\sum q_i\otimes m_i$.

</div></div>



## Problem 3
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $\{e_1,e_2\}$ be a basis for ${\bf R}^2$ as an ${\bf R}$-vector space. Show that the element $e_1\otimes e_2+e_2\otimes e_1$ in ${\bf R}^2\otimes_{\bf R}{\bf R}^2$ cannot be written as a simple tensor $v\otimes w$ for any $v, w\in {\bf R}^2$.

>[!summary]- Hints
>A basis for ${\bf R}^2\otimes_{\bf R}{\bf R}^2$ as an ${\bf R}$-module (i.e., ${\bf R}$-vector space) is $\{e_1\otimes e_1, e_1\otimes e_2, e_2\otimes e_1, e_2\otimes e_2\}$. Try expressing each simple tensor $v\otimes m$ in ${\bf R}^2\otimes_{\bf R} {\bf R}^2$ in terms of this basis. Use ${\bf R}$-linear independence of your basis to eventually arrive at a contradiction.

</div></div>


## Problem 4
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Give an example to show that tensor product does not commute with direct products.

>[!summary]- Hints
>Consider the extension of scalars from ${\bf Z}$ to ${\bf Q}$ of the direct product of the ${\bf Z}$-modules $M_i={\bf Z}_{2^i}$ for $i=1, 2,\ldots$. Show that ${\bf Q}\otimes_{\bf Z}M_i=0$ for each $i$, but that $\displaystyle {\bf Q}\otimes_{\bf Z}\prod_{i=1}^{\infty} M_i$ is nonzero. For this last part, use the [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products III - Balanced Maps and a Universal Property of the Tensor Product#Tensor product with a fraction field\|helpful property]] that relates the torsion of a $D$-module $M$ to the $Q$-module $Q\otimes_D M$, whenever $Q$ is the field of fractions of an integral domain $D$. 

</div></div>


## Problem 5
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/tensor-product-of-rings-is-a-coproduct/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ and $S$ are commutative rings (with unity). We can form their tensor product $R\otimes S$ in the category of commutative rings as follows. First, as abelian groups (i.e., $({\bf Z},{\bf Z})$-bimodule) we can form the tensor product $R\otimes_{\bf Z} S$, which we simply denote $R\otimes S$. We can then define a multiplication in $R\otimes S$ is "component-wise", i.e., $(r_1\otimes s_1)\cdot (r_2\otimes s_2)=(r_1r_2)\otimes (s_1s_2)$. This operation gives $R\otimes S$ the structure of a commutative ring (with unity $1_R\otimes 1_S$).

Define $i_1:R\to R\otimes S$ by $r\mapsto r\otimes 1_S$, and $i_2:S\to R\otimes S$ by $s\mapsto 1_R\otimes s$.
1. Verify $i_1$ and $i_2$ are ring morphisms.
2. Show that the ring $R\otimes S$ together with these ring morphisms is a coproduct of $R$ and $S$ in the category of commutative rings.

</div></div>


## Problem 6
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Show that for each $(R,S)$-bimodule $M$ and $(R',S)$-bimodule $N$, the set $\operatorname{Hom}_S(M,N)$ of right $S$-module morphisms between $M$ and $N$ (viewed as right $S$-modules) has the structure of a $(R',R)$-bimodule.

>[!note]- Notes
>You take can as given that the set $\operatorname{Hom}_S(M,N)$ is an abelian group, with operation defined by $(f+g)(n)=f(n)+g(n)$.
>
>For the bimodule structure, rather than getting buried in all of the tiny details, focus on describing:
>- The left action of $R'$ on $\operatorname{Hom}_S(M,N)$:
>	- What is the definition of $r'\cdot f$?
>	- Does this appear to actually define a  *left action* of $R'$ on $\operatorname{Hom}_S(M,N)$? (Verify at least one of the required properties is true; e.g., show $r'\cdot (f+g)=r'\cdot f+r'\cdot g$.)
>- The right action of $R$ on $\operatorname{Hom}_S(M,N)$
>	- What is the definition of $f\cdot r$?
>	- Does this also appear to actually define a *right action* of $R$ on $\operatorname{Hom}_S(M,N)$? (Again, verify at least one of the required properties is true.)
>- Do these two actions verify the one [[40-49 Knowledge/41 Mathematics/Module theory/Bimodules/Bimodules#^669e77\|required compatibility]] to give $\operatorname{Hom}_S(M,N)$ the structure of an $(R',R)$-bimodule?


</div></div>



## Problem 7
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R, S$, and $T$ are rings (with unity), $M$ is an $(R,S)$-bimodule and $N$ is an $(S,T)$-bimodule.
1. Define functors $F,G:(R,T)\text{-{\bf Bimod}}\to {\bf Set}$ such that on objects
   $\begin{align*}
   F(P)&=\operatorname{Hom}_{(R,T)\text{-{\bf Bimod}}}(M\otimes_S N,P)\\
   G(P)&=\operatorname{Hom}_{(R,S)\text{-{\bf Bimod}}}(M,\operatorname{Hom}_{\text{{\bf Mod}-}T}(N,P)).
   \end{align*}$
   In other words, what are the maps on arrows?
2. For every $(R,T)$-bimodule $P$ there is a set bijection
   $\tau_P:\operatorname{Hom}_{(R,T)\text{-{\bf Bimod}}}(M\otimes_S N,P)\xrightarrow{\sim} \operatorname{Hom}_{(R,S)\text{-{\bf Bimod}}}(M,\operatorname{Hom}_{\text{{\bf Mod}-}T}(N,P)).$
   See [[40-49 Knowledge/41 Mathematics/Module theory/Tensor products of modules/Tensor Products IV - The Adjoint Property\|these notes]] for the explicit description of the set map $\tau_P$, as well as the verification that $\tau_P$ is a bijection. In short, for each $(R,T)$-bimodule morphism $f:M\otimes_S N\to P$, $\tau_P(f)$ is the $(R,S)$-bimodule morphism $\tau_P(f):M\to \operatorname{Hom}_{\text{{\bf Mod}-}T}(N,P)$ that assigns to each $m\in M$ the right $T$-module morphism $n\mapsto f(m\otimes n)$.
   
   Show that these bijections $\tau_p$ define a natural transformation $\tau:F\Rightarrow G$. Since every $\tau_P$ is a bijection, we call $\tau$ a **natural isomorphism** between the functors $F$ and $G$.

</div></div>
