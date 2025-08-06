---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-series/fourier-series-solutions-iv-computing-fourier-coefficients/","tags":["differential_equations"],"updated":"2025-08-06T08:22:28-07:00"}
---

We will now answer one of three main questions about Fourier series:

> [!question]
> If a periodic function $f$ can be represented by a (complex) Fourier series, then what are the coefficients in that Fourier series?

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

We now try a similar strategy for (complex) Fourier series. Suppose $f(t)$ is a periodic function with period $1$, and suppose $f(t)$ can be represented by some Fourier series. That is, suppose

$$
f(t) = \sum_{n=-\infty}^{\infty} c_n e^{2\pi int}.
$$

If we assume this equality is meant to hold for all real $t$, then in principle we can evaluate both sides at any value of $t$ we so desire. For example, evaluating both sides at $t=0$ yields

$$
f(0) = \sum_{n=-\infty}^{\infty} c_n=\cdots +c_{-2}+c_{-1}+c_0+c_1+c_2+\cdots.
$$

Much like when we evaluated the power series at $x=1$ above, we have learned *something* about the Fourier coefficients, but not exactly what we were looking for. Instead of determining any single coefficient, we obtained an equality involving every coefficient. Taking derivatives doesn't help this time, either, as one can readily verify. For example, we can deduce that

$$
f'(t) = \sum_{n=-\infty}^{\infty} 2\pi in c_n e^{2\pi int},
$$

and evaluating at $t=0$ then gives

$$
f'(0) = \sum_{n=-\infty}^{\infty} 2\pi in c_n=\cdots -4\pi ic_{-2}-2\pi ic_{-1}+2\pi ic_1+4\pi ic_2+\cdots.
$$

Again, we've learned something, but it's not clear how useful that information is.

So we're forced to try something new. What we're about to do could fairly be described as a trick, in that it's not intuitively clear from where this idea originates.^[We will soon see a straightforward explanation for what's really going on with this idea.] In any case, this trick should (for the moment) simply be viewed as a way to isolate the value of any single coefficient. To that end, suppose we wish to obtain an equality involving only the coefficient $c_m$, for some fixed integer $m$. Observe that whenever $n$ is an integer distinct from $m$, we have

$$
\begin{align*}
\int_0^1 e^{2\pi int}e^{-2\pi imt}\,\operatorname{d} t &= \int_0^1 e^{2\pi i(n-m)t}\,\operatorname{d} t = \frac{1}{2\pi i(n-m)}\left(e^{2\pi i(n-m)}-e^0\right)\\
&= \frac{1}{2\pi i(n-m)}(1-1) = 0.
\end{align*}
$$

(Recall that $e^{2\pi ik}=1$ whenever $k$ is an integer.) On the other hand, when $n=m$, we have

$$
\int_0^1 e^{2\pi imt}e^{-2\pi imt}\,\operatorname{d} t = \int_0^1 1\,\operatorname{d} t = 1.
$$

We've discovered an operation that can "extract" information about $c_m$, namely to multiply by $e^{-2\pi mt}$ and integrate over $[0,1]$. So let's try that with our original equation:

$$
\begin{align*}
\int_0^1 f(t)e^{-2\pi imt}\,\operatorname{d} t &= \int_0^1 \left(\sum_{n=-\infty}^{\infty} c_n e^{2\pi int}\right)e^{-2\pi imt}\,\operatorname{d} t\\
&= \int_0^1 \left(\sum_{n=-\infty}^{\infty} c_n e^{2\pi i(n-m)t}\right)\,\operatorname{d} t\\
&= \sum_{n=-\infty}^{\infty} c_n\left(\int_0^1 e^{2\pi i(n-m)t}\,\operatorname{d} t\right)\\
&= c_m.
\end{align*}
$$

> [!warning]
> It is not always safe to interchange the order of integration and infinite summation, but we won't worry about that danger here.

In summary, we've shown:

> [!summary] Integral formula for complex Fourier series coefficients
> Suppose $f(t)$ is a periodic function with period $1$. If
> 
> $$f(t)=\sum_{n=-\infty}^{\infty} c_n e^{2\pi int}$$
> 
> for some complex numbers $c_n$, then those complex numbers must satisfy
> 
> $$c_n = \int_0^1 f(t)e^{-2\pi int}\operatorname{d}t.$$

### Some remarks

The function $f(t)e^{-2\pi int}$ is always periodic with period $1$, so the above integral can be computed over any interval of length $1$, i.e.,

$$\int_0^1 f(t)e^{-2\pi int}\operatorname{d}t = \int_{a}^{a+1} f(t)^{-2\pi int}\operatorname{d}t.$$

Sometimes calculations can be made simpler by exploiting this fact; e.g., by computing

