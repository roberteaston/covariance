---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2024-summer/reu-meeting-2024-08-13/","updated":"2024-08-20T10:38:20-07:00"}
---

This following is a brief summary of our research meeting on 2024-08-13.

We briefly chatted about the derivation of the equation for the dual conic in the classical case. Here's a super short summary of that derivation:

Suppose the plane conic is given by the equation
$$ax^2+bxy+cy^2+dx+ey+f=0.$$
Let $L$ be the line in the plane given by the linear equation
$$Ax+By+C=0.$$
To find the points of intersection of this line with the given conic, we can solve the linear equation for one variable (say, $x$) and then substitute that expression into the equation for the conic, eventually producing a quadratic equation in the remaining variable. That quadratic equation generally has two solutions (corresponding to the two intersection points of a line with a conic), but we are interested exactly in the case when there is only one solution. Fortunately, the classic [discriminant](https://en.wikipedia.org/wiki/Discriminant) can detect exactly that. The discriminant is a number (derived from the coefficients of the polynomial) that vanishes exactly when the polynomial has a repeated root. In our case, setting the discriminant to zero produces a quadratic equation in $A, B, C$ that exactly tells us when the line intersects the conic in exactly one point, i.e., when the line is tangent to the conic. This quadratic equation is the equation for the dual conic.

As we chatted about in our meeting today, it's not clear how directly applicable this strategy is to the tropical case. In our case, finding where two tropical bend loci intersect is not the same as finding where a single tropical polynomial vanishes. So what we need to do is to try to adapt the general *strategy* of the classical case to the tropical setting.

As a first approach, I suggested the following strategy:
- We cannot use the "equation" for our tropical line to solve for one variable in terms of the other, since our tropical line is a bend locus (not a congruence variety).
- On the other hand, our tropical line is the union of three congruence varieties. For example, the tropical line given by the bend locus of $f(x,y)=(2\odot x)\oplus (3\odot y)\oplus 1$ is covered by the three congruence varieties given by the equations $2\odot x = (3\odot y)\oplus 1$, $3\odot y=(2\odot x)\oplus 1$, and $1=(2\odot x)\oplus (3\odot y)$. (If we used homogeneous coordinates, then each of these three equations would essentially give us one variable in terms of the other two.)
- Perhaps we can first investigate algebraic conditions for detecting when each of these three simple congruence varieties intersect a given tropical conic.
- It should theoretically then be possible to derive an algebraic condition for when the original tropical line intersects the conic in only one point.

# Tasks for next meeting

- Investigate some specific examples of a fixed tropic conic (say of Type $B_1$) and various tropical lines.
- Choose some lines that are "definitely secant", some that are "definitely tangent", and some that are "sorta tangent"
- For each of those lines, cover the line with the three congruence varieties as above. Look for an algebraic method that can determine where those congruence varieties each intersect the conic. (Note that every point on the bend locus is covered by two of the congruence varieties, so each intersection point should be detected twice).
- Try to find an algebraic condition (on the coefficients of the tropical linear polynomial giving the tropical line) that detect the "tangency level" of that tropical line.