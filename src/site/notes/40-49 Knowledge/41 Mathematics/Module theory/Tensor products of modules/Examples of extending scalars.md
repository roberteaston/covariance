---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/tensor-products-of-modules/examples-of-extending-scalars/","tags":["module_theory"],"updated":"2024-07-22T06:00:11-07:00"}
---

## Trivial extensions
{ #ab595d}


Suppose $M$ is an $R$-module. Considering the "trivial" extension $R\subseteq R$, we have constructed an $R$-module $R\otimes_R M$ extending the $R$-action on $M$ to ... an $R$-action on $M$. It should not be surprising that we have a natural $R$-module isomorphism $R\otimes_R M \simeq M$. We can verify this directly on the level of elements^[First show that every element in $R\otimes_R M$ can be expressed as simple tensor of the form $1_R\otimes m$ for some $m\in M$, then define a map by $1_R\otimes m\mapsto m$. You then need to verify this map is well defined (since tensors are really cosets!) and is an $R$-module isomorphism, a fair number of details to check.], but we can also observe that it follows directly from the universal property of $R\otimes_R M$, namely that it is the unique $R$-module (up to unique isomorphism) such that $\operatorname{Hom}_R(R\otimes_R M, N)\simeq \operatorname{Hom}_R(M,U(N))$ for every $R$-module $N$. In this instance, the "forgetful" functor $U$ is the identity functor, so that last set is $\operatorname{Hom}_R(M,N)$. But this exactly says that $M$ itself is an $R$-module with the desired universal property! Thus, $M$ and $R\otimes_R M$ are isomorphic (through a unique $R$-module isomorphism).

For example, for every abelian group $A$ we have an isomorphism ${\bf Z}\otimes_{\bf Z} A \simeq A$ of abelian groups. Similarly, if $V$ is any $F$-vector space then $F\otimes_F V$ is isomorphic to $V$ as an $F$-vector space.
## Field extensions

Suppose $F\subseteq E$ are fields. We can view $E$ as an $F$-vector space (by remembering the $F$-scaling but forgetting the result of the internal multiplication in $E$), and then we can attempt to "extend scalars" to recover this lost information, by forming the $E$-vector space $E\otimes_F E$. This will, in general, not recover the original field $E$; instead, we will see (once we learn that tensor product commutes with direct sum) that $E\otimes_F E\simeq E^n$, where $n$ is the dimension of $E$ as an $F$-vector space.
## A general property of this tensor construction

Here is a general little property of our construction:

>[!summary] Lemma
Suppose $M$ is an $R$-module and $R$ is a subring of a ring $S$. Then $1_R\otimes 0_m = 0$. (Here 0 is the additive identity of the $S$-module $S\otimes_R M$, representing the "empty sum" of tensors.)

The proof is very short. Simply observe that
$$1_R\otimes 0_m = 1_R\otimes (0_m+0_m) = 1_R\otimes 0_m+1_R\otimes 0_m.$$
The result then follows by additive cancellation in the $S$-module $S\otimes_R M$.
## Extending ${\bf Z}$-actions to ${\bf Q}$-actions for finite abelian groups

Suppose $A$ is a *finite* abelian group, i.e., a finite ${\bf Z}$-module. We claim that the ${\bf Q}$-module ${\bf Q}\otimes_{\bf Z} A$ s always trivial. To see this, let $n=|A|$ and suppose first we have a simple tensor $q\otimes a$ in ${\bf Q}\otimes_{\bf Z} A$. Then observe that
$$q\otimes a =\frac{qn}{n}\otimes a = \left(\frac{q}{n}\cdot n\right)\otimes a=\frac{q}{n}\otimes na = \frac{q}{n}\otimes 0_A = 0.$$
By linearity it follows that every element of ${\bf Q}\otimes_{\bf Z} A$ is 0, and hence ${\bf Q}\otimes_{\bf Z} A = 0$.

## Extending scalars for free modules

We will see shortly that the tensor product construction commutes with coproducts, a consequence of which will be that the sensor product of a direct sum is the direct sum of the tensor products. In the case of free modules, this yields a nice result.

>![summary] Tensor product of free modules
>Suppose $R$ is a subring of $S$ and $M$ is a free $R$-module of rank $n$, i.e., $M\simeq R^n=R\oplus R\oplus \cdots \oplus R$. Then $S\otimes_R M \simeq S^n$.

For example, we have ${\bf Q}\otimes_{\bf Z}{\bf Z}^n\simeq {\bf Q}^n$ and ${\bf C}\otimes_{\bf R}{\bf R}^n\simeq {\bf C}^n$. As another class of special case, if $F\subseteq E$ is a field extension and $V$ is an $F$-vector space of dimension $n$, then $V\simeq F^n$ as $F$-vector spaces and $E\otimes_F V\simeq E^n$ as $E$-vector spaces.