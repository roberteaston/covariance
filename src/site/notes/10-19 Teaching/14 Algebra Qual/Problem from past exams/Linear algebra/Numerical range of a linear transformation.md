---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/problem-from-past-exams/linear-algebra/numerical-range-of-a-linear-transformation/","tags":["linear_algebra"],"updated":"2025-03-21T08:25:49-07:00"}
---

Suppose $T$ is a linear transformation on a finite-dimensional complex inner-product space $V$. Let $I$ denote the identity transformation on $V$. The **numerical range** of $T$ is the subset of ${\bf C}$ defined by

$$\operatorname{W}(T)=\{\langle T(x),x\rangle \,|\, x\in V,\quad \|x\|=1\}.$$

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