---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/adjoints/properties-of-adjoints/","tags":["category_theory"],"updated":"2024-10-09T10:24:30-07:00"}
---

We list the following two properties of adjoints without proof.

>[!summary] Uniqueness of adjoints
>Any two right adjoints of a given functor $F:C\to D$ are naturally isomorphic, as are any two left adjoints of a functor $G:D\to C$.

>[!summary] Adjoints and (co)limits
>Suppose $F:C\to D$ is a functor and $T:J\to C$ is a diagram of shape $J$ in $C.$
>
>If $F$ is a left adjoint (of some functor $G:D\to C$) and if the diagram $T$ has a colimiting cone $\tau:T\Rightarrow c$ in $C$, then $FT$ has the colimiting cone $F\tau:F(c)\Rightarrow FT$ in $D$.
>
>If $F$ is right adjoint (of some functor $G:D\to C$), and if the diagram $T$ has a limiting cone $\tau:c\Rightarrow T$ in $C$, then $FT$ has the limiting cone $F\tau:FT\Rightarrow F(c)$ in $D$.
{ #6063ae}


In short, left adjoints preserve colimits (that exist) and right adjoints preserve limits (that exist).
## Examples of adjoints preserving (co)limits

The free $R$-module functor $F:\textbf{Set}\to R\textbf{-Mod}$ is left adjoint to the forgetful functor $U:R\textbf{-Mod}\to \textbf{Set}$, so it commutes with colimits. In particular, it commutes with coproducts, which in the category $\textbf{Set}$ is disjoint union and in the category $R\textbf{-Mod}$ is direct sum. Thus, for any family of sets $\{S_i\mid i\in I\}$ we have an isomorphism

$$F\left(\coprod_{i\in I} S_i\right)\simeq \bigoplus_{i\in I}F(S_i).$$

---

The tensor product functor $R\otimes_{\bf z}-:\textbf{Ab}\to R\textbf{-Mod}$ is left adjoint to the corresponding forgetful functor, so it also commutes with colimits (and hence coproducts). The coproduct in the category $\textbf{Ab}$ is the direct sum, so for any family of abelian groups $\{G_i\mid i\in I\}$ we have an isomorphism

$$R\otimes_{\bf Z}\left(\bigoplus_{i\in I} G_i\right)\simeq \bigoplus_{i\in I}\left(R\otimes_{\bf Z} G_i\right).$$

The hom functor $\operatorname{Hom}_{\textbf{Ab}}(U(R),-):\textbf{Ab}\to R\textbf{-Mod}$ is right adjoint to the corresponding forgetful functor, so it commutes with limits (and hence products). So for any family of abelian groups as above we also have an isomorphism

$$\operatorname{Hom}_{\textbf{Ab}}\left(U(R),\prod_{i\in I}G_i\right)\simeq \prod_{i\in I}\operatorname{Hom}_{\textbf{Ab}}(U(R),G_i). $$

## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Free modules\|Free modules]]
[[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Yoneda's Lemma\|Yoneda's Lemma]]