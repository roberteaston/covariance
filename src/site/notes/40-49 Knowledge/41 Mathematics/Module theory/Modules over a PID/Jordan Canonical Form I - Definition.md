---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/modules-over-a-pid/jordan-canonical-form-i-definition/","tags":["module_theory"],"updated":"2024-11-21T06:53:22-08:00"}
---

# The Jordan Canonical Form

[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form I - Definition#The rational canonical form\|Recall]] that if $V$ is a vector space over a field $F$ and $T:V\to V$ is an $F$-linear transformation, then the [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Modules over a PID - The Fundamental Theorem#The Fundamental Theorem Invariant Factor Form\|fundamental theorem of finitely generated modules over a PID]] leads to an $F[x]$-module isomorphism

$$V\simeq F[x]/\langle a_1(x)\rangle\oplus \cdots \oplus F[x]/\langle a_m(x)\rangle,$$

where $a_1(x),\ldots, a_m(x)$ are the invariant factors of $T$. We then [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form III - Computation\|showed]] how the isomorphism led to a basis for $V$ with respect to which the matrix for $T$ was in rational canonical form.

We now see what happens when we use the [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Modules over a PID - The Fundamental Theorem#The Fundamental Theorem Elementary Divisor Form\|elementary divisor form]] of the $F[x]$-module decomposition of $V$. In general, that means factoring the invariant factors into prime powers and then using the [[40-49 Knowledge/41 Mathematics/Ring theory/Chinese Remainder Theorem\|Chinese Remainder Theorem]] to split the summands $F[x]/\langle a(x)\rangle$ into summands of the form $R/\langle p_1(x)^{\alpha_1}\rangle \oplus \cdots \oplus R/\langle p_s(x)^{\alpha_s}\rangle$, where each $p_j(x)$ is a prime (i.e., irreducible) polynomial in $F[x]$.

We will now assume that each invariant factor $a_i(x)$ factors completely in $F[x]$ into linear factors. Since the product of the invariant factors is the characteristic polynomial of $T$, this is equivalent to assuming $F$ contains all of the eigenvalues of $T$. We thus obtain an $F[x]$-module isomorphism of the form

$$V\simeq F[x]/\langle (x-\lambda_1)^{\alpha_1}\rangle \oplus\cdots \oplus F[x]/\langle (x-\lambda_t)^{\alpha_t}\rangle $$

We now choose a basis for each summand so that the corresponding matrix for $T$ is particular simple.

Recall that the action of $T$ on the summand corresponding to a quotient $F[x]/\langle (x-\lambda)^k\rangle$ is multiplication by $x$. Consider the elements

$$1,\overline{x}-\lambda, \ldots , (\overline{x}-\lambda)^{k-2},(\overline{x}-\lambda)^{k-1}.$$

(Note that here we are identifying $F$ with its image in the quotient ring, so we are writing $1$ instead of $\overline{1}$, and $\lambda$ instead of $\overline{\lambda}$ or $\lambda\cdot \overline{1}$, etc.)

The matrix relating these elements to the standard $F$-basis $1,\overline{x},\ldots, \overline{x}^{k-2},\overline{x}^{k-1}$ is upper triangular with ones on the diagonal. In particular, that matrix has determinant $1$ and so is invertible, so it follows that the above list gives an $F$-basis for $F[x]/(x-\lambda)^k$. Noting that $x=\lambda+(x-\lambda)$ and $(\overline{x}-\lambda)^k=0$ in $F[x]/\langle (x-\lambda)^k\rangle$, observe that multiplication by $x$ acts as follows:

$$\begin{align*} 1&\mapsto \overline{x} = \lambda\cdot 1+1\cdot (\overline{x}-\lambda)\\ \overline{x}-\lambda&\mapsto \overline{x}^2-\lambda\overline{x}=\lambda\cdot (\overline{x}-\lambda)+1\cdot (\overline{x}- \lambda)^2\\ &\vdots\\ (\overline{x}-\lambda)^{k-2}&\mapsto \lambda\cdot (\overline{x}-\lambda)^{k-2}+1\cdot (\overline{x}-\lambda)^{k-1}\\ (\overline{x}-\lambda)^{k-1}&\mapsto \lambda\cdot (\overline{x}-\lambda)^{k-1}. \end{align*}$$

In other words, with respect to the new basis $\mathcal{B}=\{(\overline{x}-\lambda)^{k-1},\ldots, \overline{x}-\lambda, 1\}$, the matrix for multiplication by $x$ is

$$\begin{bmatrix}\lambda & 1 & & & \\ & \lambda & \ddots & & \\ & & \ddots & 1 & \\ & & & \lambda & 1 \\ & & & & \lambda \end{bmatrix}$$

> [!warning] Warning
> Notice the order in which the new basis vectors have been listed. If we had listed them in the reverse order, then we would have written down the transpose of the above matrix, with $\lambda$ on the diagonal and ones just below.

Does this choice to order our basis this way enrage me? Yes, it does. I would have been fine with our matrix being lower triangular with 1s below the diagonal. The current choice seems forced to me, but alas, no one will budge on this. As such, we are forced to define:

> [!note] Definition of Jordan block
> The $k\times k$ matrix with $\lambda$ along the main diagonal and $1$ just above the diagonal (as above) is called the **$k\times k$ elementary Jordan matrix with eigenvalue $\lambda$** (or the **Jordan block of size $k$ with eigenvalue $\lambda$**).

Applying this process to each of the summands in the elementary divisor decomposition of $V$ (as an $F[x]$-module), we obtain a basis for $V$ with respect to which the linear transformation $T$ has as matrix the direct sum of the Jordan blocks corresponding to the elementary divisors of $V$:

$$\begin{bmatrix} J_1 & & & \\ & J_2 & & \\ & & \ddots & \\ & & & J_t\end{bmatrix}$$


>[!note] Definition of Jordan canonical form
>A matrix is said to be in **Jordan canonical form** if it is a block diagonal matrix with Jordan blocks along the diagonal.
>
>A **Jordan canonical form** for a linear transformation $T$ is a matrix representing $T$ that is in Jordan canonical form.

By our results, a Jordan canonical form for a linear transformation $T$ always exists and is unique up to permutation of the blocks. (However, recall our standing assumption that the field $F$ contain all of the eigenvalues of $T$.)

# Properties of the Jordan canonical form

Before seeing some examples, we list a few last properties (without proof). Can you prove them?

> [!summary] Jordan canonical form and diagonal matrices
> If a matrix $A$ is similar to a diagonal matrix $D$, then $D$ is the Jordan canonical form of $A$.
>
> Two diagonal matrices are similar if and only if their diagonal entries are the same up to permutation.

> [!summary] Eigenvalues and diagonal matrices
> If $A$ is an $n\times n$ matric with entries from $F$ and $F$ contains all of the eigenvalues of $A$, then $A$ is similar to a diagonal matrix over $F$ if and only if the minimal polynomial of $A$ has no repeated roots.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Jordan Canonical Form II - Computation\|Jordan Canonical Form II - Computation]]