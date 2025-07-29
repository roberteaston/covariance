---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/power-series-solutions/power-series-solutions-iii-a-more-representative-example/","tags":["differential_equations"],"updated":"2025-07-28T19:20:22-07:00"}
---

## A more representative example
---

Let's take our power series method for a spin on a more representative example, namely the differential equation

$$
y''+(2-4x^2)y'-8xy=0.
$$

This differential equation is not that different from the [[40-49 Knowledge/41 Mathematics/Differential equations/Power series solutions/Power Series Solutions II - First steps with power series\|previous differential equation]]. They are both second-order, linear, homogeneous differential equations. The main difference is that it's much harder to guess a solution, and the basic methods of Linear Analysis I do not apply. So let's try our new method and look for a solution that can be represented by a power series centered at 0. So we plug in

$$
y=\sum_{n=0}^{\infty} a_n x^n,\quad y'= \sum_{n=1}^{\infty} na_n x^{n-1},\quad y''= \sum_{n=2}^{\infty} n(n-1)a_nx^{n-2}.
$$

The left side of our differential equation then becomes

$$
\begin{align*}
y''+(2-4x^2)y'-8xy &= \sum_{n=2}^{\infty} n(n-1)a_nx^{n-2}+(2-4x^2)\sum_{n=1}^{\infty} na_n x^{n-1}-8x\sum_{n=0}^{\infty} a_n x^n\\
&= \sum_{n=2}^{\infty} n(n-1)a_nx^{n-2}+\sum_{n=1}^{\infty} 2na_n-\sum_{n=1}^{\infty} 4na_nx^{n+1}-\sum_{n=0}^{\infty} 8a_n x^{n+1}.
\end{align*}
$$
We now reindex each summation, so that the new index $m$ matches the power of $x$ in the sum. Continuing where we left off, we have

$$
\begin{align*}
y''+(2-4x^2)y'-8xy&= \sum_{m=0}^{\infty} (m+2)(m+1)a_{m+2}x^m+\sum_{m=0}^{\infty} 2(m+1)a_{m+1}x^m\\
&\quad -\sum_{m=2}^{\infty} 4(m-1)a_{m-1}x^m-\sum_{m=1}^{\infty} 8a_{m-1}x^m.
\end{align*}
$$

We would like to combine these four power series into a single series, but we must deal with a new issue: the series do not all begin at the same starting index. This is because the four power series do not all begin at the same power of $x$. Indeed, if we expand out the four series for visual reference, they are

$$
\left(2a_2+6a_3x+\cdots\right)+\left(2a_1+4a_2x+\cdots\right)-\left(4a_1x^2+8a_2x^3+\cdots\right)-\left(8a_0x+8a_1x^2+\cdots\right)
$$

Notice that the first two series are the only ones that have constant terms (corresponding to $m=0$), and that only the first, second, and fourth series contain linear terms (corresponding to $m=1$). Thus, in order to combine these four series into a single series, we need to separate out the constant ($m=0$) and linear ($m=1$) terms. We can then combine all four series into a single gigantic series that runs over $m\geq 2$:

$$
\begin{align*}
y''&+(2-4x^2)y'-8xy = \underbrace{(2a_2+2a_1)}_{m=0}+\underbrace{(6a_3+4a_2-8a_0)x}_{m=1}\\
&\quad +\sum_{m=2}^{\infty}\left((m+2)(m+1)a_{m+2}+2(m+1)a_{m+1}-4(m-1)a_{m-1}-8a_{m-1}\right)x^m
\end{align*}
$$

In order for $y(x)$ to be a solution to our differential equation we need this power series to vanish, i.e., each coefficient of $x^m$ needs to vanish. This yields the following system of equations:

$$
\begin{align*}
m=0:& \quad 2a_2+2a_1=0\\
m=1:& \quad 6a_3+4a_2-8a_0=0\\
m\geq 2:& \quad (m+2)(m+1)a_{m+2}+2(m+1)a_{m+1}-4(m-1)a_{m-1}-8a_{m-1}.
\end{align*}
$$

