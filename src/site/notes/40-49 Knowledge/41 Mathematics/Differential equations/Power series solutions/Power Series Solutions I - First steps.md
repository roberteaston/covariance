---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/power-series-solutions/power-series-solutions-i-first-steps/","tags":["differential_equations"],"updated":"2025-07-28T15:48:46-07:00"}
---

## The general strategy
---

Let's begin with a test example, for which our proposed method is complete overkill:

$$
y''+y=0.
$$

Using the methods of Linear Analysis I (or simply by guessing) we can show that the general solution to this differential equation is

$$
y(x) = c_1\sin(x)+c_2\cos(x).
$$
Let's see how our proposed power series method plays out. For this first example let's avoid using summation notation and write everything in expanded form. The general power series centered at 0 is of the form

$$
y=a_0+a_1x+a_2x^2+a_3x^3+a_4x^4+a_5x^5\cdots
$$

Computing derivatives term by term, we then have

$$
y'=a_1+2a_2x+3a_3x^2+4a_4x^3+5a_5x^4\cdots
$$

and

$$
y''=2a_2+6a_3x+12a_4x^2+20a_5x^3\cdots
$$

> [!note]
> You can see one disadvantage of not using summation notation: each time we take a derivative we have one fewer written term. In this current example, by the time we hit the sixth derivative we would have $y^{(6)}=\cdots$, which is not very much information at all! We can always go back and add more terms, but using summation notation at the outset is probably the ideal solution.


Plugging into the left side of our differential equation, we then have

$$
\begin{align*}
y''+y&=\left(2a_2+6a_3x+12a_4x^2+20a_5x^3\cdots\right)+\left(a_0+a_1x+a_2x^2+a_3x^3+a_4x^4+\cdots\right)\\
&= (2a_2+a_0)+(6a_3+a_1)x+(12a_4+a_2)x^2+(20a_5+a_3)x^3\cdots
\end{align*}
$$

> [!warning]
> Note that we can't write down the terms for $x^4$ and beyond, since we haven't explicitly listed those terms in $y''$.


Our power series $y$ is a solution to the differential equation exactly when $y''+y=0$, and a power series equals zero (as a function) exactly when the coefficients of each power of $x$ vanish. Based on our work above, this means $y$ is a solution exactly when the following equations are satisfied:

$$
\begin{align*}
2a_2+a_0 &= 0\\
6a_3+a_1 &= 0\\
12a_4+a_2 &= 0\\
20a_5+a_3 &= 0\\
&\vdots
\end{align*}
$$

So, our infinite collection of coefficients must satisfy an infinite collection of relations in order for the corresponding power series $y$ to be a solution to the differential equation. What is not entirely obvious from the limited list of equations above is that what were are dealing with is a *recursion relation*. Although there are general methods for solving such relations, those methods are beyond the scope of our current notes. Instead, we will result to a crude but generally effective method of "bootstrapping" our way to a solution, in which we use each equation to write the unknown coefficients  in terms of the coefficients with the lowest possible subscripts. In our current situation, we find that

$$
\begin{align*}
a_2 &= -\frac{1}{2}a_0\\
a_3 &= -\frac{1}{6}a_1\\
a_4 &= -\frac{1}{12}a_2 = -\frac{1}{12}\left(-\frac{1}{2}a_0\right) = \frac{1}{24}a_0\\
a_5 &= -\frac{1}{20}a_3 = -\frac{1}{20}\left(-\frac{1}{6}a_1\right) = \frac{1}{120}a_1\\
&\vdots
\end{align*}
$$

From the limited information we have obtained, it appears that every coefficient $a_n$ can be expressed in terms of $a_0$ and $a_1$, and that the coefficients $a_0$ and $a_1$ are "free." Assuming the trends continues---and we'll revisit this example shortly using summation notation---we have found that the power series solutions are those of the form

$$
y(x)=a_0+a_1x-\frac{1}{2}a_0x^2-\frac{1}{6}a_1x^3+\frac{1}{24}a_0x^4+\frac{1}{120}x^5+\cdots
$$

Continuing with the assumption that all $a_n$ can be written in terms of $a_0$ and $a_1$, we can express this more cleanly as

$$
y(x)=a_0\left(1-\frac{1}{2}x^2+\frac{1}{24}x^4+\cdots\right)+a_1\left(x-\frac{1}{6}x^3+\frac{1}{120}x^5+\cdots\right)
$$

This presentation exhibits $y$ as the linear combination of two specific power series solutions, namely

$$
\begin{align*}
y_1(x)&= 1-\frac{1}{2}x^2+\frac{1}{24}x^4+\cdots\\
y_2(x)&= x-\frac{1}{6}x^3+\frac{1}{120}x^5+\cdots
\end{align*}
$$


Now recall that the Maclaurin series for sine and cosine are

