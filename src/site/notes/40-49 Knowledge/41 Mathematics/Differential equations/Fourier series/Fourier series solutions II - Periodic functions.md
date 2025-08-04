---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-series/fourier-series-solutions-ii-periodic-functions/","tags":["differential_equations"],"updated":"2025-08-04T08:29:27-07:00"}
---

We begin by recalling the definitions and basic properties of periodic functions.

> [!note] Definition of periodic function
> A function $f(x)$ is **periodic** if there is some number $T>0$ such that
> 
> $$f(x+T) = f(x).$$
> 
> This equality is meant as an equality of functions, i.e., it should hold for every real number $x$, or at least all $x$ such that both sides are actually defined.
> 
> We call $T$ a **period** of the function $f$. Any interval of length $T$ is called a **cycle** of $f$.


Observe that a periodic function is entirely determined by its values in any single cycle. Also note that for a periodic function $f$, the number $T$ is not unique. Quite to the contrary, every periodic function has an infinite number of periods. Indeed, if $f$ is periodic with period $T$, observe that we also have

$$
f(x+2T) = f((x+T)+T)=f(x+T)=f(x).
$$

In other words, if the values of $f$ repeat every $T$ units, then they also repeat every $2T$ units, and every $3T$ units, and so on. If there is a smallest positive period $T_0$ for $f$, then we call $T_0$ the **fundamental period** of $f$. In that case, every period of $f$ is a positive integer multiple of $T_0$. For the functions we'll be dealing with, every non-constant periodic function has a fundamental period.

> [!warning] Constant functions?
> We do count constant functions as periodic, but they are not given a fundamental period. Instead, we simply say they are periodic with every period $T>0$.

For reasons we will soon see, it can be useful to list all periods of a periodic function $f$, rather than simply the fundamental period.

## Examples
---
### Example

The function $f(x)=\sin(x)$ is periodic with periods $T=2\pi, 4\pi, 6\pi, \ldots$

![sin(x).png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/sin(x).png)

### Example

The function $f(x)=\cos(\pi x)$ is periodic with periods $T=2, 4, 6, \ldots$

![cos(pi_x).png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/cos(pi_x).png)

> [!note]
> Observe that if $f(x)$ is periodic with period $T$, then for each $a\neq 0$ the function $f(ax)$ is periodic with period $\frac{T}{|a|}$. Scaling the input by $a$ compresses the graph horizontally by a factor of $|a|$. (If $a<0$, it also reflects the graph across the $y$-axis.)

### Example

We can also talk about periodicity for functions of several variables. We say a function $f(x_1, x_2,\ldots, x_n)$ is **periodic in $x_i$ with period $T$** if

$$
f(x_1,x_2,...,x_i+T,...,x_n) = f(x_1,x_2,...,x_i,...,x_n).
$$

In other words, if we keep the other variables fixed, then $f$ is a periodic function of the variable $x_i$. A function may be periodic in several of its variables, with different periods for different variables.

Consider the function $f(x,y)=\sin\left(2x+\frac{1}{2}y\right)$. This function is periodic in $x$ with fundamental period $\pi$, and also periodic in $y$ with fundamental period $4\pi$. It can be hard to see in the graph below, but try focusing on the grid lines. One set of lines is parallel to the $x$-axis, and the other to the $y$-axis. As you trace one of those lines, you're keeping one variable fixed while the other varies. Notice how the line rises and falls periodically, and how for one set of those lines the waves repeat more frequently than the other.

![periodicMultivar.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/periodicMultivar.png)

### Example

Consider a circular wire with radius 1. For each real number $x$, consider the point on the wire at polar angle $\theta = 2\pi x$. Let $f(x,t)$ denote the temperature of that point on the wire at time $t$. If we increase the value of $x$ by 1 then we'll move to the point at polar angle $\theta' = 2\pi(x+1) = 2\pi x+2\pi = \theta+2\pi$, which is the same point on the circle. Thus, $f(x+1,t)=f(x,t)$, and so $f$ is periodic in $x$ with fundamental period 1.

### Example

Suppose we fix a point on the earth and let $f(x,t)$ denote the temperature $x$ feet below the ground at time $t$. For each fixed value of $x$, as $t$ varies the function $f(x,t)$ keeps track of the temperature at that fixed point in the ground. If we assume temperature today is approximately the same as it was a year ago from today, then $f$ is periodic in $t$ with period 1 year.

### Example

Imagine a sine wave traveling along the $x$-axis. If $f(x,t)$ denotes the vertical position of the point on the string at horizontal position $x$ and at time $t$, then $f$ is periodic in both $x$ and $t$. Fixing $t$ is like freezing the wave in time. As we scan across it (varying $x$), we see the heights (values of $f(x,t)$) repeating periodically in $x$.. On the other hand, fixing $x$ is like focusing on a single horizontal position. As we let time pass (vary $t$), we see that point move up and down, i.e., $f(x,t)$ again varies periodically in $t$.


## Combining periodic functions
---

We are going to try to approximate periodic functions with linear combinations of some "basic" periodic functions. That raises a question, however. Is a linear combination of periodic functions still periodic? If so, how does the fundamental period of the combination relate to the fundamental period of the individual functions?

The answer to the first question might surprise you: a linear combination of periodic functions is not necessarily periodic.

### Example

Consider the function $f(x)=\sin(x)+\sin(\pi x)$. Its graph is shown below. Observe that while the graph does have a "wavy" nature to it, it never actually repeats. The component functions  and  are forever out of sync. The first repeats after $2\pi$ units, $4\pi$ units, $6\pi$ units, etc., while the second repeats after 2 units, 4 units, 6 units, etc. The two functions never repeat at the same moment.

![sin(x)-sin(pi_x).png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/sin(x)-sin(pi_x).png)

Observe that when periods of the two component functions are very close, such as $T=2\pi$ (for the function $g(x)=\sin(x)$) and $T=6$ (for the function $h(x)=\sin(\pi x)$), we see that the graph of $f$ very nearly repeats. That's because the two functions are almost in sync at the point.

### Example

Consider the function $f(x)=\sin(2x)-\cos(3x)$ is periodic with periods $T=2\pi, 4\pi, 6\pi, \ldots$. Note that the functions $\sin(2x)$ and $\cos(3x)$ have fundamental periods $\pi$ and $\frac{2\pi}{3}$, respectively.

![sin(2x)-cos(3x).png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/sin(2x)-cos(3x).png)

---

After considering a few examples, you should be able to convince yourself of the following: a linear combination of periodic functions is periodic exactly when those functions share a common period. In that case, the fundamental period of the combination is the least common integer multiple of the fundamental periods of the component functions.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier series/Fourier series solutions III - Series representations of periodic functions\|Fourier series solutions III - Series representations of periodic functions]]]
