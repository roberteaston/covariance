---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/modules-over-a-pid/rational-canonical-form-i-definition/","tags":["module_theory"],"updated":"2024-03-06T13:55:40-08:00"}
---

Suppose $F$ is a field and $V$ is a finite-dimensional $F$-vector space. Let $T:V\to V$ be a fixed linear endomorphism. We can then consider $V$ as an $F[x]$-module, with the action of $x$ on $V$ given by the linear endomorphism $T$. In other words, for any vector $v\in V$ we have $x\cdot v =T(v)$. The general polynomial $p(x)=a_0+a_1x+\cdots +a_nx^n\in F[x]$ then acts by
$$p(x)\cdot v = a_0v+a_1T(v)+\cdots +a_nT^n(v),$$
where $T^k = T\circ\cdots \circ T$ is repeated composition.

Since $V$ is finitely generated as an $F$-module, it is also finitely generated as an $F[x]$-module. The [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Modules over a PID - The Fundamental Theorem\|fundamental structure theorem for modules over a PID]] then provides a direct sum decomposition of $V$ as an $F[x]$-module. The free part of this decomposition must be trivial, since every nonzero free $F[x]$-module is infinite-dimensional as an $F$-vector space (since $F[x]$ is infinite-dimensional as an $F$-vector space). So, $V$ must be isomorphic to a direct sum of cyclic torsion $F[x]$-modules
$$V\simeq F[x]/(a_1(x))\oplus \cdots \oplus F[x]/(a_m(x)),
$$
where $a_1(x),\ldots, a_m(x)\in F[x]$ are nonunits (i.e., nonconstant polynomials) and $a_1(x)\mid a_2(x)\mid \cdots \mid a_m(x)$. These invariant factors are unique up to unit (which are the constant polynomials); if we require them to be monic, then they are unique.

Note that the annihilator of $V$ (as a torsion $F[x]$-module) is the ideal $(a_m(x))\subseteq F[x]$. Note that this means $a_m(x)\cdot v = 0_V$ for every $v\in V$. By the definition of our action, this means that the endomorphism $a_m(T)$ is identically zero on the entire vector space $V$. Since we've currently assuming $a_m(x)$ is monic, this is exactly the minimal polynomial of $T$.

>[!summary] The minimal polynomial of $T$
>The minimal polynomial $m_T(x)$ of the linear endomorphism $T$ is $a_m(x)$, the largest invariant factor in the above decomposition.

>[!warning] A warning about bases and generators
>Suppose $\mathcal{B}=\{v_1,\ldots, v_k\}$ is a basis for $V$ as an $F$-vector space. Then the set $\mathcal{B}$ generates $V$ as an $F$-vector space, and so every $v\in V$ can be written as an $R$-linear combination of the vectors in $\mathcal{B}$. It follows that every $v\in V$ can also be written as an $F[x]$-linear combination of the vectors in $\mathcal{B}$; i.e., the same set $\mathcal{B}$ generates $V$ as an $F[x]$-module.
>
>However, the set $\mathcal{B}$ is not $F[x]$-linearly independent. In fact, as an $F[x]$-module the space $V$ is torsion and so there are no nonempty $F[x]$-linearly independent sets in $V$! Consequently, as an $F[x]$-module the space $V$ doesn't have a basis.

---

## The rational canonical form

Consider one of the direct summands $F[x]/(a(x))$, where $a(x)=b_0+b_1x+\cdots +b_{k-1}x^{k-1}+x^k$. As an $F$-vector space, a basis for $F[x]/(a(x))$ is the set $\{1,\overline{x},\ldots, \overline{x}^{k-1}\}$, where $\overline{x}=x+(a(x))$ is shorthand notation for the coset represented by $x$. Under this basis, the action of $x$ is simply:
$$\begin{align*}
1&\mapsto \overline{x}\\
\overline{x}&\mapsto \overline{x}^2\\
\overline{x}^2&\mapsto \overline{x}^3\\
&\vdots\\
\overline{x}^{k-2}&\mapsto \overline{x}^{k-1}\\
\overline{x}^{k-1}&\mapsto \overline{x}^k=-b_0-b_1\overline{x}-\cdots -b_{k-1}\overline{x}^{k-1}.
\end{align*}$$
So, with respect to our chosen basis, the matrix for the action of $x$ is
$$\begin{bmatrix}
0 & 0 & \cdots & \cdots & -b_0 \\
1 & 0 & \cdots & \cdots & -b_1 \\
0 & 1 & \cdots & \cdots & -b_2 \\
\vdots & \vdots & \ddots & \cdots & \vdots \\
0 & 0 & \cdots & 1 & - b_{k-1}
\end{bmatrix}$$
This matrix is called the **companion matrix** of $a(x)$ and is denoted $C_{a(x)}$.

If we repeat this process for every direct summand in the invariant factor decomposition of $V$, we see that the matrix for $T$ with respect to that choice of basis (amalgamated from the bases for each summand, as described above) is
$$\begin{bmatrix}
C_{a_1(x)} & & & \\
 & C_{a_2(x)} & & \\
 & & \ddots & \\
 & & & C_{a_m(x)}
