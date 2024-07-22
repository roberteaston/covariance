---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/abelian-categories/","tags":["category_theory/abelian_categories"],"updated":"2024-07-21T20:10:56-07:00"}
---

## Kernels and Cokernels

>[!note] Definition of kernel
>Let $C$ be a category with a null object. A **kernel** of a morphism $f:a\to b$ is an equalizer of the morphisms $f,0:a\to b$. In other words, it is a morphism $k:s\to a$ such that $fk=0$ and every $h:c\to a$ with $fh=0$ factors uniquely through $k$:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMSwwLCJhIl0sWzIsMCwiYiJdLFswLDAsInMiXSxbMCwxLCJjIl0sWzIsMCwiayJdLFswLDEsIjAiLDIseyJvZmZzZXQiOjF9XSxbMCwxLCJmIiwwLHsib2Zmc2V0IjotMX1dLFszLDAsImgiLDJdLFszLDIsIlxcZXhpc3RzIWgnIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d&embed" width="300" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Since $k:s\to a$ is an equalizer, the morphism $k$ is a monomorphism (i.e., left cancellable). It is thus common to think of the kernel $k:s\to a$ as a subobject of $a$, although technically subobjects of $a$ are equivalence classes of monomorphisms.

### Example in $\textbf{Grp}$

In $\textbf{Grp}$, the kernel of a group morphism $\phi:G\to H$ is the inclusion $k:\ker(\phi)\to G$, where $\ker(\phi)=\{g\in G\mid \phi(g)=e_H\}$ is the usual kernel.

### Example in $Ab$-categories

In any $Ab$-category $A$, all equalizers are kernels. This is because the hom-set $\operatorname{Hom}_A(b,c)$ is an abelian group, and so for arrows $f,g:b\to c$ and $h:a\to b$ we have $fh=gh$ exactly when $(f-g)h=0$. The arrow $h$ can therefore be described either as the equalizer of $f$ and $g$, or as the kernel of $f-g$. This is why we usually deal with kernels (and not equalizers) in $R\textbf{-Mod}$, $\textbf{Ab}$, etc.

---

If we dualize the notion of kernel we obtain the notion of cokernel:

>[!note] Definition of cokernel
>Let $C$ be a category with a null object. A **cokernel** of a morphism $f:a\to b$ is a coequalizer of the morphisms $f,0:a\to b$. In other words, it is a morphism $u:b\to e$ such that $uf=0$ and every $h:b\to c$ with $hf=0$ factors uniquely through $u$:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJhIl0sWzEsMCwiYiJdLFsyLDAsImUiXSxbMiwxLCJjIl0sWzAsMSwiMCIsMix7Im9mZnNldCI6MX1dLFswLDEsImYiLDAseyJvZmZzZXQiOi0xfV0sWzEsMiwidSJdLFsxLDMsImgiLDJdLFsyLDMsIlxcZXhpc3RzIWgnIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d&embed" width="300" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>


### Example in $\textbf{Ab}$

In $\textbf{Ab}$, the cokernel of $f:A\to B$ is the projection $u:B\to B/f(A)$.

## Abelian categories

>[!note] Definition of an abelian category
>An **abelian category** is an $Ab$-category satisfying the following conditions:
>1. $A$ has a null object.
>2. $A$ has binary biproducts.
>3. Every morphism in $A$ has a kernel and a cokernel.
>4. Every monomorphism is a kernel and every epimorphism is a cokernel.

The first two conditions ensure $A$ is an [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Additive categories\|additive category]]. The existence of kernels (and binary products) then implies $A$ has all finite limits, while the existence of cokernels (and binary coproducts) implies the existence of all finite colimits.

The fourth condition is strong. It implies that any morphism $f$ that is both monomorphism and epimorphism is an isomorphism.

### Examples of abelian categories

The categories $\textbf{Ab}$, $R\textbf{-Mod}$, and many others are abelian, with the usual kernels and cokernels.

If $A$ is an abelian category, then so is any functor category $A^{\mathcal{J}}$. See [[Maclane - Categories for the Working Mathematician.pdf|page 199 in Mac Lane]] for the short proof.

### Examples of additive categories that are not abelian

The category of even-dimensional vector spaces over a field $F$ is additive but not abelian, since linear transformations with odd rank do not have kernels in that category.

The category of finitely generated modules over a non-Noetherian ring (such as ${\bf Q}[x_1,x_2,\ldots ]$) is also additive but not abelian.
