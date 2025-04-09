---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/equivalence-relations-on-sets/","updated":"2024-10-07T13:02:03-07:00"}
---

Suppose $E$ is an equivalence relation on a set $X$. Show that the usual set $X/E$ of equivalence classes can be described by a [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples#Coequalizers\|coequalizer]] in $\textbf{Set}$.

>[!summary]- Hints
>Recall that an equivalence relation on $X$ is a subset $E\subseteq X\times X$ satisfying various properties (e.g., transitive, etc.). Two elements $x_1,x_2\in X$ are said to be equivalent exactly when $(x_1, x_2)\in E$. As such, the set $E$ comes with two projection maps to $X$. These are your parallel arrows that the quotient set $X/E$ will "coequalize." Speaking of which, the set $X/E$ is defined to be the collection of equivalence classes in $X$. Each element in $X/E$ is a subset $S\subseteq X$ consisting of all elements equivalent to each other. Each such subset $S$ is usually denoted $[x]$, where $x\in X$ is any representative of that subset. In other words, we have $[x_1]=[x_2]$ exactly when $(x_1,x_2)\in E$.
>
>The quotient set $X/E$ also comes with a projection map $\pi:X\to X/E$. This is what is claimed to be the coequalizer of your parallel arrows.