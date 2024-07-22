---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/modules-over-a-pid/jordan-canonical-form-ii-computation/","tags":["module_theory"],"updated":"2024-03-06T13:55:23-08:00"}
---

## Converting from the Rational Canonical Form to the Jordan Canonical Form

To compute the Jordan canonical form for an $n\times n$ matrix $A$, we first [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form III - Computation#Computing the invariant factors\|compute the invariant factors]] $a_1(x),\ldots, a_m(x)$. For each invariant factor $a(x)$, we factor $a(x)$ completely into linear factors:
$$a(x)=(x-\lambda_1)^{\alpha_1}\cdots (x-\lambda_s)^{\alpha_s},$$
where the $\lambda_i$ are the distinct roots. For this factor, the corresponding elementary divisors are $(x-\lambda_1)^{\alpha_1}, \ldots, (x-\lambda_s)^{\alpha_s}$. We can then write down the corresponding Jordan blocks $J_1,\ldots, J_s$. Doing this for every invariant factor allows us to write down the Jordan canonical form $J$ for $A$.

How about if we want to find a change-of-basis matrix $Q$ such that $Q^{-1}AQ=J$? We can compute that, as well. First note that if ${\bf v}\in V$ is the $F[x]$-module generator for the summand corresponding to $F[x]/(a(x))$, then the elements
$$\frac{a(x)}{(x-\lambda_1)^{\alpha_1}}\cdot {\bf v}, \ldots, \frac{a(x)}{(x-\lambda_s)^{\alpha_s}}\cdot {\bf v}$$
are $F[x]$-module generators for the summands corresponding to the quotients
$$F[x]/(x-\lambda_1)^{\alpha_1},\ldots, F[x]/(x-\lambda_s)^{\alpha_s}$$
(To see why this is true, first note that for each $i$ the polynomials $(x-\lambda_i)^{\alpha_i}$ and $\frac{a(x)}{(x-\lambda_i)^{{\alpha}_i}}$ are relatively prime; the former is the annihilator of the summand $F[x]/(x-\lambda_i)^{\alpha_i}$, while the latter is the annihilator of the complement of that summand in the invariant summand $F[x]/(a(x))$. As such, multiplication by $\frac{a(x)}{(x-\lambda_i)^{{\alpha}_i}}$ provides a surjective morphism $F[x]/(a(x))\to F[x]/(x-\lambda_i)^{\alpha_i}$.)

For each one of these summands, if ${\bf w}=\frac{a(x)}{(x-\lambda)^{\alpha}}\cdot {\bf v}$ is the $F[x]$-module generator for the summand corresponding to $F[x]/(x-\lambda)^{\alpha}$, then an $F$-vector space basis for that summand is
$$(A-\lambda I_n)^{\alpha-1}{\bf w},\ldots, (A-\lambda I_n){\bf w}, {\bf w}.$$
Note that the basis vectors have been listed in this order so that the corresponding matrix for $T$ (on that summand) is the Jordan block, matching the way in which we chose the basis $\{(\overline{x}-\lambda)^{\alpha-1},\ldots, \overline{x}-\lambda,1\}$ for $F[x]/(x-\lambda)^{\alpha}$.

We can use this to algorithmically compute a change-of-basis matrix $Q$.  We first compute an auxiliary matrix $P'$ [[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form III - Computation#Computing the change-of-basis matrix\|just as we did]] for the rational canonical form. The nonzero columns of $P'$ correspond to vectors that generate the invariant factor summands as $F[x]$-modules. We can thus follow the recipe describe above, where ${\bf v}$ takes the role of a nonzero column of $P'$. It's easiest to follow this through specific examples.

## Examples

### Example 1

Let $A$ be the $3\times 3$ matrix
$$\begin{bmatrix} 2 & -2 & 14 \\ 0 & 3 & -7 \\ 0 & 0 & 2\end{bmatrix}$$
[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form III - Computation#Example 1 Following the general algorithm\|We have seen]] that the invariant factors of $A$ are $a_1(x)=x-2$ and $a_2(x)=x^2-5x+6=(x-2)(x-3)$. The elementary divisors of $A$ are therefore $x-2$, $x-2$, $x-3$, and so the Jordan canonical form is
$$J=\begin{bmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3\end{bmatrix}$$
For a change-of-basis matrix $P$, first recall an auxiliary matrix $P'$ for this matrix was
$$P'=\begin{bmatrix}0 & -7 & -1 \\ 0 & 7 & 1 \\ 0 & 1 & 0\end{bmatrix}$$
For the first nonzero column ${\bf v}_1$ of $P'$ (which is a ${\bf Q}[x]$-module generator for the summand corresponding to the first invariant factor $a_1(x)=x-2$), we compute
$${\bf w}_1=\frac{a_1(x)}{(x-2)}\cdot {\bf v}_1= {\bf v}_1 = \begin{bmatrix} -7 \\ 7 \\ 1\end{bmatrix}.$$
Since the summand ${\bf Q}[x]/(x-2)$ is 1-dimensional, the single vector ${\bf w}_1$ is our ${\bf Q}$-basis for that summand.

For the second nonzero column ${\bf v}_2$ of $P'$ (which is a ${\bf Q}[x]$-module generator for the summand corresponding to the second invariant factor $a_2(x)=(x-2)(x-3)$), we compute the projections of ${\bf v}_2$ into the two summands ${\bf Q}[x]/(x-2)$ and ${\bf Q}[x]/(x-3)$, respectively:
$$\begin{align*}
{\bf w}_2&=\frac{a_2(x)}{(x-2)}\cdot {\bf v}_2=(A-3I){\bf v}_2=(A-3I)\begin{bmatrix} -1 \\ 1 \\ 0\end{bmatrix}=\begin{bmatrix} -1 \\ 0 \\ 0\end{bmatrix}\\
{\bf w}_3&=\frac{a_2(x)}{(x-3)}\cdot {\bf v}_2=(A-2I){\bf v}_2=(A-2I)\begin{bmatrix} -1 \\ 1 \\ 0\end{bmatrix}=\begin{bmatrix} -2 \\ 1 \\ 0\end{bmatrix}
\end{align*}$$
Again, since each of those summands is 1-dimensional, these are our ${\bf Q}$-bases for those two summands.

A change-of-basis matrix is then
$$Q=\begin{bmatrix}-7 & -1 & -2 \\ 7 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}$$
One can verify $Q^{-1}AQ = J$.

### Example 2

Consider the $4\times 4$ matrix
$$A=\begin{bmatrix}1 & 2 & -4 & 4 \\ 2 & -1 & 4 & -8 \\ 1 & 0 & 1 & -2 \\ 0 & 1 & -2 & 3 \end{bmatrix}$$
[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Rational Canonical Form III - Computation#Example 3 A larger matrix\|We have seen]] that the invariant factors of this matrix are $a_1(x)=(x-1)^2$, $a_2(x)=(x-1)^2$. The elementary divisors of $A$ are therefore $(x-1)^2$, $(x-1)^2$, and so the Jordan canonical form is
$$J=\begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$
An auxiliary matrix for $A$ was
$$P'=\begin{bmatrix}0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 \end{bmatrix}$$
The first nonzero column ${\bf v}_1$ of $P'$ is a ${\bf Q}[x]$-module generator for the summand ${\bf Q}[x]/(x-1)^2$. There is nothing to project here, since this summand does not decompose further. (In other words, the invariant factor $a_1(x)=(x-1)^2$ is also an elementary divisor). That summand is 2-dimensional over ${\bf Q}$, so we compute its ${\bf Q}$-basis:
$${\bf w}_1 =(A-I)^1{\bf v}_1=\begin{bmatrix}0 \\ 2 \\ 1 \\ 0\end{bmatrix}$$
$${\bf w}_2={\bf v}_1=\begin{bmatrix} 2 \\ -1 \\ 0 \\ 1\end{bmatrix}$$
The second nonzero column ${\bf v}_2$ of $P'$ is a ${\bf Q}[x]$-module generator for the second summand ${\bf Q}[x]/(x-1)^2$. By the identical reasoning used for the previous summand, a ${\bf Q}$-basis for this summand is then
$$\begin{align*}
{\bf w}_3 &= (A-I)^1{\bf v}_2=\begin{bmatrix}2 \\ -2 \\ 0 \\ 1\end{bmatrix}\\
{\bf w}_4 &={\bf v}_2=\begin{bmatrix} 0 \\ 1 \\ 0 \\ 0\end{bmatrix}
\end{align*}$$
Thus, a change-of-basis matrix $Q$ is
$$Q=\begin{bmatrix} 0 & 1 & 2 & 0 \\ 2 & 0 & -2 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0\end{bmatrix}$$