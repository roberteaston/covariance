---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-series/fourier-series-solutions-vi-inner-product-spaces/","tags":["differential_equations"],"updated":"2025-08-07T09:51:51-07:00"}
---

> [!warning]
> This note should be considered temporary, focusing only on what we need right now for the express purpose of understanding Fourier series. It will later be expanded and broken into many notes.

It turns out that much of the machinery we're building around Fourier series can be greatly streamlined if we take a minute to explore a way to define "orthogonality" for functions, very similar to the usual dot product for column vectors.

## The dot product on ${\bf C}^n$
---

Let's first extend the notion of dot product to vectors with complex coordinates, although we need one little adjustment.

First suppose $z=a+ib$ is a single complex number. Using the complex plane as our guide, the point corresponding to $z$ would be at coordinates $(a,b)$, which is a distance $\sqrt{a^2+b^2}$ from the origin. Because of this, it is reasonable to define the **length** of the complex number $z$ as

$$|z|=\sqrt{a^2+b^2}.$$

Notice that we then immediately have 

$$|z|^2 = a^2+b^2.$$

Now, by comparison, notice that

$$z^2 =(a+ib)(a+ib)=(a^2-b^2)+i\cdot 2ab,$$

and so we almost never have $|z|^2=z^2$. This in contrast with real numbers, where for any real number $x$ we always have $|x|^2=x^2$ (where $|x|$ is the usual absolute value, which measures the distance of the point $x$ from the origin on the real line). However, observe that

$$z\overline{z}=(a+ib)(a-ib)=a^2+b^2=|z|^2.$$

Using this observation, it is hopefully reasonable to define the length of a complex vector ${\bf v}=\begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n\end{bmatrix}$in ${\bf C}^n$ as

$$|{\bf v}|^2 = |v_1|^2+|v_2|^2+\cdots +|v_n|^2 = v_1\overline{v_1}+v_2\overline{v_2}+\cdots + v_n\overline{v_n}.$$

With this in mind, it should seem reasonable to extend the dot product on ${\bf R}^n$ to vectors in ${\bf C}^n$$ as follows:

> [!note] Definition of dot product on ${\bf C}^n$
> Given vectors ${\bf v}=\langle v_1, v_2,\ldots, v_n\rangle$ and ${\bf w}=\langle w_1, w_2,\ldots, w_n\rangle$ in ${\bf C}^n$, we define their **dot product** to be the complex number denoted ${\bf v}\bullet {\bf w}$ given by
> 
> $${\bf v}\bullet {\bf w} = \sum_{k=1}^n v_k\overline{w_k}.$$


