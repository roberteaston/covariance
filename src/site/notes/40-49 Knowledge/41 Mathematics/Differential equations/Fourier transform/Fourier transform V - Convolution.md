---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-v-convolution/","tags":["differential_equations"],"updated":"2025-08-19T14:37:44-07:00"}
---

Inspired by the previous example, we make the following definition:

> [!note] Definition of the convolution product
> Given two functions $f$ and $g$ defined on $(-\infty, \infty)$, their **convolution** (or **convolution product**) is the function denoted $f\ast g$ defined by the integral formula
> 
> $$(f\ast g)(t) = \int_{-\infty}^{\infty} f(t-x)g(x)\operatorname{d}x,$$
> 
> assuming this integral converges.

Before looking at some examples, here some basic properties of this operation that are fairly easy to verify^[I should add proofs here at some point.] and which at least start to justify the name "convolution *product*":
- This operation is commutative: $f\ast g=g\ast f$
- This operation is associative: $(f\ast g)\ast h = f\ast (g\ast h)$
- This operation "distributes across addition": $f\ast (g+h)=(f\ast g)+(f\ast h)$

So even without the Fourier transform in the mix, it seems reasonable to think of convolution as a new type of product-like operation.

## Examples
---

### A first example

Let $f(t)=e^{-t}$. We can fairly easily compute $f\ast \Pi$:

$$\begin{align*}
(f\ast \Pi)(t) &= \int_{-\infty}^{\infty} e^{-(t-x)}\Pi(x)\operatorname{d}x\\
&= \int_{-\frac{1}{2}}^{\frac{1}{2}}e^{-t+x}\operatorname{d}x\\
&= \left[e^{-t+x}\right]_{x=-\frac{1}{2}}^{x=\frac{1}{2}}\\
&= e^{-t+\frac{1}{2}}-e^{-t-\frac{1}{2}}\\
&= (e^{\frac{1}{2}}-e^{-\frac{1}{2}})e^{-t}.
\end{align*}$$

So in this first example, the function $f\ast \Pi$ happens to be just a specific multiple of the function $f$. But things aren't always so easy ...

### A trickier example

We will show two different methods of computing the convolution of the rectangle function $\Pi$ with itself.

#### Method 1: The direct approach

By definition we have

$$(\Pi\ast \Pi)(t) = \int_{-\infty}^{\infty} \Pi(t-x)\Pi(x)\operatorname{d}x$$

There are many ways to approach this integral, but no matter what we're going to need to consider cases based on the value of $t$. Here is one solution. We first notice that $\Pi(x)$ is only nonzero on the interval $\left(-\frac{1}{2},\frac{1}{2}\right)$, where it equals 1. So

$$(\Pi\ast\Pi)(t)= \int_{-1/2}^{1/2} \Pi(t-x)\,\operatorname{d} x.$$

Now observe that

$$\Pi(t-x) =\begin{cases}0,&\text{if }t-x \leq -1/2 \\ 1,&\text{if } -1/2< t-x < 1/2 \\ 0,&\text{if } t-x \geq 1/2 \end{cases}$$

For $t\leq -1$, we have $t-x \leq -1/2$ for all $x\in [-1/2,1/2]$. In other words, the square $\Pi(t-x)$ is entirely to the left of the interval $[-1/2, 1/2]$. We therefore have

$$\int_{-1/2}^{1/2} \Pi(t-x)\,\operatorname{d} x = \int_{-1/2}^{1/2} 0\,\operatorname{d} x = 0.$$

For $-1< t < 0$, we have $\Pi(t-x)=1$ for $x\in [-1/2, t+1/2]$ and $\Pi(t-x)=0$ for $x\in (t+1/2,1/2]$. In other words, the square $\Pi(t-x)$ partially overlaps the interval $[-1/2, 1/2]$ from the left. We therefore have

$$\int_{-1/2}^{1/2} \Pi(t-x)\,\operatorname{d} x = \int_{-1/2}^{t+1/2} 1\,\operatorname{d} x = t+1.$$

For $0\leq t < 1$, we have $\Pi(t-x)=0$ for $x\in [-1/2, t-1/2]$ and $\Pi(t-x)=1$ for $x\in (t-1/2,1/2]$. In other words, the square $\Pi(t-x)$ partially overlaps the interval $[-1/2, 1/2]$ from the right. We therefore have

$$\int_{-1/2}^{1/2} \Pi(t-x)\,\operatorname{d} x = \int_{t-1/2}^{1/2} 1\,\operatorname{d} x = 1-t.$$

