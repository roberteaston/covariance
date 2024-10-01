---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/universal-properties/yoneda-s-lemma/","tags":["category_theory","quotes"],"updated":"2024-09-30T19:58:41-07:00"}
---

> [!quote] Euripides
> Every man is like the company he is wont to keep.

One of the most consistent philosophies throughout all of category theory is "It's all about the arrows." This is built into the very core of the theory, in that you don't even really need objects to define a category: they are in one-to-one correspondence with the identity arrows!

At a metaphorical level, an arrow $f:c\to c'$ in a category $C$ can be thought of some information that each of $c$ and $c'$ "see" about the other. So for a fixed object $c$, the collection of all arrows from $c$ is the total information about the category $C$ available to the object $c$; or dually, the set of all arrows to a fixed object $c'$ is all information available in the category $C$ about the object $c'$. From this point of view, what more information could there be about a given object? Nothing. The category is all there is, and in the category the only data are the arrows.

But how does one formalize this idea?

---

# The original inspiration: universal properties

First revisit our pantheon of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Examples of universal properties - Revisited\|objects with universal properties]]. Looking over these examples, a clear pattern emerges. In each case was have an object $c$ in a category $C$ that is characterized by a "universal property," which can always be expressed in the form of a bijection
$$\tau_d:\operatorname{Hom}_C(c,d)\xrightarrow{\sim}F(d)$$
that is "natural in $d$", where  $F:C\to \textbf{Set}$ is some functor. This naturality, often stated but not articulated, is the formal embodiment of the idea that the bijection $\tau_d$ is defined "in the same way" for every $d\in C$, or at least "in a compatible way." What that means precisely is that for every arrow $f:d_1\to d_2$ in $C$ we have a commutative diagram
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG9wZXJhdG9ybmFtZXtIb219X0MoYyxkXzEpIl0sWzAsMSwiXFxvcGVyYXRvcm5hbWV7SG9tfV9DKGMsZF8yKSJdLFsxLDAsIkYoZF8xKSJdLFsxLDEsIkYoZF8yKSJdLFswLDIsIlxcdGF1X3tkXzF9Il0sWzEsMywiXFx0YXVfe2RfMn0iLDJdLFswLDEsImZcXGNpcmMgLSIsMl0sWzIsMywiRihmKSJdXQ==&embed" width="400" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
This is exactly the diagram for a natural transformation.

# Examples

For illustration, we recall some specific examples of universal properties.

## Coequalizers of set maps

Suppose $X$ and $Y$ are sets. Their disjoint union $X\sqcup Y$ is the set characterized by the universal property that set maps $f:X\sqcup Y\to Z$ are in natural bijection with pairs of set maps $g:X\to Z$, $h:Y\to Z$. To put this into the above context, let $F:\textbf{Set}\to \textbf{Set}$ be the functor that assigns:
- to each set $Z$ the set $F(Z)$ consisting of all pairs of set maps $g:X\to Z$, $h:Y\to Z$; and
- to each set map $p:Z\to W$ the set map $F(p): F(Z)\to F(W)$ that takes each pair of set maps $g:X\to Z$, $h:Y\to Z$ the pair of set maps $p\circ g:X\to W$, $p\circ h:Y\to W$.
Then there is a bijection that is natural in $Z$:
$$\tau_Z:\operatorname{Hom}_{\textbf{Set}}(X\sqcup Y,Z)\xrightarrow{\sim} F(Z)$$

## Quotients by normal subgroups

Let $N$ be a normal subgroup of a group $G$. The quotient group $G/N$, together with its projection morphism $\pi:G\to G/N$ defined by $g\mapsto g+N$, satisfies a universal property. Let $F:\textbf{Grp}\to\textbf{Set}$ be the functor that assigns to each group $H$ the set of group morphisms $f:G\to H$ such that $N\leq \ker(f)$. Then there is a natural bijection
$$\phi_H:\operatorname{Hom}_{\textbf{Grp}}(G/N,H)\xrightarrow{\sim} F(H).$$
Under this bijection, each group morphism $g:G/N\to H$ is sent to the group morphism $g\circ \pi:G\to H$.

