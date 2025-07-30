---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/frobenius-series-solutions/frobenius-series-solutions-i-slightly-generalizing-power-series/","tags":["differential_equations"],"updated":"2025-07-30T15:30:23-07:00"}
---

## Motivating examples
---

### Example

Let's begin by looking for solutions to the differential equation

$$x^2 y''+xy'-2y=0.$$

In standard form this differential equation is

$$y''+\frac{1}{x}y'-\frac{2}{x^2}y=0,$$

so $x_0=0$ is a singular point of our differential equation. By our earlier result, this means we are *not* guaranteed that the general solution is analytic at $x_0=0$, i.e., it is not guaranteed that the general solution can be represented by a power series centered at $x_0$. We could try looking for a power series solution anyway, but let's instead go back to one of our earlier ideas, namely to look for solutions of the form $y=x^r$ where $r$ is some number. If we substitute $y=x^r$ into the original differential equation above, we find

$$
\begin{align*}
x^2 y''+xy'-2y &= x^2\cdot r(r-1)x^{r-2}+x\cdot rx^{r-1}-2x^r\\
&= (r(r-1)+r-2)x^r\\
&= (r^2-2)x^r.
\end{align*}
$$

It follows that $y=x^r$ is a solution exactly when $r^2-2=0$, i.e., when $r=\pm \sqrt{2}$. We have therefore discovered two solutions to our differential equation, namely $y_1(x)=x^{\sqrt{2}}$ and $y_2(x)=x^{-\sqrt{2}}$. It's a fact that these two functions are linearly independent, so we can now conclude that the general solution to our differential equation is

$$y=a_1 x^{\sqrt{2}}+a_2 x^{-\sqrt{2}}.$$

### Example

Now consider the differential equation

$$x^2y''+xe^{2x}y'-2\cos(x)y=0$$

As with the previous differential equation, we can quickly verify that $x_0=0$ is a singular point of this differential equation. If we repeat our idea exactly from the previous example, and plug in $y=x^r$, we find that

$$
\begin{align*}
x^2y''+xe^{2x}y'-2\cos(x)y &= x^2\cdot r(r-1)x^{r-2}+xe^{2x}\cdot rx^{r-1}-2\cos(x)x^r\\
&= r(r-1)x^r+re^{2x}x^r-2\cos(x)x^r.
\end{align*}
$$

If we assume for the moment that $\{x^r, e^{2x}x^r, 2\cos(x)x^r\}$ is a linearly independent set, then there is no value of $r$ which makes the above combination identically vanish. In other words, there is no solution of the form $y=x^r$.

However, recall that when $x$ is a very small number (say very close to $0$, which is where we're focusing our attention in all of these problems), we have $e^{2x}\approx 1$ and $\cos(x)\approx 1$. This means that, at least for small values of $x$, our differential equation is "very close" to the differential equation

$$x^2 y''+xy'-2y=0,$$

which is exactly the differential equation from our first example. It stands to reason, then, that our differential equation should have solutions $y_1(x)\approx x^{\sqrt{2}}$ and $y_2(x)\approx x^{-\sqrt{2}}$. How do we find such solutions? Perhaps we could try looking for solutions that are a hybrid of functions of the form $y=x^r$ and power series, say functions of the form

$$y=x^r \sum_{n=0}^{\infty} a_n x^r.$$

Such a series is called a *Frobenius series*.

## Frobenius series
---

> [!note] Definition of a Frobenius series
> A **Frobenius series centered at $x_0$** is a series of the form
> 
> $$S(x) = (x-x_0)^r \sum_{n=0}^{\infty} a_n (x-x_0)^n,$$
> 
> where $r$ and all $a_n$ are real numbers.

It is standard practice to assume $a_0\neq 0$ in a Frobenius series, otherwise a given series can be written in multiple different ways as Frobenius series with different $r$ values. For example, consider the series

$$
\begin{align*}
S(x) &= x^{3/2}-2x^{5/2}+3x^{7/2}-4x^{9/2}+\cdots\\
&= x^{3/2}\left(1-2x+3x^2-4x^3+\cdots\right)\\
&= x^{1/2}(x-2x^2+3x^3-4x^4+\cdots)\\
&= x^{-1/2}(x^2-2x^3+3x^4-4x^5+\cdots)\\
&\vdots
\end{align*}
$$

There are infinitely many ways to write $S(x)$ in the form $S(x)=x^r P(x)$ with $P(x)$ a conventional power series, but out of all of those options, there is exactly one way to do so in which the constant term of the power series $P(x)$ is nonzero. As you can see above, for our particular Frobenius series that is when we write

$$S(x) = x^{3/2}(1-2x+3x^2-4x^3+\cdots)$$

## A detailed first example
---

Let's try looking for Frobenius series solutions to the differential equation

$$x^2 y''+x(3+x)y'+(1+3x)y = 0.$$

To that end, we suppose

$$y = x^r\sum_{n=0}^{\infty} a_n x^n$$

with $a_0\neq 0$. Before computing derivatives, let's first note that we can rewrite $y$ as

$$y = \sum_{n=0}^{\infty} a_n x^{n+r}.$$

Writing $y$ in this form will let us avoid the Product Rule when computing $y'$ and $y''$. So we now compute

$$y' = \sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1}$$

and

$$y'' = \sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^{n+r-2}.$$

> [!note] A note on the initial value of the index
> Notice that the sums for both $y'$ and $y''$ start at $n=0$, unlike what happened in the case when $y$ was a power series. In this case, since we don't know what $r$ is, there is no reason to think that the $n=0$ term in the original Frobenius series is actually a constant, and so we don't know that it will vanish when we take the first derivative.

Plugging this into the left-hand side of our differential equation, we find

$$
\begin{align*}
x^2 y''+x(3+x)y'+(1+3x)y &= x^2 \sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^{n+r-2}\\
&\quad + x(3+x)\sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1}\\
&\quad +(1+3x)\sum_{n=0}^{\infty} a_nx^{n+r}.
\end{align*}
$$

