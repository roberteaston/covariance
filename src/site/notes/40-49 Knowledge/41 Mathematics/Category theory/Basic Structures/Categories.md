---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/categories/","tags":["category_theory","quotes"],"updated":"2024-09-21T15:56:36-07:00"}
---

# Motivation

> [!quote] [Peter Freyd](https://mathoverflow.net/questions/111005/historical-questions-on-the-term-general-abstract-nonsense)
> Perhaps the purpose of categorical algebra is to show that which is trivial is trivially trivial.

> [!quote] [Olaf](https://en.wikipedia.org/wiki/Olaf_(Frozen))
> This will all make sense when I am older.

It is likely that you unwittingly had extensive exposure to mathematical *categories* long before you first heard the words "category theory." Vector spaces (over a fixed field) and their linear transformations? A category. Groups and their group homomorphisms? A category. Rings, fields, or topological spaces (and the "appropriate" maps between them)? All categories.

At the most intuitive level, a mathematical *category* simply consists of "stuff" (usually mathematical objects with prescribed algebraic structures) and the "maps" between them (usually, but not always, set maps that respect those algebraic structures). Category theory, then, can be thought of as a mathematical language that is broadly applicable across algebra, topology, set theory, logic, and beyond. This is part of what gives category theory its power, namely its ability to universally describe constructions and ideas across different mathematical disciplines. It brings under a single umbrella the study of sets (with their set maps), vector spaces (with their linear transformations), groups (with their homomorphisms), and topological spaces (with their continuous maps), just to name a few.

 Category theory allows us to generically talk about *objects* (e.g., groups) and *arrows* (or *morphisms*; e.g., homomorphisms). Every result of category theory is then a result that can be interpreted and used in our favorite category. Maps between categories ([[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Functors\|Functors]]) allow us to connect categories to each other, and maps between functors ([[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Natural transformations\|Natural transformations]]) provide deep insights into fundamental mathematical constructions (e.g., free groups) and operations (e.g., tensor products).

There is a second, less obvious benefit to studying category theory that I personally feel is even more profound. Thinking categorically can push us to embrace new, abstract ideas that we might initially find unintuitive, but which eventually provide incredible new insights. These insights and lessons are sprinkled throughout these notes. Keep your eyes peeled for them.

# Formal definitions

A formal definition of *category* is admittedly a bit clunky, so remember the general idea: you have *objects* and *arrows* between those objects.

> [!note] Definition of category
> A **category** consists of the following data:
> - A collection^[Here we use the word "collection" (as opposed to "set") to allow for set theory technicalities, such as a "class" of objects. For our purposes you can assume the objects of our categories form a set.] of **objects**
> - A collection of **arrows**
> - Each arrow has specified **domain** and **codomain** objects. The notation $f:a\to b$ signifies that $f$ is an arrow with domain $a$ and codomain $b$
> - Each object has a specified **identity arrow**. The notation $1_a$ denotes the identity arrow $1_a:a\to a$ for the object $a$
> - For any pair of arrows $f, g$ with the codomain of $f$ equal to the domain of $g$, there exists a specified **composite arrow** whose domain is the domain of $f$ and codomain is the domain of $g$. We denote this composite arrow $g\circ f$ (or simply $gf$, if there is no cause for confusion)
>   
>   These data are subject to the following two axioms:
>   1. **(Identity)** For any arrow $f:a\to b$, the composites $1_b\circ f$ and $f\circ 1_a$ are both equal to $f$.
>   2. **(Associativity)** For any composable triple of arrows $f,g,h$, the composites $h\circ (g\circ f)$ and $(h\circ g)\circ f$ are equal.


There are many different (but ultimately equivalent) ways to formulate the above definition.

# Conventions

The language and notation of category theory is not completely standardized, but here are some common conventions:
- Abstract categories are frequently denoted with a single capital script letter, such as $\mathcal{C}$. In this case, the set of objects is often denoted $\operatorname{Ob}(\mathcal{C})$. However, it is also common to simply use $\mathcal{C}$ to also refer to the set of objects, writing $c\in \mathcal{C}$ for an object $c$ in the category $\mathcal{C}$.
- If there is no cause for confusion, it's reasonable (and common) to drop all pretension to fanciness with script lettering and simply denote categories by capital letters; e.g., $C$.
- It is common to use the word **morphism** in place of the word "arrow." I will personally use the word "morphism" when working in a known algebraic objects (such as groups or modules), as it harkens back to the word "homomorphism" that was (and regrettably, still is) used in those contexts. However, for an abstract category I will stick to the word "arrow."
- Given two objects $a$ and $b$ in a category $C$, the collection of arrows between them is usually denoted with some variation of $\operatorname{Hom}(a,b)$ or $\operatorname{Mor}(a,b)$. This derives from the alternative names of "homomorphisms" or "morphisms", noted above. The word "hom-sets" refers to such collections of arrows.
- As [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Examples of categories\|we will see]], most (but not all^[[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Examples of categories#^ef81b1\|Examples of categories#^ef81b1]]) categories are named after their objects. So, the category with objects all groups and with arrows all group morphisms is called "the category of groups." It is usually denoted with some variation of $\mathbf{Group}$ or $\mathbf{Grp}$.