---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/study-guides/study-guide-for-final-exam/","updated":"2025-12-10T07:51:09-08:00"}
---

# Module Theory Problems

## Problem 1


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R$ is a ring, $M$ is a left $R$-module and $N_1\subseteq N_2\subseteq \cdots$ is an ascending chain of submodules of $M$. Prove that the set $\displaystyle \bigcup_{i=1}^{\infty} N_i$ is a submodule of $M$.

</div></div>


---

## Problem 2


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $R$ be a ring, $M_1$ and $M_2$ be left $R$-modules, and $A_1\subseteq M_1$ and $A_2\subseteq M_2$ be submodules. Prove that $A_1\bigoplus A_2$ is (isomorphic to) a submodule of $M_1\bigoplus M_2$ and that there is an $R$-module isomorphism

$\left(M_1\bigoplus M_2\right)/\left(A_1\bigoplus A_2\right)\simeq \left(M_1/A_1\right)\bigoplus \left(M_2/A_2\right).$

</div></div>


---

## Problem 3


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R$ is a PID and $M$ is an $R$-module annihilated by a nonzero proper ideal $\langle a\rangle\subset R$. Let $a=p_1^{\alpha_1}\cdots p_k^{\alpha_k}$ be the prime factorization of $a$ in $R$, and let $M_i=\{m\in M\mid p_i^{\alpha_i}m=0\}$ be the annihilator of $p_i^{\alpha_i}$ in $M$. Prove that there is a direct sum $R$-module decomposition

$M=M_1\bigoplus \cdots \bigoplus M_k.$

The submodule $M_i$ is called the **$p_i$-primary component of $M$**.

>[!summary]- Hints
>Use induction on $k$ (the number of distinct prime factors). First note that $M_i$ is the annihilator of the ideal $\langle p_i^{\alpha_i}\rangle\subseteq R$, so by a [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercise Solutions/Annihilators - Solution\|previous exercise]] it is a submodule of $M$. Show that $M=M_1\oplus N$, where $N$ is the annihilator of the ideal $\langle b\rangle\subseteq R$, where $b=\frac{a}{p_1^{\alpha_1}}$. (Note that $b$ and $p_1^{\alpha_1}$ are relatively prime in $R$, so one has $rb+sp_1^{\alpha_1}=1_R$ for some $r,s\in R$.)
>
>A minor note: you should verify that the annihilator in $N$ of $\langle p_i^{\alpha_i}\rangle$ is the same as the annihilator in $M$ of $\langle p_i^{\alpha_i}\rangle$.


</div></div>


---

## Problem 4


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




 Let $A$ be an abelian group of order $n=p_1^{m_1}\cdots p_k^{m_k}>1$. It is a fact that for each prime divisor $p_i$ of $n$ the Sylow $p_i$-subgroup of $A$ is $A_{p_i} = \{a\in A\mid p_i^{m_i}\cdot a = 0_A\}$.
 1. Prove that $A \simeq A_{p_1}\bigoplus \cdots \bigoplus A_{p_k}$.
 2. Prove that for each prime $p_i$ we have ${\bf Z}_{p_i^{m_i}}\bigotimes_{\bf Z} A\simeq A_{p_i}$.

</div></div>


---

## Problem 5


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Prove there is a ring isomorphism $\textbf{R}\bigotimes_{\textbf{Z}} \textbf{Z}[i]\simeq \textbf{C}$.

</div></div>


---

## Problem 6


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R$ is an integral domain and $I\subseteq R$ is a principal ideal. Prove that the $R$-module $I\bigotimes_R I$ has no nonzero torsion elements.

>[!summary]- Hints
>One option is to prove $I\bigotimes_R I\simeq R$ as $R$-modules. (Since $R$ is an integral domain it is torsion free as an $R$-module, so this proves the desired result.) To establish the desired isomorphism, let $a$ be a generator for $I$ and define the set map $I\times I\to R$ by $(ra,sa)\mapsto rs$. Verify the necessary properties to conclude that the map $I\bigotimes_R I\to R$ defined on simple tensors by $ra\otimes sa\mapsto rs$ is a well-defined $R$-module morphism. Then show that the $R$-module morphism $R\to I\bigotimes_R I$ defined by $r\mapsto r(a\otimes a)=(ra)\otimes a = a\otimes ra$ is the inverse morphism.
>
>You could also try a direct approach, but be wary of the following trap: it's very difficult to decide when a tensor equals zero. In other words, if $m\otimes n$ is zero in some tensor product $M\bigotimes_R N$, there is in general no easy deduction one can make about $m$ or $n$. (The only general conclusion one can make is that for every balanced bilinear map $g:M\times N\to P$ one has $g(m,n)=0$.)

</div></div>



---

## Problem 7


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Find all possible rational canonical forms of $6\times 6$ matrices over ${\bf Q}$ with characteristic polynomial $c(x)=x^2(x^2+1)^2$.

</div></div>


---

## Problem 8


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Determine the Jordan canonical form for the $n\times n$ matrix over $\textbf{Q}$ whose entries are all equal to $1$.

</div></div>


---

## Problem 9


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Prove there are no $3\times 3$ matrices $A$ over ${\bf Q}$ of order 8.

</div></div>


---

## Problem 10


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Determine all similarity classes of $2\times 2$ matrices over $\textbf{Q}$ of order $4$.

</div></div>


---

# Category Theory Problems


