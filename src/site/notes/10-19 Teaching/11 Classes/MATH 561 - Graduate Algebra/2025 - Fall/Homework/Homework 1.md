---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/homework/homework-1/","updated":"2025-09-18T10:43:53-07:00"}
---

## Problem 1
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/initial-and-terminal-objects/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




An object $i$ in a category $C$ is called **initial** if for every object $c\in C$ there exists a unique arrow $i\to c$; in other words, the hom-sets $\operatorname{Hom}_C(i,c)$ are all singleton sets.

Dually, an object $t$ is called **terminal** if for every object $c\in C$ there exists a unique arrow $c\to t$, i.e., the hom-sets $\operatorname{Hom}_C(c,t)$ are all singleton sets.

1. Show that an initial (respectively, terminal) object, if it exists, is unique up to unique isomorphism.
2. Show that in ${\bf Set}$, the empty set is initial and the singleton set is terminal.
3. Show that in ${\bf Ab}$, the trivial group $0$ is both initial and terminal. (Such an object is called a **null** or **zero** object.)
4. Show that ${\bf Field}$ contains neither an initial nor a terminal object.

</div></div>


## Problem 2
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/monics-and-epics/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




An arrow $f:a\to b$ in a category $C$ is called **monic** (or a **monomorphism**) if it is *left-cancellable*; i.e., if whenever $g_1, g_2: c\to a$ are arrows such that $f\circ g_1 = f\circ g_2$, then $g_1=g_2$.

Dually, the arrow $f$ is called **epic** (or **epi**, or an **epimorphism**) if it is *right-cancellable*; i.e., if whenever $g_1,g_2:b\to c$ are arrows such that $g_1\circ f = g_2\circ f$, then $g_1=g_2$.

1. In ${\bf Set}$, show that a set map $f:X\to Y$ is monic (respectively, epic) if and only if it is injective (respectively, surjective).
2. Show that, in a general category $C$, if an arrow $f:a\to b$ is an isomorphism (i.e., invertible), then $f$ is both monic and epic.
3. Show that in ${\bf Ring}$, the ring inclusion $i:{\bf Z}\to {\bf Q}$ is both monic and epic, even though the map $i$ is not surjective.

</div></div>


## Problem 3
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/power-set-functors/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




There are two functors vying for the name "power set functor".

For the first, define $\mathcal{P}:{\bf Set}\to {\bf Set}$ as follows:
- On objects: for each set $X$, define $\mathcal{P}(X)$ to be the power set of $X$, i.e., the set of all subsets of $X$.
- On arrows: for each set map $f:X\to Y$, define a set map $\mathcal{P}(f):\mathcal{P}(X)\to \mathcal{P}(Y)$ by sending each subset $S\subseteq X$ to its image $f(S)\subseteq Y$.

For the second, define $\mathcal{P}':{\bf Set}^{\text{op}}\to {\bf Set}$ as follows^[Here we are using the [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Categories#Opposite categories\|opposite category]] to avoid talking about contravariant functors.]:
- On objects: for each set $X$, define $\mathcal{P}'(X)$ to once again be the power set of $X$.
- On arrows: for each arrow $f^{\text{op}}:X\to Y$ (corresponding to a set map $f:Y\to X$), define a set map $\mathcal{P}'(f^{\text{op}}):\mathcal{P}'(X)\to \mathcal{P}'(Y)$ by sending each subset $S\subseteq X$ to its preimage $f^{-1}(X)\subset Y$. (Recall that $f^{-1}(X)=\{y\in Y\mid f(y)\in X\}$.)

Verify that $\mathcal{P}$ and $\mathcal{P}'$ are indeed both functors. The first is sometimes called the **covariant power set functor** and the second the **contravariant power set functor**.

</div></div>


## Problem 4
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/there-is-no-center-functor-on-grp/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Prove there does not exist a functor ${\bf Grp}\to {\bf Ab}$ with object function sending each group $G$ to its center.

> [!summary]- Hint
> Consider a certain sequence of group morphisms $S_2\to S_3\to S_2$.

</div></div>


