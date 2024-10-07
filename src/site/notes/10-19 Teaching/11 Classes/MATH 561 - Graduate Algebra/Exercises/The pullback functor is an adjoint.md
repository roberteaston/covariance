---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/the-pullback-functor-is-an-adjoint/","updated":"2024-10-07T13:02:35-07:00"}
---

Recall the notion of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples#Pullbacks\|pullbacks]], which for the sake of this exercise we will only consider in the category $\textbf{Set}$.

Show that the functor which assigns to each diagram of the form $X\xrightarrow{f} Z \xleftarrow{g} Y$ in $\textbf{Set}$ the pullback $X\times_Z Y$ is a right adjoint of another functor. Describe the unit and counit of the adjunction.

### Note

You don't need to check every tiny detail for this one. Define the pullback as a functor (giving the maps on objects *and* arrows), and then explicitly define the set map that should be a natural bijection between the appropriate hom-sets.

>[!summary]- Hints
Let $J$ be the category with three objects and two non-identity arrows, visualized as $\bullet \rightarrow \bullet \leftarrow \bullet$.  Functors $J\to \textbf{Set}$ then correspond to diagrams in $\textbf{Set}$ of shape $J$; i.e., diagrams of the form $X\xrightarrow{f} Z \xleftarrow{g} Y$ in $\textbf{Set}$. Let $\textbf{Set}^J$ denote the category of functors $J\to \mathbf{Set}$ and let $\Delta:\textbf{Set}\to \textbf{Set}^J$ denote the diagonal functor. Show the pullback functor is a right adjoint of $\Delta$.


