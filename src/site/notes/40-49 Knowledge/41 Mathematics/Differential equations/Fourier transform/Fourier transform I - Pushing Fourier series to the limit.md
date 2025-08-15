---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-i-pushing-fourier-series-to-the-limit/","tags":["differential_equations"],"updated":"2025-08-15T08:59:02-07:00"}
---

We are about to discover the Fourier *transform* as the natural answer to the following:

> [!question] Question
> Can we extend the machinery of the Fourier series to non-periodic function?

## Recap of the periodic situation
---

As a quick recap, we started by attempting to represent functions $f(t)$ that were periodic with period $1$ by complex Fourier series, i.e., series of the form

$$\sum_{n=-\infty}^{\infty} c_n e^{2\pi int}.$$

We quickly saw that if $f(t)$ could be represented by such a series, then the coefficients in that series satisfied the integral formula

$$c_n =\int_0^1 f(t)e^{-2\pi int}\operatorname{d}t.$$

We then introduced the "hat" notation $\hat{f}(n)$ for the value of the above integral.

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier series/Fourier series solutions VI - Inner product spaces\|Eventually]] we used ideas from linear algebra to clarify the situation, introducing an analogue of the dot product for periodic functions, namely the [[40-49 Knowledge/41 Mathematics/Differential equations/Fourier series/Fourier series solutions VI - Inner product spaces#Extending the dot product to functions\|inner product]] for functions $f,g:[0,1]\to {\bf C}$ defined by

$$(f,g)=\int_0^1 f(t)\overline{g(t)}\operatorname{d}t.$$

This inner product shares nearly all of the familiar properties of the dot product on ${\bf R}^n$ and allowed us to define both the notion of *length* (using $|f|^2 = (f,f)$) and *orthogonality* (by declaring $f$ and $g$ orthogonal whenever $(f,g)=0$). In particular, if we let $e_n(t)=e^{2\pi int}$, then the set of functions $\{e_n(t)\mid n\in {\bf Z}\}$ is an orthonormal set, i.e., is a set of functions that are unit length and mutually orthogonal.

With this new linear algebra language, our work above became a standard result about orthonormal sets, namely that if $f$ can be written as a linear combination of the $e_n$, then that combination must be exactly

$$f = \sum_{n=-\infty}^{\infty} (f,e_n)\cdot e_n,$$

where by definition

$$(f,e_n)=\int_0^1 f(t)\overline{e_n(t)}\operatorname{d}t = \int_0^1 f(t)e^{-2\pi int}\operatorname{d}t = \hat{f}(n).$$

### The more general situation

We can easily extend the above results to the case of functions that are periodic with arbitrary period $T > 0$. In this case, an inner product for functions $f,g:[0,T]\to {\bf C}$ is given by

$$(f,g)=\int_0^T f(t)\overline{g(t)}\operatorname{d}t,$$

and our corresponding orthonormal set of "elementary" periodic functions (with period $T$) is $\{e_n(t)\mid n\in {\bf Z}\}$, where $e_n(t)=\frac{1}{\sqrt{T}}e^{\frac{2\pi int}{T}}$.

Just as above, we have that for every function $f$ that's periodic function with period $T$, if $f$ can be written as a linear combination of the orthonormal functions above, then that combination must be

$$f=\sum_{n=-\infty}^{\infty} (f,e_n)\cdot e_n,$$

where

$$(f,e_n) = \int_0^T f(t)\cdot \frac{1}{\sqrt{T}}e^{-\frac{2\pi int}{T}}\operatorname{d}t=\frac{1}{\sqrt{T}}\int_0^T f(t)e^{-\frac{2\pi int}{T}}\operatorname{d}t.$$

If, for some reason, we wish to express $f$ as a linear combination of the functions $e^{\frac{2\pi int}{T}}$ (which are no longer unit length but are still mutually orthogonal), we can equivalently write

$$f(t) = \sum_{n=-\infty}^{\infty} c_n e^{\frac{2\pi int}{T}},$$

where $c_n$ satisfy the integral equation

$$c_n = \frac{1}{T}\int_0^T f(t)e^{-\frac{2\pi int}{T}}\operatorname{d}t.$$

We can now ask the question:

> [!question] Can we let $T\to \infty$?
> In other words, what happens if $f$ is not periodic? Can we make sense of some type of limit of the above situation?

Let's try answering this question in a particular (hopefully insightful) example.

## Extended example: The rectangle function
---

Thinking like physicists for the moment, suppose we consider the simple situation of a "signal" that's "on" for one unit of time (say, $1$ second) and then "off" at all other times. We can model such a signal with a function that takes the value $1$ over an interval of length $1$, and then value $0$ everywhere else. It will turn out to make things slightly nicer numerically if we use the function that is $1$ on the interval $[-\frac{1}{2},\frac{1}{2}]$ and $0$ everywhere else. The graph of this function is

![rectFunctionGraph1.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/rectFunctionGraph1.png)

We can make this graph more visualizing appealing (and look more like an idealization of an actual, continuous signal) if we add dotted lines connecting the "jump" points:

![rectFunctionGraph2.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/rectFunctionGraph2.png)

We will follow the common convention and denote this function $\Pi(t)$, so that algebraically

$$\Pi(t) = \begin{cases} 1,& \text{if }-\frac{1}{2}\leq t\leq \frac{1}{2} \\ 0,& \text{else}\end{cases}$$

The choice of the character $\Pi$ (which is a capital pi) is meant to visually remind us of the graph of the function.

It would be reasonable to call this the *square function*, as its graph resembles a little unit square sitting on the origin, but for historical reasons it's usually called the unit **rectangle function**. (This naming will seem more justified when we start stretching and scaling the function, in which case the graph resembles a non-square rectangle.)

No matter what we call it, this function is decidedly *not* periodic. We can easily create periodic "versions" of this function, i.e., a function that is "on" for $1$ second bursts, periodically. For example, we might want a function that agreed with the above function on $[-1,1]$ but that was periodic with period $2$. In other words, suppose we considered the function $\Pi_2(t)$ whose graph looked like

*Image coming soon*

Similarly, if we wanted a function that was "on" for $1$-second intervals every $4$ seconds, we could consider the function $\Pi_4(t)$ whose graph looked like

*Image coming soon*

In general, for every $T > 1$ let's let $\Pi_T(t)$ denote the function that is periodic with period $T$ and takes the value $1$ on $[-\frac{1}{2},\frac{1}{2}]$:

*Image coming soon*

This function takes the value $1$ on every interval of the form $[kT-\frac{1}{2},kT+\frac{1}{2}]$, and is $0$ elsewhere.

> [!note] Observations
> 1. The function $\Pi_T(t)$ is periodic with period $T>0$, so it makes sense to consider its corresponding complex Fourier series.
> 2. The function $\Pi_T(t)$ agrees with the function $\Pi(t)$ on the interval of width $T-1$ centered at the origin. In particular, for each fixed value of $t$ we always have $\displaystyle \lim_{T\to \infty}\Pi_T(t) = \Pi(t)$. So it looks like our functions $\Pi_T(t)$ are "converging" to the original function $\Pi(t)$.

### Computing the Fourier series for $\Pi_T(t)$

For simplicity, let's assume $\Pi_T(t)$ agrees with its complex Fourier series and write

$$\Pi_T(t) = \sum_{n=-\infty}^{\infty} c_{n,T} \cdot e^{\frac{2\pi int}{T}}.$$

The Fourier coefficients in this series are then given by

$$\begin{align*}
c_{n,T} &= \frac{1}{T}\int_0^T \Pi_T(t)e^{-\frac{2\pi int}{T}}\operatorname{d}t\\
&= \frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}\Pi_T(t)e^{-\frac{2\pi int}{T}}\operatorname{d}t\\\\
&= \frac{1}{T}\int_{-\frac{1}{2}}^{\frac{1}{2}} 1\cdot e^{-\frac{2\pi int}{T}}\operatorname{d}t\\
&= \begin{cases}\frac{1}{T},& \text{ when }n=0 \\ \frac{1}{\pi n}\sin\left(\frac{\pi n}{T}\right),& \text{ when }n\neq 0\end{cases}
\end{align*}$$

where we did some simplifications (behind the scenes) after computing the final integral. Substituting this information back into our Fourier series, we see that

$$\Pi_T(t) = \frac{1}{T}+\sum_{n\neq 0} \frac{1}{\pi n}\sin\left(\frac{\pi n}{T}\right)e^{\frac{2\pi in t}{T}}.$$

We want to analyze what happens in the above expression as $T\to \infty$. To that end, we can rewrite that summation (perhaps more suggestively) as

$$\Pi_T(t) = \frac{1}{T}+\sum_{n\neq 0} \frac{\sin\left(\pi\cdot\frac{n}{T}\right)}{\pi \cdot\frac{n}{T}}e^{2\pi it\cdot\frac{n}{T}}\cdot\frac{1}{T}.$$

Why rewrite the sum in this way? We claim that doing so makes the above sum look like a *Riemann sum*. Indeed, suppose (for some fixed value of $t$) we were asked to approximate the integral below with a Riemann sum:

$$\int_{-\infty}^{\infty} \frac{\sin(\pi s)}{\pi s}e^{2\pi its}\operatorname{d}s.$$

Ignoring questions of convergence, the conventional approach would be to subdivide the $s$-axis into little slices of equal length, say length $\Delta s = \frac{1}{T}$:

*Image coming soon*

We would then evaluate the integrand at the values $s=\ldots,-\frac{2}{T},-\frac{1}{T},0,\frac{1}{T},\frac{2}{T},\ldots$, i.e., at all points of the form $s=\frac{n}{T}$ where $n\in {\bf Z}$. 

> [!warning] A small but fixable issue
> We should note that the integrand is not actually defined exactly at $s=0$, but we'll see shortly that as $s$ approaches $0$ the values of the integrand simply approach $1$. In other words, the integrand has a removable discontinuity at $s=0$, which can be removed by setting the value of the integrand to $1$ at $s=0$.

With the above minor fix in mind, the Riemann sum for the above definite integral is

$$\int_{-\infty}^{\infty}\frac{\sin(\pi s)}{\pi s}e^{2\pi its}\operatorname{d}s\approx \frac{1}{T}+\sum_{n\neq 0} \frac{\sin\left(\pi\cdot\frac{n}{T}\right)}{\pi \cdot\frac{n}{T}}e^{2\pi it\cdot\frac{n}{T}}\cdot\frac{1}{T},$$

where the first $\frac{1}{T}$ terms comes from the contribution at $s=0$. The sum on the right is exactly our Fourier series for $\Pi_T(t)$!

### The dramatic conclusion

Now, as we let $T\to \infty$, our Riemann sum should converge to the exact value of the integral. In other words, we appear to have

$$\begin{align*}
\Pi(t) &= \lim_{T\to\infty} \Pi_T(t)\\
&= \lim_{T\to \infty}\left(\frac{1}{T}+\sum_{n\neq 0} \frac{\sin\left(\pi\cdot\frac{n}{T}\right)}{\pi \cdot\frac{n}{T}}e^{2\pi it\cdot\frac{n}{T}}\cdot\frac{1}{T}\right)\\
&= \int_{-\infty}^{\infty}\frac{\sin(\pi s)}{\pi s}e^{2\pi its}\operatorname{d}s.
\end{align*}$$

In other words, the Fourier series for the periodic functions $\Pi_T(t)$ seem to converge to an integral representation of the non-periodic function $\Pi(t)$.

> [!question] An immediate question
> The Fourier *series* for a periodic function seems to have been replaced by some type of Fourier *integral* for our non-periodic function. During this change, the Fourier coefficients (which were a sequence of complex numbers) were replaced by a single new *function*, in this case the function $\frac{\sin(\pi s)}{\pi s}$.
> 
> How did this function arise? How is it related to our original function $\Pi(t)$?

We can answer this question by looking back at how we computed the Fourier coefficients for the periodic function $\Pi_T(t)$. After our usual computations, we found that (at least for $n\neq 0$)

$$c_{n,T} = \frac{1}{\pi n}\sin\left(\frac{\pi n}{T}\right).$$

In our effort to view the Fourier series as a Riemann sum for a definite integral, we introduced the new variable $s$, and in our sum we had $s=\frac{n}{T}$. So, at each term in the sum we were using the approximation

$$\frac{\sin(\pi s)}{\pi s}\approx \frac{\sin\left(\pi\cdot \frac{n}{T}\right)}{\pi\cdot\frac{n}{T}}.$$

Combining this estimate with the previous equality, we see that when $s=\frac{n}{T}$ we have

$$\begin{align*}
\frac{\sin(\pi s)}{\pi s} &\approx \frac{\sin\left(\pi\cdot \frac{n}{T}\right)}{\pi\cdot\frac{n}{T}}\\
&= T\cdot c_{n,T}\\
&= \int_{-\frac{1}{2}}^{\frac{1}{2}}1\cdot e^{-\frac{2\pi int}{T}}\operatorname{d}t\\
&= \int_{-\infty}^{\infty} \Pi(t)e^{-2\pi it\cdot\frac{n}{T}}\operatorname{d}t
\end{align*}$$

where in the last step we simply used the fact that $\Pi(t)$ was $0$ outside the interval $[-\frac{1}{2},\frac{1}{2}]$.

With all this in mind, it looks like (and we can now easily confirm) that

$$\frac{\sin(\pi s)}{\pi s} = \int_{-\infty}^{\infty} \Pi(t)e^{-2\pi its}\operatorname{d}t$$

Indeed, observe that

$$\begin{align*}
\int_{-\infty}^{\infty} \Pi(t)e^{-2\pi its}\operatorname{d}t &= \int_{-\frac{1}{2}}^{\frac{1}{2}} e^{-2\pi its}\operatorname{d}t\\
&= \left[\frac{1}{-2\pi is}e^{-2\pi its}\right]_{t=-\frac{1}{2}}^{t=\frac{1}{2}}\\
&= \frac{1}{-2\pi is}e^{-\pi is}-\frac{1}{-2\pi is}e^{\pi is}\\
&= \frac{1}{2\pi is}\left(e^{\pi is}-e^{-\pi is}\right)\\
&= \frac{1}{2\pi is}\cdot 2i\sin(\pi s)\\
&= \frac{\sin(\pi s)}{\pi s}.
\end{align*}$$

## The takeaway
---

Here's a quick comparison between the situation for periodic functions and non-periodic functions, at least if the previous example is to be trusted.

When $f(t)$ is a periodic function with period $T > 0$, if we can write

$$f(t) = \sum_{n=-\infty}^{\infty} c_n e^{2\pi it\cdot\frac{n}{T}},$$

then we must have

$$c_n = \frac{1}{T}\int_0^T f(t)e^{-2\pi it\cdot\frac{n}{T}}\,\operatorname{d}t.$$

On the other hand, when $f(t)$ is a non-periodic function, it seems like we might expect/hope to be able to write

$$f(t) = \int_{-\infty}^{\infty} F(s)e^{2\pi its}\operatorname{d}s,$$

where 

$$F(s) = \int_{-\infty}^{\infty} f(t)e^{-2\pi its}\operatorname{d}t.$$

Let's make this official in the next note!


## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform II - The Fourier transform and inverse transform\|Fourier transform II - The Fourier transform and inverse transform]]
