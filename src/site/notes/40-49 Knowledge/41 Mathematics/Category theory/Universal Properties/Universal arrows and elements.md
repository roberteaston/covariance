---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/universal-properties/universal-arrows-and-elements/","tags":["category_theory"],"updated":"2024-09-30T19:57:23-07:00"}
---

There are [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples\|examples]] scattered all throughout mathematics in which an object is constructed with certain special properties (usually in relation to some diagram or system of information) and then shown to be "special" in some way amongst the collection of all objects with such properties. Such an object is then usually granted a unique name, often with reference to the diagram of information from which that object was constructed.

It is possible in category theory to give a uniform description of these varied constructions. We first present a very abstract notion of *universal arrow*.

>[!note] Definition of universal arrow
>Suppose $F:\mathcal{C}\to \mathcal{D}$ is a functor and $d\in \mathcal{D}$. A **universal arrow from $d$ to $F$** is a pair $(r,u)$ consisting of an object $r\in \mathcal{C}$ and an arrow $u:d\to F(r)$ such that to every other pair $(c,f)$ with $c\in \mathcal{C}$ and $f:d\to F(c)$ there is a unique arrow $h:r\to c$ with $f=F(h)\circ d$.
>
>In other words, every arrow $f$ to $F$ factors uniquely through the universal arrow $u$, as in the commutative diagram below:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNSxbMCwwLCJyIl0sWzIsMCwiZCJdLFszLDAsIkYocikiXSxbMCwxLCJjIl0sWzMsMSwiRihjKSJdLFsxLDIsInUiXSxbMSw0LCJmIiwyXSxbMCwzLCJcXGV4aXN0cyFoIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsNCwiRihoKSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

There is also the dual notion of a **universal arrow from $F$ to $d$**, which is a pair $(r,v)$ consisting of an object $r\in\mathcal{C}$ and an arrow $v:F(r)\to d$ such that to every pair $(c,f)$ with $f:F(c)\to d$ there is a a unique $h:c\to r$ with $f=v\circ F(h)$. In other words, simply reverse all arrows in the diagram above.

## Example of universal arrows: free modules

Let $R$ be a ring and $U:R-\textbf{Mod}\to \textbf{Set}$ be the usual forgetful functor. The [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Free modules\|free module]] construction takes each set $A$ and produces an $R$-module $F(A)$. The function which sends each $a\in A$ to the same element $a\in F(A)$ regarded as a formal $R$-linear sum of elements of $A$ is an arrow $j:A\to U(F(A))$. For any other $R$-module $M$, each function $f:A\to U(M)$ can be extended uniquely to a module morphism $h:F(A)\to M$ with $f=U(h)\circ j$. This states exactly that $j$ is a universal arrow from $A$ to $U$.

# Universal elements

A special case of the notion of *universal arrow* is that of a *universal element*.

>[!note] Definition of universal element
>Suppose $\mathcal{C}$ is a category and $H:\mathcal{C}\to \textbf{Set}$ is a functor. A **universal element** of the functor $H$ is a pair $(r,e)$ consisting of an object $r\in\mathcal{C}$ and an element $e\in H(r)$ such that for every pair $(c,x)$ with $x\in H(c)$ there is a unique arrow $f:r\to c$ in $\mathcal{C}$ with $(Hf)(e) = x$.

## Example of universal elements: Quotient by equivalence relations

Suppose $E$ is an equivalence relation on a set $X$, with corresponding quotient set $X/E$ and projection map $p:X\to X/E$. The set $X/E$ has the familiar property that any function $f$ on $X$ that respects the equivalence relation can be regarded as a function on $X/E$. More formally, this means that if $f:X\to S$ is a function such that $f(x)=f(x')$ whenever $(x,x')\in E$, then there exists a unique function $h:X/E\to S$ such that $f = h\circ p$. This states exactly that $(X/E, p)$ is a universal element for the functor $H:\textbf{Set}\to\textbf{Set}$ that assigns each set $S$ to the set $H(S)$ of all functions $f:X\to S$ for which $f(x)=f(x')$ whenever $(x,x')\in E$.