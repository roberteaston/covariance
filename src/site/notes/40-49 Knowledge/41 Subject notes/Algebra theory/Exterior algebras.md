---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-subject-notes/algebra-theory/exterior-algebras/","tags":["algebra_theory"],"updated":"2024-07-21T19:27:44-07:00"}
---

## Motivation

Suppose $V$ is an $n$-dimensional $F$-vector space and $\mathcal{B}=\{v_1,\ldots, v_n\}$ is basis for $V$. Since $V$ is the free $F$-module on the set $\{v_1,\ldots, v_n\}$, each linear transformation $T:V\to V$ corresponds to a unique choice of vectors $w_1,\ldots, w_n\in V$, namely the images of each of the basis vectors $v_i$. Moreover, the determinant is a function that assigns to $T$ a single value $\det(T)\in F$. With the basis $\mathcal{B}$ fixed, this determinant can be viewed as a function
$$\det:V\times \cdots \times V\to F$$
that assigns to each $n$-tuple $(w_1,\ldots, w_n)$ the determinant of the corresponding linear transformation.

This determinant function is characterized by two nice properties:
- It is alternating: If we swap the positions of two of the vectors in the $n$-tuple, the determinant changes sign.
- It is multilinear: If we fix all but one vector in the $n$-tuple, the resulting function $V\to F$ is $F$-linear.
- It is 1 on the identity transformation.

One immediate consequence of the first property is that if $w_i=w_j$ for any distinct $i, j$ then the determinant of that $n$-tuple is zero. Combined with the second property, it follows that the determinant of an $n$-tuple $(w_1,\ldots, w_n)$ is zero whenever the vectors are linearly dependent.

This alternating multilinear function seems like something very close to the tensor algebra or symmetric algebra construction. Let's begin by looking for an analogue of the tensor algebra for which we have the additional property that $m\cdot m=0$ for all $m\in M$.

## The construction

>[!note] Definition of exterior algebra
>Let $R$ be a commutative ring (with unity) and $M$ be an $R$-module. The **exterior algebra** of $M$ is the $R$-algebra obtained by taking the quotient of the tensor algebra $\mathcal{T}(M)$ by the ideal $\mathcal{A}(M)$ generated by all elements of the form $m\otimes m$ for $m\in M$. The exterior algebra $\mathcal{T}(M)/\mathcal{A}(M)$ is denoted $\bigwedge (M)$ and the image of $m_1\otimes m_2\otimes \cdots \otimes m_k$ in $\bigwedge (M)$ is denoted $m_1\wedge m_2\wedge \cdots \wedge m_k$.

As with the symmetric algebra, the ideal $\mathcal{A}(M)$ is generated by homogenous elements and hence is a graded ideal. It follows that $\bigwedge (M)$ is a graded ring and the homogeneous component of degree $k$ is
$$\bigwedge^{k} (M)=\mathcal{T}^k(M)/\mathcal{A}^k(M).$$
This $R$-module is called the **$k^{\text{th}}$ exterior power** of $M$. Note that since $\mathcal{A}(M)$ is generated (as an ideal) by degree 2 homogenous elements, we have $\mathcal{A}^0(M)=\mathcal{A}^1 (M) = 0$ and hence have $\bigwedge^0(M)=R$ and $\bigwedge^1(M)=M$.

### The alternating property

The multiplication in $\bigwedge (M)$ is given by
$$(m_1\wedge \cdots \wedge m_i)\wedge (m_1'\wedge \cdots \wedge m_j')=m_1\wedge \cdots m_i\wedge m_1'\wedge \cdots \wedge m_j'.$$
This is called the **wedge** (or **exterior**) **product**.

This multiplication is alternating in the following sense. By construction, we have $m_1\wedge \cdots \wedge m_k = 0$ in $\bigwedge^k (M)$ whenever $m_i=m_{i+1}$ for any $i$. We claim that we then have anticommutativity for simple wedges; i.e., for every $m, m'\in M$ we have
$$m\wedge m'=-(m'\wedge m).$$
To see this, observe that by construction we have
$$(m+m')\wedge (m+m')=0.$$
Expanding out the left-hand side gives
$$(m\wedge m)+(m\wedge m')+(m'\wedge m)+(m'\wedge m')=0.$$
The first and last wedges are zero by construction. The claim thus follows.

>[!warning] Warning
>This anticommutativity does not extend to arbitrary products. For example,
>$$\begin{align*}
>m\wedge (n_1\wedge n_2)&=(m\wedge n_1)\wedge n_2\\
>&=-(n_1\wedge m)\wedge n_2\\
>&= - n_1\wedge (m\wedge n_2)\\
>&= n_1\wedge (n_2\wedge m)\\
>&=(n_1\wedge n_2)\wedge m.
>\end{align*}$$
>So $m$ and $n_1\wedge n_2$ commute.

## The universal property of the exterior algebra

As with the tensor algebra and symmetric algebra functors, there is a functor from the category of $R$-modules to the category of those $R$-algebras $A$ with the property $a^2=0$ for all $a\in A$.

>[!summary] (Primary) Universal property of the symmetric algebra
>Let $U:C\to R-\textbf{Mod}$ be the usual forgetful functor and let $(R-\textbf{Alg})_0$ be the category of $R$-algebras $A$ with the property that $a^2=0_A$ for every $a\in A$. Then there is a functor $\bigwedge:R-\textbf{Mod}\to (R-\textbf{Alg})_0$ and a natural bijection
>$$\tau_A:\operatorname{Hom}_{(R-\textbf{Alg})_0}\left(\bigwedge (M),A\right)\xrightarrow{\sim} \operatorname{Hom}_{R-\textbf{Mod}}(M,U(A)).$$

### Examples

1. Suppose $V$ is an $n$-dimensional vector space over a field $F$ with basis $\{v_1,\ldots, v_n\}$. When $0\leq k\leq n$, the set of vectors
   $$\{v_{i_1}\wedge \cdots \wedge v_{i_k}\mid 1\leq i_1<\cdots < i_k\leq n\}$$
   is a basis for $\bigwedge^k (V)$. When $k>n$ the $R$-module $\bigwedge^k (V)$ is trivial.
   
   This same statement is true more generally when $R$ is a commutative ring and $M$ is a free $R$-module of rank $n$.

{ #51701e}

2. Continuing the previous example, suppose $\phi:V\to V$ is any linear endomorphism of $V$. For every $k$ we then have an $F$-linear transformation
   $$\bigwedge^k (\phi):\bigwedge^k(V)\to \bigwedge^k(V).$$
   When $k=n$, the $F$-vector space $\bigwedge^n (V)$ is one-dimensional with basis vector $v_1\wedge v_2\wedge \cdots \wedge v_n$ and
   $$\bigwedge^n(\phi)(v_1\wedge \cdots \wedge v_n)=\phi(v_1)\wedge \cdots \phi(v_n) = D(\phi)\cdot (v_1\wedge \cdots v_n)$$
   for some scalar $D(\phi)\in F$. One can verify that this function $D$ satisfies the three axioms for a determinant function and hence $D(\phi)=\det(\phi)$.