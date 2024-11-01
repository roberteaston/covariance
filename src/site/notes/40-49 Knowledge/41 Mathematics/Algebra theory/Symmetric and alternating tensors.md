---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/algebra-theory/symmetric-and-alternating-tensors/","tags":["algebra_theory"],"updated":"2024-11-01T15:37:04-07:00"}
---

# An action of the symmetric group on $\mathcal{T}^k(M)$

For any $R$-module $M$ there is a left action of the symmetric group $S_k$ on the $k$-fold direct product $M\times \cdots \times M$, given by permuting the factors:

$$\sigma(m_1,\ldots, m_k)=(m_{\sigma^{-1}(1)},\ldots, m_{\sigma^{-1}(k)}).$$

(The reason for $\sigma^{-1}$ is to make this a *left* group action.) This balanced, multilinear map corresponds to a left group action of $S_k$ on $\mathcal{T}^k(M)$ which is defined on simple tensors by

$$\sigma(m_1\otimes \cdots \otimes m_k)=m_{\sigma^{-1}(1)}\otimes \cdots \otimes m_{\sigma^{-1}(k)}.$$

For example,

$$(1,\,3,\,2)\cdot (m_1\otimes m_2\otimes m_3) = m_2\otimes m_3\otimes m_1.$$

>[!note] Definition of symmetric and alternating tensors
>Suppose $R$ is a commutative ring (with unity) and $M$ is an $R$-module. An element $z\in \mathcal{T}^k(M)$ is called:
>- a **symmetric** $k$-tensor if $\sigma z=z$ for all $\sigma \in S_k$
>- an **alternating** $k$-tensor if $\sigma z=\operatorname{sign}(\sigma)z$ for all $\sigma\in S_k$.

For example, the elements $m\otimes m$ and $m_1\otimes m_2+m_2\otimes m_1$ are symmetric 2-tensors, while the element $m_1\otimes m_2-m_2\otimes m_1$ is an alternating 2-tensor. The 2-tensor $m_1\otimes m_2$ is neither symmetric nor alternating.

The collection of symmetric $k$-tensors forms a submodule of $\mathcal{T}^k(M)$, as does the collection of alternating $k$-tensors. These submodules are denoted $\mathcal{C}^k(M)$ and $\mathcal{A}^k(M)$, respectively.

# Connection with the symmetric and exterior algebras

One can prove that the submodules $\mathcal{C}^k(M)$ and $\mathcal{A}^k(M)$ are stable under this action of $S_k$, hence there is an induced action on the quotient modules $\mathcal{S}^k(M)$ and $\bigwedge^k (M)$. Moreover, we have:
- $\sigma w = w$ for every $w\in \mathcal{S}^k(M)$
- $\sigma w = \operatorname{sign}(\sigma)w$ for every $w\in \bigwedge^k(M)$

These actions seem identical to that of $S_k$ on the submodules of $\mathcal{T}^k(M)$ consisting of the symmetric and alternating tensors, respectively. Let's investigate this a bit further.
## Symmetrization and skew-symmetrization

For any $k$-tensor $z\in\mathcal{T}^k(M)$, define

$$\begin{align*} \operatorname{Sym}(z)&= \sum_{\sigma\in S_k}\sigma z\\ \operatorname{Alt}(z)&= \sum_{\sigma\in S_k}\operatorname{sign}(\sigma)\,\sigma z. \end{align*}$$

It is straightforward to verify these $k$-tensors are symmetric and alternating, respectively. We call them the **symmetrization** and **skew-symmetrization** of $z$.

One can verify that we have actually defined $R$-module morphisms $\operatorname{Sym}:\mathcal{T}^k(M)\to \mathcal{T}^k(M)$ and $\operatorname{Alt}:\mathcal{T}^k(M)\to \mathcal{T}^k(M)$ whose images lie in the submodule of symmetric and alternating tensors, respectively.

Note that if $z$ is a symmetric $k$-tensor, then

$$\operatorname{Sym}(z)=k!\cdot z.$$

Similarly, if $z$ is an alternating $k$-tensor, then

$$\operatorname{Alt}(z)=k!\cdot z.$$

From these observations, it is not too difficult to prove the following:

>[!summary] Proposition
>Suppose $R$ is a commutative ring (with unity) and $M$ is an $R$-module. If $k!$ is a unit in $R$, then there is an $R$-module isomorphism between $\mathcal{S}^k(M)$ (respectively, $\bigwedge^k (M)$) and the submodule of $\mathcal{T}^k(M)$ consisting of all symmetric $k$-tensors (respectively, alternating $k$-tensors).
{ #931c11}


---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Module theory/Modules over a PID/Noetherian modules\|Noetherian modules]]