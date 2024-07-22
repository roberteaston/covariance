---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/ring-theory/graded-rings/","tags":["ring_theory"],"updated":"2024-03-06T13:58:27-08:00"}
---

## Graded rings, morphisms and ideals

>[!note] Definition of graded ring
>A ring $S$ is called a **graded ring** if it is the direct sum of additive subgroups:
>$$S=S_0\oplus S_1\oplus S_2\oplus \cdots$$
>such that $S_iS_j\subseteq S_{i+j}$ for all $i,j\geq 0$.
>
>The elements of $S_k$ are said to be **homogeneous of degree $k$**, and $S_k$ is called the **homogeneous component of $S$ of degree $k$**.

>[!note] Definition of morphism of graded rings
>Suppose $S$ and $T$ are graded rings. A **graded ring morphism** is a ring morphism $\phi:S\to S$ that respects the graded structures; i.e., satisfies $\phi(S_k)\subseteq T_k$ for all $k\geq 0$.

>[!note] Definition of graded ideal
>Suppose $S$ is a graded ring. A **graded ideal** of $S$ is an ideal $I$ of $S$ such that
>$$I=\bigoplus_{k=0}^{\infty} (I\cap S_k).$$

### Examples

1. The prototypical example of a graded ring is $R[x_1,\ldots, x_n]$, the polynomial ring in $n$ variables over the commutative ring $R$. Here $S_0=R$ corresponds to the constant polynomials, while $S_k$ corresponds to the subgroup of all $R$-linear combinations of monomials of total degree $k$.
