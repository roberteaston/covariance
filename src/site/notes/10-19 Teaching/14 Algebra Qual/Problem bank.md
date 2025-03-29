---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/problem-bank/","updated":"2025-03-28T15:34:12-07:00"}
---

Beginning with the September 2025 exam, all problems will be drawn from a public "problem bank." This bank contains two types of problems: **template problems** and **pool problems**.

## Template problems

**Template problems** are generally computational with easily adjustable specifics. These types of problems are especially prevalent in linear algebra. Examples include problems such as:
- analyzing a geometrically-given linear transformation for specific properties such as eigenvalues or diagonalizability; e.g., see [[10-19 Teaching/14 Algebra Qual/Problem bank/Template problems/Linear algebra/Projection onto a plane\|March 2025 (Problem 5)]] or [[10-19 Teaching/14 Algebra Qual/Problem bank/Template problems/Linear algebra/Orthogonal projection and scaling\|Spring 2019 (Problem 1)]]
- counting the number of morphisms between two specific group; e.g., see [[10-19 Teaching/14 Algebra Qual/Problem bank/Template problems/Group theory/Finding all morphisms between two groups\|Spring 2017 (Problem 4)]] or [[10-19 Teaching/14 Algebra Qual/Problem bank/Template problems/Group theory/Counting morphisms between specified groups\|Fall 2015 (Problem 1)]]

Template problems are available below:

> [!summary]- Template problems in linear algebra
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/template-problems-in-linear-algebra/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/rotation-around-an-axis/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation that rotates counterclockwise around the $z$-axis by $\frac{2\pi}{3}$.

1. Write the matrix for $T$ with respect to the standard basis $\left\{\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix},\begin{bmatrix} 0 \\ 1 \\ 0\end{bmatrix},\begin{bmatrix} 0 \\ 0 \\ 1\end{bmatrix}\right\}$.
2. Write the matrix for $T$ with respect to the basis $\left\{\begin{bmatrix} \frac{\sqrt{3}}{2} \\ -\frac{1}{2} \\ 0 \end{bmatrix},\begin{bmatrix} 0 \\ 1 \\ 0\end{bmatrix},\begin{bmatrix} 0 \\ 0 \\ 1\end{bmatrix}\right\}$.
3. Determine all (complex) eigenvalues of $T$.
4. Is $T$ diagonalizable over ${\bf C}$? Justify your answer.

> [!info]- View $\LaTeX$ code
> ```
> Let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation that rotates counterclockwise around the $z$-axis by $\frac{2\pi}{3}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Write the matrix for $T$ with respect to the standard basis $\left\{\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix},\begin{bmatrix} 0 \\ 1 \\ 0\end{bmatrix},\begin{bmatrix} 0 \\ 0 \\ 1\end{bmatrix}\right\}$.
> 	\item Write the matrix for $T$ with respect to the basis $\left\{\begin{bmatrix} \frac{\sqrt{3}}{2} \\ -\frac{1}{2} \\ 0 \end{bmatrix},\begin{bmatrix} 0 \\ 1 \\ 0\end{bmatrix},\begin{bmatrix} 0 \\ 0 \\ 1\end{bmatrix}\right\}$.
> 	\item Determine all (complex) eigenvalues of $T$.
> 	\item Is $T$ diagonalizable over ${\bf C}$? Justify your answer.
\end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/a-linear-transformation-from-a-vector-space-of-polynomials/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $V$ denote the real vector space of polynomials in $x$ of degree at most 3. Let $\mathcal{B}=\{1, x, x^2, x^3\}$ be a basis for $V$ and $T:V\to V$ be the function defined by $T(f(x))=f(x)+f'(x)$.

1. Prove that $T$ is a linear transformation.
2. Find $[T]_{\mathcal{B}}$, the matrix representation for $T$ in terms of the basis $\mathcal{B}$.
3. Is $T$ diagonalizable? If yes, find a matrix $A$ so that $A[T]_{\mathcal{B}}A^{-1}$ is diagonal, otherwise explain why $T$ is not diagonalizable.


> [!info]- View $\LaTeX$ code
> ```
> Let $V$ denote the real vector space of polynomials in $x$ of degree at most 3. Let $\mathcal{B}=\{1, x, x^2, x^3\}$ be a basis for $V$ and $T:V\to V$ be the function defined by $T(f(x))=f(x)+f'(x)$.
> \begin{enumerate}[label=(\alph*)]
> 	\item Prove that $T$ is a linear transformation.
> 	\item Find $[T]_{\mathcal{B}}$, the matrix representation for $T$ in terms of the basis $\mathcal{B}$.
> 	\item Is $T$ diagonalizable? If yes, find a matrix $A$ so that $A[T]_{\mathcal{B}}A^{-1}$ is diagonal, otherwise explain why $T$ is not diagonalizable.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/a-vector-space-of-square-matrices/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $\operatorname{M}_n({\bf R})$ be the vector space of all $n \times n$ matrices with real entries. We say that $A, B \in \operatorname{M}_n({\bf R})$ commute if $AB = BA$.
1. Fix $A \in \operatorname{M}_n({\bf R})$. Prove that the set of all matrices in $\operatorname{M}_n({\bf R})$ that commute with $A$ is a subspace of $\operatorname{M}_n({\bf R})$.
2. Let $A=\begin{bmatrix} 1 & 1 \\ 1 & 1  \end{bmatrix}\in \operatorname{M}_2({\bf R})$ and let $W\subseteq \operatorname{M}_2({\bf R})$ be the subspace of all matrices of $\operatorname{M}_2({\bf R})$ that commute with $A$. Find a basis of $W$. 

> [!info]- View $\LaTeX$ code
> ```
> Let $\operatorname{M}_n({\bf R})$ be the vector space of all $n \times n$ matrices with real entries. We say that $A, B \in \operatorname{M}_n({\bf R})$ commute if $AB = BA$.
> \begin{enumerate}[label=\alph*)]
> 	\item Fix $A \in \operatorname{M}_n({\bf R})$. Prove that the set of all matrices in $\operatorname{M}_n({\bf R})$ that commute with $A$ is a subspace of $\operatorname{M}_n({\bf R})$.
> 	\item Let $A=\begin{bmatrix} 1 & 1 \\ 1 & 1  \end{bmatrix}\in \operatorname{M}_2({\bf R})$ and let $W\subseteq \operatorname{M}_2({\bf R})$ be the subspace of all matrices of $\operatorname{M}_2({\bf R})$ that commute with $A$. Find a basis of $W$. 
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/bases-for-a-subspace-and-its-orthogonal-complement/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $V\subset {\bf R}^5$ be the subspace defined by the equation

$x_1-2x_2+3x_3-4x_4+5x_5=0.$

1. Find (with justification) a basis for $V$.
2. Find (with justification) a basis for $V^{\perp}$, the subspace of ${\bf R}^5$ orthogonal to $V$ under the usual dot product.

> [!info]- View $\LaTeX$ code
> ```
> Let $V\subset {\bf R}^5$ be the subspace defined by the equation
> \[
> 	x_1-2x_2+3x_3-4x_4+5x_5=0.
> \]
> \begin{enumerate}[label=\alph*)]
> 	\item Find (with justification) a basis for $V$.
> 	\item Find (with justification) a basis for $V^{\perp}$, the subspace of ${\bf R}^5$ orthogonal to $V$ under the usual dot product.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/computations-with-a-given-linear-transformation/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation defined by $T\left(\begin{bmatrix} x \\ y \\ z\end{bmatrix}\right) = \begin{bmatrix}  x+y \\ 2z-x \\ y+2z\end{bmatrix}$.

1. Find the matrix that represents $T$ with respect to the standard basis for ${\bf R}^3$.
2. Find a basis for the kernel of $T$.
3. Determine the rank of $T$.

> [!info]- View $\LaTeX$ code
> ```
> Let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation defined by $T\left(\begin{bmatrix} x \\ y \\ z\end{bmatrix}\right) = \begin{bmatrix}  x+y \\ 2z-x \\ y+2z\end{bmatrix}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Find the matrix that represents $T$ with respect to the standard basis for ${\bf R}^3$.
> 	\item Find a basis for the kernel of $T$.
> 	\item Determine the rank of $T$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/diagonalization-and-matrix-powers/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A=\begin{bmatrix} 0 & 0 & -2 \\ 1 & 2 & 1 \\ 1 & 0 & 3\end{bmatrix}$.

1. Determine whether $A$ is diagonalizable, and if so, give its diagonal form along with a diagonalizing matrix.
2. Compute $A^{42}$. Remember to show all work.

> [!info]- View $\LaTeX$ code
> ```
> Let $A=\begin{bmatrix} 0 & 0 & -2 \\ 1 & 2 & 1 \\ 1 & 0 & 3\end{bmatrix}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Determine whether $A$ is diagonalizable, and if so, give its diagonal form along with a diagonalizing matrix.
> 	\item Compute $A^{42}$. Remember to show all work.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/diagonalization-of-a-given-matrix/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A=\begin{bmatrix} 2 & -1 & -1 \\ 1 & 0 & -1 \\ 1 & -1 & 0\end{bmatrix}$.

1. Compute the characteristic polynomial $p_A(x)$ of $A$. It has integer roots.
2. For each eigenvalue $\lambda$ of $A$, find a basis for the eigenspace $E_{\lambda}$.
3. Determine if $A$ is diagonalizable. If so, give matrices $P$ and $B$ such that $P^{-1}AP=B$ and $B$ is diagonal. If no, explain carefully why $A$ is not diagonalizable.

> [!info]- View $\LaTeX$ code
> ```
> Let $A=\begin{bmatrix} 2 & -1 & -1 \\ 1 & 0 & -1 \\ 1 & -1 & 0\end{bmatrix}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Compute the characteristic polynomial $p_A(x)$ of $A$. It has integer roots.
> 	\item For each eigenvalue $\lambda$ of $A$, find a basis for the eigenspace $E_{\lambda}$.
> 	\item Determine if $A$ is diagonalizable. If so, give matrices $P$ and $B$ such that $P^{-1}AP=B$ and $B$ is diagonal. If no, explain carefully why $A$ is not diagonalizable.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/diagonalization-of-a-given-matrix-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A=\begin{bmatrix} 6 & -2 & -1 \\ 10 & -3 & -2 \\ 0 & 0 & 1\end{bmatrix}$.

1. Find bases for the eigenspaces of $A$.
2. Determine if $A$ is diagonalizable. If so, give an invertible matrix $P$ and diagonal matrix $D$ such that $P^{-1}AP=D$. If not, explain why not.

> [!info]- View $\LaTeX$ code
> ```
> Let $A=\begin{bmatrix} 6 & -2 & -1 \\ 10 & -3 & -2 \\ 0 & 0 & 1\end{bmatrix}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Find bases for the eigenspaces of $A$.
> 	\item Determine if $A$ is diagonalizable. If so, give an invertible matrix $P$ and diagonal matrix $D$ such that $P^{-1}AP=D$. If not, explain why not.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/dimension-of-a-subspace-and-its-orthogonal-complement/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $W\subset {\bf R}^5$ be the subspace spanned by the set of vectors $\{\langle 1,-2,0,2,-1\rangle,\langle -2,4,-1,1,2\rangle,\langle 0,1,2,-2,1\rangle\}$.

1. Compute the dimension of $W$.
2. Determine the dimension of $W^\perp$, the perpendicular subspace in ${\bf R}^5$.
3. Find a basis for $W^\perp$.

> [!info]- View $\LaTeX$ code
> ```
> Let $W\subset {\bf R}^5$ be the subspace spanned by the set of vectors $\{\langle 1,-2,0,2,-1\rangle,\langle -2,4,-1,1,2\rangle,\langle 0,1,2,-2,1\rangle\}$.
> \begin{enumerate}[label=(\alph*)]
> 	\item Compute the dimension of $W$.
> 	\item Determine the dimension of $W^\perp$, the perpendicular subspace in ${\bf R}^5$.
> 	\item Find a basis for $W^\perp$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/jordan-canonical-form-of-a-matrix/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Consider the following matrix:

$A=\begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 0\end{bmatrix}.$

1. Determine the characteristic and minimal polynomials of $A$.
2. Find a basis for ${\bf R}^4$ consisting of generalized eigenvectors of $A$.
3. Find an invertible matrix $S$ such that $S^{-1}AS$ is in Jordan canonical form.
4. Determine a Jordan canonical form of $A$.

> [!info]- View $\LaTeX$ code
> ```
> Consider the following matrix:
> 	\[
> 		A=\begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 0\end{bmatrix}.
> 	\]
> \begin{enumerate}[label=\alph*)]
> 	\item Determine the characteristic and minimal polynomials of $A$.
> 	\item Find a basis for ${\bf R}^4$ consisting of generalized eigenvectors of $A$.
> 	\item Find an invertible matrix $S$ such that $S^{-1}AS$ is in Jordan canonical form.
> 	\item Determine a Jordan canonical form of $A$.
> 	\end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/jordan-canonical-form-of-a-matrix-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A=\begin{bmatrix} -2 & 1 & -1 \\ 5 & -2 & 2 \\ 7 & -3 & 3\end{bmatrix}$.

1. Find the characteristic polynomial and the minimal polynomial of $A$.
2. Find the Jordan canonical form of the matrix $A$.

