---
{"dg-publish":true,"permalink":"/20-29-research/24-summer-re-us/2026/summer-reu-2026-categorical-lie-theory/","tags":["category_theory","lie_theory"],"updated":"2026-07-16T10:25:34-07:00","dg-note-properties":{"last updated":"2026-07-16T10:25:34-07:00","tags":["category_theory","lie_theory"]}}
---

> [!quote] The tagline
> What's really going on *categorically* with the categories of Lie groups and Lie algebras?

## Project summary
---

Lie theory, which is the study of Lie groups and their associated Lie algebras, is a field in an interesting position at the moment. There are tons of concrete examples, mostly matrix Lie groups, many arising from applications in physics. The category of Lie groups is well understood, and there are explicit functors between the category of Lie groups and the category of Lie algebras. However, the latter category still seems somewhat mysterious, even to the experts. So our goal is get to the point where we can ask (and possibly answer!) categorical questions about the category of Lie algebras.

Our project will break down into roughly three phases:
- Phase I: Get familiar with classical Lie theory, by learning about matrix Lie groups and their associated Lie algebras
- Phase II: Learn the more general definitions of Lie groups and algebras, and general facts about the categories of each
- Phase III: Learn and investigate the structures of the categories of Lie groups and Lie algebras in relation to other categories; e.g., what is special about the category of Lie groups? how is it intrinsically defined as a category in its own right?


## Meeting notes
---

| Meeting Date                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------- |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 1 - Matt and Zoey/REU Meeting - 2026-07-16\|REU Meeting - 2026-07-16]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 1 - Matt and Zoey/REU Meeting - 2026-07-13\|REU Meeting - 2026-07-13]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 1 - Matt and Zoey/REU Meeting - 2026-07-09\|REU Meeting - 2026-07-09]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 1 - Matt and Zoey/REU Meeting - 2026-07-02\|REU Meeting - 2026-07-02]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 1 - Matt and Zoey/REU Meeting - 2026-06-29\|REU Meeting - 2026-06-29]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 1 - Matt and Zoey/REU Meeting - 2026-06-25\|REU Meeting - 2026-06-25]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 1 - Matt and Zoey/REU Meeting - 2026-06-22\|REU Meeting - 2026-06-22]] |

{ .block-language-dataview}

## Task list

*Tasks will be added after each meeting.*
### Classical Lie theory

- [x] Learn about classical Lie groups by reading Chapter 1 ("Matrix Lie Groups") in Hall and then check out the following exercises in Section 1.6:
	- [x] Exercise 1
	- [x] Exercise 2
	- [x] Exercise 3
	- [x] Exercise 7
	- [x] Exercise 11
	- [x] Exercise 16
	- [x] Exercise 17
- [x] Learn about the classical matrix exponential function by reading Chapter 2 ("The Matrix Exponential") in Hall and then check out the following exercises in Section 2.6:
	- [x] Exercise 2
	- [x] Exercise 4
	- [x] Exercise 8
	- [x] Exercise 9
- [x] Learn about classical Lie algebras by reading Chapter 3 ("Lie Algebras") in Hall and then check out the following exercises in Section 3.9:
	- [x] Exercise 1
	- [x] Exercise 2
	- [x] Exercise 3
	- [?] Exercise 6
	- [x] Exercise 8
	- [x] Exercise 13
	- [x] Exercise 16
	- [x] Exercise 17
- [x] Take our first steps beyond matrix Lie groups by reading the following in *Lie groups beyond an introduction* by Knapp:
	- [x] Chapter 1: Sections 3, 10, 14, and 17
	- [x] Chapter 3 (skim)

### Monoidal and Cartesian categories

- [x] Learn about monoidal categories by reading Sections 1 of Chapters VII and XI in Mac Lane's *Categories for the Working Mathematician*. Then try the following exercises at the end Section 1 in Chapter VII:
	- [x] Exercise 4
	- [x] Exercise 5
- [x] Find two monoidal structures on the category of sets
- [x] Suppose a category $C$ has a all finite products and a terminal object. Construct a monoid structure on $C$
- [x] Look up the definition of a **Cartesian monoidal category**
- [x] For each of the following familiar categories, determine if it is Cartesian monoidal:
	- [x] $\textbf{Group}$
	- [x] $\textbf{Ab}$
	- [x] $\textbf{Ring}$
	- [x] $\textbf{CRing}$
	- [x] $R\textbf{-Mod}$, using the tensor product
	- [x] $R\textbf{-Mod}$, using the Cartesian product
	- [x] $\textbf{Field}$
	- [x] $\textbf{Diff}$, the category of smooth manifolds

### A categorical definition of a Lie group

- [x] Look up the definition of a **group object** in a Cartesian monoidal category
- [x] Show groups (as classically defined) are precisely group objects in the category of sets
- [x] What is a group object in the category of abelian groups? (*An abelian group*)
- [x] What is a group object in the category of groups? (*Again, an abelian group)*
- [x] What is a group object in the category of sets if we use the disjoint union for our monoidal product? (*The diagrams required for the unit, inversion, etc. don't make sense if the monoidal product isn't the usual (Cartesian) product*)
- [x] Show that Lie groups are precisely groups objects in the category of smooth manifolds

### Properties of the category of Lie groups

- [x] Investigate whether the category of Lie groups has (or does not have) each of the following categorical properties:
	- [x] Has a terminal object? (Yes, the trivial Lie group.)
	- [x] Has an initial object? (Yes, the trivial Lie group.)
	- [x] Has a null object? (Yes, the trivial Lie group.)
	- [x] Has finite products? (Yes.)
	- [x] Has all products? (No.)
	- [x] Has pullbacks? (Yes.)
	- [x] Has finite coproducts? (No.)
	- [x] Has all coproducts? (No.)
	- [x] Has pushouts? (No.)
	- [x] Has equalizers? (Yes.)
	- [x] Has kernels? (Yes.)
	- [x] Has quotients? (Yes.)
	- [x] Has an analogue of the First Isomorphism Theorem? (Yes.)
	- [x] Is an additive category? (No.)
	- [x] Is an abelian category? (No.)

### Properties of the category of Lie algebras

- [ ] Investigate whether the category of Lie algebras has (or does not have) each of the following categorical properties:
	- [ ] Has a terminal object?
	- [ ] Has an initial object?
	- [ ] Has a null object?
	- [ ] Has finite products?
	- [ ] Has all products?
	- [ ] Has pullbacks?
	- [ ] Has finite coproducts?
	- [ ] Has all coproducts?
	- [ ] Has pushfowards?
	- [ ] Has equalizers?
	- [ ] Has kernels?
	- [ ] Has quotients?
	- [ ] Has an analogue of the First Isomorphism Theorem?
	- [ ] Is an additive category?
	- [ ] Is an abelian category?

### Important functors

#### Universal enveloping algebras
*Coming soon!*

#### Free Lie algebras
*Coming soon!*

#### The Lie functor
*Coming soon!*


## The team
---
### Matt Richards
mricha49@calpoly.edu
![Richards, Matt.png](/img/user/90-99%20Meta/91%20Images/Headshots/Richards,%20Matt.png)
### Zoey Pieper
zpieper@calpoly.edu
![Pieper, Zoey.png](/img/user/90-99%20Meta/91%20Images/Headshots/Pieper,%20Zoey.png)


## References
---

- *Lie groups, Lie algebras, and representations*, by Brian C. Hall
- *Structure and geometry of Lie groups*, by Hilgert and Neeb