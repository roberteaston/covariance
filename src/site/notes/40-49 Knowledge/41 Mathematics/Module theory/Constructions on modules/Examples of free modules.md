---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/examples-of-free-modules/","tags":["module_theory"],"updated":"2024-03-06T13:53:48-08:00"}
---

For each finite set $A$, the structure of the free module $F(A)$ is entirely determined by the cardinality of $A$. Let's consider some specific examples.
## The free module on the empty set

What is the free module on the empty set? According to our construction the set of elements of the $R$-module $F(\emptyset)$ consists of all formal finite $R$-linear combinations of elements $\emptyset$. But what the heck is the set of combinations of nothing, you might ask? Let's look at the universal property $F(\emptyset)$ should enjoy, namely that there is a natural bijection $$\phi_{\emptyset, M}:\operatorname{Hom}_R(F(\emptyset), M)\to \operatorname{Hom}_{\textbf{Set}}(\emptyset, U(M)).$$
The empty set is the initial object in $\textbf{Set}$, so there is a unique set map (the empty map) from it to any other set. In other words, the set $\operatorname{Hom}_{\textbf{Set}}(\emptyset, U(M))$ is a singleton set. Our bijection above then implies $\operatorname{Hom}_R(F(\emptyset), M)$ is a singleton set, for every $R$-module $M$. This exactly says that $F(\emptyset)$ is the initial object in the category $R-\textbf{Mod}$, which we've already seen is the zero module. Thus, $F(\emptyset)= 0$, the zero module.

This is why you sometimes see books/people declare (usually by fiat) that the "empty combination" is the zero element.

>[!summary]
>The free module on the empty set is the zero module.

---
## The free module on a singleton set

Now let's consider a singleton set $A=\{a\}$. By our construction, the module $F(\{a\})$ consists of all $R$-multiples $ra$ with $r\in R$. We therefore have a set bijection $F(\{a\})\simeq R$, which you can quickly verify is actually an $R$-module isomorphism. We could have already predicted this, since [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercise Solutions/Hom(R,M) is M - Solution\|we've seen]] that $\operatorname{Hom}_R(R,M)\simeq R$ as an $R$-module (at least for commutative rings $R$), and the universal property for $F(\{a\})$ is that we have a natural set bijection $$\phi_{\{a\},M}:\operatorname{Hom}_R(F(\{a\}), M)\to \operatorname{Hom}_{\textbf{Set}}(\{a\},U(M))\simeq U(M)$$
>[!summary]
>For any singleton set $A$, the free module on $A$ is isomorphic to $R$ as an $R$-module.

---
## The free module on a finite set

Next let's consider an arbitrary finite set $A=\{a_1,a_2,\ldots, a_n\}$. By our construction, the module $F(A)$ consists of all formal $R$-linear combinations of the form $r_1a_1+r_2a_2+\cdots +r_n a_n$, which his evidently isomorphic to the $R$-module $R\oplus R\oplus \cdots \oplus R$ (the direct sum of $R$ with itself $n$ times). This $R$-module is usually denoted $R^n$.

Note that there is no danger of confusing $R^n$ with the direct product $R\times R\times \cdots \times R$, since for finite families the direct product and direct sum are isomorphic $R$-modules.