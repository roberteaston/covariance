---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-iii-properties-of-the-fourier-transform/","tags":["differential_equations"],"updated":"2025-08-19T09:52:50-07:00"}
---

The Fourier transform (and inverse transform) enjoys a long list of very nice properties.

## Linearity
---

Since the Fourier transform and inverse transform are both defined by definite integrals, it is straightforward to verify they inherit the usual linearity properties of integration, namely that for any pair of function $f$ and $g$ (for which the Fourier transform exists) we have

$$\mathcal{F}(f+g)= \mathcal{F}f+\mathcal{F}g,$$

 and for any constant $c$ we have

$$\mathcal{F}(cf) = c\cdot \mathcal{F}f$$

(and similarly for the inverse transform).

For example, if $f(t)=2\cdot \Pi(t)-3\cdot \Lambda(t)$, then

$$(\mathcal{F}f)(s)=2\cdot (\mathcal{F}\Pi)(s)-3\cdot (\mathcal{F}\Lambda)(s) = 2\operatorname{sinc}(s)-3\operatorname{sinc}^2(s).$$


## "Signal reversal"
---

Observe that

$$(\mathcal{F}f)(-s)=\int_{-\infty}^{\infty}f(t)e^{-2\pi it(-s)}\operatorname{d}t=\int_{-\infty}^{\infty}f(t)e^{2\pi its}\operatorname{d}t=(\mathcal{F}^{-1}f)(s).$$

Note that for the last equality we are now thinking of the inverse Fourier transform as taking in a function of $t$ and returning a function of $s$. While that is opposite of our default convention, remember that our default convention is just that: a default way to name the variables for the function we start with and the transformed function. Variable names can always be changed to whatever you want, though!

Similarly,

$$(\mathcal{F}^{-1}f)(-t)=(\mathcal{F}f)(t).$$

Here's one way to think about what's happening. If we think of a function $f(t)$ as a "signal", then we can define the **reverse signal** $f^-$ by

$$f^-(t)=f(-t).$$

Note that we are not saying *inverse*, but *reverse*.  The graph of $f^-$ looks like the "reverse" of the graph of $f$, i.e., the reflection across the $y$-axis. For example, the image below shows that graph of a function $f(t)$ in red, and the graph of its reverse in blue:

![signalReversal.png|900](/img/user/90-99%20Meta/91%20Images/Differential%20equations/signalReversal.png)

### Properties of signal reversal

You can easily verify the following properties about reversal:

1. $(f^-)^- = f$
2. $f$ is even $\Leftrightarrow$ $f^- = f$
3. $f$ is odd $\Leftrightarrow$ $f^- = -f$
4. $(\mathcal{F}f)^-=\mathcal{F}^{-1}f$
5. $(\mathcal{F}^{-1}f)^-=\mathcal{F}f$
6. $\mathcal{F}(f^-)=\mathcal{F}^{-1}f$
7. $\mathcal{F}(f^-)=(\mathcal{F}f)^-$
8. $\mathcal{F}^{-1}(f^-)=(\mathcal{F}^{-1}f)^-$