## Problem 11


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $C$ is a category and $f,g:a\to b$ are parallel arrows in $C$ for which an equalizer $\operatorname{Eq}(f,g)\xrightarrow{e} a$ exists. Prove that the arrow $e$ is a [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Special morphisms#Monomorphisms\|monomorphism]] in $C$.

</div></div>



---

## Problem 12



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $C$ is a category and $f,g:a\to b$ are parallel arrows in $C$ for which a coequalizer $b\xrightarrow{h} \operatorname{Coeq}(f,g)$ exists. Prove that the arrow $h$ is an [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Special morphisms#Epimorphisms\|epimorphism]] in $C$.

</div></div>


---

## Problem 13


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $C$ be a category, let $i_C:{\bf 0}\to C$ denote the unique functor from the initial category ${\bf 0}$ to $C$, and let  $z:{\bf 0}\to {\bf 1}$ denote the unique functor from the initial category ${\bf 0}$ to the terminal category ${\bf 1}$.

Show that the right Kan extension of $i_C$ along $z$ exists if and only if $C$ has an terminal object, and that when either exists the functor $\operatorname{Ran}_z(i_C):{\bf 1}\to C$ is the functor corresponding to the terminal object under the equivalence $C^{\bf 1}\simeq C$.

</div></div>



---

## Problem 14


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $X=\{x_1,x_2,\ldots \}$ be any infinite countable set and let $M=F(X)$ be the free ${\bf Z}$-module (i.e., free abelian group) on $X$. Consider the following four set maps from $X$ to $M$, where for simplicity we simply list the images of the elements of $X$:
$\begin{align*}
\phi_1:& (x_1,x_2,x_3,\ldots )\mapsto (x_1,x_3,x_5,\ldots)\\
\phi_2:& (x_1,x_2,x_3,\ldots )\mapsto (x_2,x_4,x_6,\ldots)\\
\psi_1:& (x_1,x_2,x_3,\ldots )\mapsto (x_1,0,x_2,0,\ldots)\\
\psi_2:& (x_1,x_2,x_3,\ldots )\mapsto (0,x_1,0,x_2,\ldots)\\
\end{align*}$
Let $i_1, i_2, p_1, p_2:M\to M$ be the corresponding ${\bf Z}$-module morphisms.
1. Prove that the diagram below is a biproduct diagram in ${\bf Ab}$:
   
   <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 221.58798878929935 63.0229257403399" width="250" height="63.0229257403399" class="excalidraw-svg"><symbol id="image-3356b5df3d35a02ea6abfd12eddc530e58a720ee"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjMzOWV4OyIgd2lkdGg9IjI3LjY4IiBoZWlnaHQ9IjE4LjM1IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTY2MSA3ODEuNiA4MTEiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMjctVEVYLUktMUQ0NTYiIGQ9Ik0xODQgNjAwUTE4NCA2MjQgMjAzIDY0MlQyNDcgNjYxUTI2NSA2NjEgMjc3IDY0OVQyOTAgNjE5UTI5MCA1OTYgMjcwIDU3N1QyMjYgNTU3UTIxMSA1NTcgMTk4IDU2N1QxODQgNjAwWk0yMSAyODdRMjEgMjk1IDMwIDMxOFQ1NCAzNjlUOTggNDIwVDE1OCA0NDJRMTk3IDQ0MiAyMjMgNDE5VDI1MCAzNTdRMjUwIDM0MCAyMzYgMzAxVDE5NiAxOTZUMTU0IDgzUTE0OSA2MSAxNDkgNTFRMTQ5IDI2IDE2NiAyNlExNzUgMjYgMTg1IDI5VDIwOCA0M1QyMzUgNzhUMjYwIDEzN1EyNjMgMTQ5IDI2NSAxNTFUMjgyIDE1M1EzMDIgMTUzIDMwMiAxNDNRMzAyIDEzNSAyOTMgMTEyVDI2OCA2MVQyMjMgMTFUMTYxIC0xMVExMjkgLTExIDEwMiAxMFQ3NCA3NFE3NCA5MSA3OSAxMDZUMTIyIDIyMFExNjAgMzIxIDE2NiAzNDFUMTczIDM4MFExNzMgNDA0IDE1NiA0MDRIMTU0UTEyNCA0MDQgOTkgMzcxVDYxIDI4N1E2MCAyODYgNTkgMjg0VDU4IDI4MVQ1NiAyNzlUNTMgMjc4VDQ5IDI3OFQ0MSAyNzhIMjdRMjEgMjg0IDIxIDI4N1oiLz48cGF0aCBpZD0iTUpYLTI3LVRFWC1OLTMyIiBkPSJNMTA5IDQyOVE4MiA0MjkgNjYgNDQ3VDUwIDQ5MVE1MCA1NjIgMTAzIDYxNFQyMzUgNjY2UTMyNiA2NjYgMzg3IDYxMFQ0NDkgNDY1UTQ0OSA0MjIgNDI5IDM4M1QzODEgMzE1VDMwMSAyNDFRMjY1IDIxMCAyMDEgMTQ5TDE0MiA5M0wyMTggOTJRMzc1IDkyIDM4NSA5N1EzOTIgOTkgNDA5IDE4NlYxODlINDQ5VjE4NlE0NDggMTgzIDQzNiA5NVQ0MjEgM1YwSDUwVjE5VjMxUTUwIDM4IDU2IDQ2VDg2IDgxUTExNSAxMTMgMTM2IDEzN1ExNDUgMTQ3IDE3MCAxNzRUMjA0IDIxMVQyMzMgMjQ0VDI2MSAyNzhUMjg0IDMwOFQzMDUgMzQwVDMyMCAzNjlUMzMzIDQwMVQzNDAgNDMxVDM0MyA0NjRRMzQzIDUyNyAzMDkgNTczVDIxMiA2MTlRMTc5IDYxOSAxNTQgNjAyVDExOSA1NjlUMTA5IDU1MFExMDkgNTQ5IDExNCA1NDlRMTMyIDU0OSAxNTEgNTM1VDE3MCA0ODlRMTcwIDQ2NCAxNTQgNDQ3VDEwOSA0MjlaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibXN1YiI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ1NiIgeGxpbms6aHJlZj0iI01KWC0yNy1URVgtSS0xRDQ1NiIvPjwvZz48ZyBkYXRhLW1tbC1ub2RlPSJtbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc4LC0xNTApIHNjYWxlKDAuNzA3KSI+PHVzZSBkYXRhLWM9IjMyIiB4bGluazpocmVmPSIjTUpYLTI3LVRFWC1OLTMyIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-5fb41a7d554c51e99028f86d676b437e31eb345c"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjMzOWV4OyIgd2lkdGg9IjI3LjY4IiBoZWlnaHQ9IjE4LjM1IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTY2MSA3ODEuNiA4MTEiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMjYtVEVYLUktMUQ0NTYiIGQ9Ik0xODQgNjAwUTE4NCA2MjQgMjAzIDY0MlQyNDcgNjYxUTI2NSA2NjEgMjc3IDY0OVQyOTAgNjE5UTI5MCA1OTYgMjcwIDU3N1QyMjYgNTU3UTIxMSA1NTcgMTk4IDU2N1QxODQgNjAwWk0yMSAyODdRMjEgMjk1IDMwIDMxOFQ1NCAzNjlUOTggNDIwVDE1OCA0NDJRMTk3IDQ0MiAyMjMgNDE5VDI1MCAzNTdRMjUwIDM0MCAyMzYgMzAxVDE5NiAxOTZUMTU0IDgzUTE0OSA2MSAxNDkgNTFRMTQ5IDI2IDE2NiAyNlExNzUgMjYgMTg1IDI5VDIwOCA0M1QyMzUgNzhUMjYwIDEzN1EyNjMgMTQ5IDI2NSAxNTFUMjgyIDE1M1EzMDIgMTUzIDMwMiAxNDNRMzAyIDEzNSAyOTMgMTEyVDI2OCA2MVQyMjMgMTFUMTYxIC0xMVExMjkgLTExIDEwMiAxMFQ3NCA3NFE3NCA5MSA3OSAxMDZUMTIyIDIyMFExNjAgMzIxIDE2NiAzNDFUMTczIDM4MFExNzMgNDA0IDE1NiA0MDRIMTU0UTEyNCA0MDQgOTkgMzcxVDYxIDI4N1E2MCAyODYgNTkgMjg0VDU4IDI4MVQ1NiAyNzlUNTMgMjc4VDQ5IDI3OFQ0MSAyNzhIMjdRMjEgMjg0IDIxIDI4N1oiLz48cGF0aCBpZD0iTUpYLTI2LVRFWC1OLTMxIiBkPSJNMjEzIDU3OEwyMDAgNTczUTE4NiA1NjggMTYwIDU2M1QxMDIgNTU2SDgzVjYwMkgxMDJRMTQ5IDYwNCAxODkgNjE3VDI0NSA2NDFUMjczIDY2M1EyNzUgNjY2IDI4NSA2NjZRMjk0IDY2NiAzMDIgNjYwVjM2MUwzMDMgNjFRMzEwIDU0IDMxNSA1MlQzMzkgNDhUNDAxIDQ2SDQyN1YwSDQxNlEzOTUgMyAyNTcgM1ExMjEgMyAxMDAgMEg4OFY0NkgxMTRRMTM2IDQ2IDE1MiA0NlQxNzcgNDdUMTkzIDUwVDIwMSA1MlQyMDcgNTdUMjEzIDYxVjU3OFoiLz48L2RlZnM+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIj48ZyBkYXRhLW1tbC1ub2RlPSJtYXRoIj48ZyBkYXRhLW1tbC1ub2RlPSJtc3ViIj48ZyBkYXRhLW1tbC1ub2RlPSJtaSI+PHVzZSBkYXRhLWM9IjFENDU2IiB4bGluazpocmVmPSIjTUpYLTI2LVRFWC1JLTFENDU2Ii8+PC9nPjxnIGRhdGEtbW1sLW5vZGU9Im1uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzgsLTE1MCkgc2NhbGUoMC43MDcpIj48dXNlIGRhdGEtYz0iMzEiIHhsaW5rOmhyZWY9IiNNSlgtMjYtVEVYLU4tMzEiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-abff1f3186fdc1b74897a22884f69884cab5fc8a"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQzOWV4OyIgd2lkdGg9IjIxLjI2IiBoZWlnaHQ9IjE0LjM5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTQ0MiA5MzkuNiA2MzYiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMjUtVEVYLUktMUQ0NUQiIGQ9Ik0yMyAyODdRMjQgMjkwIDI1IDI5NVQzMCAzMTdUNDAgMzQ4VDU1IDM4MVQ3NSA0MTFUMTAxIDQzM1QxMzQgNDQyUTIwOSA0NDIgMjMwIDM3OEwyNDAgMzg3UTMwMiA0NDIgMzU4IDQ0MlE0MjMgNDQyIDQ2MCAzOTVUNDk3IDI4MVE0OTcgMTczIDQyMSA4MlQyNDkgLTEwUTIyNyAtMTAgMjEwIC00UTE5OSAxIDE4NyAxMVQxNjggMjhMMTYxIDM2UTE2MCAzNSAxMzkgLTUxVDExOCAtMTM4UTExOCAtMTQ0IDEyNiAtMTQ1VDE2MyAtMTQ4SDE4OFExOTQgLTE1NSAxOTQgLTE1N1QxOTEgLTE3NVExODggLTE4NyAxODUgLTE5MFQxNzIgLTE5NFExNzAgLTE5NCAxNjEgLTE5NFQxMjcgLTE5M1Q2NSAtMTkyUS01IC0xOTIgLTI0IC0xOTRILTMyUS0zOSAtMTg3IC0zOSAtMTgzUS0zNyAtMTU2IC0yNiAtMTQ4SC02UTI4IC0xNDcgMzMgLTEzNlEzNiAtMTMwIDk0IDEwM1QxNTUgMzUwUTE1NiAzNTUgMTU2IDM2NFExNTYgNDA1IDEzMSA0MDVRMTA5IDQwNSA5NCAzNzdUNzEgMzE2VDU5IDI4MFE1NyAyNzggNDMgMjc4SDI5UTIzIDI4NCAyMyAyODdaTTE3OCAxMDJRMjAwIDI2IDI1MiAyNlEyODIgMjYgMzEwIDQ5VDM1NiAxMDdRMzc0IDE0MSAzOTIgMjE1VDQxMSAzMjVWMzMxUTQxMSA0MDUgMzUwIDQwNVEzMzkgNDA1IDMyOCA0MDJUMzA2IDM5M1QyODYgMzgwVDI2OSAzNjVUMjU0IDM1MFQyNDMgMzM2VDIzNSAzMjZMMjMyIDMyMlEyMzIgMzIxIDIyOSAzMDhUMjE4IDI2NFQyMDQgMjEyUTE3OCAxMDYgMTc4IDEwMloiLz48cGF0aCBpZD0iTUpYLTI1LVRFWC1OLTMyIiBkPSJNMTA5IDQyOVE4MiA0MjkgNjYgNDQ3VDUwIDQ5MVE1MCA1NjIgMTAzIDYxNFQyMzUgNjY2UTMyNiA2NjYgMzg3IDYxMFQ0NDkgNDY1UTQ0OSA0MjIgNDI5IDM4M1QzODEgMzE1VDMwMSAyNDFRMjY1IDIxMCAyMDEgMTQ5TDE0MiA5M0wyMTggOTJRMzc1IDkyIDM4NSA5N1EzOTIgOTkgNDA5IDE4NlYxODlINDQ5VjE4NlE0NDggMTgzIDQzNiA5NVQ0MjEgM1YwSDUwVjE5VjMxUTUwIDM4IDU2IDQ2VDg2IDgxUTExNSAxMTMgMTM2IDEzN1ExNDUgMTQ3IDE3MCAxNzRUMjA0IDIxMVQyMzMgMjQ0VDI2MSAyNzhUMjg0IDMwOFQzMDUgMzQwVDMyMCAzNjlUMzMzIDQwMVQzNDAgNDMxVDM0MyA0NjRRMzQzIDUyNyAzMDkgNTczVDIxMiA2MTlRMTc5IDYxOSAxNTQgNjAyVDExOSA1NjlUMTA5IDU1MFExMDkgNTQ5IDExNCA1NDlRMTMyIDU0OSAxNTEgNTM1VDE3MCA0ODlRMTcwIDQ2NCAxNTQgNDQ3VDEwOSA0MjlaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibXN1YiI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ1RCIgeGxpbms6aHJlZj0iI01KWC0yNS1URVgtSS0xRDQ1RCIvPjwvZz48ZyBkYXRhLW1tbC1ub2RlPSJtbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTM2LC0xNTApIHNjYWxlKDAuNzA3KSI+PHVzZSBkYXRhLWM9IjMyIiB4bGluazpocmVmPSIjTUpYLTI1LVRFWC1OLTMyIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-09a34f2d40e788af4e752840113bf2b1ab460677"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQzOWV4OyIgd2lkdGg9IjIxLjI2IiBoZWlnaHQ9IjE0LjM5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTQ0MiA5MzkuNiA2MzYiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMjQtVEVYLUktMUQ0NUQiIGQ9Ik0yMyAyODdRMjQgMjkwIDI1IDI5NVQzMCAzMTdUNDAgMzQ4VDU1IDM4MVQ3NSA0MTFUMTAxIDQzM1QxMzQgNDQyUTIwOSA0NDIgMjMwIDM3OEwyNDAgMzg3UTMwMiA0NDIgMzU4IDQ0MlE0MjMgNDQyIDQ2MCAzOTVUNDk3IDI4MVE0OTcgMTczIDQyMSA4MlQyNDkgLTEwUTIyNyAtMTAgMjEwIC00UTE5OSAxIDE4NyAxMVQxNjggMjhMMTYxIDM2UTE2MCAzNSAxMzkgLTUxVDExOCAtMTM4UTExOCAtMTQ0IDEyNiAtMTQ1VDE2MyAtMTQ4SDE4OFExOTQgLTE1NSAxOTQgLTE1N1QxOTEgLTE3NVExODggLTE4NyAxODUgLTE5MFQxNzIgLTE5NFExNzAgLTE5NCAxNjEgLTE5NFQxMjcgLTE5M1Q2NSAtMTkyUS01IC0xOTIgLTI0IC0xOTRILTMyUS0zOSAtMTg3IC0zOSAtMTgzUS0zNyAtMTU2IC0yNiAtMTQ4SC02UTI4IC0xNDcgMzMgLTEzNlEzNiAtMTMwIDk0IDEwM1QxNTUgMzUwUTE1NiAzNTUgMTU2IDM2NFExNTYgNDA1IDEzMSA0MDVRMTA5IDQwNSA5NCAzNzdUNzEgMzE2VDU5IDI4MFE1NyAyNzggNDMgMjc4SDI5UTIzIDI4NCAyMyAyODdaTTE3OCAxMDJRMjAwIDI2IDI1MiAyNlEyODIgMjYgMzEwIDQ5VDM1NiAxMDdRMzc0IDE0MSAzOTIgMjE1VDQxMSAzMjVWMzMxUTQxMSA0MDUgMzUwIDQwNVEzMzkgNDA1IDMyOCA0MDJUMzA2IDM5M1QyODYgMzgwVDI2OSAzNjVUMjU0IDM1MFQyNDMgMzM2VDIzNSAzMjZMMjMyIDMyMlEyMzIgMzIxIDIyOSAzMDhUMjE4IDI2NFQyMDQgMjEyUTE3OCAxMDYgMTc4IDEwMloiLz48cGF0aCBpZD0iTUpYLTI0LVRFWC1OLTMxIiBkPSJNMjEzIDU3OEwyMDAgNTczUTE4NiA1NjggMTYwIDU2M1QxMDIgNTU2SDgzVjYwMkgxMDJRMTQ5IDYwNCAxODkgNjE3VDI0NSA2NDFUMjczIDY2M1EyNzUgNjY2IDI4NSA2NjZRMjk0IDY2NiAzMDIgNjYwVjM2MUwzMDMgNjFRMzEwIDU0IDMxNSA1MlQzMzkgNDhUNDAxIDQ2SDQyN1YwSDQxNlEzOTUgMyAyNTcgM1ExMjEgMyAxMDAgMEg4OFY0NkgxMTRRMTM2IDQ2IDE1MiA0NlQxNzcgNDdUMTkzIDUwVDIwMSA1MlQyMDcgNTdUMjEzIDYxVjU3OFoiLz48L2RlZnM+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIj48ZyBkYXRhLW1tbC1ub2RlPSJtYXRoIj48ZyBkYXRhLW1tbC1ub2RlPSJtc3ViIj48ZyBkYXRhLW1tbC1ub2RlPSJtaSI+PHVzZSBkYXRhLWM9IjFENDVEIiB4bGluazpocmVmPSIjTUpYLTI0LVRFWC1JLTFENDVEIi8+PC9nPjxnIGRhdGEtbW1sLW5vZGU9Im1uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzYsLTE1MCkgc2NhbGUoMC43MDcpIj48dXNlIGRhdGEtYz0iMzEiIHhsaW5rOmhyZWY9IiNNSlgtMjQtVEVYLU4tMzEiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-b5934a70b2753ceb2eb145a2a926d07811b88bf6"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjMuNzgiIGhlaWdodD0iMTUuNDUiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjgzIDEwNTEgNjgzIj48ZGVmcz48cGF0aCBpZD0iTUpYLTIzLVRFWC1JLTFENDQwIiBkPSJNMjg5IDYyOVEyODkgNjM1IDIzMiA2MzdRMjA4IDYzNyAyMDEgNjM4VDE5NCA2NDhRMTk0IDY0OSAxOTYgNjU5UTE5NyA2NjIgMTk4IDY2NlQxOTkgNjcxVDIwMSA2NzZUMjAzIDY3OVQyMDcgNjgxVDIxMiA2ODNUMjIwIDY4M1QyMzIgNjg0UTIzOCA2ODQgMjYyIDY4NFQzMDcgNjgzUTM4NiA2ODMgMzk4IDY4M1Q0MTQgNjc4UTQxNSA2NzQgNDUxIDM5Nkw0ODcgMTE3TDUxMCAxNTRRNTM0IDE5MCA1NzQgMjU0VDY2MiAzOTRRODM3IDY3MyA4MzkgNjc1UTg0MCA2NzYgODQyIDY3OFQ4NDYgNjgxTDg1MiA2ODNIOTQ4UTk2NSA2ODMgOTg4IDY4M1QxMDE3IDY4NFExMDUxIDY4NCAxMDUxIDY3M1ExMDUxIDY2OCAxMDQ4IDY1NlQxMDQ1IDY0M1ExMDQxIDYzNyAxMDA4IDYzN1E5NjggNjM2IDk1NyA2MzRUOTM5IDYyM1E5MzYgNjE4IDg2NyAzNDBUNzk3IDU5UTc5NyA1NSA3OTggNTRUODA1IDUwVDgyMiA0OFQ4NTUgNDZIODg2UTg5MiAzNyA4OTIgMzVRODkyIDE5IDg4NSA1UTg4MCAwIDg2OSAwUTg2NCAwIDgyOCAxVDczNiAyUTY3NSAyIDY0NCAyVDYwOSAxUTU5MiAxIDU5MiAxMVE1OTIgMTMgNTk0IDI1UTU5OCA0MSA2MDIgNDNUNjI1IDQ2UTY1MiA0NiA2ODUgNDlRNjk5IDUyIDcwNCA2MVE3MDYgNjUgNzQyIDIwN1Q4MTMgNDkwVDg0OCA2MzFMNjU0IDMyMlE0NTggMTAgNDUzIDVRNDUxIDQgNDQ5IDNRNDQ0IDAgNDMzIDBRNDE4IDAgNDE1IDdRNDEzIDExIDM3NCAzMTdMMzM1IDYyNEwyNjcgMzU0UTIwMCA4OCAyMDAgNzlRMjA2IDQ2IDI3MiA0NkgyODJRMjg4IDQxIDI4OSAzN1QyODYgMTlRMjgyIDMgMjc4IDFRMjc0IDAgMjY3IDBRMjY1IDAgMjU1IDBUMjIxIDFUMTU3IDJRMTI3IDIgOTUgMVQ1OCAwUTQzIDAgMzkgMlQzNSAxMVEzNSAxMyAzOCAyNVQ0MyA0MFE0NSA0NiA2NSA0NlExMzUgNDYgMTU0IDg2UTE1OCA5MiAyMjMgMzU0VDI4OSA2MjlaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ0MCIgeGxpbms6aHJlZj0iI01KWC0yMy1URVgtSS0xRDQ0MCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-a550b3a9fd1c843c0426b15bf88b6ed048d21879"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjMuNzgiIGhlaWdodD0iMTUuNDUiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjgzIDEwNTEgNjgzIj48ZGVmcz48cGF0aCBpZD0iTUpYLTIyLVRFWC1JLTFENDQwIiBkPSJNMjg5IDYyOVEyODkgNjM1IDIzMiA2MzdRMjA4IDYzNyAyMDEgNjM4VDE5NCA2NDhRMTk0IDY0OSAxOTYgNjU5UTE5NyA2NjIgMTk4IDY2NlQxOTkgNjcxVDIwMSA2NzZUMjAzIDY3OVQyMDcgNjgxVDIxMiA2ODNUMjIwIDY4M1QyMzIgNjg0UTIzOCA2ODQgMjYyIDY4NFQzMDcgNjgzUTM4NiA2ODMgMzk4IDY4M1Q0MTQgNjc4UTQxNSA2NzQgNDUxIDM5Nkw0ODcgMTE3TDUxMCAxNTRRNTM0IDE5MCA1NzQgMjU0VDY2MiAzOTRRODM3IDY3MyA4MzkgNjc1UTg0MCA2NzYgODQyIDY3OFQ4NDYgNjgxTDg1MiA2ODNIOTQ4UTk2NSA2ODMgOTg4IDY4M1QxMDE3IDY4NFExMDUxIDY4NCAxMDUxIDY3M1ExMDUxIDY2OCAxMDQ4IDY1NlQxMDQ1IDY0M1ExMDQxIDYzNyAxMDA4IDYzN1E5NjggNjM2IDk1NyA2MzRUOTM5IDYyM1E5MzYgNjE4IDg2NyAzNDBUNzk3IDU5UTc5NyA1NSA3OTggNTRUODA1IDUwVDgyMiA0OFQ4NTUgNDZIODg2UTg5MiAzNyA4OTIgMzVRODkyIDE5IDg4NSA1UTg4MCAwIDg2OSAwUTg2NCAwIDgyOCAxVDczNiAyUTY3NSAyIDY0NCAyVDYwOSAxUTU5MiAxIDU5MiAxMVE1OTIgMTMgNTk0IDI1UTU5OCA0MSA2MDIgNDNUNjI1IDQ2UTY1MiA0NiA2ODUgNDlRNjk5IDUyIDcwNCA2MVE3MDYgNjUgNzQyIDIwN1Q4MTMgNDkwVDg0OCA2MzFMNjU0IDMyMlE0NTggMTAgNDUzIDVRNDUxIDQgNDQ5IDNRNDQ0IDAgNDMzIDBRNDE4IDAgNDE1IDdRNDEzIDExIDM3NCAzMTdMMzM1IDYyNEwyNjcgMzU0UTIwMCA4OCAyMDAgNzlRMjA2IDQ2IDI3MiA0NkgyODJRMjg4IDQxIDI4OSAzN1QyODYgMTlRMjgyIDMgMjc4IDFRMjc0IDAgMjY3IDBRMjY1IDAgMjU1IDBUMjIxIDFUMTU3IDJRMTI3IDIgOTUgMVQ1OCAwUTQzIDAgMzkgMlQzNSAxMVEzNSAxMyAzOCAyNVQ0MyA0MFE0NSA0NiA2NSA0NlExMzUgNDYgMTU0IDg2UTE1OCA5MiAyMjMgMzU0VDI4OSA2MjlaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ0MCIgeGxpbms6aHJlZj0iI01KWC0yMi1URVgtSS0xRDQ0MCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-86c14e601916a042fc0b26809317a988c822c425"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjMuNzgiIGhlaWdodD0iMTUuNDUiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjgzIDEwNTEgNjgzIj48ZGVmcz48cGF0aCBpZD0iTUpYLTIxLVRFWC1JLTFENDQwIiBkPSJNMjg5IDYyOVEyODkgNjM1IDIzMiA2MzdRMjA4IDYzNyAyMDEgNjM4VDE5NCA2NDhRMTk0IDY0OSAxOTYgNjU5UTE5NyA2NjIgMTk4IDY2NlQxOTkgNjcxVDIwMSA2NzZUMjAzIDY3OVQyMDcgNjgxVDIxMiA2ODNUMjIwIDY4M1QyMzIgNjg0UTIzOCA2ODQgMjYyIDY4NFQzMDcgNjgzUTM4NiA2ODMgMzk4IDY4M1Q0MTQgNjc4UTQxNSA2NzQgNDUxIDM5Nkw0ODcgMTE3TDUxMCAxNTRRNTM0IDE5MCA1NzQgMjU0VDY2MiAzOTRRODM3IDY3MyA4MzkgNjc1UTg0MCA2NzYgODQyIDY3OFQ4NDYgNjgxTDg1MiA2ODNIOTQ4UTk2NSA2ODMgOTg4IDY4M1QxMDE3IDY4NFExMDUxIDY4NCAxMDUxIDY3M1ExMDUxIDY2OCAxMDQ4IDY1NlQxMDQ1IDY0M1ExMDQxIDYzNyAxMDA4IDYzN1E5NjggNjM2IDk1NyA2MzRUOTM5IDYyM1E5MzYgNjE4IDg2NyAzNDBUNzk3IDU5UTc5NyA1NSA3OTggNTRUODA1IDUwVDgyMiA0OFQ4NTUgNDZIODg2UTg5MiAzNyA4OTIgMzVRODkyIDE5IDg4NSA1UTg4MCAwIDg2OSAwUTg2NCAwIDgyOCAxVDczNiAyUTY3NSAyIDY0NCAyVDYwOSAxUTU5MiAxIDU5MiAxMVE1OTIgMTMgNTk0IDI1UTU5OCA0MSA2MDIgNDNUNjI1IDQ2UTY1MiA0NiA2ODUgNDlRNjk5IDUyIDcwNCA2MVE3MDYgNjUgNzQyIDIwN1Q4MTMgNDkwVDg0OCA2MzFMNjU0IDMyMlE0NTggMTAgNDUzIDVRNDUxIDQgNDQ5IDNRNDQ0IDAgNDMzIDBRNDE4IDAgNDE1IDdRNDEzIDExIDM3NCAzMTdMMzM1IDYyNEwyNjcgMzU0UTIwMCA4OCAyMDAgNzlRMjA2IDQ2IDI3MiA0NkgyODJRMjg4IDQxIDI4OSAzN1QyODYgMTlRMjgyIDMgMjc4IDFRMjc0IDAgMjY3IDBRMjY1IDAgMjU1IDBUMjIxIDFUMTU3IDJRMTI3IDIgOTUgMVQ1OCAwUTQzIDAgMzkgMlQzNSAxMVEzNSAxMyAzOCAyNVQ0MyA0MFE0NSA0NiA2NSA0NlExMzUgNDYgMTU0IDg2UTE1OCA5MiAyMjMgMzU0VDI4OSA2MjlaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ0MCIgeGxpbms6aHJlZj0iI01KWC0yMS1URVgtSS0xRDQ0MCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol>  <!-- svg-source:excalidraw -->    <defs>    <style class="style-fonts">/**/</style>      </defs>  <g transform="translate(10 27.278671772482923) rotate(0 6.578200914591108 4.256482944735424)"><use href="#image-86c14e601916a042fc0b26809317a988c822c425" width="13" height="9" opacity="1"/></g><g transform="translate(196.16074016875785 26.292787990452638) rotate(0 7.713624310270756 4.991168671351666)"><use href="#image-a550b3a9fd1c843c0426b15bf88b6ed048d21879" width="15" height="10" opacity="1"/></g><g transform="translate(105.43740130542864 27.00904132038505) rotate(0 7.4633577154861825 4.829231462961644)"><use href="#image-b5934a70b2753ceb2eb145a2a926d07811b88bf6" width="15" height="10" opacity="1"/></g><g stroke-linecap="round"><g transform="translate(30.685406203975305 37.57380681293952) rotate(0 34.23423426564658 -0.20350619811671322)"><path d="M0 0 C11.41 -0.07, 57.06 -0.34, 68.47 -0.41 M0 0 C11.41 -0.07, 57.06 -0.34, 68.47 -0.41" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(30.685406203975305 37.57380681293952) rotate(0 34.23423426564658 -0.20350619811671322)"><path d="M68.47 -0.41 L54.91 6.01 L54.84 -6.67 L68.47 -0.41" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M68.47 -0.41 C64.74 1.36, 61 3.13, 54.91 6.01 M68.47 -0.41 C64.06 1.68, 59.66 3.76, 54.91 6.01 M54.91 6.01 C54.89 1.74, 54.86 -2.53, 54.84 -6.67 M54.91 6.01 C54.9 3.41, 54.88 0.81, 54.84 -6.67 M54.84 -6.67 C60.28 -4.17, 65.72 -1.67, 68.47 -0.41 M54.84 -6.67 C59.31 -4.61, 63.78 -2.56, 68.47 -0.41 M68.47 -0.41 C68.47 -0.41, 68.47 -0.41, 68.47 -0.41 M68.47 -0.41 C68.47 -0.41, 68.47 -0.41, 68.47 -0.41" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(98.19985627836712 24.887160163168787) rotate(0 -35.10776427576029 0.0008445698005701274)"><path d="M0 0 C-11.7 0, -58.51 0, -70.22 0 M0 0 C-11.7 0, -58.51 0, -70.22 0" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(98.19985627836712 24.887160163168787) rotate(0 -35.10776427576029 0.0008445698005701274)"><path d="M-70.22 0 L-56.62 -6.34 L-56.62 6.34 L-70.22 0" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M-70.22 0 C-66.04 -1.95, -61.86 -3.9, -56.62 -6.34 M-70.22 0 C-67.08 -1.46, -63.94 -2.93, -56.62 -6.34 M-56.62 -6.34 C-56.62 -2.57, -56.62 1.2, -56.62 6.34 M-56.62 -6.34 C-56.62 -1.64, -56.62 3.06, -56.62 6.34 M-56.62 6.34 C-60.54 4.51, -64.46 2.69, -70.22 0 M-56.62 6.34 C-59.57 4.97, -62.52 3.59, -70.22 0 M-70.22 0 C-70.22 0, -70.22 0, -70.22 0 M-70.22 0 C-70.22 0, -70.22 0, -70.22 0" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(129.02676445098285 25.021675519773268) rotate(0 32.47781971628558 0.14340278510044868)"><path d="M0 0 C10.83 0.05, 54.13 0.24, 64.96 0.29 M0 0 C10.83 0.05, 54.13 0.24, 64.96 0.29" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(129.02676445098285 25.021675519773268) rotate(0 32.47781971628558 0.14340278510044868)"><path d="M64.96 0.29 L51.33 6.57 L51.39 -6.11 L64.96 0.29" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M64.96 0.29 C59.83 2.65, 54.7 5.01, 51.33 6.57 M64.96 0.29 C61.17 2.03, 57.38 3.78, 51.33 6.57 M51.33 6.57 C51.35 3.1, 51.36 -0.37, 51.39 -6.11 M51.33 6.57 C51.35 2.71, 51.37 -1.14, 51.39 -6.11 M51.39 -6.11 C56.63 -3.64, 61.86 -1.17, 64.96 0.29 M51.39 -6.11 C56.56 -3.67, 61.73 -1.23, 64.96 0.29 M64.96 0.29 C64.96 0.29, 64.96 0.29, 64.96 0.29 M64.96 0.29 C64.96 0.29, 64.96 0.29, 64.96 0.29" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(189.30959133152373 36.30622690962453) rotate(0 -32.92222762445098 0.25330301564862623)"><path d="M0 0 C-10.97 0.08, -54.87 0.42, -65.84 0.51 M0 0 C-10.97 0.08, -54.87 0.42, -65.84 0.51" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(189.30959133152373 36.30622690962453) rotate(0 -32.92222762445098 0.25330301564862623)"><path d="M-65.84 0.51 L-52.3 -5.94 L-52.2 6.74 L-65.84 0.51" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M-65.84 0.51 C-62.74 -0.97, -59.64 -2.44, -52.3 -5.94 M-65.84 0.51 C-61.78 -1.43, -57.71 -3.36, -52.3 -5.94 M-52.3 -5.94 C-52.27 -2.47, -52.25 1, -52.2 6.74 M-52.3 -5.94 C-52.28 -3.03, -52.25 -0.11, -52.2 6.74 M-52.2 6.74 C-55.14 5.4, -58.08 4.06, -65.84 0.51 M-52.2 6.74 C-55.04 5.44, -57.89 4.14, -65.84 0.51 M-65.84 0.51 C-65.84 0.51, -65.84 0.51, -65.84 0.51 M-65.84 0.51 C-65.84 0.51, -65.84 0.51, -65.84 0.51" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(58.348686917682755 11.29653647567676) rotate(0 7.5 5)"><use href="#image-09a34f2d40e788af4e752840113bf2b1ab460677" width="15" height="10" opacity="1"/></g><g transform="translate(148.67406138983034 10) rotate(0 7.5 5)"><use href="#image-abff1f3186fdc1b74897a22884f69884cab5fc8a" width="15" height="10" opacity="1"/></g><g transform="translate(57.83198551723157 40.0229257403399) rotate(0 10 6.5)"><use href="#image-5fb41a7d554c51e99028f86d676b437e31eb345c" width="20" height="13" opacity="1"/></g><g transform="translate(152.74403536550707 38.33630246488872) rotate(0 10 6.5)"><use href="#image-3356b5df3d35a02ea6abfd12eddc530e58a720ee" width="20" height="13" opacity="1"/></g></svg>
   
2. Why does this prove $M\simeq M\bigoplus M$?

</div></div>


---

## Problem 15


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/cokernels-in-the-category-of-abelian-groups/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $f:A\to B$ is a morphism of abelian groups. Prove that the projection morphism $\pi:B\to B/\operatorname{im}(f)$ is a cokernel of $f$.

</div></div>


---

## Problem 16


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/an-intramural-isomorphism/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose the diagram below is part of a double-complex in an abelian category and is vertically exact at $B$; i.e., $\ker(f)=0$:

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 149.0207168292843 240.53125" width="200" height="240.53125" class="excalidraw-svg"><symbol id="image-b6bf4f741ff22bda17c72e3016cec9feabaf6801"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjA2OGV4OyIgd2lkdGg9IjE2LjI5IiBoZWlnaHQ9IjMwLjA5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTEzMDAgMjc4IDEzMzAiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTE0LVRFWC1OLTIyRUUiIGQ9Ik03OCAzMFE3OCA1NCA5NSA3MlQxMzggOTBRMTYyIDkwIDE4MCA3NFQxOTkgMzFRMTk5IDYgMTgyIC0xMlQxMzkgLTMwVDk2IC0xM1Q3OCAzMFpNNzggNDQwUTc4IDQ2NCA5NSA0ODJUMTM4IDUwMFExNjIgNTAwIDE4MCA0ODRUMTk5IDQ0MVExOTkgNDE2IDE4MiAzOThUMTM5IDM4MFQ5NiAzOTdUNzggNDQwWk03OCA4NDBRNzggODY0IDk1IDg4MlQxMzggOTAwUTE2MiA5MDAgMTgwIDg4NFQxOTkgODQxUTE5OSA4MTYgMTgyIDc5OFQxMzkgNzgwVDk2IDc5N1Q3OCA4NDBaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0iVGVYQXRvbSIgZGF0YS1tangtdGV4Y2xhc3M9Ik9SRCI+PGcgZGF0YS1tbWwtbm9kZT0ibW8iPjx1c2UgZGF0YS1jPSIyMkVFIiB4bGluazpocmVmPSIjTUpYLTExNC1URVgtTi0yMkVFIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-7ebcb8b916b778b73ca1b13c8299ec8eabb05d8d"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjA2OGV4OyIgd2lkdGg9IjE2LjI5IiBoZWlnaHQ9IjMwLjA5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTEzMDAgMjc4IDEzMzAiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTEzLVRFWC1OLTIyRUUiIGQ9Ik03OCAzMFE3OCA1NCA5NSA3MlQxMzggOTBRMTYyIDkwIDE4MCA3NFQxOTkgMzFRMTk5IDYgMTgyIC0xMlQxMzkgLTMwVDk2IC0xM1Q3OCAzMFpNNzggNDQwUTc4IDQ2NCA5NSA0ODJUMTM4IDUwMFExNjIgNTAwIDE4MCA0ODRUMTk5IDQ0MVExOTkgNDE2IDE4MiAzOThUMTM5IDM4MFQ5NiAzOTdUNzggNDQwWk03OCA4NDBRNzggODY0IDk1IDg4MlQxMzggOTAwUTE2MiA5MDAgMTgwIDg4NFQxOTkgODQxUTE5OSA4MTYgMTgyIDc5OFQxMzkgNzgwVDk2IDc5N1Q3OCA4NDBaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0iVGVYQXRvbSIgZGF0YS1tangtdGV4Y2xhc3M9Ik9SRCI+PGcgZGF0YS1tbWwtbm9kZT0ibW8iPjx1c2UgZGF0YS1jPSIyMkVFIiB4bGluazpocmVmPSIjTUpYLTExMy1URVgtTi0yMkVFIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-1a3251706c4c8e600d480b1e258635d165a57fc0"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQ2NGV4OyIgd2lkdGg9IjIyLjQ0IiBoZWlnaHQ9IjIwLjU5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTcwNSA1NTAgOTEwIj48ZGVmcz48cGF0aCBpZD0iTUpYLTExMi1URVgtSS0xRDQ1MyIgZD0iTTExOCAtMTYyUTEyMCAtMTYyIDEyNCAtMTY0VDEzNSAtMTY3VDE0NyAtMTY4UTE2MCAtMTY4IDE3MSAtMTU1VDE4NyAtMTI2UTE5NyAtOTkgMjIxIDI3VDI2NyAyNjdUMjg5IDM4MlYzODVIMjQyUTE5NSAzODUgMTkyIDM4N1ExODggMzkwIDE4OCAzOTdMMTk1IDQyNVExOTcgNDMwIDIwMyA0MzBUMjUwIDQzMVEyOTggNDMxIDI5OCA0MzJRMjk4IDQzNCAzMDcgNDgyVDMxOSA1NDBRMzU2IDcwNSA0NjUgNzA1UTUwMiA3MDMgNTI2IDY4M1Q1NTAgNjMwUTU1MCA1OTQgNTI5IDU3OFQ0ODcgNTYxUTQ0MyA1NjEgNDQzIDYwM1E0NDMgNjIyIDQ1NCA2MzZUNDc4IDY1N0w0ODcgNjYyUTQ3MSA2NjggNDU3IDY2OFE0NDUgNjY4IDQzNCA2NThUNDE5IDYzMFE0MTIgNjAxIDQwMyA1NTJUMzg3IDQ2OVQzODAgNDMzUTM4MCA0MzEgNDM1IDQzMVE0ODAgNDMxIDQ4NyA0MzBUNDk4IDQyNFE0OTkgNDIwIDQ5NiA0MDdUNDkxIDM5MVE0ODkgMzg2IDQ4MiAzODZUNDI4IDM4NUgzNzJMMzQ5IDI2M1EzMDEgMTUgMjgyIC00N1EyNTUgLTEzMiAyMTIgLTE3M1ExNzUgLTIwNSAxMzkgLTIwNVExMDcgLTIwNSA4MSAtMTg2VDU1IC0xMzJRNTUgLTk1IDc2IC03OFQxMTggLTYxUTE2MiAtNjEgMTYyIC0xMDNRMTYyIC0xMjIgMTUxIC0xMzZUMTI3IC0xNTdMMTE4IC0xNjJaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ1MyIgeGxpbms6aHJlZj0iI01KWC0xMTItVEVYLUktMUQ0NTMiLz48L2c+PC9nPjwvZz48L3N2Zz4=" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-0123c1a42fefb19c78ba38a308b6831321e00e29"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjA1ZXg7IiB3aWR0aD0iMjEuMzEiIGhlaWdodD0iMTUuNTciIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjY2IDUwMCA2ODgiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTExLVRFWC1OLTMwIiBkPSJNOTYgNTg1UTE1MiA2NjYgMjQ5IDY2NlEyOTcgNjY2IDM0NSA2NDBUNDIzIDU0OFE0NjAgNDY1IDQ2MCAzMjBRNDYwIDE2NSA0MTcgODNRMzk3IDQxIDM2MiAxNlQzMDEgLTE1VDI1MCAtMjJRMjI0IC0yMiAxOTggLTE2VDEzNyAxNlQ4MiA4M1EzOSAxNjUgMzkgMzIwUTM5IDQ5NCA5NiA1ODVaTTMyMSA1OTdRMjkxIDYyOSAyNTAgNjI5UTIwOCA2MjkgMTc4IDU5N1ExNTMgNTcxIDE0NSA1MjVUMTM3IDMzM1ExMzcgMTc1IDE0NSAxMjVUMTgxIDQ2UTIwOSAxNiAyNTAgMTZRMjkwIDE2IDMxOCA0NlEzNDcgNzYgMzU0IDEzMFQzNjIgMzMzUTM2MiA0NzggMzU0IDUyNFQzMjEgNTk3WiIvPjwvZGVmcz48ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiPjxnIGRhdGEtbW1sLW5vZGU9Im1hdGgiPjxnIGRhdGEtbW1sLW5vZGU9Im1uIj48dXNlIGRhdGEtYz0iMzAiIHhsaW5rOmhyZWY9IiNNSlgtMTExLVRFWC1OLTMwIi8+PC9nPjwvZz48L2c+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-fea2abaa431d71ed249171b6056b973f7672fd8a"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjA1ZXg7IiB3aWR0aD0iMjIuODEiIGhlaWdodD0iMTYuNjciIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNzE1IDU2NiA3MzciPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTEwLVRFWC1JLTFENzE1IiBkPSJNMjAyIDUwOFExNzkgNTA4IDE2OSA1MjBUMTU4IDU0N1ExNTggNTU3IDE2NCA1NzdUMTg1IDYyNFQyMzAgNjc1VDMwMSA3MTBMMzMzIDcxNUgzNDVRMzc4IDcxNSAzODQgNzE0UTQ0NyA3MDMgNDg5IDY2MVQ1NDkgNTY4VDU2NiA0NTdRNTY2IDM2MiA1MTkgMjQwVDQwMiA1M1EzMjEgLTIyIDIyMyAtMjJRMTIzIC0yMiA3MyA1NlE0MiAxMDIgNDIgMTQ4VjE1OVE0MiAyNzYgMTI5IDM3MFQzMjIgNDY1UTM4MyA0NjUgNDE0IDQzNFQ0NTUgMzY3TDQ1OCAzNzhRNDc4IDQ2MSA0NzggNTE1UTQ3OCA2MDMgNDM3IDYzOVQzNDQgNjc2UTI2NiA2NzYgMjIzIDYxMlEyNjQgNjA2IDI2NCA1NzJRMjY0IDU0NyAyNDYgNTI4VDIwMiA1MDhaTTQzMCAzMDZRNDMwIDM3MiA0MDEgNDAwVDMzMyA0MjhRMjcwIDQyOCAyMjIgMzgyUTE5NyAzNTQgMTgzIDMyM1QxNTAgMjIxUTEzMiAxNDkgMTMyIDExNlExMzIgMjEgMjMyIDIxUTI0NCAyMSAyNTAgMjJRMzI3IDM1IDM3NCAxMTJRMzg5IDEzNyA0MDkgMTk2VDQzMCAzMDZaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDcxNSIgeGxpbms6aHJlZj0iI01KWC0xMTAtVEVYLUktMUQ3MTUiLz48L2c+PC9nPjwvZz48L3N2Zz4=" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-ab3a4efcb55f0b683995fd86107415857a61a8e3"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjcuMTciIGhlaWdodD0iMTUuNDUiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjgzIDc1OSA2ODMiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTA5LVRFWC1JLTFENDM1IiBkPSJNMjMxIDYzN1EyMDQgNjM3IDE5OSA2MzhUMTk0IDY0OVExOTQgNjc2IDIwNSA2ODJRMjA2IDY4MyAzMzUgNjgzUTU5NCA2ODMgNjA4IDY4MVE2NzEgNjcxIDcxMyA2MzZUNzU2IDU0NFE3NTYgNDgwIDY5OCA0MjlUNTY1IDM2MEw1NTUgMzU3UTYxOSAzNDggNjYwIDMxMVQ3MDIgMjE5UTcwMiAxNDYgNjMwIDc4VDQ1MyAxUTQ0NiAwIDI0MiAwUTQyIDAgMzkgMlEzNSA1IDM1IDEwUTM1IDE3IDM3IDI0UTQyIDQzIDQ3IDQ1UTUxIDQ2IDYyIDQ2SDY4UTk1IDQ2IDEyOCA0OVExNDIgNTIgMTQ3IDYxUTE1MCA2NSAyMTkgMzM5VDI4OCA2MjhRMjg4IDYzNSAyMzEgNjM3Wk02NDkgNTQ0UTY0OSA1NzQgNjM0IDYwMFQ1ODUgNjM0UTU3OCA2MzYgNDkzIDYzN1E0NzMgNjM3IDQ1MSA2MzdUNDE2IDYzNkg0MDNRMzg4IDYzNSAzODQgNjI2UTM4MiA2MjIgMzUyIDUwNlEzNTIgNTAzIDM1MSA1MDBMMzIwIDM3NEg0MDFRNDgyIDM3NCA0OTQgMzc2UTU1NCAzODYgNjAxIDQzNFQ2NDkgNTQ0Wk01OTUgMjI5UTU5NSAyNzMgNTcyIDMwMlQ1MTIgMzM2UTUwNiAzMzcgNDI5IDMzN1EzMTEgMzM3IDMxMCAzMzZRMzEwIDMzNCAyOTMgMjYzVDI1OCAxMjJMMjQwIDUyUTI0MCA0OCAyNTIgNDhUMzMzIDQ2UTQyMiA0NiA0MjkgNDdRNDkxIDU0IDU0MyAxMDVUNTk1IDIyOVoiLz48L2RlZnM+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIj48ZyBkYXRhLW1tbC1ub2RlPSJtYXRoIj48ZyBkYXRhLW1tbC1ub2RlPSJtc3R5bGUiIGZpbGw9ImdyZWVuIiBzdHJva2U9ImdyZWVuIj48ZyBkYXRhLW1tbC1ub2RlPSJtaSI+PHVzZSBkYXRhLWM9IjFENDM1IiB4bGluazpocmVmPSIjTUpYLTEwOS1URVgtSS0xRDQzNSIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-bc2c9baa7a4d51e661704b473fd8ea7b24ac0f74"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjYuOTciIGhlaWdodD0iMTYuMiIgcm9sZT0iaW1nIiBmb2N1c2FibGU9ImZhbHNlIiB2aWV3Qm94PSIwIC03MTYgNzUwIDcxNiI+PGRlZnM+PHBhdGggaWQ9Ik1KWC0xMDgtVEVYLUktMUQ0MzQiIGQ9Ik0yMDggNzRRMjA4IDUwIDI1NCA0NlEyNzIgNDYgMjcyIDM1UTI3MiAzNCAyNzAgMjJRMjY3IDggMjY0IDRUMjUxIDBRMjQ5IDAgMjM5IDBUMjA1IDFUMTQxIDJRNzAgMiA1MCAwSDQyUTM1IDcgMzUgMTFRMzcgMzggNDggNDZINjJRMTMyIDQ5IDE2NCA5NlExNzAgMTAyIDM0NSA0MDFUNTIzIDcwNFE1MzAgNzE2IDU0NyA3MTZINTU1SDU3MlE1NzggNzA3IDU3OCA3MDZMNjA2IDM4M1E2MzQgNjAgNjM2IDU3UTY0MSA0NiA3MDEgNDZRNzI2IDQ2IDcyNiAzNlE3MjYgMzQgNzIzIDIyUTcyMCA3IDcxOCA0VDcwNCAwUTcwMSAwIDY5MCAwVDY1MSAxVDU3OCAyUTQ4NCAyIDQ1NSAwSDQ0M1E0MzcgNiA0MzcgOVQ0MzkgMjdRNDQzIDQwIDQ0NSA0M0w0NDkgNDZINDY5UTUyMyA0OSA1MzMgNjNMNTIxIDIxM0gyODNMMjQ5IDE1NVEyMDggODYgMjA4IDc0Wk01MTYgMjYwUTUxNiAyNzEgNTA0IDQxNlQ0OTAgNTYyTDQ2MyA1MTlRNDQ3IDQ5MiA0MDAgNDEyTDMxMCAyNjBMNDEzIDI1OVE1MTYgMjU5IDUxNiAyNjBaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQzNCIgeGxpbms6aHJlZj0iI01KWC0xMDgtVEVYLUktMUQ0MzQiLz48L2c+PC9nPjwvZz48L3N2Zz4=" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-d0d027735afb046199362b4f572f2cfaf762a377"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjA1ZXg7IiB3aWR0aD0iMjEuMzEiIGhlaWdodD0iMTUuNTciIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjY2IDUwMCA2ODgiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMTA3LVRFWC1OLTMwIiBkPSJNOTYgNTg1UTE1MiA2NjYgMjQ5IDY2NlEyOTcgNjY2IDM0NSA2NDBUNDIzIDU0OFE0NjAgNDY1IDQ2MCAzMjBRNDYwIDE2NSA0MTcgODNRMzk3IDQxIDM2MiAxNlQzMDEgLTE1VDI1MCAtMjJRMjI0IC0yMiAxOTggLTE2VDEzNyAxNlQ4MiA4M1EzOSAxNjUgMzkgMzIwUTM5IDQ5NCA5NiA1ODVaTTMyMSA1OTdRMjkxIDYyOSAyNTAgNjI5UTIwOCA2MjkgMTc4IDU5N1ExNTMgNTcxIDE0NSA1MjVUMTM3IDMzM1ExMzcgMTc1IDE0NSAxMjVUMTgxIDQ2UTIwOSAxNiAyNTAgMTZRMjkwIDE2IDMxOCA0NlEzNDcgNzYgMzU0IDEzMFQzNjIgMzMzUTM2MiA0NzggMzU0IDUyNFQzMjEgNTk3WiIvPjwvZGVmcz48ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiPjxnIGRhdGEtbW1sLW5vZGU9Im1hdGgiPjxnIGRhdGEtbW1sLW5vZGU9Im1uIj48dXNlIGRhdGEtYz0iMzAiIHhsaW5rOmhyZWY9IiNNSlgtMTA3LVRFWC1OLTMwIi8+PC9nPjwvZz48L2c+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol>  <!-- svg-source:excalidraw -->    <defs>    <style class="style-fonts">/**/</style>      </defs>  <g transform="translate(10 10) rotate(0 7.5 5.5)"><use href="#image-d0d027735afb046199362b4f572f2cfaf762a377" width="15" height="11" opacity="1"/></g><g transform="translate(10 110) rotate(0 9.5 6)"><use href="#image-bc2c9baa7a4d51e661704b473fd8ea7b24ac0f74" width="19" height="12" opacity="1"/></g><g transform="translate(110 110) rotate(0 9.5 5.5)"><use href="#image-ab3a4efcb55f0b683995fd86107415857a61a8e3" width="19" height="11" opacity="1"/></g><g stroke-linecap="round"><g transform="translate(31.691019883338072 116.08201371700716) rotate(0 37.682107649495016 -0.12741735817913735)"><path d="M0 0 C12.56 -0.04, 62.8 -0.21, 75.36 -0.25 M0 0 C12.56 -0.04, 62.8 -0.21, 75.36 -0.25" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(31.691019883338072 116.08201371700716) rotate(0 37.682107649495016 -0.12741735817913735)"><path d="M75.36 -0.25 L61.79 6.13 L61.75 -6.55 L75.36 -0.25" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M75.36 -0.25 C71.24 1.68, 67.12 3.62, 61.79 6.13 M75.36 -0.25 C72.5 1.09, 69.63 2.44, 61.79 6.13 M61.79 6.13 C61.78 2.49, 61.77 -1.15, 61.75 -6.55 M61.79 6.13 C61.78 1.46, 61.76 -3.21, 61.75 -6.55 M61.75 -6.55 C66.1 -4.54, 70.46 -2.52, 75.36 -0.25 M61.75 -6.55 C65.01 -5.04, 68.28 -3.53, 75.36 -0.25 M75.36 -0.25 C75.36 -0.25, 75.36 -0.25, 75.36 -0.25 M75.36 -0.25 C75.36 -0.25, 75.36 -0.25, 75.36 -0.25" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(56 98) rotate(0 8 6)"><use href="#image-fea2abaa431d71ed249171b6056b973f7672fd8a" width="16" height="12" opacity="1"/></g><g transform="translate(110 10) rotate(0 7.5 5.5)"><use href="#image-0123c1a42fefb19c78ba38a308b6831321e00e29" width="15" height="11" opacity="1"/></g><g stroke-linecap="round"><g transform="translate(18.52071682928431 27.78125) rotate(0 0.75 37.25)"><path d="M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5 M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(18.52071682928431 27.78125) rotate(0 0.75 37.25)"><path d="M1.5 74.5 L-5.11 61.04 L7.56 60.78 L1.5 74.5" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M1.5 74.5 C-0.3 70.83, -2.1 67.16, -5.11 61.04 M1.5 74.5 C-1.1 69.2, -3.71 63.9, -5.11 61.04 M-5.11 61.04 C-2.32 60.98, 0.48 60.92, 7.56 60.78 M-5.11 61.04 C-0.84 60.95, 3.43 60.86, 7.56 60.78 M7.56 60.78 C6.08 64.15, 4.59 67.52, 1.5 74.5 M7.56 60.78 C5.53 65.39, 3.49 69.99, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(118.5 28) rotate(0 0.75 37.25)"><path d="M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5 M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(118.5 28) rotate(0 0.75 37.25)"><path d="M1.5 74.5 L-5.11 61.04 L7.56 60.78 L1.5 74.5" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M1.5 74.5 C-0.31 70.82, -2.11 67.15, -5.11 61.04 M1.5 74.5 C0.14 71.73, -1.22 68.97, -5.11 61.04 M-5.11 61.04 C-1.86 60.97, 1.39 60.9, 7.56 60.78 M-5.11 61.04 C-1.5 60.96, 2.11 60.89, 7.56 60.78 M7.56 60.78 C5.75 64.88, 3.94 68.99, 1.5 74.5 M7.56 60.78 C5.26 65.98, 2.97 71.19, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(119.5 130) rotate(0 0.75 37.25)"><path d="M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5 M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(119.5 130) rotate(0 0.75 37.25)"><path d="M1.5 74.5 L-5.11 61.04 L7.56 60.78 L1.5 74.5" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M1.5 74.5 C-1.04 69.34, -3.57 64.17, -5.11 61.04 M1.5 74.5 C-0.48 70.47, -2.46 66.44, -5.11 61.04 M-5.11 61.04 C-1.63 60.97, 1.86 60.9, 7.56 60.78 M-5.11 61.04 C-0.62 60.95, 3.87 60.85, 7.56 60.78 M7.56 60.78 C6.34 63.56, 5.11 66.34, 1.5 74.5 M7.56 60.78 C5.43 65.62, 3.29 70.45, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(123.02071682928431 148.28125) rotate(0 8 7.5)"><use href="#image-1a3251706c4c8e600d480b1e258635d165a57fc0" width="16" height="15" opacity="1"/></g><g stroke-linecap="round"><g transform="translate(19.5 127.5) rotate(0 0.75 37.25)"><path d="M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5 M0 0 C0.25 12.42, 1.25 62.08, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(19.5 127.5) rotate(0 0.75 37.25)"><path d="M1.5 74.5 L-5.11 61.04 L7.56 60.78 L1.5 74.5" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M1.5 74.5 C-0.59 70.24, -2.68 65.99, -5.11 61.04 M1.5 74.5 C-0.36 70.72, -2.22 66.93, -5.11 61.04 M-5.11 61.04 C-1.65 60.97, 1.82 60.9, 7.56 60.78 M-5.11 61.04 C-0.84 60.95, 3.42 60.86, 7.56 60.78 M7.56 60.78 C6.27 63.72, 4.97 66.66, 1.5 74.5 M7.56 60.78 C6.14 64, 4.72 67.21, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5 M1.5 74.5 C1.5 74.5, 1.5 74.5, 1.5 74.5" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(14.822858414642155 208.53125) rotate(0 6 11)"><use href="#image-7ebcb8b916b778b73ca1b13c8299ec8eabb05d8d" width="12" height="22" opacity="1"/></g><g transform="translate(115.00000041464216 208.53125) rotate(0 6 11)"><use href="#image-b6bf4f741ff22bda17c72e3016cec9feabaf6801" width="12" height="22" opacity="1"/></g></svg>

Use the [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/The Salamander Lemma#The Salamander Lemma\|Salamander Lemma]] to prove that $^{\square}A\simeq A^{\text{vert}}$ and $A^{\text{hor}}\simeq A_{\square}$.

</div></div>
