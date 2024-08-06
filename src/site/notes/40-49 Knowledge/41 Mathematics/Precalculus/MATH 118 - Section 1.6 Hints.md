---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/precalculus/math-118-section-1-6-hints/","updated":"2024-07-11T15:53:25-07:00"}
---

>[!summary] Exercise 45 in Section 1.6
> Write the expression below in the standard form for a complex number:
> $$\frac{1}{1+i}-\frac{1}{1-i}.$$

We have two options for this one:
1. We can first write the two separate expressions in standard form and then simplify the answer; or
2. We can combine the two fractions into one fraction and then express that single fraction in standard form.

Let's try the second method. We first put the two expressions over a common denominator, then combine the fractions and simplify:

$$\begin{align*}
\frac{1}{1+i}-\frac{1}{1-i}&=\frac{1}{1+i}\cdot \frac{1-i}{1-i}-\frac{1}{1-i}\cdot \frac{1+i}{1+i}\\
&= \frac{1-i}{(1+i)(1-i)}-\frac{1+i}{(1-i)(1+i)}\\
&= \frac{(1-i)-(1+i)}{(1+i)(1-i)}\\
&= \frac{1-i-1-i}{1-i^2}\\
&= \frac{-2i}{1-(-1)}\\
&= \frac{-2i}{2}\\
&= -i\\
&= 0+(-1)i.
\end{align*}$$

In this case, we got lucky that the denominator simplified to a nice number.

>[!summary] Exercise 73 in Section 1.6
>Given that $z=3-4i$ and $w=5+2i$, simplify the expression $\overline{z}+\overline{w}$.

Recall that $\overline{z}$ denotes the **complex conjugate** of $z$, which is the complex number with the same real part and opposite imaginary part as $z$. So in this case $\overline{z} = 3+4i$ and $\overline{w}=5-2i$. So we have $\overline{z}+\overline{w}=(3+4i)+(5-2i) = 8+2i$.

>[!question] Domain of a ratio of two functions
> What is the domain of a ratio of two functions, say $\frac{f(x)}{g(x)}$?

The answer to this one is that the domain of such an expression is the set of all $x$ with the following properties:
1. $f(x)$ is defined, i.e., $x$ is in the domain of $f$;
2. $g(x)$ is defined, i.e., $x$ is in the domain of $g$; and
3. $g(x)\neq 0$.

So the domain of that ratio is the set of values $x$ where both $f$ and $g$ are defined, and $g$ is nonzero. (It's okay if $f(x)=0$.)