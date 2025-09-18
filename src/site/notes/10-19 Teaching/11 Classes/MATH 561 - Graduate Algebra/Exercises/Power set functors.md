---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/power-set-functors/","updated":"2025-09-18T10:42:33-07:00"}
---

There are two functors vying for the name "power set functor".

For the first, define $\mathcal{P}:{\bf Set}\to {\bf Set}$ as follows:
- On objects: for each set $X$, define $\mathcal{P}(X)$ to be the power set of $X$, i.e., the set of all subsets of $X$.
- On arrows: for each set map $f:X\to Y$, define a set map $\mathcal{P}(f):\mathcal{P}(X)\to \mathcal{P}(Y)$ by sending each subset $S\subseteq X$ to its image $f(S)\subseteq Y$.

For the second, define $\mathcal{P}':{\bf Set}^{\text{op}}\to {\bf Set}$ as follows^[Here we are using the [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Categories#Opposite categories\|opposite category]] to avoid talking about contravariant functors.]:
- On objects: for each set $X$, define $\mathcal{P}'(X)$ to once again be the power set of $X$.
- On arrows: for each arrow $f^{\text{op}}:X\to Y$ (corresponding to a set map $f:Y\to X$), define a set map $\mathcal{P}'(f^{\text{op}}):\mathcal{P}'(X)\to \mathcal{P}'(Y)$ by sending each subset $S\subseteq X$ to its preimage $f^{-1}(X)\subset Y$. (Recall that $f^{-1}(X)=\{y\in Y\mid f(y)\in X\}$.)

Verify that $\mathcal{P}$ and $\mathcal{P}'$ are indeed both functors. The first is sometimes called the **covariant power set functor** and the second the **contravariant power set functor**.