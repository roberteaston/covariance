---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/ab-categories/","tags":["category_theory/abelian_categories"],"updated":"2024-11-15T09:56:46-08:00"}
---

# $Ab$-categories

There are many familiar categories in which the hom-sets have additional structure:
- In the category $\textbf{Vec}_F$ of vector spaces over a field $F$, each hom-set $\operatorname{Hom}_{\textbf{Vec}_F}(V,W)$ has a (natural) structure of an $F$-vector space. Addition is defined by addition of outputs; i.e., $(S+T)(v)=S(v)+T(v)$ for every $v\in V$. The additive identity is the zero map.
- In the category $R\textbf{-Mod}$ of left $R$-modules over a fixed ring $R$, each hom-set $\operatorname{Hom}_R(M,N)$ has a (natural) structure of an abelian group. Once again, addition of morphisms is defined via addition of outputs.
- When $R$ is commutative, the hom-sets in $R\textbf{-Mod}$ have a (natural) structure of $R$-modules.
- In the category $\textbf{Ab}$ of abelian groups, each hom-set $\operatorname{Hom}_{\textbf{Ab}}(A,B)$ has a (natural) structure of an abelian group, via addition of outputs.

Why have I cryptically written "... a (natural) structure ..." in each of the above examples? Intuitively, we would like composition to "respect" these added structures.

Rather than make this precise in full generality, let's focus on the examples of the categories $\textbf{Ab}$ and $R\textbf{-Mod}$, in which the hom-sets have a (natural) structure of abelian groups.

> [!note] Definition of $Ab$-category
> An **$Ab$-category** (also called a **preadditive** category) is a category $A$ in which each hom-set $\operatorname{Hom}_A(a,b)$ has the structure of an abelian group, in such a way that composition is bilinear. In other words, for morphisms $f,f':a\to b$ and $g,g':b\to c$ we have
> 
> $$(g+g')\circ (f+f')=g\circ f+g\circ f'+g'\circ f+g'\circ f'.$$
{ #b61743}


Note that because the composition of morphisms is bilinear, it can also be written using the tensor product (over ${\bf Z}$) as a linear map:

$$\operatorname{Hom}_A(b,c)\otimes_{\bf Z}\operatorname{Hom}_A(a,b)\to \operatorname{Hom}_A(a,c)$$

# An alternative definition

It is possible to define an $Ab$-category directly (without first defining a category), as given by the following data:
1. A set of objects.
2. A function that assigns to each ordered pair of objects $(b,c)$ an abelian group $A(b,c)$.
3. For each ordered triple of objects $(a,b,c)$ a morphism of abelian groups
   
   $$A(b,c)\otimes_{\bf Z}A(a,b)\to A(a,c).$$
   
   This morphism is called "composition" and written $g\otimes f\mapsto g\circ f$.
1. For each object $a$ a group morphism ${\bf Z}\to A(a,a)$. (This is the analogue of each object in a category having a unique identity arrow, which corresponds to a set map $\{*\}\to \operatorname{Hom}_A(a,a)$.)
These data are required to satisfy the usual associative and unit laws for composition. This is a definition of $Ab$-category completely analogous to the definition of a conventional category, with:
- $\textbf{Set}$ replaced by $\textbf{Ab}$
- Cartesian product $\times$ of sets replaced by tensor product $\otimes_{\bf Z}$ in $\textbf{Ab}$
- the one-point set $\{*\}$ replaced by ${\bf Z}$
This suggests a generalization to a concept called an *enriched category*, but we will not explore that for now.

# Additive functors

If we are dealing with $Ab$-categories, we will probably want to restrict our functors to those that respect that morphism addition:

> [!note] Definition of additive functors
> If $A$ and $B$ are $Ab$-categories, a functor $T:A\to B$ is said to be **additive** when every function $T:\operatorname{Hom}_A(a,a')\to \operatorname{Hom}_B(T(a),T(a'))$ is a group morphism; i.e., when $T(f+f')=T(f)+T(f')$ for all parallel morphisms $f,f'$.

When talking about functors between $Ab$-categories, we will always assume we mean additive functors.
# Biproducts

Our main example categories, namely $\textbf{Ab}$ and $R\textbf{-Mod}$, have additional properties beyond the group structure on the hom-sets. One of those properties is that products and coproducts always exist for every pair of objects, and they're always isomorphic. In other words, the product functor $\times$ and coproduct functor $\sqcup$ are naturally isomorphic. Because of this, there is usually some confusion as to which type of product to use, and you often see textbooks using coproduct (usually called the direct sum and denoted $A\oplus B$) as if it's a product; e.g., by referring to projection maps $\pi_1:A\oplus B\to A$ and $\pi_2:A\oplus B\to B$.