(I'll probably add in the shorts proofs of each of these properties at some point, but none are diabolical, I promise.)

### Using reversal to compute some Fourier transforms

Let's assume for the moment that we do indeed have $\mathcal{F}^{-1}\operatorname{sinc}=\Pi$. We can now use the reversal properties to compute the (forward) Fourier transform of $\operatorname{sinc}$:

$$\mathcal{F}\operatorname{sinc}=(\mathcal{F}^{-1}\operatorname{sinc})^- = \Pi^- = \Pi.$$

Similarly, if we assume we do indeed have $\mathcal{F}^{-1}\operatorname{sinc}^2 = \Lambda$, then we can immediately deduce

$$\mathcal{F}\operatorname{sinc}^2 = (\mathcal{F}^{-1}\operatorname{sinc}^2)^-=\Lambda^- = \Lambda.$$

### Fourier transforms of even and odd functions

Suppose $f$ is an even function, i.e., $f^-=f$. Then

$$(\mathcal{F}f)^- = \mathcal{F}(f^-)=\mathcal{F}f,$$

and so $\mathcal{F}f$ is also an even function. We've already seen three examples of this: the rectangle function, the triangle function and the Gaussian function are all even, and their Fourier transforms were all even, as well.

Similarly, if $f$ is an odd function (so $f^-=-f$), then

$$(\mathcal{F}f)^-=\mathcal{F}(f^-)=\mathcal{F}(-f)=-\mathcal{F}f,$$

and so $\mathcal{F}f$ is also an odd function.

### Conjugate symmetry for real-valued functions

Suppose $f$ is a real-valued function (like it always is for us). You can then easily show that

$$(\mathcal{F}f)^- = \overline{\mathcal{F}f}.$$

For example, when $f(t)$ is our one-sided exponential decay function, we have

$$(\mathcal{F}f)(s)= \frac{1}{1+2\pi is}.$$

Sure enough, we have

$$(\mathcal{F}f)^-(s)=(\mathcal{F}f)(-s)=\frac{1}{1-2\pi is}=\overline{\left(\frac{1}{1+2\pi is}\right)}=\overline{(\mathcal{F}f)(s)}.$$

### Example: Two-sided exponential decay

Consider the two-sided exponential decay function

$$g(t) = e^{-|t|}=\begin{cases}e^t,&\text{ for }t<0\\e^{-t},&\text{ for }t\geq 0\end{cases}$$

If we let $f(t)$ be our one-sided exponential decay function from earlier, then notice that for every value of $t$ *except* $t=0$ we have

$$g(t) = f(t)+f^-(t).$$

It follows that

$$\begin{align*}
(\mathcal{F}g)(s) &= (\mathcal{F}f)(s)+(\mathcal{F}f^-)(s)\\
&= \frac{1}{1+2\pi is}+\overline{(\mathcal{F}f)(s)}\\
&= \frac{1}{1+2\pi is}+\frac{1}{1-2\pi is}\\
&= \frac{2}{1+4\pi^2s^2}.
\end{align*}$$

## Shifting and stretching
---

Suppose $f(t)$ is a function with a known Fourier transform. One of the first things we learn in precalculus is how manipulating the inputs and outputs of a function affects the graph of that function. For example, we know that the curve defined by $y=f(t+b)$ looks like the curve defined by $y=f(t)$ shifted to the *left* by $b$ units, while the curve defined by $y=f(at)$ looks like the curve defined by $y=f(t)$ horizontally *compressed* by a factor of $|a|$ (and reflected across the $y$-axis if $a<0$.)

It turns out that we have similar knowledge about how the Fourier transform of a function is affected when we modify the input (or outputs) of the function.

Let's focus just on modifying the inputs, since the linearity of the Fourier transform makes handling adjustments to the outputs fairly easy. Suppose we $f$ has a Fourier transform and we want to determine the Fourier transform of the related function $g(t)=f(at+b)$, where $a$ and $b$ are some real constants (with $a\neq 0$). By definition, we have

$$(\mathcal{F}g)(s)=\int_{-\infty}^{\infty} g(t)e^{-2\pi its}\operatorname{d}t=\int_{-\infty}^{\infty} f(at+b)e^{-2\pi its}\operatorname{d}t.$$

We will make the substitution $u=at+b$, so that $\operatorname{d}u=a\operatorname{d}t$. If $a>0$, then the bounds remain the same and we find that

$$\begin{align*}
\int_{-\infty}^{\infty} f(at+b)e^{-2\pi its}\operatorname{d}t&=\frac{1}{a}\int_{-\infty}^{\infty}f(u)e^{-2\pi i\cdot \frac{u-b}{a}\cdot s}\operatorname{d}u\\
&= \frac{1}{a}\int_{-\infty}^{\infty} f(u)e^{\frac{2\pi ibs}{a}}e^{-2\pi u\cdot\frac{s}{a}}\operatorname{d}u\\
&=\frac{e^{\frac{2\pi isb}{a}}}{a}\int_{-\infty}^{\infty} f(u)e^{-2\pi iu\cdot\frac{s}{a}}\operatorname{d}u.
\end{align*}$$

On the other hand, if $a<0$, then we instead have

$$\begin{align*}
\int_{-\infty}^{\infty} f(at+b)e^{-2\pi its}\operatorname{d}t&=\frac{e^{\frac{2\pi isb}{a}}}{a}\int_{\infty}^{-\infty} f(u)e^{-2\pi iu\cdot\frac{s}{a}}\operatorname{d}u\\
&=\frac{e^{\frac{2\pi isb}{a}}}{-a}\int_{-\infty}^{\infty} f(u)e^{-2\pi iu\cdot\frac{s}{a}}\operatorname{d}u
\end{align*}$$

We can use a single formula to capture both situations if we use the absolute value function:

$$\int_{-\infty}^{\infty} f(at+b)e^{-2\pi its}\operatorname{d}t=\frac{e^{\frac{2\pi isb}{a}}}{|a|}\int_{-\infty}^{\infty} f(u)e^{-2\pi iu\cdot\frac{s}{a}}\operatorname{d}u$$

In any case, the integral on the right-hand side is exactly the Fourier transform of $f$, only evaluated at $\frac{s}{a}$ instead of at $s$. We have therefore proven the following:

> [!summary] The stretch-and-shift property of the Fourier transform
> Suppose $f$ has a Fourier transform and $a,b$ are real numbers (with $a\neq 0$). Let $g(t)=f(at+b)$. Then 
> 
> $$(\mathcal{F}g)(s) = \frac{1}{|a|}e^{\frac{2\pi isb}{a}}\cdot (\mathcal{F}f)\left(\frac{s}{a}\right).$$

### Example

Consider the function graphed below:

![shiftStretchRect.png|900](/img/user/90-99%20Meta/91%20Images/Differential%20equations/shiftStretchRect.png)

This looks like a shifted and stretched version of the graph of our usual rectangle function. It hasn't been altered vertically in any way, but the width of the above rectangle is $2$ (whereas the width of the usual rectangle is $1$) and its now centered at $t=3$ (whereas the usual rectangle is centered at $t=0$). We can now conclude that the above curve is defined by

$$y=\Pi\left(\frac{1}{2}(t-3)\right)=\Pi\left(\frac{1}{2}t-\frac{3}{2}\right).$$

We can now immediately conclude that the Fourier transform of the function $g(t)=\Pi\left(\frac{1}{2}t-\frac{3}{2}\right)$ is

$$(\mathcal{F}g)(s)=\frac{e^{\frac{2\pi is\cdot\frac{-3}{2}}{\frac{1}{2}}}}{\frac{1}{2}}\cdot (\mathcal{F}\Pi)\left(\frac{s}{\frac{1}{2}}\right)=2e^{-6\pi is}\cdot\operatorname{sinc}(2s).$$

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform IV - Derivatives\|Fourier transform IV - Derivatives]]