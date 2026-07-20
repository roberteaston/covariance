---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2026-summer/reu-1-matt-and-zoey/reu-meeting-2026-07-20/","updated":"2026-07-20T14:21:07-07:00","dg-note-properties":{"last updated":"2026-07-20T14:21:07-07:00","date":"2026-07-20"}}
---

This following is a brief summary of our research meeting on 2026-07-20.

## Meeting summary
---

We went over the various properties of the category of Lie algebras, ultimately seeing that it's just short of being an abelian category. (It's something called a *semi-abelian category*.) We had to delay talking about the coproducts, though, since those constructions are best understood through the free Lie algebra and universal enveloping Lie algebra constructions.

## Tasks for next meeting
---

Now we want to start connecting our categories to other categories. We'll begin with connections (i.e., functors) between the category of Lie algebras and other categories. Let's start with two big ones:

#### Free Lie algebras

Let $U:{\bf LieAlg}_k\to {\bf Vec}_k$ be the forgetful functor that sends each Lie algebra over $k$ to its underlying $k$-vector space, i.e., forgets the bracket operation.
 - It turns out that the functor $U$ has a left adjoint, $F:{\bf Vec}_k\to {\bf LieAlg}_k$. What does this mean?
 - Given a $k$-vector space $V$, describe the Lie algebra $F(V)$. (This is called the *free Lie algebra* on the vector space $V$.)

#### Universal enveloping algebras

Let ${\bf AssocAlg}_k$ be the category of (unital) associative $k$-algebras, and let $V:{\bf AssocAlg}_k\to {\bf LieAlg}_k$ be the functor that sends each associative $k$-algebra $A$ to the Lie algebra whose vector space is the underlying vector space of $A$ (i.e., forget the multiplication in general, but remember the addition and multiplication by elements of the base field, $k$) and with bracket defined by $[x,y]:=xy-yx$.
- Verify that $V(A)$ is indeed a Lie algebra over $k$.
- What is the arrow map of the functor $V$?
- It turns out the functor $V$ has a left adjoint, $U:{\bf LieAlg}_k\to {\bf AssocAlg}_k$. What does this mean?
- Give a Lie algebra $\mathfrak{g}$, describe the Lie algebra $U(\mathfrak{g})$. (This is called the *universal enveloping algebra* of $\mathfrak{g}$.)
- Look up some properties of the universal enveloping algebra, e.g., how is $\mathfrak{g}$ related to $U(\mathfrak{g})$?

## References
---

[nLab](https://ncatlab.org/nlab/show/group+object)