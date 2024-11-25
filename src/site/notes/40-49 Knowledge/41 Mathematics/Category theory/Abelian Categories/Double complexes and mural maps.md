---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/double-complexes-and-mural-maps/","tags":["category_theory/abelian_categories"],"updated":"2024-11-25T10:40:26-08:00"}
---

# Double complexes

> [!note] Definition of double complex
> Let $C$ be an abelian category. A **double complex** in $C$ is a chain complex in $\operatorname{Ch}(C)$. In other words, it is a commutative diagram of the form
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTIsWzEsMSwiWF97bSxufSJdLFsxLDIsIlhfe20tMSxufSJdLFsyLDEsIlhfe20sbi0xfSJdLFsyLDIsIlhfe20tMSxuLTF9Il0sWzEsMCwiXFx2ZG90cyJdLFsyLDAsIlxcdmRvdHMiXSxbMywxLCJcXGNkb3RzIl0sWzIsMywiXFx2ZG90cyJdLFsxLDMsIlxcdmRvdHMiXSxbMCwxLCJcXGNkb3RzIl0sWzMsMiwiXFxjZG90cyJdLFswLDIsIlxcY2RvdHMiXSxbMCwyLCJcXHBhcnRpYWxfe20sbn1ee1xcdGV4dHtob3J9fSJdLFswLDEsIlxccGFydGlhbF97bSxufV57XFx0ZXh0e3ZlcnR9fSJdLFsyLDMsIlxccGFydGlhbF97bSxuLTF9XntcXHRleHR7dmVydH19Il0sWzEsMywiXFxwYXJ0aWFsX3ttLTEsbn1ee1xcdGV4dHtob3J9fSJdLFs0LDAsIlxccGFydGlhbF97bSsxLG59XntcXHRleHR7dmVydH19Il0sWzUsMiwiXFxwYXJ0aWFsX3ttKzEsbi0xfV57XFx0ZXh0e3ZlcnR9fSJdLFsyLDYsIlxccGFydGlhbF97bSxuLTF9XntcXHRleHR7aG9yfX0iXSxbMyw3LCJcXHBhcnRpYWxfe20tMSxuLTF9XntcXHRleHR7dmVydH19Il0sWzEsOCwiXFxwYXJ0aWFsX3ttLTEsbn1ee1xcdGV4dHt2ZXJ0fX0iXSxbOSwwLCJcXHBhcnRpYWxfe20sbisxfV57XFx0ZXh0e2hvcn19Il0sWzMsMTAsIlxccGFydGlhbF97bS0xLG4tMX1ee1xcdGV4dHtob3J9fSJdLFsxMSwxLCJcXHBhcnRpYWxfe20tMSxuKzF9XntcXHRleHR7aG9yfX0iXV0=&embed" width="400" height="400" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
> in which every row and every column is a chain complex; i.e., $\partial_{m,n+1}^{\text{hor}}\circ \partial_{m,n}^{\text{hor}}=0$ and $\partial_{m+1,n}^{\text{vert}}\circ \partial_{m,n}^{\text{vert}}=0$ for all $m,n\in {\bf Z}$.

Here is a situation in which it will be very tempting to write simply $\partial^{\text{hor}}$ and $\partial^{\text{vert}}$ when there is no worry of confusion.


# Mural maps

