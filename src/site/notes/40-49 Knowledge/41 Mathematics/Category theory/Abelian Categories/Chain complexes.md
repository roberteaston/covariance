---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/chain-complexes/","tags":["category_theory/abelian_categories"],"updated":"2024-11-23T19:24:47-08:00"}
---

## Definitions

>[!note] Definition of chain complex
>Let $C$ be an additive category. A *chain complex* in $C$ is a sequence of morphisms
>$$\cdots \xrightarrow{\partial_2} X_1\xrightarrow{\partial_1} X_0\xrightarrow{\partial_0} X_{-1}\xrightarrow{\partial_{-1}}\cdots$$
>such that $\partial_n\circ \partial_{n+1}=0$ for all $n$.

A chain complex is often notated simply as $X_{\bullet}$ and the morphisms in the complex are sometimes generically all denoted $\partial$, so long as no confusion will arise. In that scenario, we can write simply $\partial\circ \partial=0$.

>[!note] Definition of morphism of chain complexes
>Let $X_{\bullet}$ and $Y_{\bullet}$ be two chain complexes in an additive category $C$.  A *morphism of chain complexes* (or **chain map**) is a collection of morphisms $f_n:X_n\to Y_n$ such that all diagrams as below commute:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJYX3tuKzF9Il0sWzEsMCwiWF9uIl0sWzAsMSwiWV97bisxfSJdLFsxLDEsIllfbiJdLFswLDEsIlxccGFydGlhbF5YX3tuKzF9Il0sWzIsMywiXFxwYXJ0aWFsXllfe24rMX0iLDJdLFswLDIsImZfe24rMX0iLDJdLFsxLDMsImZfbiJdXQ==&embed" width="200" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Chain maps are often denoted $f_{\bullet}$ (or even simply $f$, if there is no risk of confusion). Chain complexes with chain maps between them form a category, called the **category of chain complexes** in $C$, denoted $\operatorname{Ch}_{\bullet}(C)$ (or simply $\operatorname{Ch}(C)$). In fact, it's not just an arbitrary category ...

>[!summary] The category of chain complexes is abelian
>If $C$ is an abelian category, then so is $\operatorname{Ch}(C)$.


At some point this note will be updated with a proof of this result. For future reference, the kernel of a chain map $f:X_{\bullet}\to Y_{\bullet}$ is the complex of degree-wise kernels, which we may as well denote $\operatorname{ker}(f_{\bullet})$. Similarly, the cokernel of a chain map is the complex of degree-wise cokernels.

With this in mind, it's reasonable to consider chain complexes in $\operatorname{Ch}(C)$. These are the classical *double chain complexes* in $C$, usually simply called [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Double complexes and mural maps#Double complexes\|double complexes]]. These will be critical to the various [[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Diagram lemmas\|diagram lemmas]] one encounters when studying chain complexes.

---
### Common terminology

Due to the historical roots of the concept, there are a variety of unusual terms frequently used when dealing with chain complexes.
- The morphisms $\partial_n$ are often called **differentials** or **boundary maps**.
- The elements of $X_n$ (assuming $C$ is a concrete category) are called **$n$-chains**.
- The elements of $Z_n:=\ker(\partial_n)$ are called **$n$-cycles**.
- The elements of $B_n:=\operatorname{im}(\partial_{n+1})$ are called **$n$-boundaries**.

>[!warning]
>For an abstract abelian category, one can argue that these names are inappropriate, in so much as they are evocative of certain geometric features that have no context or interpretation in an abstract abelian category. As such, I tend to avoid their use.

Notice that because of the condition $\partial_n\circ \partial_{n-1}=0$ there are inclusions
$$B_n\hookrightarrow Z_n\hookrightarrow C_n$$
The quotient
$$H_n=\ker(\partial_n)/\operatorname{im}(\partial_{n+1})=Z_n/B_n$$
can be thought of as a measure how how far away the chain complex is from being exact at $X_n$. It is called the **degree-$n$ chain homology** of $X_{\bullet}$ and is often denoted $H_n(X_{\bullet})$.