$$
\begin{align*}
\cos(x) &= \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!} x^{2k} = 1-\frac{1}{2!}x^2+\frac{1}{4!}x^4-\cdots\\
\sin(x) &= \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!} x^{2k+1} = x-\frac{1}{3!}x^3+\frac{1}{5!}x^5-\cdots
\end{align*}
$$

It *looks like* our function $y_1(x)$ is the Maclaurin series for $\cos(x)$ and our solution for $y_2(x)$ is the Maclaurin series for $\sin(x)$, but our work is not sufficient to justify that claim. We haven't explicitly determined the general pattern for the coefficients in each of our solutions, so we don't know sure sure that they forever match the terms in the two Maclaurin series.

This first example illustrates both the strengths and the weaknesses of writing power series in expanded form. Its greatest strength is in how it makes combining power series completely straightforward: we simply combine terms with like powers of $x$. As we will see shortly, combining power series requires a few additional steps when working with summation notation.

On the other hand, using expanded notation has several drawbacks. The most serious is the lack of explicit formulas we find in our process. We did not find a general recursion formula, just the first few instances; we did not find a general formula for the $a_n$, just the first few values. Our final answer only contained a few explicit terms, a fact which could cause us serious headaches in the real world if we need to use our solution to model the behavior of a physical system, where accuracy would likely be a concern. Using summation notation can help us mitigate some of these issues.

## Using summation notation
---

Let's revisit the previous example, only now using summation notation. If at any point you lose track of what we are doing, you can always expand back out the sums and compare with our work above. The general power series centered at 0 is of the form

$$
y=\sum_{n=0}^{\infty} a_n x^n.
$$

Taking derivatives term by term, we then have

$$
y'= \sum_{n=1}^{\infty} na_n x^{n-1}
$$

and

$$
y''= \sum_{n=2}^{\infty} n(n-1)a_nx^{n-2}.
$$

> [!question]
> Why does the summation for $y'$ begin at $n=1$? The term in $y$ when  was the constant $a_0$, the derivative of which is 0, so that term has "disappeared" from the sum for $y'$. You may see some authors insist that the sum for $y'$ starts at $n=0$. Why is that also correct? Notice that if you substitute $n=0$ into our formula for the sum for $y'$, the result is $0\cdot a_0 x^{-1}$, which just so happens to equal 0. So the result is technically correct, although it amounts to declaring that the derivative of 1 is $\frac{0}{x}$. Is that something you really want to do? It's also a risky decision, since there are examples of manipulating series in which tricks like that do *not* work.


The left side of our differential equation is then

$$
y''+y=\sum_{n=2}^{\infty} n(n-1)a_nx^{n-2}+\sum_{n=0}^{\infty} a_n x^n.
$$

We want to combine those two series into a single power series. There are two issues that prevent us from immediately doing so. First, the two sums do not begin at the same index value: the first begins at $n=2$ and the second at $n=0$. Second, the two series are not "aligned," in the sense that the index in each sum does not correlate directly with the exponent of . Put another way, even if the two series did begin at the same value of $n$, if we merged them into one sum we would have

$$
\sum_n \left(n(n-1)a_nx^{n-2}+a_n x^n\right),
$$

which is not the standard representation of a power series. That's because we need to gather up the like powers of $x$.  This step was simple when the series were written in expanded form, since we could visually match the terms with like powers. When using summation notation, however, we need to do one small extra step, called **reindexing**.

The process of reindexing a summation is analogous to a basic change of variables in an integral. We are going to shift the indices in each of our summations so that the new index exactly matches the power of $x$ inside the sum. In the first summation, we see that our terms are multiples of $x^{n-2}$, so we will switch to a new index $m$ defined by $m=n-2$. We now replace every appearance of $n$ in that summation with $m+2$:

$$
\sum_{n=2}^{\infty} n(n-1)a_nx^{n-2}=\sum_{m=0}^{\infty} (m+2)(m+1)a_{m+2}x^m.
$$

It is important to note that we haven't done anything to the series. Both summations above describe the series

$$
\underbrace{2\cdot 1a_2}_{n=2,\,m=0}+\underbrace{3\cdot 2a_3 x}_{n=3,\,m=1}+\underbrace{4\cdot 3a_4x^2}_{n=4,\,m=2}+\cdots
$$

Notice how the index $n$ matches with the subscript on $a_n$, while the index $m$ matches with the power of $x^m$. If we wanted to combine terms with the same coefficient $a_n$, we would use the index $n$. Since we want to combine terms with the same $x^m$, we'll use the index $m$.

We do the same thing to the second sum above (the one representing $y$), although in that case we make the trivial reindexing $m=n$. Our work now looks like

$$
\begin{align*}
y''+y&= \sum_{n=2}^{\infty} n(n-1)a_nx^{n-2}+\sum_{n=0}^{\infty} a_n x^n\\
&= \sum_{m=0}^{\infty} (m+2)(m+1)a_{m+2}x^m+\sum_{m=0}^{\infty} a_m x^m\\
&= \sum_{m=0}^{\infty} \left((m+2)(m+1)a_{m+2}+a_m\right)x^m
\end{align*}
$$

