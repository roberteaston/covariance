---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/universal-properties/examples-of-universal-properties/","tags":["category_theory","quotes"],"updated":"2024-07-22T19:54:33-07:00"}
---

> [!quote] [[Maclane - Categories for the Working Mathematician.pdf#page=66|Saunders Mac Lane]]
> The general fact of the uniqueness of the universal arrows implies the uniqueness of the ... object, up to a unique isomorphism (who wants more?).

Many (perhaps even most!) constructions in abstract algebra involve an object (and morphism) that satisfies some defining "universal property." Rather than dive straight into the technical definitions, it's more illuminating to first review many specific situations in which a common construction was characterized by some property about maps.

---
## Examples in $\textbf{Set}$

You encounter many "basic" constructions on sets as soon as you start studying set theory. Here we list a few, along with the universal property they satisfy.
### Cartesian product

Suppose $X$ and $Y$ are two sets. The Cartesian product $X\times Y$ is the set of all ordered pairs $(x,y)$ with $x\in X$ and $y\in Y$. There are two (natural) projection maps from $X\times Y$, namely $p_1:X\times Y\to X$ and $p_2:X\times Y\to Y$. This collection of information (the set $X\times Y$ together with those two projection maps) is universal among all such information. More precisely, whenever $Z$ is a set equipped with two maps $q_1:Z\to X$ and $q_2:Z\to Y$, there there is a unique set map $h:Z\to X\times Y$ such that $q_1$ factors through $p_1$ and $q_2$ factors through $p_2$. This can be visualized below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJaIl0sWzEsMSwiWFxcdGltZXMgWSJdLFsxLDIsIlgiXSxbMiwxLCJZIl0sWzEsMywicF8yIiwyXSxbMSwyLCJwXzEiXSxbMCwyLCJxXzEiLDIseyJjdXJ2ZSI6MX1dLFswLDMsInFfMiIsMCx7ImN1cnZlIjotMX1dLFswLDEsIlxcZXhpc3RzIWgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

The map $h$ is easy to describe in terms of elements. It is simply given by $h(z)=(q_1(z),q_2(z))$. (Convince yourself that if the diagram is to be commutative, there is actually no other choice!)
### Disjoint union

The disjoint union of two sets is exactly dual to the Cartesian product construction. Indeed, if $X$ and $Y$ are two sets then the disjoint union $X\sqcup Y$ is a set that has two (natural) maps $i_1:X\to X\sqcup Y$ and $i_2:Y\to X\sqcup Y$ , universal among all such information. Once again, what this means precisely is that whenever $Z$ is a set equipped with two maps $j_1:X\to Z$ and $j_2:Y\to Z$, then there is a unique set map $h:X\sqcup Y\to Z$ such that $j_1$ factors through $i_1$ and $j_2$ factors through $i_2$:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwxLCJYIl0sWzEsMCwiWSJdLFsxLDEsIlhcXHNxY3VwIFkiXSxbMiwyLCJaIl0sWzAsMiwiaV8xIl0sWzEsMiwiaV8yIiwyXSxbMCwzLCJqXzEiLDIseyJjdXJ2ZSI6MX1dLFsxLDMsImpfMiIsMCx7ImN1cnZlIjotMX1dLFsyLDMsIlxcZXhpc3RzIWgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
{ #f76d9f}


### Quotient by equivalence relations

Suppose $E$ is an equivalence relation on a set $X$ and $X/E$ is the corresponding quotient set, consisting of the equivalence classes of elements of $X$ under $E$. Let $p:X\to X/E$ be the "projection" map that sends each element to its $E$-equivalence class. The "defining" property of $X/E$ (and really of the map $p:X\to X/E$) is that any function $f$ on $X$ that respects the equivalence relation descends to a function on $X/E$. More precisely, any set map $f:X\to Y$ for which $f(s)=f(s')$ whenever $s\sim_E s'$ factors uniquely through $p$:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJYIl0sWzEsMCwiWC9FIl0sWzEsMSwiWSJdLFswLDEsInAiXSxbMCwyLCJmIiwyXSxbMSwyLCJcXGV4aXN0cyEgaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

(This example can be made even more "categorical" if one is willing to reframe the definition of "equivalence relation" without reference to elements.)
### Equalizers

Have you ever wondered if there was a set-analogue of the notion of a kernel? Since sets do not have an element identified as "zero", there is no direct analogue of a kernel. However, there is something close, called the *equalizer*. Given a pair of set maps $f,g:X\to Y$ between the same two sets, the **equalizer** of $f$ and $g$ is the subset $E$ of $X$ consisting of all elements for which $f$ and $g$ agree. In other words, it is the set $E=\{x\in X\mid f(x)=g(x)\}$. Let $i:E\to X$ be the inclusion map. Then we have a set $E$ together with a map $i:E\to X$ such that $f\circ i = g\circ i$. The equalizer is universal for such information. That is, if $Z$ is any set together with a map $j:Z\to X$ such that $f\circ j = g\circ j$, then $j$ factors uniquely through $i$:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMSwwLCJYIl0sWzIsMCwiWSJdLFswLDAsIkUiXSxbMCwxLCJaIl0sWzAsMSwiZiIsMCx7Im9mZnNldCI6LTF9XSxbMCwxLCJnIiwyLHsib2Zmc2V0IjoxfV0sWzIsMCwiaSJdLFszLDAsImoiLDJdLFszLDIsIlxcZXhpc3RzIWgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

At the level of elements, the map $h$ is given by $h(z)=j(z)$; note that since $f(j(z))=g(j(z))$ the element $j(z)$ is indeed in the set $E$. (Once again, the commutativity of the diagram forces this as the only possible definition of $h$.)
### Coequalizers

As will always be the case, there is a notion dual to equalizers, named ... (drumroll) ... *coequalizers*. I will simply leave a diagram here with no explanation. Can you fill in the details?
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJYIl0sWzEsMCwiWSJdLFsyLDAsIkMiXSxbMiwxLCJaIl0sWzAsMSwiZiIsMCx7Im9mZnNldCI6LTF9XSxbMCwxLCJnIiwyLHsib2Zmc2V0IjoxfV0sWzEsMiwicCJdLFsxLDMsInEiLDJdLFsyLDMsIlxcZXhpc3RzIWgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

### Pushouts

Suppose $f:Z\to X$ and $g:Z\to Y$ are set maps. Let $\displaystyle X\sqcup_Z Y$ be the quotient of the disjoint union $X\sqcup Y$ by the equivalence relation that identifies the elements $f(z)$ and $g(z)$ for every $z\in Z$. Visually, one imagines gluing together the sets $X$ and $Y$ along the image in each of $Z$. This set comes equipped with two set maps $i:X\to \displaystyle X\sqcup_Z Y$ and $j:Y\to \displaystyle X\sqcup_Z Y$ such that the diagram below is commutative:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJaIl0sWzEsMCwiWSJdLFswLDEsIlgiXSxbMSwxLCJYXFxzcWN1cF9aIFkiXSxbMCwyLCJmIiwyXSxbMCwxLCJnIl0sWzIsMywiaSIsMl0sWzEsMywiaiJdXQ==&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

This information is universal among all such pairs of set maps from $X$ and $Y$ with the analogous commutativity conditions.
### Pullbacks
{ #c9af7c}


Exactly dual to the notion of a pushout is that of a **pullback**. The relevant diagram is shown below. Can you fill in the details?
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJYXFx0aW1lc19aIFkiXSxbMSwwLCJZIl0sWzAsMSwiWCJdLFsxLDEsIloiXSxbMiwzLCJmIiwyXSxbMSwzLCJnIl0sWzAsMiwicCIsMl0sWzAsMSwicSJdLFswLDMsIiIsMSx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dXQ==&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

You may have noticed the little symbol added to the top-left corner of the commutative square. That optional symbol is sometimes used to let the reader know that this isn't just a commutative diagram, but specifically the diagram for a pullback. Such diagrams are sometimes called *Cartesian squares*. The pullback object is sometimes also called a **fibered product** or a **product of $X$ and $Y$ over $Z$**.

---
## Examples in $\textbf{Grp}$

### Quotient groups

The quotient group construction is probably one of the first times most of us officially encounter the phrase "universal property." Let's recall the details. Suppose $G$ is a group and $N$ is a normal subgroup. Then the set of left cosets of $N$ in $G$ has the structure of a group and there is a group morphism $\pi:G\to G/N$ with $N\subseteq \ker(\pi)$, universally so. That is, every other morphism $f:G\to H$ with $N\subseteq \ker(f)$ factors uniquely through $\pi$:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJHIl0sWzEsMCwiRy9OIl0sWzEsMSwiSCJdLFswLDEsIlxccGlfTiJdLFswLDIsImYiLDJdLFsxLDIsIlxcZXhpc3RzIWgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

(You might recall that we actually have $\ker(\pi_N)=N$. Can you prove this must be the case regardless, simply from the universal property?)

>[!quote] [[Maclane - Categories for the Working Mathematician.pdf#page=67|Saunders Mac Lane]]
>Now the quotient group is usually described as a group whose elements are cosets. However, once the cosets are used to prove this one "universal" property of $\pi: G\to G/N$, all other properties of quotient groups - for example, the isomorphism theorems - can be proved with no further mention of cosets ... All that is needed is the existence of a universal element ... For that matter, even this existence could be proved without using cosets (see the adjoint functor theorem ...)

---
## Examples in $\textbf{Ab}$

### Direct sum

Suppose $A$ and $B$ are two abelian groups. What is the smallest abelian group that contains $A$ and $B$? Spoiler: it's not their (disjoint) union, at least not in general. One reason is that the disjoint union of their sets of elements is likely not even a group. However, there is a construction that produces from $A$ and $B$ a new group with the universal property in $\textbf{Ab}$ that is directly analogous to that of the disjoint union in $\textbf{Set}$. This construction is the so-called **direct sum** of $A$ and $B$. Usually denoted $A\oplus B$, as a set this group consists of all formal sums of the form $a+b$ with $a\in A$ and $b\in B$. The operation is as expected, with $(a_1+b_1)+(a_2+b_2)=(a_1+a_2)+(b_1+b_2)$. One can verify that $A\oplus B$ really is an abelian group, and that there are evident morphisms $i_1:A\to A\oplus B$ and $i_2:B\to A\oplus B$ defined by $i_1(a)=a+0_B$ and $i_2(b)=0_A+b$, respectively. As with the disjoint union, this information is universal. In other words, if $C$ is any other abelian group together with group morphisms $j_1:A\to C$ and $j_2:B\to C$, then these morphisms factor uniquely through $i_1$ and $i_2$, respectively:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwxLCJBIl0sWzEsMCwiQiJdLFsxLDEsIkFcXG9wbHVzIEIiXSxbMiwyLCJDIl0sWzAsMiwiaV8xIl0sWzEsMiwiaV8yIiwyXSxbMCwzLCJqXzEiLDIseyJjdXJ2ZSI6MX1dLFsxLDMsImpfMiIsMCx7ImN1cnZlIjotMX1dLFsyLDMsIlxcZXhpc3RzIWgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Look at this diagram and compare with with the [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Examples of universal properties#^f76d9f\|diagram]] (in $\textbf{Set}$) for disjoint union At least as far as category theory is concerned, it's the same image!

![theyre-the-same-picture-pam-the-office.png](/img/user/00-09%20Meta/01%20Images/theyre-the-same-picture-pam-the-office.png)