> [!info]- View $\LaTeX$ code
> ```
> Let $A=\begin{bmatrix} -2 & 1 & -1 \\ 5 & -2 & 2 \\ 7 & -3 & 3\end{bmatrix}$.
> 
> \medskip
> \begin{enumerate}[label=(\alph*)]
> 	\item Find the characteristic polynomial and the minimal polynomial of $A$.
> 	\item Find the Jordan canonical form of the matrix $A$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/linear-transformation-from-a-vector-space-of-polynomials/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $P_3$ be the real vector space of all real polynomials of degree three or less. Define $L:P_3\to P_3$ by $L(p(x))=p(x)+p(-x)$.

1. Prove $L$ is a linear transformation.
2. Find a basis for the null space of $L$.
3. Compute the dimension of the image of $L$.

> [!info]- View $\LaTeX$ code
> ```
> Let $P_3$ be the real vector space of all real polynomials of degree three or less. Define $L:P_3\to P_3$ by $L(p(x))=p(x)+p(-x)$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove $L$ is a linear transformation.
> 	\item Find a basis for the null space of $L$.
> 	\item Compute the dimension of the image of $L$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/matrix-and-characteristic-polynomial-for-a-given-linear-transformation/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $V=\{a_0+a_1\sqrt[3]{2}+a_2\sqrt[3]{4}\mid a_0, a_1, a_2\in {\bf Q}\}\subseteq {\bf R}$. This set is a vector space over ${\bf Q}$.

1. Verify $V$ is closed under product (using the usual product operation in ${\bf R}$).
2. Let $T:V\to V$ be the linear transformation defined by $T(v)=(\sqrt[3]{2}+\sqrt[3]{4}) v$. Find the matrix that represents $T$ with respect to the basis $\{1,\sqrt[3]{2},\sqrt[3]{4}\}$ for $V$.
3. Determine the characteristic polynomial for $T$.

> [!info]- View $\LaTeX$ code
> ```
> Let $V=\{a_0+a_1\sqrt[3]{2}+a_2\sqrt[3]{4}\mid a_0, a_1, a_2\in {\bf Q}\}\subseteq {\bf R}$. This set is a vector space over ${\bf Q}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Verify $V$ is closed under product (using the usual product operation in ${\bf R}$).
> 	\item Let $T:V\to V$ be the linear transformation defined by $T(v)=(\sqrt[3]{2}+\sqrt[3]{4}) v$. Find the matrix that represents $T$ with respect to the basis $\{1,\sqrt[3]{2},\sqrt[3]{4}\}$ for $V$.
> 	\item Determine the characteristic polynomial for $T$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/matrix-and-eigenvalues-of-a-given-linear-transformation/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $\{{\bf v}_1,{\bf v}_2,{\bf v}_3\}$ is a basis for ${\bf R}^3$ and $T:{\bf R}^3\to {\bf R}^3$ is a linear transformation satisfying the following:

$\begin{align*} T({\bf v}_1) &= 4{\bf v}_1+2{\bf v}_2 \\ T({\bf v}_2) &= 5{\bf v}_2 \\ T({\bf v}_3) &= -2{\bf v}_1+4{\bf v}_2+5{\bf v}_3.\end{align*}$

Determine the eigenvalues of $T$ and find a basis for each eigenspace.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $\{{\bf v}_1,{\bf v}_2,{\bf v}_3\}$ is a basis for ${\bf R}^3$ and $T:{\bf R}^3\to {\bf R}^3$ is a linear transformation satisfying the following:
> \begin{align*}
> 	T({\bf v}_1) &= 4{\bf v}_1+2{\bf v}_2\\
> 	T({\bf v}_2) &= 5{\bf v}_2\\
> 	T({\bf v}_3) &= -2{\bf v}_1+4{\bf v}_2+5{\bf v}_3.
> \end{align*}
> Determine the eigenvalues of $T$ and find a basis for each eigenspace.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/orthogonal-complements/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let$W\subset {\bf R}^5$ be the space spanned by the vectors

$\left\{\begin{bmatrix} 1 \\ -2 \\ 0 \\ 2 \\ 1\end{bmatrix},\begin{bmatrix} -2 \\ 4 \\ -1 \\ 1 \\ 2\end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ 2 \\ -2 \\1\end{bmatrix}\right\}.$

1. Compute the dimension of $W$.
2. Let $W^{\perp}=\{{\bf v}\in {\bf R}^5\,\mid\, {\bf v}\cdot {\bf w}=0\text{ for all }w\in W\}$. Determine the dimension of $W^{\perp}$, and explain how this following immediately from (a) using a theorem.
3. Find a basis for $W^{\perp}$.

> [!info]- View $\LaTeX$ code
> ```
> Let$W\subset {\bf R}^5$ be the space spanned by the vectors
> \[
> 	\left\{\begin{bmatrix} 1 \\ -2 \\ 0 \\ 2 \\ 1\end{bmatrix},\begin{bmatrix} -2 \\ 4 \\ -1 \\ 1 \\ 2\end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ 2 \\ -2 \\1\end{bmatrix}\right\}.
> \]
> \begin{enumerate}[label=\alph*)]
> 	\item Compute the dimension of $W$.
> 	\item Let $W^{\perp}=\{{\bf v}\in {\bf R}^5\,\mid\, {\bf v}\cdot {\bf w}=0\text{ for all }w\in W\}$. Determine the dimension of $W^{\perp}$, and explain how this following immediately from (a) using a theorem.
> 	\item Find a basis for $W^{\perp}$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/orthogonal-projection-and-scaling/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $L$ be the line in ${\bf R}^2$ defined by $y=-3x$, and let $T:{\bf R}^2\to {\bf R}^2$ be the linear transformation that orthogonally projects onto $L$ and then stretches along $L$ by a factor of two.

1. Find the eigenvalues and an eigenbasis $\mathcal{B}$ for $T$.
2. Determine the matrix for $T$ with respect to the basis $\mathcal{B}$.
3. Determine the matrix for $T$ with respect to the standard basis.

> [!info]- View $\LaTeX$ code
> ```
> Let $L$ be the line in ${\bf R}^2$ defined by $y=-3x$, and let $T:{\bf R}^2\to {\bf R}^2$ be the linear transformation that orthogonally projects onto $L$ and then stretches along $L$ by a factor of two.
> \begin{enumerate}[label=\alph*)]
> 	\item Find the eigenvalues and an eigenbasis $\mathcal{B}$ for $T$.
> 	\item Determine the matrix for $T$ with respect to the basis $\mathcal{B}$.
> 	\item Determine the matrix for $T$ with respect to the standard basis.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/orthogonal-projection-onto-a-line/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:{\bf R}^3\to {\bf R}^3$ be the orthogonal projection to a $1$-dimensional linear subspace $L\subset {\bf R}^3$.
1. List the eigenvalues of $T$.
2. Write the characteristic polynomial $p_T(x)$ for $T$.
3. Is $T$ diagonalizable? Briefly justify your answer.

> [!info]- View $\LaTeX$ code
> ```
> Let $T:{\bf R}^3\to {\bf R}^3$ be the orthogonal projection to a $1$-dimensional linear subspace $L\subset {\bf R}^3$.
> \begin{enumerate}[label=\alph*)]
> 	\item List the eigenvalues of $T$.
> 	\item Write the characteristic polynomial $p_T(x)$ for $T$.
> 	\item Is $T$ diagonalizable? Briefly justify your answer.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/orthogonal-projection-onto-a-line-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:{\bf R}^3\to {\bf R}^3$ be the orthogonal projection to a $1$-dimensional linear subspace $L\subset {\bf R}^3$.
1. List the eigenvalues of $T$.
2. Write the characteristic polynomial $p_T(x)$ for $T$.
3. Is $T$ diagonalizable? Justify your answer.

> [!info]- View $\LaTeX$ code
> ```
> Let $T:{\bf R}^3\to {\bf R}^3$ be the orthogonal projection to a $1$-dimensional linear subspace $L\subset {\bf R}^3$.
> \begin{enumerate}[label=\alph*)]
> 	\item List the eigenvalues of $T$.
> 	\item Write the characteristic polynomial $p_T(x)$ for $T$.
> 	\item Is $T$ diagonalizable? Justify your answer.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/orthogonal-projection-onto-a-line-3/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $L$ be the line $L$ parameterized by $L(t)=(2t,-3t,t)$ for $t\in {\bf R}$, and let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation that is orthogonal projection onto $L$.

1. Describe $\operatorname{ker}(T)$ and $\operatorname{im}(T)$, either implicitly (using equations in $x,y,z$) or parametrically.
2. List the eigenvalues of $T$ and their geometric multiplicities.
3. Find a basis for each eigenspace of $T$.
4. Let $A$ be the matrix for $T$ with respect to the standard basis. Find a diagonal matrix $B$ and an invertible matrix $S$ such that $B=S^{-1}AS$. (You do not have to compute $A$.)

> [!info]- View $\LaTeX$ code
> ```
> Let $L$ be the line $L$ parameterized by $L(t)=(2t,-3t,t)$ for $t\in {\bf R}$, and let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation that is orthogonal projection onto $L$.
> \begin{enumerate}[label=\alph*)]
> 	\item Describe $\operatorname{ker}(T)$ and $\operatorname{im}(T)$, either implicitly (using equations in $x,y,z$) or parametrically.
> 	\item List the eigenvalues of $T$ and their geometric multiplicities.
> 	\item Find a basis for each eigenspace of $T$.
> 	\item Let $A$ be the matrix for $T$ with respect to the standard basis. Find a diagonal matrix $B$ and an invertible matrix $S$ such that $B=S^{-1}AS$. (You do not have to compute $A$.)
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/orthogonal-projection-onto-a-plane/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:{\bf R}^4\to {\bf R}^4$ be orthogonal projection to the $2$-dimensional plane $P$ spanned by the vectors ${\bf v}=(2,0,1,0)$ and ${\bf w}=(-1,0,2,0)$.
1. Find (with proof) all eigenvalues and eigenvectors, along with their geometric and algebraic multiplicities.
2. Find the matrix representing $T$ with respect to the standard basis. Is this matrix diagonalizable? Why or why not?

> [!info]- View $\LaTeX$ code
> ```
> Let $T:{\bf R}^4\to {\bf R}^4$ be orthogonal projection to the $2$-dimensional plane $P$ spanned by the vectors ${\bf v}=(2,0,1,0)$ and ${\bf w}=(-1,0,2,0)$.
> \begin{enumerate}[label=\alph*)]
> 	\item Find (with proof) all eigenvalues and eigenvectors, along with their geometric and algebraic multiplicities.
> 	\item Find the matrix representing $T$ with respect to the standard basis. Is this matrix diagonalizable? Why or why not?
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/orthogonal-projection-onto-a-plane-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $a, b \in {\bf R}$ and $T: {\bf R}^3 \to {\bf R}^3$ be the linear transformation that is orthogonal projection onto the plane $z=ax+by$ (with respect to the usual Euclidean inner-product on ${\bf R}^3$).

1. Find the eigenvalues of $T$ and bases for the corresponding eigenspaces.
2. Is $T$ diagonalizable? Justify.
3. What is the characteristic polynomial of $T$?

> [!info]- View $\LaTeX$ code
> ```
> Let $a, b \in {\bf R}$ and $T: {\bf R}^3 \to {\bf R}^3$ be the linear transformation that is orthogonal projection onto the plane $z=ax+by$ (with respect to the usual Euclidean inner-product on ${\bf R}^3$).
> \begin{enumerate}[label=(\alph*)]
> 	\item Find the eigenvalues of $T$ and bases for the corresponding eigenspaces.
> 	\item Is $T$ diagonalizable? Justify.
> 	\item What is the characteristic polynomial of $T$?
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/projection-onto-a-plane/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:{\bf R}^3\to {\bf R}^3$ be the orthogonal projection onto the plane $z=x+y$, with respect to the standard Euclidean inner product.
1. Write the matrix representation of $T$ with respect to the standard basis.
2. Is $T$ diagonalizable? Justify your answer.

> [!info]- View $\LaTeX$ code
> ```
> Let $T:{\bf R}^3\to {\bf R}^3$ be the orthogonal projection onto the plane $z=x+y$, with respect to the standard Euclidean inner product.
> 	\begin{enumerate}[label=\alph*)]
> 		\item Write the matrix representation of $T$ with respect to the standard basis.
> 		
> 		\item Is $T$ diagonalizable? Justify your answer.
> 	\end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/radial-expansion-from-a-fixed-line/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation that expands radially by a factor of three around the line parameterized by $L(t)=\begin{bmatrix} 2 \\ 2 \\ -1\end{bmatrix} t$, leaving the line itself fixed (viewed as a subspace).

1. Find an eigenbasis for $T$ and provide the matrix representation of $T$ with respect to that basis.
2. Provide the matrix representation of $T$ with respect to the standard basis.

> [!info]- View $\LaTeX$ code
> ```
> Let $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation that expands radially by a factor of three around the line parameterized by $L(t)=\begin{bmatrix} 2 \\ 2 \\ -1\end{bmatrix} t$, leaving the line itself fixed (viewed as a subspace).
> 
> \medskip
> \begin{enumerate}[label=(\alph*)]
> 	\item Find an eigenbasis for $T$ and provide the matrix representation of $T$ with respect to that basis.
> 	\item Provide the matrix representation of $T$ with respect to the standard basis.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/linear-algebra/reflection-across-a-plane/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $a,b\in {\bf R}$ and $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation which is reflection across the plane $z=ax+by$.

1. Find the eigenvalues of $T$ and for each find a basis for the corresponding eigenspace.
2. Is $T$ diagonalizable? Justify.
3. What is the characteristic polynomial of $T$?
4. What is the minimal polynomial of $T$?

