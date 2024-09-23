---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/categories/","tags":["category_theory","quotes"],"updated":"2024-09-22T20:51:03-07:00"}
---

# Motivation

>[!quote] Serge Lang
>In the forties and fifties (mostly in the works of Cartan, Eilenberg, MacLane, and Steenrod), it was realized that there was a systematic way of developing certain relations of linear algebra, depending only on fairly general constructions which were mostly arrow-theoretic, and were affectionately called abstract nonsense by Steenrod.
>
>*My source:* [[Riehl - Category Theory in Context.pdf#page=10|Riehl]]

> [!quote] [Peter Freyd](https://mathoverflow.net/questions/111005/historical-questions-on-the-term-general-abstract-nonsense)
> Perhaps the purpose of categorical algebra is to show that which is trivial is trivially trivial.

It is likely you were unwittingly exposed to mathematical *categories* long before you first heard the words "category theory." Real vector spaces and their linear transformations? That's a category. Groups and their group homomorphisms? A category. Rings, fields, or topological spaces (and the "appropriate" maps between them)? All categories.

At the most intuitive level, a mathematical *category* simply consists of "stuff" (usually mathematical objects with prescribed algebraic structures) and the "maps" between them (usually, but not always, set maps that respect those algebraic structures). Category theory, then, can be thought of as a mathematical language that is broadly applicable across algebra, topology, set theory, logic, and beyond. This is part of what gives category theory its power, namely its ability to universally describe constructions and ideas across different mathematical disciplines. It brings under a single umbrella the study of sets (with their set maps), vector spaces (with their linear transformations), groups (with their homomorphisms), and topological spaces (with their continuous maps), just to name a few.

 Category theory studies *objects* (e.g., groups) and the *arrows* between them (e.g., homomorphisms). Every general result of category theory is a result that can be interpreted and used in your favorite category. There are maps between categories, called [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Functors\|functors]], which allow us to connect categories to each other; and there are maps between functors, called [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Natural transformations\|natural transformations]], which can provide deep insights into fundamental mathematical constructions (e.g., free groups) and operations (e.g., tensor products).

There is a second, less obvious benefit to studying category theory that I personally feel is even more profound. Thinking categorically can push us to embrace new, abstract ideas that we might initially find unintuitive, but which eventually provide incredible new insights. These insights and lessons are sprinkled throughout these notes. Keep your eyes peeled for them!

# Formal definitions

Any formal definition of *category* is admittedly a bit clunky, so remember the general idea: you have *objects*, and you have *arrows* between those objects.

> [!note] Definition of category
> A **category** consists of the following data:
> - A collection^[Here we use the word "collection" (as opposed to "set") to allow for set theory technicalities, such as a "class" of objects. For our purposes you can assume the objects of our categories form a set.] of **objects**
> - A collection of **arrows**
> - For each arrow, specified **domain** and **codomain** objects. The notation $f:a\to b$ signifies that $f$ is an arrow with domain $a$ and codomain $b$
> - For each object, a specified **identity arrow**. The notation $1_a$ denotes the identity arrow $1_a:a\to a$ for the object $a$
> - Any pair of arrows $f, g$ with the codomain of $f$ equal to the domain of $g$ is called a **composable pair**. For each composable pair of arrows, there is a specified **composite arrow** with domain the domain of $f$ and codomain the domain of $g$. We denote this composite arrow $g\circ f$ (or simply $gf$, if there is no cause for confusion)
>   
>   These data are subject to the following two axioms:
>   1. **(Identity)** For any arrow $f:a\to b$, the composites $1_b\circ f$ and $f\circ 1_a$ are both equal to $f$.
>   2. **(Associativity)** For any composable triple of arrows $f,g,h$, the composites $h\circ (g\circ f)$ and $(h\circ g)\circ f$ are equal.

# Visualization

When we want to visualize categories it's useful to think of the objects as dots and the arrows as ... arrows. For example, we might visualize two objects $a$ and $b$ with the arrows between them as follows:

(COMING SOON)

# Conventions

The language and notation of category theory is not completely standardized, but here are some common conventions.

Abstract categories are sometimes denoted with a single capital script letter, such as $\mathscr{C}$. In this case, the set of objects of the category is often denoted $\operatorname{Ob}(\mathscr{C})$. However, it is also common to simply use $\mathscr{C}$ to refer also to the set of objects, writing $a\in \mathscr{C}$ for an object $a$ in the category $\mathscr{C}$.

If there is no cause for confusion, it's reasonable (and common) to drop all pretension with script lettering and simply use capital letters to denote categories; e.g., the category $C$.

It is common to use the word **morphism** in place of "arrow." I will personally use "morphism" when working with known algebraic objects (such as groups or modules), as it harkens back to the word "homomorphism" that was (and regrettably still is) used in those contexts. However, for an abstract category I will stick to "arrow."

Given two objects $a$ and $b$ in a category $C$, the collection of arrows between them is usually denoted with some variation of $\operatorname{Hom}(a,b)$ or $\operatorname{Mor}(a,b)$. This derives from the alternative names of "homomorphisms" or "morphisms", noted above. The word "hom-sets" refers to such collections of arrows^[At least in the case these collections are sets. See below.]. If there are multiple categories under consideration, we might more carefully denote hom-sets as $\operatorname{Hom}_C(a,b)$ or $\operatorname{Mor}_C(a,b)$. (I have seen some texts add an axiom to the definition requiring all hom-sets to be disjoint, but this doesn't seem to be universal and I don't understand the reason for making the assumption.)

Most ([[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Examples of categories#^ef81b1\|but not all]]) categories are named after their objects. For example, the category with objects all groups and with arrows all group morphisms is called "the category of groups" and is usually denoted with some variation of $\mathbf{Group}$ or $\mathbf{Grp}$. More examples can be found [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Examples of categories#^9c9672\|here]].

# Set-theoretic issues

> [!warning] Optional warning
> At the most fundamental and rigorous level, there are some technical logical issues that need to be addressed. This section briefly addresses those concerns, but this is nothing something we will worry about elsewhere.

When attempting to study all objects of a certain type, it is easy to run into set-theoretic issues along the lines of [Russell's paradox](https://en.wikipedia.org/wiki/Russell%27s_paradox). A common convention is to assume there is a big enough set $U$, called a *universe*, such that all sets one needs to discuss are members of the set $U$. A set $X$ is then called **small** it is a member of the universe. A set that is not in the universe is called **large**. (Some sources instead use the language of *sets* and *classes*.)

>[!note] Definition of small category
>A category is **small** if its collection of arrows is a small set.

Since each object is uniquely associated with an identity arrow, in a small category the collection of objects is also a small set. Unfortunately, many of the [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Examples of categories#Large categories\|common categories]] we encounter are not small, i.e., are **large**. 

>[!note] Definition of locally small
>A category is **locally small** if for any pair of objects the collection of arrows between those objects is a small set.

Will we worry about any of this? We will not. Instead, we will embrace the following quote:

> [!quote] [[Riehl - Category Theory in Context.pdf#page=24|Emily Riehl]]
> The search for the most useful set-theoretical foundations for category theory is a fascinating topic that unfortunately would require too long of a digression to explore. Instead, we sweep these foundational issues under the rug, not because these issues are not serious or interesting, but because they distract from the task at hand.


## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Examples of categories\|Examples of categories]]
[[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Functors\|Functors]]