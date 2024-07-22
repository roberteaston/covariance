---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/constructions-on-modules/generators-for-modules-and-submodules/","tags":["module_theory"],"updated":"2024-03-06T13:54:01-08:00"}
---

## Submodule generated by a subset

Suppose $M$ is an $R$-module and $A$ is any collection of elements in $M$. The **submodule of $M$ generated by $A$** is the collection of all finite $R$-linear combinations of elements in $A$. In other words, it is the subset of all elements of the form $\displaystyle \sum_{a\in A} r_a a$, where $r_a\in R$, all but finitely many of which are zero. It is the smallest submodule of $M$ that contains the elements of $A$.

Of course, we should officially verify that the set $RA$ is indeed a submodule of $M$, and that it truly is the smallest submodule of $M$ that contains $N$. This would be relatively straightforward, but there is an alternate definition of $RA$ that makes all of those properties immediate.

Consider the following equivalent definition, which uses our [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Free modules\|free module]] construction. By the universal property of the free module $F(A)$, the set inclusion $A\to U(M)$ corresponds to a module morphism $F(A)\to M$. The image of this morphism is a submodule of $M$ that contains $A$. By the construction of the free module $F(A)$, this image is exactly the set $RA$ described above. Furthermore, if $N$ is any submodule of $M$ that contains $A$, then the inclusion $A\to U(N)$ corresponds to a module morphism $F(A)\to N$, and again by the definition of $F(A)$ the image of this morphism is $RA$. Thus $FA$ is a submodule of $N$, making it the smallest submodule of $M$ that contains $A$.

---
### Generators for a given submodule

If $N$ is a submodule of $M$, we say a subset of elements $A$ **generates N** if $N=RA$. In this case, we call $A$ a **set of of generators** (or a **generating set**) for $N$, and we say $N$ is **generated by $A$**. In terms of elements, $N$ is generated by $A$ exactly when every $n\in N$ can be expressed in the form $n=\displaystyle \sum_{a\in A} r_a a$ for some $r_a\in R$ (all but finitely many zero); note that such an expression does *not* have to be unique.

If there exists a *finite* set $A$ that generates $N$, then we say $N$ is **finitely generated**.

If there exists a singleton set that generates $N$, then we say $N$ is **cyclic**. In this case, this is equivalent to the existence of a single element $n_0\in N$ such that every element $n\in N$ can be expressed in the form $n=r n_0$ for some $r\in N$; as before, this expression does *not* have to be unique.

Connecting everything back to free modules once more, we see that $N$ is generated by $A$ exactly when the module morphism $F(A)\to N$ (corresponding to the inclusion $A\to U(N)$) is surjective. The submodule $N$ is cyclic exactly when there is a surjection $F(\{\bullet\})\to N$, where $\{\bullet\}$ is a/the singleton set.

---
## A word on relations

A common way to describe a group was to give a *presentation*, which consisted of a list of generators together with their "fundamental" relations. We can make that concept clear in the context of modules.

Suppose $M$ is a module. A subset $A$ of $M$ is a set of generators exactly when the corresponding module morphism $\pi_1:F(A)\to M$ is surjective. Moreover, the kernel of this morphism captures all of the relations between those generators, as it consists exactly of every possible $R$-linear combination of the generators that equals zero (in $M$). We can now say that a set of "fundamental" relations on the generators is precisely a set $B$ of generators for $\ker(\pi_1)$. As before, this would correspond to a surjective module morphism $F(B)\to \ker(\pi_1)$.

Composing this new module morphism with the inclusion of $\ker(\pi_1)$ in $F(A)$, we would have chain of morphisms $F(B)\to F(A)\to M$ in which the kernel of the morphism on the right is the image of the morphism on the left. This is the start of an *exact sequence* of morphisms, something to be explored later!