We now proceed through these equalities one by one:

$$
\begin{align*}
m=0:&\quad a_2=-a_1\\
m=1:&\quad a_3=\frac{4}{3}a_0-\frac{2}{3}a_2 = \frac{4}{3}a_0+\frac{2}{3}a_1\\
m=2:&\quad a_4=a_1-\frac{1}{2}a_3=a_1-\frac{1}{2}\left(\frac{4}{3}a_0+\frac{2}{3}a_1\right)=-\frac{2}{3}a_0+\frac{2}{3}a_1\\
&\vdots
\end{align*}
$$

We have therefore discovered that the power series solutions to our differential equation are exactly those of the form

$$
\begin{align*}
y(x) &= a_0+a_1x-a_1x^2+\left(\frac{4}{3}a_0+\frac{2}{3}a_1\right)x^3+\left(-\frac{2}{3}a_0+\frac{2}{3}a_1\right)x^4+\cdots\\
&= a_0\underbrace{\left(1+\frac{4}{3}x^3-\frac{2}{3}x^4+\cdots\right)}_{y_1(x)}+a_1\underbrace{\left(x-x^2+\frac{2}{3}x^3+\frac{2}{3}x^4+\cdots\right)}_{y_2(x)}
\end{align*}
$$

As with the previous example, we have discovered that the general power series solution can be written as a linear combination of two particular power series solution.^[We will talk more about this later.] Before we move on, though, let's make a few observations and ask some basic questions.

### Some observations

First, notice how in this example the unknown coefficients $a_n$ end up expressed as linear combinations of both $a_0$ and $a_1$ (and not just multiples of one or another). This type of behavior is more representative of what you should expect for a second-order, linear, homogeneous differential equation. Also note how the two particular solutions, $y_1(x)$ and $y_2(x)$, both contain monomials of most degrees. For example, they both contain cubic and quartic terms. Contrast this with the previous example, in which one solution contained only odd powers and the other even powers. Again, this current example is more in line with the general case.

Second, notice how we didn't even try to find a general pattern for the $a_n$. Ideally we would find the pattern and give an explicit formula for every term. We would definitely want this in a real-world application. Unfortunately this is not always practical, especially as the differential equations get more complicated. For now, at least, we will have to content ourselves with simply finding enough terms, comforting ourselves with the knowledge that we can always go back and find additional terms if necessary.

> [!question]
> How many terms is enough? This is a critical question lacking an easy answer. We will therefore avoid thinking about this until later.


## Important questions
---

There are many questions begging to be asked at this point. Here are a few of the big ones:

### When are we guaranteed success?

As you might suspect, this method of finding solutions to differential equations can be quite tedious and time consuming. It would be nice to know at the outset whether this method will be worth the effort.

### What can possibly go wrong?

If the previous question is that of the skeptical pessimist, then this question is that of the hopeful optimist. After all, looking at the steps we took in our two previous examples, each step boils down to basic arithmetic. It's not obvious how this method could fail to produce a solution.

### When can we stop computing?

When can we stop finding terms in our power series solution and simply write "$+\cdots$"? We will return to this question later. In real life, this boils down to a question of accuracy. For example, if we know our solution is

$$
y(x)=1+\frac{4}{3}x^3-\frac{2}{3}x^4+\cdots
$$
   
   and we want to actually *use* our solution to model behavior, then we'll really be using an approximate solution like
   
   $$
   y(x)\approx 1+\frac{4}{3}x^3-\frac{2}{3}x^4.
   $$
   
   Approximations are only as useful as their accuracy, however, and so knowing when to stop can be a critical piece of information. As we will see at the end of this chapter, an approximation can rapidly transition from "quite good" to "catastrophically bad" over a very short interval.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Power series solutions/Power Series Solutions IV - Analytic functions and ordinary points\|Power Series Solutions IV - Analytic functions and ordinary points]]