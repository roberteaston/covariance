---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2024-summer/reu-meeting-2024-07-23/","updated":"2024-07-25T06:02:43-07:00"}
---

This following is a brief summary of our research meeting on 2024-07-23.

## Summary of discoveries and investigations

- Aaron looked at the congruence variety $x^{\odot 3}\oplus (2\odot x)\oplus 4=(3\odot x)\oplus(-3)$. In real operations, this equality is $\max\{3x, x+2, 4\}=\max\{x+3,-3\}$. He found the solutions were $x=\frac{3}{2}$ and $x=1$.
-  When then investigated how you can quickly visualize congruence varieties by sketching the graphs of the tropical polynomials on each side of the equality (producing curves in the tropical plane) and then looking for where those curves intersect.
- Working in Desmos (which allows us to see and manipulate those graphs in real time), we were easily able to come up with tropical curves that intersected along entire intervals (as opposed to only at discrete points).
  
When then moved to two-variable polynomials and saw:
- How the tropical plane can be divided into different regions, according to which monomial (of a given polynomial) is maximum
	- For a linear polynomial $f(x)=(a\odot x)\oplus (b\odot y)\oplus c$, the plane is divided into three regions, according to whether the maximum is achieved by $a\odot x$, $b\odot y$, or $c$.
	- For a quadratic polynomial, the plane is divided into at most six regions, according to which of the six monomial terms is maximal.
- We then saw how this information could help:
	- Sketch bend loci of quadratic tropical polynomials (i.e., tropical plane conics)
	- Determine congruence varieties involving linear and/or quadratic tropical polynomials


# Tasks for next meeting

- [ ] Using [Desmos](https://www.desmos.com/calculator/mkaf5lwrbt), investigate how tropical lines intersect tropical conics.
- [ ] For a fixed conic, try moving around a tropical line while looking at how it intersects the conic. Lines that intersect the conic in two points should probably be considered "secant". As we move the tropical line around, there will be times when two distinct intersection points seem to come together to a single point. When that happens, it seems reasonable to consider such a tropical line "tangent".
- [ ] With this working definition of tropical tangency, try to sketch the locus (of the vertices) of all tropical lines that seem to be tangent to the given conic.
- [ ] If you look into the Desmos code on that page, you'll notice a second point being plotted as you move the tropical line around. That point is the dual point to the tropical line. Try to sketch the locus of points dual to lines tangent to your conic.
- [ ] If possible, try to find a congruence variety (i.e., tropical equation) for the resulting region.