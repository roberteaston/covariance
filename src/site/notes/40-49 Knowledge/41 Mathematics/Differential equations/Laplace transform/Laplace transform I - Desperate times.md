---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/laplace-transform/laplace-transform-i-desperate-times/","tags":["differential_equations"],"updated":"2025-08-20T15:27:01-07:00"}
---

*Under construction!*

We've defined the Fourier transform of a function $f(t)$ by the integral formula

$$(\mathcal{F}f)(s)=\int_{-\infty}^{\infty} f(t)e^{-2\pi its}\operatorname{d}t,$$

provided the integral converges. We then saw that this transform has loads of nice properties, with a nearly symmetric inverse transform and the potential to provide an incredible new way to solve differential equations. However, we also discovered one glaring issue:

> [!warning] Trouble in paradise
> For most of our "familiar" functions, the above integral does not converge!

Our transform integral doesn't converge for polynomials, sine, cosine, basic exponential functions, etc. It doesn't even converge for the constant function $f(t)=1$!

You might argue that the "issue" is that the term $e^{-2\pi its}$ in the integrand does nothing to help convergence, since (for real values of $s$, at least) its simply a complex number whirling around on the unit circle in the complex plane. Maybe we can tinker with things a bit, with the goal of improving convergence without losing the main properties of the Fourier transform.

## Tinkering with our transform
---

Suppose we first considered tweaking the integrand by erasing that $i$, so that the integral became

$$\int_{-\infty}^{\infty} f(t)e^{-2\pi ts}\operatorname{d}t.$$