> [!info]- View $\LaTeX$ code
> ```
> Let $a,b\in {\bf R}$ and $T:{\bf R}^3\to {\bf R}^3$ be the linear transformation which is reflection across the plane $z=ax+by$.
> \begin{enumerate}[label=(\alph*)]
> 	\item Find the eigenvalues of $T$ and for each find a basis for the corresponding eigenspace.
> 	\item Is $T$ diagonalizable? Justify.
> 	\item What is the characteristic polynomial of $T$?
> 	\item What is the minimal polynomial of $T$?
> \end{enumerate}
> ```

</div></div>


</div></div>


> [!summary]- Template problems in group theory
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/template-problems-in-group-theory/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




## Template problems in group theory


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/a-condition-under-which-a-group-must-be-abelian/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ and $H$ be groups of order 10 and 15, respectively. Prove that if there is a nontrivial homomorphism $\phi:G\to H$, then $G$ is abelian.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ and $H$ be groups of order 10 and 15, respectively. Prove that if there is a nontrivial homomorphism $\phi:G\to H$, then $G$ is abelian.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/working-modulo-11/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $n$ be a number between $0$ and $10$. Compute $n^{111}\pmod{11}$, expressing your answer as a number between $0$ and $10$. Give as detailed a proof as you can, justifying every step, no matter who trivial you think it is.

> [!info]- View $\LaTeX$ code
> ```
> Let $n$ be a number between $0$ and $10$. Compute $n^{111}\pmod{11}$, expressing your answer as a number between $0$ and $10$. Give as detailed a proof as you can, justifying every step, no matter who trivial you think it is.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/computations-in-symmetric-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $S_n$ denote the symmetric group on $n$ letters.
1. Is the element $(1\,2\,3\,4)(2\,5\,3\,4\,6)(1\,5\,3\,2\,4\,7)\in S_7$ even or odd? Indicate your reasoning.
2. Find the order of $(1\,3\,4)(2\,4\,3)(1\,3\,4)\in S_4$. Show all work.
3. Write $(1\,5\,2\,3)(2\,1\,3\,4)(1\,5\,2\,3)^{-1}\in S_5$ in disjoint cycle form. Show all work.

> [!info]- View $\LaTeX$ code
> ```
> Let $S_n$ denote the symmetric group on $n$ letters.
> \begin{enumerate}[label=\alph*)]
> 	\item Is the element $(1\,2\,3\,4)(2\,5\,3\,4\,6)(1\,5\,3\,2\,4\,7)\in S_7$ even or odd? Indicate your reasoning.
> 	\item Find the order of $(1\,3\,4)(2\,4\,3)(1\,3\,4)\in S_4$. Show all work.
> 	\item Write $(1\,5\,2\,3)(2\,1\,3\,4)(1\,5\,2\,3)^{-1}\in S_5$ in disjoint cycle form. Show all work.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/computing-an-automorphism-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Determine with proof the automorphism group $\operatorname{Aut}(V)$ of the Klein 4-group $V=\{e,a,b,ab\}$. To what familiar group is it isomorphic?

> [!info]- View $\LaTeX$ code
> ```
> Determine with proof the automorphism group $\operatorname{Aut}(V)$ of the Klein 4-group $V=\{e,a,b,ab\}$. To what familiar group is it isomorphic?
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/counting-morphisms-between-specified-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Determine the number of group homomorphisms $\phi$ between the given groups. Here $K_4$ denotes the Klein four-group (also known as ${\bf Z}/2{\bf Z}\times {\bf Z}/2{\bf Z}$) and $S_3$ denotes the symmetric group on three elements.

1. $\phi:K_4\to {\bf Z}/2{\bf Z}$
2. $\phi:{\bf Z}/2{\bf Z}\to K_4$
3. $\phi:S_3\to K_4$
4. $\phi:K_4\to S_3$

> [!info]- View $\LaTeX$ code
> ```
> Determine the number of group homomorphisms $\phi$ between the given groups. Here $K_4$ denotes the Klein four-group (also known as ${\bf Z}/2{\bf Z}\times {\bf Z}/2{\bf Z}$) and $S_3$ denotes the symmetric group on three elements.
> 
> \medskip
> \begin{enumerate}[label=(\alph*)]
> 	\item $\phi:K_4\to {\bf Z}/2{\bf Z}$
> 	\item $\phi:{\bf Z}/2{\bf Z}\to K_4$
> 	\item $\phi:S_3\to K_4$
> 	\item $\phi:K_4\to S_3$
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/directly-proving-the-existence-of-an-element-of-a-desired-order/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Without using Cauchy's Theorem or the Sylow theorems, prove that every group of order 21 contains an element of order three.

> [!info]- View $\LaTeX$ code
> ```
> Without using Cauchy's Theorem or the Sylow theorems, prove that every group of order 21 contains an element of order three.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/finding-all-morphisms-between-two-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Explicitly list all group homomorphisms $f: {\bf Z}/6{\bf Z} \to {\bf Z}/12{\bf Z}$.

> [!info]- View $\LaTeX$ code
> ```
> Explicitly list all group homomorphisms $f: {\bf Z}/6{\bf Z} \to {\bf Z}/12{\bf Z}$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/inner-and-outer-automorphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $C$ be a (possibly infinite) cyclic group, and let $\operatorname{Aut}(C)$ and $\operatorname{Inn}(C)$ be the groups of automorphisms and inner automorphisms, respectively. (Recall an automorphism $\gamma$ is **inner** if it is given by conjugation: $\gamma(b)=aba^{-1}$ for some $a\in C$.)
1. Describe $\operatorname{Aut}(C)$ and $\operatorname{Inn(C)}$ in familiar terms, as groups you would study in a first algebra course. Prove your result. (*Hint:* Where do generators go?)
2. Write $\operatorname{Aut}({\bf Z}_{12})$ down explicitly, giving its generic name and computing the order of every element. Show all work.

> [!info]- View $\LaTeX$ code
> ```
> Let $C$ be a (possibly infinite) cyclic group, and let $\operatorname{Aut}(C)$ and $\operatorname{Inn}(C)$ be the groups of automorphisms and inner automorphisms, respectively. (Recall an automorphism $\gamma$ is {\bfseries inner} if it is given by conjugation: $\gamma(b)=aba^{-1}$ for some $a\in C$.)
> \begin{enumerate}[label=\alph*)]
> 	\item Describe $\operatorname{Aut}(C)$ and $\operatorname{Inn(C)}$ in familiar terms, as groups you would study in a first algebra course. Prove your result. ({\itshape Hint:} Where do generators go?)
> 	\item Write $\operatorname{Aut}({\bf Z}_{12})$ down explicitly, giving its generic name and computing the order of every element. Show all work.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/inner-automorphisms-of-an-alternating-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A_5$ denote the alternating group on a $5$-element set $\{1,2,3,4,5\}$. The set of automorphisms of $A_5$ form a group, denoted $\operatorname{Aut}(A_5)$. The group of **conjugations** of $A_5$, denoted $\operatorname{Conj}(A_5)$, is the subgroup of $\operatorname{Aut}(A_5)$ consisting of automorphisms of the form $\gamma_s:=s(-)s^{-1}$ where $s\in A_5$. Explicitly, $\gamma_s(x)=sxs^{-1}$ for any $x\in A_5$.
1. Prove that the function $\gamma:A_5\to \operatorname{Conj}(A_5)$, taking $s\in A_5$ to $\gamma_s$, is a surjective homomorphism.
2. Prove that $A_5$ is isomorphic to $\operatorname{Conj}(A_5)$.

> [!info]- View $\LaTeX$ code
> ```
> Let $A_5$ denote the alternating group on a $5$-element set $\{1,2,3,4,5\}$. The set of automorphisms of $A_5$ form a group, denoted $\operatorname{Aut}(A_5)$. The group of {\bfseries conjugations} of $A_5$, denoted $\operatorname{Conj}(A_5)$, is the subgroup of $\operatorname{Aut}(A_5)$ consisting of automorphisms of the form $\gamma_s:=s(-)s^{-1}$ where $s\in A_5$. Explicitly, $\gamma_s(x)=sxs^{-1}$ for any $x\in A_5$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that the function $\gamma:A_5\to \operatorname{Conj}(A_5)$, taking $s\in A_5$ to $\gamma_s$, is a surjective homomorphism.
> 	\item Prove that $A_5$ is isomorphic to $\operatorname{Conj}(A_5)$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/nonexistence-of-morphisms-between-two-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $H$ is a group of order 15. Prove there does not exist a nontrivial group homomorphism $\phi:D_5\to H$, where $D_5$ is the dihedral group with ten elements.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $H$ is a group of order 15. Prove there does not exist a nontrivial group homomorphism $\phi:D_5\to H$, where $D_5$ is the dihedral group with ten elements.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/order-of-elements-in-a-symmetric-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $S_7$ denote the symmetric group.
1. Give an example of two non-conjugate elements of $S_7$ that have the same order.
2. If $g\in S_7$ has maximal order, what is the order of $g$?
3. Does the element $g$ that you found in part (2) lie in $A_7$? Fully justify your answer.
4. Determine whether the set $\{h\in S_7\mid |h|=|g|\}$ is a single conjugacy class in $S_7$, where $g$ is the element you found in part (2).

> [!info]- View $\LaTeX$ code
> ```
> Let $S_7$ denote the symmetric group.
> \begin{enumerate}[label=\alph*)]
> 	\item Give an example of two non-conjugate elements of $S_7$ that have the same order.
> 	\item If $g\in S_7$ has maximal order, what is the order of $g$?
> 	\item Does the element $g$ that you found in part (b) lie in $A_7$? Fully justify your answer.
> 	\item Determine whether the set $\{h\in S_7\mid |h|=|g|\}$ is a single conjugacy class in $S_7$, where $g$ is the element you found in part (b).
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/the-cyclic-group-of-order-2020/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be the additive group ${\bf Z}_{2020}$ and let $H\subseteq G$ be the subset consisting of those elements with order dividing 20.

1. Prove $H$ is a subgroup of $G$.
2. Find an explicit generator for $H$ and determine its order.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be the additive group ${\bf Z}_{2020}$ and let $H\subseteq G$ be the subset consisting of those elements with order dividing 20.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove $H$ is a subgroup of $G$.
> 	\item Find an explicit generator for $H$ and determine its order.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/verifying-axioms-of-a-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ denote the set of invertible $2\times 2$ matrices with values in a field. Prove $G$ is a group by defining a group law, identity element, and verifying the axioms. Credit is based on completeness.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ denote the set of invertible $2\times 2$ matrices with values in a field. Prove $G$ is a group by defining a group law, identity element, and verifying the axioms. Credit is based on completeness.
> ```

</div></div>


</div></div>


> [!summary]- Template problems in ring theory
> ![[Template problems in ring\|Template problems in ring]]


## Pool problems

**Pool problems** make up the rest of the problem bank, and include all problems that are not easily adjustable. These problems, when chosen, will usually be asked as is.^[Allowing for minor changes to improve clarity, streamline the question, etc.]

Pool problems are available at the links below:

> [!summary]- Pool problems in linear algebra
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/pool-problems-in-linear-algebra/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/sum-and-union-of-subspaces/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




1. Give an explicit example (with proof) showing that the union of two subspaces (of a given vector space) is not necessarily a subspace.
2. Suppose $U_1$ and $U_2$ are subspaces of a vector space $V$. Recall that their **sum** is defined to be the set $U_1+U_2 =\left\{u_1+u_2\,\mid \, u_1\in U_1, u_2\in U_2\right\}$. Prove $U_1+U_2$ is a subspace of $V$ containing $U_1$ and $U_2$.

> [!info]- View $\LaTeX$ code
> ```
> \begin{enumerate}[label=\alph*)]
> 	\item Give an explicit example (with proof) showing that the union of two subspaces (of a given vector space) is not necessarily a subspace.
> 	\item Suppose $U_1$ and $U_2$ are subspaces of a vector space $V$. Recall that their {\bfseries sum} is defined to be the set $U_1+U_2 =\left\{u_1+u_2\,\mid \, u_1\in U_1, u_2\in U_2\right\}$. Prove $U_1+U_2$ is a subspace of $V$ containing $U_1$ and $U_2$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/a-condition-ensuring-diagonalizability/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $F$ is a field and $A$ is an $n\times n$ matrix over $F$. Suppose further that $A$ possesses distinct eigenvalues $\lambda_1$ and $\lambda_2$ with $\dim \operatorname{Null}(A-\lambda_1 I_n)=n-1$. Prove $A$ is diagonalizable.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $F$ is a field and $A$ is an $n\times n$ matrix over $F$. Suppose further that $A$ possesses distinct eigenvalues $\lambda_1$ and $\lambda_2$ with $\dim \operatorname{Null}(A-\lambda_1 I_n)=n-1$. Prove $A$ is diagonalizable.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/a-property-of-surjective-linear-transformations/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $\phi: V\to W$ be a surjective linear transformation of finite-dimensional linear spaces. Show that there is a $U\subseteq V$ such that $V=(\ker(\phi))\oplus U$ and $\phi\mid_U:U\to W$ is an isomorphism. (Note that $V$ is not assumed to be an inner-product space; also note that $\ker(\phi)$ is sometimes referred to as the **null space** of $\phi$; finally, $\phi\mid_U$ denotes the restriction of $\phi$ to $U$.)

> [!info]- View $\LaTeX$ code
> ```
> Let $\phi: V\to W$ be a surjective linear transformation of finite-dimensional linear spaces. Show that there is a $U\subseteq V$ such that $V=(\ker(\phi))\oplus U$ and $\phi\mid_U:U\to W$ is an isomorphism. (Note that $V$ is not assumed to be an inner-product space; also note that $\ker(\phi)$ is sometimes referred to as the {\bfseries null space} of $\phi$; finally, $\phi\mid_U$ denotes the restriction of $\phi$ to $U$.)
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/an-upper-bound-on-the-number-of-nonzero-eigenvalues/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $V$ is a finite-dimensional real vector space and $T:V\to V$ is a linear transformation. Prove that $T$ has at most $\dim(\operatorname{range} \,T)$ distinct nonzero eigenvalues.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $V$ is a finite-dimensional real vector space and $T:V\to V$ is a linear transformation. Prove that $T$ has at most $\dim(\operatorname{range} \,T)$ distinct nonzero eigenvalues.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/analyzing-an-unusual-matrix/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $a$ and $b$ be real numbers and let $A\in {\bf R}^{3\times 3}$ with each diagonal entry equal to $a$ and each off-diagonal entry equal to $b$.
1. Determine all eigenvalues and representative eigenvectors of $A$ together with their algebraic multiplicities. (*Hint:* $A=(a-b)I+bJ$ where $J$ is the $3\times 3$ matrix each of whose entries equals $1$.)
2. Is $A$ diagonalizable? Justify your answer.
3. Determine the minimal polynomial of $A$.

