---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/bimodules/bimodules/","tags":["#module_theory"],"updated":"2024-10-11T09:27:35-07:00"}
---

# Definition

Generalizing the notion of a module, we can consider an abelian group endowed with *both* a left- and right-action. Such a structure is called a *bimodule*.

>[!note] Definition of bimodule
>Let $R$ and $S$ be rings (with unity). An **$(R,S)$-bimodule** consists of an abelian group $M$ with both the structure of a left $R$-module and right $S$-module, such that $r(ms)=(rm)s$ for every $r\in R$, $s\in S$, and $m\in M$.
{ #669e77}


This might seem like a lot to expect out of an abelian group, but it turns out that there are at least as many bimodules as there are modules, as the following examples illustrate.

# Examples of bimodules

## Abelian groups are $({\bf Z},{\bf Z})$-bimodules

Every abelian group $A$ has a unique $({\bf Z},{\bf Z})$-module structure, since there is a unique left ${\bf Z}$-action on $A$ as well as a unique right ${\bf Z}$-module structure. As an illustration, given an element $a\in A$, the action of the integer $2$ on the left is (and must be!) $2\cdot a = a+a$, while the action of the integer $-3$ on the right is (and must be!) $a\cdot (-3) = -a-a-a.$ These two actions satisfy the required "associativity" condition:
$$\begin{align*}
2\cdot (a\cdot (-3)) &= 2\cdot (-a-a-a)\\
&= 2\cdot(-a)+2\cdot(-a)+2\cdot(-a)\\
&=-(2\cdot a)-(2\cdot a)-(2\cdot a)\\
&= (2\cdot a)\cdot (-3)
\end{align*}$$
We will freely switch between referring to $A$ as an abelian group and as a $({\bf Z},{\bf Z})$-bimodule, according to whatever is most appropriate in the current context.

---
## From modules to bimodules

### Left $R$-modules are $(R,{\bf Z})$-bimodules

Similar to the previous example, suppose $M$ is any left $R$-module. Then there is a unique right ${\bf Z}$-action on $M$ (coming directly from the abelian group structure on $M$), and this gives $M$ the structure of an $(R,{\bf Z})$-bimodule. Analogously, every right $R$-module $M$ also has a unique $({\bf Z},R)$-bimodule structure.

As with abelian groups, we will freely move between referring to $M$ as a left $R$-module (resp., right $R$-module) and as a $(R,{\bf Z})$-bimodule (resp., $({\bf Z},R)$-bimodule).

### From $R$-modules to $(R,R)$-bimodules

Suppose $R$ is a commutative ring and $M$ is a left $R$-module. We can define a right $R$-action on $M$ by $m\cdot r = rm$. Note that the "associativity" condition of the ring action requires^[This is not strictly true, but commutativity suffices.] the commutativity of $R$ in order for this to truly define a right $R$-action on $M$, since in general we only have
$$(m\cdot r_1)\cdot r_2 = (r_1m)\cdot r_2 = r_2(r_1m) = (r_2r_1)m$$
The commutativity in $R$ ensures the last term is equal to $(r_1r_2)m = m\cdot (r_1r_2)$, as required. Of course, we can do the same for any right $R$-module, $M$.

We call this $(R,R)$-bimodule structure on $M$ the **standard $(R,R)$-bimodule structure** on the $R$-module $M$.

> [!note] Note
> We should really be defining a functor from the category of $R$-modules to the category of $(R,R)$-bimodules.

---
## From bimodules to modules

For any $(R,S)$-bimodule $M$ we can always forget either the left $R$- or right $S$-action, resulting in a right $S$- or left $R$-module, respectively. Although technically we should define a forgetful functor from one category to another, in practice most mathematicians usually just wave their hands and simply say "considered only as a left $R$-module" and what not.

Note that this gives us a way to talk about morphisms between bimodules that do not have any actual bimodule morphisms between them; e.g., a morphism $M\to N$ where $M$ is an $(R,S)$-bimodule and $N$ is an $(R,T)$-bimodule. Of course, if we were being carefully we would note that we're actually talking about a morphism $U_1(M)\to U_2(N)$ in the category of left $R$-modules, where $U_1$ and $U_2$ are the appropriate forgetful functors.

---
## Rings and bimodules

### From a ring to a bimodule

Suppose $R$ is a ring (with unity). Then $R$ acts on itself on the left (and the right) by multiplication. This gives $R$ the structure of an $(R,R)$-bimodule. As with all bimodules, we can forget part of this action and retain an $(R,{\bf Z})$-bimodule structure (i.e., a left $R$-module structure), a $({\bf Z},R)$-bimodule structure (i.e., a right $R$-module structure), or a $({\bf Z},{\bf Z})$-bimodule structure (i.e., an abelian group structure).

As usual, all of this forgetting is really just using the appropriate forgetful functors.
### Ring homomorphisms create bimodule structures

Suppose $f:R\to S$ is a ring morphism (between rings with unity, and so we also assume $f(1_R)=1_S$). We can then endow $S$ with an $(S,R)$-bimodule structure, using the left action of $S$ on itself by left multiplication, and the right action of $R$ on $S$ by $s\cdot r = sf(r)$.
### Quotient rings have a natural bimodule structure

Suppose $R$ is a ring and $I\subseteq R$ is a two-sided ideal. By considering the canonical projection morphism $\pi:R\to R/I$, the previous example gives the quotient ring $R/I$ the structure of an $(R/I, R)$-bimodule.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Module theory/Bimodules/Bimodule morphisms\|Bimodule morphisms]]