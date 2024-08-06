---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/ring-theory/least-common-multiples/","updated":"2024-07-21T19:34:43-07:00"}
---

Setup: We're in a Euclidean domain $R$ and have elements $a,b\in R$.

We've shown that a least common multiple of $a$ and $b$ is any element $e\in R$ such that $\langle e\rangle = \langle a\rangle \cap \langle b\rangle$, and we've shown such an element is unique up to multiplication by a unit.

We're now showing that the element $e=\frac{ab}{d}$ is a least common multiple of $a$ and $b$, where $d$ is a greatest common divisor of $a$ and $b$.

We've established that $e$ is a common multiple of $a$ and $b$. Now we'll show it's the least common multiple. First recall that a property of a greatest common divisor is that it can be written as an $R$-linear combination of $a$ and $b$. In other words, there are elements $r, s\in R$ such that
$$d = ra+sb.$$
Note that since $d$ divides $a$ and $b$, we can actually "divide" this equation by $d$ to get
$$1=r\cdot \frac{a}{d}+s\cdot \frac{b}{d}.$$
(What we're really doing is writing $a=kd$ and $b=ld$ for some $k, l\in R$, and then using cancelation on both sides to get $1=rk+sl$.) We'll use this equality in a little bit.

Suppose $e'$ is a least common multiple of $a$ and $b$. Since $e$ is a common multiple and $e'$ is a least common multiple, this means $e=te'$ for some $t\in R$. We'll show that $t$ must be a unit, which will prove $e$ is also a least common multiple of $a$ and $b$. We also know $e'=xa=yb$ for some $x,y\in R$. Combining this with the equality $e=te'$ yields
$$\frac{ab}{d}=e=te'=txa\quad\text{and}\quad \frac{ab}{d}=e=te'=tyb.$$
In the first equality we can cancel $a$, and in the second equality we can cancel $b$, to get
$$\frac{b}{d}=tx\quad\text{and}\quad \frac{a}{d}=ty.$$
Finally we can use our earlier equality to deduce
$$1=r\cdot\frac{a}{d}+s\cdot \frac{b}{d}=r\cdot ty+s\cdot tx = t(ry+sx).$$
This proves $t$ is a unit in $R$, with inverse given by $ry+sx$. Since $e'$ is a least common multiple of $a$ and $b$, and since $e=te'$ with $t$ a unit, we've thus proven $e$ is also a least common multiple of $a$ and $b$.

