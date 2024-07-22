---
{"dg-publish":true,"permalink":"/40-49-knowledge/42-homework-hints/determining-and-classifying-local-extrema/","updated":"2024-07-21T19:34:34-07:00"}
---

>[!quote] Problem 7, Section 14.7, [[Stewart - Calculus - 8e.pdf|Stewart's Calculus, 8e]]
>Find the local maximum and minimum values and saddle points of the function $f(x,y)=(x-y)(1-xy)$.

To make our lives easier, let's first multiply out the terms in $f$, to see that
$$f(x,y)=x-x^2y-y+xy^2.$$
We can then compute the gradient of $f$, obtaining
$$\nabla f = \begin{bmatrix} 1-2xy+y^2 \\ -x^2-1+2xy \end{bmatrix}.$$
The critical points of $f$ occur at the points where $\nabla f = {\bf 0}$, i.e., points $(x,y)$ that are solutions to the system of equations
1. $1-2xy+y^2=0$
2. $-x^2-1+2xy=0$

This system of equation is a bit tricky, but notice that if we add these two equations together with get the equation
$$y^2-x^2=0.$$
This equation is equivalent to $(y-x)(y+x)=0$, which implies that either $y=x$ or $y=-x$. We now consider each possibility in turn.

If $y=x$, then equation (1) becomes
$$1-2x(x)+(x)^2=0,$$
which simplifies to $1-x^2=0$. From this we can conclude that either $x=1$ (and so also $y=1$), or $x=-1$ (and so also $y=-1$). We've thus discovered two critical points, namely $(1,1)$ and $(-1,-1)$. (You can double-check these both are points where the gradient of $f$ is zero.)

If $y=-x$, then equation $(1)$ becomes
$$1-2x(-x)+(-x)^2=0,$$
which simplifies to $1+3x^2=0$. But this equation has no real solutions. So this case must not be possible.

So in the end we found two critical points. Now we can test them with our Second Derivative Test. I'll leave that up to you!