> [!info]- View $\LaTeX$ code
> ```
> Let $a$ and $b$ be real numbers and let $A\in {\bf R}^{3\times 3}$ with each diagonal entry equal to $a$ and each off-diagonal entry equal to $b$.
> \begin{enumerate}[label=\alph*)]
> 	\item Determine all eigenvalues and representative eigenvectors of $A$ together with their algebraic multiplicities.
> 	
> 	\medskip
> 	\noindent ({\itshape Hint:} $A=(a-b)I+bJ$ where $J$ is the $3\times 3$ matrix each of whose entries equals $1$.)
> 	
> 	\item Is $A$ diagonalizable? Justify your answer.
> 	\item Determine the minimal polynomial of $A$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/direct-sums-and-idempotent-transformations/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $T:V\to V$ be a linear transformation on a finite-dimensional vector space. Prove that if $T^2=T$, then

$V=\ker(T)\oplus \operatorname{im}(T).$

> [!info]- View $\LaTeX$ code
> ```
> Let $T:V\to V$ be a linear transformation on a finite-dimensional vector space. Prove that if $T^2=T$, then
> \[
> 	V=\ker(T)\oplus \operatorname{im}(T).
> \]
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/dot-product-and-cross-product-as-linear-transformations/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let ${\bf R}^3$ denote the $3$-dimensional vector space, and let ${\bf v}=(a,b,c)$ be a fixed nonzero vector. The maps $C:{\bf R}^3\to {\bf R}^3$ and $D:{\bf R}^3\to {\bf R}$ defined by $C({\bf w})={\bf v}\times {\bf w}$ and $D({\bf w})=({\bf v}\cdot {\bf w}){\bf v}$ are linear transformations.
1. Determine the eigenvalues of $C$ and $D$.
2. Determine the eigenspaces of $C$ and $D$ as subspaces of ${\bf R}^3$, in terms of $a, b, c$.
3. Find a matrix for $C$ with respect to the standard basis. 

Show all work and explain reasoning.

> [!info]- View $\LaTeX$ code
> ```
> Let ${\bf R}^3$ denote the $3$-dimensional vector space, and let ${\bf v}=(a,b,c)$ be a fixed nonzero vector. The maps $C:{\bf R}^3\to {\bf R}^3$ and $D:{\bf R}^3\to {\bf R}$ defined by $C({\bf w})={\bf v}\times {\bf w}$ and $D({\bf w})=({\bf v}\cdot {\bf w}){\bf v}$ are linear transformations.
> 	\begin{enumerate}[label=\alph*)]
> 		\item Determine the eigenvalues of $C$ and $D$.
> 		
> 		\item Determine the eigenspaces of $C$ and $D$ as subspaces of ${\bf R}^3$, in terms of $a, b, c$.
> 		
> 		\item Find a matrix for $C$ with respect to the standard basis. 
> 	\end{enumerate}
> Show all work and explain reasoning.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/eigenvalues-and-eigenspaces-of-a-matrix-with-a-given-property/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $A$ is a real $n\times n$ matrix that satisfies $A^2 {\bf v} = 2A{\bf v}$ for every ${\bf v}\in {\bf R}^n$.

1. Show that the only possible eigenvalues of $A$ are 0 and 2.
2. For each $\lambda\in {\bf R}$, let $E_{\lambda}$ denote the $\lambda$-eigenspace of $A$, i.e., $E_{\lambda} = \{{\bf v}\in {\bf R}^n\mid A{\bf v}=\lambda {\bf v}\}$. Prove that ${\bf R}^n = E_0\oplus E_2$. (*Hint:* For every vector ${\bf v}$ one can write ${\bf v}=({\bf v}-\frac{1}{2}A{\bf v})+\frac{1}{2}A{\bf v}$.)

> [!info]- View $\LaTeX$ code
> ```
> Suppose $A$ is a real $n\times n$ matrix that satisfies $A^2 {\bf v} = 2A{\bf v}$ for every ${\bf v}\in {\bf R}^n$.
> \begin{enumerate}[label=\alph*)]
> 	\item Show that the only possible eigenvalues of $A$ are 0 and 2.
> 	\item For each $\lambda\in {\bf R}$, let $E_{\lambda}$ denote the $\lambda$-eigenspace of $A$, i.e., $E_{\lambda} = \{{\bf v}\in {\bf R}^n\mid A{\bf v}=\lambda {\bf v}\}$. Prove that ${\bf R}^n = E_0\oplus E_2$. ({\itshape Hint:} For every vector ${\bf v}$ one can write ${\bf v}=({\bf v}-\frac{1}{2}A{\bf v})+\frac{1}{2}A{\bf v}$.)
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/eigenvectors-and-linear-independence/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $T:{\bf R}^n\to {\bf R}^n$ is a linear transformation with distinct eigenvalues $\lambda_1, \lambda_2,\ldots, \lambda_m$, and let ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ be corresponding eigenvectors. Prove ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ are linearly independent.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $T:{\bf R}^n\to {\bf R}^n$ is a linear transformation with distinct eigenvalues $\lambda_1, \lambda_2,\ldots, \lambda_m$, and let ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ be corresponding eigenvectors. Prove ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ are linearly independent.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/eigenvectors-of-commuting-linear-transformations/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $S : V \to V$ and $T : V \to V$ be linear transformations that commute, i.e. $S \circ T = T \circ S$. Let $v \in V$ be an eigenvector of $S$ such that $T(v) \ne 0$. Prove that $T(v)$ is also an eigenvector of $S$.

> [!info]- View $\LaTeX$ code
> ```
> Let $S : V \to V$ and $T : V \to V$ be linear transformations that commute, i.e. $S \circ T = T \circ S$. Let $v \in V$ be an eigenvector of $S$ such that $T(v) \ne 0$. Prove that $T(v)$ is also an eigenvector of $S$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/eigenvectors-with-distinct-eigenvalues-are-linearly-independent/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $A$ is a $5\times 5$ matrix and $v_1,v_2, v_3$ are eigenvectors of $A$ with distinct eigenvalues. Prove $\{v_1,v_2,v_3\}$ is a linearly independent set. *Hint:* Consider a minimal linear dependence relation.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $A$ is a $5\times 5$ matrix and $v_1,v_2, v_3$ are eigenvectors of $A$ with distinct eigenvalues. Prove $\{v_1,v_2,v_3\}$ is a linearly independent set. {\itshape Hint:} Consider a minimal linear dependence relation.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/linear-dependence-and-relations/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $V$ is a vector space, and ${\bf v}_1, {\bf v}_2, \ldots, {\bf v}_n$ are in $V$. Prove that either ${\bf v}_1, \ldots, {\bf v}_n$ are linearly independent, or there exists a number $k\leq n$ such that ${\bf v}_k$ is a linear combination of ${\bf v}_1,\ldots, {\bf v}_{k-1}$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $V$ is a vector space, and ${\bf v}_1, {\bf v}_2, \ldots, {\bf v}_n$ are in $V$. Prove that either ${\bf v}_1, \ldots, {\bf v}_n$ are linearly independent, or there exists a number $k\leq n$ such that ${\bf v}_k$ is a linear combination of ${\bf v}_1,\ldots, {\bf v}_{k-1}$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/linear-endomorphism-of-a-vector-space-of-matrices/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $M_4({\bf R})$ denote the 16-dimensional real vector space of $4\times 4$ matrices with real entries, in which the vectors are represented as matrices. Let $T:M_4({\bf R})\to M_4({\bf R})$ be the linear transformation defined by $T(A)=A-A^{\top}$.

1. Determine the dimension of $\operatorname{ker}(T)$.
2. Determine the dimension of $\operatorname{im}(T)$.

> [!info]- View $\LaTeX$ code
> ```
> Let $M_4({\bf R})$ denote the 16-dimensional real vector space of $4\times 4$ matrices with real entries, in which the vectors are represented as matrices. Let $T:M_4({\bf R})\to M_4({\bf R})$ be the linear transformation defined by $T(A)=A-A^{\top}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Determine the dimension of $\operatorname{ker}(T)$.
> 	\item Determine the dimension of $\operatorname{im}(T)$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/matrix-representing-a-linear-transformation/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $V$ be a vector space with basis ${\bf v}_0,\ldots, {\bf v}_n$ and let $a_0,\ldots, a_n$ be scalars. Define a linear transformation $T:V\to V$ by the rules $T({\bf v}_i)={\bf v}_{i+1}$ if $i<n$, and $T({\bf v}_n)=a_0{\bf v}_0+a_1{\bf v}_1+\cdots +a_n {\bf v}_n$. You don't have to prove this defines a linear transformation. Determine the matrix for $T$ with respect to the basis ${\bf v}_0,\ldots, {\bf v}_n$, and determine the characteristic polynomial of $T$.

> [!info]- View $\LaTeX$ code
> ```
> Let $V$ be a vector space with basis ${\bf v}_0,\ldots, {\bf v}_n$ and let $a_0,\ldots, a_n$ be scalars. Define a linear transformation $T:V\to V$ by the rules $T({\bf v}_i)={\bf v}_{i+1}$ if $i<n$, and $T({\bf v}_n)=a_0{\bf v}_0+a_1{\bf v}_1+\cdots +a_n {\bf v}_n$. You don't have to prove this defines a linear transformation. Determine the matrix for $T$ with respect to the basis ${\bf v}_0,\ldots, {\bf v}_n$, and determine the characteristic polynomial of $T$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/numerical-range-of-a-linear-transformation/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $T$ is a linear transformation on a finite-dimensional complex inner-product space $V$. Let $I$ denote the identity transformation on $V$. The **numerical range** of $T$ is the subset of ${\bf C}$ defined by

$\operatorname{W}(T)=\{\langle T(x),x\rangle \,|\, x\in V,\quad \|x\|=1\}.$

1. Show that $\operatorname{W}(T+cI)=\operatorname{W}(T)+c$ for every $c\in {\bf C}$.
2. Show that $\operatorname{W}(cT)=c\operatorname{W}(T)$ for every $c\in {\bf C}$.
3. Show that the eigenvalues of $T$ are contained in $\operatorname{W}(T)$.
4. Let $\mathcal{B}$ be an orthonormal basis for $V$. Show that the diagonal entries of $[T]_{\mathcal{B}}$ are contained in $\operatorname{W}(T)$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $T$ is a linear transformation on a finite-dimensional complex inner-product space $V$. Let $I$ denote the identity transformation on $V$. The {\bfseries numerical range} of $T$ is the subset of ${\bf C}$ defined by
> \[
> 	\operatorname{W}(T)=\{\langle T(x),x\rangle \,|\, x\in V,\quad \|x\|=1\}.
> \]
> 
> \medskip
> \begin{enumerate}[label=(\alph*)]
> 	\item Show that $\operatorname{W}(T+cI)=\operatorname{W}(T)+c$ for every $c\in {\bf C}$.
> 	\item Show that $\operatorname{W}(cT)=c\operatorname{W}(T)$ for every $c\in {\bf C}$.
> 	\item Show that the eigenvalues of $T$ are contained in $\operatorname{W}(T)$.
> 	\item Let $\mathcal{B}$ be an orthonormal basis for $V$. Show that the diagonal entries of $[T]_{\mathcal{B}}$ are contained in $\operatorname{W}(T)$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/projections-and-adjoints/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $V$ be a vector space and $T:V\to V$ be a linear transformation.

1. Prove that if $T$ is a projection (i.e., $T^2=T$), then $V$ can be decomposed into the internal direct sum $V=\operatorname{null}(T)\oplus \operatorname{range}(T)$.
2. Suppose $V$ is an inner product space and $T^*$ is the adjoint of $T$ with respect to the inner product. Show that $\operatorname{null}(T^*)$ is the orthogonal complement of $\operatorname{range}(T)$.
3. Suppose $V$ is an inner product space and $T$ is an orthogonal projection, i.e., a projection for which the null space and range are orthogonal. Show that $T$ is self adjoint.

> [!info]- View $\LaTeX$ code
> ```
> Let $V$ be a vector space and $T:V\to V$ be a linear transformation.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that if $T$ is a projection (i.e., $T^2=T$), then $V$ can be decomposed into the internal direct sum $V=\operatorname{null}(T)\oplus \operatorname{range}(T)$.
> 	\item Suppose $V$ is an inner product space and $T^*$ is the adjoint of $T$ with respect to the inner product. Show that $\operatorname{null}(T^*)$ is the orthogonal complement of $\operatorname{range}(T)$.
> 	\item Suppose $V$ is an inner product space and $T$ is an orthogonal projection, i.e., a projection for which the null space and range are orthogonal. Show that $T$ is self adjoint.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/properties-of-transpose/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A$ be a real $n\times n$ matrix and let $A^{\top}$ denote its transpose.

