---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-series/fourier-series-solutions-vii-solving-differential-equations-with-fourier-series/","tags":["differential_equations"],"updated":"2025-08-13T09:25:44-07:00"}
---

Let's see how we can sometimes use Fourier series to help us solve differential equations, including some partial differential equations. We will give two real-world examples, both involving a concept known as *heat flow*. In both cases, we will be dealing with two-variable functions, where our two variables are position $x$ and time $t$. In the first example, our function will be periodic in position, while in the second example it will be periodic in time.

## Heat flow
---

Let's first give a quick-and-dirty derivation of the so-called "heat equation". If you're already familiar with the heat equation, you can skip to the first example.

If you're still here, then suppose something one-dimensional is heating up and $u(x,t)$ denotes the temperature at position  and time  (all in your favorite chosen units). Also let $q(x,t)$ denote the *rate* at which *energy* flows at position  and time , where the rate is positive if the energy flows in the positive -direction.

We make two basic assumptions about the functions $u(x,t)$ and $q(x,t)$:

### Assumption 1: Newton's Law of Heating

At each fixed position $x$, we assume the rate of energy flow with respect to time $t$ is proportional to the negative gradient (with respect to $x$) of temperature. In other words, if the temperature increases greatly as we move in the positive $x$-direction, then we are assuming that the energy should flow proportionally in the direction from hot-to-cold. In terms of an equation, we are assuming

$$q(x,t)=-k u_x(x,t)$$

for some positive constant $k$. Physically, the constant $k$ can be thought of as a measure of how easily energy flows across the substance when there is a temperature difference. Because of this (and unfortunate history), the reciprocal $\frac{1}{k}$ is sometimes called the *thermal resistance* of the substance.

### Assumption 2: Energy accumulation

Suppose we look at a small chunk of the substance, of width $\Delta x$ from location $x$ to location $x+\Delta x$. Let's consider the rate at which energy increases in this little piece. On the one hand, energy enters this region on the left at a rate $q(x,t)$ and exists the piece on the right at rate $q(x+\Delta x,t)$. So, the rate of change of energy in this little piece should be approximately

$$q(x,t)-q(x+\Delta x,t).$$

On the other hand, we will also assume that the rate at which energy in this little piece increases is proportional to the length of the piece and the rate at which the temperature is increasing in the piece.In other words, we will assume 

$$q(x,t)-q(x+\Delta x,t) \approx l\cdot u_t(x,t)\cdot \Delta x$$

for some positive constant $l>0$. This constant $l$ is sometimes called the *thermal capacity* of the substance.

We can rewrite the above equation as

$$u_t(x,t) \approx -\frac{q(x+\Delta x,t)-q(x,t)}{l\cdot \Delta x}\approx -\frac{1}{l}q_x(x,t).$$

Our second assumption is therefore that

$$u_t(x,t)=-\frac{1}{l}q_x(x,t).$$

### Combining these two assumptions

Using the above assumptions, we are suppose $u(x,t)$ and $q(x,t)$ are related by the two partial differential equations

$$\begin{align*}
q(x,t)&=-k u_x(x,t)\\
u_t(x,t) &= -\frac{1}{l}q_x(x,t).
\end{align*}$$

We can combine these two differential equations to deduce a single differential equation that $u(x,t)$ must satisfy, as follows. Take partial derivatives with respect to $x$ in the first equation to obtain

$$q_x(x,t)=-ku_{xx}(x,t).$$

Now substitute this into the second differential equation to obtain

$$u_t(x,t)=\frac{k}{l}u_{xx}(x,t).$$

We call this equation the **Heat Equation**, since it gives a model for how heat behaves in a one-dimensional substance.

## Example: Hot wire
---

Suppose we heat a thin circular wire. Let's center a polar coordinate system on this wire and let $x$ denote the position on the wire at polar angle $\theta = 2\pi x$. Then let $u(x,t)$ denote the temperature of the wire at position $x$ and time $t$.

