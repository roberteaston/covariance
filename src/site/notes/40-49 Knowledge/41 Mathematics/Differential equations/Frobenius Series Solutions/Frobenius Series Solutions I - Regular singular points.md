---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/frobenius-series-solutions/frobenius-series-solutions-i-regular-singular-points/","tags":["differential_equations"],"updated":"2025-07-29T14:39:24-07:00"}
---

## Motivating examples
---

### Example

Let's begin by looking for solutions to the differential equation

$$x^2 y''+xy'-2y=0.$$

In standard form this differential equation is

$$y''+\frac{1}{x}y'-\frac{2}{x^2}y=0,$$

so $x_0=0$ is a singular point of our differential equation. By our earlier result, this means we are *not* guaranteed that the general solution is analytic at $x_0=0$, i.e., it is not guaranteed that the general solution can be represented by a power series centered at $x_0$. We could try looking for a power series solution anyway, but let's instead go back to one of our earlier ideas, namely to look for solutions of the form $y=x^r$ where $r$ is some number. If we substitute $y=x^r$ into the original differential equation above, we find

$$
\begin{align*}
x^2 y''+xy'-2y &= x^2\cdot r(r-1)x^{r-2}+x\cdot rx^{r-1}-2x^r\\
&= (r(r-1)+r-2)x^r\\
&= (r^2-2)x^r.
\end{align*}
$$

It follows that $y=x^r$ is a solution exactly when $r^2-2=0$, i.e., when $r=\pm \sqrt{2}$. We have therefore discovered two solutions to our differential equation, namely $y_1(x)=x^{\sqrt{2}}$ and $y_2(x)=x^{-\sqrt{2}}$. It's a fact that these two functions are linearly independent, so we can now conclude that the general solution to our differential equation is

$$y=a_1 x^{\sqrt{2}}+a_2 x^{-\sqrt{2}}.$$

### Example

Now consider the differential equation

$$x^2y''+xe^{2x}y'-2\cos(x)y=0$$

As with the previous differential equation, we can quickly verify that $x_0=0$ is a singular point of this differential equation. If we repeat our idea exactly from the previous example, and plug in $y=x^r$, we find that

$$
\begin{align*}
x^2y''+xe^{2x}y'-2\cos(x)y &= x^2\cdot r(r-1)x^{r-2}+xe^{2x}\cdot rx^{r-1}-2\cos(x)x^r\\
&= r(r-1)x^r+re^{2x}x^r-2\cos(x)x^r.
\end{align*}
$$

If we assume for the moment that $\{x^r, e^{2x}x^r, 2\cos(x)x^r\}$ is a linearly independent set, then there is no value of $r$ which makes the above combination identically vanish. In other words, there is no solution of the form $y=x^r$.

However, recall that when $x$ is a very small number (say very close to $0$, which is where we're focusing our attention in all of these problems), we have $e^{2x}\approx 1$ and $\cos(x)\approx 1$. This means that, at least for small values of $x$, our differential equation is "very close" to the differential equation

$$x^2 y''+xy'-2y=0,$$

which is exactly the differential equation from our first example. It stands to reason, then, that our differential equation should have solutions $y_1(x)\approx x^{\sqrt{2}}$ and $y_2(x)\approx x^{-\sqrt{2}}$. How do we find such solutions? Perhaps we could try looking for solutions that are a hybrid of functions of the form $y=x^r$ and power series, say functions of the form

$$y=x^r \sum_{n=0}^{\infty} a_n x^r.$$

Such a series is called a *Frobenius series*.

## Frobenius series
---

> [!note] Definition of a Frobenius series
> A **Frobenius series centered at $x_0$** is a series of the form
> 
> $$S(x) = (x-x_0)^r \sum_{n=0}^{\infty} a_n (x-x_0)^n,$$
> 
> where $r$ and all $a_n$ are real numbers.

It is standard practice to assume $a_0\neq 0$ in a Frobenius series, otherwise a given series can be written in multiple different ways as Frobenius series with different $r$ values. For example, consider the series ...

*Under construction*

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Frobenius Series Solutions/Frobenius Series Solutions II - Frobenius theory\|Frobenius Series Solutions II - Frobenius theory]]