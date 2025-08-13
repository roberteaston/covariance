---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-i-pushing-fourier-series-to-the-limit/","tags":["differential_equations"],"updated":"2025-08-13T09:59:23-07:00"}
---

We are about to discover the Fourier *transform* as the natural answer to the following:

> [!question] Question
> Can we extend the machinery of the Fourier series to non-periodic function?

## Recap of the periodic situation
---

As a quick recap, we started by attempting to represent functions $f(t)$ that were periodic with period $1$ by complex Fourier series, i.e., series of the form

$$\sum_{n=-\infty}^{\infty} c_n e^{2\pi int}.$$

We quickly saw that if $f(t)$ could be represented by such a series, then the coefficients in that series satisfied the integral formula

$$c_n =\int_0^1 f(t)e^{-2\pi int}\operatorname{d}t.$$

We then introduced the "hat" notation $\hat{f}(n)$ for the value of the above integral.

[[40-49 Knowledge/41 Mathematics/Differential equations/Fourier series/Fourier series solutions VI - Inner product spaces\|Eventually]] we used ideas from linear algebra to clarify the situation, by introducing an analogue of the dot product for periodic functions, namely the [[40-49 Knowledge/41 Mathematics/Differential equations/Fourier series/Fourier series solutions VI - Inner product spaces#Extending the dot product to functions\|inner product]] for functions $f,g:[0,1]\to {\bf C}$ defined by

$$(f,g)=\int_0^1 f(t)\overline{g(t)}\operatorname{d}t.$$

This inner product shares nearly all of the familiar properties of the dot product on ${\bf R}^n$ and allowed us to define both the notion of *length* (using $|f|^2 = (f,f)$) and *orthogonality* (by declaring $f$ and $g$ orthogonal whenever $(f,g)=0$). In particular, if we let $e_n(t)=e^{2\pi int}$, then the set of functions $\{e_n(t)\mid n\in {\bf Z}\}$ is an orthonormal set, i.e., is a set of functions that are unit length and mutually orthogonal.

With this new linear algebra language, our work above becomes a standard result about orthonormal sets, namely that if $f$ can be written as a linear combination of the $e_n$, then that combination must be exactly

$$f = \sum_{n=-\infty}^{\infty} (f,e_n)\cdot e_n,$$

where by definition

$$(f,e_n)=\int_0^1 f(t)\overline{e_n(t)}\operatorname{d}t = \int_0^1 f(t)e^{-2\pi int}\operatorname{d}t = \hat{f}(n).$$

### The more general situation

We can easily extend the above results to the case of functions that are periodic with arbitrary period $T > 0$. In this case, the inner product for functions $f,g:[0,T]\to {\bf C}$ is given by

$$(f,g)=\int_0^T f(t)\overline{g(t)}\operatorname{d}t,$$

and our corresponding orthonormal set of "elementary" periodic functions (with period $T$) is $\{e_n(t)\mid n\in {\bf Z}\}$, where $e_n(t)=\frac{1}{\sqrt{T}}e^{\frac{2\pi int}{T}}$.

Just as above, we have that for every function $f$ that's periodic function with period $T$, if $f$ can be written as a linear combination of the orthonormal functions above, then that combination must be

$$f=\sum_{n=-\infty}^{\infty} (f,e_n)\cdot e_n,$$

where

$$(f,e_n) = \int_0^T f(t)\cdot \frac{1}{\sqrt{T}}e^{-\frac{2\pi int}{T}}\operatorname{d}t=\frac{1}{\sqrt{T}}\int_0^T f(t)e^{-\frac{2\pi int}{T}}\operatorname{d}t.$$

If, for some reason, you wished to express $f$ as a linear combination of the functions $e^{\frac{2\pi int}{T}}$ (which are no longer unit length but are still mutually orthogonal), you could equivalently write

$$f(t) = \sum_{n=-\infty}^{\infty} c_n e^{\frac{2\pi int}{T}},$$

where $c_n$ satisfied the integral equation

$$c_n = \frac{1}{T}\int_0^T f(t)e^{-\frac{2\pi int}{T}}\operatorname{d}t.$$

We can now ask the question:

> [!question] Can we let $T\to \infty$?
> In other words, what happens if $f$ is not periodic? Can we make sense of some type of limit of the above situation?


*Under construction*


## Suggested next notes
---

*Coming soon*