## Direct sums of abelian groups

If $A$ and $B$ are abelian groups, their direct sum is the abelian group $A\oplus B$. As a set, it consists of all pairs of formal sums $a+b$ with $a\in A$ and $b\in B$. The operation is defined "component-wise": $(a+b)+(a'+b')=(a+a')+(b+b')$. (Although not common, one could reasonably argue that a different notation should be used for the formal sum symbol, such as $a\oplus b$.) One can verify that $A\oplus B$ is an abelian group, and that it comes equipped with two injective group morphisms $i_1:A\to A\oplus B$ and $i_2:B\to A\oplus B$. Moreover, there is a natural bijection between group morphisms from $A\oplus B$ and pairs of groups morphisms $A\to C$, $B\to C$:
$$\phi_C:\operatorname{Hom}_{\textbf{Ab}}(A\oplus B, C)\xrightarrow{\sim} \{(g_1,g_2)\mid g_1\in\operatorname{Hom}_{\textbf{Ab}}(A,C),\, g_2\in\operatorname{Hom}_{\textbf{Ab}}(B,C)\}$$
Under this bijection, each group morphism $f:A\oplus B\to C$ is sent to the pair of group morphisms $f\circ i_1:A\to C$, $f\circ i_2:B\to C$.

## Free $R$-modules

Let $R$ be a ring and $U:R\textbf{-Mod}\to \textbf{Set}$ be the usual forgetful functor. The [[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Free modules\|free module]] construction takes each set $A$ and produces an $R$-module $F(A)$. The function which sends each $a\in A$ to the same element $a\in F(A)$ regarded as a formal $R$-linear sum of elements of $A$ is an arrow $j:A\to U(F(A))$. For any other $R$-module $M$, each function $f:A\to U(M)$ can be extended uniquely to a module morphism $h:F(A)\to M$ with $f=U(h)\circ j$.

In the current context, let $G:R\textbf{-Mod}\to\textbf{Set}$ be the functor that assigns to each $R$-module $M$ the collection of set maps $f:A\to U(M)$; i.e., $G(M)=\operatorname{Hom}_{\textbf{Set}}(A,U(M))$. Then there is a natural bijection
$$\phi_N:\operatorname{Hom}_{R\textbf{-Mod}}(F(A),M)\xrightarrow{\sim} G(M).$$


---
# From objects to (hom) functors

We first notice that in every universal property, we are always characterizing morphisms from an object (or dually, to an object) in terms of a "natural" bijection with some other info. To make this functorial, consider the following:

>[!note] Definition of hom functor
>For each object $c$ in a given category $C$, we can define a functor $H_c:C\to \textbf{Set}$ as follows:
>- For each object $d\in C$, we let $H_c(d)=\operatorname{Hom}_C(c,d)$.
>- For each arrow $f:d\to d'$, we let $H_c(f):H_c(d)\to H_c(d')$ be the set map that takes each morphism $g:c\to d$ to the morphism $f\circ g:c\to d'$.
>  
>  It is also common to write $\operatorname{Hom}_C(c,-)$ for $H_c$, but when doing so we will then also write $f\circ -$ for $H_c(f)$, rather than the awkward looking $\operatorname{Hom}_C(c,f)$.

We should verify that $H_c$ is indeed a functor.

First note that for each identity arrow $1_d$ in $C$ we have $H_c(1_d):H_c(d)\to H_c(d)$ is the set map that send each arrow $g:c\to d$ to the arrow $1_d\circ g:c\to d$; since $C$ is a category, we certainly have $1_d\circ g = g$ and so $H_c(1_d)$ is the identity map on $H_c(d)$.

Next, for a pair of composable arrows $f_1:d_1\to d_2$ and $f_2:d_2\to d_3$, we have
$$H_c(f_2\circ f_1)=(f_2\circ f_1)\circ -=f_2\circ (f_1\circ -)=H_c(f_2)\circ H_c(f_1).$$
More formally, for each object $g\in H_c(d_1)$ (i.e., arrow $g:c\to d_1$), we have
$$H_c(f_2\circ f_1)(g) = (f_2\circ f_1)\circ g,$$
while
$$(H_c(f_2)\circ H_c(f_1))(g)=f_2\circ (f_1\circ g).$$
By the associativity of composition in $C$ these two are equal.

