---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-ii-the-fourier-transform-and-inverse-transform/","tags":["differential_equations"],"updated":"2025-08-18T09:31:28-07:00"}
---

Inspired by the [[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform I - Pushing Fourier series to the limit#The takeaway\|previous example]] and ignoring any technical issues (such as convergence), we have been led to define the following:

> [!note] Definition of the Fourier transform and inverse transform
> The **Fourier transform** of a function $f(t)$ is the function $F(s)$ defined by the integral
> 
> $$F(s)=\int_{-\infty}^{\infty} f(t)e^{-2\pi its}\operatorname{d}t,$$
> 
> if the integral exists. The function $F$ is sometimes denoted $\mathcal{F}f$ or $\hat{f}$.
> 
> The **inverse Fourier transform** of a function $F(s)$ is the function $f(t)$ defined by the integral
> 
> $$f(t) = \int_{-\infty}^{\infty} F(s)e^{2\pi its}\operatorname{d}s,$$
> 
> if the integral exists. The function $f$ is sometimes denoted $\mathcal{F}^{-1}F$ or $\check{F}$.

> [!warning] Convention warning
> Although our definition of the Fourier transform seems like the most natural one, as an evolution of the Fourier series, in practice there are many competing definitions. Some sources switch the roles of what we have called the Fourier transform and the inverse Fourier transform. Some use the integral
> 
> $$F(s)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(t)e^{-its}\operatorname{d}t,$$
> 
> or even simply the integral
> 
> $$F(s)=\int_{-\infty}^{\infty} e^{-its}\operatorname{d}t.$$
> 
> In these notes will stick with the definitions we made above, but be wary when reading other resources.


## Examples
---

### The rectangle function

Based on our work in the previous example, the Fourier transform of the rectangle function $\Pi(t)$ is the function $F(s) = \frac{\sin(\pi s)}{\pi s}$:

$$(\mathcal{F}\Pi)(s) = \int_{-\infty}^{\infty} \Pi(t)e^{-2\pi its}\operatorname{d}t = \frac{\sin(\pi s)}{\pi s}.$$

If we believe the rectangle function $\Pi(t)$ is a "fundamental" function, then its Fourier transform probably deserves to be considered fundamental, as well. Indeed, it is often given a name:

> [!note] Definition of the $\operatorname{sinc}$ function
> Define the function $\operatorname{sinc}$ (pronounced "sink") by
> 
> $$\operatorname{sinc}(s)=\begin{cases}\frac{\sin(\pi s)}{\pi s},&\text{ for }s\neq 0\\1,&\text{ for }s=0\end{cases}.$$

> [!warning] Convention warning
> As with the definition of the Fourier transform, not all sources agree on this definition of the $\operatorname{sinc}$ function. Some instead use the function $\frac{\sin(s)}{s}$.

So, we can now say $\mathcal{F}\Pi = \operatorname{sinc}$. Also, for reference, here's a bit of the graph of the $\operatorname{sinc}$ function:

![sinc.png|900](/img/user/90-99%20Meta/91%20Images/Differential%20equations/sinc.png)

We should note that in our build-up to the discovery of the Fourier transform, we also "proved" that the inverse Fourier transform of the $\operatorname{sinc}$ function is the rectangle function $\Pi$, i.e.,

$$\mathcal{F}^{-1}\operatorname{sinc}=\Pi$$

This would be fairly difficult to verify directly, since it would amount to calculating the integral

$$(\mathcal{F}^{-1}\operatorname{sinc})(t) = \int_{-\infty}^{\infty} \operatorname{sinc}(s)e^{2\pi its}\operatorname{d}s = \int_{-\infty}^{\infty} \frac{\sin(\pi s)}{\pi s}e^{2\pi its}\operatorname{d}s.$$

In fact, the above integral doesn't quite exactly agree with our rectangle function. It turns out that the above integral takes the value $0$ outside $(-\frac{1}{2},\frac{1}{2})$, takes the value $1$ inside $(-\frac{1}{2},\frac{1}{2})$, and takes the value $\frac{1}{2}$ at $t=\pm \frac{1}{2}$. In other words, it agrees with $\Pi(t)$ except at the two jump discontinuities (where the inverse transform takes the average of the values across the jump).

We won't worry about this for now.

### A triangle function

Consider the "triangle function" defined piecewise by

$$\Lambda(t)=\begin{cases}1+t,&\text{ for }-1\leq t\leq 0\\1-t,&\text{ for }0<t\leq 1\\0,&\text{ otherwise}\end{cases}$$

The graph of this function looks like a isosceles right triangle of height $1$ and base $2$ centered at the origin:

*Image coming soon*

We have chosen to use the capital lambda symbol for this function's name because that Greek character also happens to look like a triangle.

In any case, we can compute the Fourier transform of this function:

$$(\mathcal{F}\Lambda)(s) = \int_{-\infty}^{\infty} \Lambda(t)e^{-2\pi its}\operatorname{d}t = \int_{-1}^0 (1+t)e^{-2\pi its}\operatorname{d}t +\int_0^1 (1-t)e^{-2\pi its}\,\operatorname{d}t.$$

I'll add the computations later, but for now I'll cut to the chase and note that we eventually find

$$(\mathcal{F}\Lambda)(s)=\frac{1}{(-2\pi is)^2}\left(e^{2\pi is}-2+e^{-2\pi is}\right).$$

Even better, this expression can be simplified to

$$(\mathcal{F}\Lambda)(s)=\frac{\sin^2(\pi s)}{(\pi s)^2}=\operatorname{sinc}^2(s).$$

So the Fourier transform of the triangle function $\Lambda$ is exactly the square of the Fourier transform of the rectangle function $\Pi$. We'll soon see that there is a secret reason for this!

### One-sided exponential decay

Consider the one-sided exponential decay function

$$f(t)=\begin{cases}e^{-t},&\text{ for }t\geq 0\\0,&\text{ otherwise}\end{cases}.$$

The graph of $f$ looks like

*Image coming soon*

(We have not chosen a fun character to name this function, since there aren't any characters that look like the above graph.)

We compute the Fourier transform of this function:

$$\begin{align*}
(\mathcal{F}f)(s) &= \int_{-\infty}^{\infty}f(t)e^{-2\pi its}\operatorname{d}t\\
&= \int_0^{\infty} e^{-t}e^{-2\pi its}\operatorname{d}t\\
&=\int_0^{\infty}e^{(-1-2\pi is)t}\operatorname{d}t\\
&= \frac{1}{-1-2\pi is}\lim_{b\to\infty}\left(e^{(-1-2\pi is)b}-1\right)\\
&= \frac{1}{-1-2\pi is}\lim_{b\to \infty}\left(e^{-b}e^{-2\pi ibs}-1\right)\\
&= \frac{1}{-1-2\pi is}(0-1)\\
&= \frac{1}{1+2\pi is}.
\end{align*}$$

(Note that here we are assuming $s$ only takes real values, in which case the exponential function $e^{-2\pi ibs}=\cos(2\pi bs)-i\sin(2\pi bs)$ is always a complex number on the unit circle. This is how we concluded that the term $e^{-b}e^{-2\pi ibs}$ went to $0$ as $b\to \infty$.)

### A Gaussian function

Consider the classic Gaussian function $f(t)=e^{-\pi t^2}$, whose graph is the usual bell curve:

*Image coming soon*

Note that the constant $\pi$ was chosen so that the area under the bell curve is exactly $1$, i.e.,

$$\int_{-\infty}^{\infty} e^{-\pi t^2}\operatorname{d}t=1.$$

The Fourier transform of this function is difficult to compute directly:

$$(\mathcal{F}f)(s)=\int_{-\infty}^{\infty}e^{-\pi t^2}e^{-2\pi its}\operatorname{d}t$$

There is a trick to compute this transform, and I will add those details shortly. For now, I will simply note that it turns out this function equals its Fourier transform! In other words, $(\mathcal{F}(f))(s)=e^{-\pi s^2}$.

If you think of the Fourier transform as some kind of "operator" that transforms functions into other functions, then you can also start to think of this particular Gaussian function as something like an "eigenfunction" with eigenvalue $1$. 
## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform III - Properties\|Fourier transform III - Properties]]
