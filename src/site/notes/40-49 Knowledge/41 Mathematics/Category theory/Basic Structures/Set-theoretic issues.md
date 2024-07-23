---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/set-theoretic-issues/","tags":["category_theory","quotes"],"updated":"2024-07-22T20:01:57-07:00"}
---

> [!quote] [[Riehl - Category Theory in Context.pdf#page=24|Emily Riehl]]
> The search for the most useful set-theoretical foundations for category theory is a fascinating topic that unfortunately would require too long of a digression to explore. Instead, we sweep these foundational issues under the rug, not because these issues are not serious or interesting, but because they distract from the task at hand.

When attempting to study all objects of a certain type, it is easy to run into set theoretic issues, along the lines of [Russell's paradox](https://en.wikipedia.org/wiki/Russell%27s_paradox). A common convention is to assume there is a big enough set $U$, called a *universe*, such that all sets one needs to discuss are members of the set $U$. A set $X$ is then called **small** it is a member of the universe. A set that is not in the universe is called **large**. (Some sources instead use the language of *sets* and *classes*.)

>[!note] Definition of small category
>A category is **small** if its collection of arrows is a small set.

Since each object is uniquely associated with an identity arrow, in a small category the collection of objects is also a small set. Unfortunately, many of the [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Examples of categories#Large categories\|common categories]] we encounter are not small, i.e., are **large**. 

>[!note] Definition of locally small
>A category is **locally small** if for any pair of objects the collection of arrows between those objects is a small set.