# From the category $C$ to the functor category $\textbf{Set}^C$

For each object $c\in C$ we have defined a functor $H_c:C\to \textbf{Set}$, which is an object of the [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Functor categories\|functor category]] $\textbf{Set}^C.$ Have we actually defined a functor $H:C\to \textbf{Set}^C$? To answer that, we need to specify what $H$ should do to arrows.

To that end, suppose $h:c\to c'$ is an arrow in $C$. Each arrow from $H_c$ to $H_{c'}$ in $\textbf{Set}^C$ is a natural transformation $\tau:H_c\Rightarrow H_{c'}$. This is the data of a family of arrows $\tau_d:H_c(d)\to H_{c'}(d)$, one for each object $d\in D$, satisfying the usual naturality condition. So let's consider the sets $H_c(d)=\operatorname{Hom}_C(c,d)$ and $H_{c'}(d)=\operatorname{Hom}_C(c',d)$.

Given an element $f\in H_c(d)$ (i.e., an arrow $f:c\to d$), it's not exactly clear how we can use the arrow $h:c\to c'$ to produce an arrow $c'\to d$, i.e., an element of $H_{c'}(d))$. 

<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJjIl0sWzAsMSwiYyciXSxbMSwwLCJkIl0sWzAsMSwiaCIsMl0sWzAsMiwiZiJdLFsxLDIsIj8iLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

However, there is an obvious way to take an element $f'\in H_{c'}(d)$ (i.e., an arrow $f':c'\to d$) and use the arrow $h:c\to c'$ to produce an arrow $c\to d$, namely by pre-composing with $h:c\to c'$.
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJjIl0sWzAsMSwiYyciXSxbMSwwLCJkIl0sWzAsMSwiaCIsMl0sWzAsMiwiZidcXGNpcmMgaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsxLDIsImYnIiwyXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

This defines a set map $\tau_d:H_{c'}(d)\to H_c(d),$ which (we hope) defines a natural transformation $\tau:H_{c'}\Rightarrow H_c$. However, this natural transformation is going "the wrong way." In the classical parlance, we would be describing a so-called **contravariant functor** from $C$ to $\textbf{Set}^C$. This language has generally (but not entirely) fallen out of favor and been replaced by the use of the **opposite** category construction.^[See [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Opposite categories and contravariant functors\|Opposite categories and contravariant functors]].] In other words, we can use our construction above to define a (covariant) functor^[We also could have defined a functor $H^{\operatorname{op}}:C\to (\textbf{Set}^C)^{\operatorname{op}}$, but this choice seems simpler.]
$$H:C^{\operatorname{op}}\to \textbf{Set}^C.$$

Note that the category $C^{\operatorname{op}}$ has the same objects as the category $C$, and each arrow in $C^{\operatorname{op}}$ from an object $c$ to an object $c'$ corresponds to an arrow $f:c'\to c$ in $C$. Because of this, and in an effort to avoid confusion, we often denote arrows in $C^{\operatorname{op}}$ by $f^{\operatorname{op}}:c\to c'$, where the corresponding arrow in $C$ is $f:c'\to c$. 

>[!summary] The hom functor
>For a given category $C$, we have defined a functor $H:C^{\operatorname{op}}\to \textbf{Set}^C$ as follows:
>- For each object $c\in C^{\operatorname{op}}$ (which is the same as an object $c\in C$), we have $H(c)=H_c=\operatorname{Hom}_C(c,-)$. 
>- For each arrow $h^{\operatorname{op}}:c\to c'$ in $C^{\operatorname{op}}$ (which corresponds to an arrow $h:c'\to c$ in $C$), the natural transformation $H(h^{\operatorname{op}}):H_c\Rightarrow H_{c'}$  is defined by "pre-composition with $h$," i.e., for each $d\in C$ the set map $H(h^{\operatorname{op}})_d:H_c(d)\to H_{c'}(d)$ is given by sending each arrow $f:c\to d$ to the arrow $f\circ h:c'\to d$.

