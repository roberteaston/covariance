---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/laplace-transform/laplace-transform-iv-convolution-redux/","tags":["differential_equations"],"updated":"2025-08-22T13:33:37-07:00"}
---

Recall that for the Fourier transform we had

$$\mathcal{F}(f\ast g)=\mathcal{F}g\cdot \mathcal{F}g,$$

where $f\ast g$ was the *convolution* of $f$ and $g$, defined by

$$(f\ast g)(t) = \int_{-\infty}^{\infty} f(t-x)g(x)\operatorname{d}x.$$

Something very similar holds for the Laplace transform, but we have to make a few small adjustments.

## Definition of convolution
---

First note that, when dealing with the Laplace transform, we are now dealing with functions defined on $[0,\infty)$. In particular, in the integral above the function $g(x)$ would not be defined for $x<0$. Similar, the function $f(t-x)$ would not be defined for $t-x<0$, i.e., for $x>t$. So we need to restrict the bounds on the definite integral in order for both terms in the integrand to even be defined.

Fortunately, it turns out that is the only thing we need to do:

> [!note] Definition of convolution for functions defined on $[0,\infty)$
> Fr functions $f,g$ defined on $[0,\infty)$, their **convolution** is the function denoted $f\ast g$ defined by the integral formula
> 
> (f\ast g)(t) = \int_0^t f(t-x)g(x)\operatorname{d}x.


### Example

Define functions $f,g$ on $[0,\infty)$ by $f(t)=t$ and $g(t)=e^t$. We then compute

$$\begin{align*}
(f\ast g)(t) &= \int_0^t f(t-x)g(x)\operatorname{d}x\\
&= \int_0^t (t-x)e^x\operatorname{d}x\\
&= t\int_0^t e^x\operatorname{d}x-\int_0^t xe^x\operatorname{d}x\\
&= t(e^t-e^0)-\left[xe^x-e^x\right]_{x=0}^{x=t}\\
&= t(e^t-1)-\left((te^t-e^t)-(0\cdot e^0-e^0)\right)\\
&= -1-t+e^t.
\end{align*}$$

## Convolution and the Laplace transform
---

Just as with the Fourier transform, it turns out that the Laplace transform converts convolution product into usual product:

$$L(g\ast g) = Lf\cdot Lg.$$

Read "in reverse", this same property tells us

$$L^{-1}(F\cdot G) = L^{-1}F\ast L^{-1}G,$$

and this is the situation in which we'll most often find ourselves running into the convolution.


### Example

Suppose we wished/needed to compute the inverse Laplace transform of the function $F(s)=\frac{1}{s^2(s-1)}$.

One option is to first use partial fractions to rewrite $F(s)$ as

$$F(s) = -\frac{1}{s}-\frac{1}{s^2}+\frac{1}{s-1}.$$

The above calculation took a few minutes behind the scenes, but the payoff is that we can now instantly conclude

$$\begin{align*}
L^{-1}F &= -L^{-1}\left(\frac{1}{s}\right)-L^{-1}\left(\frac{1}{s^2}\right)+L^{-1}\left(\frac{1}{s-1}\right)\\
&= -1-t+e^t.
\end{align*}$$

A second (new) option is to view $F(s)$ as a product of two functions with known inverse transforms, namely

$$F(s)=\frac{1}{s^2}\cdot \frac{1}{s-1}$$

Then

$$L^{-1}F = L^{-1}\left(\frac{1}{s^2}\cdot \frac{1}{s-1}\right)=L^{-1}\left(\frac{1}{s^2}\right)\ast L^{-1}\left(\frac{1}{s-1}\right)=t\ast e^t = -1-t+e^t.$$

Although very different, these two methods (at least in this example) take roughly the same amount of time. In the first method, we needed to compute a partial fraction decomposition, while in the second we needed to compute a convolution integral.



## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Laplace transform/Laplace transform V - Solving differential equations\|Laplace transform V - Solving differential equations]]