By our choice of coordinate $x$, the function $u(x,t)$ is periodic in $x$ with period $1$. We now make two assumptions:

1. The function $u(x,t)$ satisfies the heat equation $u_t = u_{xx}$.
2. For each fixed value of $t$, the function $u(x,t)$ can be represented by a Fourier series in $x$, i.e., for each value of $t$ there are complex numbers $c_n(t)$ such that
   
   $$\displaystyle u(x,t)=\sum_{n=-\infty}^{\infty} c_n(t) e^{2\pi inx}.$$

> [!note] Pay close attention to the variables
> Imagine $u(x,t)$ is a family of functions of $x$, one function at each time $t$. Each of those functions is periodic in $x$, so we represent it as a linear combination of our favorite periodic functions in $x$, namely $e^{2\pi inx}$. The coefficients of those linear combinations presumably depend on $t$, however, which is why they're denoted $c_n(t)$.

Before moving on, let's note that for each fixed value of $t$, the coefficient $c_n(t)$ of $e^{2\pi inx}$ is the Fourier coefficient of the function $u(x,t)$ at index $n$. In particular, the $n^{\text{th}}$ Fourier coefficient of $u(x,0)$ is the coefficient $c_n(0)$, and hence satisfies

$$c_n(0)=\int_0^1 u(x,0)e^{-2\pi inx}\operatorname{d}x.$$

This will come up again at the very end of this example.

### Solving this partial differential equation

Let's now use the method we employed with power series (and Frobenius series), i.e., substitute our candidate series into the differential equation. In this case, let's first compute

$$u_t = \frac{\partial}{\partial t}\left(\sum_{n=-\infty}^{\infty} c_n(t) e^{2\pi inx}\right)=\sum_{n=-\infty}^{\infty}\frac{\partial}{\partial t}\left(c_n(t)e^{2\pi inx}\right)=\sum_{n=-\infty}^{\infty} c_n'(t)e^{2\pi inx}.$$

(We interchanged the infinite sum and the partial differentiation, which probably deserves justification.)

On the other hand, we can also similarly compute

$$u_x = \frac{\partial}{\partial x}\left(\sum_{n=-\infty}^{\infty} c_n(t) e^{2\pi inx}\right)=\sum_{n=-\infty}^{\infty}\frac{\partial}{\partial x}\left(c_n(t)e^{2\pi inx}\right)=\sum_{n=-\infty}^{\infty} c_n(t)\cdot 2\pi in \cdot e^{2\pi nx}$$

and then

$$\begin{align*}
u_{xx} &= \frac{\partial}{\partial x}\left(\sum_{n=-\infty}^{\infty} c_n(t)\cdot 2\pi in e^{2\pi inx}\right)\\
&=\sum_{n=-\infty}^{\infty}\frac{\partial}{\partial x}\left(c_n(t)\cdot 2\pi ine^{2\pi inx}\right)\\
&=\sum_{-\infty}^{\infty} c_n(t)\cdot 4\pi^2 i^2n^2e^{2\pi inx}\\
&= \sum_{n=-\infty}^{\infty} -4\pi^2n^2\,c_n(t)e^{2\pi inx}.
\end{align*}$$

It follows that our Fourier series is a solution to our differential equation exactly when

$$\sum_{n=-\infty}^{\infty} c_n'(t)e^{2\pi inx}=\sum_{n=-\infty}^{\infty} -4\pi^2n^2\,c_n(t)e^{2\pi inx}.$$

Notice that, from the point of view of the variable $x$, both sides of this equation are linear combinations of the functions $e^{2\pi inx}$ for $n\in {\bf Z}$. Since the set of functions $\{e^{2\pi inx}\mid n\in {\bf Z}\}$ is a linearly independent set, the only way two linear combinations can be equal is if the coefficient of $e^{2\pi in x}$ is the same on each side, for every $n$. In other words, we must have

$$c_n'(t) = -4\pi^2 n^2c_n(t)$$

for every integer $n$.

