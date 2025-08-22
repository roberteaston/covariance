---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/laplace-transform/laplace-transform-iii-the-shifting-theorems/","tags":["differential_equations"],"updated":"2025-08-22T13:17:30-07:00"}
---

With the Fourier transform, we had the [[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform III - Properties of the Fourier transform#Shifting and stretching\|stretch-and-shift]] property that made computing Fourier transforms of slightly modified functions very easy, namely:

$$\mathcal{F}(f(at+b)) = \frac{1}{|a|}e^{\frac{2\pi isb}{a}}(\mathcal{F}f)\left(\frac{s}{a}\right).$$

As a special case of this, when $a=1$ we have the following "stretch theorem":

$$\mathcal{F}(f(t+b)) = e^{2\pi isb}\cdot \mathcal{F}f.$$

In other words, shifting the input of $f$ by $b$ simply "costs" a factor of $e^{2\pi isb}$ on the transform of $f$. For example, we can instantly compute

$$\mathcal{F}(\Pi(t+1))=e^{2\pi is}\operatorname{sinc}(s).$$

This property can potentially save us from lots of tedious integration.

There's also the corresponding property for the inverse Fourier transform, namely

$$\mathcal{F}^{-1}(F(s+b))=e^{-2\pi itb}\cdot \mathcal{F}^{-1}F.$$

How about the Laplace transform? Let's take a look and see!

## The first shift theorem
---

Let's start by computing

$$\begin{align*}
L(f(t+b)) &= \int_0^{\infty} f(t+b)e^{-ts}\operatorname{d}t\\
&= \int_b^{\infty} f(u)e^{-(u-b)s}\operatorname{d}u\quad \text{(using $u=t+b$)}\\
&= e^{bs}\int_b^{\infty} f(u)e^{-us}\operatorname{d}u\\
&= e^{bs}\int_b^{\infty} f(t)e^{-ts}\operatorname{d}t
\end{align*}$$

This last integral *almost* looks like the Fourier transform of $f$, except that the lower bound is $b$ and not $0$. In order to fix this issue, let's introduce the function

$$u_b(t) = \begin{cases} 0,& 0\leq t< b\\1,& t\geq b\end{cases}$$

We call this the **unit step function** at time $t=b$. It's graph is simply

*coming soon*

We can think of $u_b(t)$ as like a "switch" that "turns on" at time $t=b$. In particular, note that

$$\int_0^{\infty} u_b(t)f(t)e^{-ts}\operatorname{d}t=\int_b^{\infty} f(t)e^{-ts}\operatorname{d}t.$$

Based on our work above, we can thus conclude:

$$L(f(t+b)) = e^{bs}\cdot L(u_b(t)f(t)).$$

As currently written, this property doesn't look like it would be very helpful to us. After all, none of our "Fab Four" Laplace transforms involves a unit step function, so we are unlikely to ever know the Laplace transform on the right-hand side.

However, we can flip things around a bit and turn this into a more useful equality, namely:

$$L(u_b\cdot f) = e^{-bs} L(f(t+b)).$$

### Example

Consider the piecewise-defined function

$$f(t)=\begin{cases}0,& 0\leq t<1 \\ t-1,& 1\leq t <2 \\1,& 2\leq t\end{cases}$$

We can rewrite $f(t)$ as a combination of its "component" functions using step functions to "turn on" and "turn off" the various components. Indeed, we claim that

$$f(t) = (u_0(t)-u_1(t))\cdot 0 +(u_1(t)-u_2(t))\cdot (t-1)+u_2(t)\cdot 1.$$

To verify this, simply note that:
- $u_0(t)-u_1(t)$ takes the value $1$ on the interval $[0,1)$ and the value $0$ everywhere else
- $u_1(t)-u_2(t)$ takes the value $1$ on the interval $[1,2)$ and the value $0$ everywhere else
- $u_2(t)$ takes the value $1$ on the interval $[2,\infty)$ and the value $0$ everywhere else

We can now simplify our expression for $f(t)$, gathering terms according to step functions. We eventually find

$$f(t)=u_1(t)\cdot (t-1)+u_2(t)\cdot (2-t).$$

It then follows that

$$\begin{align*}
Lf &= L(u_1\cdot (t-1))+L(u_2\cdot (2-t))\\
&= e^{-1\cdot s}L((t+1)-1)+e^{-2s}L(2-(t+2))\\
&= e^{-s}L(t)+e^{-2s}L(-t)\\
&= e^{-s}\frac{1}{s^2}-e^{-2s}\frac{1}{s^2}.
\end{align*}$$

---

We can also reverse this shifting property to give a formula for inverse Laplace transforms. First, let's express the original shifting property a little more suggestively, as

$$L(u_b\cdot f) = e^{-bs}L(f\mid_{t\mapsto t+b})$$

I like to read this as, "If you are transforming a step function times a known function, you can trade out the step function at the cost of a negative exponential term, and then transform the original function after first stepping forward by the step."

We can now reverse this rule to obtain the following:

$$L^{-1}(e^{-bs}F)=u_b\cdot (L^{-1}F)\mid_{t\mapsto t-b}$$

In words, "If you are transforming back and see a negative exponential function, you can trade out the exponential for a step function and then transform back the original function, but remember to step back after you do."

### Example

Using the above reverse shifting property, we can compute

$$\begin{align*}
L^{-1}\left(\frac{2e^{-s}}{s^2+4}\right) &= L^{-1}\left(e^{-s}\cdot \frac{2}{s^2+4}\right)\\
&= u_1(t)\cdot \left(L^{-1}\left(\frac{2}{s^4+4}\right)\right)\mid_{t\mapsto t-1}\\
&= u_1(t)\cdot (\sin(2t))\mid_{t\mapsto t-1}\\
&= u_1(t)\cdot \sin(2(t-1)).
\end{align*}$$


## The second shift theorem
---

Recall that the shifting property for the inverse Fourier transform is

$$\mathcal{F}^{-1}(F(s+b))=e^{-2\pi itb}\cdot \mathcal{F}^{-1}F.$$

We claim that we similarly have

$$L^{-1}(F(s+b)) = e^{-bt}\cdot L^{-1}F$$

To verify this, let $f(t)=L^{-1}F$, so that $Lf=F$, and observe

$$L(e^{-bt}f(t))=\int_0^{\infty} e^{-bt}f(t)e^{-ts}\operatorname{d}t=\int_0^{\infty}e^{-t(s+b)}\operatorname{d}t=(Lf)(s+b)=F(s+b).$$

This proves $e^{-bt}f(t) = L^{-1}(F(s+b))$, as claimed.

Before seeing an example, I would like to rewrite this shifting property in a way I find more helpful in real life, using similar notation to the previous one:

$$L^{-1}F = e^{-bt}L^{-1}(F\mid_{s\mapsto s-b}).$$

I read this as "If I'm doing an inverse transform, I can step back by $b$ before transforming if I pay the cost of a negative exponential."

### Example

Consider the function $F(s) = \frac{1}{s^2+2s+2}$. In this form, we don't have much hope of computing its inverse transform. However, if we complete the square in the denominator, then we see that

$$F(s) = \frac{1}{(s+1)^2+1},$$

and so if we "stepped back" by $1$ we would have the function

$$F(s-1) = \frac{1}{s^2+1},$$

whose inverse transform we *do* know.

With this idea in mind, using the above shifting property we can compute

$$\begin{align*}
L^{-1}F&= L^{-1}\left(\frac{1}{s^2+2s+2}\right)\\
&= L^{-1}\left(\frac{1}{(s+1)^2+1}\right)\\
&= e^{-1\cdot t}L^{-1}\left(\frac{1}{s^2+1}\right)\\
&= e^{-t}\sin(t)
\end{align*}$$

---

Just as with the first shifting theorem, we can "reverse" this theorem to give another shifting problem for the forward transform, namely:

$$L(e^{-bt}\cdot f)=(Lf)\mid_{s\mapsto s+b}.$$

In word, "If you are computing a forward transform and see a negative exponential, you can just transform the function next to it, so long as you step forward after you do."

For example, we can use this to compute

$$L(e^{-3t}t^4)=(L(t^4))\mid_{s\mapsto s+3}=\left(\frac{4!}{s^5}\right)\mid_{s\mapsto s+3}=\frac{4!}{(s+3)^5}.$$


## In summary: the four shifting results
---

> [!summary] The Shifting Theorems
> We have the following shifting theorems:
> 
> 1. $$L(u_b\cdot f) = e^{-bs}L(f\mid_{t\mapsto t+b})\quad \Leftrightarrow \quad L^{-1}(e^{-bs}F)=u_b\cdot (L^{-1}F)\mid_{t\mapsto t-b}$$
> 
> 2. $$L^{-1}F = e^{-bt}L^{-1}(F\mid_{s\mapsto s-b})\quad \Leftrightarrow \quad L(e^{-bt}\cdot f)=(Lf)\mid_{s\mapsto s+b}$$

Notice that the forward transforms always involve a step forward, the inverse transforms a step back, and everything always "costs" a negative exponential.
## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Laplace transform/Laplace transform IV - Convolution redux\|Laplace transform IV - Convolution redux]]
