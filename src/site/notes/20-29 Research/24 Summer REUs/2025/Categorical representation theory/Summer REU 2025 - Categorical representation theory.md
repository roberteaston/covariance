---
{"dg-publish":true,"permalink":"/20-29-research/24-summer-re-us/2025/categorical-representation-theory/summer-reu-2025-categorical-representation-theory/","tags":["category_theory","group_theory"],"updated":"2025-08-20T08:08:06-07:00"}
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
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-08-15\|REU Meeting - 2025-08-15]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-08-06\|REU Meeting - 2025-08-06]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-08-04\|REU Meeting - 2025-08-04]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-07-31\|REU Meeting - 2025-07-31]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-07-10\|REU Meeting - 2025-07-10]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-07-07\|REU Meeting - 2025-07-07]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-07-03\|REU Meeting - 2025-07-03]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-06-30\|REU Meeting - 2025-06-30]] |
| [[50-59 Logs/52 Research meetings/2025 - Summer/REU 1 - Aaron and Mark/REU Meeting - 2025-06-26\|REU Meeting - 2025-06-26]] |

{ .block-language-dataview}

## Task list

*Tasks will be added after each meeting.*
### Classical Representation Theory: Part I

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

 - [x] Carefully describe the "categorification" construction.
	 - [x] Define a "categorization" functor $\textbf{Grp}\to \textbf{Cat}$? Make sure to describe what happens to arrows in $\textbf{Grp}$, i.e., group morphisms.
	- [x] Describe the "image" of this functor.
	- [x] Verify that functors $\textbf{G}\to \textbf{H}$ correspond to group morphisms $G\to H$.
	- [x] Similarly "categorify" any monoid.
- [x] Explicitly describe the functors between the category of $F$-linear representations of $G$, the category of $F[G]$-modules, and the category of functors $\textbf{G} \to \textbf{Vec}_F$.
	- [x] Make sure to verify that arrows in the third (functor) category correspond to intertwiners.
	- [x] Convince yourselves the categories are equivalent.
	- [x] Determine which (if any) of those three categories are isomorphic.

### Classical Representation Theory: Part II

- [x]  classical definitions of
	- [x] (ir)reducible representations
	- [x] completely reducible representations
	- [x] (in)decomposable representations
- [x] Give explicit examples of each of the above , including possible combinations; e.g., a representation that is indecomposable and reducible.
- [x] Give an example of a field extension $F\to E$ and a matrix representation over $F$ that is irreducible over $F$ but reducible over $E$ (see page 848 in Dummit & Foote).
	- [x] Turn this into an example in the category of linear representations (as opposed to matrix representations).
- [x] State Maschke's Theorem and summarize the proof
- [x] Try the following exercises in Section 18.1 of Dummit & Foote:
	- 1, 2, 3, 5, 13-16, 20
- [x] Give a formal statement of the claim "Division rings generated by abelian subgroups of a division ring are fields".
	- Some initial notes are now available [[40-49 Knowledge/41 Mathematics/Ring theory/Special types of rings/Division rings\|here]]
- [x] Rephrase that result more categorically. After all, what does it even mean to say "an abelian subgroup of a division ring"? Those structures are in different categories.
- [x] In exercises 15 and 16, explicitly translate what it means for two of your representations to be equivalent, and then determine which are equivalent and which are not.

### Categorification: Part II

 - [x] Review the notions of "direct sum" and "submodule" in the following two categories: 1) the category of all left $R$-modules; and 2) the category of submodules of a given $R$-module, $M$. Give categorical descriptions of each.
 - [x] Skim through the first three sections of Chapter VII ("Monoids")
 - [x] Familiarize yourself with the basic concept of a monoidal structure and a monoid in a monoidal category.
 - [x] Write down some key/familiar examples of categories with a monoidal structure, and examples of monoids in those categories.
 - [x] In the special case in which your category is of the form $C^C$, where $C$ is some fixed category (and hence $C^C$ is the category of all functors $F:C\to C$), parse the meaning of a monoid in that monoidal category. Thus define a *monad* and rejoice!
 - [x] (Optional) Give a nice description of monoid objects in $(\textbf{Set},\bigsqcup, \emptyset)$.
 - [x] Complete Exercise 4 in Section VII.1
 - [x] Apply the result of the above exercise to the case of representations of a group $G$ in some of our favorite categories; e.g., in $\textbf{Set}, \textbf{Vec}_F$, etc.
 - [x] Describe a monoidal structure on $\textbf{Set}^{\textbf{G}}$.
 - [x] Write down what a means to have a monoid in $\textbf{Set}^{\textbf{G}}$. What does this mean in terms of representations?
 - [x] Is there a monoidal structure on $\textbf{Matr}_F$? If so, write down what it means to have a monoid in that monoidal category and describe monoids in that monoidal category.
 - [ ] Translate the notations of submodules and direct sums of modules into the categories $\textbf{Vec}_F$ and $\textbf{Matr}_F$, and then extend the notions of *irreducible* and *indecomposable* to representations of a group into those categories.
- [ ] Read about the general categorical definitions of *subobjects* and *direct sums*.

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

Dummit & Foote, *Abstract Algebra* (Chapters 18 and 19)
Mac Lane, *Categories for the Working Mathematician*