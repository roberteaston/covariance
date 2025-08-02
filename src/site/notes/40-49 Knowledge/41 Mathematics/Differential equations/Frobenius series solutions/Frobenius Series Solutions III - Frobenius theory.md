---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/frobenius-series-solutions/frobenius-series-solutions-iii-frobenius-theory/","tags":["differential_equations"],"updated":"2025-08-02T15:23:38-07:00"}
---

Given how tedious it can be to search for Frobenius series solutions to a given differential equation, it would be nice to have some "forecasting" information that would let us know:
1. When are we guaranteed to find a Frobenius series solution?
2. When are we guaranteed that the general solution can be represented by a Frobenius series?
3. If there is only one Frobenius series solution (up to scaling), how do we find another solution?

We will briefly outline answers to those questions here, although we won't provide any proofs or justifications. We simply summarize the situation
## A measure of singularity
---

First we need a measure of "how bad" a singularity is for a (second-order, linear, homogeneous) differential equation.

> [!note] Definition of regular singular point
> Consider the differential equation
> 
> $$y''+p(x)y'+q(x)y=0.$$
> 
> We say $x_0$ is a **regular singular point** of the differential equation if it is a singular point (i.e., either $p$ or $q$ is not analytic at $x_0$) but the functions $P(x)=(x-x_0)p(x)$ and $Q(x)=(x-x_0)^2q(x)$ are analytic at $x_0$.
> 
> A singular point that is not regular is called an **irregular singular point**. 

More intuitively, $x_0$ is a regular singular point of the differential equation is:
- the singularity of $p(x)$ at $x_0$ is "no worse" than $\frac{1}{x-x_0}$; and
- the singularity of $q(x)$ at $x_0$ is "no worse" than $\frac{1}{(x-x_0)^2}$.

### Example

The point $x_0=0$ is:
- an ordinary point of the differential equation $y''+e^x y'-\frac{1}{1-x}y=0$
- a regular singular point of the differential equation $y''+\frac{e^x}{x}y'- y=0$
- a regular singular point of the differential equation $y''+x^2 y'-\frac{2}{x^2}y=0$
- an irregular singular point of the differential equation $y''+\frac{1}{x^2}y'-e^x y=0$

### Example

Consider the differential equation below

$$y''+\frac{1+x}{x(x-1)^2}y'+\frac{2}{x(x-2)}y=0.$$

The point $x_0$ is:
- An ordinary point of this differential equation if $x_0\neq 0, 1, 2$.
- A regular singular point of this differential equation if $x_0=0,2$.
- An irregular singular point of this differential equation if $x_0=1$.

## Existence of a Frobenius series solution
---

Here's our first bit of good news:

> [!summary] Frobenius series solutions at regular singular points
> Suppose $x_0$ is a regular singular point of the differential equation
> 
> $$y''+p(x)y'+q(x)y=0.$$
> 
> Then there exists at least one Frobenius series solution.

We can even say a bit more. Let's stick to the case $x_0=0$ for simplicity.

> [!summary] The indicial equation
> Suppose $x_0=0$ is a regular singular point of the differential equation
> 
> $$y''+p(x)y'+q(x)y=0.$$
> 
> Then there exists a Frobenius series solution of the form $y(x)=x^r \sum_{n=0}^{\infty} a_nx^n$ (with $a_0\neq 0$), where $r$ is a solution to the equation below (called the **indicial equation**):
> 
> $$r(r-1)+P(0)r+Q(0)=0.$$
> 
> Here $P(x)=xp(x)$ and $Q(x)=x^2 q(x)$, as defined earlier.

In fact, a lot more is known. We are not going to explore this further here, though, so for now we'll simply present the ...

## Flowchart of madness
---

![seriesMethodsFlowchart.png](/img/user/90-99%20Meta/91%20Images/Differential%20equations/seriesMethodsFlowchart.png)

## Final example
---

We should see at least one example illustrating a situation at the bottom-right corner of the flow chart, i.e., in which there is only one Frobenius series solution and we have to work extra hard to get a second, linearly independent solution.

To that end, consider the differential equation

$$4x^2y''-(3+4x)y=0.$$

Since $x_0=0$ is a regular singular point we know there is at least one solution that can be represented by a Frobenius series centered at $0$. After substituting in the function $\displaystyle y(x)=x^r\sum_{n=0}^{\infty} a_n x^n$ (with $a_0\neq 0$) and simplifying, we obtain
$$
\underbrace{(4r^2-4r-3)a_0}_{m=0}+\sum_{m=1}^{\infty} \left[(4(m+r)(m+r-1)-3)a_m-4a_{m-1}\right]x^m=0.
$$

It follows that $y(x)$ is a solution exactly when the following equations are satisfied:

$$
4r^2-4r-3= 0,\quad (4(m+r)(m+r-1)-3)a_m-4a_{m-1}=0\quad\text{for }m\geq 1.
$$

