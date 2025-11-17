---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/modules-over-a-pid/rational-canonical-form-iii-computation/","tags":["module_theory"],"updated":"2025-11-17T06:46:39-08:00"}
---

We have a wonderful result about [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form I - Definition#The rational canonical form\|rational canonical forms]], but how do we actually *compute* the rational canonical form of a given square matrix? Fortunately, there is a very straightforward algorithm. Given an $n\times n$ matrix, $A$, both its invariant factors and the change-of-basis matrix needed to put $A$ into rational canonical form can be obtained from the computation of something called the *Smith normal form* for $A$.

## The Smith normal form
---

Suppose $A$ is an $n\times n$ matrix over a field $F$. Consider the $n\times n$ matrix $xI_n-A$, which has entries in the ring $F[x]$. As usual in linear algebra, we will perform three basic types of row/column operations on this matrix. The three operations are:
1. Swap a pair of rows/columns.
2. Add an $F[x]$-multiple of one row/column to another.
3. Multiply a row/column by a unit in $F[x]$.

We call these the **elementary row/column operations**. We will use these operations to transform $xI_n-A$ into a very particular form, in some ways analogous to the classic reduced row-echelon form.

We first quote (without proof^[To see a proof, check out Exercises 16-19 in Section 12.1 and Exercises 22-25 in Section 12.2 of Dummit & Foote.]) the following fact.

> [!summary] The Smith Normal Form
> Let $A$ be an $n\times n$ matrix over a field $F$. Using the three elementary row and column operations above, the $n\times n$ matrix $xI_n-A$ can be put into the following diagonal form, called the **Smith normal form for $A$**:
> 
> $$\begin{bmatrix}1 & & & & & & \\ & \ddots & & & & & \\ & & 1 & & & & \\ & & & a_1(x) & & & \\ & & & & a_2(x) & & \\ & & & & & \ddots & \\ & & & & & & a_m(x)\end{bmatrix},$$
> 
> where the $a_i(x)$ are nonzero nonconstant monic polynomials satisfying $a_1(x)\mid a_2(x)\mid\cdots\mid a_m(x)$.
>
>The polynomials $a_1(x),\ldots, a_m(x)$ are the invariant factors of $A$.

As a bonus, in computing the Smith normal form for $A$ it turns out that we can also deduce the change-of-basis matrix that will conjugate $A$ into rational canonical form. Although this will initially seem a bit strange, if we keep track of the *row* operations used to obtain the Smith normal form for $A$, then we can also write down a change-of-basis matrix, $P$, such that $P^{-1}AP$ is the rational canonical form for $A$. See pages Dummit & Foote for the full details, but here is a short summary:

Begin with the identity matrix $I_n=:P'$, and then for each *row* operation used to put the matrix $xI_n-A$ into Smith normal form, change the matrix $P'$ by the following rules:
{ #de5ec5}

1. If rows $i$ and $j$ are swapped in the computation of the Smith normal form for $A$, then swap *columns* $j$ and $i$ in $P'$.
2. If $R_i+p(x)R_j\mapsto R_i$ in the computation of the Smith normal form for $A$, then perform $C_j-p(A)C_i\mapsto C_j$ in $P'$. (Notice that the indices have switched!)
3. If we multiply row $i$ by a unit $u$ in the computation of the Smith normal form for $A$, then multiply column $i$ by $u^{-1}$ in the computation of $P'$.

By the end of our computations, we will be left with a matrix $P'$ for which the first $n-m$ columns are zero and the last $m$ columns are nonzero. These last nonzero columns correspond to $F[x]$-module generators for the summands for each invariant factor. In particular, there will be exactly one nonzero column in $P'$ for each invariant factor.

Let ${\bf v}_i$ be the $i^{\text{th}}$ nonzero column vector in $P'$, so that ${\bf v}_i$ is the vector in $V$ that corresponds to the $F[x]$-module generator $\overline{1}$ for $F[x]/\langle a_i(x)\rangle$. Since a full $F$-vector space basis for $F[x]/\langle a_i(x)\rangle$ is $\{1,\overline{x},\ldots, \overline{x}^{\deg(a(x))-1}\}$, the corresponding $F$-vector space basis for that invariant subspace of $V$ is $\{{\bf v}_i, A{\bf v}_i, \ldots, A^{\deg(a_i(x))-1}{\bf v}_i\}$. Do this for each nonzero column of $P'$. Listing the vectors produced (in this order) gives a desired change-of-basis matrix $P$.

>[!warning] Warning
>This auxiliary matrix $P'$ is not quite unique. The nonzero columns of $P'$ correspond to $F[x]$-module generators of the invariant summands. Those summands are cyclic as $F[x]$-modules, but the generators for those summands are only unique up to scaling by units.
>
>In particular, different sequences of elementary row/column operations (when computing the Smith normal form for $A$) can lead to slightly different auxiliary matrices. This will lead, in turn, to slightly different change-of-basis matrices. This is exactly the same situation that occurs when diagonalizing a (diagonalizable) matrix: each eigenbasis provides a suitable change-of-basis, but there is no unique eigenbasis.

## Examples
---

### Example 1: Following the general algorithm

Let $A$ be the $3\times 3$ matrix
$$A=\begin{bmatrix} 2 & -2 & 14 \\ 0 & 3 & -7 \\ 0 & 0 & 2\end{bmatrix}$$
The goal is to diagonalize the matrix $xI_3-A$ using row *and column* operations over the ring ${\bf Q}[x]$. See pages 483-484 in Dummit & Foote for the actual row and column operations used to transform the matrix
$$xI_3-A=\begin{bmatrix}x-2 & 2 & -14 \\ 0 & x-3 & 7 \\ 0 & 0 & x-2\end{bmatrix}$$
to the diagonal matrix
$$\begin{bmatrix}1 & 0 & 0 \\ 0 & x-2 & 0 \\ 0 & 0 & x^2-5x+6\end{bmatrix}$$
For quick reference, the operations used were (in order):
- $R_1+R_2\mapsto R_1$
- $C_1-C_2\mapsto C_1$
- $-R_1$
- $R_2+(x-3)R_1\mapsto R_2$
- $C_2+(x-1)C_1\mapsto C_2$
- $C_3-7C_1\mapsto C_3$
- $-C_2$
- $R_2-7R_3\mapsto R_2$
- $R_2\leftrightarrow R_3$
- $C_2\leftrightarrow C_3$

> [!question] What's the strategy?
> A fair question that we've left open is *how* did we come up with that sequence of row and column operations? It turns out that the diagonal entries in the Smith normal form are each the $\gcd$ of certain elements. Specifically, the first (i.e., top-left-most) diagonal entry $a_1$ in the Smith normal form is the $\gcd$ of all of the entries in the matrix $xI_n-A$.
> 
> In our example, we have
> 
> $$xI_3-A=\begin{bmatrix}x-2 & 2 & -14 \\ 0 & x-3 & 7 \\ 0 & 0 & x-2\end{bmatrix}$$
> 
> and so it's clear by inspection that the $\gcd$ of the entries of $xI_3-A$ is $1$. That's the initial goal, then, namely to use row and column operations (over ${\bf Q}[x]$) until we can get a $1$ in that $(1,1)$-entry. We then immediately wipe out all other entries in both the first column and first row. In our example, that leaves us with the matrix
> 
> $$\begin{bmatrix} 1 & 0 & 0 \\ 0 & -(x-2)(x-3) & 7(x-2) \\ 0 & 0 & x-2\end{bmatrix}$$
> 
> Now focus on the $2\times 2$ matrix obtained by omitting the first row and column. The second diagonal entry $a_2$ in the Smith normal form is the $\gcd$ of the entries in that $2\times 2$ matrix. In our case, this is evidently $x-2$. So we repeat the previous strategy, using row and column operations until we get $x-2$ in the $(2,2)$-entry of our matrix. At that point, we arrive at the matrix
> 
> $$\begin{bmatrix}1 & 0 & 0 \\ 0 & x-2 & 0 \\ 0 & 0 & (x-2)(x-3)\end{bmatrix}$$
> 
> and we're done.

By our general theory, it follows that the invariant factors of $A$ are $a_1(x)=x-2$ and $a_2(x)=x^2-5x+6$. We can now conclude that the minimal polynomial of $A$ is $m_A(x)=x^2-5x+6=(x-2)(x-3)$, the characteristic polynomial of $A$ is $c_A(x)=(x-2)(x^2-5x+6)=(x-2)^2(x-3)$, and the rational canonical form of $A$ is
$$R=\begin{bmatrix} 2 & 0 & 0 \\ 0 & 0 & -6 \\ 0 & 1 & 5\end{bmatrix}$$
Moreover, if we keep track of the *row* operations used to diagonalize the matrix $xI_3-A$, we can also compute a change-of-basis matrix $P$ such that $P^{-1}AP$ is the rational canonical form matrix above. For a quick rundown on his this computation looks, first look at the *row* operations we used to compute the Smith normal form for $A$, and then write down the corresponding column operations as describe above. Starting from the identity matrix $I_3$, we perform the following column operations:
- $C_2-C_1\mapsto C_2$
- $-C_1$
- $C_1-(A-3I_3)C_2\mapsto C_1$
- $C_3+7C_2\mapsto C_3$
- $C_2\leftrightarrow C_3$

This sequence of column operations will yield the matrix
$$P'=\begin{bmatrix}0 & -7 & -1 \\ 0 & 7 & 1 \\ 0 & 1 & 0\end{bmatrix}$$
The first nonzero column of $P'$ then gives $\deg(a_1(x))=1$ column of the matrix $P$, namely the column
$${\bf p}_1={\bf v}_1=\begin{bmatrix} -7 \\ 7 \\ 1\end{bmatrix}$$
The second column of $P'$ gives $\deg(a_2(x))=2$ columns of the matrix $P$, namely the columns
$${\bf p}_2={\bf v}_2=\begin{bmatrix} -1 \\ 1 \\ 0\end{bmatrix},\quad {\bf p}_3=A{\bf v}_2=\begin{bmatrix} 2 & -2 & 14 \\ 0 & 3 & -7 \\ 0 & 0 & 2\end{bmatrix}\begin{bmatrix} -1 \\ 1 \\ 0\end{bmatrix}=\begin{bmatrix}-4 \\ 3 \\ 0\end{bmatrix}$$
Thus, a change-of-basis matrix $P$ is
$$P=\begin{bmatrix} -7 & -1 & -4 \\ 7 & 1 & 3 \\ 1 & 0 & 0\end{bmatrix}$$

### Example 2: Shortcuts for small matrices

For small square matrices (sizes $3\times 3$ and below), it's possible to compute the rational canonical form without going through the diagonalization process outlined above. For example, for the matrix $A$ above, we can first directly compute the characteristic polynomial of $A$:
$$c_A(x)=\det(xI_3-A)=(x-2)^2(x-3).$$
This immediately tells us that the product of the invariant factors of $A$ is $(x-2)^2(x-3)$. By the divisibility condition on the invariant factors, and the fact that the largest invariant factor is the minimal polynomial $m_A(x)$, we also know that $m_A(x)$ has the same roots as $c_A(x)$. In this case, that means there are only two possibilities for $m_A(x)$: it's either $(x-2)(x-3)$ or $(x-2)^2(x-3)$. To determine which it is, simply recall that $m_A(x)$ is the smallest degree monic polynomial which evaluates at $A$ to zero. Then check that
$$(A-2I_3)(A-3I_3)=A^2-5A+6I_3 = 0.$$
Thus, $m_A(x)=(x-2)(x-3)$.

Now observe that the invariant factors of $A$ are nonzero nonconstant monic polynomials $a_1(x),\ldots, a_m(x)$ such that:
1. $a_1(x)\mid a_2(x)\mid \cdots \mid a_m(x)$
2. $a_m(x)=m_A(x)=(x-2)(x-3)$
3. $a_1(x)a_2(x)\cdots a_m(x)=c_A(x)=(x-2)^2(x-3)$.

There is only one such possible list, namely
$$a_1(x)=x-2,\quad a_2(x)=(x-2)(x-3)$$
We now know the invariant factors of $A$ and hence the rational canonical form of $A$.

For $2\times 2$ and $3\times 3$ matrices, this method is generally the fastest way to determine the rational canonical form. However, it has two downsides:
1. It does not produce the change-of-basis matrix $P$.
2. It does not usually work for matrices larger than $3\times 3$.

### Example 3: A larger matrix

Consider the $4\times 4$ matrix
$$A=\begin{bmatrix}1 & 2 & -4 & 4 \\ 2 & -1 & 4 & -8 \\ 1 & 0 & 1 & -2 \\ 0 & 1 & -2 & 3 \end{bmatrix}$$
It is not difficult to show that the characteristic polynomial of $A$ is $c_A(x)=(x-1)^4$, which gives four possibilities for the minimal polynomial of $A$, namely $m_A(x)=x-1, (x-1)^2, (x-1)^3, (x-1)^4$. It is then not too terrible to verify that $m_A(x)=(x-1)^2$, simply by noting $A-I_4\neq 0$ and verifying $(A-I_4)^2=0$. However, that leaves two possibilities for the invariant factors of $A$:
$$x-1,x-1,(x-1)^2\quad \text{or}\quad (x-1)^2, (x-1)^2.$$
On the other hand, computing the Smith normal form of the matrix $xI_4-A$ we eventually obtain
$$\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & (x-1)^2 & 0 \\ 0 & 0 & 0 & (x-1)^2 \end{bmatrix}.$$
Thus, the invariant factors of $A$ are $a_1(x)=(x-1)^2=x^2-2x+1$ and $a_2(x)=(x-1)^2=x^2-2x+1$. It now follows that the rational canonical form of $A$ is
$$R=\begin{bmatrix}0 & -1 & 0 & 0 \\ 1 & 2 & 0 & 0 \\ 0 & 0 & 0 & -1 \\ 0 & 0 & 1 & 2\end{bmatrix}.$$
Moreover, using the row operations used to compute the Smith normal form allows us to compute a change-of-basis matrix. We first compute the auxiliary matrix, $P'$, finding it to be
$$P'=\begin{bmatrix}0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 \end{bmatrix}$$

From this, we can now compute a change-of-basis matrix, $P$, ultimately finding it to be
$$P=\begin{bmatrix}1 & 1 & 0 & 2 \\ 0 & 2 & 1 & -1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1\end{bmatrix}$$
See pages 485-486 of Dummit & Foote for the list of row and column operations used, and how they produce the matrix, $P$, above.


## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Jordan Canonical Form I - Definition\|Jordan Canonical Form I - Definition]]