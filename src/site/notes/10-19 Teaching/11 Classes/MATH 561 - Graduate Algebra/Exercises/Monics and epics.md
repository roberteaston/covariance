---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/monics-and-epics/","updated":"2025-09-20T14:12:05-07:00"}
---

An arrow $f:a\to b$ in a category $C$ is called **monic** (or a **monomorphism**) if it is *left-cancellable*; i.e., if whenever $g_1, g_2: c\to a$ are arrows such that $f\circ g_1 = f\circ g_2$, then $g_1=g_2$.

Dually, the arrow $f$ is called **epic** (or **epi**, or an **epimorphism**) if it is *right-cancellable*; i.e., if whenever $g_1,g_2:b\to c$ are arrows such that $g_1\circ f = g_2\circ f$, then $g_1=g_2$.

1. In ${\bf Set}$, show that a set map $f:X\to Y$ is monic (respectively, epic) if and only if it is injective (respectively, surjective).
2. Show that, in a general category $C$, if an arrow $f:a\to b$ is an [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Special morphisms#Bimorphisms and isomorphisms\|isomorphism]] (i.e., invertible), then $f$ is both monic and epic.
3. Show that in ${\bf Ring}$, the ring inclusion $i:{\bf Z}\to {\bf Q}$ is both monic and epic, even though the map $i$ is not surjective.