Finally, for $t\geq 1$, we have $t-x \geq 1/2$ for all $x\in [-1/2, 1/2]$. In other words, the square $\Pi(t-x)$ is entirely to the right of the interval $[-1/2, 1/2]$.  We therefore have

$$\int_{-1/2}^{1/2} \Pi(t-x)\,\operatorname{d} x =\int_{-1/2}^{1/2} 0\,\operatorname{d} x=  0.$$

We've therefore shown that

$$(\Pi\ast \Pi)(t) =\begin{cases}0,&\text{if } t\leq -1 \\ t+1,&\text{if } -1< t < 0\\ 1-t,&\text{if } 0\leq t < 1 \\ 0,&\text{if } t\geq 1. \end{cases}$$

Thus, $\Pi\ast \Pi = \Lambda$.

#### Method 2: Using the Fourier transform

Applying the Fourier transform, we see that

$$\mathcal{F}(\Pi\ast \Pi) = (\mathcal{F}\Pi)\cdot (\mathcal{F}\Pi)=\operatorname{sinc}\cdot \operatorname{sinc} = \operatorname{sinc}^2=\mathcal{F}\Lambda.$$

Applying the inverse transform to both sides then gives $\Pi\ast\Pi=\Lambda$. (Technically, this only shows the two sides agree at those points where they are both continuous, but we won't worry about that.)

### Handy properties of convolution

Our discovery of the convolution operation essentially proves that the Fourier transform exchanges convolution products for conventional products, i.e.,

$$\mathcal{F}(f\ast g)=(\mathcal{F}f)\cdot (\mathcal{F}g).$$

Here are a few more, all of which are fairly straightforward to verify^[This means I should add their proofs here at some point.]:
- $\mathcal{F}^{-1}(F\ast G)=(\mathcal{F}^{-1}F)\cdot (\mathcal{F}^{-1}G)$
- $\mathcal{F}(f\cdot g)=(\mathcal{F}f)\ast (\mathcal{F}g)$
- $\mathcal{F}^{-1}(F\cdot G)=(\mathcal{F}^{-1}F)\ast (\mathcal{F}^{-1}G)$

In other words, both transforms exchange conventional product with convolution product. It's a perfect symmetry!

#### Using the Fourier transform to deduce another self-convolution identity

Suppose we wished to compute the convolution of the function $\operatorname{sinc}$ with itself. A direct approach is pretty gnarly:

$$(\operatorname{sinc}\ast \operatorname{sinc})(t) = \int_{-\infty}^{\infty} \operatorname{sinc}(t-x)\operatorname{sinc}(x)\operatorname{d}x=\int_{-\infty}^{\infty}\frac{\sin(\pi(t-x))}{\pi(t-x)}\cdot \frac{\sin(\pi x)}{\pi x}\operatorname{d}x.$$

However, we would instead be very sneaky and notice

$$\operatorname{sinc}\ast \operatorname{sinc} = (\mathcal{F}\Pi)\ast (\mathcal{F}\Pi)=\mathcal{F}(\Pi\cdot\Pi)=\mathcal{F}\Pi = \operatorname{sinc},$$

since one easily verifies that $\Pi\cdot \Pi = \Pi$. The Fourier transform has let us completely dodge the integral and immediately arrive at the answer!

### Two ways to think about convolution

Convolution might seem like a strange operation at first. It's certainly not the most intuitive way to combine two functions, and as the examples above illustrate, it's not usually a very quick thing to compute, either. So how should we think about it?

One option is to frame it entirely from the point of view of the Fourier transform and inverse transform. In that context, the convolution product is the "counterpart" operation to the conventional product when we perform a transform. For solving differential equations, this might be all we need.

Outside the context of the Fourier transform, you can also view the convolution $f\ast g$ as a "weighted averaging" of the values of $g$, where the exact weighting changes over time and is controlled by the function $f$. Indeed, in the integral formula

$$(f\ast g)(t) = \int_{-\infty}^{\infty} f(t-x)g(x)\operatorname{d}x,$$

we can view the integral as "adding up" the values of $g(x)$, where each value is given the weight $f(t-x)$. You can get a better of sense of this integration if you mess around with some interactive online demos, such as the one below. At the top you can select some sample functions to convolve. You can then drag the $t$-slider across to see how the graphs of $f(t-x)$ and $g(x)$ would appear on an $xy$-plane, and the applet shades in the area under the product $f(t-x)g(x)$ as well as tracks the total value for that area on a black curve. Try setting both functions to our rectangle function and watch the triangle function appear as their convolution!

<iframe src="https://phiresky.github.io/convolution-demo/" width="100%" height="1000"></iframe>


## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform VI - Solving differential equations\|Fourier transform VI - Solving differential equations]]