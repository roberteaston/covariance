---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/previous-exams/algebra-qual-2023-09/","updated":"2025-03-15T15:48:18-07:00"}
---

## Problem 1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/group-theory/computations-with-inner-automorphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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

## Problem 2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/group-theory/existence-of-an-identity-element-in-a-group/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $G$ is a nonempty finite set that has an associative pairing $G\times G\to G$, written $(x,y)\mapsto x\cdot y$. Suppose this pairing satisfies left and right cancellation: $x\cdot y = x\cdot y'$ implies $y=y'$, and $x\cdot y = x'\cdot y$ implies $x=x'$. Prove there exists an element $e$ of $G$ such that for all $x\in G$, $e\cdot x = x\cdot e = x$. Justify your reasoning as carefully as possible.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $G$ is a nonempty finite set that has an associative pairing $G\times G\to G$, written $(x,y)\mapsto x\cdot y$. Suppose this pairing satisfies left and right cancellation: $x\cdot y = x\cdot y'$ implies $y=y'$, and $x\cdot y = x'\cdot y$ implies $x=x'$. Prove there exists an element $e$ of $G$ such that for all $x\in G$, $e\cdot x = x\cdot e = x$. Justify your reasoning as carefully as possible.
> ```

</div></div>

## Problem 3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/ring-theory/quotients-and-direct-products/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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

## Problem 4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/ring-theory/morphism-from-the-gaussian-integers/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $i$ be the imaginary number, let ${\bf Z}[i]=\{a+bi\,\mid \, a,b\in {\bf Z}\}$, a principal ideal domain, and let ${\bf Z}_2$ be the finite ring of integers modulo 2.
1. Define a ring homomorphism from ${\bf Z}[i]\to {\bf Z}_2$. You must prove it is a ring homomorphism.
2. Find, with proof, a generator for the kernel of your ring homomorphism.


> [!info]- View $\LaTeX$ code
> ```
> Let $i$ be the imaginary number, let ${\bf Z}[i]=\{a+bi\,\mid \, a,b\in {\bf Z}\}$, a principal ideal domain, and let ${\bf Z}_2$ be the finite ring of integers modulo 2.
> 	\begin{enumerate}[label=\alph*)]
> 		\item Define a ring homomorphism from ${\bf Z}[i]\to {\bf Z}_2$. You must prove it is a ring homomorphism.
> 		\item Find, with proof, a generator for the kernel of your ring homomorphism.
> 	\end{enumerate}
> ```

</div></div>

## Problem 5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/linear-algebra/eigenvectors-and-linear-independence/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $T:{\bf R}^n\to {\bf R}^n$ is a linear transformation with distinct eigenvalues $\lambda_1, \lambda_2,\ldots, \lambda_m$, and let ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ be corresponding eigenvectors. Prove ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ are linearly independent.

> [!info]- View $\LaTeX$ code
> ```
> Suppose $T:{\bf R}^n\to {\bf R}^n$ is a linear transformation with distinct eigenvalues $\lambda_1, \lambda_2,\ldots, \lambda_m$, and let ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ be corresponding eigenvectors. Prove ${\bf v}_1,{\bf v}_2,\ldots, {\bf v}_m$ are linearly independent.
> ```

</div></div>