> [!note] A different kind of relation
> When we looked for power series (or Frobenius series) solutions, we always found the coefficients of the mystery series needed to satisfy a *recursion relation*. Here, however, we see that something different has happened: the coefficients of our mystery Fourier series need to satisfy *another differential equation*!

You might think we've wasted our time, exchanging the problem of solving one differential equation for satisfying an entire family of new differential equations. Notice, however, that these new differential equations are ordinary, first-order, homogeneous, linear differential equations. If we fix $n$ for the moment, we can rewrite our new differential equation as

$$c_n'(t)=A_n\,c_n(t),$$

where $A_n=-4\pi^2 n^2$ is a constant. The general solution to this differential equation is

$$c_n(t) = B_ne^{A_nt},$$

where $B_n$ is any constant. In fact, if we evaluation at $t=0$ we see that $B_n = c_n(0)$, so we can write our solution as

$$c_n(t) = c_n(0)e^{-4\pi^2n^2t}.$$

We've done it! Under the assumptions we've made for this problem, we've proven that the general solution is

$$u(x,t) = \sum_{n=-\infty}^{\infty} c_n(0)e^{-4\pi^2 n^2t}e^{2\pi inx}.$$

### Additional observations that foreshadow some cool things

It is common to describe the solution to a differential equation using two pieces of information:
1. A description of the *initial state* of the system.
2. A description of how the system evolves over time, i.e., of the *dynamics* of the system.

In our case, the first piece of information is the function $u(x,0)$, which gives the initial temperature at each point $x$ on the wire. Let's denote this function $f(x)$. This function is periodic with period $1$ and its Fourier coefficients satisfy

$$\begin{align*}
\hat{f}(n)&= \int_0^1 f(x)e^{-2\pi inx}\operatorname{d}x\\
&= \int_0^1 u(x,0)e^{-2\pi inx}\operatorname{d}x\\
&= c_n(0).
\end{align*}$$
We can now rewrite our final solution, above, as

$$u(x,t)=\sum_{n=-\infty}^{\infty} \hat{f}(n) e^{-4\pi^2n^2t}e^{2\pi inx}.$$

So now the initial state of the system can be seen as contributing to the solution. But we can do even better. Let's replace $\hat{f}(n)$ in the above sum with its integral value and then move around some terms:

$$\begin{align*}
u(x,t) &= \sum_{n=-\infty}^{\infty} \hat{f}(n) e^{-4\pi^2n^2t}e^{2\pi inx}\\
&= \sum_{n=-\infty}^{\infty} \left(\int_0^1 f(y)e^{-2\pi iny}\operatorname{d}y\right)e^{-4\pi^2n^2t}e^{2\pi inx}\\
&= \sum_{n=-\infty}^{\infty} \left(\int_0^1 f(y)e^{-4\pi^2n^2t}e^{2\pi in(x-y)}\right)\\
&= \int_0^1 f(y)\left(\sum_{n=-\infty}^{\infty} e^{-4\pi^2n^2t}e^{2\pi in(x-y)}\right)\operatorname{d}y\\
&= \int_0^1 f(y)g(x-y,t)\operatorname{d}y,
\end{align*}$$

where $g(z,t)=\sum_{n=-\infty}^{\infty} e^{-4\pi^2n^2t}e^{2\pi inz}$.

Why did we do all of this? It turns out that our energy system (of a hot wire) is governed by:
1. The initial temperature information, which is function $f(x)$ that is periodic (with period $1$). This is sometimes called the initial *impulse*.
2. A function $g(x,t)$ that determines how the energy moves through the system. This is sometimes called the *impulse response* or *convolving function*.
3. The integral above, which combines the functions $f(x)$ and $g(x,t)$, is called the *convolution* of the two functions. We will see that it can be seen as a "smoothed average" of the nearby temperatures, using the convolving function as a weighting function.

For now this all might seem a bit much, but as our theory develops it will prove remarkable prescient!

## Example: Hot Earth
---

