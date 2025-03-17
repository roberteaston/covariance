---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/previous-exams/algebra-qual-2022-09/","updated":"2025-03-17T08:59:08-07:00"}
---

## Problem 1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/group-theory/normality-and-the-operation-on-cosets/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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

## Problem 2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/group-theory/inner-and-outer-automorphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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

## Problem 3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/ring-theory/characteristic-of-a-ring/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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

## Problem 4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/linear-algebra/orthogonal-complements/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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

## Problem 5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/14-algebra-qual/problem-bank/linear-algebra/orthogonal-projection-onto-a-line/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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
