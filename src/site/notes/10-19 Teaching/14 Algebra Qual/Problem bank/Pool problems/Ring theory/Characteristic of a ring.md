---
{"dg-publish":true,"permalink":"/10-19-teaching/14-algebra-qual/problem-bank/pool-problems/ring-theory/characteristic-of-a-ring/","tags":["ring_theory"],"updated":"2025-03-17T07:52:31-07:00"}
---

Let $R$ be a commutative ring with $1$. The **characteristic** $\operatorname{char}(R)$ of $R$ is the unique integer $n\geq 0$ such that $\langle n\rangle \subset {\bf Z}$ is the kernel of the homomorphism $\theta:{\bf Z}\to R$ given by

$$\theta(m)=\begin{cases} \underbrace{1_R+\cdots +1_R}_{m}, & \text{ if }m\geq 0 \\ \underbrace{-1_R+\cdots+-1_R}_{|m|}, & \text{ if }m<0\end{cases}$$

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