$$\int_{-\frac{1}{2}}^{\frac{1}{2}} f(t)e^{-2\pi int}\operatorname{d}t$$

when the function $f(t)$ is known to have some type of symmetry about the origin.

> [!note] New notation for the complex Fourier coefficients
> It is very common to write $\hat{f}(n)$ for the complex Fourier coefficient $c_n$ in the above result. In other words, they are the numbers that satisfy
> 
> $$\hat{f}(n)=\int_0^1 f(t)e^{-2\pi int}\operatorname{d}t.$$
> 
> If $f(t)$ is represented by any complex Fourier series, then that series must be the series
> 
> $$\sum_{n=-\infty}^{\infty} \hat{f}(n) e^{2\pi int}.$$
> 
> We call this series the **complex Fourier series corresponding to $f$** (even in the case $f$ itself does not exactly equal this series).


## Terrible example
---

We will have better examples in the next section, but let's start with an example of a function $f(t)$ for which we have two separate methods to compute the complex Fourier coefficients. To that end, consider the function

$$f(t)=\sin(2\pi t)-\cos(2\pi t)+5\sin(6\pi t).$$

Using our identities, we have

$$\begin{align*}
f(t)&= \sin(2\pi t)-\cos(2\pi t)+5\sin(6\pi t)\\
&= \frac{e^{2\pi it}-e^{-2\pi it}}{2i}-\frac{e^{2\pi it}+e^{-2\pi it}}{2}+5\cdot\frac{e^{6\pi it}-e^{-6\pi it}}{2i}\\
&= -\frac{5}{2i}e^{-6\pi it}+\left(-\frac{1}{2}-\frac{1}{2i}\right)e^{-2\pi it}+\left(-\frac{1}{2}+\frac{1}{2i}\right)e^{2\pi it}+\frac{5}{2i}e^{6\pi it}\\
&= \frac{5i}{2}e^{-6\pi it}+\left(-\frac{1}{2}+\frac{i}{2}\right)e^{-2\pi it}+\left(-\frac{1}{2}-\frac{i}{2}\right)e^{2\pi it}-\frac{5i}{2}e^{6\pi it}
\end{align*}$$

It immediately follows that

$$\hat{f}(-3)=\frac{5}{2}i,\quad \hat{f}(-1)=-\frac{1}{2}+\frac{1}{2}i,\quad \hat{f}(1)=-\frac{1}{2}-\frac{1}{2}i,\quad \hat{f}(3)=-\frac{5}{2}i,$$

and all other $\hat{f}(n)=0$.

Now let's do something incredibly painful and see how we can obtain these same values using the integral formula. By our integral formula, we have

$$\begin{align*}
\hat{f}(0)&=\int_0^1 f(t)\,\operatorname{d} t = \int_0^1 \sin(2\pi t)-\cos(2\pi t)+5\sin(6\pi t)\,\operatorname{d} t\\
&= \left[-\frac{1}{2\pi}\cos(2\pi t)-\frac{1}{2\pi}\sin(2\pi t)-\frac{5}{6\pi}\cos(6\pi t)\right]_0^1\\
&= 0.
\end{align*}$$

For all $n\neq 0$, we have

$$\begin{align*}
\hat{f}(n)&=\int_0^1 f(t)e^{-2\pi int}\,\operatorname{d} t = \int_0^1 (\sin(2\pi t)-\cos(2\pi t)+5\sin(6\pi t))e^{-2\pi int}\,\operatorname{d} t\\
&= \int_0^1\sin(2\pi t)e^{-2\pi int}\,\operatorname{d} t-\int_0^1\cos(2\pi t)e^{-2\pi int}\,\operatorname{d} t+5\int_0^1\sin(6\pi t)e^{-2\pi int}\,\operatorname{d} t.
\end{align*}$$

Each of these three integrals requires two integration by parts to compute. We could compute theme each manually, or we could look up the following general formulas in a table of integrals:

$$\begin{align*}
\int \sin(at)e^{bt}\,\operatorname{d} t &= \frac{1}{a^2+b^2}(b\sin(at)-a\cos(at))e^{bt}+C\\
\int \cos(at)e^{bt}\,\operatorname{d} t &= \frac{1}{a^2+b^2}(a\sin(at)+b\cos(at))e^{bt}+C.
\end{align*}$$

However, there is a small catch: these formulas are only valid when $a^2+b^2\neq 0$. For example, we have

$$\begin{align*}
\int_0^1 \sin(2\pi t)e^{-2\pi int}\,\operatorname{d} t&=\left[\frac{1}{4\pi^2-4\pi^2 n^2}(-2\pi in\sin(2\pi t)-2\pi \cos(2\pi t))e^{-2\pi int}\right]_0^1= 0,
\end{align*}$$