Now that exponential function $e^{-2\pi ts}$ has the potential to "help" the integral converge. Actually, that term will actually make things worse (i.e., it will grow exponentially) when $t\to -\infty$ (at least when $s>0$; if we allow $s<0$, then we'd need to worry about $t\to\infty$). So let's hedge our bets and adjust the lower bound, as well:

$$\int_0^{\infty} f(t)e^{-2\pi ts}\operatorname{d}t.$$

We could try to work with this, but let's make one last adjustment. That factor of $2\pi$ in the exponential function was originally there to help us create exponential functions of period $1$ when working with Fourier series. Now that we've removed the $i$ there's no justifiable reason to keep it (although we certainly could, if we wanted). Let's drop it, leaving us with the integral

$$\int_0^{\infty} f(t)e^{-ts}\operatorname{d}t.$$

And that's our new transform! Notice that it really only make sense to apply it to functions defined on $[0,\infty)$, since it won't incorporate any information of a function defined beyond that:

> [!note] Definition of the Laplace transform
> For each function $f$ defined on $[0,\infty)$, the **Laplace transform** of $f$ is the function denoted $(Lf)(s)$ defined by
> 
> $$(Lf)(s) =\int_0^{\infty} f(t)e^{-ts}\operatorname{d}t,$$
> 
> if the integral converges.

Remember our hope for this new transform is:
1. It exists for many more of our "familiar" functions.
2. It possesses properties similar to the Fourier transform.

In particular, we hope it can help us solve differential equations!

Before we start investigating this new transform, let's point out that it's clear this new transform is certainly still *linear*:

> [!summary] Linearity of the Laplace transform
> Suppose $f$ and $g$ are functions on $[0,\infty)$ that have Laplace transforms. Then:
> 1. $L(f+g)=Lf+Lg$
> 2. $L(c\cdot f) = c\cdot Lf$

## Examples
---

Let's get right to it and show that polynomials, sine and cosine, and basic exponential functions all have Laplace transforms.

### The Laplace transform of polynomials

First consider the function $f(t)=1$. By definition,

$$(Lf)(s) = \int_0^{\infty} e^{-ts}\operatorname{d}t=\lim_{b\to\infty} \int_0^b e^{-ts}\operatorname{d}t.$$

When $s=0$, we have

$$(Lf)(0) = \lim_{b\to \infty} \int_0^b 1\operatorname{d}t = \lim_{b\to\infty} b = \infty,$$

so the integral diverges. Assume now $s\neq 0$. Then we can make the substitution $u=-ts$, so that $\operatorname{d}u = -s\,\operatorname{d}t$ and we have

$$\begin{align*}
(Lf)(s)&=\lim_{b\to\infty} \int_0^{-bs} e^u\cdot \frac{\operatorname{d}u}{-s}\\
&= \lim_{b\to\infty}\frac{1}{-s}\left(e^{-bs}-1\right)\\
&=\begin{cases}\infty,&\text{ when }s<0\\\frac{1}{s},&\text{ when }s>0\end{cases}
\end{align*}$$

So, we've proven than $(Lf)(s)=\frac{1}{s}$ with domain $s>0$. We will often write this more succinctly as:

$$L(1) = \frac{1}{s}\quad (\text{for }s>0)$$

If we repeat this same type of analysis for the function $f(t)=t$, we ultimately find a similar formula, namely that

$$L(t)=\frac{1}{s^2}\quad (\text{for }s>0)$$

In fact, it's not terribly hard to prove the following general rule:

> [!summary] The Laplace transform of monomials
> For each integer $n\geq 0$, one has
> 
> $$L(t^n) = \frac{n!}{s^{n+1}}\quad (\text{for }s>0)$$

You can now combine the above formula with linearity to immediately compute the Laplace transform of any polynomial. For example,

$$L(t^2-2t+3) = L(t^2)-2\cdot L(t)+3\cdot L(1) = \frac{2}{s^3}-2\cdot \frac{1}{s^2}+3\cdot \frac{1}{s},$$

with domain $s>0$.

### The Laplace transform of exponential functions

It's actually very easy to compute the Laplace transform of a basic exponential function like $f(t)=e^{at}$:

$$\begin{align*}
L(e^{at})(s) &= \int_0^{\infty} e^{at}e^{-ts}\operatorname{d}t\\
&= \int_0^{\infty} e^{(a-s)t}\operatorname{d}t\\
&= \lim_{b\to\infty} \frac{1}{a-s}\left(e^{(a-s)b}-1\right)\quad (\text{for }s\neq a)\\
&= \frac{1}{s-a}\quad (\text{for }s>a)
\end{align*}$$

Let's add that to our official list:

> [!summary] Laplace transform of basic exponential functions
> For each number $a$, one has
> 
> $$L(e^{at}) = \frac{1}{s-a}\quad (\text{for }s>a).$$


### The Laplace transform of basic trig functions

Let's round out the list of functions for which we know the Laplace transform by looking at some sine and cosine functions. Specifically, let's start with the Laplace transform of $f(t)=\sin(bt)$. We could do this directly, computing the somewhat annoying integral

$$L(\sin(bt)) = \int_0^{\infty} \sin(bt)e^{-ts}\operatorname{d}t.$$

Or we could live life dangerously, by converting the sine function into complex exponential functions and then using the formula for the transform of the exponential function (even though we definitely intended for $a$ to be a real number in that formula). Let's just do that and see what happens:

$$\begin{align*}
L(\sin(bt)) &= L\left(\frac{e^{ibt}-e^{-ibt}}{2i}\right)\\
&= \frac{1}{2i}L(e^{ibt})-\frac{1}{2i}L(e^{-ibt})\\
&= \frac{1}{2i}\cdot\frac{1}{s-ib}-\frac{1}{2i}\cdot\frac{1}{s-(-ib)}\\
&= \frac{1}{2i}\cdot \frac{(s+ib)-(s-ib)}{(s-ib)(s+ib)}\\
&= \frac{1}{2i}\cdot \frac{2ib}{s^2+b^2}\\
&= \frac{b}{s^2+b^2}.
\end{align*}$$

It turns out this is correct, as is a very similar formula that's produced when one tries the same trick for $\cos(bt)$. So let's collect those two results here:

> [!summary] Laplace transforms of sine and cosine functions
> For each number $b$, one has
> 
> $$\begin{align*}
> L(\sin(bt))&=\frac{b}{s^2+b^2}\quad (\text{for }s>0)\\
> L(\cos(bt))&= \frac{s}{s^2+b^2}\quad (\text{for }s>0)
> \end{align*}$$

## Suggested next notes
---

*Coming soon*
