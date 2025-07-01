---
{"dg-publish":true,"permalink":"/20-29-research/24-summer-re-us/2025/categorical-representation-theory/summer-reu-2025-categorical-representation-theory/","updated":"2025-07-01T10:52:41-07:00"}
---

> [!quote] The tagline
> It's time for a purely categorical development of representation theory.

## Project summary
---

We have three main aims:
1. Give categorical definitions for each object and property in classical representation theory.
2. Give categorical descriptions (and possibly proofs) for the various results (especially the named theorems) in representation theory.
3. Find a categorical interpretation/method of performing "calculations" in representation theory; e.g., computing character tables, inner products, etc.

Each of these aims is open-ended. Some things will be quickly and easily dealt with; e.g., reinterpreting representations of a group $G$ as functors from the "categorification" of $G$ to another category. Others might take some creativity; e.g., how do we define class functions, the trace, characters, etc.?

## Meeting notes
---

| Meeting Date                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------ |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-06-30\|REU Meeting - 2025-06-30]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-06-26\|REU Meeting - 2025-06-26]] |

{ .block-language-dataview}

## Task list

*Tasks will be added after each meeting.*
### Summarize Classical Representation Theory: Part I

- [x] Summarize classical definitions of a representation of a group $G$, including:
	- [x] matrix representations
	- [x] $F$-linear representations, i.e., as actions on $F$-vector spaces (where $F$ is a field)
	- [x] permutation representations
- [x] Predict/conjecture analogous definitions for a representation of a group $G$ in other categories, such as:
	- [x] topological representations
	- [x] module representations
	- [x] representations in your favorite category
- [x] Review the concept of the group ring $R[G]$, where $G$ is a group and $R$ is a (commutative) ring. (One reference is Section 7.2 in Dummit & Foote)
- [x] Prove there is a bijection (later to be upgraded to an equivalence of categories) between  $F$-linear representations of a group $G$ and $F[G]$-modules
	- [x] Also show that $F[G]$-submodules correspond to $G$-stable subspaces

### Categorification: Part I

 - [ ] Carefully describe the "categorification" construction.
	 - [ ] Define a "categorization" functor $\textbf{Grp}\to \textbf{Cat}$? Make sure to describe what happens to arrows in $\textbf{Grp}$, i.e., group morphisms.
	- [ ] Describe the "image" of this functor.
	- [ ] Verify that functors $\textbf{G}\to \textbf{H}$ correspond to group morphisms $G\to H$.
	- [ ] Similarly "categorify" any monoid.
- [ ] Explicitly describe the functors between the three categories listed above.\
	- [ ] Make sure to verify that arrows in the third (functor) category correspond to intertwiners.
	- [ ] Convince yourselves the categories are equivalent.
	- [ ] Determine which (if any) of those three categories are isomorphic.

## The team
---
### Aaron Boone
aboone03@calpoly.edu
![Boone, Aaron.jpeg|100](/img/user/90-99%20Meta/91%20Images/Headshots/Boone,%20Aaron.jpeg)

### Mark Muzquiz
mamuzqui@calpoly.edu
![Muzquiz, Mark.jpeg|100](/img/user/90-99%20Meta/91%20Images/Headshots/Muzquiz,%20Mark.jpeg)


## References
---

[[Dummit, Foote - Abstract Algebra - 3e.pdf|Dummit & Foote: Chapters 18 and 19]]