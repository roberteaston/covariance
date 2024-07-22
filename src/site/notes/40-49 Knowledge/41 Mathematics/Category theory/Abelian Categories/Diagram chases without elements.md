---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/diagram-chases-without-elements/","updated":"2024-03-06T14:01:51-08:00"}
---


It is possible to perform diagram chases even in categories in which the objects are not sets, with a mathematical sleight-of-hand using something called *members*.

Call an arrow $x$ with codomain $a\in A$ a **member** of $a$, written $x\in_m a$, and define $x\equiv y$ for two members of $a$ to mean there are epimorphisms $u,v$ with $xy=yv$. One can check this is an equivalence relation on the set of members of $a$. We can then think of members of $a$ as equivalence classes of arrows to $a$, with this relation.

Each object $a$ has a zero member (the equivalence class of the zero arrow $0\to a$). Each member $x\in_m a$ also has a "negative", denoted $-x$.

>[!summary] Rules for chasing diagrams
>For the members in any abelian category:
>1. $f:a\to b$ is a monomorphism if and only if for all $x\in_m a$, $fx\equiv 0$ implies $x\equiv 0$;
>2. $f:a\to b$ is a monomorphism if and only if, for all $x,x'\in_m a$, $fx\equiv fx'$ implies $x\equiv x'$;
>3. $g:b\to c$ is an epimorphism if and only if for each $z\in_m c$ there is $y\in_m b$ with $gy\equiv z$;
>4. $h:r\to s$ is the zero arrow if and only if, for all $x\in_m r$, $hx\equiv 0$;
>5. A sequence $a\xrightarrow{f} b\xrightarrow{g} c$ is exact at $b$ if and only if $gf=0$ and to every $y\in_m b$ with $gy\equiv 0$ there exists $x\in_m a$ with $fx\equiv y$;
>6. (Subtraction) Given $g:b\to c$ and $x,y\in_m b$ with $gx\equiv gy$, there is a member $z\in_m b$ with $gz\equiv 0$; moreover, any $f:b\to d$ with $fx\equiv 0$ has $fy\equiv fz$ and any $h:b\to a$ with $hy\equiv 0$ has $hx\equiv -hz$.