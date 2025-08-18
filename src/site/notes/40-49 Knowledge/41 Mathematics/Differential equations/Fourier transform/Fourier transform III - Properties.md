---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-iii-properties/","tags":["differential_equations"],"updated":"2025-08-18T09:52:23-07:00"}
---

The Fourier transform (and inverse transform) enjoys a long list of very nice properties.

## "Signal reversal"
---

Observe that

$$(\mathcal{F}f)(-s)=\int_{-\infty}^{\infty}f(t)e^{-2\pi it(-s)}\operatorname{d}t=\int_{-\infty}^{\infty}f(t)e^{2\pi its}\operatorname{d}t=(\mathcal{F}^{-1}f)(s).$$

Note that for the last equality we are now thinking of the inverse Fourier transform as taking in a function of $t$ and returning a function of $s$. While that is opposite of our default convention, remember that our default convention is just that: a default way to name the variables for the function we start with and the transformed function. Variable names can always be changed to whatever you want, though!

Similarly,

$$(\mathcal{F}^{-1}f)(-t)=(\mathcal{F}f)(t).$$

Here's one way to think about what's happening. If we think of a function $f(t)$ as a "signal", then we can define the **reverse signal** $f^-$ by

$$f^-(t)=f(-t).$$

Note that we are not saying *inverse*, but *reverse*.  The graph of $f^-$ looks like the "reverse" of the graph of $f$, i.e., the reflection across the $y$-axis:

*Image coming soon*

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


### Using reversal to compute some Fourier transforms

Let's assume for the moment that we do indeed have $\mathcal{F}^{-1}\operatorname{sinc}=\Pi$. We can now use the reversal properties to compute the (forward) Fourier transform of $\operatorname{sinc}$:

$$\mathcal{F}\operatorname{sinc}=(\mathcal{F}^{-1}\operatorname{sinc})^- = \Pi^- = \Pi.$$

Similarly, if we assume we do indeed have $\mathcal{F}^{-1}\operatorname{sinc}^2 = \Lambda$, then we can immediately deduce

$$\mathcal{F}\operatorname{sinc}^2 = (\mathcal{F}^{-1}\operatorname{sinc}^2)^-=\Lambda^- = \Lambda.$$

### Fourier transforms of even and odd functions

Suppose $f$ is an even function, i.e., $f^-=f$. Then

$$(\mathcal{F}f)^- = \mathcal{F}(f^-)=\mathcal{F}f,$$

and so $\mathcal{F}f$ is also an even function.

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

## Shifting and stretching
---

*Under construction!*

## Suggested next notes
---

*Coming soon*