>[!summary] Chain morphisms respect boundaries, cycles, and homology
>Suppose $f:X_{\bullet}\to Y_{\bullet}$ is a chain map. Then for every index $n\in {\bf Z}$ the map $f_n:X_n\to Y_n$ restricts to morphisms
>$$B_n(f):B_n(X_{\bullet})\to B_n(Y_{\bullet})$$
>and
>$$Z_n(f):Z_n(X_{\bullet})\to Z_n(Y_{\bullet}).$$
>In particular, it induces a morphism on chain homology
>$$H_n(f):H_n(X_{\bullet})\to H_n(Y_{\bullet}).$$

These are not deep facts. For example, suppose $x\in \ker(\partial^X_n)=B_n(X_{\bullet})$. Then by the commutativity of the square with $X_n$ at the top-left corner we have
$$\partial^Y_n(f_n(x))=f_{n-1}(\partial^X_n(x))=f_{n-1}(0)=0,$$
hence $f_n(x)\in \ker(\partial^Y_n)=B_n(Y_{\bullet})$. This implies that $f_n(B_n(X_{\bullet}))\subseteq B_n(Y_{\bullet})$ and so $f_n$ restricts to a morphism $B_n(X_{\bullet})\to B_b(Y_{\bullet})$. This is the morphism labeled $B_n(f)$, above. The same type of argument shows that $f_n$ restricts to a morphism $Z_n(X_{\bullet})\to Z_n(Y_{\bullet})$, which is the morphism $Z_n(f)$, above.

Finally, consider the composition of the morphisms below, where the second map is the canonical projection onto the quotient:
$$B_n(X_{\bullet})\xrightarrow{B_n(f)}B_n(Y_{\bullet})\xrightarrow{\pi}B_n(Y_{\bullet})/Z_n(Y_{\bullet})=H_n(Y_{\bullet}).$$
By the same logic used to prove $f_n$ restricts to a morphism $Z_n(X_{\bullet})\to Z_n(Y_{\bullet})$, the subobject $Z_n(X_{\bullet})$ of $B_n(X_{\bullet})$ is contained in $Z_n(Y_{\bullet})$, which is in turn contained in the kernel of $f_n\mid_{B_n(Y_{\bullet})}=B_n(f)$. By the universal property of the quotient we therefore have a unique factorization
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJCX24oWF97XFxidWxsZXR9KSJdLFsxLDEsIkJfbihZX3tcXGJ1bGxldH0pIl0sWzIsMSwiQl9uKFlfe1xcYnVsbGV0fSkvWl9uKFlfe1xcYnVsbGV0fSkiXSxbMiwwLCJCX24oWF97XFxidWxsZXR9KS9aX24oWF97XFxidWxsZXR9KSJdLFszLDEsIkhfbihZX3tcXGJ1bGxldH0pIl0sWzMsMCwiSF9uKFhfe1xcYnVsbGV0fSkiXSxbMCwxLCJCX24oZikiLDJdLFsxLDIsIlxccGlfWSIsMl0sWzAsMywiXFxwaV9YIl0sWzIsNCwiIiwyLHsibGV2ZWwiOjIsInN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMyw1LCIiLDIseyJsZXZlbCI6Miwic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFs1LDQsIkhfbihmKSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&embed" width="500" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
This is how we obtain the morphism $H_n(f)$ in the above fact.

>[!info] Easier than it looks
>Despite all of the names of the various objects and maps, every map above is essentially either $f_n$, or projection onto a quotient. For example, the homology morphism $H_n(f)$ maps each coset $x+Z_n(X_{\bullet})$ to the coset $f_n(x)+Z_n(Y_{\bullet})$. The above diagrams are just a formal way of verifying this map is a well defined morphism. (They also outline a strategy to produce such morphisms even in categories in which the objects are not sets.)

---
## Cochain complexes

>[!note] Definition of cochain complex
>A **cochain complex** in an additive category $C$ is a chain complex in $C^{\text{op}}$. In other words, it is a sequence of morphisms
>$$\cdots \xrightarrow{d^{n-1}} X^n\xrightarrow{d^n} X^{n+1}\xrightarrow{d^{n+1}}\cdots$$
>such that $d^n\circ d^{n-1}=0$ for all $n$.

In terms of abstract category theory there is no reason to distinguish between chain complexes and cochain complexes, since the difference is entirely in the notation. Historically, however, the two developed separately and so were distinguished with different notation.

---

## Suggested next note

[[40-49 Knowledge/41 Mathematics/Category theory/Abelian Categories/Exact sequences\|Exact sequences]]