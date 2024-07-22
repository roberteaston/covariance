---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2024-summer/reu-meeting-2024-07-19/","updated":"2024-07-22T08:39:35-07:00"}
---

This following is a brief summary of our research meeting on 2024-07-19.

## Summary of discoveries

### Tropical polynomials and functions on tropical space

- We talked about how tropical polynomials induce functions on tropical space (by usual evaluation). For example, the tropical polynomial $f(x)=x^{\odot 2}\oplus x\oplus 1$ induces a ${\bf T}$-valued function on the tropical line, which in real operations is $f(x)=\max\{2x,x,1\}$.
- Unlike polynomials in ${\bf R}[x]$, however, tropical polynomials are not uniquely identified by the functions they induce. To put it another way, two different tropical polynomials can define the exact same function on tropical space.
- For a given tropical polynomial, there is an entire collection (really an equivalence class!) of tropical polynomials that induce the same function on tropical space.

### Graphs of tropical functions

- We took a look at some examples of sketching the graphs of tropical polynomials in one variable $x$.
- We saw that the graph is always made of a union of line segments (and rays) with slopes that can only increase as we move in the positive $x$ direction.
- We saw how the key features of the graph are: 1) where it "bends"; and 2) the slope of each piece.
- We recalled how the tropicalizations of complex curves led shapes that were exactly bend loci of tropical polynomials.
- We outlined a strategy for sketching bend loci (aka double-max loci) for a tropical polynomial in two variables $x$ and $y$.

### Tropical tangency

- We used [Desmos](https://www.desmos.com/calculator/ywustbaxrr) to interactively investigate the idea of tropical tangency a bit.
- We noted that the locus of points dual to tropical tangent lines might be something a bit different from a bend locus ...


# Tasks for next meeting

We will now investigate a new type of tropical subset, namely **congruence varieties**. These are subsets in tropical space where two tropical polynomials agree.

- [ ] First create a few examples in one variable, finding all points in the tropical line where two different tropical polynomials agree; i.e., satisfy an equality $f(x)=g(x)$ for some tropical polynomials $f(x)$ and $g(x)$. Try to find examples where:
	- [ ] The congruence variety consists only of discrete points
	- [ ] The congruence variety contains at least one line segment or ray

- [ ] Now try the same thing in two variables, finding all points in the tropical plane where two different tropical polynomials agree; i.e., satisfy an equality $f(x,y)=g(x,y)$ for some tropical polynomials $f(x,y)$ and $g(x,y)$. To examples where:
	- [ ] The polynomials are both of low degree, say less than 2.
	- [ ] The polynomials are both of degree 2.

>[!question] Challenge Question
>Every bend locus is the union of a bunch of congruence varieties. Can you show this? (Try a few examples!)