so long as $4\pi^2-4\pi^2 n^2\neq 0$, i.e., $n\neq \pm 1$. Similarly, for $n\neq \pm 1$ we also have

$$\begin{align*}
\int_0^1 \cos(2\pi t)e^{-2\pi int}\,\operatorname{d} t&=\left[\frac{1}{4\pi^2-4\pi^2 n^2}(2\pi\sin(2\pi t)-2\pi in\cos(2\pi t))e^{-2\pi itn}\right]_0^1= 0,
\end{align*}$$

and for $n\neq \pm 3$ we have

$$\begin{align*}
\int_0^1 \sin(6\pi t)e^{-2\pi int}\,\operatorname{d} t&=\left[\frac{1}{36\pi^2-4\pi^2 n^2}(-2\pi in\sin(6\pi t)-6\pi \cos(6\pi t))e^{-2\pi int}\right]_0^1= 0.
\end{align*}$$

We've thus shown that $\hat{f}(n)=0$ for all $n\neq \pm 1,\pm 3$. It remains to computer $\hat{f}(n)$ for $n=\pm 1,\pm 3$. For $n=1$, observe that

$$\begin{align*}
\int_0^1\sin(2\pi t)e^{-2\pi it}\,\operatorname{d} t &= \int_0^1 \sin(2\pi t)(\cos(2\pi t)-i\sin(2\pi t))\,\operatorname{d} t\\
&= \int_0^1\sin(2\pi t)\cos(2\pi t)\,\operatorname{d} t-i\int_0^1\sin^2(2\pi t)\,\operatorname{d} t\\
&= 0-i\cdot \frac{1}{2}= -\frac{1}{2}i,
\end{align*}$$

where we computed the last integrals by the usual methods of calculus. By a similar method, one computes

$$\begin{align*}
\int_0^1 \cos(2\pi t)e^{-2\pi it}\,\operatorname{d} t = \int_0^1\cos^2(2\pi t)\,\operatorname{d} t-i\int_0^1\sin(2\pi t)\cos(2\pi t)\,\operatorname{d} t = \frac{1}{2},
\end{align*}$$

and

$$\begin{align*}
\int_0^1\sin(6\pi t)e^{-2\pi it}\,\operatorname{d} t = \int_0^1\sin(6\pi t)\cos(2\pi t)\,\operatorname{d} t-i\int_0^1\sin(6\pi t)\sin(2\pi t)\,\operatorname{d} t=0.
\end{align*}$$

Putting these altogether gives

$$\begin{align*}
\hat{f}(1)&=\int_0^1\sin(2\pi t)e^{-2\pi it}\,\operatorname{d} t-\int_0^1 \cos(2\pi t)e^{-2\pi it}\,\operatorname{d} t+5\int_0^1\sin(6\pi t)e^{-2\pi it}\,\operatorname{d} t\\
&= -\frac{1}{2}i-\frac{1}{2}+5\cdot 0= -\frac{1}{2}-\frac{1}{2}i.
\end{align*}$$

We could repeat the same painful procedure to compute $\hat{f}(-1)$, or we could recall that $\hat{f}(-1)$ is the complex conjugate of $\hat{f}(1)$, and so $\hat{f}(-1)=-\frac{1}{2}+\frac{1}{2}i$.

We are done as soon as we repeat the above procedure for $n=3$. We will omit most of the details and just give the necessary integrals and their values. We ultimately find that

$$\begin{align*}
\hat{f}(3)&=\int_0^1\sin(2\pi t)e^{-6\pi it}\,\operatorname{d} t-\int_0^1 \cos(2\pi t)e^{-6\pi it}\,\operatorname{d} t+5\int_0^1\sin(6\pi t)e^{-6\pi it}\,\operatorname{d} t\\
&= 0-0+5\cdot \frac{-1}{2}i= -\frac{5}{2}i.
\end{align*}$$

As before, we then also have that $\hat{f}(-3)=\frac{5}{2}i$.

To summarize, we have found

$$\hat{f}(-3)=\frac{5}{2}i,\quad \hat{f}(-1)=-\frac{1}{2}+\frac{1}{2}i,\quad \hat{f}(1)=-\frac{1}{2}-\frac{1}{2}i,\quad \hat{f}(3)=-\frac{5}{2}i,$$

and all other $\hat{f}(n)=0$.


> [!note] Observation
> Look at how much easier it was to compute $\hat{f}(n)$ using the identities! Just as with computing Taylor series, sometimes it can really pay off not to rely exclusively on the integral formula to compute Fourier coefficients.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier series/Fourier series solutions V - Computing some Fourier series\|Fourier series solutions V - Computing some Fourier series]]