Suppose we focus on one object in a double complex, say $X_{m,n}$ in the above notation. Looking at the four commutative squares that share $X_{m,n}$ as a vertex we see six objects that have maps to (or from) the object $X_{m,n}$:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMSwxLCJcXHJlZHtYX3ttLG59fSJdLFsxLDIsIlhfe20tMSxufSJdLFsyLDEsIlhfe20sbi0xfSJdLFsyLDIsIlhfe20tMSxuLTF9Il0sWzEsMCwiWF97bSsxLG59Il0sWzAsMSwiWF97bSxuKzF9Il0sWzAsMCwiWF97bSsxLG4rMX0iXSxbMCwyLCJcXHBhcnRpYWxfe20sbn1ee1xcdGV4dHtob3J9fSIsMl0sWzAsMSwiXFxwYXJ0aWFsX3ttLG59XntcXHRleHR7dmVydH19Il0sWzIsMywiXFxwYXJ0aWFsX3ttLG4tMX1ee1xcdGV4dHt2ZXJ0fX0iXSxbMSwzLCJcXHBhcnRpYWxfe20tMSxufV57XFx0ZXh0e2hvcn19IiwyXSxbNCwwLCJcXHBhcnRpYWxfe20rMSxufV57XFx0ZXh0e3ZlcnR9fSJdLFs1LDAsIlxccGFydGlhbF97bSxuKzF9XntcXHRleHR7aG9yfX0iLDJdLFs2LDUsIlxccGFydGlhbF97bSsxLG4rMX1ee1xcdGV4dHt2ZXJ0fX0iLDJdLFs2LDQsIlxccGFydGlhbF97bSsxLG4rMX1ee1xcdGV4dHtob3J9fSIsMl1d&embed" width="400" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

For notational simplicity, we are going to drop all subscripts and use more human-readable notation, as below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMSwxLCJcXHJlZHtYX3ttLG59fSJdLFsxLDIsIlhfe20tMSxufSJdLFsyLDEsIlhfe20sbi0xfSJdLFsyLDIsIlhfe20tMSxuLTF9Il0sWzEsMCwiWF97bSsxLG59Il0sWzAsMSwiWF97bSxuKzF9Il0sWzAsMCwiWF97bSsxLG4rMX0iXSxbMCwyLCJcXHBhcnRpYWxfe1xcdGV4dHtvdXR9fV57XFx0ZXh0e2hvcn19Il0sWzAsMSwiXFxwYXJ0aWFsX3tcXHRleHR7b3V0fX1ee1xcdGV4dHt2ZXJ0fX0iLDJdLFsyLDNdLFsxLDNdLFs0LDAsIlxccGFydGlhbF97XFx0ZXh0e2lufX1ee1xcdGV4dHt2ZXJ0fX0iXSxbNSwwLCJcXHBhcnRpYWxfe1xcdGV4dHtpbn19XntcXHRleHR7aG9yfX0iLDJdLFs2LDVdLFs2LDRdLFs2LDAsIlxccGFydGlhbF97XFx0ZXh0e2lufX1ee1xcdGV4dHtkaWFnfX0iLDAseyJsYWJlbF9wb3NpdGlvbiI6NjB9XSxbMCwzLCJcXHBhcnRpYWxfe1xcdGV4dHtvdXR9fV57XFx0ZXh0e2RpYWd9fSIsMCx7ImxhYmVsX3Bvc2l0aW9uIjo3MH1dXQ==&embed" width="400" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

The morphisms labeled $\partial_{\text{in}}^{\text{diag}}$ and $\partial_{\text{out}}^{\text{diag}}$ are the compositions of the evident morphisms in the top-left and bottom-right squares, respectively. As a final notational simplification, let us for the moment simply write $X$ for the object $X_{m,n}$ and focus exclusively on the six morphisms to (and from) $X$ in the above diagram:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMSwxLCJcXHJlZHtYfSJdLFsxLDIsInt9Il0sWzIsMSwie30iXSxbMiwyLCJ7fSJdLFsxLDAsInt9Il0sWzAsMSwie30iXSxbMCwwLCJ7fSJdLFswLDIsIlxccGFydGlhbF97XFx0ZXh0e291dH19XntcXHRleHR7aG9yfX0iXSxbMCwxLCJcXHBhcnRpYWxfe1xcdGV4dHtvdXR9fV57XFx0ZXh0e3ZlcnR9fSIsMl0sWzAsMywiXFxwYXJ0aWFsX3tcXHRleHR7b3V0fX1ee1xcdGV4dHtkaWFnfX0iLDAseyJsYWJlbF9wb3NpdGlvbiI6NzB9XSxbNCwwLCJcXHBhcnRpYWxfe1xcdGV4dHtpbn19XntcXHRleHR7dmVydH19Il0sWzUsMCwiXFxwYXJ0aWFsX3tcXHRleHR7aW59fV57XFx0ZXh0e2hvcn19IiwyXSxbNiwwLCJcXHBhcnRpYWxfe1xcdGV4dHtpbn19XntcXHRleHR7ZGlhZ319IiwwLHsibGFiZWxfcG9zaXRpb24iOjYwfV1d&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