Distributing as usual, the right-hand side becomes the following sum of five series:

$$
\sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^{n+r}+\sum_{n=0}^{\infty} 3(n+r)a_n x^{n+r}+\sum_{n=0}^{\infty} (n+r)a_n x^{n+r+1}+\sum_{n=0}^{\infty} a_nx^{n+r}+\sum_{n=0}^{\infty} 3a_nx^{n+r+1}
$$

With power series, we would now reindex each of these sums so that the new index matches the exponent of $x$, and then combine the sums. In this instance, though, let's first factor $x^r$ out of all of the sums, so that the above expression becomes

$$x^r\left(\sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^n+\sum_{n=0}^{\infty} 3(n+r)a_n x^n+\sum_{n=0}^{\infty} (n+r)a_n x^{n+1}+\sum_{n=0}^{\infty} a_nx^n+\sum_{n=0}^{\infty} 3a_nx^{n+1}\right)$$

While not strictly necessary, I like making this small adjustment, since it turns the expression into $x^r$ times a (combination of) power series. We can now work with the power series exactly as we previously did, reindexing and combining. We first reindex the five series, obtaining

$$x^r\left(\sum_{m=0}^{\infty} (m+r)(m+r-1)a_m x^m+\sum_{m=0}^{\infty} 3(m+r)a_m x^m+\sum_{m=1}^{\infty} (m-1+r)a_{m-1} x^m+\sum_{m=0}^{\infty} a_mx^m+\sum_{m=1}^{\infty} 3a_{m-1}x^m\right)$$

We combine the $m=0$ terms from the first, second and fourth sums, and then merge all five sums from $m\geq 1$. This yields

$$x^r\left(\underbrace{(r(r-1)a_0+3ra_0+a_0)}_{m=0}+\sum_{m=1}^{\infty} \left((m+r)(m+r-1)a_m+3(m+r)a_m+(m-1+r)a_{m-1}+a_m+3a_{m-1}\right)x^m\right)$$

We can slightly simplify this monster expression by combing like coefficients, which eventually yields

$$x^r\left(\underbrace{(r^2+2r+1)a_0}_{m=0}+\sum_{m=1}^{\infty}\left(((m+r)(m+r-1)+3(m+r)+1)a_m+(m+r+2)a_{m-1}\right)x^m\right)$$

At this point we can finally conclude that our Frobenius series is a solution to our differential equation exactly when

$$(r^2+2r+1)a_0=0$$

and for every $m\geq 1$ we have

$$((m+r)(m+r-1)+3(m+r)+1)a_m+(m+r+2)a_{m-1}=0.$$


Since we assumed $a_0\neq 0$, the first equation above implies $r=-1$. We can now put that into the second equation, which then massively simplifies to

$$m^2a_m+(m+1)a_{m-1}=0.$$

We can now solve this recursion relation in our normal way, one value at a time. We find

$$
\begin{align*}
a_1 &= -\frac{2}{1^2}a_0 = -2a_0\\
a_2 &= -\frac{3}{2^2}a_1 = -\frac{3}{4}a_1 = \frac{3}{2}a_0\\
a_3 &= -\frac{4}{3^2}a_2 = -\frac{4}{9}a_2 = -\frac{2}{3}a_0\\
&\vdots
\end{align*}
$$

> [!note] You might see a pattern
> In this particular case you might notice that the general formula is given $a_m = (-1)^n \frac{m+1}{m!}a_0$ for $m\geq 1$, but we're usually not so lucky.

In any case, we've discovered that there *are* Frobenius series solutions to our original differential equation, and they are all of the form

$$
\begin{align*}
y(x) &= x^{-1}\left(a_0-2a_0x+\frac{3}{2}a_0x^2-\frac{2}{3}a_0x^3+\cdots\right)\\
&= a_0 x^{-1}\left(1-2x+\frac{3}{2}x^2-\frac{2}{3}x^3+\cdots\right)
\end{align*}
$$

In other words, they are all nonzero multiples of the particular solution

$$y_1(x) = x^{-1}\left(1-2x+\frac{3}{2}x^2-\frac{2}{3}x^3+\cdots\right).$$

## Some lingering questions
---

As with our power series method, there are many questions one might certainly ask at this point, such as:

### When are we guaranteed success?

Although this method is functionally identical to our power series method, the computations can be even *more* tedious, as the above example illustrates. It would be much appreciated if there was some way to know from the outset that this method was guaranteed to successfully produce at least one solution (or maybe even all solutions!).

### What can possibly go wrong?

With the power series method, the only thing that could "go wrong" with our method, at least when looking for solutions to a homogeneous linear differential equation, was that the only power series solution was the trivial solution, i.e., we discovered that $a_n=0$ for all $n$. That same phenomenon cannot happen here, since by assumption our Frobenius series is assumed to have $a_0\neq 0$. So what happens when a differential equation doesn't have any Frobenius series solutions?

### What happens if we only find one Frobenius series solution?

 In the example above, we found that there was only a single Frobenius series solution (up to scaling). By the general theory of second-order, linear, homogeneous differential equations there must be a second, linearly independent solution. What is it? It's not a Frobenius series and, since power series are special cases of Frobenius series, it's also not a power series. What is that mysterious second solution, and how can we find it?

We'll provide answers to all of these questions is the next few notes.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Frobenius Series Solutions/Frobenius Series Solutions II - Some illustrative examples\|Frobenius Series Solutions II - Some illustrative examples]]