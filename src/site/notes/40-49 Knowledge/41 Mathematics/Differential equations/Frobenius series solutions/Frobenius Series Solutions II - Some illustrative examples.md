---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/frobenius-series-solutions/frobenius-series-solutions-ii-some-illustrative-examples/","tags":["differential_equations"],"updated":"2025-07-30T15:30:01-07:00"}
---

The full story about solutions to differential equations of the form

$$y''+p(x)y'+q(x)y=0$$

is surprisingly complicated. Before we reveal the details, let's look at some illustrative examples.

## Illustrative examples
---

### Example 1: When all goes according to plan

Consider the differential equation

$$x^2 y''+\frac{1}{2}xy'-\frac{1}{2}(1+x)y = 0.$$

If we substitute in the generic Frobenius series $\displaystyle y=x^r\sum_{n=0}^{\infty} a_n x^n$ (with $a_0\neq 0$), the left-hand side of the differential equation eventually simplifies to

$$x^r\left(\left(r^2-\frac{1}{2}r-\frac{1}{2}\right)a_0+\sum_{m=1}^{\infty} \left((m+r-1)(2m+2r+1)a_m-a_{m-1}\right)x^m\right)$$

It follows that our Frobenius series is a solution exactly when

$$\left(r^2-\frac{1}{2}r-\frac{1}{2}\right)a_0=0$$

and for $m\geq 1$

$$(m+r-1)(2m+2r+1)a_m-a_{m-1}=0.$$

We assumed $a_0\neq 0$, so the only solutions to the first equation are $r=1$ and $r=-\frac{1}{2}$.

When $r=1$, the second equation simplifies to

$$m(2m+3)a_m-a_{m-1}=0$$

for $m\geq 1$. We can then deduce that

$$
\begin{align*}
a_1 &= \frac{1}{5}a_0\\
a_2 &= \frac{1}{14}a_1  = \frac{1}{70}a_0\\
&\vdots
\end{align*}
$$

We've thus found our first family of Frobenius series solutions, namely

$$y(x) = x^1\left(a_0+\frac{1}{5}a_0x+\frac{1}{70}a_0x^2+\cdots\right)$$

Note that these are all multiples of the particular solution

$$y_1(x) = x\left(1+\frac{1}{5}x+\frac{1}{70}x^2+\cdots\right).$$

When $r=-\frac{1}{2}$, the second equation (earlier) simplifies to

$$\left(m-\frac{3}{2}\right)2m-a_{m-1}=0,$$

or equivalently,

$$m(2m-3)a_m - a_{m-1}=0.$$

We can now deduce that

$$
\begin{align*}
a_1 &= \frac{1}{-1}a_0 = -a_0\\
a_2 &= \frac{1}{2}a_1 = -\frac{1}{2}a_0\\
&\vdots
\end{align*}
$$

We've thus found our second family of Frobenius series solutions, namely

$$y(x) = x^{-1/2}\left(a_0-a_0x-\frac{1}{2}a_0x^2+\cdots\right).$$

These solutions are all multiples of the particular solution

$$y_2(x)= x^{-1/2}\left(1-x-\frac{1}{2}x^2+\cdots\right).$$

It's a fact (and hopefully a plausible one) that our two particular solutions are linearly independent, and so the general solution to our differential equation is

$$y(x) = c_1y_1(x)+c_2 y_2(x).$$

This is the best possible outcome for us.

### Example 2: When something "goes wrong" with one of the hypothetical Frobenius series solutions

Let's now consider the differential equation

$$x^2 y''+x(1+2x)y'-\frac{1}{4}(1-2x)y=0.$$

Repeating the same strategy as above, if substitute in the general Frobenius series, the left-hand side above eventually simplifies to

$$x^r\left(\left(r^2-\frac{1}{4}\right)a_0+\sum_{m=1}^{\infty} \left(\left((m+r)^2-\frac{1}{4}\right)a_m+2(m+r)a_{m-1}\right)x^m\right)$$

It follows that our Frobenius series is a solution exactly when

$$\left(r^2-\frac{1}{4}\right)a_0=0$$

and for $m\geq 1$

