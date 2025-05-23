---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/exact-sequences/exact-sequences-i-illustrative-examples/","tags":["module_theory"],"updated":"2025-03-31T12:57:51-07:00"}
---

Before diving into the definition of an exact sequence (and morphisms of exact sequences), we examine a few illustrative examples.

### Submodules and quotient modules
{ #645350}


Suppose $N$ is a submodule of an $R$-module $M$, where $R$ is a ring (with unity). We then have a pair of $R$-module morphisms connecting the submodule $N$ to the quotient module $M/N$, namely the injective morphism $i:N\to M$ into $M$ and the other a surjective morphism $\pi:M\to M/N$, and these morphisms are related by the fact that $\ker(\pi)=\operatorname{im}(i):$

$$N\xrightarrow{i} M\xrightarrow{\pi} M/N.$$

### Direct sums of modules

Suppose $M_1$ and $M_2$ are two $R$-modules. We have seen that their direct sum $M_1\oplus M_2$ and direct product $M_1\times M_2$ are isomorphic as $R$-modules. (Later we'll see this as an instance of something called a [[40-49 Knowledge/41 Mathematics/Category theory/Abelian categories/Preadditive categories#Biproducts\|biproduct]].) The former comes with injective $R$-module morphisms $j_i:M_i\to M_1\oplus M_2$; the latter comes with surjective $R$-module morphisms $p_i: M_1\times M_2\to M_i$. If we let $f:M_1\oplus M_2\xrightarrow{\sim} M_1\times M_2$ be the $R$-module isomorphism that sends $m_1+m_2\mapsto (m_1, m_2)$, then pre-composing each of the projections $p_i$ with $f$ gives surjective $R$-module morphisms $\pi_i:M_1\oplus M_2\to M_i$.

What does all of this have in common with the previous example? There is now a very similar connection between the module $M_1$ and the module $M_2$ by way of the module $M_1\oplus M_2$, namely a sequence of $R$-module morphisms

$$M_1\xrightarrow{j_1} M_1\oplus M_2\xrightarrow{\pi_2} M_2$$

where $j_1$ is injective, $\pi_2$ is surjective, and $\ker(\pi_2)=\operatorname{im}(j_1)$.

### Generators and relations for a module

Suppose $M$ is an $R$-module and $X_1$ is any subset of the elements of $M$. The submodule of $M$ generated by $X_1$ is exactly the image of the $R$-module morphism

$$F(X_1)\xrightarrow{\pi_1}M$$

where $F(X_1)$ is the free $R$-module on $X_1$ and $\pi$ is the $R$-module morphism corresponding to the inclusion $i:X_1\to U(M)$.  In particular, the set $X_1$ generates $M$ as an $R$-module exactly when $\pi_1$ is surjective.

The kernel of $\pi_1$ is the submodule consisting of all formal sums $\displaystyle\sum_{x\in X_1} r_x\cdot x$ that simplify to $0_M$ in the module $M$. In other words, it consists of all $R$-linear **relations** among the elements in $X_1$. If we let $i_1:\ker(\pi_1)\to F(X_1)$ be the inclusion morphism, then we have a sequence of morphisms

$$\ker(\pi_1)\xrightarrow{i_1}F(X_1)\xrightarrow{\pi_1}M$$

where $i_1$ is injective, $\pi_1$ is surjective, and $\ker(\pi_1)=\operatorname{im}(i_1)$. This information amounts to the classic "generators and relations" description of a module.

However, as the suspicious subscripts might indicate, there is a new feature available in this example. Unlike in the previous examples, here it is clear that we can continue this process. That's because $\ker(\pi_1)$ is an $R$-module, and so a set of generators for $\ker(\pi_1)$ corresponds to another surjection

$$F(X_2)\xrightarrow{\pi_2'}\ker(\pi_1).$$

Composing with $i_1$ then gives a sequence of morphisms

$$F(X_2)\xrightarrow{\pi_2}F(X_1)\xrightarrow{\pi_1}M.$$

While it's true $\pi_2$ is no longer surjective, we still do have $\ker(\pi_1)=\operatorname{im}(\pi_2)$. And we can once again continue the process, finding the kernel of $\pi_2$, then a set of generators for that kernel, hence a surjection from another free module onto that kernel, and so on. In doing so, we are slowly building a **free resolution** of the module $M$:

$$\cdots \xrightarrow{\pi_{n+1}}F(X_n)\xrightarrow{\pi_n} F(X_{n-1})\xrightarrow{\pi_{n-1}}\cdots \xrightarrow{\pi_2}F(X_1)\xrightarrow{\pi_1}M.$$

Moreover, at every spot in this sequence we have $\ker(\pi_n)=\operatorname{im}(\pi_{n+1})$.

One could reasonably hope that most (maybe even all?) properties of $M$ are encoded in this sequence of morphisms. There's a catch, though. The choice of generators (at every step!) is not unique. So for a given module $M$ there could be (and almost always are) many other such sequences (of free modules with the same kernel-image relationships). How could we compare one sequence to another? We would probably want a notion of "morphism" between such sequences...

## Suggested next note
---

[[40-49 Knowledge/41 Mathematics/Module theory/Exact sequences/Exact Sequences II - Exact Sequences\|Exact Sequences II - Exact Sequences]]