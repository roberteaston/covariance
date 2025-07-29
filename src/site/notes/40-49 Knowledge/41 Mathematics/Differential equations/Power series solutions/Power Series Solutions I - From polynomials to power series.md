---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/power-series-solutions/power-series-solutions-i-from-polynomials-to-power-series/","tags":["differential_equations"],"updated":"2025-07-28T19:16:49-07:00"}
---

> [!quote] George Pólya
>  In order to solve this differential equation you look at it until a solution occurs to you.

## A simple strategy: Guess-and-check a single function
---

Pólya may have been joking when he made the comment above, but he was not far off from describing one of the basic strategies for solving differential equations. For example, suppose we wanted to find a solution to the differential equation

$$
x^2 y''+x y'-y=0.
$$

The exponential function has treated us well in the past and has derivatives that are easy to compute, so let's start with that. Is the function $y(x)=e^x$ a solution to the differential equation? Substituting into the left-hand side of the differential equation, we obtain

$$
x^2 e^x+xe^x-e^x  = (x^2+x-1)e^x\neq 0.
$$

So, $y(x)=e^x$ is not a solution to the differential equation^[Remember that we're not interested in equations that are true for *some* values of $x$, but true for *all* values of $x$. In other words, the differential equation represents an equality of *functions*.]. Alas.

We shouldn't really be too surprised, though. With the infinite list of possible functions to guess, the odds of randomly guessing a solution to a differential equation are worse than the odds of winning the lottery. However, just as you can increase your odds at winning the lottery by buying a bunch of tickets^[Not that I recommend playing the lottery.], you can increase your odds at finding a solution by making a whole bunch of guesses all at once.

## A slightly better strategy:  Guess-and-check a family of functions
---

Continuing our example, let's check an entire family of exponential functions. Is there any solution of the form $y(x)=e^{rx}$, where $r$ is a real number? Once again substituting into the left-hand side of the differential equation, we obtain

$$
x^2\cdot r^2e^{rx}+x\cdot re^{rx}-e^{rx} = (r^2x^2+rx-1)e^{rx}.
$$

Sadly, there is no value of $r$ which makes everything cancel, so there is no value of $r$ for which $y(x)=e^{rx}$ is a solution. Even though we made an infinite number of guesses, they were all wrong. Once again, though, we shouldn't be too surprised. "Most" functions are not simple exponential functions, so it was always unlikely that any of the solutions to our differential equation would happen to be simple exponential functions.

Let's make one last attempt. This time let us switch from exponential functions to another family of simple functions, say powers of $x$. Is there a solution of the form $y(x)=x^r$ for some number $r$? Substituting into the left side of the differential equation, we obtain

$$
x^2\cdot r(r-1)x^{r-2}+x\cdot rx^{r-1}-x^r = (r^2-1)x^r.
$$

Notice that when $r=\pm 1$ we do indeed obtain zero. In other words, the functions $y_1(x)=x$ and $y_2(x)=x^{-1}$ are both solutions to the differential equation. In fact, our work shows that these are exactly the two values of $r$ for which $y=x^r$ is a solution to our differential equation. In any case, we have successfully found not just one but two solutions to our differential equation. Even better, these two functions are linearly independent^[We'll return to the property of linear independence later.] and so the general solution to our differential equation is the generic linear combination of these two solutions, i.e.,

$$
y(x) = c_1 x+c_2x^{-1}.
$$

### A more realistic example

The previous example is a bit misleading. Just as "most" functions are not simple exponential functions, it's also true that "most" functions are not monomial functions, i.e., simple powers of $x$. For example, let's now consider the differential equation below, which is only slightly different than previous:

$$
(x^2-1)y''-6xy'+12y=0.
$$

It's hard to detect any definitive qualitative difference between this differential equation and the last. Both are second-order, linear homogeneous differential equations. In both, the coefficient of $y''$ is a quadratic polynomial in $x$, the coefficient of $y'$ is a linear polynomial in $x$, and the coefficient of $y$ is a constant.

So, is there a solution to this new differential equation of the form $y(x)=x^r$ for some number $r$? Plugging into the left side of the differential equation, we find

$$
(x^2-1)\cdot r(r-1)x^{r-2}-6x\cdot rx^{r-1}+12x^r = (r^2-7r+12)x^r-(r^2-r)x^{r-2}.
$$

It's a fact that for every value of $r$, the set of functions $\{x^r, x^{r-2}\}$ is linearly independent. It follows that $y=x^r$ is a solution to our differential equation exactly when $r^2-7r+12=0$ and $r^2-r=0$. The solutions to the second equation are $r=0,1$, neither of which is also a solution to the first equation. Thus, there is no value of $r$ for which $y(x)=x^r$ is a solution to the differential equation.

## Pushing our strategy further: Looking for polynomial solutions
---

It is clear that restricting ourselves to monomial functions is too limiting. We need a larger family of functions to test. A natural candidate is a family of sums of polynomials. Suppose we knew (or had reason to believe) there was a solution to our differential equation that was a cubic polynomial, i.e., of the form $y(x)=a_0+a_1x+a_2x^2+a_3x^3$. We can find that solution just as before, by substituting into the left side of the differential equation and looking to see what---if any---choices of the coefficients result in a solution. In our case, after plugging in our candidate cubic polynomial and simplifying, we find

$$
(x^2-1)y''-6xy'+12y=(12a_0-2a_2)-(6a_1-6a_3)x+2a_2x^2.
$$

In particular, we see that the cubic polynomial is a solution exactly when the coefficients satisfy the following three equations:

$$
\begin{align*}
  12a_0-2a_2 &= 0\\
  6a_1-6a_3 &= 0\\
  2a_2 &= 0
\end{align*}
$$

Solving this system, we find that $a_0=a_2=0$ and $a_1=a_3$. In other words, we have found that our cubic polynomial is a solution to our differential equation exactly when it is of the form

$$
y(x) = a_1 x + a_1 x^3 = a_1(x+x^3).
$$

Put another way, the function $y_1(x)=x+x^3$ is a solution to our differential equation, and every solution to our differential equation *given by a cubic polynomial* is just a scalar multiple of $y_1(x)$.

Compared with our earlier example, we can only call this a partial success. We have found a nontrivial solution to our differential equation, but we found only one solution (up to scaling). For a second-order, linear, homogeneous differential equation we expect a two-dimensional space of solutions. We expect to find *two* linearly independent solutions.

What is the second solution? It is a not a cubic polynomial, since we found all of those. In fact, we actually already found all polynomial solutions of degrees less than or equal to three, since we never required $a_3\neq 0$. Our next step could be to look for polynomial solutions of degree four, then degree five, and so on, until we finally found another. This sounds incredibly tedious, and even more ominously, there would be no guarantee of success.

Can we do this more efficiently? That is, is there a way for us to test polynomials of every degree all at once? We can certainly try. All possible polynomial solutions are of the form

$$
y(x)=a_0+a_1x+a_2x^2+\cdots,
$$

where eventually all remaining $a_i$ are zero. So we can just substitute this into our differential equation, collect terms according to powers of $x$, and then set the coefficients of each power of $x$ equal to zero.

## Whoops. We've wandered into the land of power series
---

At this point we are effectively working with power series. After all, the only difference between a power series and a polynomial is that a polynomial ends; i.e., at some point all coefficients are zero. So why not look for solutions given by power series? They include all polynomials, plus much more. This, then, will be our first strategy for solving differential equations. We are immediately faced with answering two important questions:

> [!question] Two important questions
> 1. When is it a good idea to look for power series solutions? In other words, is there a way to know if a differential equation has a solution that can be represented by a power series?
> 2. Assuming there exists a power series solution, how do we find it?


## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Power series solutions/Power Series Solutions II - First steps with power series\|Power Series Solutions II - First steps with power series]]