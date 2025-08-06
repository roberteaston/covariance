---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/differential-equations/fourier-series/fourier-series-solutions-v-computing-some-fourier-series/","tags":["differential_equations"],"updated":"2025-08-06T14:43:53-07:00"}
---

It is a good idea to see computations of some Fourier series of functions that aren't built from sines and cosines. To that end, we consider two simple examples: 1) a "square wave"; and 2) a "triangular wave".

## Example: A square wave
---

Consider the piecewise-defined function $f(t)$ is periodic with period 1, and which on $[0,1)$ is defined by

$$f(t)=\begin{cases}1,&\text{ if } 0\leq t<\frac{1}{2}\\ -1,&\text{ if }\frac{1}{2}\leq t<1\end{cases}$$

In other words, this function alternates between the values of $1$ and $-1$ over intervals of length $\frac{1}{2}$. Although this function is discontinuous (where it "jumps" between the values of $1$ and $-1$), if we suggestively connect the values across those jumps with vertical lines we get the following visualization of the graph of $f$:

![squareWave.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/squareWave.png)

Based on this image, it's reasonable to call this graph a "rectangular wave", but for some reason the descriptor "square wave" is more popular.

In any case, let's compute the complex Fourier series associated to this function $f$. We first compute

$$\hat{f}(0)=\int_0^1 f(t)\operatorname{d}t = \int_{0}^{\frac{1}{2}} 1\operatorname{d}t +\int_{\frac{1}{2}}^1 -1\operatorname{d}t = 0.$$

For $n\neq 0$ we compute

$$\begin{align*}
\hat{f}(n) &= \int_0^1 f(t)e^{-2\pi int}\operatorname{d} t\\
&= \int_0^{\frac{1}{2}} e^{-2\pi int}\operatorname{d}t -\int_{\frac{1}{2}}^1 e^{-2\pi int}\operatorname{d} t\\
&= -\frac{1}{2\pi in} \left(e^{-\pi in}-1\right)+\frac{1}{2\pi in}\left(e^{-2\pi in}-e^{-\pi in}\right)\\
&= \frac{1}{\pi in}\left(1-e^{-\pi in}\right)\\
&= \frac{1}{\pi in}\left(1-(-1)^n\right)\\
&= \begin{cases}0,&\text{ if }n\text{ even}\\\frac{2}{\pi in},&\text{ if }n\text{ odd}\end{cases}
\end{align*}$$

Note that we computed the integrals using $u$-substitutions, and simplified some expressions using the facts that $e^{2\pi ik}=1$ whenever $k$ is an integer, while $e^{\pi i k}$ is $1$ when $k$ is even and $-1$ when $k$ is odd; i.e., $e^{\pi ik}=(-1)^k$.

It follows that that Fourier series associated to our function $f$ is

$$\begin{align*}
\sum_{n=-\infty}^{\infty} \hat{f}(n)e^{2\pi int} &= \sum_{n\text{ odd}}\frac{2}{\pi in}e^{2\pi int}\\
&= \cdots -\frac{2}{\pi i\cdot 3}e^{-6\pi it}-\frac{2}{\pi i}e^{-2\pi it}+\frac{2}{\pi i}e^{2\pi it}+\frac{2}{\pi i\cdot 3}e^{6\pi it}+\cdots 
\end{align*}$$

If we group together the term at index $n$ with the term at index $-n$ and use the identity $e^{2\pi int}-e^{-2\pi int} = 2i\sin(2\pi nt)$, we can rewrite the above series in the sines-and-cosines form as

$$\sum_{n\text{ odd}} \frac{2}{\pi in}e^{2\pi int} = \sum_{\text{odd }n>0} \frac{4}{n\pi}\sin(2\pi nt)$$

### Some Fourier approximations

Let's truncate our Fourier series after various amounts of terms and see how well the corresponding finite Fourier series approximates our function $f$. If we only use the first term, the finite Fourier series we obtain is

$$S_1(t) = \frac{4}{\pi}\sin(2\pi t),$$

whose graph is 

![squareWave1.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/squareWave1.png)

If we truncate instead at $N=9$ (i.e., include all terms with $n\leq 9$), the finite Fourier series we obtain is

$$S_9(t) = \frac{4}{\pi}\sin(2\pi t)+\frac{4}{3\pi}\sin(6\pi t)+\frac{4}{5\pi}\sin(10\pi t)+\frac{4}{7\pi}\sin(14\pi t)+\frac{4}{9\pi}\sin(18\pi t),$$

whose graph is

![squareWave9.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/squareWave9.png)

Finally, if we truncate our series at $N=99$, the graph of the corresponding finite Fourier series we obtain is

![squareWave99.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/squareWave99.png)


Although our "Fourier approximations" appear to be converging quickly to the original square wave, you might notice those weird little "peaks" at the corners of each wave. There's something a little surprising going on here, but we'll hold off on investigating further until after our next example.

