---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/the-isomorphism-theorems-for-modules/","tags":["module_theory"],"updated":"2024-03-06T13:54:14-08:00"}
---

As we groups and rings, we have the standard four isomorphism theorems for modules, the first of which gets by far the most use:

>[!summary] The First Isomorphism Theorem for Modules
>Let $\phi:M\to N$ be an $R$-module morphism. Then the map $m+\operatorname{ker}(\phi)\mapsto \phi(m)$ defines a module isomorphism $M/\operatorname{ker}(\phi)\simeq \phi(M)$.
{ #feb9be}


>[!summary] The Second Isomorphism Theorem for Modules
>Suppose $A, B$ are submodules of an $R$-module $M$. Then $(A+B)/B\simeq A/(A\cap B)$.

>[!summary] The Third Isomorphism Theorem for Modules
>Suppose $A,B$ are submodules of an $R$-module $M$ and $A\subseteq B$. Then $(M/A)/(B/A)\simeq M/B$.
{ #03b050}


Let's see how we can prove this theorem using only universal properties. To do that, we'll show that the module $M/B$ satisfies the universal property of the module $(M/A)/(B/A)$, from which it will follow that the two are isomorphic (by a unique isomorphism!). With that in mind, let $pi_A:M\to M/A$ and $\pi_B:M\to M/B$ denote the canonical projection morphisms (that are part of the information of the quotient). Since $\ker(\pi_B)=B$ and $A\subseteq B$, by the universal property of $M/A$ the morphism $\pi_B$ factors uniquely through $\pi_A$:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJNIl0sWzAsMSwiTS9BIl0sWzEsMSwiTS9CIl0sWzAsMiwiXFxwaV9CIl0sWzAsMSwiXFxwaV9BIiwyXSxbMSwyLCJcXHBpX3tBLEJ9IiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

We now have our morphism $\pi_{A,B}:M/A\to M/B$. At the level of elements, this is simply the map that takes each coset $m+A$ to the coset $m+B$. Notice that $\ker(\pi_{A,B})$ is exactly the image of $B$ in $M/A$, i.e., is $B/A$. We're already in excellent shape.

Next, suppose $P$ is a module equipped with a morphism $f:M/A\to Z$ such that $B/A$ is contained in $\ker(f)$. Then the composition $\pi_A\circ f$ is a morphism from $M$ to $P$ such that $B\subseteq \ker(\pi_A\circ f)$. By the universal property of $\pi_B:M\to M/B$ it follows that $\pi_A\circ f$ factors uniquely through $\pi_B$ (and hence $f$ factors uniquely through $\pi_{A,B}$):
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJNIl0sWzAsMSwiTS9BIl0sWzEsMSwiTS9CIl0sWzEsMiwiUCJdLFswLDIsIlxccGlfQiJdLFswLDEsIlxccGlfQSIsMl0sWzEsMiwiXFxwaV97QSxCfSIsMl0sWzEsMywiZiIsMl0sWzIsMywiXFxleGlzdHMhIGgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

We have therefore shown that every module morphism $f:M/A\to P$ with $B/A\subseteq \ker(f)$ factors uniquely through $\pi_{A,B}$, which is precisely the universal property of the quotient $(M/A)/(B/A)$ (with its canonical projection morphism).

>[!summary] The Fourth Isomorphism Theorem for Modules
>Let $N$ be a submodule of an $R$-module $M$. Then there is an isomorphism between the lattice of submodules of $M/N$ and the lattice of submodules of $M$ that contain $N$.
{ #a050bb}


