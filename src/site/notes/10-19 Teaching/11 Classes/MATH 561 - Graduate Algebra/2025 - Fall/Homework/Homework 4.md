---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/homework/homework-4/","updated":"2025-10-04T14:44:32-07:00"}
---

## Problem 1
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/the-pullback-functor-is-an-adjoint/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Recall the notion of [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples#Pullbacks\|pullbacks]], which for the sake of this exercise we will only consider in the category $\textbf{Set}$.

Show that the functor which assigns to each diagram of the form $X\xrightarrow{f} Z \xleftarrow{g} Y$ in $\textbf{Set}$ the pullback $X\times_Z Y$ is a right adjoint of another functor. Describe the unit and counit of the adjunction.

### Note

You don't need to check every tiny detail for this one. Define the pullback as a functor (giving the maps on objects *and* arrows), and then explicitly define the set map that should be a natural bijection between the appropriate hom-sets.

>[!summary]- Hints
Let $J$ be the category with three objects and two non-identity arrows, visualized as $\bullet \rightarrow \bullet \leftarrow \bullet$.  Functors $J\to \textbf{Set}$ then correspond to diagrams in $\textbf{Set}$ of shape $J$; i.e., diagrams of the form $X\xrightarrow{f} Z \xleftarrow{g} Y$ in $\textbf{Set}$. Let $\textbf{Set}^J$ denote the category of functors $J\to \mathbf{Set}$ and let $\Delta:\textbf{Set}\to \textbf{Set}^J$ denote the diagonal functor. Show the pullback functor is a right adjoint of $\Delta$.




</div></div>



## Problem 2
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/annihilators-of-torsion-modules/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $R$ be an integral domain and $M$ be a finitely generated torsion $R$-module. Prove that the [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilator]] of $M$ in $R$ is nontrivial.

</div></div>



## Problem 3
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/quotients-of-cyclic-modules/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Prove that quotients of [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Generators for modules and submodules#Generators for a given submodule\|cyclic]] modules are cyclic.

</div></div>



## Problem 4
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/a-criterion-for-a-module-to-be-finitely-generated/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $N$ is a submodule of an $R$-module $M$, and suppose that both $N$ and $M/N$ are [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Generators for modules and submodules#^758e0b\|finitely generated]]. Prove that $M$ is finitely generated.

</div></div>



## Problem 5
---


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/direct-sum-of-free-modules/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Prove that any direct sum of free $R$-modules is free.

</div></div>
