---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/homework/homework-3/","updated":"2025-09-29T06:52:38-07:00"}
---

## Problem 1
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/irreducible-modules/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a commutative ring. A nonzero $R$-module $M$ is called **irreducible** if it has no nonzero proper submodules.
1. Prove that an $R$-module $M$ is irreducible if and only if $M$ is isomorphic (as an $R$-module) to $R/I$ for some maximal ideal $I$ of $R$.
2. Prove that if $M_1$ and $M_2$ are irreducible $R$-modules, then every nonzero $R$-module morphisms from $M_1$ to $M_2$ is an isomorphism.
3. Prove that if $M$ is an irreducible $R$-module, then the endomorphism ring $\operatorname{End}_R(M)$ is a division ring. 

>[!summary]- Hints
>1. Consider using some of the [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/The Isomorphism Theorems for Modules\|Isomorphism Theorems]] for modules. Also recall the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules#Submodules and ideals\|correspondence between submodules and ideals]].
>2. The [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules\|kernel and image]] of a module morphism are submodules ...
>3. Use the previous part.

</div></div>


## Problem 2
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/the-evaluation-map/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $S$ be a fixed set. For each set $X$, let $X^S$ denote the set of all functions $h:S\to X$ in ${\bf Set}$.
1. Show that $X\mapsto X^S$ is the object function of a functor ${\bf Set}\to {\bf Set}$.
2. Show that $X\mapsto X^S\times S$ is the object function of a functor ${\bf Set}\to {\bf Set}$.
3. For each set $X$ let $e_X:X^S\times S\to X$ be the evaluation map, defined by $e(h,s)=h(s)$. Show that these maps are the components of a natural transformation $e:\bullet^S\times S\Rightarrow I$, where $I$ is the identity functor on ${\bf Set}$.

</div></div>


## Problem 3
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/equivalence-relations-on-sets/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $E$ is an equivalence relation on a set $X$. Show that the usual set $X/E$ of equivalence classes can be described by a [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples#Coequalizers\|coequalizer]] in $\textbf{Set}$.

>[!summary]- Hints
>Recall that an equivalence relation on $X$ is a subset $E\subseteq X\times X$ satisfying various properties (e.g., transitive, etc.). Two elements $x_1,x_2\in X$ are said to be equivalent exactly when $(x_1, x_2)\in E$. As such, the set $E$ comes with two projection maps to $X$. These are your parallel arrows that the quotient set $X/E$ will "coequalize." Speaking of which, the set $X/E$ is defined to be the collection of equivalence classes in $X$. Each element in $X/E$ is a subset $S\subseteq X$ consisting of all elements equivalent to each other. Each such subset $S$ is usually denoted $[x]$, where $x\in X$ is any representative of that subset. In other words, we have $[x_1]=[x_2]$ exactly when $(x_1,x_2)\in E$.
>
>The quotient set $X/E$ also comes with a projection map $\pi:X\to X/E$. This is what is claimed to be the coequalizer of your parallel arrows.

</div></div>



## Problem 4
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/equalizers-and-coequalizers-of-matrices/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $F$ is a field and $A, B$ are two $m\times n$ matrices with entries in $F$. Recall that in the category $\textbf{Matr}_F$ these matrices correspond to two arrows $n\to m$.
1. Describe the [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples#Equalizers\|equalizer]] of $A, B:n\to m$ in $\textbf{Matr}_F$.
2. Describe the [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples#Coequalizers\|coequalizer]] of $A, B:n\to m$ in $\textbf{Matr}_F$.

>[!summary]- Hints
>First show that the equalizer should be a matrix $E$ with $n$ rows such that $AE=BE$, such that for every other matrix $C$ with $n$ rows and $AC=BC$ there exists a unique factorization $C=EH$. Then investigate what you can say about the columns of a matrix $C$ that satisfies $AC=BC$. Show that this condition is equivalent to the condition that every column of $C$ is contained in the null space of $A-B$. Now suppose $\{{\bf e}_1,\ldots, {\bf e}_k\}$ is a basis for the null space of $A-B$. To say ${\bf c}_i$ is contained in the null space of $A-B$ then means there is a unique $F$-linear combination with ${\bf c}_i = h_{1,i}{\bf e}_1+\cdots h_{k,i}{\bf e}_k$. The matrix $C$ should reveal to be related to the matrix $E$ By way a matrix $H$ ...

</div></div>