We have already defined two homology objects at $X_{m,n}$, namely the "vertical" and "horizontal" homology objects. In terms of our current notation, these are the quotients

$$\begin{align*} H_m(X_{\bullet, n})&=\ker(\partial_{\text{out}}^{\text{vert}})/\operatorname{im}(\partial_{\text{in}}^{\text{vert}})\\ H_n(X_{m, \bullet})&=\ker(\partial_{\text{out}}^{\text{hor}})/\operatorname{im}(\partial_{\text{in}}^{\text{hor}})
\end{align*}$$

For notational simplicity, in this context these two objects are sometimes denoted $X^{\text{vert}}$ and $X^{\text{hor}}$, respectively.

We now define two additional quotient objects that relate these two homology objects. These new objects are very close to a "diagonal homology" that one could define using diagonal maps above.

First notice that $\operatorname{im}(\partial_{\text{in}}^{\text{diag}})$ is contained in both $\ker(\partial_{\text{out}}^{\text{hor}})$ and $\ker(\partial_{\text{out}}^{\text{vert}})$, by the commutativity of the top-left square (shown two diagrams above). It thus makes sense to consider the quotient of $\ker(\partial_{\text{out}}^{\text{hor}})\cap \ker(\partial_{\text{out}}^{\text{vert}})$ by $\operatorname{im}(\partial_{\text{in}}^{\text{diag}})$.

Similarly, by the commutativity of the bottom-right square both $\operatorname{im}(\partial_{\text{in}}^{\text{hor}})$ and $\operatorname{im}(\partial_{\text{in}}^{\text{vert}})$ are contained in $\ker(\partial_{\text{out}}^{\text{diag}})$, and hence so is the sum of those two subobjects. So, it makes sense to consider the quotient of $\ker(\partial_{\text{out}}^{\text{diag}})$ by $\operatorname{im}(\partial_{\text{in}}^{\text{hor}})+\operatorname{im}(\partial_{\text{in}}^{\text{vert}})$.

> [!note] Definition of receptor and donor objects
> With the above notation, the **receptor** at $X$ is the quotient object
> 
> $$^{\square} X=(\ker(\partial_{\text{out}}^{\text{hor}})\cap \ker(\partial_{\text{out}}^{\text{vert}}))/\operatorname{im}(\partial_{\text{in}}^{\text{diag}}).$$
> 
> The **donor** at $X$ is the quotient object
> 
> $$X_{\square}=\ker(\partial_{\text{out}}^{\text{diag}})/(\operatorname{im}(\partial_{\text{in}}^{\text{hor}})+\operatorname{im}(\partial_{\text{in}}^{\text{vert}})).$$

These four quotient objects (the two homology objects and these two new objects) are closely related:

> [!summary] The intramural maps
> Continuing the above notation, the identity morphisms (on coset representatives) induce the following commutative diagram in $C$:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMSwwLCJee1xcc3F1YXJlfVgiXSxbMCwxLCJYXntcXHRleHR7dmVydH19Il0sWzIsMSwiWF57XFx0ZXh0e2hvcn19Il0sWzEsMiwiWF97XFxzcXVhcmV9Il0sWzAsMV0sWzEsM10sWzAsMl0sWzIsM11d&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
> These morphisms are called the **intramural maps** of $X$.

The name "intramural" is meant to indicate that the above morphisms are between objects that all arise from (quotients of subobjects of) $X$, a single object in the double complex. This is in contrast with the "extramural" maps below, which are between (quotients of subobjects of) different objects in the double complex.

> [!summary] The extramural maps
> Each morphism $\partial:X\to X'$ in the double complex (horizontal or vertical) induces a morphism $X_{\square}\to ^{\square}X'$ from the donor at $X$ to the receptor at $X'$. Each such morphism is called the **extramural map** associated to $\partial$.

