---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/algebra-theory/symmetric-and-alternating-tensors/","tags":["algebra_theory"],"updated":"2025-11-02T19:50:28-08:00"}
---

## An action of the symmetric group on $\mathcal{T}^k(M)$
---

For any $R$-module $M$ there is a left action of the symmetric group $S_i$ on the $i$-fold direct product $M\times \cdots \times M$, given by permuting the factors:

$$\sigma(m_1,\ldots, m_i)=(m_{\sigma^{-1}(1)},\ldots, m_{\sigma^{-1}(i)}).$$

(The reason for $\sigma^{-1}$ is to make this a *left* group action.) This balanced, multilinear map corresponds to a left group action of $S_i$ on $\mathcal{T}^i(M)$ which is defined on simple tensors by

$$\sigma(m_1\otimes \cdots \otimes m_i)=m_{\sigma^{-1}(1)}\otimes \cdots \otimes m_{\sigma^{-1}(i)}.$$

For example,

$$(1,\,3,\,2)\cdot (m_1\otimes m_2\otimes m_3) = m_2\otimes m_3\otimes m_1.$$

>[!note] Definition of symmetric and alternating tensors
>Suppose $R$ is a commutative ring and $M$ is an $R$-module. An element $z\in \mathcal{T}^i(M)$ is called:
>- a **symmetric** $i$-tensor if $\sigma z=z$ for all $\sigma \in S_i$
>- an **alternating** $i$-tensor if $\sigma z=\operatorname{sign}(\sigma)z$ for all $\sigma\in S_i$.

For example, the elements $m\otimes m$ and $m_1\otimes m_2+m_2\otimes m_1$ are symmetric 2-tensors, while the element $m_1\otimes m_2-m_2\otimes m_1$ is an alternating 2-tensor. The 2-tensor $m_1\otimes m_2$ is neither symmetric nor alternating.

The collection of symmetric $i$-tensors forms a submodule of $\mathcal{T}^i(M)$, as does the collection of alternating $i$-tensors. These submodules are denoted ... nothing. At least as far as I can tell, Dummit & Foote doesn't use any notation for them.

One can prove that these submodules are stable under this action of $S_i$, hence there is an induced action on the quotient modules $\mathcal{S}^i(M)$ and $\bigwedge^i (M)$. Moreover, we have:
- $\sigma w = w$ for every $w\in \mathcal{S}^i(M)$
- $\sigma w = \operatorname{sign}(\sigma)w$ for every $w\in \bigwedge^i(M)$

These actions seem identical to that of $S_i$ on the submodules of $\mathcal{T}^i(M)$ consisting of the symmetric and alternating tensors, respectively. Let's investigate this a bit further.
## Symmetrization and skew-symmetrization
---

For any $i$-tensor $z\in\mathcal{T}^i(M)$, define

$$\begin{align*} \operatorname{Sym}(z)&= \sum_{\sigma\in S_i}\sigma z\\ \operatorname{Alt}(z)&= \sum_{\sigma\in S_i}\operatorname{sign}(\sigma)\,\sigma z. \end{align*}$$

It is straightforward to verify these $i$-tensors are symmetric and alternating, respectively. We call them the **symmetrization** and **skew-symmetrization** of $z$.

One can verify that we have actually defined $R$-module morphisms $\operatorname{Sym}:\mathcal{T}^i(M)\to \mathcal{T}^i(M)$ and $\operatorname{Alt}:\mathcal{T}^i(M)\to \mathcal{T}^i(M)$ whose images lie in the submodule of symmetric and alternating tensors, respectively.

Note that if $z$ is a symmetric $i$-tensor, then

$$\operatorname{Sym}(z)=i!\cdot z.$$

Similarly, if $z$ is an alternating $i$-tensor, then

$$\operatorname{Alt}(z)=i!\cdot z.$$

From these observations, it is not too difficult to prove the following:

>[!summary] Proposition
>Suppose $R$ is a commutative ring and $M$ is an $R$-module. For each nonnegative integer $i$, if $i!$ is a unit in $R$ then there is an $R$-module isomorphism between $\mathcal{S}^i(M)$ (respectively, $\bigwedge^i (M)$) and the submodule of $\mathcal{T}^i(M)$ consisting of all symmetric $i$-tensors (respectively, alternating $i$-tensors).
{ #931c11}


As an upshot, so long as $i!$ is a unit in $R$ (e.g., when $R$ is a field), we can write $\operatorname{Sym}(\mathcal{T}^i(M))$ and $\operatorname{Alt}(\mathcal{T}^i(M))$ for the submodules of symmetric and alternating $k$-tensors, respectively.

## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Noetherian modules\|Noetherian modules]]