Note that the naturality of our supposedly natural transformation follows from the associativity of arrow composition. To see this, suppose $g:d_1\to d_2$ is an arrow in $C$ and consider the diagram below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJIX2MoZF8xKSJdLFswLDEsIkhfYyhkXzIpIl0sWzEsMCwiSF97Yyd9KGRfMSkiXSxbMSwxLCJIX3tjJ30oZF8yKSJdLFswLDIsIi1cXGNpcmMgaCJdLFsxLDMsIi1cXGNpcmMgaCIsMl0sWzAsMSwiZ1xcY2lyYyAtIiwyXSxbMiwzLCJnXFxjaXJjIC0iXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Starting from the top-left, suppose $f\in H_c(d_1)$, i.e., we have an arrow $f:c\to d_1$. Going over and down yields the arrow $g\circ (f\circ h):c'\to d_2$, while going down and then over yields the arrow $(g\circ f)\circ h:c'\to d_2$. By associativity of arrow composition in $C$, these two arrows are equal.

---
# Was this a good idea?

If we hadn't been inspired by the myriad constructions objects with universal properties, this wouldn't seem like a great way to understand objects in a given category $C$. Arbitrary functors $F:C\to \textbf{Set}$ can presumably be very complicated and difficult to comprehend, and so the category $\textbf{Set}^C$ of all such functors is huge and mysterious, at least in comparison with the original category $C$. It would seem impossible that useful knowledge about an object $c\in C$ could be gained from studying the corresponding functor $H_c\in \textbf{Set}^C$.

Following the general principle of "knowing an object by knowing the maps from it"^[Think about how meta this is. We're trying to prove the validity of this principle and we're using the principle itself to guide our exploration!], we should first examine what we can say about arrows from $H_c$ to other objects $F\in \textbf{Set}^C$. In other words, we should examine natural transformation $H_c\Rightarrow F.$

And here we at last come to it, the great lemma of category theory:

>[!summary] Yoneda's Lemma
>Suppose $c$ is an object of a category $C$ and $F:C\to\textbf{Set}$ is a functor. Then there is a bijection between the set of natural transformation $H_c\Rightarrow F$ and the set $F(c)$, given by sending each natural transformation $\tau:H_c\Rightarrow F$ to the element $\tau_c(1_c)\in F(c)$.
>
>In other words, there is a bijection
>$$y:\operatorname{Hom}_{\textbf{Set}^C}(H_c,F)\xrightarrow{\sim} F(c).$$

We can upgrade this bijection to a full-on natural isomorphism between two functors, but for now let's examine the proof of this lemma.

First suppose $\tau:H_c\Rightarrow F$ is a natural transformation. This means that for every object $d\in C$ we have a set map $\tau_d:H_c(d)\to F(d)$. In particular, by taking $d=c$ we have a set map $\tau_c:H_c(c)\to F(c)$. The domain of this set map is $\operatorname{Hom}_C(c,c)$ which contains (by the axioms of $C$ being category!) a unique identity arrow $1_c:c\to c$. The set map $\tau_c$ then assigns this arrow to some element $\tau_c(1_c)\in F(c).$ This element is $y(\tau)$.