In this example, let us now imagine we've chosen a fixed position on the surface of the earth, and we let $u(x,t)$ denote the temperature $x$ meters below the surface at time $t$ (in years). This time, let us assume:
1. The function  satisfies the heat equation $u_t=\frac{1}{2}u_{xx}$. There is nothing special about the value of $\frac{1}{2}$, other than to provide slight contrast with the previous example (and possibly make some numbers later on slightly nicer looking).
2. The function $u(x,t)$ is periodic in $t$ with period $1$. In other words, at any fixed position $x$, the temperature should repeat annually. While that's not totally realistic, it's not an entirely terrible assumption. In places like Michigan, for instance, it tends to be cold every December and hot every July. Because of this assumption, we will assume we can represent $u(x,t)$ by a Fourier series in $t$, i.e., as
   
   $$\displaystyle u(x,t)=\sum_{n=-\infty}^{\infty} c_n(x) e^{2\pi int}.$$

> [!note] Compare with the previous example
> Note that in this example our function $u(x,t)$ is assumed to be periodic in time $t$, not in position $x$. That means our Fourier series should be a combination of our basic periodic functions in $t$, namely $e^{2\pi int}$, where the coefficients depend on the position variable $x$.

We now substitute this proposed Fourier series into our heat equation, this time finding that

$$\sum_{n=-\infty}^{\infty} 2\pi in\cdot c_n(x)e^{2\pi int}=\sum_{n=-\infty}^{\infty}\frac{1}{2}c_n''(x)e^{2\pi int}.$$

Once again, by the linear independence of the functions $\{e^{2\pi int}\}_n$, the above equality implies that for all $n$ we just have

$$2\pi in\cdot c_n(x)=\frac{1}{2}c_n''(x),$$

or equivalently,

$$c_n''(x)=4\pi in\cdot c_n(x).$$

### Solving this new differential equation

This new differential equation^[Really a family of differential equations, one for each integer $n$.] is a second-order, linear, homogeneous differential equation. We can solve it using our methods from Linear Analysis I, although there's a good chance you never worked through an example with complex coefficients like this. Fortunately, the process is the same, so long as you're familiar with how to find roots of complex numbers.

In operator notation, we can write our new differential equation as

$$(D^2-4\pi in)c_n=0,$$

where $D$ is the differential operator $\frac{\operatorname{d}}{\operatorname{d}x}$. We now need to find the roots of the so-called *auxiliary polynomial*, namely $p(z)=z^2-4\pi in$. In other words, we need to find all complex numbers $z$ such that $z^2 = 4\pi in$. Fortunately, there is a straightforward process to do this, using exponential notation.

Suppose $z$ is one of the roots, so that $z^2=4\pi in$. Let's rewrite both sides in polar-exponential form.  On the left-hand side we'll simply write $z=re^{i\theta}$. On the right-hand side we have two cases to consider. When $n\geq 0$, the number $4\pi in$ is purely imaginary with nonnegative imaginary part, i.e., lies on the positive imaginary axis. Its polar angle is therefore $\frac{\pi}{2}$ and its polar length is $4\pi n$, so in polar-exponential form this number is $4\pi n\cdot e^{i\cdot \frac{\pi}{2}}$. The equality $z^2=4\pi in$ then becomes

$$r^2e^{i\cdot 2\theta}=4\pi n\cdot e^{i\cdot\frac{\pi}{2}}.$$

In polar-exponential form, two complex number are the same exactly when they have the same polar distance and the same angle, up to integer multiples of $2\pi$. So, the above equation implies that $r^2=4\pi n$ and $2\theta = \frac{\pi}{2}+2\pi k$ for $k\in {\bf Z}$. It follows that $r=2\sqrt{\pi n}$ and $\theta = \frac{\pi}{4}+\pi k$ for $k\in {\bf Z}$. This leads to the two distinct complex numbers $z_1= 2\sqrt{\pi n}\cdot e^{i\cdot \frac{\pi}{4}}$ and $z_2 = 2\sqrt{\pi n}\cdot e^{i\cdot \frac{5\pi}{4}}$.

