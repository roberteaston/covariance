---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2024-fall/homework/homework-2/","updated":"2024-09-30T05:37:47-07:00"}
---

### Problem 1


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Prove there does not exist a functor ${\bf Grp}\to {\bf Ab}$ with object function sending each group $G$ to its center.

> [!summary]- Hint
> Consider a certain sequence of group morphisms $S_2\to S_3\to S_2$.

</div></div>


---

### Problem 2


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $F$ is a field and $A, B$ are two $m\times n$ matrices with entries in $F$. Recall that in the category $\textbf{Matr}_F$ these matrices correspond to two arrows $n\to m$.
1. Describe the [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples#Equalizers\|equalizer]] of $A, B:n\to m$ in $\textbf{Matr}_F$.
2. Describe the [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples#Coequalizers\|coequalizer]] of $A, B:n\to m$ in $\textbf{Matr}_F$.

>[!summary]- Hints
>First show that the equalizer should be a matrix $E$ with $n$ rows such that $AE=BE$, such that for every other matrix $C$ with $n$ rows and $AC=BC$ there exists a unique factorization $C=EH$. Then investigate what you can say about the columns of a matrix $C$ that satisfies $AC=BC$. Show that this condition is equivalent to the condition that every column of $C$ is contained in the null space of $A-B$. Now suppose $\{{\bf e}_1,\ldots, {\bf e}_k\}$ is a basis for the null space of $A-B$. To say ${\bf c}_i$ is contained in the null space of $A-B$ then means there is a unique $F$-linear combination with ${\bf c}_i = h_{1,i}{\bf e}_1+\cdots h_{k,i}{\bf e}_k$. The matrix $C$ should reveal to be related to the matrix $E$ By way a matrix $H$ ...

</div></div>


---

### Problem 3


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $E$ is an equivalence relation on a set $X$. Show that the usual set $X/E$ of equivalence classes can be described by a [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples#Coequalizers\|coequalizer]] in $\textbf{Set}$.

>[!summary]- Hints
>Recall that an equivalence relation on $X$ is a subset $E\subseteq X\times X$ satisfying various properties (e.g., transitive, etc.). Two elements $x_1,x_2\in X$ are said to be equivalent exactly when $(x_1, x_2)\in E$. As such, the set $E$ comes with two projection maps to $X$. These are your parallel arrows that the quotient set $X/E$ will "coequalize." Speaking of which, the set $X/E$ is defined to be the collection of equivalence classes in $X$. Each element in $X/E$ is a subset $S\subseteq X$ consisting of all elements equivalent to each other. Each such subset $S$ is usually denoted $[x]$, where $x\in X$ is any representative of that subset. In other words, we have $[x_1]=[x_2]$ exactly when $(x_1,x_2)\in E$.
>
>The quotient set $X/E$ also comes with a projection map $\pi:X\to X/E$. This is what is claimed to be the coequalizer of your parallel arrows.

</div></div>


---

### Problem 4


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




An $R$-module $M$ is called **torsion**^[Check [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Torsion submodules\|here]] for a reminder of what it means for an element in a module to be torsion.] if $\operatorname{Tor}(M)=M$.
1. Prove that every finite abelian group is torsion as a ${\bf Z}$-module.
2. Give an example of an infinite abelian group that is torsion as a ${\bf Z}$-module.

</div></div>


---

### Problem 5


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R$ is a commutative ring. A nonzero $R$-module $M$ is called **irreducible** if it has no nonzero proper submodules.
1. Prove that an $R$-module $M$ is irreducible if and only if $M$ is isomorphic (as an $R$-module) to $R/I$ for some maximal ideal $I$ of $R$.
2. Prove that if $M_1$ and $M_2$ are irreducible $R$-modules, then every nonzero $R$-module morphisms from $M_1$ to $M_2$ is an isomorphism.
3. Prove that if $M$ is an irreducible $R$-module, then the endomorphism ring $\operatorname{End}_R(M)$ is a division ring. 

>[!summary]- Hints
>1. Consider using some of the [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/The Isomorphism Theorems for Modules\|Isomorphism Theorems]] for modules. Also recall the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules#Submodules and ideals\|correspondence between submodules and ideals]].
>2. The [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules\|kernel and image]] of a module morphism are submodules ...
>3. Use the previous part.

</div></div>