To show $y$ is injective, we must show that $\tau$ is entirely determined by $y(\tau)$, i.e., entirely determined by the single element $\tau_c(1_c)$. To see this, suppose $d\in C$ is any object, and consider the set map $\tau_d:H_c(d)\to F(d)$. Take any element in the domain of this set map, i.e., any arrow $f:c\to d$. By the naturality of $\tau$, we have a commutative diagram:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJIX2MoYykiXSxbMCwxLCJIX2MoZCkiXSxbMSwwLCJGKGMpIl0sWzEsMSwiRihkKSJdLFswLDIsIlxcdGF1X2MiXSxbMSwzLCJcXHRhdV9kIiwyXSxbMCwxLCJmXFxjaXJjIC0iLDJdLFsyLDMsIkYoZikiXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Starting from the top-left with the element $1_c$, if we go across and then down we get the element $F(f)(\tau_c(1_c))$, i.e., the image under $F(f)$ of the special element $y(\tau)$. On the other hand, if we first go down the vertical arrow, the element $1_c$ is sent to the element $f\circ 1_c$, which is exactly the element $f\in H_c(d)$. This then maps across to $\tau_d(f)$. Commutativity has thus forced $\tau_d(f)$ to be the image under $F(f)$ of the element $y(\tau)$. The entire set map $\tau_d:H_c(d)\to F(d)$ is thus completely determined by $y(t)$. We must have $\tau_d(-)=F(-)(y(\tau))$. This proves that the set map $y$ is injective.

To show $y$ is surjective, take any element $x\in F(c)$ and for every $d\in D$ let $\tau_d:H_c(d)\to F(d)$ be the set map given by $\tau_d(f)=F(f)(x)$. We claim this defines a natural transformation $\tau:H_c\Rightarrow F$. To verify this, suppose $g:d_1\to d_2$ is an arrow in $C$ and consider the (hopefully commutative!) diagram below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJIX2MoZF8xKSJdLFswLDEsIkhfYyhkXzIpIl0sWzEsMCwiRihkXzEpIl0sWzEsMSwiRihkXzIpIl0sWzAsMiwiXFx0YXVfe2RfMX0iXSxbMSwzLCJcXHRhdV97ZF8yfSIsMl0sWzAsMSwiZ1xcY2lyYyAtIiwyXSxbMiwzLCJGKGcpIl1d&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Let's check this diagram is commutative. Take an element $f$ in the top left, i.e., an arrow $f:c\to d_1$. By our definition of $\tau$, when we go across the top map we obtain the element $F(f)(x)$, and when we then go down the right map we get the element $F(g)(F(f)(x))$, i.e., $(F(g)\circ F(f))(x)$. On the other hand, if we first go down the left map, we obtain the element $g\circ f$, and if we then go across the bottom map we obtain the element $F(g\circ f)(x)$. Since $F$ is a functor, we always have $F(g\circ f)=F(g)\circ F(f)$, and hence $(F(g)\circ F(f))(x)=F(g\circ f)(x)$. Our diagram is indeed commutative! Thus $\tau:H_c\Rightarrow F$ really is a natural transformation, and by construction $y(\tau)=\tau_c(1_c)=F(1_c)(x) = x$.

---

# We haven't lost anything

You might still worry that for two objects $c,c'\in C$, there are way more arrows between their images $H_c$ and $H_{c'}$ in the gigantic functor category $\textbf{Set}^C$ than there are between $c$ and $c'$ in the original category $C$.^[In other words, we might be worried the functor $H$ is not full.] We could also be worried that certain arrows $f_1, f_2:c\to c'$ in $C$ become identified when we consider their images in $H_c(f_1)$ and $H_c(f_2)$ in the functor category.^[In other words, we might be worried the functor $H$ is not faithful.] Fortunately, life is good. By taking $F=H_{c'}$ in Yoneda's Lemma, we immediately obtain the following corollary:

>[!summary] Corollary
>For any pair of objects $c, c'\in C$, each natural transformation $\tau:H_c\Rightarrow H_{c'}$ is of the form $\tau=H(f^{\operatorname{op}})$ for a unique arrow $f:c'\to c$ in $C$.

Note that this corollary does indeed followsby taking $F=H_{c'}$ in Yoneda's Lemma, since we have a bijection from the set of natural transformations $\tau:H_c\Rightarrow H_{c'}$ to the set $H_{c'}(c)=\operatorname{Hom}_C(c',c)$, given by sending each natural transformation $\tau$ to $\tau_c(1_c)$, the latter of which is exactly an arrow $f:c'\to c$. Moreover, as we saw above, the naturality condition of $\tau$ guarantees that every set map $\tau_d:H_c(d)\to H_{c'}(d)$ is completely determined by $f$ and is given exactly by $f\circ -$.


(UNDER CONSTRUCTION)