1. Prove that $(A{\bf v})\cdot {\bf w}= {\bf v}\cdot (A^{\top}{\bf w})$ for all vectors ${\bf v},{\bf w}\in {\bf R}^n$. *Hint:* Recall that the dot product ${\bf u}\cdot {\bf v}$ equals the matrix product ${\bf u}^{\top}{\bf v}$.
2. Suppose now $A$ is also symmetric, i.e., that $A^{\top} = A$. Also suppose ${\bf v}$ and ${\bf w}$ are eigenvectors of $A$ with different eigenvalues. Prove that ${\bf v}$ and ${\bf w}$ are orthogonal.

> [!info]- View $\LaTeX$ code
> ```
> Let $A$ be a real $n\times n$ matrix and let $A^{\top}$ denote its transpose.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $(A{\bf v})\cdot {\bf w}= {\bf v}\cdot (A^{\top}{\bf w})$ for all vectors ${\bf v},{\bf w}\in {\bf R}^n$. {\itshape Hint:} Recall that the dot product ${\bf u}\cdot {\bf v}$ equals the matrix product ${\bf u}^{\top}{\bf v}$.
> 	\item Suppose now $A$ is also symmetric, i.e., that $A^{\top} = A$. Also suppose ${\bf v}$ and ${\bf w}$ are eigenvectors of $A$ with different eigenvalues. Prove that ${\bf v}$ and ${\bf w}$ are orthogonal.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/skew-symmetric-matrices/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




A real $n\times n$ matrix $A$ is called **skew-symmetric** if $A^{\top}=-A$. Let $V_n$ be the set of all skew-symmetric matrices in $\operatorname{M}_n({\bf R})$. Recall that $\operatorname{M}_n({\bf R})$ is an $n^2$-dimensional ${\bf R}$-vector space with standard basis $\left\{e_{ij}\,|\, 1\leq i,j\leq n\right\}$, where $e_{ij}$ is the $n\times n$ matrix with a 1 in the $(i,j)$-position and zeros everywhere else.

1. Show $V_n$ is a subspace of $\operatorname{M}_n({\bf R})$.
2. Find an ordered basis $\mathcal{B}$ for the space $V_3$ of all skew-symmetric $3\times 3$ matrices.

> [!info]- View $\LaTeX$ code
> ```
> A real $n\times n$ matrix $A$ is called {\bfseries skew-symmetric} if $A^{\top}=-A$. Let $V_n$ be the set of all skew-symmetric matrices in $\operatorname{M}_n({\bf R})$. Recall that $\operatorname{M}_n({\bf R})$ is an $n^2$-dimensional ${\bf R}$-vector space with standard basis $\left\{e_{ij}\,|\, 1\leq i,j\leq n\right\}$, where $e_{ij}$ is the $n\times n$ matrix with a 1 in the $(i,j)$-position and zeros everywhere else.
> \begin{enumerate}[label=\alph*)]
> 	\item Show $V_n$ is a subspace of $\operatorname{M}_n({\bf R})$.
> 	\item Find an ordered basis $\mathcal{B}$ for the space $V_3$ of all skew-symmetric $3\times 3$ matrices.
> \end{enumerate}
> ```

</div></div>


</div></div>


> [!summary]- Pool problems in group theory
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/pool-problems-in-group-theory/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-condition-to-be-non-cyclic/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group. Prove that $G$ is non-cyclic if and only if $G$ is the union of its proper subgroups.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group. Prove that $G$ is non-cyclic if and only if $G$ is the union of its proper subgroups.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-condition-under-which-a-group-must-be-abelian-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group, and $G\times G$ the direct product. The set $D=\{(g,g,)\,\mid \, g\in G\}$ is a subgroup of $G\times G$. Prove that if $D$ is normal in $G\times G$ then $G$ is abelian.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group, and $G\times G$ the direct product. The set $D=\{(g,g,)\mid g\in G\}$ is a subgroup of $G\times G$. Prove that if $D$ is normal in $G\times G$ then $G$ is abelian.
>```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-dihedral-group-that-is-not-an-internal-direct-product/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




The dihedral group, $D_8$, is the group of eight rigid symmetries of a square. Prove that $D_8$ is not the internal direct product of two of its proper subgroups.

> [!info]- View $\LaTeX$ code
> ```
> The dihedral group, $D_8$, is the group of eight rigid symmetries of a square. Prove that $D_8$ is not the internal direct product of two of its proper subgroups.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-group-isomorphic-to-a-subgroup-of-a-direct-product-of-quotient-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a finite group and $H,K\mathrel{\unlhd}G$ be normal subgroups of relatively prime order. Prove that $G$ is isomorphic to a subgroup of $G/H\times G/K$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a finite group and $H,K\mathrel{\unlhd}G$ be normal subgroups of relatively prime order. Prove that $G$ is isomorphic to a subgroup of $G/H\times G/K$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-group-isomorphic-to-an-internal-direct-product/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a group that contains normal subgroups $H,K\unlhd G$ with $H\cap K=\{e\}$ and $HK=G$. Prove that $G\cong H\times K$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a group that contains normal subgroups $H,K\unlhd G$ with $H\cap K=\{e\}$ and $HK=G$. Prove that $G\cong H\times K$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-group-of-upper-triangular-matrices/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be the group of upper-triangular real matrices $\begin{bmatrix} a & b \\ 0 & d\end{bmatrix}$ with $a,d\neq 0$, under matrix multiplication. Let $S$ be the subset of $G$ defined by $d=1$. Show that $S$ is normal and that $G/S\cong {\bf R}^{\times}$, the multiplicative group of nonzero real numbers.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be the group of upper-triangular real matrices $\begin{bmatrix} a & b \\ 0 & d\end{bmatrix}$ with $a,d\neq 0$, under matrix multiplication. Let $S$ be the subset of $G$ defined by $d=1$. Show that $S$ is normal and that $G/S\cong {\bf R}^{\times}$, the multiplicative group of nonzero real numbers.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-group-with-a-trivial-automorphism-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group and suppose $\operatorname{Aut}(G)$ is trivial.

1. Show that $G$ is abelian.
2. Show that for any abelian group $H$, the **inversion map** $\phi(h)=h^{-1}$ is an automorphism.
3. Use parts (1) and (2) above to show that $g^2$ is the identity element for every $g\in G$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group and suppose $\operatorname{Aut}(G)$ is trivial.
> \begin{enumerate}[label=(\alph*)]
> 	\item Show that $G$ is abelian.
> 	\item Show that for any abelian group $H$, the {\bfseries inversion map} $\phi(h)=h^{-1}$ is an automorphism.
> 	\item Use parts (a) and (b) above to show that $g^2$ is the identity element for every $g\in G$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/the-third-isomorphism-theorem/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




1. Suppose $N$ is a normal subgroup of a group $G$ and $\pi_N:G\to G/N$ is the usual projection homomorphism, defined by $\pi_N(g)=gN$. Prove that if $\phi:G\to H$ is any homomorphism with $N\leq \ker(\phi)$, then there exists a unique homomorphism $\psi:G/N\to H$ such that $\phi = \psi\circ \pi_N$. (You must explicitly define $\psi$, show it is well defined, show $\phi=\psi\circ\pi_N$, and show that $\psi$ is uniquely determined.)
2. Prove the:
   **Third Isomorphism Theorem.** If $M, N\unlhd G$ with $N\leq M$, then $(G/N)/(M/N)\cong G/M$.

> [!info]- View $\LaTeX$ code
> ```
> \begin{enumerate}[label=\alph*)]
> 	\item Suppose $N$ is a normal subgroup of a group $G$ and $\pi_N:G\to G/N$ is the usual projection homomorphism, defined by $\pi_N(g)=gN$. Prove that if $\phi:G\to H$ is any homomorphism with $N\leq \ker(\phi)$, then there exists a unique homomorphism $\psi:G/N\to H$ such that $\phi = \psi\circ \pi_N$. (You must explicitly define $\psi$, show it is well defined, show $\phi=\psi\circ\pi_N$, and show that $\psi$ is uniquely determined.)
> 	\item Prove the:
> 		\medskip
> 		{\bfseries Third Isomorphism Theorem.} If $M, N\unlhd G$ with $N\leq M$, then $(G/N)/(M/N)\cong G/M$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-group-with-a-trivial-automorphism-group-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group and suppose $\operatorname{Aut}(G)$ is trivial.

1. Show that $G$ is abelian.
2. Show that for any abelian group $H$, the **inversion map** $\phi(h)=h^{-1}$ is an automorphism.
3. Use parts (1) and (2) above to show that $g^2$ is the identity element for every $g\in G$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group and suppose $\operatorname{Aut}(G)$ is trivial.
> \begin{enumerate}[label=(\alph*)]
> 	\item Show that $G$ is abelian.
> 	\item Show that for any abelian group $H$, the {\bfseries inversion map} $\phi(h)=h^{-1}$ is an automorphism.
> 	\item Use parts (a) and (b) above to show that $g^2$ is the identity element for every $g\in G$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/a-property-of-the-order-of-an-element/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group and $a\in G$ be an element. Let $n\in {\bf N}$ be the smallest positive number such that $a^n=e$, where $e$ is the identity element. Show that the set

$\{e,a,a^2,\ldots, a^{n-1}\}$

contains no repetitions.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group and $a\in G$ be an element. Let $n\in {\bf N}$ be the smallest positive number such that $a^n=e$, where $e$ is the identity element. Show that the set
> \[
> 	\{e,a,a^2,\ldots, a^{n-1}\}
> \]
> contains no repetitions.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/an-automorphism-of-a-group-of-odd-order/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a finite abelian group of odd order. Let $\phi:G\to G$ be the function defined by $\phi(g)=g^2$ for all $g\in G$. Prove that $\phi$ is an automorphism.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a finite abelian group of odd order. Let $\phi:G\to G$ be the function defined by $\phi(g)=g^2$ for all $g\in G$. Prove that $\phi$ is an automorphism.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/another-condition-for-a-group-to-be-abelian/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group with exactly two conjugacy classes. Prove that $G$ is abelian, and describe all such groups (with proof).

> [!info]- View $\LaTeX$ code
> ```
>  Let $G$ be a group with exactly two conjugacy classes. Prove that $G$ is abelian, and describe all such groups (with proof).
>```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/automorphisms-of-a-finite-cyclic-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let ${\bf Z}_n$ denote the cyclic group of order $n$. Suppose $m\in {\bf N}$ is relatively prime to $n$. Define the function $\mu_m:{\bf Z}_n\to {\bf Z}_n$ by $m[a]_n=[ma]_n$.

1. Prove that the map $\mu_m$ is a well-defined automorphism of ${\bf Z}_n$.
2. Prove that any automorphism of ${\bf Z}_n$ has the form $\mu_m$ for some $m$.

