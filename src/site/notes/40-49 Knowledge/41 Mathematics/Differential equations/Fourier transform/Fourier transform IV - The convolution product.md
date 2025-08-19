---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-iv-the-convolution-product/","tags":["differential_equations"],"updated":"2025-08-19T11:56:07-07:00"}
---

## The Fourier transform and derivatives
---

We have been slowly analyzing how the Fourier transform interacts with the other operations we can perform on functions, and now it is time to finally ask:

> [!question] The Fourier transform and derivatives
> How does the Fourier transform interact with the derivative operator? In other words, how does $\mathcal{F}(f')$ relate to $\mathcal{F}f$?

Let's begin by assuming $f$ is differentiable,  is continuous and $\displaystyle \lim_{t\to \pm\infty}f(t)=0$. Using integration by parts (which is valid since both $f$ and $f'$ are continuous), we have

$$\begin{align*}
(\mathcal{F}f')(s) &= \int_{-\infty}^{\infty} f'(t)e^{-2\pi ist}\,\operatorname{d} t\\
&= \left[e^{-2\pi ist} f(t)\right]_{-\infty}^{\infty}-\int_{-\infty}^{\infty}f(t)\cdot (-2\pi is)e^{-2\pi ist}\,\operatorname{d} t\\
&= 2\pi is\int_{-\infty}^{\infty} f(t)e^{-2\pi ist}\,\operatorname{d} t\\
&= 2\pi is\cdot (\mathcal{F}f)(s).
\end{align*}$$

Note that in the third equality we used the assumption that $\displaystyle \lim_{t\to \pm \infty} f(t)=0$.

So, under these mild assumptions, we have the very nice property:

$$\mathcal{F}(f')=2\pi is\cdot \mathcal{F}f$$

Assuming $f'$ itself has similarly nice properties, we can repeat this argument to deduce that

$$\mathcal{F}(f'')=(2\pi is)^2\cdot \mathcal{F}f,$$

and so on.

> [!summary] The Fourier transform and differentiation
> Under some mild assumptions on $f$, we have the following formula:
> 
> $$\mathcal{F}(f^{(k)})=(2\pi is)^k\cdot \mathcal{F}f.$$

In other words, the Fourier transform exchanges differentiation for multiplication by $2\pi is$. Very nice!

### An enlightening example

Suppose $f(t)$ is a function that satisfies the ambiguous "mild assumptions" above and is a solution to the differential equation

$$f''(t)-f(t)+\Lambda(t)=0.$$

Applying the Fourier transform then produces the following algebraic equation:

$$(2\pi is)^2\cdot F(s)-F(s)+\operatorname{sinc}^2(s) = 0.$$

We can easily solve this equation for $F(s)$, finding that

$$F(s)=-\frac{\operatorname{sinc}^2(s)}{(2\pi is)^2-1}=\frac{\operatorname{sinc}^2(s)}{1+4\pi^2s^2}.$$

In theory, we can now "simply" use the inverse Fourier transform to recover $f$:

$$f(t)=(\mathcal{F}^{-1}F)(t)=\int_{-\infty}^{\infty}\frac{\operatorname{sinc}^2(s)}{1+4\pi^2s^2}e^{2\pi its}\operatorname{d}s.$$

But this looks like an incredibly difficult integral to compute! Is there anyway to determine $f$ without computing this monstrous integral? Maybe ...

You might recognize the function $F(s)$ (which is the transform of $f$) as the product of the transforms of two recognizable functions. Indeed, first write

$$F(s) = \operatorname{sinc}^2(s)\cdot \frac{1}{1+4\pi^2s^2}.$$

We know $(\mathcal{F}\Lambda)(s)=\operatorname{sinc}^2(s)$ and $\mathcal{F}(e^{-|t|})=\frac{2}{1+4\pi^2s^2}$, so if we let $g(t)=\frac{1}{2}e^{-|t|}$, then $(\mathcal{F}g)(s)=\frac{1}{1+4\pi^2s^2}$. With these observations in mind, we can view the equality above as the equality

$$\mathcal{F}f = \mathcal{F}\Lambda\cdot \mathcal{F}g.$$

If we can figure out how to rewrite the right-hand side as the Fourier transform of a single function, then our equation above tells us $f$ must equal that function. So let's try to do that.

We begin by inserting the integral definitions of the transforms on the right-hand side:

$$\mathcal{F}\Lambda\cdot \mathcal{F}g = \left(\int_{-\infty}^{\infty}\Lambda(t)e^{-2\pi its}\operatorname{d}t\right)\left(\int_{-\infty}^{\infty}g(x)e^{-2\pi ixs}\operatorname{d}x\right)$$

Here we have used different variables of integration for the two integrals, so that we can use the multivariable calculus trick of rewriting the product of those two integrals as a single double integral:

$$\mathcal{F}\Lambda\cdot \mathcal{F}g=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} \Lambda(t)g(x)e^{-2\pi i(t+x)s}\operatorname{d}t\operatorname{d}x.$$

Now we'll make the substitution $u=t+x$ on the inner integral, obtaining:

$$\mathcal{F}\Lambda\cdot \mathcal{F}g=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} \Lambda(u-x)g(x)e^{-2\pi ius}\operatorname{d}u\operatorname{d}x.$$

Finally, we'll change the order of integration and introduce some visually suggestive parentheses:

$$\mathcal{F}\Lambda\cdot \mathcal{F}g=\int_{-\infty}^{\infty}\left(\int_{-\infty}^{\infty} \Lambda(u-x)g(x)\operatorname{d}x\right)e^{-2\pi ius}\operatorname{d}u.$$

If we define a function $h(u)$ by

$$h(u)=\int_{-\infty}^{\infty} \Lambda(u-x)g(x)\operatorname{d}x,$$

then our previous equation suddenly becomes

$$\mathcal{F}\Lambda\cdot \mathcal{F}g=\int_{-\infty}^{\infty}h(u)e^{-2\pi ius}\operatorname{d}u=\mathcal{F}h.$$

It follows that $f=h$. In other words, we've proven that our solution is

$$f(t) = \int_{-\infty}^{\infty}\Lambda(t-x)g(x)\operatorname{d}x.$$

We've accidentally discovered the **convolution product**!

## The convolution product
---



### Handy properties of convolution

### How to think about convolution


## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform V - Solving differential equations\|Fourier transform V - Solving differential equations]]