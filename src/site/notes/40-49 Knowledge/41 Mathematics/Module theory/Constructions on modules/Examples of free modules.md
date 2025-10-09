---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/examples-of-free-modules/","tags":["module_theory"],"updated":"2025-10-09T14:25:16-07:00"}
---

Let's consider some specific examples of free modules.
## The free module on the empty set
---

Before even constructing the free module functor, we deduced that if it were to exist, it would necessarily satisfy $F(\emptyset)\simeq 0$. In terms the "formal sums" construction of $F(\emptyset)$, this is often found to be unsettling, which is why you sometimes see books/people declare (usually by fiat) that the "empty combination" is the zero element. From our point of view, that is the only possible correct answer.

Also note that, if you view the elements of $F(\emptyset)$ as set maps $f:\emptyset \to U(R)$ such that $f(x)=0_R$ for all but finitely many $x\in \emptyset$, you're immediately forced to conclude two things: 1) the extra condition is empty; and 2) there is exactly one such map, namely the empty map. So $F(\emptyset)$ must consist of a single element, and as there's only one such $R$-module (up to isomorphism), it must be the zero module.

>[!summary]
>The free module on the empty set is the zero module.


## The free module on a singleton set
---

Now let's consider a singleton set $X=\{x\}$. By our construction, in terms of formal sums the module $F(\{x\})$ consists of all formal $R$-multiples $rx$ with $r\in R$. We therefore have a set bijection $F(\{x\})\simeq R$, which you can quickly verify is actually an -module isomorphism. Thus, $F(\{x\})\simeq R$, exactly as we predicted.

>[!summary]
>For any singleton set $X$, the free module on $X$ is isomorphic to $R$ as an $R$-module.

## The free module on a finite set
---

Next let's consider an arbitrary finite set $X=\{x_1,x_2,\ldots, x_n\}$. By our construction, in term of formal sums the module $F(X)$ consists of all formal $R$-linear combinations of the form $r_1x_1+r_2x_2+\cdots +r_n x_n$, which his evidently isomorphic to the $R$-module $R\oplus R\oplus \cdots \oplus R$ (the direct sum of $R$ with itself $n$ times). This $R$-module is often denoted $R^n$.

> [!question] Is this bad notation?
> The notation $R^n$ is usually shorthand for  the direct product $R\times R\times \cdots \times R$, not the direct sum. Fortunately, for finite families in the category $R\text{-{\bf Mod}}$ the direct product and direct sum are isomorphic $R$-modules.


## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Generators for modules and submodules\|Generators for modules and submodules]]