> [!info]- View $\LaTeX$ code
> ```
> Let ${\bf Z}_n$ denote the cyclic group of order $n$. Suppose $m\in {\bf N}$ is relatively prime to $n$. Define the function $\mu_m:{\bf Z}_n\to {\bf Z}_n$ by $m[a]_n=[ma]_n$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that the map $\mu_m$ is a well-defined automorphism of ${\bf Z}_n$.
> 	\item Prove that any automorphism of ${\bf Z}_n$ has the form $\mu_m$ for some $m$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/closely-related-subgroups-of-a-finite-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a finite group and $n>1$ an integer such that $(ab)^n=a^n b^n$ for all $a,b\in G$. Let

$G_n=\{c\in G\mid c^n=e\}\qquad\text{and}\qquad G^n=\{c^n\mid c\in G\}$

You may take for granted that these are subgroups. Prove that both $G_n$ and $G^n$ are normal in $G$, and $|G^n|=[G:G_n]$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a finite group and $n>1$ an integer such that $(ab)^n=a^n b^n$ for all $a,b\in G$. Let
>  \[
> 	 G_n=\{c\in G\mid c^n=e\}\qquad\text{and}\qquad G^n=\{c^n\mid c\in G\}
> \]
> You may take for granted that these are subgroups. Prove that both $G_n$ and $G^n$ are normal in $G$, and $|G^n|=[G:G_n]$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/comparing-cosets/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a group, $H\leq G$ a subgroup, and $a,b\in G$. Prove that the following are equivalent:

1. $aH=bH$
2. $b\in aH$
3. $b^{-1}a\in H$

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a group, $H\leq G$ a subgroup, and $a,b\in G$. Prove that the following are equivalent:
> \begin{enumerate}[label=\alph*)]
> 	\item $aH=bH$
> 	\item $b\in aH$
> 	\item $b^{-1}a\in H$
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/computations-with-inner-automorphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group, and let $\operatorname{Aut}(G)$ denote the group of automorphisms of $G$. There is a homomorphism $\gamma:G\to \operatorname{Aut}(G)$ that takes $s\in G$ to the automorphism $\gamma_s$ defined by $\gamma_s(t)=sts^{-1}$.
1. Prove rigorously, possibly with induction, that is $\gamma_s(t)=t^b$, then $\gamma_{s^n}(t)=t^{b^n}$.
2. Suppose $s\in G$ has order 5, and $sts^{-1}=t^2$. Find the order of $t$. Justify your answer.


> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group, and let $\operatorname{Aut}(G)$ denote the group of automorphisms of $G$. There is a homomorphism $\gamma:G\to \operatorname{Aut}(G)$ that takes $s\in G$ to the automorphism $\gamma_s$ defined by $\gamma_s(t)=sts^{-1}$.
> 	\begin{enumerate}[label=\alph*)]
> 		\item Prove rigorously, possibly with induction, that is $\gamma_s(t)=t^b$, then $\gamma_{s^n}(t)=t^{b^n}$.
> 		\item Suppose $s\in G$ has order 5, and $sts^{-1}=t^2$. Find the order of $t$. Justify your answer.
> 	\end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/elements-of-finite-order/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be an abelian group and $G_T$ be the set of elements of finite order in $G$.

1. Prove that $G_T$ is a subgroup of $G$.
2. Prove that every non-identity element of $G/G_T$ has infinite order.
3. Characterize the elements of $G_T$ when $G={\bf R}/{\bf Z}$, where ${\bf R}$ is the additive group of real numbers.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be an abelian group and $G_T$ be the set of elements of finite order in $G$.
> 
> \medskip
> \begin{enumerate}[label=(\alph*)]
> 	\item Prove that $G_T$ is a subgroup of $G$.
> 	\item Prove that every non-identity element of $G/G_T$ has infinite order.
> 	\item Characterize the elements of $G_T$ when $G={\bf R}/{\bf Z}$, where ${\bf R}$ is the additive group of real numbers.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/elements-of-order-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a finite group of even order.

1. Prove that an element in $G$ has order dividing 2 if and only if it is its own inverse.
2. Prove that the number of elements in $G$ of order 2 is odd.
3. Use (2) to show $G$ must contain a subgroup of order 2.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a finite group of even order.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that an element in $G$ has order dividing 2 if and only if it is its own inverse.
> 	\item Prove that the number of elements in $G$ of order 2 is odd.
> 	\item Use (b) to show $G$ must contain a subgroup of order 2.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/existence-of-a-normal-subgroup-of-finite-index/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $N$ be a finite normal subgroup of $G$. Prove there is a normal subgroup $M$ of $G$ such that $[G:M]$ is finite and $nm=mn$ for all $n\in N$ and $m\in M$.

 *Hint:* You may use the fact that the centralizer $C(h):=\{g\in G\mid ghg^{-1}=h\}$ is a subgroup of $G$.)

> [!info]- View $\LaTeX$ code
> ```
> Let $N$ be a finite normal subgroup of $G$. Prove there is a normal subgroup $M$ of $G$ such that $[G:M]$ is finite and $nm=mn$ for all $n\in N$ and $m\in M$.
> 
> \medskip
> \noindent ({\itshape Hint:} You may use the fact that the centralizer $C(h):=\{g\in G\mid ghg^{-1}=h\}$ is a subgroup of $G$.)
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/existence-of-an-identity-element-in-a-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a nonempty finite set that has an associative pairing $G\times G\to G$, written $(x,y)\mapsto x\cdot y$. Suppose this pairing satisfies left and right cancellation: $x\cdot y = x\cdot y'$ implies $y=y'$, and $x\cdot y = x'\cdot y$ implies $x=x'$. Prove there exists an element $e$ of $G$ such that for all $x\in G$, $e\cdot x = x\cdot e = x$. Justify your reasoning as carefully as possible.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a nonempty finite set that has an associative pairing $G\times G\to G$, written $(x,y)\mapsto x\cdot y$. Suppose this pairing satisfies left and right cancellation: $x\cdot y = x\cdot y'$ implies $y=y'$, and $x\cdot y = x'\cdot y$ implies $x=x'$. Prove there exists an element $e$ of $G$ such that for all $x\in G$, $e\cdot x = x\cdot e = x$. Justify your reasoning as carefully as possible.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/existence-of-automorphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Show that every finite group with more than two elements has a nontrivial automorphism.

> [!info]- View $\LaTeX$ code
> ```
> Show that every finite group with more than two elements has a nontrivial automorphism.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/image-of-a-normal-subgroup-and-induced-morphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $\sigma:G\to H$ be a group epimorphism. Let $N$ be a normal subgroup of $G$ and $K=\sigma(N)$, the image of $N$ in $H$.
1. Prove that $K$ is a normal subgroup of $H$. Give an example to show that this is not true if $\sigma$ is not onto.
2. Under what conditions does $\sigma$ induce a homomorphism $G/N\to H/K$, and when is this an isomorphism? Prove your answer.

> [!info]- View $\LaTeX$ code
> ```
> Let $\sigma:G\to H$ be a group epimorphism. Let $N$ be a normal subgroup of $G$ and $K=\sigma(N)$, the image of $N$ in $H$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $K$ is a normal subgroup of $H$. Give an example to show that this is not true if $\sigma$ is not onto.
> 	\item Under what conditions does $\sigma$ induce a homomorphism $G/N\to H/K$, and when is this an isomorphism? Prove your answer.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/image-of-the-identity-is-the-identity/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G_1$ and $G_2$ are groups, with identity elements $e_1$ and $e_2$, respectively. Prove that if $\phi:G_1\to G_2$ is an isomorphism, then $\phi(e_1)=e_2$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G_1$ and $G_2$ are groups, with identity elements $e_1$ and $e_2$, respectively. Prove that if $\phi:G_1\to G_2$ is an isomorphism, then $\phi(e_1)=e_2$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/indices-and-intersections/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $A$ and $B$ are subgroups of a group $G$, and suppose $B$ is of finite index in $G$.

1. Show that the index of $A\cap B\leq A$ is finite, and in fact $|A:A\cap B|\leq |G:B|$. *Hint:* Find a set map $A/A\cap B\to G/B$.
2. Prove that equality holds in (a) if and only if $G=AB$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $A$ and $B$ are subgroups of a group $G$, and suppose $B$ is of finite index in $G$.
> \begin{enumerate}[topsep=0.1in]
> 	\item Show that the index of $A\cap B\leq A$ is finite, and in fact $|A:A\cap B|\leq |G:B|$. {\itshape Hint:} Find a set map $A/A\cap B\to G/B$.
> 	\item Prove that equality holds in (a) if and only if $G=AB$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/inner-automorphisms-and-the-center-of-a-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group. For each $a\in G$, let $\gamma_a$ denote the automorphism of $G$ defined by $\gamma_a(b)=aba^{-1}$ for all $b\in G$. The set $\operatorname{Inn}(G)=\{\gamma_a:a\in G\}$ is a subgroup of the automorphism group of $G$, called the subgroup of **inner** automorphisms.

Prove that $\operatorname{Inn}(G)$ is isomorphic to $G/Z(G)$, where $Z(G)$ is the center of $G$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group. For each $a\in G$, let $\gamma_a$ denote the automorphism of $G$ defined by $\gamma_a(b)=aba^{-1}$ for all $b\in G$. The set $\operatorname{Inn}(G)=\{\gamma_a:a\in G\}$ is a subgroup of the automorphism group of $G$, called the subgroup of {\bfseries inner automorphisms}.
> 
> \medskip
> Prove that $\operatorname{Inn}(G)$ is isomorphic to $G/Z(G)$, where $Z(G)$ is the center of $G$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/nonexistence-of-a-simple-group-of-a-given-order/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group of order $2p$, where $p$ is an odd prime. Prove $G$ contains a nontrivial, proper normal subgroup.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group of order $2p$, where $p$ is an odd prime. Prove $G$ contains a nontrivial, proper normal subgroup.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/nonexistence-of-small-nonabelian-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Prove from the definition along that there are no nonabelian groups of order less than $5$.

> [!info]- View $\LaTeX$ code
> ```
> Prove from the definition along that there are no nonabelian groups of order less than $5$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/normal-subgroups-with-trivial-intersection/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group and $H,K\mathrel{\unlhd}G$ be normal subgroups with $H\cap K=\{e\}$. Show that each element in $H$ commutes with every element in $K$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group and $H,K\mathrel{\unlhd}G$ be normal subgroups with $H\cap K=\{e\}$. Show that each element in $H$ commutes with every element in $K$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/normality-and-the-operation-on-cosets/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group and $N$ a normal subgroup of $G$. Let $aN$ denote the left coset defined by $a\in G$, and consider the binary operation

$G/N\times G/N\to G/N$

given by $(aN, bN)\mapsto abN$.

1. Show the operation is well defined.
2. Show the operation is well defined only if the subgroup $N$ is normal.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group and $N$ a normal subgroup of $G$. Let $aN$ denote the left coset defined by $a\in G$, and consider the binary operation
> \[
> 	G/N\times G/N\to G/N
> \]
> given by $(aN, bN)\mapsto abN$.
> \begin{enumerate}[label=\alph*)]
> 	\item Show the operation is well defined.
> 	\item Show the operation is well defined only if the subgroup $N$ is normal.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/normality-and-the-operation-on-cosets-defunct/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group, $H\leq G$ a subgroup that is not normal. Prove there exist cosets $Ha$ and $Hb$ such that $HaHb\neq Hab$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group, $H\leq G$ a subgroup that is not normal. Prove there exist cosets $Ha$ and $Hb$ such that $HaHb\neq Hab$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/normalizer-of-a-subgroup/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $H$ be a subgroup of a group $G$. The **normalizer** of $H$ in $G$ is the set ${\bf N}_G(H)=\{g\in G\,\mid\, gH=Hg\}$.

1. Prove ${\bf N}_G(H)$ is a subgroup of $G$ containing $H$.
2. Prove ${\bf N}_G(H)$ is the largest subgroup of $G$ in which $H$ is normal.

> [!info]- View $\LaTeX$ code
> ```
> Let $H$ be a subgroup of a group $G$. The {\bfseries normalizer} of $H$ in $G$ is the set ${\bf N}_G(H)=\{g\in G\,\mid\, gH=Hg\}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove ${\bf N}_G(H)$ is a subgroup of $G$ containing $H$.
> 	\item Prove ${\bf N}_G(H)$ is the largest subgroup of $G$ in which $H$ is normal.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/normalizers-and-centralizers/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group and suppose $H\leq G$. The **normalizer** of $H$ in $G$ is defined to be $N(H)=\{g\in G\,|\, gH=Hg\}$ and the **centralizer** of $H$ in $G$ is defined to be $C(H)=\{g\in G\,|\,  gh=hg\text{ for all }h\in H\}$.

1. Prove that $N(H)$ is a subgroup of $G$.
2. Prove that $C(H)$ is a normal subgroup of $N(H)$ and that $N(H)/C(H)$ is isomorphic to a subgroup of $\operatorname{Aut}(H)$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group and suppose $H\leq G$. The {\bfseries normalizer} of $H$ in $G$ is defined to be $N(H)=\{g\in G\,|\, gH=Hg\}$ and the {\bfseries centralizer} of $H$ in $G$ is defined to be $C(H)=\{g\in G\,|\,  gh=hg\text{ for all }h\in H\}$.
> \begin{enumerate}[label=(\alph*)]
> 	\item Prove that $N(H)$ is a subgroup of $G$.
> 	\item Prove that $C(H)$ is a normal subgroup of $N(H)$ and that $N(H)/C(H)$ is isomorphic to a subgroup of $\operatorname{Aut}(H)$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/order-of-a-power-of-an-element/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a cyclic group of order $n$, and $t\in G$ is a generator.

1. Give a positive integer $d$ such that $t^{-1}=t^d$.
2. Let $c$ be an integer and let $m=\gcd(n,c)$. Prove that the order of $t^c$ is $\frac{n}{m}$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a cyclic group of order $n$, and $t\in G$ is a generator.
> \begin{enumerate}[label=\alph*)]
> 	\item Give a positive integer $d$ such that $t^{-1}=t^d$.
> 	\item Let $c$ be an integer and let $m=\gcd(n,c)$. Prove that the order of $t^c$ is $\frac{n}{m}$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/order-of-an-element-in-a-finite-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a finite group. Prove *from the definitions* that there exists a number $N$ such that $a^N=e$ for all $a\in G$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a finite group. Prove {\itshape from the definitions} that there exists a number $N$ such that $a^N=e$ for all $a\in G$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/orders-of-elements-in-a-quotient-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a group and $N\unlhd G$ is a finite normal subgroup. Prove that if $G/N$ contains an element of order $n$, then $G$ also contains an element of order $n$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a group and $N\unlhd G$ is a finite normal subgroup. Prove that if $G/N$ contains an element of order $n$, then $G$ also contains an element of order $n$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/preimage-of-a-subgroup/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $\phi:G\to G'$ is a surjective homomorphism, $H\leq G$ is a subgroup containing $\ker(\phi)$, and $H'=\phi(H)$. Prove $\phi^{-1}(H')=H$, where $\phi^{-1}(H')=\{g\in G\,\mid\, \phi(g)\in H'\}$. Make sure to state explicitly where each hypothesis is used.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $\phi:G\to G'$ is a surjective homomorphism, $H\leq G$ is a subgroup containing $\ker(\phi)$, and $H'=\phi(H)$. Prove $\phi^{-1}(H')=H$, where $\phi^{-1}(H')=\{g\in G\,\mid\, \phi(g)\in H'\}$. Make sure to state explicitly where each hypothesis is used.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/product-of-two-subgroups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group, and $H, K$ be subgroups of $G$. Let $HK=\{hk\,\mid \, h\in H, k\in K\}$ denote the set product. Prove that $HK$ is a group if and only if $HK=KH$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group, and $H, K$ be subgroups of $G$. Let $HK=\{hk\,\mid \, h\in H, k\in K\}$ denote the set product. Prove that $HK$ is a group if and only if $HK=KH$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/products-of-quotient-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a nontrivial finite group and $H,K\mathrel{\unlhd}G$ are normal subgroups with $\gcd(|H|,|K|)=1$.

