---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/algebra-theory/algebras/","tags":["algebra_theory"],"updated":"2024-11-01T15:13:05-07:00"}
---

We've seen how the notion of a ring acting on an abelian group leads to the structure of a [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules\|module]]. Can a ring act on another ring? Or, to phrase the question a bit differently, if a ring $R$ acts on a module $M$, is it possible for $M$ to have a second operation that's both compatible with the given $R$-action and makes $M$ into a ring? These two questions lead to the following two equivalent definitions of a structure known as an *algebra*.

> [!note] Definition of an algebra (via modules)
> Let $R$ be a commutative ring (with unity). An **$R$-algebra** is an $R$-module $A$ that is also equipped with a multiplication that makes $A$ into a ring (with unity), with the following compatibility property between the $R$-action and the multiplication in $A$:
> 
> $$r(a_1a_2) = (ra_1)a_2 = a_1(ra_2)$$
> 
> for all $r\in R$ and $a_1, a_2\in A$.
{ #32e02b}


>[!note] Definition of an algebra (via rings)
>Let $R$ be a commutative ring (with unity). An **$R$-algebra** is a ring $A$ (with unity) together with a ring morphism^[We always assume ring morphisms send $1_R$ to $1_A$.] $f:R\to A$ whose image is contained in the center of $A$.
{ #02247f}


Let's quickly verify these two definitions are actually equivalent. First suppose $A$ is an $R$-algebra in the first sense. For the sake of this analysis, let's use a $\star$ to denote the action of an element $r\in R$ on an element $a\in A$, and reserve a $\cdot$ (or no notation at all) for a product of elements in $A$. Then $A$ is a ring (with unity) and we can consider the map $f:R\to A$ defined by $r\mapsto r\star 1_A$. We claim this is a ring morphism whose image is in the center of $A$. First note we certainly have $f(1_R)=1_R\star 1_A = 1_A$, since part of the assumption of the $R$-action on the module $A$ is that the identity element $1_R$ acts as the identity on 
$A$. Next note that properties of the $R$-action on the module $A$ guarantee that

$$f(r+r')=(r+r')\star 1_A = r\star 1_A+r'\star 1_A = f(r)+f(r').$$

Finally, observe that

$$\begin{align*}
f(rr')&=f(r'r)\quad \text{(because $R$ is commutative)}\\
&=(r'r)\star 1_A\\
&= r'\star (r\star 1_A)\quad \text{(by the properties of the $R$-action on the module $A$)}\\
&=r'\star f(r)\\
&= r'\star (f(r)\cdot 1_A)\\
&= f(r)\cdot (r'\star 1_A)\quad \text{(by compatibility of the $R$-action with the product in $A$)}\\
&=f(r)\cdot f(r')
.\end{align*}$$

So, our map $f:R\to A$ really is a ring morphism. Moreover, for every $r\in R$ the compatibility condition guarantees that for every $a\in A$ we have

$$f(r)a = (r\star 1_A)a = r\star (1_A\cdot a) = r\star (a\cdot 1_A) = a\cdot (r\star 1_A)=af(r).$$

Thus, $f(r)$ is in the center of $A$.

Conversely, suppose $f:R\to A$ is a ring morphism whose image is contained in the center of $A$. Then $A$ is an abelian group (under its additive operation) and we can define a set map $\star:R\times A\to A$ by $r\star a = f(r)a$. We claim this defines a left action of $R$ on $A$. First note that

$$(r+r')\star a = f(r+r')a = (f(r)+f(r'))a = f(r)a+f(r')a=r\star a+r'\star a,$$

and

$$(rr')\star a = f(rr')a = f(r)f(r')a=r\star f(r')a = r\star (r'\star a).$$

We also have

$$r\star (a_1+a_2)=f(r)(a_1+a_2)=f(r)a_1+f(r)a_2=r\star a_1+r\star a_2$$

and

$$1_R\star a = f(1_R)a=1_A\cdot a = a.$$

So, we have indeed defined a left action of $R$ on $A$, giving $A$ the structure of an $R$-module. We also have

$$r\star (a_1a_2) = f(r)(a_1a_2) = (f(r)a_1)a_2=(r\star a_1)a_2,$$

and also (since the image of $f$ is in the center of $A$)

$$r\star (a_1a_2)=f(r)(a_1a_2)=(f(r)a_1)a_2=(r_1f(r))a_2=r_1(f(r)a_2)=r_1(r\star a_2).$$



>[!warning] Associative? Unital?
>We assume rings have unity, which means we're assuming every algebra also has unity. There is an alternative definition without that assumption, which one would call a **non-unital algebra**.
>
>There is also an alternative definition that results in a very similar structure to an algebra, with the notable exception that the multiplication in $A$ is not (assumed to be) associative. When the multiplication is not associative such a structure is called a **non-associative algebra**.
>
>We will not worry about these slightly more general structures.

# Examples

1. Every ring (with unity) is a ${\bf Z}$-algebra. For each ring $A$ with unity, there is a unique ring morphism ${\bf Z}\to A$ and the image of that ring morphism is always contained in the center of $A$.
2. If $A$ is a commutative ring (with unity), then $A$ is itself an $A$-algebra. More generally, if $A$ is a ring (with unity) and $R\subseteq A$ is a subring of the center of $A$, then $A$ is an $R$-algebra.
3. The ring $\operatorname{M}_n(R)$ of $n\times n$ matrices with entries in a commutative ring $R$ is an $R$-algebra. The ring morphism $f:R\to \operatorname{M}_n(R)$ sends each ring element $r$ to $r\cdot I_n$, the diagonal matrix with $r$ on the diagonal.
4. More generally, if $M$ is an $R$-module then the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules#^5f0b4d\|endomorphism ring]] $\operatorname{End}_R(M)$ is an $R$-algebra.
5. The field of complex numbers ${\bf C}$ is a commutative ${\bf R}$-algebra, with ${\bf R}\to {\bf C}$ the usual inclusion map.
6. The quaternions ${\bf H}$ is an ${\bf R}$-algebra but not a ${\bf C}$-algebra, as the complex numbers are not in the center of the quaternions.
7. The polynomial ring $R[x_1,\ldots , x_n]$ is the free commutative $R$-algebra on the set $\{x_1,\ldots, x_n\}$.
8. The [[40-49 Knowledge/41 Mathematics/Algebra theory/Tensor algebras\|tensor algebra]] $\mathcal{T}(M)$ of an $R$-module $M$ is an $R$-algebra.
9. The [[40-49 Knowledge/41 Mathematics/Algebra theory/Symmetric algebras\|symmetric algebra]] $\mathcal{S}(M)$ and [[40-49 Knowledge/41 Mathematics/Algebra theory/Exterior algebras\|exterior algebra]] $\bigwedge (M)$ of an $R$-module $M$ are both $R$-algebras.

# Morphisms of algebras

As might be expected, morphisms of $R$-algebras should be maps that respect "the algebraic structures." From the ring-centric definition, that would mean:

>[!note] Definition of an algebra morphism (via rings)
>Suppose $A$ and $B$ are two $R$-algebras. An $R$-algebra morphism from $A$ to $B$ is a ring morphism $\phi:A\to B$ such that $\phi(r\cdot a)=r\cdot \phi(a)$ for every $r\in R$ and $a\in A$.

In other words, if $f:R\to A$ and $g:R\to B$ are the ring morphisms giving $A$ and $B$ their $R$-actions, then we should have a commutative diagram

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 131.20830636717824 97.53122338823692" width="200" height="97.53122338823692" class="excalidraw-svg"><symbol id="image-099f2de770c7998d817205c769d6ce4ceddbe95e"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQ2NGV4OyIgd2lkdGg9IjIzLjQ4IiBoZWlnaHQ9IjIwLjM0IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTY5NCA1OTYgODk5Ij48ZGVmcz48cGF0aCBpZD0iTUpYLTYtVEVYLUktMUQ3MTkiIGQ9Ik00MDkgNjg4UTQxMyA2OTQgNDIxIDY5NEg0MjlINDQyUTQ0OCA2ODggNDQ4IDY4NlE0NDggNjc5IDQxOCA1NjNRNDExIDUzNSA0MDQgNTA0VDM5MiA0NThMMzg4IDQ0MlEzODggNDQxIDM5NyA0NDFUNDI5IDQzNVQ0NzcgNDE4UTUyMSAzOTcgNTUwIDM1N1Q1NzkgMjYwVDU0OCAxNTFUNDcxIDY1VDM3NCAxMVQyNzkgLTEwSDI3NUwyNTEgLTEwNVEyNDUgLTEyOCAyMzggLTE2MFEyMzAgLTE5MiAyMjcgLTE5OFQyMTUgLTIwNUgyMDlRMTg5IC0yMDUgMTg5IC0xOThRMTg5IC0xOTMgMjExIC0xMDNMMjM0IC0xMVEyMzQgLTEwIDIyNiAtMTBRMjIxIC0xMCAyMDYgLThUMTYxIDZUMTA3IDM2VDYyIDg5VDQzIDE3MVE0MyAyMzEgNzYgMjg0VDE1NyAzNzBUMjU0IDQyMlQzNDIgNDQxUTM0NyA0NDEgMzQ4IDQ0NUwzNzggNTY3UTQwOSA2ODYgNDA5IDY4OFpNMTIyIDE1MFExMjIgMTE2IDEzNCA5MVQxNjcgNTNUMjAzIDM1VDIzNyAyN0gyNDRMMzM3IDQwNFEzMzMgNDA0IDMyNiA0MDNUMjk3IDM5NVQyNTUgMzc5VDIxMSAzNTBUMTcwIDMwNFExNTIgMjc2IDEzNyAyMzdRMTIyIDE5MSAxMjIgMTUwWk01MDAgMjgyUTUwMCAzMjAgNDg0IDM0N1Q0NDQgMzg1VDQwNSA0MDBUMzgxIDQwNEgzNzhMMzMyIDIxN0wyODQgMjlRMjg0IDI3IDI4NSAyN1EyOTMgMjcgMzE3IDMzVDM1NyA0N1E0MDAgNjYgNDMxIDEwMFQ0NzUgMTcwVDQ5NCAyMzRUNTAwIDI4MloiLz48L2RlZnM+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIj48ZyBkYXRhLW1tbC1ub2RlPSJtYXRoIj48ZyBkYXRhLW1tbC1ub2RlPSJtaSI+PHVzZSBkYXRhLWM9IjFENzE5IiB4bGluazpocmVmPSIjTUpYLTYtVEVYLUktMUQ3MTkiLz48L2c+PC9nPjwvZz48L3N2Zz4=" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-0680a1cfac23644b7d052db420b00032bbccb4f7"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQ2NGV4OyIgd2lkdGg9IjIwLjc5IiBoZWlnaHQ9IjE0LjY0IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTQ0MiA0NzcgNjQ3Ij48ZGVmcz48cGF0aCBpZD0iTUpYLTUtVEVYLUktMUQ0NTQiIGQ9Ik0zMTEgNDNRMjk2IDMwIDI2NyAxNVQyMDYgMFExNDMgMCAxMDUgNDVUNjYgMTYwUTY2IDI2NSAxNDMgMzUzVDMxNCA0NDJRMzYxIDQ0MiA0MDEgMzk0TDQwNCAzOThRNDA2IDQwMSA0MDkgNDA0VDQxOCA0MTJUNDMxIDQxOVQ0NDcgNDIyUTQ2MSA0MjIgNDcwIDQxM1Q0ODAgMzk0UTQ4MCAzNzkgNDIzIDE1MlQzNjMgLTgwUTM0NSAtMTM0IDI4NiAtMTY5VDE1MSAtMjA1UTEwIC0yMDUgMTAgLTEzN1ExMCAtMTExIDI4IC05MVQ3NCAtNzFRODkgLTcxIDEwMiAtODBUMTE2IC0xMTFRMTE2IC0xMjEgMTE0IC0xMzBUMTA3IC0xNDRUOTkgLTE1NFQ5MiAtMTYyTDkwIC0xNjRIOTFRMTAxIC0xNjcgMTUxIC0xNjdRMTg5IC0xNjcgMjExIC0xNTVRMjM0IC0xNDQgMjU0IC0xMjJUMjgyIC03NVEyODggLTU2IDI5OCAtMTNRMzExIDM1IDMxMSA0M1pNMzg0IDMyOEwzODAgMzM5UTM3NyAzNTAgMzc1IDM1NFQzNjkgMzY4VDM1OSAzODJUMzQ2IDM5M1QzMjggNDAyVDMwNiA0MDVRMjYyIDQwNSAyMjEgMzUyUTE5MSAzMTMgMTcxIDIzM1QxNTEgMTE3UTE1MSAzOCAyMTMgMzhRMjY5IDM4IDMyMyAxMDhMMzMxIDExOEwzODQgMzI4WiIvPjwvZGVmcz48ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiPjxnIGRhdGEtbW1sLW5vZGU9Im1hdGgiPjxnIGRhdGEtbW1sLW5vZGU9Im1pIj48dXNlIGRhdGEtYz0iMUQ0NTQiIHhsaW5rOmhyZWY9IiNNSlgtNS1URVgtSS0xRDQ1NCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-f9fdcf897f2e4c721fea041b5375140358ec6d13"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQ2NGV4OyIgd2lkdGg9IjIyLjQ0IiBoZWlnaHQ9IjIwLjU5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTcwNSA1NTAgOTEwIj48ZGVmcz48cGF0aCBpZD0iTUpYLTQtVEVYLUktMUQ0NTMiIGQ9Ik0xMTggLTE2MlExMjAgLTE2MiAxMjQgLTE2NFQxMzUgLTE2N1QxNDcgLTE2OFExNjAgLTE2OCAxNzEgLTE1NVQxODcgLTEyNlExOTcgLTk5IDIyMSAyN1QyNjcgMjY3VDI4OSAzODJWMzg1SDI0MlExOTUgMzg1IDE5MiAzODdRMTg4IDM5MCAxODggMzk3TDE5NSA0MjVRMTk3IDQzMCAyMDMgNDMwVDI1MCA0MzFRMjk4IDQzMSAyOTggNDMyUTI5OCA0MzQgMzA3IDQ4MlQzMTkgNTQwUTM1NiA3MDUgNDY1IDcwNVE1MDIgNzAzIDUyNiA2ODNUNTUwIDYzMFE1NTAgNTk0IDUyOSA1NzhUNDg3IDU2MVE0NDMgNTYxIDQ0MyA2MDNRNDQzIDYyMiA0NTQgNjM2VDQ3OCA2NTdMNDg3IDY2MlE0NzEgNjY4IDQ1NyA2NjhRNDQ1IDY2OCA0MzQgNjU4VDQxOSA2MzBRNDEyIDYwMSA0MDMgNTUyVDM4NyA0NjlUMzgwIDQzM1EzODAgNDMxIDQzNSA0MzFRNDgwIDQzMSA0ODcgNDMwVDQ5OCA0MjRRNDk5IDQyMCA0OTYgNDA3VDQ5MSAzOTFRNDg5IDM4NiA0ODIgMzg2VDQyOCAzODVIMzcyTDM0OSAyNjNRMzAxIDE1IDI4MiAtNDdRMjU1IC0xMzIgMjEyIC0xNzNRMTc1IC0yMDUgMTM5IC0yMDVRMTA3IC0yMDUgODEgLTE4NlQ1NSAtMTMyUTU1IC05NSA3NiAtNzhUMTE4IC02MVExNjIgLTYxIDE2MiAtMTAzUTE2MiAtMTIyIDE1MSAtMTM2VDEyNyAtMTU3TDExOCAtMTYyWiIvPjwvZGVmcz48ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiPjxnIGRhdGEtbW1sLW5vZGU9Im1hdGgiPjxnIGRhdGEtbW1sLW5vZGU9Im1pIj48dXNlIGRhdGEtYz0iMUQ0NTMiIHhsaW5rOmhyZWY9IiNNSlgtNC1URVgtSS0xRDQ1MyIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-96c0af134425f074e7da9d9670b38907cbb4ee83"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjA0OGV4OyIgd2lkdGg9IjI3LjE3IiBoZWlnaHQ9IjE1LjkzIiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTY4MyA3NTkgNzA0Ij48ZGVmcz48cGF0aCBpZD0iTUpYLTMtVEVYLUktMUQ0NDUiIGQ9Ik0yMzAgNjM3UTIwMyA2MzcgMTk4IDYzOFQxOTMgNjQ5UTE5MyA2NzYgMjA0IDY4MlEyMDYgNjgzIDM3OCA2ODNRNTUwIDY4MiA1NjQgNjgwUTYyMCA2NzIgNjU4IDY1MlQ3MTIgNjA2VDczMyA1NjNUNzM5IDUyOVE3MzkgNDg0IDcxMCA0NDVUNjQzIDM4NVQ1NzYgMzUxVDUzOCAzMzhMNTQ1IDMzM1E2MTIgMjk1IDYxMiAyMjNRNjEyIDIxMiA2MDcgMTYyVDYwMiA4MFY3MVE2MDIgNTMgNjAzIDQzVDYxNCAyNVQ2NDAgMTZRNjY4IDE2IDY4NiAzOFQ3MTIgODVRNzE3IDk5IDcyMCAxMDJUNzM1IDEwNVE3NTUgMTA1IDc1NSA5M1E3NTUgNzUgNzMxIDM2UTY5MyAtMjEgNjQxIC0yMUg2MzJRNTcxIC0yMSA1MzEgNFQ0ODcgODJRNDg3IDEwOSA1MDIgMTY2VDUxNyAyMzlRNTE3IDI5MCA0NzQgMzEzUTQ1OSAzMjAgNDQ5IDMyMVQzNzggMzIzSDMwOUwyNzcgMTkzUTI0NCA2MSAyNDQgNTlRMjQ0IDU1IDI0NSA1NFQyNTIgNTBUMjY5IDQ4VDMwMiA0NkgzMzNRMzM5IDM4IDMzOSAzN1QzMzYgMTlRMzMyIDYgMzI2IDBIMzExUTI3NSAyIDE4MCAyUTE0NiAyIDExNyAyVDcxIDJUNTAgMVEzMyAxIDMzIDEwUTMzIDEyIDM2IDI0UTQxIDQzIDQ2IDQ1UTUwIDQ2IDYxIDQ2SDY3UTk0IDQ2IDEyNyA0OVExNDEgNTIgMTQ2IDYxUTE0OSA2NSAyMTggMzM5VDI4NyA2MjhRMjg3IDYzNSAyMzAgNjM3Wk02MzAgNTU0UTYzMCA1ODYgNjA5IDYwOFQ1MjMgNjM2UTUyMSA2MzYgNTAwIDYzNlQ0NjIgNjM3SDQ0MFEzOTMgNjM3IDM4NiA2MjdRMzg1IDYyNCAzNTIgNDk0VDMxOSAzNjFRMzE5IDM2MCAzODggMzYwUTQ2NiAzNjEgNDkyIDM2N1E1NTYgMzc3IDU5MiA0MjZRNjA4IDQ0OSA2MTkgNDg2VDYzMCA1NTRaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQ0NSIgeGxpbms6aHJlZj0iI01KWC0zLVRFWC1JLTFENDQ1Ii8+PC9nPjwvZz48L2c+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-141079b95261fd26e5d64a071e23844c3d299fe4"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjcuMTciIGhlaWdodD0iMTUuNDUiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAtNjgzIDc1OSA2ODMiPjxkZWZzPjxwYXRoIGlkPSJNSlgtMi1URVgtSS0xRDQzNSIgZD0iTTIzMSA2MzdRMjA0IDYzNyAxOTkgNjM4VDE5NCA2NDlRMTk0IDY3NiAyMDUgNjgyUTIwNiA2ODMgMzM1IDY4M1E1OTQgNjgzIDYwOCA2ODFRNjcxIDY3MSA3MTMgNjM2VDc1NiA1NDRRNzU2IDQ4MCA2OTggNDI5VDU2NSAzNjBMNTU1IDM1N1E2MTkgMzQ4IDY2MCAzMTFUNzAyIDIxOVE3MDIgMTQ2IDYzMCA3OFQ0NTMgMVE0NDYgMCAyNDIgMFE0MiAwIDM5IDJRMzUgNSAzNSAxMFEzNSAxNyAzNyAyNFE0MiA0MyA0NyA0NVE1MSA0NiA2MiA0Nkg2OFE5NSA0NiAxMjggNDlRMTQyIDUyIDE0NyA2MVExNTAgNjUgMjE5IDMzOVQyODggNjI4UTI4OCA2MzUgMjMxIDYzN1pNNjQ5IDU0NFE2NDkgNTc0IDYzNCA2MDBUNTg1IDYzNFE1NzggNjM2IDQ5MyA2MzdRNDczIDYzNyA0NTEgNjM3VDQxNiA2MzZINDAzUTM4OCA2MzUgMzg0IDYyNlEzODIgNjIyIDM1MiA1MDZRMzUyIDUwMyAzNTEgNTAwTDMyMCAzNzRINDAxUTQ4MiAzNzQgNDk0IDM3NlE1NTQgMzg2IDYwMSA0MzRUNjQ5IDU0NFpNNTk1IDIyOVE1OTUgMjczIDU3MiAzMDJUNTEyIDMzNlE1MDYgMzM3IDQyOSAzMzdRMzExIDMzNyAzMTAgMzM2UTMxMCAzMzQgMjkzIDI2M1QyNTggMTIyTDI0MCA1MlEyNDAgNDggMjUyIDQ4VDMzMyA0NlE0MjIgNDYgNDI5IDQ3UTQ5MSA1NCA1NDMgMTA1VDU5NSAyMjlaIi8+PC9kZWZzPjxnIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJzY2FsZSgxLC0xKSI+PGcgZGF0YS1tbWwtbm9kZT0ibWF0aCI+PGcgZGF0YS1tbWwtbm9kZT0ibWkiPjx1c2UgZGF0YS1jPSIxRDQzNSIgeGxpbms6aHJlZj0iI01KWC0yLVRFWC1JLTFENDM1Ii8+PC9nPjwvZz48L2c+PC9zdmc+" preserveAspectRatio="none" width="100%" height="100%"/></symbol><symbol id="image-166898810628ee387dbd29330a2438a90dc3aa31"><image href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IDA7IiB3aWR0aD0iMjYuOTciIGhlaWdodD0iMTYuMiIgcm9sZT0iaW1nIiBmb2N1c2FibGU9ImZhbHNlIiB2aWV3Qm94PSIwIC03MTYgNzUwIDcxNiI+PGRlZnM+PHBhdGggaWQ9Ik1KWC0xLVRFWC1JLTFENDM0IiBkPSJNMjA4IDc0UTIwOCA1MCAyNTQgNDZRMjcyIDQ2IDI3MiAzNVEyNzIgMzQgMjcwIDIyUTI2NyA4IDI2NCA0VDI1MSAwUTI0OSAwIDIzOSAwVDIwNSAxVDE0MSAyUTcwIDIgNTAgMEg0MlEzNSA3IDM1IDExUTM3IDM4IDQ4IDQ2SDYyUTEzMiA0OSAxNjQgOTZRMTcwIDEwMiAzNDUgNDAxVDUyMyA3MDRRNTMwIDcxNiA1NDcgNzE2SDU1NUg1NzJRNTc4IDcwNyA1NzggNzA2TDYwNiAzODNRNjM0IDYwIDYzNiA1N1E2NDEgNDYgNzAxIDQ2UTcyNiA0NiA3MjYgMzZRNzI2IDM0IDcyMyAyMlE3MjAgNyA3MTggNFQ3MDQgMFE3MDEgMCA2OTAgMFQ2NTEgMVQ1NzggMlE0ODQgMiA0NTUgMEg0NDNRNDM3IDYgNDM3IDlUNDM5IDI3UTQ0MyA0MCA0NDUgNDNMNDQ5IDQ2SDQ2OVE1MjMgNDkgNTMzIDYzTDUyMSAyMTNIMjgzTDI0OSAxNTVRMjA4IDg2IDIwOCA3NFpNNTE2IDI2MFE1MTYgMjcxIDUwNCA0MTZUNDkwIDU2Mkw0NjMgNTE5UTQ0NyA0OTIgNDAwIDQxMkwzMTAgMjYwTDQxMyAyNTlRNTE2IDI1OSA1MTYgMjYwWiIvPjwvZGVmcz48ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiPjxnIGRhdGEtbW1sLW5vZGU9Im1hdGgiPjxnIGRhdGEtbW1sLW5vZGU9Im1pIj48dXNlIGRhdGEtYz0iMUQ0MzQiIHhsaW5rOmhyZWY9IiNNSlgtMS1URVgtSS0xRDQzNCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" preserveAspectRatio="none" width="100%" height="100%"/></symbol>  <!-- svg-source:excalidraw -->    <defs>    <style class="style-fonts">/**/</style>      </defs>  <g transform="translate(10 22.680921977330968) rotate(0 9.5 6)"><use href="#image-166898810628ee387dbd29330a2438a90dc3aa31" width="19" height="12" opacity="1"/></g><g transform="translate(102.20830636717824 23.197198578780842) rotate(0 9.5 5.5)"><use href="#image-141079b95261fd26e5d64a071e23844c3d299fe4" width="19" height="11" opacity="1"/></g><g transform="translate(55.35687020859527 76.53122338823692) rotate(0 9.5 5.5)"><use href="#image-96c0af134425f074e7da9d9670b38907cbb4ee83" width="19" height="11" opacity="1"/></g><g stroke-linecap="round"><g transform="translate(34.80123191818353 29.875851060757782) rotate(0 31.823617013377117 0)"><path d="M0 0 C10.61 0, 53.04 0, 63.65 0 M0 0 C10.61 0, 53.04 0, 63.65 0" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(34.80123191818353 29.875851060757782) rotate(0 31.823617013377117 0)"><path d="M63.65 0 L50.05 6.34 L50.05 -6.34 L63.65 0" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M63.65 0 C60.4 1.52, 57.15 3.03, 50.05 6.34 M63.65 0 C60.05 1.68, 56.44 3.36, 50.05 6.34 M50.05 6.34 C50.05 3.47, 50.05 0.61, 50.05 -6.34 M50.05 6.34 C50.05 2.85, 50.05 -0.64, 50.05 -6.34 M50.05 -6.34 C52.99 -4.97, 55.92 -3.6, 63.65 0 M50.05 -6.34 C55.38 -3.85, 60.71 -1.37, 63.65 0 M63.65 0 C63.65 0, 63.65 0, 63.65 0 M63.65 0 C63.65 0, 63.65 0, 63.65 0" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(51.597029786354796 72.60200353242149) rotate(0 -13.112508861993348 -16.50113474767703)"><path d="M0 0 C-4.37 -5.5, -21.85 -27.5, -26.23 -33 M0 0 C-4.37 -5.5, -21.85 -27.5, -26.23 -33" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(51.597029786354796 72.60200353242149) rotate(0 -13.112508861993348 -16.50113474767703)"><path d="M-26.23 -33 L-12.8 -26.3 L-22.73 -18.42 L-26.23 -33" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M-26.23 -33 C-21.25 -30.52, -16.27 -28.03, -12.8 -26.3 M-26.23 -33 C-23.11 -31.45, -20 -29.89, -12.8 -26.3 M-12.8 -26.3 C-16 -23.76, -19.2 -21.22, -22.73 -18.42 M-12.8 -26.3 C-16.22 -23.59, -19.64 -20.87, -22.73 -18.42 M-22.73 -18.42 C-23.76 -22.73, -24.8 -27.04, -26.23 -33 M-22.73 -18.42 C-23.55 -21.85, -24.38 -25.28, -26.23 -33 M-26.23 -33 C-26.23 -33, -26.23 -33, -26.23 -33 M-26.23 -33 C-26.23 -33, -26.23 -33, -26.23 -33" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(76.64339502836455 71.42335105044455) rotate(0 13.407171982487583 -15.322482265700089)"><path d="M0 0 C4.47 -5.11, 22.35 -25.54, 26.81 -30.64 M0 0 C4.47 -5.11, 22.35 -25.54, 26.81 -30.64" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(76.64339502836455 71.42335105044455) rotate(0 13.407171982487583 -15.322482265700089)"><path d="M26.81 -30.64 L22.63 -16.24 L13.09 -24.59 L26.81 -30.64" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M26.81 -30.64 C25.77 -27.06, 24.73 -23.47, 22.63 -16.24 M26.81 -30.64 C25.55 -26.29, 24.29 -21.94, 22.63 -16.24 M22.63 -16.24 C19.37 -19.09, 16.11 -21.95, 13.09 -24.59 M22.63 -16.24 C19.62 -18.88, 16.61 -21.51, 13.09 -24.59 M13.09 -24.59 C17.66 -26.6, 22.23 -28.62, 26.81 -30.64 M13.09 -24.59 C18.58 -27.01, 24.07 -29.43, 26.81 -30.64 M26.81 -30.64 C26.81 -30.64, 26.81 -30.64, 26.81 -30.64 M26.81 -30.64 C26.81 -30.64, 26.81 -30.64, 26.81 -30.64" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(24.149263833735432 58.9140780020426) rotate(0 8 7.5)"><use href="#image-f9fdcf897f2e4c721fea041b5375140358ec6d13" width="16" height="15" opacity="1"/></g><g transform="translate(85.6445297760416 62.88739360451379) rotate(0 7.5 5)"><use href="#image-0680a1cfac23644b7d052db420b00032bbccb4f7" width="15" height="10" opacity="1"/></g><g transform="translate(52.52624964217023 10) rotate(0 8.5 7.5)"><use href="#image-099f2de770c7998d817205c769d6ce4ceddbe95e" width="17" height="15" opacity="1"/></g></svg>

# Category theoretic interpretation

Much like a ring is a monoid object in the category of abelian groups, an $R$-algebra is a monoid object in the category of $R$-modules. Since I haven't (yet) typed up any notes on monoidal categories and monoid objects, I won't say any more here.

---

## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Algebra theory/Tensor algebras\|Tensor algebras]]
[[40-49 Knowledge/41 Mathematics/Algebra theory/Symmetric algebras\|Symmetric algebras]]
[[40-49 Knowledge/41 Mathematics/Algebra theory/Exterior algebras\|Exterior algebras]]