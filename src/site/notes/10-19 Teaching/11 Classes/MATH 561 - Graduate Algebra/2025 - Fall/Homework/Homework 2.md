---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/homework/homework-2/","updated":"2025-09-22T06:51:39-07:00"}
---

## Problem 1
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/ring-property-from-module-property/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a ring, $M$ is a left $R$-module, and $r\in R$ is an element for which there exists a nonzero $m\in M$ such that $rm=0$. Prove $r$ does not have a left inverse.

</div></div>



## Problem 2
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/submodules-via-ideals/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




 Suppose $R$ is a ring, $I\subseteq R$ is a left ideal, and $M$ is a left $R$-module. Let $IM\subseteq M$ denote the subset of all finite $I$-linear combinations in $M$, i.e., $IM = \left\{\sum_{\text{finite}} i_k m_k\,\mid\, i_k\in I,\, m_k\in M\right\}.$ Prove $IM$ is a submodule of $M$.

</div></div>


## Problem 3
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/torsion-submodules/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a ring and $M$ is a left $R$-module. An element $m\in M$ is called a **torsion element** if $rm=0$ for some nonzero $r\in R$. The set of torsion elements in $M$ is denoted $\operatorname{Tor}(M)$.
1. Prove that if $R$ is an integral domain then $\operatorname{Tor}(M)$ is a submodule of $M$.
2. Give an example of a ring $R$ and $R$-module $M$ such that $\operatorname{Tor}(M)$ is not a submodule. (*Hint:* Consider torsion elements in the $R$-module $R$ for some specific ring $R$.)
3. Suppose $R$ has a (nonzero) zero divisor and $M$ is nontrivial. Prove that $M$ has nonzero torsion elements.
4. Suppose $\phi:M\to N$ is an $R$-module morphism. Prove that $\phi(\operatorname{Tor}(M))\subseteq \operatorname{Tor}(N)$.

</div></div>


## Problem 4
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/torsion-z-modules/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




An $R$-module $M$ is called **torsion**^[Check [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Torsion submodules\|here]] for a reminder of what it means for an element in a module to be torsion.] if $\operatorname{Tor}(M)=M$.
1. Prove that every finite abelian group is torsion as a ${\bf Z}$-module.
2. Give an example of an infinite abelian group that is torsion as a ${\bf Z}$-module.

</div></div>


## Problem 5
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/annihilators/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a ring and $M$ is a left $R$-module.
1. For each submodule $N$ on $M$, the **annihilator** of $N$ in $R$ is defined to be the set of elements $r\in R$ such that $rn=0$ for all $n\in N$. Prove that the annihilator of $N$ in $R$ is a 2-sided ideal of $R$.
2. For each right ideal $I$ of $R$, the **annihilator** of $I$ in $M$ is defined to be the set of all elements $m\in M$ such that $im=0$ for all $i\in I$. Prove that the annihilator of $I$ in $M$ is a submodule of $M$.
3. Consider the ${\bf Z}$-module $M={\bf Z}_{24}\times {\bf Z}_{15}\times {\bf Z}_{50}$ and ideal $I=2{\bf Z}$. Determine the annihilator of $M$ in ${\bf Z}$ and the annihilator of $I$ in $M$.

</div></div>


## Problem 6
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/group-morphisms-that-cannot-define-module-morphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Give an example of a ring $R$, two $R$-modules $M$ and $N$, and a set map $f:M\to N$ such that $f$ is a group morphism but not an $R$-module morphism.

</div></div>


## Problem 7
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/hom-r-m-is-m/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a commutative ring and $M$ is left $R$-module. Prove that $\operatorname{Hom}_R(R,M)$ and $M$ are isomorphic as left $R$-modules.

*Bonus challenge:* Is your isomorphism [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Natural transformations#^cc0370\|natural]] in $M$?


</div></div>


## Problem 8
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/hom-r-r-is-r/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a commutative ring. Prove that $\operatorname{Hom}_R(R,R)$ and $R$ are isomorphic as rings.

</div></div>