1. Define a nontrivial group homomorphism $\phi:G\to G/H\times G/K$
2. Prove $G$ is isomorphic to a subgroup of $G/H\times G/K$.
3. Suppose $\gcd(m,n)=1$. Prove ${\bf Z}_{mn}\cong {\bf Z}_m\times {\bf Z}_n$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a nontrivial finite group and $H,K\mathrel{\unlhd}G$ are normal subgroups with $\gcd(|H|,|K|)=1$.
> \begin{enumerate}[label=\alph*)]
> 	\item Define a nontrivial group homomorphism $\phi:G\to G/H\times G/K$
> 	\item Prove $G$ is isomorphic to a subgroup of $G/H\times G/K$.
> 	\item Suppose $\gcd(m,n)=1$. Prove ${\bf Z}_{mn}\cong {\bf Z}_m\times {\bf Z}_n$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/projection-onto-a-quotient/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a group, $H$ and $K$ are normal subgroups of $G$, and $H\leq K$.

1. Define a group homomorphism from $K$ to $G/H$.
2. Compute the kernel of the homomorphism in (a), and apply the First Isomorphism Theorem.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a group, $H$ and $K$ are normal subgroups of $G$, and $H\leq K$.
> \begin{enumerate}[label=\alph*)]
> 	\item Define a group homomorphism from $K$ to $G/H$.
> 	\item Compute the kernel of the homomorphism in (a), and apply the First Isomorphism Theorem.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/properties-of-the-center-of-a-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a finite group and $\operatorname{Z}(G)$ denote its center.

1. Prove that if $G/\operatorname{Z}(G)$ is cyclic, then $G$ is abelian.
2. Prove that if $G$ is nonabelian, then $|\operatorname{Z}(G)|\leq \frac{1}{4}|G|$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a finite group and $\operatorname{Z}(G)$ denote its center.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that if $G/\operatorname{Z}(G)$ is cyclic, then $G$ is abelian.
> 	\item Prove that if $G$ is nonabelian, then $|\operatorname{Z}(G)|\leq \frac{1}{4}|G|$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/property-of-the-order-of-an-element/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group, $m\in {\bf N}$, and $g\in G$ be an element such that $g^m=e$. Prove that $\operatorname{o}(g)\mid m$, where $\operatorname{o}(g)$ is the order of $g$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group, $m\in {\bf N}$, and $g\in G$ be an element such that $g^m=e$. Prove that $\operatorname{o}(g)\mid m$, where $\operatorname{o}(g)$ is the order of $g$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/proving-lagrange-s-theorem/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




1. Show that if $G$ is any group (not necessarily finite) and $H$ is a subgroup, then $G$ is a disjoint union of left cosets of $H$.
2. State and prove Lagrange's Theorem for finite groups.

> [!info]- View $\LaTeX$ code
> ```
> \begin{enumerate}[label=(\alph*)]
> 	\item Show that if $G$ is any group (not necessarily finite) and $H$ is a subgroup, then $G$ is a disjoint union of left cosets of $H$.
> 	\item State and prove Lagrange's Theorem for finite groups.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/stabilizer-of-a-coset/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group and $H\leq G$ a subgroup. For each coset $aH$ of $H$ in $G$, define the set

$G_{aH}=\{b\in G\,|\,baH=aH\}.$

1. Prove that $G_{aH}$ is a subgroup of $G$.
2. Suppose that $H$ is normal in $G$. Prove that $G_{aH}=H$.

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group and $H\leq G$ a subgroup. For each coset $aH$ of $H$ in $G$, define the set
> \[
> 	G_{aH}=\{b\in G\,|\,baH=aH\}.
> \]
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $G_{aH}$ is a subgroup of $G$.
> 	\item Suppose that $H$ is normal in $G$. Prove that $G_{aH}=H$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/subgroups-of-a-group-of-even-order/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $G$ be a group of order $2n$ for some positive integer $n > 1$.
1. Prove there exists a subgroup $K$ of $G$ of order $2$.
2. Suppose $K$ in (a) is a *normal* subgroup. Prove that $K$ is contained in the center $\operatorname{Z}(G)$. (Recall $\operatorname{Z}(G)=\{a\in G\mid ab=ba\text{ for all }b\in G\}$.)

> [!info]- View $\LaTeX$ code
> ```
> Let $G$ be a group of order $2n$ for some positive integer $n > 1$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove there exists a subgroup $K$ of $G$ of order $2$.
> 	\item Suppose $K$ in (a) is a \underline{normal} subgroup. Prove that $K$ is contained in the center $\operatorname{Z}(G)$. (Recall $\operatorname{Z}(G)=\{a\in G\mid ab=ba\text{ for all }b\in G\}$.)
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/group-theory/the-integers-as-a-subgroup-of-the-rationals/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




The additive group ${\bf Z}=({\bf Z},+)$ of rational integers is a subgroup of the additive group ${\bf Q}=({\bf Q},+)$. Show that ${\bf Q}$ has infinite index in ${\bf Q}$.

> [!info]- View $\LaTeX$ code
> ```
> The additive group ${\bf Z}=({\bf Z},+)$ of rational integers is a subgroup of the additive group ${\bf Q}=({\bf Q},+)$. Show that ${\bf Z}$ has infinite index in ${\bf Q}$.
> ```

</div></div>


</div></div>


> [!summary]- Pool problems in ring theory
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/pool-problems-in-ring-theory/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/the-structure-of-the-integers-as-both-a-group-and-a-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Consider the additive group of integers ${\bf Z}$.
1. Prove that every subgroup of ${\bf Z}$ is a cyclic group.
2. Prove that every homomorphic image of ${\bf Z}$ is a cyclic group.
3. Now consider the *ring* ${\bf Z}$. Exhibit a prime ideal of ${\bf Z}$ that is not maximal.

> [!info]- View $\LaTeX$ code
> ```
> Consider the additive group of integers ${\bf Z}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that every subgroup of ${\bf Z}$ is a cyclic group.
> 	\item Prove that every homomorphic image of ${\bf Z}$ is a cyclic group.
> 	\item Now consider the {\itshape ring} ${\bf Z}$. Exhibit a prime ideal of ${\bf Z}$ that is not maximal.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/a-non-pid/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be an integral domain. Suppose that $a$ and $b$ are non-associate irreducible elements in $R$, and the ideal $(a,b)$ generated by $a$ and $b$ is a proper ideal. Show that $R$ is not a principal ideal domain (PID).

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be an integral domain. Suppose that $a$ and $b$ are non-associate irreducible elements in $R$, and the ideal $(a,b)$ generated by $a$ and $b$ is a proper ideal. Show that $R$ is not a principal ideal domain (PID).
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/a-ring-in-which-all-prime-ideals-are-maximal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with identity.  Suppose that for every $a\in R$ there is an integer $n\geq 2$ such that $a^n=a$. Show that every prime ideal of $R$ is maximal.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with identity.  Suppose that for every $a\in R$ there is an integer $n\geq 2$ such that $a^n=a$. Show that every prime ideal of $R$ is maximal.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/automorphisms-of-a-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with $1$, and $\sigma:R\to R$ be a ring automorphism.
1. Show that $F=\{r\in R\mid \sigma(r)=r\}$ is a subring of $R$ (with $1$).
2. Show that if $\sigma^2$ is the identity map on $R$, then each element of $R$ is the root of a monic polynomial of degree 2 in $F[x]$, where $F$ is as in (a).

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with $1$, and $\sigma:R\to R$ be a ring automorphism.
> \begin{enumerate}[label=\alph*)]
> 	\item Show that $F=\{r\in R\mid \sigma(r)=r\}$ is a subring of $R$ (with $1$).
> 	\item Show that if $\sigma^2$ is the identity map on $R$, then each element of $R$ is the root of a monic polynomial of degree 2 in $F[x]$, where $F$ is as in (a).
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/boolean-algebras/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




A **Boolean algebra** is a ring $A$ with $1$ satisfying $x^2=x$ for all $x\in A$. Prove that in a Boolean algebra $A$:
1. $2x=0$ for all $x\in A$.
2. Every prime ideal $\mathfrak{p}$ is maximal, and $A/\mathfrak{p}$ is a field with two elements.

> [!info]- View $\LaTeX$ code
> ```
> A {\bfseries Boolean algebra} is a ring $A$ with $1$ satisfying $x^2=x$ for all $x\in A$. Prove that in a Boolean algebra $A$:
> 	\begin{enumerate}[label=\alph*)]
> 		\item $2x=0$ for all $x\in A$.
> 		
> 		\item Every prime ideal $\mathfrak{p}$ is maximal, and $A/\mathfrak{p}$ is a field with two elements.
> 	\end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/boolean-rings-are-commutative/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a ring such that $r^2=r$ for every element $r\in R$.

1. Prove $r=-r$ for every element $r\in R$.
2. Show $R$ must be commutative. *Hint:* Consider $(a+b)^2$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $R$ is a ring such that $r^2=r$ for every element $r\in R$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove $r=-r$ for every element $r\in R$.
> 	\item Show $R$ must be commutative. {\itshape Hint:} Consider $(a+b)^2$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/characteristic-of-a-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with $1$. The **characteristic** $\operatorname{char}(R)$ of $R$ is the unique integer $n\geq 0$ such that $\langle n\rangle \subset {\bf Z}$ is the kernel of the homomorphism $\theta:{\bf Z}\to R$ given by

$\theta(m)=\begin{cases} \underbrace{1_R+\cdots +1_R}_{m}, & \text{ if }m\geq 0 \\ \underbrace{-1_R+\cdots+-1_R}_{|m|}, & \text{ if }m<0\end{cases}$

1. Prove that if $f:R\to S$ is a monomorphism of commutative rings with $1$, then $\operatorname{char}(R)=\operatorname{char}(S)$.
2. Prove by given an example that $\operatorname{char}(R)$ is not always preserved by ring homomorphisms.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with $1$. The {\bfseries characteristic} $\operatorname{char}(R)$ of $R$ is the unique integer $n\geq 0$ such that $\langle n\rangle \subset {\bf Z}$ is the kernel of the homomorphism $\theta:{\bf Z}\to R$ given by
> \[
> 	\theta(m)=\begin{cases} \underbrace{1_R+\cdots +1_R}_{m}, & \text{ if }m\geq 0 \\ \underbrace{-1_R+\cdots+-1_R}_{|m|}, & \text{ if }m<0\end{cases}
> \]
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that if $f:R\to S$ is a monomorphism of commutative rings with $1$, then $\operatorname{char}(R)=\operatorname{char}(S)$.
> 	\item Prove by given an example that $\operatorname{char}(R)$ is not always preserved by ring homomorphisms.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/characteristic-of-a-ring-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




1. Prove that for every commutative ring with unity, $R$, there is a unique ring homomorphism $\phi_R: {\bf Z}\to R$, and that $\ker(\phi_R)=\langle d_R\rangle$ for some unique nonnegative integer $d_R$. The number $d_R$ is called the **characteristic** of $R$ and is denoted $\operatorname{char}(R)$.
2. Suppose $F_1$ and $F_2$ are fields for which there exists a ring homomorphism $f:F_1\to F_2$. Prove that $\operatorname{char}(F_1)=\operatorname{char}(F_2)$.

> [!info]- View $\LaTeX$ code
> ```
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that for every commutative ring with unity, $R$, there is a unique ring homomorphism $\phi_R: {\bf Z}\to R$, and that $\ker(\phi_R)=\langle d_R\rangle$ for some unique nonnegative integer $d_R$. The number $d_R$ is called the {\bfseries characteristic} of $R$ and is denoted $\operatorname{char}(R)$.
> 	\item Suppose $F_1$ and $F_2$ are fields for which there exists a ring homomorphism $f:F_1\to F_2$. Prove that $\operatorname{char}(F_1)=\operatorname{char}(F_2)$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/dimension-of-a-pid/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A$ be a commutative ring with $1$. The **dimension** of $A$ is the maximum length $d$ of a chain of prime ideals $\mathfrak{p}_0\subsetneq \mathfrak{p}_1\subsetneq \cdots \subsetneq \mathfrak{p}_d$. Prove that if $A$ is a PID, the dimension of $A$ is at most 1.

> [!info]- View $\LaTeX$ code
> ```
> Let $A$ be a commutative ring with $1$. The {\bfseries dimension} of $A$ is the maximum length $d$ of a chain of prime ideals $\mathfrak{p}_0\subsetneq \mathfrak{p}_1\subsetneq \cdots \subsetneq \mathfrak{p}_d$. Prove that if $A$ is a PID, the dimension of $A$ is at most 1.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/euclidean-domains-are-pi-ds/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Prove that every Euclidean domain is a principal ideal domain.

