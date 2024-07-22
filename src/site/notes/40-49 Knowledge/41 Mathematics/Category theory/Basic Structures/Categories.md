---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/basic-structures/categories/","tags":["category_theory"],"updated":"2024-07-17T05:50:39-07:00"}
---

>[!quote] [Peter Freyd](https://mathoverflow.net/questions/111005/historical-questions-on-the-term-general-abstract-nonsense)
>Perhaps the purpose of categorical algebra is to show that which is trivial is trivially trivial.

Every definition of a *category* is a bit unwieldly. Here we take the definition as presented in [[Riehl - Category Theory in Context.pdf#page=21|Riehl]]:

>[!note] Definition of category
>A **category** consists of a collection of **objects** $X, Y, Z,\ldots$ and a collection of **morphisms** $f, g, h,\ldots$ such that:
>- Each morphism has specified **domain** and **codomain** objects; the notation $f:X\to Y$ signifies that $f$ is a morphism with domain $X$ and codomain $Y$;
>- Each object has a specified **identity morphism** $1_X:X\to X$;
>- For any pair of morphisms $f, g$ with the codomain of $f$ equal to the domain of $g$, there exists a specified **composite morphism** $gf$ whose domain is equal to the domain of $f$ and whose codomain is equal to the codomain of $g$.
>
This data is subject to the following two axioms:
>1. For any $f:X\to Y$, the composites $1_Y f$ and $f1_X$ are both equal to $f$; and
>2. For any composable triple of morphisms $f, g, h$, the composites $h(gf)$ and $(hg)f$ are equal and henceforth denoted $hgf$.

The morphisms in a category sometimes go by other names. Generically, they are sometimes referred to as **arrows** or **maps**. In specific cases, however, they might go by other names; e.g., in the category of vector spaces they are called linear transformations.
