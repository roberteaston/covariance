---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/algebra-theory/symmetric-algebras/","tags":["algebra_theory"],"updated":"2024-07-21T19:37:32-07:00"}
---

## Motivation

The tensor algebra construction created, from each $R$-module $M$, a "minimal" $R$-algebra $\mathcal{T}(M)$. In other words, beginning from the additive operation in $M$ and the $R$-scaling on $M$, it created a structure that also had an internal multiplication (compatible with those structures). The [[40-49 Knowledge/41 Mathematics/Algebra theory/Tensor algebras#The desired universal property\|universal property]] formally encoded the "minimality" of the construction, in that all $R$-module morphisms from $M$ to $R$-algebras $A$ "lifted" to $R$-algebra morphisms from $\mathcal{T}(M).$ There were no additional properties imposed on $\mathcal{T}(M)$ other than those required to have an $R$-algebra. In particular, the $R$-algebra $\mathcal{T}(M)$ was not guaranteed to be commutative (and rarely ever is).

Can we modify our construction so that the $R$-algebra we obtain is also commutative?

## The desired universal property

As with the tensor algebra functor, there is a functor from the category of $R$-modules to the category of commutative $R$-algebras. It is analogous to any free construction and the tensor algebra construction, in that it is left adjoint to a forgetful functor:

>[!summary] (Primary) Universal property of the symmetric algebra
>Let $U:R-\textbf{CAlg}\to R-\textbf{Mod}$ be the forgetful functor from the category of commutative $R$-algebras to the category of $R$-modules. Then there is a functor $\mathcal{S}:R-\textbf{Mod}\to R-\textbf{CAlg}$ together with a natural bijection
>$$\operatorname{Hom}_{R-\textbf{CAlg}}(\mathcal{S}(M),A)\xrightarrow{\sim} \operatorname{Hom}_{R-\textbf{Mod}}(M,U(A)).$$
>In other words, the functor $\mathcal{S}$ is a left adjoint of the forgetful functor $U$.

As with any object satisfying a universal property, we can now deduce many properties of $\mathcal{S}(M)$:
- It is a commutative $R$-algebra we can associate to the $R$-module $M$;
- The construction is functorial, so that if $f:M\to N$ is an $R$-module morphism then there is a corresponding $R$-algebra morphism $\mathcal{S}f:\mathcal{S}(M)\to \mathcal{S}(N)$;
- $R$-algebra morphisms to commutative $R$-algebras $\mathcal{S}(M)\to A$ are in natural bijection with $R$-module morphisms $M\to U(A)$. As a special case:
	- The identity $R$-algebra morphism $\mathcal{S}(M)\to \mathcal{S}(M)$ corresponds to an $R$-module morphism $M\to U(\mathcal{S}(M))$.
- Since $\mathcal{S}$ is a left adjoint it commutes with all colimits; in particular, it commutes with coproducts.
## The construction

We already have a construction that takes an $R$-module $M$ and creates an $R$-algebra $\mathcal{T}(M)$ with most of the properties we want. To obtain a commutative $R$-algebra, then, it's reasonable to consider a quotient of $\mathcal{T}(M)$ that forces a commutativity relation in the quotient ring.

>[!note] Definition of symmetric algebra
>Suppose $R$ is a commutative ring (with unity) and $M$ is an $R$-module. Let $\mathcal{C}(M)\subseteq \mathcal{T}(M)$ be the ideal generated by elements of the form $m_1\otimes m_2-m_2\otimes m_1$ for $m_1, m_2\in M$. The symmetric algebra of $M$ is quotient
>$$\mathcal{S}(M)=\mathcal{T}(M)/\mathcal{C}(M).$$

Some notes are in order. First, the ideal $\mathcal{C}(M)$ is generated by homogeneous elements of degree 2, which implies $\mathcal{C}(M)$ is a graded ideal (with degree $k$ the submodule denoted $\mathcal{C}^k(M)$) and the quotient ring $\mathcal{S}(M)$ is a graded ring. The homogeneous component of degree $k$ is
$$\mathcal{S}^k(M)=\mathcal{T}^k(M)/\mathcal{C}^k(M).$$
This $R$-module is called the **$k^{\text{th}}$ symmetric power** of $M$. One can show that the submodule $\mathcal{C}^k(M)$ is generated by all elements of the form
$$(m_1\otimes m_2\otimes \cdots \otimes m_k)-(m_{\sigma(1)}\otimes m_{\sigma(2)}\otimes \cdots \otimes m_{\sigma(k)},$$
where $m_i\in M$ and $\sigma\in S_k$.

Note that since $\mathcal{C}(M)$ is generated (as an ideal) by degree 2 homogenous elements, we have $\mathcal{C}^0(M)=\mathcal{C}^1 (M) = 0$ and hence have $\mathcal{S}^0(M)=R$ and $\mathcal{S}^1(M)=M$.

>[!info] Optional notation
>It is common to drop the tensor symbol between elements when working in $\mathcal{S}(M)$; e.g., to write simply $m_1m_2$ rather than $m_1\otimes m_2+\mathcal{C}(M)$ for the image in $\mathcal{S}(M)$ of the element $m_1\otimes m_2\in \mathcal{T}(M)$.
### Examples

1. Let $V$ be an $n$-dimensional vector space over a field $F$. Then $\mathcal{S}(V)$ is isomorphic as a graded $F$-algebra to $F[x_1,\ldots, x_n]$. If $\mathcal{B}=\{v_1,\ldots, v_n\}$ is a basis for $V$ as an $F$-vector space, then a basis for $\mathcal{S}^k(V)$ is
   $$\{v_1^{a_1} v_2^{a_2}\cdots v_n^{a_n}\mid a_i\geq 0,\; a_1+a_2+\cdots+a_n=k\}.$$
   In particular, the dimension of the $F$-vector space $\mathcal{S}^k(V)$ is $\binom{n+k-1}{n-1}$.