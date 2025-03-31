---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/ring-theory/chinese-remainder-theorem/","tags":["ring_theory"],"updated":"2025-03-31T07:25:28-07:00"}
---

>[!summary] The Chinese Remainder Theorem
>Let $R$ be a ring with unity and $I_1,\ldots , I_k\subseteq R$ be two-sided ideals in $R$. Let
>$$\pi:R\to R/I_1\times \cdots \times R/I_k$$
>be the ring morphism induced by the projection morphisms $\pi_i:R\to R/I_i$. In other words, $\pi$ is the map given by $r\mapsto (r+I_1,\ldots, r+I_k)$. Then:
>1. $\ker(\pi)=I_1\cap \cdots \cap I_k$;
>2. If the ideals are pairwise coprime, then $\pi$ is surjective. In this case, the First Isomorphism Theorem gives an isomorphism
>   $$R/I_1\cdots I_k\simeq R/I_1\times\cdots \times R/I_k.$$
>   If $R$ is commutative, then we also have $I_1\cap \cdots \cap I_k = I_1\cdots I_k$. 

## Examples
---

### Quotients of polynomial rings

Consider the ideals $I_1=(x-1)$ and $I_2 = (x+1)$ in the polynomial ring ${\bf Q}[x]$. Upon noting that $1=-\frac{1}{2}(x-1)+\frac{1}{2}(x+1)\in I_1+I_2$ it follows that $I_1+I_2={\bf Q}[x]$ and so the ideals $I_1$ and $I_2$ are coprime. The Chinese Remainder Theorem thus gives a ring isomorphism
$${\bf Q}[x]/\langle(x-1)(x+1)\rangle\xrightarrow{\sim} {\bf Q}[x]/\langle x-1\rangle\times {\bf Q}[x]/\langle x+1\rangle.$$
(Here we are using the angled-bracket notation for ideals, to avoid having too many nested parentheses.)

Explicitly, this isomorphism maps each coset $p(x)+\langle (x-1)(x+1)\rangle$ to the pair of cosets $(p(x)+\langle x-1\rangle, p(x)+\langle x+1\rangle)$. 