These extramural maps are meant to justify the names "donor" and "receptor". As with the intramural maps, these are not mysterious morphisms. For the sake of concreteness, suppose $\partial:X\to X'$ is a horizontal morphism in the double complex. Each element of the donor $X_{\square}$ is a coset of $\operatorname{im}(\partial_{\text{in}}^{\text{hor}})+\operatorname{im}(\partial_{\text{in}}^{\text{vert}})$ represented by an element $x$ of $\ker(\partial_{\text{out}}^{\text{diag}})\subseteq X$; in other words, it is represented by an element $x$ such that $\partial^{\text{vert}}\partial^{\text{hor}}x = 0$. The extramural map $X_{\square}\to ^{\square}X'$ is the map that sends the coset represented by $x$ to the coset represented by $\partial^{\text{hor}}x$. The proof of the above fact is then simply verifying that this map is well-defined and does indeed map to the receptor $^{\square}X$. (We'll omit that proof for now, but it's not long.)

Before moving on, we note that these mural maps are closely related to induced maps on homology:

> [!summary] Mural maps and homology maps
> For any horizontal morphism $\partial^{\text{hor}}:X\to Y$ in the double complex, the induced morphism on homology $X^{\text{vert}}\to Y^{\text{vert}}$ is exactly the composition of mural maps
> 
> $$X^{\text{vert}}\to X_{\square}\to ^{\square}Y\to Y^{\text{vert}}.$$
> 
> The analogous statement is true for each vertical morphism.


# Diagram chasing

It will soon be useful to employ a new notation for the induced extramural maps. For a horizontal morphism $\partial^{\text{hor}}:X\to X'$, we will notate the induced extramural map as

$$X_{\square}\nearrow \,^{\square}X'$$

For a vertical morphism $\partial^{\text{vert}}:X\to X'$, we will notate the induced extramural map as

$$\begin{align*} X&_{\square}\\ \swarrow &\\ ^{\square}X' \end{align*}$$

This notation makes it visually clear that in every double complex the extramural maps form long diagonal zigzags between donors and receptors:

<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMSwyLCJee1xcc3F1YXJlfVhfe20tMSxuKzF9Il0sWzEsMSwiWF57bSxuKzF9X3tcXHNxdWFyZX0iXSxbMiwxLCJee1xcc3F1YXJlfVhfe20sbn0iXSxbMiwwLCJYXnttKzEsbn1fe1xcc3F1YXJlfSJdLFszLDAsInt9Il0sWzAsMiwie30iXSxbMSwwXSxbMSwyXSxbMywyXSxbMyw0XSxbNSwwXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

(Note that I had to adjust the positions of some of the labels in order to make the object labels readable. Also, the q.uiver app I'm using to make these diagrams cannot adjust the arrow angle to match my desired look. Alas.) At the very ends of any such diagonal, we can use the intramural maps to relate the initial donor to the horizontal (or vertical) homology at that donor object, and the final receptor to the horizontal (or vertical) homology at that receptor.

<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsOCxbMiwyLCJee1xcc3F1YXJlfVhfe20tMSxuKzF9Il0sWzIsMSwiWF57bSxuKzF9X3tcXHNxdWFyZX0iXSxbMywxLCJee1xcc3F1YXJlfVhfe20sbn0iXSxbMywwLCJYXnttKzEsbn1fe1xcc3F1YXJlfSJdLFs0LDAsIl57XFxzcXVhcmV9IFhfe20rMSxuLTF9Il0sWzEsMiwiWF57bS0xLG4rMn1fe1xcc3F1YXJlfSJdLFswLDEsIlhfe20tMSxuKzJ9XntcXHRleHR7aG9yfX0iXSxbNSwxLCJYX3ttKzEsbi0xfV57XFx0ZXh0e2hvcn19Il0sWzEsMF0sWzEsMl0sWzMsMl0sWzMsNF0sWzUsMF0sWzYsNV0sWzQsN11d&embed" width="600" height="250" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

At this first glance this might not look incredibly useful, since the morphisms can't be chained together. However, if there were additional assumptions that guaranteed the mural maps were isomorphisms, then the zig-zag mural maps *could* be chained together to produce a morphism from one homology object to another.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/The Salamander Lemma\|The Salamander Lemma]]