## Example: A triangular wave
---

 Now $f(t)$ denote the "triangle wave" function, which is periodic with period 1 and is defined on $[0,1)$ by

$$f(t)=\begin{cases}t,& 0\leq t<\frac{1}{2} \\ 1-t,& \frac{1}{2}\leq t<1 \end{cases}$$

As you can see from the graph, it seems reasonable to call this function a "triangle wave":

![triangleWave.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/triangleWave.png)

We first compute

$$\hat{f}(0)=\int_0^1 f(t)\,\operatorname{d} t = \int_0^{1/2} t\operatorname{d} t+\int_{1/2}^1(1-t)\,\operatorname{d} t = \frac{1}{4}.$$

For $n\neq 0$, we have

$$\hat{f}(n)=\int_0^1 f(t)e^{-2\pi int}\,\operatorname{d} t = \int_0^{1/2}te^{-2\pi int}\,\operatorname{d} t+\int_{1/2}^1 (1-t)e^{-2\pi int}\,\operatorname{d} t.$$


To compute these, we make the substitution $u=-2\pi int$ (so $\operatorname{d} u=-2\pi in\,\operatorname{d} t$) and use integration by parts, obtaining

$$\begin{align*}
\hat{f}(n)&= -\frac{1}{4\pi n^2}\int_0^{-\pi in} ue^u\,\operatorname{d} u-\frac{1}{2\pi in}\int_{-\pi in}^{-2\pi in}e^u\,\operatorname{d} u+\frac{1}{4\pi^2n^2}\int_{-\pi in}^{-2\pi in}ue^u\,\operatorname{d} u\\
&= -\frac{1}{4\pi^2n^2}\left[ue^u-e^u\right]_0^{-\pi in}+\frac{i}{2\pi n}\left[e^u\right]_{-\pi in}^{-2\pi in}+\frac{1}{4\pi^2n^2}\left[ue^u-e^u\right]_{-\pi in}^{-2\pi in}\\
&= -\frac{1}{4\pi^2n^2}\left(-\pi ine^{-\pi in}-e^{-\pi in}+1\right)+\frac{i}{2\pi n}\left(e^{-2\pi in}-e^{-\pi in}\right)\\
&\quad +\frac{1}{4\pi^2n^2}\left(-2\pi ine^{-2\pi in}-e^{-2\pi in}+\pi ine^{-\pi in}+e^{-\pi in}\right)
\end{align*}$$

To simplify this mess, recall that $e^{-2\pi in}=1$ for all $n$, and that $e^{-\pi in}=\left(e^{-\pi i}\right)^n = (-1)^n$. So when $n$ is even, the above expression simplifies to

$$\begin{align*}
            \hat{f}(n)&= -\frac{1}{4\pi^2n^2}(-\pi in-1+1)+\frac{i}{2\pi n}(1-1)+\frac{1}{4\pi^2n^2}(-2\pi in-1+\pi in+1)\\
            &= 0.
\end{align*}$$

When $n$ is odd, the expression instead simplifies to

$$\begin{align*}
            \hat{f}(n)&= -\frac{1}{4\pi^2n^2}(\pi in+1+1)+\frac{i}{2\pi n}(1+1)+\frac{1}{4\pi^2n^2}(-2\pi in-1-\pi in-1)\\
            &= -\frac{1}{\pi^2n^2}.
\end{align*}$$

We've shown that the Fourier series for $f(t)$ is

$$\begin{align*}
\sum_{n=-\infty}^{\infty}\hat{f}(n)e^{2\pi int}&=\frac{1}{4}-\frac{1}{\pi^2}\sum_{\text{odd }n}\frac{1}{n^2}e^{2\pi int}\\
&= \frac{1}{4}-\frac{1}{\pi^2}\sum_{\text{odd }n> 0}\left(\frac{1}{n^2}e^{2\pi int}+\frac{1}{(-n)^2}e^{2\pi i(-n)t}\right)\\
&= \frac{1}{4}-\frac{1}{\pi^2}\sum_{\text{odd }n> 0}\frac{1}{n^2}\left(e^{2\pi int}+e^{-2\pi int}\right)\\
&= \frac{1}{4}-\frac{2}{\pi^2}\sum_{\text{odd }n>0}\frac{1}{n^2}\cos(2\pi nt).
\end{align*}$$

### Some Fourier approximations

As with the square wave, we can get a sense for how quickly our Fourier series is converging to the original function by looking at some Fourier approximations with increasingly larger $N$ values (i.e., more and more terms included). Here are the graphs of those approximations when $N=1, 9$ and $99$, this time with the original graph overlaid for visual comparison:

![triangleWave1.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/triangleWave1.png)

![triangleWave9.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/triangleWave9.png)


![triangleWave99.png|600](/img/user/90-99%20Meta/91%20Images/Differential%20equations/triangleWave99.png)

## Initial observations
---

*Coming soon*

## Suggested next notes
---

*Coming soon*