\end{bmatrix}$$
>[!note] Definition of rational canonical form
>A matrix is said to be in **rational canonical form** if it is the direct sum of companion matrices for nonconstant monic polynomials $a_1(x),\ldots, a_m(x)$ with $a_1(x)\mid a_2(x)\mid\cdots \mid a_m(x)$. These polynomials are called the invariant factors of the matrix.
>
>A **rational canonical form** for a linear endomorphism $T$ is a matrix representing $T$ that is in rational canonical form.

### Example

Suppose $V$ is a finite-dimensional $\textbf{Q}$-vector space and $T:V\to V$ is a $\textbf{Q}$-linear transformation. Then $V$ can be given the structure of a ${\bf Q}[x]$-module by letting $x$ act via $T$. Suppose the invariant factors of $V$ as a $\textbf{Q}[x]$-module are
$$\begin{align*}
a_1(x)&=3+x,\\
a_2(x)&=(3+x)(2+x)=6+5x+x^2,\\
a_3(x)&=(3+x)^2(2+x) = 18+21x+8x^2+x^3.
\end{align*}$$
In other words, there is a $\textbf{Q}[x]$-module isomorphism
$$\phi:V\xrightarrow{\sim}(\textbf{Q}[x]/(3+x))\oplus (\textbf{Q}[x]/(6+5x+x^2))\oplus (\textbf{Q}[x]/(18+21x+8x^2+x^3)).$$
This is an isomorphism of $\textbf{Q}[x]$-modules, where the action of $x$ on the left is via $T$ and the action of $x$ in each summand on the right is by multiplication by $\overline{x}$, the coset represented by $x$ in the given quotient ring.

Let's look at each summand in turn. In the quotient $\textbf{Q}[x]/(3+x)$ we have $3+\overline{x}=0$. So, if we use the $\textbf{Q}$-basis $\mathcal{B}_1=\{1\}$ then the action of $x$ is given by $1\mapsto \overline{x}=-3$. The matrix for the action of $x$ on this summand is therefore the $1\times 1$ matrix
$$C_{a_1(x)}=\begin{bmatrix} -3\end{bmatrix}.$$

In the summand $\textbf{Q}[x]/(6+5x+x^2)$ we have $6+5\overline{x}+\overline{x}^2=0$. So, if we use the $\textbf{Q}$-basis $\mathcal{B}_2=\{1,\overline{x}\}$ then the action of $x$ is given by $1\mapsto \overline{x}$ and $\overline{x}\mapsto \overline{x}^2=-6-5\overline{x}$. The matrix for the action of $x$ on this summand is therefore the $2\times 2$ matrix
$$
C_{a_2(x)}=\begin{bmatrix} 0 & -6 \\ 1 & -5\end{bmatrix}.
$$

In the summand $\textbf{Q}[x]/(18+21x+8x^2+x^3)$ we have $18+21\overline{x}+8\overline{x}^2+\overline{x}^3=0$. So, if we use the basis $\mathcal{B}_3=\{1,\overline{x},\overline{x}^2\}$ then the action of $x$ is given by
$$\begin{align*}
1&\mapsto \overline{x}\\
\overline{x}&\mapsto \overline{x}^2\\
\overline{x}^2&\mapsto \overline{x}^3=-18-21\overline{x}-8\overline{x}^2.
\end{align*}$$
The matrix for the action of $x$ on this summand is therefore the $3\times 3$ matrix
$$
C_{a_3(x)}=\begin{bmatrix} 0 & 0 & -18 \\ 1 & 0 & -21 \\ 0 & 1 & -8\end{bmatrix}.
$$

With all of this in mind, the isomorphism $\phi$ corresponds to a basis $\mathcal{B}=\{v_1,v_2,v_3,v_4,v_5,v_6\}$ for $V$ as an $F$-vector space such that the matrix for $T$ with respect to this basis $\mathcal{B}$ is
$$\mathcal{M}(T;\mathcal{B})=\begin{bmatrix}-3 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & -6 & 0 & 0 & 0 \\ 0 & 1 & -5 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 & 0 & -18\\0 & 0 & 0 & 1 & 0 & -21 \\ 0 & 0 & 0 & 0 & 1 & -8\end{bmatrix}.$$

Also note that the $\mathbf{Q}$-vector space $V$ decomposes into a direct sum of three subspaces, namely $V_1=\operatorname{span}(v_1)$, $V_2=\operatorname{span}(v_2,v_3)$, and $V_3=\operatorname{span}(v_4,v_5,v_6)$. These three spaces are invariant under the action of the linear transformation $T.$  Indeed, we have
$$\begin{align*}
T(v_1)&=-3v_1,\\
T(v_2)&=v_3\quad\text{and}\quad T(v_3)=-6v_2-5v_3\\
T(v_4)&= v_5\quad\text{and}\quad T(v_5)=v_6\quad\text{and}\quad T(v_6)=-18v_4-21v_5-8v_6.
\end{align*}$$