The first equation is (up to scaling) the indicial equation, and gives $r=\frac{3}{2},-\frac{1}{2}$. We are guaranteed to find a Frobenius solution for the larger root, namely $r=\frac{3}{2}$. When $r=\frac{3}{2}$, the remaining equations (eventually) simplify to $m(m+2)a_m=a_{m-1}$. Setting $m=1,2,\ldots$, we find that

$$
a_1=\frac{1}{3}a_0,\quad a_2=\frac{1}{8}a_1=\frac{1}{24}a_0,\quad \ldots
$$

We have therefore found one Frobenius solution, namely (after setting $a_0=1$ for convenience)

$$
y_1(x)=x^{3/2}\left(1+\frac{1}{3}x+\frac{1}{24}x^2+\cdots\right) = x^{3/2}+\frac{1}{3}x^{5/2}+\frac{1}{24}x^{7/2}+\cdots.
$$

Let us try to repeat the above solution for the root $r=-\frac{1}{2}$. In this case, the recursion relation eventually simplifies to $m(m-2)a_m=a_{m-1}$ for $m\geq 1$. Setting $m=1, 2,\ldots$, we then see that

$$
\begin{align*}
m=1:&\quad -a_1=a_0\Rightarrow a_1=-a_0\\
m=2:&\quad 0\cdot a_2 = a_1\Rightarrow a_1=0.
\end{align*}
$$

But we are assuming $a_0\neq 0$, so we cannot both have $a_1=-a_0$ and $a_1=0$. Our recursion relation is giving an inconsistent (or incompatible) set of equations. There is no Frobenius solution when $r=-\frac{1}{2}$.

> [!warning] Warning
> It is tempting to solve the recursion relation for $a_m$, finding that $a_m=\frac{1}{m(m-2)}a_{m-1}$ and declaring that for $m=2$ one has $a_2=\frac{1}{2\cdot 0}a_1$, which is a "divide by zero" error. *This is not correct and is not a valid contradiction.* The equation $m(m-2)a_m=a_{m-2}$ is valid for all $m\geq 1$, but the equation $a_m=\frac{1}{m(m-2)}a_{m-1}$ is only valid when we have not divided by zero, i.e., for all $m\geq 1$ *except* $m=2$. For $m=2$, we must stick with the original equation, which is still valid.

It turns out that the second solution is of the form

$$
y_2(x) = Ay_1(x)\ln(x)+x^{-1/2}\sum_{n=0}^{\infty} b_n x^n,
$$

where $y_1(x)$ is the Frobenius series solution you found (and we assume $b_0\neq 0$). After substituting in this function (and much simplification), we eventually obtain

$$
\underbrace{(-b_0-b_1)}_{m=0}+\sum_{m=2}^{\infty}\left[m(m-2)b_m-b_{m-1}+\frac{2A(m-1)}{m!(m-2)!}\right]x^m=0.
$$

(The $m=1$ term vanishes.) 

From the given information, $y(x)$ is a solution exactly when the following equations are satisfied:

$$
-b_0-b_1= 0,\quad m(m-2)b_m-b_{m-1}+\frac{2A(m-1)}{m!(m-2)!}=0\quad\text{for }m\geq 2.
$$

The first equation gives $b_1=-b_0$. Setting $m=2,\ldots$ in the remaining equations give

$$
\begin{align*}
m=2:& \quad 0\cdot b_2-b_1+A=0\Rightarrow A=b_1=-b_0\\
m=3:& \quad 3b_3-b_2+\frac{2A}{3}=0\Rightarrow b_3=\frac{1}{3}b_2-\frac{2A}{9}=\frac{2}{9}b_0+\frac{1}{3}b_2\\
\vdots
\end{align*}
$$

If we persist, we will be able to write every coefficient $b_m$ in terms of $b_0$ and $b_2$. From the terms we have found so far, we have discovered the solution

$$
\begin{align*}
y_2(x) &= -b_0 y_1(x)\ln(x)+x^{-1/2}\left(b_0-b_0x+b_2x^2+\left(\frac{2}{9}b_0+\frac{1}{3}b_2\right)x^3+\cdots\right)\\
&= b_0\left(-y_1(x)\ln(x)+x^{-1/2}-x^{1/2}+\frac{2}{9}x^{5/2}+\cdots\right)+b_2\left(x^{3/2}+\frac{1}{3}x^{5/2}+\cdots\right)
\end{align*}
$$

We are free to take any nonzero value for $b_0$ and any value (including zero) for $b_2$, and every pair of choices will produce a valid solution. For example, if we take $b_0=1$ and $b_2=0$, we obtain the solution

$$
y_2(x) = -y_1(x)\ln(x)+x^{-1/2}-x^{1/2}+\frac{2}{9}x^{5/2}+\cdots,
$$

where $y_1(x)$ is the solution we found earlier.
## Suggested next notes
---

*Coming soon*
