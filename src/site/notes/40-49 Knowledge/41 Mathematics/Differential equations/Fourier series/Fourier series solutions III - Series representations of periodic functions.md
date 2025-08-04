---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-series/fourier-series-solutions-iii-series-representations-of-periodic-functions/","tags":["differential_equations"],"updated":"2025-08-04T08:39:35-07:00"}
---

## Representing periodic functions with sine functions
---

Our new goal is to replicate the theory of power series, only now using linear combinations of basic periodic functions instead of powers of $x$. We are building this new theory purposely to handle periodic functions, for which power series are particularly ill suited.

So, suppose $f(t)$ is a periodic function.^[For most of these notes we will default to using $t$ for our periodic variable. This is because most of our examples will involve periodic functions of time. It will also help us differentiate our new type of series from power series.] For simplicity, let's assume for the moment that $f$ has period 1. (However, we are not assuming the fundamental period of $f$ is 1.) We wish to represent $f$ as a linear combination of some 
"basic" periodic functions. By our earlier work, the periods of a linear combinations of periodic functions are the common integer multiples of the periods of the component functions. Thus, if we want our linear combination to model , which has period 1, we had better restrict our attention to "basic" periodic functions with period 1. The functions that immediately come to mind are probably the scaled versions of sine:

$$
\sin(2\pi t), \sin(4\pi t),\ldots, \sin(2\pi nt),\ldots
$$

Note that $\sin(2\pi nt)$ has fundamental period $\frac{1}{n}$, and hence period $1 = n\cdot \frac{1}{n}$, as well.

We might also like to horizontally shift some of these functions, i.e., adjust the *phase*. For example, to represent $\cos(2\pi t)$ we could use $\sin(2\pi t+\pi)$. (Observe that if we allow $n=0$ then we have the function $\sin(\phi_0)$, which is a constant function.) In general, then, we would like to allow functions of the form $\sin(2\pi nt+\phi_n)$ as constituting our family of "basic" functions with period 1. We've thus come to Fourier's big idea: given a function $f(t)$ with period 1, find a way (if possible) to express $f$ as

$$
f(t) = \sum_{n=0}^{\infty} A_n\sin(2\pi nt+\phi_n),
$$

for some numbers $A_n, \phi_n$. The sum on the right-hand side of the above equality is called a **Fourier series**. We will soon have three equivalent forms of such series, at which point we will refer to the current form as the **sines-only** (or **phase-shifted sines**) form.

There are at least three follow-up questions to this big idea:
1. When can we express a function $f$ as such a linear combination?
2. Assuming it is possible, how can we determine the unknown numbers $A_n$ and $\phi_n$?
3. Assuming we succeed in representing $f$ as such a combination, how is that useful?

We will focus mainly on answering the second and third questions, but we will give some indications as to the answer to the first question. It turns out that Fourier series will be much easier to deal with if we first spend some time learning how to write them in a different (but equivalent) form.

### A comparison with power series

Let us quickly compare the above questions and their answers in the case of power series.

We answered the third question for power series previously: we can use power series to help find solutions to differential equations. There are other uses, as well, but for now we will consider this their main utility. The same will be true for us for Fourier series.

The second question for power series is the following: given a function $f(x)$, when can we write

$$
f(x) = \sum_{n=0}^{\infty} a_n x^n?
$$

To answer this, we first suppose we are able to write $f$ in such a form. Let us temporarily denote the power series on the right by $P(x)$. Then $f(x)=P(x)$ on some open interval containing $x=0$, so in particular we must have $f(0)=P(0)$. Since $P(0)=a_0$, this implies $a_0=f(0)$. More generally, every derivative of $f$ and $P$ must agree at $x=0$, i.e., $f^{(k)}(0)=P^{(k)}(0)$ for every positive integer $k$. Since $\displaystyle P^{(k)}(x)=\sum_{n=k}^{\infty} n(n-1)\cdots (n-k+1)a_n x^{n-k}$, we have $P^{(k)}(0)=k! a_k$, and hence we must have $a_k=\frac{f^{(k)}(0)}{k!}$. Thus, we have deduced that the power series $P(x)$ must be

$$
P(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n.
$$

You might recognize this as Taylor's formula for the power series representation of $f$ at $x=0$.

This answers the second question, but it does not actually answer the first. What we have shown is that *if* $f$ can be represented by a power series centered at $x=0$, *then* that power series must be the one given above. At the very least, we see that the function $f$ must be infinitely differentiable at $x=0$. This is usually, but not always, enough. The general answer is just annoying enough that we created a word to describe when $f$ can be represented by a power series centered at $x=0$. That is when we say $f$ is **analytic** at $x=0$.

## Using both sines and cosines
---

You might be asking yourself "Why we are not using the cosine function, which is arguably equally as basic as the sine function?" That's a fair question, and fortunately there's a simple answer. We can convert the above "sines-only" Fourier series into a "sines-and-cosine" form. We simply need to use the basic trig identity $\sin(\alpha+\beta)=\sin(\alpha)\cos(\beta)+\sin(\beta)\cos(\alpha)$. Using this, we have

$$
\sin(2\pi nt+\phi_n) = \sin(2\pi nt)\cos(\phi_n)+\cos(2\pi nt)\sin(\phi_n).
$$

Applying this to each term in the series, we can rewrite our original Fourier series in the form

$$
\sum_{n=0}^{\infty} (a_n\cos(2\pi nt)+b_n\sin(2\pi nt)),
$$

where $a_n=A_n\sin(\phi_n)$ and $b_n=A_n\cos(\phi_n)$. We have effectively traded the phase shift in the sines for some cosines. We call this new type of series a **sines-and-cosines form** of a Fourier series. We could also similarly convert a series of the above form back into a phase-shifted sine series.

Classically, this new sines-and-cosines form was the preferred form of Fourier series. For our needs, however, it is still a bit unwieldy and obfuscates several very nice properties of Fourier series. Instead, we will reformulate our series in an even more elegant and compact form, which will make most of our computations much simpler. We will do this using the complex exponential function.

## Using complex exponential functions
---

*Coming soon*

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier series/Fourier series solutions IV - Computing Fourier coefficients\|Fourier series solutions IV - Computing Fourier coefficients]]