We now repeat the previous computation in the case $n<0$. In that case, the number $4\pi in$ is purely imaginary with negative imaginary part, i.e., lies on the negative imaginary axis. Its polar angle is therefore $-\frac{\pi}{2}$ and its polar length is $4\pi|n|$, so in polar-exponential form this number is $4\pi |n|e^{-i\cdot\frac{\pi}{2}}$. The equality $z^2=4\pi in$ then becomes

$$r^2 e^{i\cdot 2\theta} = 4\pi |n|e^{-i\cdot\frac{\pi}{2}}.$$

It follows that $r=2\sqrt{\pi |n|}$ and $\theta = -\frac{\pi}{4}+\pi k$ for $k\in {\bf Z}$. This leads to the two distinct complex numbers $z_3 = 2\sqrt{\pi|n|}\cdot e^{-i\cdot\frac{\pi}{4}}$ and $z_4 =2\sqrt{\pi|n|}\cdot e^{-i\cdot\frac{5\pi}{4}}$. (We've written the angles in this way so that it's clear $z_1$ and $z_3$ are complex conjugates, as are $z_2$ and $z_4$).

Before returning to our Fourier series, in this case it helps to rewrite the above complex numbers in their real and imaginary parts. Using Euler's identity, we have

$$
z_1 = 2\sqrt{\pi n}\cdot e^{i\cdot\frac{\pi}{4}} = 2\sqrt{\pi n}\cdot (\cos(\pi/4)+i\sin(\pi/4)) = 2\sqrt{\pi n}\cdot\left(\frac{\sqrt{2}}{2}+i\cdot\frac{\sqrt{2}}{2}\right)=\sqrt{2\pi n}(1+i)
$$

Similarly, we find that

$$\begin{align*}
z_2 &= -\sqrt{2\pi n}(1+i)\\
z_3 &= \sqrt{2\pi |n|}(1-i)\\
z_4 &= -\sqrt{2\pi |n|}(1-i).
\end{align*}$$

Now that we finally have these roots, we can conclude that the general solution to the second-order differential equation 

$$(D^2-4\pi in)c_n=0$$

is

$$c_n(x) =
\begin{cases}
A_n e^{\sqrt{2\pi n}(1+i)x}+B_n e^{-\sqrt{2\pi n}(1+i)x} &\text{ when }n\geq 0\\
A_n e^{\sqrt{2\pi |n|}(1-i)x}+B_n e^{-\sqrt{2\pi |n|}(1-i)x} &\text{ when }n<0
\end{cases}
$$

> [!warning] Time to cheat
> It turns out that, in our particular problem, our Fourier coefficients must have $A_n=0$ for all $n$. We will take that as a fact for now, but I encourage you to investigate what happens to our final solution (below) if we do not make that assumption.


Using the above cheat, we can now conclude that

$$c_n(x) =
\begin{cases}
B_n e^{-\sqrt{2\pi n}(1+i)x} &\text{ when }n\geq 0\\
B_n e^{-\sqrt{2\pi |n|}(1-i)x} &\text{ when }n<0
\end{cases}
$$

As usual, if we set $x=0$ in the above expression then we obtain $c_n(0)=B_n$, so we can rewrite the above as

$$c_n(x) =
\begin{cases}
c_n(0) e^{-\sqrt{2\pi n}(1+i)x} &\text{ when }n\geq 0\\
c_n(0) e^{-\sqrt{2\pi |n|}(1-i)x} &\text{ when }n<0
\end{cases}
$$

Even better, if we let $f(t)=u(0,t)$ (the temperature at the surface, which we can think of as the *initial data* for this system), then just as in the previous example we can verify that $\hat{f}(n)=c_n(0)$, and so we can rewrite the previous expression as

$$c_n(x) =
\begin{cases}
\hat{f}(n) e^{-\sqrt{2\pi n}(1+i)x} &\text{ when }n\geq 0\\
\hat{f}(n) e^{-\sqrt{2\pi |n|}(1-i)x} &\text{ when }n<0
\end{cases}
$$

The solution to our "Hot Earth" problem is therefore

