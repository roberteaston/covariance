---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/bimodules/examples-of-bimodules/","tags":["#module_theory"],"updated":"2024-03-06T13:52:52-08:00"}
---

## Examples of bimodules

### Abelian groups are $({\bf Z},{\bf Z})$-bimodules

Every abelian group $A$ has a unique $({\bf Z},{\bf Z})$-module structure, since there is a unique left ${\bf Z}$-action on $A$ as well as a unique right ${\bf Z}$-module structure. As an illustration, given an element $a\in A$, the action of the integer $2$ on the left is $2\cdot a = a+a$, while the action of the integer $-3$ on the right is $a\cdot (-3) = -a-a-a.$ These two actions satisfy the required "associativity" condition:
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

Suppose $R$ is a commutative ring and $M$ is a left $R$-module. We can define a right $R$-action on $M$ by $m\cdot r = rm$. Note that the "associativity" condition of the ring action requires the commutativity of $R$ in order for this to truly define a right $R$-action on $M$, since in general we only have
$$(m\cdot r_1)\cdot r_2 = (r_1m)\cdot r_2 = r_2(r_1m) = (r_2r_1)m$$
The commutativity in $R$ ensures the last term is equal to $(r_1r_2)m = m\cdot (r_1r_2)$, as required. Of course, we can do the same for any right $R$-module, $M$.

We call this $(R,R)$-bimodule structure on $M$ the **standard $(R,R)$-bimodule structure** on the $R$-module $M$.
## From bimodules to modules

For any $(R,S)$-bimodule $M$ we can always forget either the left $R$- or right $S$-action, resulting in a right $S$- or left $R$-module, respectively. Although technically we should define a forgetful functor from one category to another, in practice we will usually just wave our hands and simply say "considered only as a left $R$-module" and what not.

Note that this gives us a way to talk about morphisms between bimodules that do not have any actual bimodule morphisms between them. See [[40-49 Knowledge/41 Mathematics/Module theory/Bimodules/Bimodules\|Bimodules]] for more details.

### From modules to bimodules

Suppose $R$ is a commutative ring and $M$ is a left $R$-module. The left action of $R$ on $M$ can also be used to define a right action of $R$ on $M$, by $m\cdot r = rm$. (The commutativity of $R$ is required for this to satisfy the "associativity" property necessary for a right action.) This bimodule structure on a module (over a commutative ring) is often called the **standard $(R,R)$-bimodule structure** on $M$.

---
## Rings and bimodules

### From a ring to a bimodule

Suppose $R$ is a ring (with unity). Then $R$ acts on itself on the left (and the right) by multiplication. This gives $R$ the structure of an $(R,R)$-bimodule. As with all bimodules, we can forget part of this action and retain an $(R,{\bf Z})$-bimodule structure (i.e., a left $R$-module structure), a $({\bf Z},R)$-bimodule structure (i.e., a right $R$-module structure), or a $({\bf Z},{\bf Z})$-bimodule structure (i.e., an abelian group structure).
### Ring homomorphisms create bimodule structures

Suppose $f:R\to S$ is a ring morphism (between rings with unity, and so we also assume $f(1_R)=1_S$). We can then endow $S$ with an $(S,R)$-bimodule structure, using the left action of $S$ on itself by left multiplication, and the right action of $R$ on $S$ by $s\cdot r = sf(r)$.
### Quotient rings have a natural bimodule structure

Suppose $R$ is a ring and $I\subseteq R$ is a two-sided ideal. By considering the canonical projection morphism $\pi:R\to R/I$, the previous example gives the quotient ring $R/I$ the structure of an $(R/I, R)$-bimodule.