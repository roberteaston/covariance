---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/frobenius-series-solutions/frobenius-series-solutions-iii-frobenius-theory/","tags":["differential_equations"],"updated":"2025-07-31T11:59:48-07:00"}
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

## Final examples
---

*Coming soon*

## Suggested next notes
---