> [!note] A happy coincidence
> It is convenient that both sums now begin at $m=0$, but that is only a happy coincidence in this example.


We now have a general formula for $y''+y$, as opposed to our previous method which only provided the terms up through $x^2$. To confirm we have reproduced our previous calculation, we can expand out the last line above:

$$
\sum_{m=0}^{\infty} \left((m+2)(m+1)a_{m+2}+a_m\right)x^m = (2a_2+a_0)+(6a_3+a_1)x+(12a_4+a_2)x^2+(20a_5+a_3)x^3+\cdots
$$

It has taken a few more steps, but what we have gained is a precise formula for every term in the power series for $y''+y$. Returning to the task at hand, $y$ is a solution to our differential equation exactly when $y''+y=0$. Based on our power series representation for $y''+y$, this happens exactly when

$$
(m+2)(m+1)a_{m+2}+a_m=0
$$

for every integer $m\geq 0$. This is what we will call our **master relation**. It dictates the relationships the coefficients $a_n$ must satisfy in order for our power series to be a solution to the differential equation.

At this point we sync up with our previous method, using the bootstrapping method to write each $a_n$ in terms of $a_0$ and $a_1$. However, we can now crank out as many $a_n$ as we desire. Just as before, we find

$$
\underbrace{a_2 = -\frac{1}{2}a_0}_{\text{from }m=0},\quad \underbrace{a_3 = -\frac{1}{6}a_1}_{\text{from }m=1},\quad \underbrace{a_4=\frac{1}{24}a_0}_{\text{from }m=2},\quad \underbrace{a_5=\frac{1}{120}a_a}_{\text{from }m=3}
$$

Thus, our general power series solution is of the form

$$
y(x)=a_0+a_1x-\frac{1}{2}a_0x^2-\frac{1}{6}a_1x^3+\frac{1}{24}a_0x^4+\frac{1}{120}a_1x^5+\cdots
$$
If we needed another term, we could proceed to $m=4$, and so on.

Notice that our recursion relation tells us that each $a_n$ is a multiple of $a_{n-2}$. This proves^[For example, $a_6$ is a multiple of $a_4$, which in turn is a multiple of $a_2$, which is itself a multiple of $a_0$. So $a_6$ is ultimately a multiple of $a_0$. In general, if $n$ is even then $a_n$ is a multiple of $a_0$; if $n$ is odd, then $a_n$ is a multiple of $a_1$.] that every $a_n$ can be written as a multiple of either $a_0$ or $a_1$, and so we are justified in writing

$$
y(x)=a_0\underbrace{\left(1-\frac{1}{2}x^2+\frac{1}{24}x^4+\cdots\right)}_{y_1(x)}+a_1\underbrace{\left(x-\frac{1}{6}x^3+\frac{1}{120}x^5+\cdots\right)}_{y_2(x)}
$$

Before moving on to a second example, we should point out two features of the current example that are *not* representative of what we will see in general.

First, in this example each $a_n$ ended up equaling a multiple of either $a_0$ or $a_1$. This is not something you should generally expect. It is akin to computing a Taylor series and discovering that all even coefficients vanish. We will soon see that for a second-order, linear, homogeneous differential equation, we should instead expect each $a_n$ to be a linear combination of both $a_0$ and $a_1$.

Second, in this example (and many others) you might be able to deduce a pattern for the $a_n$. In our current example, for instance, it's not hard to show that

$$
a_n=\begin{cases}\frac{(-1)^{n/2}}{n!}a_0,&\text{ for even }\;n \\ \frac{(-1)^{(n-1)/2}}{n!}a_1,&\text{ for odd }\; n \end{cases}
$$

In terms of our particular solutions $y_1(x)$ and $y_2(x)$, this means we have explicit formulas

$$
y_1(x)=\sum_{\substack{n=0 \\ n\text{ even}}}^{\infty} \frac{(-1)^{n/2}}{n!}x^n =1-\frac{1}{2!}x^2+\frac{1}{4!}x^4-\frac{1}{6!}x^6-\cdots
$$

and

$$
y_2(x)=\sum_{\substack{n=0 \\ n\text{ odd}}}^{\infty} \frac{(-1)^{(n-1)/2}}{n!}x^n =x-\frac{1}{3!}x^3+\frac{1}{5!}x^5-\frac{1}{7!}x^7-\cdots
$$

Against all odds these are recognizable power series: they are the Maclaurin series for cosine and sine, respectively. We have thus actually shown that the general solution to the differential equation is

$$
y(x)=a_0\cos(x)+a_1\sin(x),
$$

which at last aligns with our very first observations about this differential equation. This is nice but incredibly rare. You should consider the decision to work with power series akin to checking into Hotel California: you can check in, but you can never leave.

## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Power series solutions/Power Series Solutions II - A more representative example\|Power Series Solutions II - A more representative example]]