Notice that if ${\bf v}$ and ${\bf w}$ happen to have real entries, then this new dot product is the same as our old dot product (since complex conjugation doesn't do anything to real numbers). Also, with this definition we always have

$$|{\bf v}|^2 = {\bf v}\bullet {\bf v},$$

both for vectors in ${\bf C}^n$ and ${\bf R}^n$.


## Extending the dot product to functions
---

Using the dot product on ${\bf C}^n$ defined above as inspiration, we define the following:

> [!note] A definition of an inner product on functions
> Suppose $f,g:[0,1]\to {\bf C}$ are nice^[We'll decide what "nice" means later.] complex-valued functions on $[0,1]$. We define their **inner product** to be the complex number denoted $(f,g)$ given by
> 
> $$(f,g)=\int_0^1 f(t)\overline{g(t)}\operatorname{d}t.$$

We can use this inner product to define a **norm** (or **length**) for functions $f:[0,1]\to {\bf C}$, by setting $|f|$ to be the number given by

$$|f|^2=(f,f)=\int_0^1 f(t)\overline{f(t)}\operatorname{d}t = \int_0^1 |f(t)|^2.$$

We say a function $f$ is of **unit length** if $|f|^2=1$.

We can also extend the notion of orthogonal to functions.

> [!note] A definition of orthogonal for functions
> We say two functions $f,g:[0,1]\to {\bf C}$ are **orthogonal** if $(f,g)=0$.



## Orthonormal bases
---

### Orthonormal bases on ${\bf C}^n$

Recall that in ${\bf C}^n$ we have the following collection of so-called **standard basis vectors**:

$${\bf e}_1 = \begin{bmatrix} 1 \\ 0 \\ \vdots \\ 0\end{bmatrix}, \quad{\bf e}_2 =\begin{bmatrix} 0 \\ 1 \\ \vdots \\ 0\end{bmatrix},\quad \ldots\quad ,\quad {\bf e}_n=\begin{bmatrix} 0 \\ 0 \\ \vdots \\ 1\end{bmatrix}.$$


This collection of vectors has many nice properties.
- The fact that they form a basis for ${\bf C}^n$ means that every vector in ${\bf C}^n$ can be written uniquely as a linear combination of these vectors.
- Each of these vectors is a unit vector, i.e., $|{\bf e}_k|=1$ for every $k=1,\ldots , n$.
- These vectors are **mutually orthogonal**, i.e., ${\bf e}_k\bullet {\bf e}_j =0$ whenever $k\neq j$.

The second two properties above provide a super quick and easy way to write a given vector ${\bf v}$ in ${\bf C}^n$ as a linear combination of these basis vectors. Indeed, if we first suppose

$${\bf v}=\sum_{k=1}^n c_k {\bf e}_k,$$

then for each $j=1,\ldots, n$ we can dot product both sides of the above equality with ${\bf e}_j$ to obtain

$$\begin{align*}
{\bf v}\bullet {\bf e}_j &=\left(\sum_{k=1}^n c_k{\bf e}_k\right)\bullet {\bf e}_j\\
&= \sum_{k=1}^n c_k({\bf e_k}\bullet {\bf e}_j)\\
&= c_k,
\end{align*}$$

since those dot products are all zero except in the one case when $k=j$, for which ${\bf e}_j\bullet {\bf e}_j = |{\bf e}_j|^2=1$.

In other words, we always have

$${\bf v} = \sum_{k=1}^n ({\bf v}\bullet {\bf e}_k){\bf e}_k.$$

### Extending the above ideas to our world of periodic functions


None of the above argument is restricted to ${\bf C}^n$ with the usual dot product and the standard basis. We can repeat the same logic in any vector space $V$ which has an inner product, and any basis $\mathcal{B}$ that is orthonormal with respect to that inner product.

In particular, for each integer $n$ let's write $e_n(t)=e^{2\pi int}$, considered as a function from $[0,1]$ to ${\bf C}$. Using the inner product we defined above, observe first that each of these functions has unit length:

$$|e_n|^2 = \int_0^1 e_n(t)\overline{e_n(t)}\operatorname{d}t = \int_0^1 e^{2\pi int}e^{-2\pi int}\operatorname{d}t=\int_0^1 1\operatorname{d}t = 1.$$


These functions are also mutually orthogonal, since for every pair of integers $m$ and $n$ with $n\neq m$ we have

$$(e_n,e_m)=\int_0^1 e_n(t)\overline{e_m(t)}\operatorname{d}t=\int_0^1 e^{2\pi int}e^{-2\pi imt}\operatorname{d}t = \int_0^` e^{2\pi i(n-m)t}\operatorname{d}t = 0.$$

So while it's not clear these set of these functions is a orthonormal **basis**, it's at least an orthonormal *set*. By the same logic used above, it follows that *if* a function $f(t):[0,1]\to {\bf C}$ can be written as a linear combination

$$f(t)=\sum_{n=-\infty}^{\infty} c_n\,e_n(t)$$

then the coefficients must be given by

$$c_n = (f,e_n)=\int_0^1 f(t)e^{-2\pi int}\operatorname{d}t=\hat{f}(n).$$

### The space $L^2([0,1])$

In order to state a bunch of nice facts that are actually true, we need to nail down what it means for our functions to be "nice." We have been considering functions $f:[0,1]\to {\bf C}$ and we would like to define the norm (or length) of such functions by the formula

$$|f|^2= \int_0^1 |f(t)|^2.$$

So at the very least we should restrict ourselves to functions $f$ where the integral above exists and is finite. We will refer to the space of such functions as (a) **Lebesgue space** and denote it $L^2([0,1])$.^[Techincally, this isn't *exactly* the definition of this Lebesgue space, but it's close enough for what we're doing.]

*Under construction*


## Suggested next notes
---

*Coming soon*
