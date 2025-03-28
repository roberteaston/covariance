---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/previous-exams/algebra-qual-2020-01/","updated":"2025-03-17T09:38:24-07:00"}
---

## Problem 1


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

## Problem 2


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

## Problem 3


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

## Problem 4


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

## Problem 5


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