$$u(x,t)=\sum_{n=-\infty}^{-1} \hat{f}(n)e^{-\sqrt{2\pi |n|}(1-i)x}e^{2\pi int}+\sum_{n=0}^{\infty}\hat{f}(n) e^{-\sqrt{2\pi n}(1+i)x}e^{2\pi int}$$

### Analyzing a special case

The above formula looks pretty complicated, so let's consider a special case in which a bunch of the terms greatly simplify. Suppose the temperature at the surface were given by $f(t)=\sin(2\pi t)$. Converting this function directly into complex exponential functions, we find that

$$f(t) = \frac{i}{2}e^{-2\pi it}-\frac{i}{2}e^{2\pi it}.$$

It follows that $\hat{f}(-1)=\frac{i}{2}$, $\hat{f}(1)=-\frac{i}{2}$ and $\hat{f}(n)=0$ for all other $n$. Our giant summation above then reduces to simply

$$u(x,t)=\frac{i}{2}e^{-\sqrt{2\pi}(1-i)x}e^{-2\pi it}-\frac{i}{2}e^{-\sqrt{2\pi}(1+i)x}e^{2\pi it}$$

We can simplify this expression and convert it into a function involving only real numbers, as follows:

$$\begin{align*}
u(x,t) &= \frac{i}{2}e^{-\sqrt{2\pi}(1-i)x}e^{-2\pi it}-\frac{i}{2}e^{-\sqrt{2\pi}(1+i)x}e^{2\pi it}\\
&= \frac{i}{2}e^{-\sqrt{2\pi}\cdot x}\left(e^{i(\sqrt{2\pi}\cdot x-2\pi t)}-e^{-i(\sqrt{2\pi}\cdot x-2\pi t)}\right)\\
&= \frac{i}{2}e^{-\sqrt{2\pi}\cdot x}\left(2i\sin(\sqrt{2\pi}\cdot x-2\pi t)\right)\\
&= -e^{-\sqrt{2\pi}\cdot x}\sin(\sqrt{2\pi}\cdot x-2\pi t)\\
&= e^{-\sqrt{2\pi}\cdot x}\sin(2\pi t-\sqrt{2\pi}\cdot x).
\end{align*}$$

A physicist might call this a *damped* and *phase-shifted* sine function. The term $e^{-\sqrt{2\pi}\cdot x}$ is the damping term, while the $-\sqrt{2\pi}\cdot x$ inside the sine function causes the phase shift.

To make things even nice, suppose we fixed our attention at position $x=\sqrt{\pi/2}\approx 1.25$ meters, i.e., about $4$ feet below the ground. In this case, the above expression simplifies even further to

$$u(\sqrt{\pi/2},t)=e^{-\pi}\sin(2\pi t-\pi).$$

Comparing the graph of this function with the graph of the surface temperature, we see the following:

![cellarGraph.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/cellarGraph.png)


In other words, the temperature four feet down:
1. Doesn't vary much.
2. Is cool when the surface is warm and warm when the surface is cool.

This sounds a lot like how a cellar works, and it's the reason cellars are so useful!

### A last observation

Before leaving this example, let's end by noting that the same trick used in the previous example can let us rewrite the general solution $u(x,t)$ in the form

$$u(x,t)=\int_0^1 f(s)g(x,t-s)\operatorname{d}s,$$

where $f(t)$ is our surface temperature (the initial *impulse* in our system) and where

$$g(x,y)=\sum_{n=-\infty}^{-1} e^{-\sqrt{2\pi |n|}(1-i)x}e^{2\pi iny}+\sum_{n=0}^{\infty}e^{-\sqrt{2\pi n}(1+i)x}e^{2\pi iny}$$

is the *impulse response* (aka *Green's function*, *fundamental solution*, *convolving function*, ...).

There's definitely something going on here, and we'll see exactly what that is when we get familiar with the Fourier transform.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform I - Pushing Fourier series to the limit\|Fourier transform I - Pushing Fourier series to the limit]]
