---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/examples-of-module-morphisms/","tags":["module_theory"],"updated":"2024-09-26T20:27:44-07:00"}
---

# Vector spaces

We have [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Examples of modules#Vector Spaces\|seen]] that when $F$ is a field, $F$-modules are nothing more than $F$-vector spaces. In this context, $F$-module morphisms are the same as $F$-linear transformations.

---
# Abelian groups

We have [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Examples of modules#Abelian groups are ${ bf Z}$-modules\|seen]] that ${\bf Z}$-modules correspond to  abelian groups. In this context, ${\bf Z}$-module morphisms correspond to group morphisms.

---
# The zero morphism

The [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Examples of modules#The zero module\|zero module]] is the zero object in the category of left $R$-modules, which means that for every left $R$-module $M$ there is a unique module morphism $0\to M$ (defined by sending $0$ to $0_M$) as well as a unique module morphism $M\to 0$ (defined by sending every $m\in M$ to $0$). As a consequence, for every pair of $R$-modules $M$ and $N$, there is unique module morphism $M\to N$ that factors through the zero module, namely the composition $M\to 0\to N$. This morphism is called the **zero** map from $M$ to $N$. At the level of elements, it corresponds exactly to the trivial map that sends every $m\in M$ to $0_N\in N$. Why go through all of these contortions just to define the zero map? An ongoing theme in category theory is that everything should be framed in terms of arrows, since in an abstract category the objects might not be sets, i.e., not have elements.

---

# Be specific: use categories!

We have [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Examples of modules#Rings as modules\|seen]] that rings can be viewed as left modules over themselves (via left multiplication). While this is true, some care must be taken when considering the morphisms between two objects. In other words, if you're talking about rings but also sometimes thinking of them as modules, you need to be precise about the structure being considered once maps come into play.

For example, the map $n\mapsto 2n$ defines a ${\bf Z}$-module endomorphism of ${\bf Z}$, but not a ring endomorphism of ${\bf Z}$ (since ring morphisms send 1 to 1). Similarly, the ring endomorphism on $F[x]$ defined by $f(x)\mapsto f(x^2)$ does not define an $F[x]$-module endomorphism.

The safest way to avoid any of these issues is to work within an explicit category, i.e., within $\textbf{Ring}$ or $R\textbf{-Mod}$. Then whenever we have a ring $R$, rather than saying "when $R$ is viewed as a an $R$-module over itself" we can instead use the functor $F:\textbf{Ring}\to R\textbf{-Mod}$ that takes each ring $R$ and sends it to the left $R$-module $R$.

> [!warning] Recommendation
> Be specific about the category in which you're working.

## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules\|Submodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules\|Module morphisms and submodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]