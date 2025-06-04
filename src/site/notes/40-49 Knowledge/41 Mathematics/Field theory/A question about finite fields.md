---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/field-theory/a-question-about-finite-fields/","tags":["field_theory"],"updated":"2025-05-30T10:26:01-07:00"}
---

## Background
---

### Cyclic groups

For each positive integer $m$ let's write ${\bf Z}_m$ for the (commutative) ring ${\bf Z}/m{\bf Z}$. Here are some quick facts:
- The ring ${\bf Z}_m$ is a field when $m$ is prime, but not even a domain when $m$ is composite.
- If we forget the multiplicative operation, we can view ${\bf Z}_m$ as an abelian group under addition. There should be notation to distinguish whether we are viewing ${\bf Z}_m$ as a ring or as a group (and there is in category theory), but most algebraists just say (or imply) the type of structure they're considering.
- Up to (group) isomorphism, for each positive integer $m$ there is a unique cyclic group of order $m$, namely ${\bf Z}_m$.

We also have very precise information about the entire lattice of subgroups of a finite cyclic group:

>[!summary] Subgroups of finite cyclic groups
> Suppose $G$ is a finite cyclic group of order $m$, i.e, $G\cong {\bf Z}_m$. Then for every subgroup $H\leq G$ we have:
> - $H$ is cyclic; and
> - $|H|$ divides $|G|$.
> 
>Conversely, for each divisor $d$ of $m$ there is a unique subgroup $H\leq G$ of order $d$. This subgroup consists precisely of those elements $g\in G$ that have order dividing $d$. (If we use multiplicative notation in $G$, then these are the elements $g$ that satisfy $g^d=1$.)
> 
> Moreover, if $H,K\leq G$ are subgroups of orders $d$ and $e$, respectively, then $H\leq K$exactly when $d$ divides $e$.

In other words, the subgroups of ${\bf Z}_m$ look exactly like ${\bf Z}_d$ for the divisors $d$ of $n$, and ${\bf Z}_d\leq {\bf Z}_e$ exactly when $d$ divides $e$.

### Finite fields

For each finite field $F$, we recall the following basic facts: 
- The characteristic of $F$ is a positive prime integer $p$.
- There is a (unique, injective) field morphism ${\bf Z}_p\to F$, which allows us to consider $F$ as a field extension of the field ${\bf Z}_p$. In particular, this allows us to consider $F$ as a ${\bf Z}_p$-vector space. Since $F$ is finite (as a set), it must also be finite-dimensional as a ${\bf Z}_p$-vector space.
- If $n$ is the dimension of $F$ as a ${\bf Z}_p$-vector space, then $|F|=p^n$.
- Every element $\alpha\in F$ satisfies $\alpha^{p^n}=\alpha$, which in turn allows us to prove that $F$ is a splitting extension over ${\bf Z}_p$ for the polynomial $f(x)=x^{p^n}-x$. Since splitting extensions are unique (up to unique isomorphism), this proves that $F$ is the unique field of order $p^n$ (up to isomorphism).
- If $F\to E$ is a field morphism between finite fields, then $F$ and $E$ have the same characteristic (say $p$) and the dimension of $F$ as a ${\bf Z}_p$-vector space divides the dimension of $E$ as a ${\bf Z}_p$-vector space. In other words, we have $|F|=p^n$ and $|E|=p^m$ with $n\leq m$.

Quick summary of the above facts: Every finite field $F$ has order $p^n$ for some prime $p$ and positive integer $n$, and up to isomorphism there is exactly one field of each such order.

### The big result we need from field theory

We need the following foundational result from field theory, which is sneakier to prove than it might seem:

>[!summary] Groups of units of fields
>Suppose $F$ is any field and $F^{\times}$ is its group of (multiplicative) units. Then every finite subgroup of $F^{\times}$ is cyclic. 

>[!note] Corollary
> Suppose $F$ is a finite field of order $p^n$. Then $F^{\times}\cong {\bf Z}_{p^n-1}$.

So, if we're wondering about the subgroups of $F^{\times}$ for a finite field, we just need to understand the subgroups of the cyclic group ${\bf Z}_{p^n-1}$. Fortunately, the result above tells us the entire lattice structure for the subgroups of ${\bf Z}_{p^n-1}$: there is a unique subgroup $H$ of order $d$ for each divisor $d$ of $p^n-1$, and for two such subgroups $H, K\leq F^{\times}$ we have $H\leq K$ exactly when $|H|$ divides $|K|$.

## The subgroup of $k^{\text{th}}$ powers of $F^{\times}$
---

Now we wish to understand the subgroup $K\leq F^{\times}$ consisting of elements that are $k^{\text{th}}$ powers of elements in $F^{\times}$.  This subgroup is exactly the image of the group morphism $\phi:F^{\times}\to F^{\times}$ defined by $\phi(\alpha)=\alpha^k$. What is the size of this subgroup? One way to answer this question is to use the First Isomorphism Theorem for groups, which tells us that
$$F^{\times}/\ker(\phi)\cong \operatorname{im}(\phi).$$
In other words,
$$|K|=|\operatorname{im}(\phi)|=[F^{\times}:\ker(\phi)]=\frac{|F^{\times}|}{|\ker(\phi)|}=\frac{p^n-1}{|\ker(\phi)|}.$$
Can we compute $\ker(\phi)?$ This is the subgroup of $F^{\times}$ consisting of those elements $\alpha$ that satisfy $\alpha^k=1$, i.e., they are the elements of the field $F$ that are the roots of the polynomial $f(x)=x^k-1$. Or, strictly from the point of view of group theory, they are the elements in the group $F^{\times}$ of order dividing $k$.

From the description of such $\alpha$ as the roots of $f(x)=x^k-1$, you might at first think there are exactly $k$ such elements. But remember that we're working in positive characteristic, so we can easily be duped by repeated roots. For example, if $p=2$ and $k=4$, then we have $f(x)=x^4-1=(x-1)^4$, which only has one root!

We can make things easier on ourself by imposing some conditions on $k$. For example, if we restrict ourselves to those $k$ that divide $p^n-1$, then by our fact about finite cyclic groups above, the set of elements of order dividing $k$ is exactly the subgroup of $F^{\times}$ of order $k$. In other words, in this case $|\ker(\phi)|=k$ and hence $|K|=\frac{p^n-1}{k}$.

Now we can answer the following question:

>[!question] A question about $k^{\text{th}}$ powers in finite fields
>Suppose $F$ is a finite field of order $p^n$ and $k$ is a positive integer that divides $p^n-1$. Let $H={\bf Z}_p^{\times}$ and let $K\leq F^{\times}$ be the subgroup of $k^{\text{th}}$ powers in $F^{\times}$. When do we have $H\leq K$?

In this case, we have $|H|=p-1$ and (based on our work above) $|K|=\frac{p^n-1}{k}$. Using our basic theory about subgroups of the finite cyclic group $F^{\times}$, we can answer the question: we have $H\leq K$ exactly when $p-1$ divides $\frac{p^n-1}{k}$.

If desired, we can rewrite the divisibility condition equivalently as: $H\leq K$ exactly when $k$ divides $\frac{p^n-1}{p-1}$.