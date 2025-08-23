---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/laplace-transform/laplace-transform-v-solving-differential-equations/","tags":["differential_equations"],"updated":"2025-08-23T14:54:02-07:00"}
---

Recall that, under some mild hypotheses, the Fourier transform had the following property when it came to take derivatives:

$$\mathcal{F}(f')=2\pi is\cdot \mathcal{F}f.$$

Does the Laplace transform enjoy a similar property? Let's find out.

## The derivative property
---

We repeat the same argument used to deduce the derivative property of the Fourier transform, namely computing the integral using integration by parts:

$$\begin{align*}
L(f')(s)&= \int_0^{\infty} f'(t)e^{-ts}\operatorname{d}t\\
&= \left[f(t)e^{-ts}\right]_0^{\infty}-\int_0^{\infty}f(t)\cdot (-se^{-ts}\operatorname{d}t)\\
&= (0-f(0))+s\int_0^{\infty}f(t)e^{-ts}\operatorname{d}t\\
&= s\cdot Lf-f(0)
\end{align*}$$

We should have taken more care with the bounds on the evaluated portion (e.g., using a limit), but we'll just note that $\displaystyle \lim_{t\to\infty} f(t)e^{-ts}=0$ for $s>\alpha$, if $|f(t)|\leq Me^{\alpha t}$ for all sufficiently large $t$, i.e., if $f$ is exponential of order $\alpha$.

How about higher derivatives? It's not too hard to prove the following:

> [!summary] Derivatives and the Laplace transform
> If $f$ is a smooth function of exponential order $\alpha$, then
> 
> $$L(f^{(k)})(s) = s^k\cdot Lf-s^{k-1}f(0)-s^{k-2}f'(0)-\cdots -f^{(k-1)}(0).$$

Notice how the derivative property for the Laplace transform is much more involved than the property for the Fourier transform, and also that it involves "initial information" about the function $f$ and its derivatives.

## Solving differential equations
---

We now have enough properties that we should be able to use the Laplace transform to solve some differential equations.

### Example

Let's solve the initial-value problem

$$y''-y'-6y=0,\quad y(0)=1,\, y'(0)=2.$$

We first apply the Laplace transform to to the differential equation. With the above derivative property in mind, we obtain

$$(s^2\cdot Ly-s\cdot y(0)-y'(0))-(s\cdot Ly-y(0))-6\cdot Ly = 0.$$

Using the given initial data, this becomes

$$(s^2\cdot Ly-s-2)-(s\cdot Ly-1)-6\cdot Ly=0,$$

which simplifies to

$$\begin{align*}
Ly &= \frac{s+1}{s^2-s-6}\\
&=\frac{1}{5}\cdot\frac{1}{s+2}+\frac{4}{5}\cdot\frac{1}{s-3}
\end{align*}.$$

(Note that, in anticipation of using the Laplace transform, we already performed the partial fraction decomposition.) Applying the inverse Laplace transform, we then have

$$y(t) = \frac{1}{5}e^{-2t}+\frac{4}{5}e^{3t}.$$

> [!note] Something new
> Notice how the initial conditions are incorporated into the solution at the moment we use the Laplace transform? This is in contrast to most methods of solving differential equations, which find the general solution first and then impose the initial conditions at the very end.

### Example

Let's next solve the initial-value problem

$$y'-y=1-u_1(t)(t-1),\quad y(0)=0.$$

Applying the Laplace transform gives

$$(s\cdot Ly-y(0))-Ly = L(1)-L(u_1\cdot (t-1)),$$

which in turn gives

$$(s-1)Ly = \frac{1}{s}-e^{-s}L(t),$$

and finally

$$Ly=\frac{1}{s(s-1)}-e^{-s}\cdot\frac{1}{s^2(s-1)}.$$

Before applying the inverse Laplace transform, we first break up the fractions on the right-hand side using partial fractions:

$$Ly = -\frac{1}{s}+\frac{1}{s-1}-e^{-s}\left(-\frac{1}{s}-\frac{1}{s^2}+\frac{1}{s-1}\right).$$

Applying the inverse Laplace transform now gives

$$\begin{align*}
y(t) &= -1+e^t-u_1(t)\cdot \left(-1-t+e^t\right)\mid_{t\mapsto t-1}\\
&= -1+e^t-u_1(t)\cdot (-1-(t-1)+e^{t-1})\\
&= -1+e^t-u_1(t)(-t+e^{t-1})\\
&=\begin{cases}-1+e^t,&\text{for }0\leq t<1\\-1+e^t+t-e^{t-1},&\text{for }t\geq 1\end{cases}
\end{align*}$$


## Suggested next notes
---

*Maybe something on distributions, someday ...*
