---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/problem-bank/master-lists/template-problems-in-linear-algebra/","updated":"2025-05-19T18:56:53-07:00"}
---


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
> \end{enumerate}
> ```

</div></div>


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


---


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


## Related pages
---

[[10-19 Teaching/14 Algebra Qual/The Algebra Qual\|Home for the Algebra Qual]]
[[10-19 Teaching/14 Algebra Qual/Syllabus\|Exam syllabus]]
[[10-19 Teaching/14 Algebra Qual/Problem bank\|Problem bank]]
[[10-19 Teaching/14 Algebra Qual/Past exams\|Past exams]]