---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/the-salamander-lemma/","tags":["category_theory/abelian_categories"],"updated":"2024-11-23T19:25:30-08:00"}
---

For each piece of the double complex of the form
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJBIl0sWzAsMSwiQiJdLFsxLDEsIkMiXSxbMSwyLCJEIl0sWzAsMSwiXFxwYXJ0aWFsXntcXHRleHR7dmVydH19Il0sWzEsMiwiXFxwYXJ0aWFsXntcXHRleHR7aG9yfX0iXSxbMiwzLCJcXHBhcnRpYWxee1xcdGV4dHt2ZXJ0fX0iXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

we obtain the following salamander-shaped diagram of mural maps:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJBX3tcXHNxdWFyZX0iXSxbMCwxLCJee1xcc3F1YXJlfUIiXSxbMSwxLCJCX3tcXHNxdWFyZX0iXSxbMiwxLCJee1xcc3F1YXJlfUMiXSxbMywxLCJDXntcXHNxdWFyZX0iXSxbMywyLCJee1xcc3F1YXJlfUQiXSxbMCwxXSxbMSwyXSxbMiwzXSxbMyw0XSxbNCw1XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>


>[!summary] The Salamander Lemma
>If a diagram
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJBIl0sWzAsMSwiQiJdLFsxLDEsIkMiXSxbMSwyLCJEIl0sWzAsMSwiXFxwYXJ0aWFsXntcXHRleHR7dmVydH19Il0sWzEsMiwiXFxwYXJ0aWFsXntcXHRleHR7aG9yfX0iXSxbMiwzLCJcXHBhcnRpYWxee1xcdGV4dHt2ZXJ0fX0iXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
>is part of a double complex in an abelian category, then there is a 6-term exact sequence
>$$A_{\square}\to B^{\text{hor}}\to B_{\square}\to ^{\square}C\to C^{\text{hor}}\to ^{\square}D,$$
>where the first morphism is the composition $A_{\square}\to ^{\square}B\to B^{\text{hor}}$ and the last morphism is the composition $C^{\text{hor}}\to C_{\square}\to ^{\square}D$.
>
>Similarly, if a diagram
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJBIl0sWzEsMCwiQiJdLFsxLDEsIkMiXSxbMiwxLCJEIl0sWzAsMSwiXFxwYXJ0aWFsXntcXHRleHR7aG9yfX0iXSxbMSwyLCJcXHBhcnRpYWxee1xcdGV4dHt2ZXJ0fX0iXSxbMiwzLCJcXHBhcnRpYWxee1xcdGV4dHtob3J9fSJdXQ==&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
>is part of a double complex in an abelian category, then there is a 6-term exact sequence
>$$A_{\square}\to B^{\text{vert}}\to B_{\square}\to ^{\square}C\to C^{\text{vert}}\to ^{\square}D,$$
>where the first morphism is the composition $A_{\square}\to ^{\square}B\to B^{\text{vert}}$ and the last morphism is the composition $C^{\text{vert}}\to C_{\square}\to ^{\square}D$.

I'll include the proof of this at some point, but for now see [here](https://ncatlab.org/nlab/show/salamander+lemma) and notice how it's not very long.

### Intramural and extramural isomorphisms

>[!summary] Extramural isomorphisms
>If for some horizontal arrow $\partial^{\text{hor}}:A\to B$ in the double complex one has $A^{\text{hor}}=0=B^{\text{hor}}$, then the extramural map $A_{\square}\nearrow \,^{\square}B$ is an isomorphism.
>
>Similarly, if for some vertical arrow $\partial^{\text{vert}}:A\to B$ in the double complex one has $A^{\text{vert}}=0=B^{\text{vert}}$, then the extramural map
>$$\begin{align*}
>A&_{\square}\\
>\swarrow &\\
>^{\square}B
>\end{align*}$$
>is an isomorphism.

(A proof will be added here eventually.)

>[!summary] Intramural isomorphisms
>If $\partial:A\to B$ is a morphism in a double complex and at one end of that morphism the complex is exact in the perpendicular direction, then two of the intramural maps are isomorphisms (as shown below; I'll TeX up this massive diagram eventually):
>![intramural_isos.png](/img/user/90-99%20Meta/91%20Images/Category%20theory/intramural_isos.png)

(A proof will be added here eventually.)

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Diagram lemmas\|Diagram lemmas]]