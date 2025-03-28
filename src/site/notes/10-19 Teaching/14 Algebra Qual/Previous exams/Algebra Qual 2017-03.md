---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/previous-exams/algebra-qual-2017-03/","updated":"2025-03-19T10:57:54-07:00"}
---

## Problem 1


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

## Problem 2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/linear-algebra/a-condition-ensuring-diagonalizability/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $F$ is a field and $A$ is an $n\times n$ matrix over $F$. Suppose further that $A$ possesses distinct eigenvalues $\lambda_1$ and $\lambda_2$ with $\dim \operatorname{Null}(A-\lambda_1 I_n)=n-1$. Prove $A$ is diagonalizable.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $F$ is a field and $A$ is an $n\times n$ matrix over $F$. Suppose further that $A$ possesses distinct eigenvalues $\lambda_1$ and $\lambda_2$ with $\dim \operatorname{Null}(A-\lambda_1 I_n)=n-1$. Prove $A$ is diagonalizable.
> ```

</div></div>

## Problem 3


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

## Problem 4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/group-theory/finding-all-morphisms-between-two-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Explicitly list all group homomorphisms $f: {\bf Z}/6{\bf Z} \to {\bf Z}/12{\bf Z}$.

> [!info]- View $\LaTeX$ code
> ```
> Explicitly list all group homomorphisms $f: {\bf Z}/6{\bf Z} \to {\bf Z}/12{\bf Z}$.
> ```

</div></div>

## Problem 5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/template-problems/ring-theory/evaluation-at-i/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $\varepsilon:{\bf R}[x]\to {\bf C}$ be the ring homomorphism that is evaluation at $i$, so $\varepsilon(f)=f(i)$. (Here $i$ denotes the complex number sometimes denoted $\sqrt{-1}$.)

1. Prove that $\ker(\varepsilon)=(x^2+1)\subseteq {\bf R}[x]$.
2. Prove that $(x^2+1)$ is a maximal ideal in ${\bf R}[x]$.

> [!info]- View $\LaTeX$ code
> ```
> Let $\varepsilon:{\bf R}[x]\to {\bf C}$ be the ring homomorphism that is evaluation at $i$, so $\varepsilon(f)=f(i)$. (Here $i$ denotes the complex number sometimes denoted $\sqrt{-1}$.)
> \begin{enumerate}[label=\alph*)]
> 	\item Prove that $\ker(\varepsilon)=(x^2+1)\subseteq {\bf R}[x]$.
> 	\item Prove that $(x^2+1)$ is a maximal ideal in ${\bf R}[x]$.
> \end{enumerate}
> ```

</div></div>
