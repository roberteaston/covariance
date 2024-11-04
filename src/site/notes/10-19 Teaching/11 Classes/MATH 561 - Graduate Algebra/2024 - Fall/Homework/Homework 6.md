---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2024-fall/homework/homework-6/","updated":"2024-11-02T14:53:27-07:00"}
---

## Problem 1


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R$ is a commutative ring and $M$ is an $R$-module. Prove that for $m, n_1, n_2, \ldots, n_k \in M$ one always has

$m\wedge n_1\wedge n_2\wedge \cdots \wedge n_k = (-1)^k (n_1\wedge n_2\wedge \cdots \wedge n_k)\wedge m.$

</div></div>


---

## Problem 2


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R$ is a commutative ring. Prove that for each cyclic $R$-module $M$ we have $\mathcal{T}(M)\simeq\mathcal{S}(M)$; i.e., the tensor algebra is already commutative.

>[!summary]- Hint
>Show the ideal $\mathcal{C}(M)$ is trivial.

</div></div>


---

## Problem 3


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $R$ is a commutative ring and $M$ is a free $R$-module of rank $n$, i.e., $M\simeq F(X)$ for some set $X$ with $n$ elements.  Prove that $\bigwedge^k (M)$ is a free $R$-module of rank $\binom{n}{k}$ for $k=0,1,2,\ldots, n$.

>[!summary]- Hint
>You can use [[40-49 Knowledge/41 Mathematics/Algebra theory/Exterior algebras#^51701e\|the fact]] that for $0\leq k\leq n$ the $R$-module $\bigwedge^k (M)$ is a free $R$-module with a basis explicitly given in terms of a basis for $M$.

</div></div>


---

## Problem 4


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Suppose $F$ is a field of characteristic not 2. Show that for every $F$-vector space $V$ we have an $F$-vector space isomorphism
$V\otimes_F V\simeq \mathcal{S}^2(V)\oplus \bigwedge^2(V).$
In other words, show that every 2-tensor may be written uniquely as a sum of a symmetric and an alternating tensor.

>[!summary]- Hint
>For each 2-tensor $z$, show that $z=\frac{1}{2}\operatorname{Sym}(z)+\frac{1}{2}\operatorname{Alt}(z)$, where $\operatorname{Sym}(z)$ and $\operatorname{Alt}(z)$ are the [[40-49 Knowledge/41 Mathematics/Algebra theory/Symmetric and alternating tensors#Symmetrization and skew-symmetrization\|symmetrization]] and [[40-49 Knowledge/41 Mathematics/Algebra theory/Symmetric and alternating tensors#Symmetrization and skew-symmetrization\|skew-symmetrization]]of $z$, respectively.
>
>This will show $V\otimes_F F$ is the sum of the submodules of symmetric and alternating tensors. To show it is the direct sum, verify that the only 2-tensor that is both symmetric and alternating is $0$.
>
>Finally, you can use the [[40-49 Knowledge/41 Mathematics/Algebra theory/Symmetric and alternating tensors#^931c11\|fact]] that there is an isomorphism between the symmetric power (respectively, exterior power) and the submodule of symmetric tensors (respectively, alternating tensors).

</div></div>

