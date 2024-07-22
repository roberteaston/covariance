---
{"dg-publish":true,"permalink":"/40-49-knowledge/42-homework-hints/determining-constrained-extrema/","updated":"2024-07-21T19:34:38-07:00"}
---

>[!quote] Problem 5, Section 14.8, [[Stewart - Calculus - 8e.pdf|Stewart's Calculus, 8e]]
>Find the extreme values of the function $f(x,y)=xy$ subject to the constraint $4x^2+y^2=8$.

Let $g(x,y)=4x^2+y^2$. The constrained critical points are those points that satisfy $g(x,y)=8$ and at which the gradient vectors $\nabla f$ and $\nabla g$ are parallel. So we first compute those gradient vectors:
$$\nabla f = \begin{bmatrix} y \\ x\end{bmatrix}\quad\text{and}\quad \nabla g = \begin{bmatrix} 8x\\ 2y\end{bmatrix}.$$
Using the "determinant trick", these vectors are parallel exactly when the determinant of the $2\times 2$ matrix with these vectors as its column vanishes. So we compute
$$\det \begin{bmatrix} y & 8x \\ x & 2y\end{bmatrix} = y\cdot 2y-8x\cdot x = 2y^2-8x^2.$$
So now we need to solve the system of equations
$$\begin{align*}
4x^2+y^2&=8\\
2y^2-8x^2&=0.
\end{align*}$$

There are various ways we can solve these two equations. For instance, we might solve the second equation for $y^2$ to get $y^2=4x^2$, and then substitute that into the first equation to get $4x^2+(4x^2)=8$, which simplifies to $x^2=1$, and so either $x=1$ or $x=-1$. Since $y^2=4x^2$, both of these cases imply $y^2=4$, and so either $y=2$ or $y=-2$. Note that this means we've found four points, namely $(1,2), (1,-2),(-1,2)$, and $(-1,-2)$.

To determine the max and min values of $f$, we now simply evaluate $f$ at each of these four points. The highest value is the max and the lowest value is the min.