This situation can happen more generally in any $Ab$-category. We first introduce a new type of product:

> [!note] Biproducts
> In a $Ab$-category $A$, a **biproduct diagram** for a pair of objects $a, b$ is a diagram
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJhIl0sWzEsMCwiYyJdLFsyLDAsImIiXSxbMSwwLCJwXzEiLDIseyJvZmZzZXQiOjF9XSxbMSwyLCJwXzIiLDAseyJvZmZzZXQiOi0xfV0sWzEsMCwiaV8xIiwwLHsib2Zmc2V0IjotMSwic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMSwyLCJpXzIiLDIseyJvZmZzZXQiOjEsInN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9LCJoZWFkIjp7Im5hbWUiOiJub25lIn19fV1d&embed" width="300" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
> with arrows that satisfy the identities
> 
> $$p_1i_1=1_a,\quad p_2i_2=1_b,\quad i_1p_1+i_2p_2=1_c.$$
{ #205a18}


Note that this definition is entirely "internal" in that it refers only to morphisms to and from the objects $a$ and $b$, as opposed to the usual product $a\times b$ or coproduct $a\sqcup b$, which are defined as limits and colimits and hence involve morphisms to and from every object in the category.

In other words, to verify you have a biproduct diagram, you just need to directly verify the three identity relations above. On the other hand, to verify $a\xleftarrow{p_1} c \xrightarrow{p_2} b$ is a product you need to verify it satisfies the appropriate universal property, which involves comparing $c$ (with its projections) to every other object $d$ (that also has projections to $a$ and $b$).

Fortunately, we have the following result:

> [!summary] Products, coproducts, and biproducts
> Two objects $a$ and $b$ in an $Ab$-category $A$ have a product in $A$ if and only if they have a biproduct in $A$. In the biproduct diagram above, the object $c$ with the morphisms $p_1$ and $p_2$ is a product of $a$ and $b$, while the object $c$ with the morphisms $i_1$ and $i_2$ is a coproduct of $a$ and $b$.
>
> In particular, two objects $a$ and $b$ have a product in $A$ exactly when they have a coproduct in $A$.

In the categories $\textbf{Ab}$ and $R\textbf{-Mod}$ the biproduct is usually called the **direct sum** of the given objects. Because of this, if the biproduct diagram exists for all $a, b$ in a given $Ab$-category $A$, the object $c$ is usually written $c=a\oplus b$. This defines a functor $\oplus:A\times A\to A$, with $f_1\oplus f_2$ defined for morphisms $f_1:a\to a'$ and $f_2:b\to b'$ either by the equations

$$p'_j(f_1\oplus f_2)=f_jp_j$$

(i.e., as defined for the product functor $\times$), or by the equations

$$(f_1\oplus f_2)i_k = i_k'f_k$$

(i.e., as defined for the coproduct functor $\sqcup$). By the properties of the biproduct diagram, either choice implies the other.

In other words, the identification of the product functor $a\times b$ with the coproduct functor $a\sqcup b$ is a natural isomorphism.

## Generalizing biproducts

We can iterate this process. Given $a_1, \ldots, a_n\in A$ we can form a product $\bigoplus_j a_j$ characterized (up to isomorphism) by the diagram
$$a_j\xrightarrow{i_j}\bigoplus_j a_j\xrightarrow{p_k}a_k$$
and the equations
$$i_1p_1+\cdots +i_np_n=1,\quad p_ki_j=\delta_{kj},$$
where $\delta_{kj}=0$ if $k\neq j$ and $\delta_{kk}=1$.

Moreover, for given objects $a_i, c_j\in A$ with $1\leq i\leq n$ and $1\leq j\leq m$ there is an isomorphism of abelian groups
$$\operatorname{Hom}_A\left(\bigoplus_k c_k,\bigoplus_j a_j\right)\simeq \bigoplus_{j,k}\operatorname{Hom}_C(c_k,a_j)$$
This implies that each morphism $f:\bigoplus_k c_k\to \bigoplus_j a_j$ is determined by the $n\times m$ matrix of its **components** $f_{kj}:p_jfi_k:c_k\to a_j$. Composition of morphisms is then given by the usual matrix product of the matrices of components.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Additive categories\|Additive categories]]