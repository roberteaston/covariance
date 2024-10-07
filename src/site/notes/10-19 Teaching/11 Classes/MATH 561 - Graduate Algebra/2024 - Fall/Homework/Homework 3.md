---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2024-fall/homework/homework-3/","updated":"2024-10-07T10:39:30-07:00"}
---

## Problem 1


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




To any group $G$ we can associate a category ${\bf G}$ that has a unique object, an arrow for each element of $G$, and arrow composition given by the group law in $G$. (See a bit more [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Categories#Groups as categories\|here]].)
1. Show there is a correspondence^[You can turn this into a bijection if you are willing to talk about isomorphism classes of groups and the like.] between groups and one-object categories in which every arrow is invertible.
2. Suppose $G$ and $H$ are groups. Show that group morphisms $\phi:G\to H$ correspond^[Following the previous footnote, you can turn this into an equivalence of certain categories.] to functors $\Phi:{\bf G}\to {\bf H}$.
3. Recall that a *permutation representation* of $G$ is a group morphism $\phi:G\to S_X$, where $S_X$ is the permutation group on a set $X$. Show that permutation representations of $G$ correspond to functors ${\bf G}\to {\bf Set}$.
4. Suppose $\phi,\psi:G\to H$ are group morphisms, with corresponding functors $\Phi,\Psi:{\bf G}\to {\bf H}$. Show there is a natural transformation $\Phi\Rightarrow \Psi$ if and only if $\phi$ and $\psi$ are conjugate, i.e., there is an element $h\in H$ such that $\psi(g)=h(\phi(g))h^{-1}$ for all $g\in G$.

</div></div>


---

## Problem 2


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $S$ be a fixed set. For each set $X$, let $X^S$ denote the set of all functions $h:S\to X$ in ${\bf Set}$.
1. Show that $X\mapsto X^S$ is the object function of a functor ${\bf Set}\to {\bf Set}$.
2. Show that $X\mapsto X^S\times S$ is the object function of a functor ${\bf Set}\to {\bf Set}$.
3. For each set $X$ let $e_X:X^S\times S\to X$ be the evaluation map, defined by $e(h,s)=h(s)$. Show that these maps are the components of a natural transformation $e:\bullet^S\times S\Rightarrow I$, where $I$ is the identity functor on ${\bf Set}$.

</div></div>


## Problem 3


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Recall the notion of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples#Pullbacks\|pullbacks]], which for the sake of this exercise we will only consider in the category $\textbf{Set}$.

Show that the functor which assigns to each diagram of the form $X\xrightarrow{f} Z \xleftarrow{g} Y$ in $\textbf{Set}$ the pullback $X\times_Z Y$ is a right adjoint of another functor. Describe the unit and counit of the adjunction.

### Note

You don't need to check every tiny detail for this one. Define the pullback as a functor (giving the maps on objects *and* arrows), and then explicitly define the set map that should be a natural bijection between the appropriate hom-sets.

>[!summary]- Hints
Let $J$ be the category with three objects and two non-identity arrows, visualized as $\bullet \rightarrow \bullet \leftarrow \bullet$.  Functors $J\to \textbf{Set}$ then correspond to diagrams in $\textbf{Set}$ of shape $J$; i.e., diagrams of the form $X\xrightarrow{f} Z \xleftarrow{g} Y$ in $\textbf{Set}$. Let $\textbf{Set}^J$ denote the category of functors $J\to \mathbf{Set}$ and let $\Delta:\textbf{Set}\to \textbf{Set}^J$ denote the diagonal functor. Show the pullback functor is a right adjoint of $\Delta$.




</div></div>


---

## Problem 4


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $R$ be an integral domain and $M$ be a finitely generated torsion $R$-module. Prove that the [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilator]] of $M$ in $R$ is nontrivial.

</div></div>


---

## Problem 5


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Prove that quotients of [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Generators for modules and submodules#Generators for a given submodule\|cyclic]] modules are cyclic.

</div></div>


---

## Problem 6


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $N$ is a submodule of an $R$-module $M$, and suppose that both $N$ and $M/N$ are [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Generators for modules and submodules\|finitely generated]]. Prove that $M$ is finitely generated.

</div></div>


---

## Problem 7


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Prove that any direct sum of free $R$-modules is free.

</div></div>


