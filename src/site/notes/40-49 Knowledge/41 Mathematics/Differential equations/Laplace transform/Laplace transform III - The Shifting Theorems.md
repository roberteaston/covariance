---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/laplace-transform/laplace-transform-iii-the-shifting-theorems/","tags":["differential_equations"],"updated":"2025-08-21T15:12:52-07:00"}
---

*Under construction!*

With the Fourier transform, we had the [[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform III - Properties of the Fourier transform#Shifting and stretching\|stretch-and-shift]] property that made computing Fourier transforms of slightly modified functions very easy, namely:

$$\mathcal{F}(f(at+b)) = \frac{1}{|a|}e^{\frac{2\pi isb}{a}}(\mathcal{F}f)\left(\frac{s}{a}\right).$$

As a special case of this, when $a=1$ we have the following "stretch theorem":

$$\mathcal{F}(f(t+b)) = e^{2\pi isb}\cdot \mathcal{F}f.$$

In other words, shifting the input of $f$ by $b$ simply "costs" a factor of $e^{2\pi isb}$ on the transform of $f$. For example, we can instantly compute

$$\mathcal{F}(\Pi(t+1))=e^{2\pi is}\operatorname{sinc}(s).$$

This property can potentially save us from lots of tedious integration.

There's also the corresponding property for the inverse Fourier transform, namely

$$\mathcal{F}^{-1}(F(s+b))=e^{-2\pi itb}\cdot \mathcal{F}^{-1}F.$$

How about the Laplace transform? Let's take a look and see!

## The first shift theorem
---

### An aside on unit step functions


### Examples


## The second shift theorem
---


### Examples


## Using the shift theorems "in reverse"
---


## In summary: the four shifting results
---

### Final examples



## Suggested next notes
---

[[40-49 Knowledge/41 Mathematics/Differential equations/Laplace transform/Laplace transform IV - Convolution redux\|Laplace transform IV - Convolution redux]]