> [!info]- View $\LaTeX$ code
> ```
> Prove that every Euclidean domain is a principal ideal domain.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/existence-of-an-identity-element-in-a-finite-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a finite ring with no nontrivial zero-divisors. Prove that $R$ contains an element $1$ satisfying $1\cdot a=a\cdot 1=a$ for all $a\in R$.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $R$ is a finite ring with no nontrivial zero-divisors. Prove that $R$ contains an element $1$ satisfying $1\cdot a=a\cdot 1=a$ for all $a\in R$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/generator-for-a-field-extension/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $F$ be a field and let $\alpha$ be an element that generates a field extension of $F$ of degree five. Prove that $\alpha^2$ generates the same extension.

> [!info]- View $\LaTeX$ code
> ```
> Let $F$ be a field and let $\alpha$ be an element that generates a field extension of $F$ of degree five. Prove that $\alpha^2$ generates the same extension.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/ideals-in-a-polynomial-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with $1$. Use theorems in ring theory to prove:
1. $\langle x\rangle$ is a prime ideal in $R[x]$ if and only if $R$ is an integral domain.
2. $\langle x\rangle$ is a maximal ideal in $R[x]$ if and only if $R$ is a field.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with $1$. Use theorems in ring theory to prove:
> \begin{enumerate}[label=\alph*)]
> 	\item $\langle x\rangle$ is a prime ideal in $R[x]$ if and only if $R$ is an integral domain.
> 	\item $\langle x\rangle$ is a maximal ideal in $R[x]$ if and only if $R$ is a field.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/ideals-in-a-polynomial-ring-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $F$ be a field and $F[x]$ be the polynomial ring, which is a principal ideal domain. Let $R=\{f\in F[x]:f'\in (x)\}$, where $(x)\subset F[x]$ is the ideal generated by $x$, and $f'$ is the (formal) derivative of the polynomial $f$. It is a fact that $R$ is a subring of $F[x]$.

1. Prove that $x^2$ and $x^3$ are irreducible elements of $R$.
2. Let $(x^2,x^3)$ be the ideal in $R$ generated by $x^2$ and $x^3$. Prove this is a proper ideal of $R$.
3. Prove that $(x^2,x^3)$ is not a *principal* ideal of $R$.

> [!info]- View $\LaTeX$ code
> ```
> Let $F$ be a field and $F[x]$ be the polynomial ring, which is a principal ideal domain. Let $R=\{f\in F[x]:f'\in (x)\}$, where $(x)\subset F[x]$ is the ideal generated by $x$, and $f'$ is the (formal) derivative of the polynomial $f$. It is a fact that $R$ is a subring of $F[x]$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $x^2$ and $x^3$ are irreducible elements of $R$.
> 	\item Let $(x^2,x^3)$ be the ideal in $R$ generated by $x^2$ and $x^3$. Prove this is a proper ideal of $R$.
> 	\item Prove that $(x^2,x^3)$ is not a {\itshape principal} ideal of $R$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/idempotent-elements-in-a-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with 1 and suppose $e\in R$ is **idempotent**, i.e., satisfies $e^2=e$.

1. Prove that $1-e$ is also idempotent.
2. Suppose $e\neq 0, 1$. Show that $Re$ and $R(1-e)$ are proper ideals of $R$.
3. Prove there is an isomorphism $R\cong Re\times R(1-e)$.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with 1 and suppose $e\in R$ is {\bfseries idempotent}, i.e., satisfies $e^2=e$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $1-e$ is also idempotent.
> 	\item Suppose $e\neq 0, 1$. Show that $Re$ and $R(1-e)$ are proper ideals of $R$.
> 	\item Prove there is an isomorphism $R\cong Re\times R(1-e)$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/idempotent-elements-in-a-ring-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




An element $r$ of a ring $R$ is said to be **idempotent** if $r^2=r$. Suppose that $R$ is a commutative ring with unity containing an idempotent element $e$.

1. Prove that $1-e$ is also idempotent.
2. Prove that $eR$ and $(1-e)R$ are both ideals in $R$ and that
   
   $R\cong eR\times (1-e)R.$
   
3. Prove that if $R$ has a unique maximal ideal, then the only idempotent elements in $R$ are 0 and 1.

> [!info]- View $\LaTeX$ code
> ```
> An element $r$ of a ring $R$ is said to be {\bfseries idempotent} if $r^2=r$. Suppose that $R$ is a commutative ring with unity containing an idempotent element $e$.
> 
> \medskip
> \begin{enumerate}[label=(\alph*)]
> 	\item Prove that $1-e$ is also idempotent.
> 	\item Prove that $eR$ and $(1-e)R$ are both ideals in $R$ and that
> 	\[
> 		R\cong eR\times (1-e)R.
> 	\]
> 	\item Prove that if $R$ has a unique maximal ideal, then the only idempotent elements in $R$ are 0 and 1.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/image-of-the-identity-element-under-a-ring-morphism/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Prove that if $\phi:R\to S$ is a surjective ring homomorphism between commutative rings with unity, then $\phi(1_R)=1_S$.

> [!info]- View $\LaTeX$ code
> ```
> Prove that if $\phi:R\to S$ is a surjective ring homomorphism between commutative rings with unity, then $\phi(1_R)=1_S$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/maximal-ideals-in-a-pid/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a PID (principal ideal domain). Prove that an ideal $I\subset R$ is maximal if and only if $I=\langle p\rangle$ for a prime $p\in R$. (By definition, an element $p$ is **prime** if whenever $p\mid ab$ then $p\mid a$ or $p\mid b$. If you use the fact that prime implies irreducible, you have to prove it.)

> [!info]- View $\LaTeX$ code
> ```
> Suppose $R$ is a PID (principal ideal domain). Prove that an ideal $I\subset R$ is maximal if and only if $I=\langle p\rangle$ for a prime $p\in R$. (By definition, an element $p$ is {\bfseries prime} if whenever $p\mid ab$ then $p\mid a$ or $p\mid b$. If you use the fact that prime implies irreducible, you have to prove it.)
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/nilpotent-elements/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring.

1. Prove that the set $N$ of all nilpotent elements of $R$ is an ideal.
2. Prove that $R/N$ is a ring with no nonzero nilpotent elements.
3. Show that $N$ is contained in every prime ideal of $R$.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring.
> 
> \medskip
> \begin{enumerate}[label=(\alph*)]
> 	\item Prove that the set $N$ of all nilpotent elements of $R$ is an ideal.
> 	\item Prove that $R/N$ is a ring with no nonzero nilpotent elements.
> 	\item Show that $N$ is contained in every prime ideal of $R$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/nilpotent-elements-in-a-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with 1. We say an element $n\in R$ is **nilpotent** if there exists a number $k\in {\bf N}$ such that $n^k=0$.

1. Show that if $n$ is nilpotent, then $1-n$ is a unit.
2. Give an example of a commutative ring with 1 that has no nonzero nilpotent elements, but is not an integral domain.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with 1. We say an element $n\in R$ is {\bfseries nilpotent} if there exists a number $k\in {\bf N}$ such that $n^k=0$.
> \begin{enumerate}[label=\alph*)]
> 	\item Show that if $n$ is nilpotent, then $1-n$ is a unit.
> 	\item Give an example of a commutative ring with 1 that has no nonzero nilpotent elements, but is not an integral domain.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/nonzero-prime-ideals-are-maximal-in-a-pid/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $D$ be a principal ideal domain. Prove that every proper nonzero prime ideal is maximal.

> [!info]- View $\LaTeX$ code
> ```
> Let $D$ be a principal ideal domain. Prove that every proper nonzero prime ideal is maximal.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/polynomials-with-even-constant-term/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $I\subseteq {\bf Z}[x]$ denote the set of all polynomials with even constant term.

1. Prove that $I$ is an ideal.
2. Prove that $I$ is not a *principal* ideal.

> [!info]- View $\LaTeX$ code
> ```
> Let $I\subseteq {\bf Z}[x]$ denote the set of all polynomials with even constant term.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $I$ is an ideal.
> 	\item Prove that $I$ is not a {\itshape principal} ideal.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/prime-and-irreducible-elements-in-a-commutative-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with unity.

1. Define what it means for an element in $R$ to be **prime**, and also what it means for an element to be **irreducible**.
2. Prove that if $R$ is an integral domain, then every prime element is irreducible.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with unity.
> \begin{enumerate}[label=\alph*)]
> 	\item Define what it means for an element in $R$ to be {\bfseries prime}, and also what it means for an element to be {\bfseries irreducible}.
> 	\item Prove that if $R$ is an integral domain, then every prime element is irreducible.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/prime-ideals-and-quotient-rings/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with unity, let $I\subseteq R$ be an ideal, and let $\pi:R\to R/I$ be the natural projection homomorphism.

1. Show that if $\wp$ is a prime ideal of $R/I$, then $\pi^{-1}(\wp)$ is a prime ideal of $R$.
2. Show that the assignment $\wp\mapsto\pi^{-1}(\wp)$ is injective on the set of prime ideals of $R/I$.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with unity, let $I\subseteq R$ be an ideal, and let $\pi:R\to R/I$ be the natural projection homomorphism.
> \begin{enumerate}[label=\alph*)]
> 	\item Show that if $\wp$ is a prime ideal of $R/I$, then $\pi^{-1}(\wp)$ is a prime ideal of $R$.
> 	\item Show that the assignment $\wp\mapsto\pi^{-1}(\wp)$ is injective on the set of prime ideals of $R/I$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/properties-of-boolean-rings/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A$ be a commutative ring with unit. We call $A$ **Boolean** if $a^2=a$ for every $a\in A$. Prove that in a Boolean ring $A$ each of the following holds:

1. $2a=0$ for every $a\in A$.
2. If $I$ is a prime ideal then $A/I$ is a field with two elements (and in particular $I$ is maximal).
3. If $I=(a,b)$ is the ideal generated by $a$ and $b$ then $I$ can be generated by the single element $a+b+ab$. Conclude that every finitely generated ideal is principal.

> [!info]- View $\LaTeX$ code
> ```
> Let $A$ be a commutative ring with unit. We call $A$ {\bfseries Boolean} if $a^2=a$ for every $a\in A$. Prove that in a Boolean ring $A$ each of the following holds:
> \begin{enumerate}[label=(\alph*)]
> 	\item $2a=0$ for every $a\in A$.
> 	\item If $I$ is a prime ideal then $A/I$ is a field with two elements (and in particular $I$ is maximal).
> 	\item If $I=(a,b)$ is the ideal generated by $a$ and $b$ then $I$ can be generated by the single element $a+b+ab$. Conclude that every finitely generated ideal is principal.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/properties-of-the-annihilator/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring. For each nonempty subset $X\subseteq R$, the **annihilator** of $X$ is the set $\operatorname{ann}(X)=\{a\in R\mid ax=0\text{ for all }x\in X\}$.

1. Prove that $\operatorname{ann}(X)$ is an ideal of $R$.
2. Prove that $X\subseteq \operatorname{ann}(\operatorname{ann}(X))$.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring. For each nonempty subset $X\subseteq R$, the {\bfseries annihilator} of $X$ is the set $\operatorname{ann}(X)=\{a\in R\mid ax=0\text{ for all }x\in X\}$.
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $\operatorname{ann}(X)$ is an ideal of $R$.
> 	\item Prove that $X\subseteq \operatorname{ann}(\operatorname{ann}(X))$.
> \end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/proving-an-ideal-is-prime/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $\phi:R\to S$ is a ring homomorphism, and $S$ has no (nonzero) zero-divisors. Prove from the definitions that $\ker(\phi)$ is a prime ideal.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $\phi:R\to S$ is a ring homomorphism, and $S$ has no (nonzero) zero-divisors. Prove from the definitions that $\ker(\phi)$ is a prime ideal.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/quotienting-out-nilpotent-elements/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring with $1$, and $N$ the ideal

$N=\{a\in R\,\mid\, a^n=0\text{ for some }n\}.$

Let $[b]$ be the image of $b\in R$ in $R/N$. Prove that if $[a]\in R/N$ and $[a]^m=0$ then $[a]=[0]$.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring with $1$, and $N$ the ideal
> \[
>	N=\{a\in R\,\mid\, a^n=0\text{ for some }n\}.
> \]
> Let $[b]$ be the image of $b\in R$ in $R/N$. Prove that if $[a]\in R/N$ and $[a]^m=0$ then $[a]=[0]$.
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/quotients-and-direct-products/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R_1,\ldots, R_k$ be commutative rings, and set $R=R_1\times \cdots \times R_k$.
1. Let $I_j\subset R_j$ be ideals, and put $I=I_1\times \cdots \times I_k$. Use the First Isomorphism Theorem to prove that $R/I\simeq R_1/I_1\times \cdots \times R_k/I_k$.
2. Prove the prime ideals of $R$ have the form $R_1\times \cdots \times R_{j-1}\times P_j\times R_{j+1}\times \cdots \times R_k$ where $P_j\subset R_j$ is a prime ideal for $1\leq j\leq k$. (Omit the proof that this is an ideal.)

> [!info]- View $\LaTeX$ code
> ```
> Let $R_1,\ldots, R_k$ be commutative rings, and set $R=R_1\times \cdots \times R_k$.
> 	\begin{enumerate}[label=\alph*)]
> 		\item Let $I_j\subset R_j$ be ideals, and put $I=I_1\times \cdots \times I_k$. Use the First Isomorphism Theorem to prove that $R/I\simeq R_1/I_1\times \cdots \times R_k/I_k$.
> 		\item Prove the prime ideals of $R$ have the form $R_1\times \cdots \times R_{j-1}\times P_j\times R_{j+1}\times \cdots \times R_k$ where $P_j\subset R_j$ is a prime ideal for $1\leq j\leq k$. (Omit the proof that this is an ideal.)
> 	\end{enumerate}
> ```

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/the-nilradical-of-a-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be a commutative ring. The **nilradical** of $R$ is defined to be $N=\{r\in R\,|\, r^n=0\text{ for some }n\in {\bf N}\}$.

1. Prove that $N$ is an ideal of $R$.
2. Prove that $N$ is contained in the intersection of all prime ideals of $R$.

> [!info]- View $\LaTeX$ code
> ```
> Let $R$ be a commutative ring. The {\bfseries nilradical} of $R$ is defined to be $N=\{r\in R\,|\, r^n=0\text{ for some }n\in {\bf N}\}$.
> \begin{enumerate}[label=(\alph*)]
> 	\item Prove that $N$ is an ideal of $R$.
> 	\item Prove that $N$ is contained in the intersection of all prime ideals of $R$.
> \end{enumerate}
> ```

</div></div>


</div></div>


## Related pages

[[10-19 Teaching/14 Algebra Qual/The Algebra Qual\|Home for the Algebra Qual]]
[[10-19 Teaching/14 Algebra Qual/Exam syllabus\|Exam syllabus]]