---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/additive-categories/","tags":["category_theory/abelian_categories"],"updated":"2024-12-03T06:51:56-08:00"}
---

As we [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Ab-categories#^b61743\|noted]], an $\textbf{Ab}$-category is sometimes also called a **preadditive** category, suggesting that there is something called an *additive* category. Indeed:

> [!note] Definition of an additive category
> An **additive category** is an $\textbf{Ab}$-category which has a null object and a [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Ab-categories#^205a18\|biproduct]] for each pair of objects.
{ #8369c0}


If you're familiar with null objects, feel free to move along to the [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Abelian categories\|next note]]. If you would like a primer, keep reading.

# Null objects

Recall that in a fixed category $C$, a object $s$ is **initial** if for every object $c$ there exists a unique morphism $s\to c$. Dually, an object $t$ is **terminal** if for every object $c$ there exists a unique morphism $c\to t$. An object that is both initial and terminal is called a **null object** (or a **zero object**).

As usual, there are various equivalent interpretations of these properties:

- In terms of universal properties, if we let $F:C\to\textbf{Set}$ be the functor that assigns to every object $c$ the singleton set $F(c)=\{1\}$, and to every morphism $f:c\to c'$ the identity set map $F(f):\{1\}\to \{1\}$, then an initial object $s$ is characterized by a natural bijection
  
  $$\phi_c:\operatorname{Hom}_C(s,c)\xrightarrow{\sim}F(c),$$
  
  while a terminal object is characterized by a natural bijection
  
  $$\psi_c:\operatorname{Hom}_C(c,t)\xrightarrow{\sim}F(c).$$

- In terms of limits and colimits, an initial object of $C$ is a limit of the empty diagram in $C$, while a terminal object is a colimit of the empty diagram in $C$.

- In terms of adjoints, we have the following:
  
  
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/40-49-knowledge/41-mathematics/category-theory/adjoints/examples-of-adjoints/#ecad8c" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



If $C\to \textbf{1}$ is the unique functor to the category with one object, then a left adjoint $\textbf{1}\to C$ is the functor that selects the initial object of $C$, while a right adjoint $\textbf{1}\to C$ is the functor that selects the terminal object of $C$. 

</div></div>


In any case, when they exist, initial and terminal objects are unique up to unique isomorphism. The same goes for null objects.

## Examples

- In $\textbf{Set}$, the empty set is an initial object and any singleton set is a terminal object. For each set $X$, the unique set map $\emptyset \to X$ is the empty map, while the unique set map $X\mapsto \{\ast\}$ is the map $x\mapsto \ast$. There is no null object.
- In ${\bf Ab}$, the trivial group is a null object. For each abelian group $G$, the unique group morphism $\{0\}\to A$ is the map $0\mapsto 0_A$, while the unique group morphism $A\to \{0\}$ is the trivial map $a\mapsto 0$.
- In $\textbf{Grp}$, the trivial group is a null object. For each group $G$, the unique group  morphism $\{e\}\to G$ is the map $e\mapsto e_G$, while the unique group morphism  $G\to \{e\}$ is the trivial map $g\mapsto e$.
- In $\textbf{Ring}$, the ring of integers ${\bf Z}$ is an initial object. For each ring $R$ (with unity), the unique ring morphism ${\bf Z}\to R$ is determined entirely by $1_{\bf Z}\mapsto 1_R$. If we allow rings with $0=1$, then the zero ring is a terminal object. (There are no ring morphisms from the zero ring to any other ring!)
- In $\textbf{Fld}$, there is neither an initial nor a terminal object. In the category of fields of characteristic $0$, the field of rational numbers ${\bf Q}$ is an initial object (but there is no terminal object). In the category of fields of fixed characteristic $p>0$, the field ${\bf F}_p\simeq {\bf Z}_p$ is initial (but there is no terminal object).
- In $\textbf{Cat}$, the empty category ${\bf 0}$ is initial and the category ${\bf 1}$ is terminal.
- A limit of a diagram $F$ is a terminal object in the category of cones to $F$. A colimit of $F$ is an initial object in the category of cones from $F$.

# Zero morphisms

If a category $C$ has a null object $z$, then for every pair of objects $a$ and $b$ in $C$ there is a unique morphism $a\to b$ that factors through the unique morphisms to and from $z$:

$$a\to z \to b.$$

This morphism is called the **zero morphism** between $a$ and $b$ and is denoted $0:a\to b$. Any composite with a zero morphism is another zero morphism.

In ${\bf Ab}$, the zero morphism $A\to B$ between two abelian groups is the trivial map $a\mapsto 0_B$. More generally, when $C$ is an additive category the zero morphism $a:\to b$ is the additive identity of the abelian group $\operatorname{Hom}_C(a,b)$. In ${\bf Grp}$, the zero morphism $G\to H$ between two groups is the trivial map $g\mapsto e_H$.

One can show (are you the one?) that in an additive category, each zero morphism $0:a\to b$ is (as hoped!) the additive identity of the abelian group $\operatorname{Hom}_A(a,b)$.

---
## Suggested next note

[[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Abelian categories\|Abelian categories]]