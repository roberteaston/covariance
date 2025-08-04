---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-series/fourier-series-solutions-iv-computing-fourier-coefficients/","tags":["differential_equations"],"updated":"2025-08-04T08:44:50-07:00"}
---

We will now answer one of three main questions about Fourier series:

> [!question]
> If a function $f$ can be represented by a (complex) Fourier series, then what are the coefficients in that Fourier series?

## Representation by power series
---

Before answering this question, let's recall how the situation played out for power series. To that end, suppose a given function $f$ can be represented by a power series (centered at $x=0$, for simplicity). This means that there exist some constants $a_n$ such that

$$
f(x) = \sum_{n=0}^{\infty} a_n x^n,
$$

at least on some open interval around $x=0$. We can make various deductions from such an equality. For instance, we can evaluate both sides at $x=0$. This results in the equality

$$
f(0) = a_0.
$$

That's convenient, since we now know $a_0=f(0)$. We could also try evaluating both sides at other values of $x$, but there are two issues with that. The first is that we're not exactly certain on which interval around $x=0$ the equality holds. We just know they're equal on *some* open interval. Ignoring that issue, there's another problem. Suppose we knew the functions were also equal at $x=1$, say. Evaluating both sides at $x=1$ would then give

$$
f(1) = \sum_{n=0}^{\infty} a_n.
$$

This is nice, but it's an equality involving all of the unknown coefficients. We would prefer an equality involving a *single* coefficient, like how we found $f(0)=a_0$.

So we try another idea. Since $f$ equals the power series near $x$, the derivative of $f$ should also match the derivative of the power series, at least near $x$. In other words, we should also have

$$
f'(x) = \sum_{n=1} n a_nx^{n-1}.
$$

Now we return to our initial idea, once again evaluating both sides at $x=0$. This gives

$$
f'(0) = 1\cdot a_1,
$$

and hence $a_1 = f'(0)$. At this point, the strategy is clear. If we take $k$ derivatives on both sides of our original equation and then evaluate at $x=0$, we obtain the equality

$$
f^{(k)}(0) = k! a_k,
$$

and hence $a_k = \frac{f^{(k)}(0)}{k!}$. We thus conclude that *if* any power series centered at $x=0$ represents $f$, then that power series must be

$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n.
$$


## Representation by complex exponential functions
---

We now try a similar strategy for (complex) Fourier series. Suppose $f(t)$ can be represented by some Fourier series. That is, suppose

$$
f(t) = \sum_{n=-\infty}^{\infty} c_n e^{2\pi int}.
$$

If we assume this equality is meant to hold for all real $t$, then in principle we can evaluate both sides at any value of $t$ we so desire. For example, evaluating both sides at $t=0$ yields

$$
f(0) = \sum_{n=-\infty}^{\infty} c_n.
$$

Much like when we evaluated the power series at $x=1$ above, we have learned *something* about the Fourier coefficients, but not exactly what we were looking for. Instead of determining any single coefficient, we obtained an equality involving every coefficient. Taking derivatives doesn't help this time, either, as one can readily verify. For example, we can deduce that

$$
f'(t) = \sum_{n=-\infty}^{\infty} 2\pi in c_n e^{2\pi int},
$$

and evaluating at $t=0$ then gives

$$
f'(0) = \sum_{n=-\infty}^{\infty} 2\pi in c_n.
$$

Again, we've learned something, but it's not clear how useful that information is.

So we're forced to try something new. What we're about to do could fairly be described as a trick, in that it's not intuitively clear from where this idea originates.^[We will soon see a straightforward explanation for what's really going on with this idea.] In any case, this trick should (for the moment) simply be viewed as a way to isolate the value of any single coefficient. To that end, suppose we wish to obtain an equality involving only the coefficient $c_m$, for some fixed integer $m$. Observe that whenever $n$ is an integer distinct from $m$, we have

$$
\begin{align*}
\int_0^1 e^{2\pi inx}e^{-2\pi imx}\,\operatorname{d} x &= \int_0^1 e^{2\pi i(n-m)x}\,\operatorname{d} x = \frac{1}{2\pi i(n-m)}\left(e^{2\pi i(n-m)}-e^0\right)\\
&= \frac{1}{2\pi i(n-m)}(1-1) = 0.
\end{align*}
$$

(Recall that $e^{2\pi ik}=1$ whenever $k$ is an integer.) On the other hand, when $n=m$, we have

$$
\int_0^1 e^{2\pi imx}e^{-2\pi imx}\,\operatorname{d} x = \int_0^1 1\,\operatorname{d} x = 1.
$$

We've discovered an operation that can "extract" information about $c_m$, namely to multiply by $e^{-2\pi mx}$ and integrate over $[0,1]$. So let's try that with our original equation:

$$
\begin{align*}
\int_0^1 f(x)e^{-2\pi imx}\,\operatorname{d} x &= \int_0^1 \left(\sum_{n=-\infty}^{\infty} c_n e^{2\pi inx}\right)e^{-2\pi imx}\,\operatorname{d} x\\
&= \int_0^1 \left(\sum_{n=-\infty}^{\infty} c_n e^{2\pi i(n-m)x}\right)\,\operatorname{d} x\\
&= \sum_{n=-\infty}^{\infty} c_n\left(\int_0^1 e^{2\pi i(n-m)x}\,\operatorname{d} x\right)\\
&= c_m.
\end{align*}
$$

> [!warning]
> It is not always safe to interchange the order of integration and infinite summation, but we won't worry about that danger here.

*Under construction*
## Suggested next notes
---

*Coming soon*
