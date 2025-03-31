---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/algebraic-geometry/examples-of-classical-conic-duality/","tags":["algebraic_geometry"],"updated":"2025-03-31T07:24:09-07:00"}
---

## Example: The classic plane parabola
---

Let's work through how the classical duality map works for the classic plane parabola $C$, given by the equation $y=x^2$ in ${\bf R}^2$.

First let's fix some points on $C$, say $P_1 = (0,0)$, $P_2=(1,1)$ and $P_2=(2,4)$.

>[!summary] Computing tangent lines
>Using standard calculus, determine the equation of the line $L_i$ tangent to the curve $C$ at the point $P_i$, for each $i$.

*Solution:* By standard calculus, we have $\frac{\operatorname{d}y}{\operatorname{d}x}=2x$, and so using the point-slope formula $y-y_0=m(x-x_0)$ we find that:
- the tangent line $L_1$ at $(0,0)$ is given by $y=0$, or equivalently $0\cdot x+y+0=0$.
- the tangent line $L_2$ at $(1,1)$ is given by $y=2x-1$, or equivalently $2x-y-1=0$.
- the tangent line $L_2$ at $(2,4)$ is given by $y=4x-4$, or equivalently $4x- y-4-0$.

---

Next let's embed everything into ${\bf P}^2({\bf R})$, which from this point on we will simply call ${\bf P}^2$. Let ${\bf R}^2\hookrightarrow {\bf P}^2$  be the standard embedding of the affine plane into the projective plane using the first affine coordinate chart, $U_1$. In other words let it be the map that sends each point $(a,b)\in {\bf R}^2$ to the point $[a:b:1]\in {\bf P}^2$.

>[!summary] Projectivization
>Write down the images of each point $P_i$, as well as the homogenized equations for $C$ and the three tangent lines you found above.

*Solution:*

Under the given embedding, the points $(0,0), (1,1), (2,4)$ correspond to the points $[0:0:1], [1:1:1], [2:4:1]$ under the given embedding. As for the homogenizations of the different equations:
- the homogenization of the equation $y=x^2$ is $yz=x^2$, or equivalently $x^2-yz=0$
- the homogenization of the equation $y=0$ is ... also $y=0$
- the homogenization of the equation $2x-y-1=0$ is $2x-y-z=0$
- the homogenization of the equation $4x-y-4=0$ is $4x-y-4z=0$

>[!note] A note about common notation
>It is common to use capital letters for coordinates of points (or for variables) in ${\bf P}^2$. In this case, the embedding ${\bf R}^2\hookrightarrow {\bf P}^2$ corresponds to the coordinate equations $x=\frac{X}{Z}$, $Y=\frac{y}{z}$, $Z=1$. Using this convention and these equations, we would write the above homogenizations as $X^2-YZ=0$, etc.

---
The zero sets of the homogenized equations of $C$ (and each $L_i$) determine projective varieties in ${\bf P}^2$, called the **projective closures** of the original varieties and denoted $\overline{C}$ (and $\overline{L}_i$, respectively).

>[!summary] Duals
>1. Using your homogeneous equations for the tangent lines $\overline{L}_i$, write down the corresponding points $\check{\overline{L}_i}$ in the dual space $\check{{\bf P}}^2$.
>2. Use the formula in Kathryn's summary to write down the equation for the dual $\check{{\overline C}}$ of the curve ${\overline C}$.
>3. Verify that each point $\check{\overline{L}_i}$ lies on the dual conic $\check{{\overline C}}$.
>

*Solution:*

We first handle the duals of the tangent lines:
- the line $\overline{L}_1$ is given by the equation $0\cdot X+1\cdot Y+0\cdot Z=0$, and so the corresponding dual point is $\check{\overline{L}_i}=[0:1:0]$.
- the line $\overline{L}_2$  is given by the equation $2\cdot X-1\cdot Y-1\cdot Z=0$, and so the corresponding dual point is $\check{\overline{L}_i}=[2:-1:-1]$.
- the line $\overline{L}_3$  is given by the equation $4\cdot X-\cdot Y-4\cdot Z=0$, and so the corresponding dual point is $\check{\overline{L}_i}=[4:-1:-4]$.

As for the dual conic, let's first recall the general duality result, snipped here from Kathryn's paper:

![[00-09 Meta/06 Attachments/Kathryn Burton - Tropical Conics and the Search for a Tropical Dual Map 1.png\|800]]

Note that we are now using capital letters for our variables, and our equation for $\overline{C}$ is $X^2-YZ=0$. So for our curve we have $a=1$, $e=-1$, and $b=c=d=f=0$. If we use the variables $U, V, W$ for the polynomials on the dual plane, then the dual curve should be given by $U^2-4VW=0.$

It is now straightforward to verify that the points $[0:1:0]$, $[2:-1:-1]$ and $[4:-1:-4]$ all satisfy this equation.


---
## Example: The unit circle
---

>[!summary] The unit circle
>Repeat the same steps above with the unit circle in ${\bf R}^2$, defined by the equation $x^2+y^2=1$. (Choose a few of your favorite points on the unit circle.)

*Solution.*

Let's use the following points:
- $P_1=(0,1)$
- $P_2=\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$
- $P_3=\left(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$

Using implicit differentiation, we have $2x+2y\frac{\operatorname{d}y}{\operatorname{d}x}=0$ and hence $\frac{\operatorname{d}y}{\operatorname{d}x}=-\frac{x}{y}$. This lets us quickly compute the slopes of the tangent lines at each of our three points, and hence discover that the equations of the tangent lines at the three chosen points are:
- $y-1= 0\cdot (x-0)$, or equivalently $y-1=0$.
- $y-\frac{1}{2}=-\sqrt{3}\left(x-\frac{\sqrt{3}}{2}\right)$, or equivalently $\sqrt{3}x+y-2=0$
- $y-\frac{\sqrt{2}}{2}=1\cdot\left(x+\frac{\sqrt{2}}{2}\right)$, or equivalently $x-y+\sqrt{2}=0$

Following our usual homogenization, the corresponding points in the dual projective space are $[0:1:-1]$, $[\sqrt{3}:1:-2]$ and $[1:-1:\sqrt{2}]$, respectively.

Also, in standard format, the projectivization of our curve is given by $X^2+Y^2-Z^2=0$, so $a=c=1$, $f=-1$ and $b=d=e=0$. The equation for the dual curve is then $4U^2+4V^2-4W^2=0$. It's now straightforward to verify the three dual points above do indeed lie on this curve.

Rather amazingly, this dual curve looks *exactly* like our original curve. In this case, it makes sense to say our curve is **self dual**.

---

>[!question] Challenging question
>Can you figure out how to deduce the equation for the dual conic? In other words, given a projective plane conic defined by $ax^2+bxy+cy^2+dxz+eyz+fz^2=0$, can you find conditions for a projective line given by $Ax+By+Cz=0$ to be tangent to the conic? And if so, can you find the equation(s) on $A$, $B$ and $C$ that exactly describes all such tangent lines?

