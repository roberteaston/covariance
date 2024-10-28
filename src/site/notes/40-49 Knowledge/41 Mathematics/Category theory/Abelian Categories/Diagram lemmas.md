---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/diagram-lemmas/","tags":["category_theory/abelian_categories"],"updated":"2024-10-28T13:01:25-07:00"}
---

We can use the [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/The Salamander Lemma\|The Salamander Lemma]] (and the various mural maps) to quickly prove many of the named "diagram lemmas" one encounters in homological algebra (and elsewhere). This is just a sampling.

---

>[!summary] The Four Lemma
>Consider a commutative diagram in $C$ of the form below, where the rows are exact, $\tau$ is an epimorphism, and $\nu$ is a monomorphism:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsOCxbMCwwLCJBIl0sWzEsMCwiQiJdLFsyLDAsIkMiXSxbMywwLCJEIl0sWzAsMSwiQSciXSxbMSwxLCJCJyJdLFsyLDEsIkMnIl0sWzMsMSwiRCciXSxbMCwxXSxbMSwyLCJcXHhpIl0sWzIsM10sWzQsNV0sWzUsNiwiXFxldGEiXSxbNiw3XSxbMCw0LCJcXHRhdSJdLFsxLDUsImYiXSxbMiw2LCJnIl0sWzMsNywiXFxudSJdXQ==&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
>Then:
>1. $\xi(\ker(f))=\ker(g)$
>2. $\operatorname{im}(f)=\eta^{-1}(\operatorname{im}(g))$
>   
>In particular, if $f$ is a monomorphism then so is $g$; and if $g$ is an epimorphism then so is $f$.
{ #8cd8d2}


By the given assumptions, we can extend the given diagram to a double complex below, in which all columns are exact and the middle two rows are exact:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTgsWzAsMiwiQSJdLFsxLDIsIkIiXSxbMiwyLCJDIl0sWzMsMiwiRCJdLFswLDMsIkEnIl0sWzEsMywiQiciXSxbMiwzLCJDJyJdLFszLDMsIkQnIl0sWzEsMSwiXFxrZXIoZikiXSxbMiwxLCJcXGtlcihnKSJdLFsxLDAsIjAiXSxbMiwwLCIwIl0sWzMsMSwiMCJdLFsxLDQsIkInL1xcb3BlcmF0b3JuYW1le2ltfShmKSJdLFsyLDQsIkMnL1xcb3BlcmF0b3JuYW1le2ltfShnKSJdLFsxLDUsIjAiXSxbMiw1LCIwIl0sWzAsNCwiMCJdLFswLDFdLFsxLDIsIlxceGkiXSxbMiwzXSxbNCw1XSxbNSw2LCJcXGV0YSJdLFs2LDddLFswLDQsIlxcdGF1Il0sWzEsNSwiZiJdLFsyLDYsImciXSxbMyw3LCJcXG51Il0sWzEwLDhdLFs4LDFdLFsxMSw5XSxbOSwyXSxbNCwxN10sWzUsMTNdLFsxMywxNV0sWzYsMTRdLFsxNCwxNl0sWzgsOSwiXFx4aVxcbWlkX3tcXGtlcihmKX0iXSxbOSwxMl0sWzEyLDNdXQ==&embed" width="400" height="400" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

For the first statement it is enough to show that $\ker(g)^{\text{hor}}\simeq 0$, since this is equivalent to $\xi(\ker(f))=\ker(g)$. First use the intramural isomorphisms to conclude
$$\ker(g)^{\text{hor}}\simeq \ker(g)_{\square}$$
Then the long zig-zag of extramural isomorphisms shows that this is isomorphic to $^{\square}0\simeq 0$ in the bottom-left corner of the diagram.

The second statement is proven analogously.

---

>[!summary] The Five Lemma
>Consider a commutative diagram in $C$ of the form below, with exact rows:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTAsWzAsMCwiWF8xIl0sWzEsMCwiWF8yIl0sWzIsMCwiWF8zIl0sWzMsMCwiWF80Il0sWzQsMCwiWF81Il0sWzAsMSwiWV8xIl0sWzEsMSwiWV8yIl0sWzIsMSwiWV8zIl0sWzMsMSwiWV80Il0sWzQsMSwiWV81Il0sWzAsMV0sWzIsM10sWzMsNF0sWzUsNl0sWzYsN10sWzcsOF0sWzgsOV0sWzAsNSwiZl8xIl0sWzEsNiwiZl8yIl0sWzIsNywiZl8zIl0sWzMsOCwiZl80Il0sWzQsOSwiZl81Il0sWzEsMl1d&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
>Then:
>1. If $f_2$ and $f_4$ are epimorphisms and $f_5$ is a monomorphism, then $f_3$ is an epimorphism.
>2. If $f_2$ and $f_4$ are monomorphisms and $f_1$ is an epimorphism, then $f_3$ is a monomorphism.
{ #71068d}


Note that as an immediate corollary, if $f_2$ and $f_4$ are isomorphisms and $f_1$ is an epimorphism and $f_5$ is a monomorphism, then $f_3$ is an isomorphism. This statement is sometimes called the "weak five lemma." By contrast, the above statement is called the "sharp five lemma."

To see how this result follows from the Four Lemma, let's look at the proof of the first statement. Consider the following part of the diagram:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsOCxbMCwwLCJYXzIiXSxbMSwwLCJYXzMiXSxbMiwwLCJYXzQiXSxbMywwLCJYXzUiXSxbMCwxLCJZXzIiXSxbMSwxLCJZXzMiXSxbMiwxLCJZXzQiXSxbMywxLCJZXzUiXSxbMSwyXSxbMiwzXSxbNCw1XSxbNSw2XSxbNiw3XSxbMCw0LCJmXzIiXSxbMSw1LCJmXzMiXSxbMiw2LCJmXzQiXSxbMyw3LCJmXzUiXSxbMCwxXV0=&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

The Four Lemma applies, since the rows are exact, $f_2$ is a monomorphism, and $f_5$ is an epimorphism. Since $f_4$ is an epimorphism, the Four Lemma implies that so is $f_3$. This proves the first statement.

The analogous argument proves the second statement.

---

Here's a [famous](https://youtu.be/aXBNPjrvx-I?si=4g9oBsprnb1UN6Xg) result:

>[!summary] The Snake Lemma
>If both rows are exact in a commutative diagram of the form
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsOCxbMSwwLCJYXzEiXSxbMiwwLCJYXzIiXSxbMywwLCJYXzMiXSxbNCwwLCIwIl0sWzAsMSwiMCJdLFsxLDEsIllfMSJdLFsyLDEsIllfMiJdLFszLDEsIllfMyJdLFswLDUsImYiXSxbMSw2LCJnIl0sWzIsNywiaCJdLFswLDFdLFsxLDJdLFs0LDVdLFs1LDZdLFs2LDddLFsyLDNdXQ==&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
>then there is a morphism $\delta:\ker(h)\to \operatorname{coker}(f)$ such that the following sequence is exact:
>$$\ker(f)\to\ker(g)\to\ker(h)\xrightarrow{\delta}\operatorname{coker}(f)\to \operatorname{coker}(g)\to\operatorname{coker}(h).$$
>
>The morphism $\delta$ is called the **connecting morphism**.
{ #179f58}


To prove this lemma, complete the given diagram to a double complex:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMjQsWzIsMiwiWF8xIl0sWzMsMiwiWF8yIl0sWzQsMiwiWF8zIl0sWzUsMiwiMCJdLFsxLDMsIjAiXSxbMiwzLCJZXzEiXSxbMywzLCJZXzIiXSxbNCwzLCJZXzMiXSxbMiwxLCJcXGtlcihmKSJdLFszLDEsIlxca2VyKGcpIl0sWzQsMSwiXFxrZXIoaCkiXSxbMSwyLCJcXGtlcihsKSJdLFs1LDMsIlxcb3BlcmF0b3JuYW1le2Nva2VyfShyKSJdLFsyLDQsIlxcb3BlcmF0b3JuYW1le2Nva2VyfShmKSJdLFszLDQsIlxcb3BlcmF0b3JuYW1le2Nva2VyfShnKSJdLFs0LDQsIlxcb3BlcmF0b3JuYW1le2Nva2VyfShoKSJdLFsyLDAsIjAiXSxbMywwLCIwIl0sWzQsMCwiMCJdLFsyLDUsIjAiXSxbMyw1LCIwIl0sWzQsNSwiMCJdLFswLDIsIjAiXSxbNiwzLCIwIl0sWzAsNSwiZiJdLFsxLDYsImciXSxbMiw3LCJoIl0sWzAsMSwibCJdLFsxLDJdLFs0LDVdLFs1LDZdLFs2LDcsInIiXSxbMiwzXSxbMTEsMF0sWzEzLDE0XSxbMTEsNF0sWzgsMF0sWzUsMTNdLFs5LDFdLFs2LDE0XSxbOCw5XSxbOSwxMF0sWzEwLDJdLFs3LDE1XSxbMywxMl0sWzcsMTJdLFsxNCwxNV0sWzE2LDhdLFsxNyw5XSxbMTgsMTBdLFsxMywxOV0sWzE0LDIwXSxbMTUsMjFdLFsyMiwxMV0sWzEyLDIzXV0=&embed" width="600" height="400" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

By assumption, all of the columns are exact, the rows are exact at the $X_i$ and $Y_i$, and the squares involving $\ker(l)$ and $\operatorname{coker}(r)$ commute.

We first prove exactness at $\ker(g)$, which means proving $\ker(g)^{\text{hor}}\simeq 0$. We first note that vertical exactness at $\ker(g)$ implies we have an intramural isomorphism $\ker(g)^{\text{hor}}\simeq \ker(g)_{\square}$. We can then use the zig-zag of extramural isomorphisms
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNSxbMSwxLCJYXzF7fV97XFxzcXVhcmV9Il0sWzEsMiwiXntcXHNxdWFyZX1ZXzEiXSxbMiwxLCJee1xcc3F1YXJlfVhfMiJdLFsyLDAsIlxca2VyKGcpX3tcXHNxdWFyZX0iXSxbMCwyLCIwX3tcXHNxdWFyZX0iXSxbMywyXSxbMCwyXSxbMCwxXSxbNCwxXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

We thus have $\ker(g)^{\text{hor}}\simeq \ker(g)_{\square}\simeq 0_{\square}\simeq 0$, as desired. Exactness at $\operatorname{coker}(g)$ is analogous.

As for the connecting morphism $\delta:\ker(h)\to \operatorname{coker}(f)$, this is the same as giving an isomorphism from $\operatorname{coker}(\ker(g)\to \ker(h))\simeq\ker(h)^{\text{hor}}$  to $\ker(\operatorname{coker}(f)\to \operatorname{coker}(g))\simeq \operatorname{coker}(f)^{\text{hor}}$. This is, in turn, given by the intramural isomorphisms $\ker(h)^{\text{hor}}\simeq \ker(h)_{\square}$ and $\operatorname{coker}(f)^{\text{hor}}\simeq ^{\square}\operatorname{coker}(f)$ and the zig-zag of extramural isomorphisms below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMSwxLCJYXzJ7fV97XFxzcXVhcmV9Il0sWzEsMiwiXntcXHNxdWFyZX1ZXzIiXSxbMiwxLCJee1xcc3F1YXJlfVhfMyJdLFsyLDAsIlxca2VyKGgpX3tcXHNxdWFyZX0iXSxbMCwyLCJZXzF7fV97XFxzcXVhcmV9Il0sWzAsMywiXFxvcGVyYXRvcm5hbWV7Y29rZXJ9KGYpXntcXHNxdWFyZX0iXSxbMywyXSxbMCwyXSxbMCwxXSxbNCwxXSxbNCw1XV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

