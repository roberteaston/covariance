---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-vi-solving-differential-equations/","tags":["differential_equations"],"updated":"2025-08-19T15:20:04-07:00"}
---

Let's try to use everything we know about the Fourier transform to solve some differential equations!

## First examples
---

### A humiliating first example

It's always good to start with an example where the answer is already known, to see if our new approach at least recovers that answer. To that end, let's suppose we deploy our massive Fourier transform machinery on the innocent little differential equation

$$y'+y=0.$$

The general solution to this differential equation is $y(t)=ce^{-t}$. Let's see how Fourier does.

Suppose $f(t)$ is a function with all of our "mild assumptions" that is a solution to this differential equation, i.e., such that

$$f'(t)+f(t)=0.$$

Applying the Fourier transform, we find that

$$(2\pi is)\cdot F(s)+F(s)=0,$$

where as usual $F(s)=(\mathcal{F}f)(s)$. Solving the above equation for $F(s)$ yields

$$F(s) = \frac{0}{2\pi is+1},$$

i.e., $F(s)=0$. But this implies $f(t)=\mathcal{F}^{-1}(0)=0$. In other words, our Fourier transform method only found the trivial (zero function) solution!

What went wrong?! Well, as we noted at the start of this example, the general solution to this particular differential equation is $y(t)=ce^{-t}$, where $c$ is any real number. Notice that if $c\neq 0$, then the function $y(t)$ has the property $\displaystyle \lim_{t\to -\infty} y(t) = \pm \infty$. So those functions do not have the "mild assumptions" necessary for our proof of the derivative property of the Fourier transform. Even worse, you can check that the integral

$$(\mathcal{F}(ce^{-t}))(s) = \int_{-\infty}^{\infty} ce^{-t}e^{-2\pi its}\operatorname{d}t$$

doesn't converge. So none of those functions even have a Fourier transform (yet^[Cue dramatic music.]). Out of all of the solutions to this differential equation, the only one that had a Fourier transform and met our "mild assumption" requirements was the trivial function $y(t)=0$, and that's the one solution our method found.

Not a great start.

### A more encouraging example

Let $g(t)=\frac{1}{2}e^{-|t|}$, so that $(\mathcal{F}g)(s) = \frac{1}{1+4\pi^2s^2}$. Then consider the differential equation

$$y''-y+h(t)=0,$$

where $h(t)$ is any function that satisfies our usual "mild assumptions."

Repeating our strategy from the first example should help us find all functions that satisfy our "mild assumptions" and our solutions to the above differential equation. Applying the Fourier transform, we obtain the equation

$$(2\pi is)^2\cdot F(s)-F(s)+(\mathcal{F}h)(s)=0,$$

which we can solve for $F(s)$:

$$F(s)=\frac{-(\mathcal{F}h)(s)}{(2\pi is)^2-1}=\frac{(\mathcal{F}h)(s)}{1+4\pi^2s^2}=\frac{1}{1+4\pi^2s^2}\cdot (\mathcal{F}h)(s)=(\mathcal{F}g)(s)\cdot (\mathcal{F}h)(s).$$

Applying the inverse Fourier transform then reveals

$$f(t)=(g\ast h)(t) = \int_{-\infty}^{\infty} g(t-x)h(x)\operatorname{d}x = \frac{1}{2}\int_{-\infty}^{\infty} e^{-|t-x|}h(x)\operatorname{d}x.$$

So our Fourier transform method has found a unique solution, namely the convolution of the functions $g$ and $h$. This must be the only solution (out of the two-dimensional space of solutions) that satisfies our "mild assumptions."

Maybe they're not so mild after all?^[We'll eventually supercharge our Fourier transform, so that it can find many more solutions.]

## A heat equation example
---

Suppose $u(x,t)$ measures the temperature at position $x$ and time $t$ along a thin, infinitely long metal rod, and let $f(x)=u(x,0)$ denote the initial temperature of the rod. Assume also:
1. The function $u(x,t)$ satisfies the differential equation $u_t = \frac{1}{2}u_{xx}$
2. For each fixed value of $t$, the function $u(x,t)$ satisfies our "mild assumptions" as a function of $x$.

Let's focus on the variable $x$ and apply the Fourier transform (with respect to $x$). We first compute

$$\begin{align*}
(\mathcal{F}u_t)(s,t) &= \int_{-\infty}^{\infty} u_t(x,t)e^{-2\pi isx}\operatorname{d}x\\
&= \int_{-\infty}^{\infty} \frac{\partial}{\partial t}(u(x,t)e^{-2\pi isx})\operatorname{d}x\\
&= \frac{\partial}{\partial t}\left(\int_{-\infty}^{\infty} u(x,t)e^{-2\pi isx}\operatorname{d}x\right)\\
&= \frac{\partial}{\partial t}(\mathcal{F}u).
\end{align*}$$

We next compute

$$\mathcal{F}\left(\frac{1}{2}u_{xx}\right)=\frac{1}{2}\mathcal{F}(u_{xx})=\frac{1}{2}(2\pi is)^2\cdot (\mathcal{F}u)=-2\pi^2 s^2\cdot (\mathcal{F}u).$$

So, the function $\mathcal{F}u$ satisfies the differential equation

$$\frac{\partial}{\partial t}(\mathcal{F}u)=-2\pi^2 s^2\cdot (\mathcal{F}u).$$

The general solution to this new differential equation is

$$(\mathcal{F}u)(s,t)=ce^{-2\pi^2s^2t},$$

where $c$ is a constant with respect to $t$. In fact, if we set $t=0$ in the above equality we see that

$$c = (\mathcal{F}u)(s,0)=\int_{-\infty}^{\infty} u(x,0)e^{-2\pi isx}\operatorname{d}x = \int_{-\infty}^{\infty} f(x)e^{-2\pi isx}\operatorname{d}x = (\mathcal{F}f)(s).$$

The function $e^{-2\pi^2 s^2t}$ might also look vaguely Gaussian. Indeed, it's not too difficult to use the stretch-and-shift properties to show it is the Fourier transform (with respect to $x$) of the function

$$g(x,t)=\frac{1}{\sqrt{2\pi t}}e^{-\frac{x^2}{2t}}.$$

With that final observation, suddenly we see that

$$\mathcal{F}u = (\mathcal{F}f)\cdot (\mathcal{F}g),$$

and so our mystery solution $u$ is given by

$$u(x,t) = (f\ast g)(x,t) = (g\ast f)(x,t)=\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi t}}e^{-\frac{(x-t)^2}{2t}}f(y)\operatorname{d}y.$$

Here the function $f(x)$ was the initial temperature function, and the function $g(x,t)$ is sometimes called the **heat kernel**. Our solution says that the temperature at any point on the wire at time $t$ can be found by convolving the initial temperature information with this heat kernel function, which controls how the heat energy must be spreading through the wire over time.

Let's take a break from the Fourier transform for a bit, since it seems to be missing some crucial insight to let us see *all* solutions ...

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Laplace transform/Laplace transform I - Desperate times\|Laplace transform I - Desperate times]]
