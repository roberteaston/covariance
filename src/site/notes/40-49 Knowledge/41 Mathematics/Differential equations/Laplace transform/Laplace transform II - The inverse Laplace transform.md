---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/laplace-transform/laplace-transform-ii-the-inverse-laplace-transform/","tags":["differential_equations"],"updated":"2025-08-21T14:10:55-07:00"}
---

When dealing with the Fourier transform, the inverse transform had a simple integral formula almost identical to the Fourier transform itself:

$$(\mathcal{F}^{-1}F)(t) = \int_{-\infty}^{\infty} F(s)e^{2\pi its}\operatorname{d}s.$$

As a result of this close relationship between $\mathcal{F}$ and $\mathcal{F}^{-1}$, we had handy properties like $\mathcal{F}^{-1}F = \mathcal{F}F^-$, which allowed us the option of doing every calculation exclusively with the forward transform.

Unfortunately, our tinkering with the transform has broken this perfect symmetry, and it turns out that the inverse Laplace transform is given by a complex contour integral, specifically

$$(L^{-1}F)(t)=\frac{1}{2\pi i}\int_{\gamma} F(s)e^{st}\operatorname{d}t,$$

where $\gamma$ is any vertical line in the part of the complex plane to the right of all singularities of $F(s)$ (and where $F(s)$ is bounded). (Note that this integral at least makes it clear the inverse Laplace transform is still a linear operator.)

It's not a total catastrophe, but for our purposes here it effectively means there's no longer an integral formula for the inverse transform. Instead, we'll treat inverse Laplace transforms much like we treat antiderivatives: as formulas that must be deduced (or reverse-engineered) from forward transform formulas.

## The "Fab Four" inverse Laplace transforms
---

Let's now recall each of our "Fab Four" Laplace transforms and then reverse them to give inverse Laplace transform formulas.

### The inverse rule for powers

Starting with the power rule $L(t^n) = \frac{n!}{s^{n+1}}$, we can immediately deduce that

$$L^{-1}\left(\frac{n!}{s^{n+1}}\right) = t^n.$$

We can make this more practically useful by first using linearity to rewrite this as

$$L^{-1}\left(\frac{1}{s^{n+1}}\right) = \frac{t^n}{n!}.$$

Let's now relabel the power of $s$ by $m$ (so that $m=n+1$), and our final formula is

$$L^{-1}\left(\frac{1}{s^m}\right)=\frac{t^{m-1}}{(m-1)!}.$$

Of course, this formula is only valid for integers $m\geq 1$.

### The inverse rule for the exponential function

This one is super easy. The forward Laplace formula is $L(e^{at})= \frac{1}{s-a}$. The inverse Laplace formula is therefore

$$L^{-1}\left(\frac{1}{s-a}\right) = e^{at}.$$

### The inverse rule for sine

This one isn't too bad. The forward Laplace formula is $L(\sin(bt))=\frac{b}{s^2+b^2}$. This immediately gives the formula

$$L^{-1}\left(\frac{b}{s^2+b^2}\right)=\sin(bt).$$

Using linearity, we can rewrite this in the slightly more useful form

$$L^{-1}\left(\frac{1}{s^2+b^2}\right)=\frac{1}{b}\sin(bt).$$

### The inverse rule for cosine

This one is again immediate. From the Laplace formula $L(\cos(bt))=\frac{s}{s^2+b^2}$, we immediately obtain the inverse Laplace formula

$$L^{-1}\left(\frac{s}{s^2+b^2}\right) = \cos(bt).$$


---

So, in summary we have:

> [!summary] The "Fab Four" inverse Laplace formulas
> 1. $L^{-1}\left(\frac{1}{s^m}\right)=\frac{t^{m-1}}{(m-1)!}$ for $m\geq 1$
> 2. $L^{-1}\left(\frac{1}{s-a}\right) = e^{at}$
> 3. $L^{-1}\left(\frac{1}{s^2+b^2}\right)=\frac{1}{b}\sin(bt)$
> 4. $L^{-1}\left(\frac{s}{s^2+b^2}\right) = \cos(bt)$


## Examples
---

### An easy example

If $F(s)$ is a linear combination of the types of functions in the "Fab Four", then computing the inverse Laplace transform is easy. For example, if

$$F(s) = -\frac{1}{s}+\frac{2}{s^3}-\frac{1}{s^2+4}+\frac{2s}{s^2+9},$$

then we can instantly compute

$$\begin{align*}
L^{-1}F &= -L^{-1}\left(\frac{1}{s}\right)+2L^{-1}\left(\frac{1}{s^3}\right)-L^{-1}\left(\frac{1}{s^2+4}\right)+2L^{-1}\left(\frac{s}{s^2+9}\right)\\
&= -1+2\frac{t^2}{2}-\frac{1}{2}\sin(2t)+2\cos(3t)\\
&= -1+t^2-\frac{1}{2}\sin(2t)+2\cos(3t).
\end{align*}$$

### A sneakier example

Suppose we wanted/needed to compute the Laplace transform of the function

$$F(s) = \frac{3s+2}{s^2-3s+2}.$$

This function does not look like a linear combination of the types of functions in the "Fab Four" list, so we need to do some algebraic work first to rewrite $F(s)$ in a different way. In fact, we're going to use the same technique used to compute an antiderivative of this function, namely partial fractions decomposition. In this case, with a little effort we can compute

$$F(s) = \frac{3s+2}{(s-1)(s-2)} = \frac{-5}{s-1}+\frac{8}{s-2}=-5\cdot \frac{1}{s-1}+8\cdot\frac{1}{s-2}.$$

Now we can immediately deduce

$$L^{-1}F = -5L^{-1}\left(\frac{1}{s-1}\right)+8L^{-1}\left(\frac{1}{s-2}\right)=-5e^{1\cdot t}+8e^{2\cdot t}.$$


## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Laplace transform/Laplace transform III - The Shifting Theorems\|Laplace transform III - The Shifting Theorems]]