$$\left((m+r)^2-\frac{1}{4}\right)a_m+2(m+r)a_{m-1}=0.$$

As before, we always assume $a_0\neq 0$ (with Frobenius series), so the first equation implies $r=\pm \frac{1}{2}$.

When $r=\frac{1}{2}$, the second equation simplifies to

$$m(m+1)a_m+(2m+1)a_{m-1}=0.$$

We can now deduce that

$$
\begin{align*}
a_1 &= -\frac{3}{2}a_0\\
a_2 &= -\frac{5}{6}a_1 = \frac{5}{4}a_0\\
&\vdots
\end{align*}
$$

We've thus found our first family of Frobenius series solutions, namely those of the form

$$y(x) = x^{1/2}\left(a_0-\frac{3}{2}a_0x+\frac{5}{4}a_0x^2+\cdots\right)$$

These solutions are all multiples of the particular solution

$$y_1(x)=x^{1/2}\left(1-\frac{3}{2}x+\frac{5}{4}x^2+\cdots\right).$$

We now repeat the analysis when $r=-\frac{1}{2}$. In that case, the second equation (earlier) simplifies to

$$m(m-1)a_m+(2m-1)a_{m-1}=0.$$

For the first time ever, something strange now happens. When $m=1$, the above equation becomes

$$1\cdot 0 \cdot a_1 + 1\cdot a_0 = 0,$$

and hence $a_0=0$. But we assumed $a_0\neq 0$, so this is a contradiction!

Thus, there are no other Frobenius series solutions (and we're left wondering how to find a second, linearly independent solution).

### Example 3: Partially doomed for certain

Finally, let's consider the differential equation

$$x^2 y''+x(3-x)y'+y=0.$$

Repeating our procedure, after substituting in the general Frobenius series the left-hand side of the above differential equation eventually simplifies to

$$x^r\left((r^2+2r+1)a_0+\sum_{m=1}^{\infty} \left((m^2+2mr+r^2+2m+2r+1)a_m-(m+r-1)a_{m-1}\right)x^m\right).$$

It follows that our Frobenius series is a solution to the differential equation exactly when

$$(r^2+2r+1)a_0=0$$

and for $m\geq 1$ we have

$$(m^2+2mr+r^2+2m+2r+1)a_m-(m+r-1)a_{m-1}=0.$$

As usual, since $a_0\neq 0$ the first equation implies $r=-1$ (and only $r=-1$). The second equation then massively simplifies to

$$m^2a_m-(m-2)a_{m-1}=0.$$

We can now deduce that

$$
\begin{align*}
a_1 &= \frac{-1}{1}a_0 = -a_0\\
a_2 &= \frac{0}{4}a_1 = 0\\
a_3 &= \frac{1}{9}a_2 = 0\\
&\vdots
\end{align*}
$$

(Notice that $a_m=0$ for all $m\geq 2$ in this case!) We've thus found that all Frobenius series solutions to our differential equation are of the form

$$y(x) = x^{-1}(a_0-a_0x+0x^2+0x^3+\cdots) = x^{-1}(a_0-a_1x).$$

These are all multiples of the particular solution

$$y_1(x)=x^{-1}(1-x) = x^{-1}-1.$$

As with the previous example, we are left wondering about the mysteriously missing second, linearly independent solution ...

## What's going on?!
---

There are a few common features we might notice after comparing the above three examples (as well as examples from previous notes).

First, we might notice that (after substituting in the general Frobenius series and simplifying) we eventually deduced that $r$ needed to be a root of a particular quadratic equation. That implied that at most two values of $r$ were possible, and (at least in the last example) sometimes only one.

Comparing the first two examples, we might (somewhat surprisingly) note that it's *not* true that having two valid values for $r$ leads to two Frobenius series solutions. Sometimes something can "go wrong" with one of the potential solutions.

Lastly, it seems like we at least always find one Frobenius series solution. Can we say any more, and when there's only one, can we say anything about the mysterious second (missing) solution?

Let's save the full story in the next note.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Frobenius series solutions/Frobenius Series Solutions III - Frobenius theory\|Frobenius Series Solutions III - Frobenius theory]]