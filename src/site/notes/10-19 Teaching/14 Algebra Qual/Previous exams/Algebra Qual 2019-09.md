---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/previous-exams/algebra-qual-2019-09/","updated":"2025-03-17T09:49:59-07:00"}
---

## Problem 1


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

## Problem 2


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

## Problem 3


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

## Problem 4


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

## Problem 5


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
