---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-transform/fourier-transform-ii-the-fourier-transform-and-inverse-transform/","tags":["differential_equations"],"updated":"2025-08-13T11:52:50-07:00"}
---

Inspired by the [[40-49 Knowledge/41 Mathematics/Differential equations/Fourier transform/Fourier transform I - Pushing Fourier series to the limit#The takeaway\|previous example]] and ignoring any technical issues (such as convergence), we have been led to define the following:

> [!note] Definition of the Fourier transform and inverse transform
> The **Fourier transform** of a function $f(t)$ is the function $F(s)$ defined by the integral
> 
> $$F(s)=\int_{-\infty}^{\infty} f(t)e^{-2\pi its}\operatorname{d}t,$$
> 
> if the integral exists. The function $F$ is sometimes denoted $\mathcal{F}f$ or $\hat{f}$.
> 
> The **inverse Fourier transform** of a function $F(s)$ is the function $f(t)$ defined by the integral
> 
> $$f(t) = \int_{-\infty}^{\infty} F(s)e^{2\pi its}\operatorname{d}s,$$
> 
> if the integral exists. The function $f$ is sometimes denoted $\mathcal{F}^{-1}F$ or $\check{F}$.

Based on our work in the previous example, the Fourier transform of the rectangle function $\Pi(t)$ is the function $F(s) = \frac{\sin(\pi s)}{\pi s}$:

$$(\mathcal{F}\Pi)(s) = \int_{-\infty}^{\infty} \Pi(t)e^{-2\pi its}\operatorname{d}t = \frac{\sin(\pi s)}{\pi s}.$$

*Under construction!*

## Suggested next notes
---

*Coming soon*
