---
{"dg-publish":true,"permalink":"/20-29-research/24-summer-re-us/2026/summer-reu-2026-categorical-representation-theory/","tags":["category_theory","representation_theory"],"updated":"2026-07-20T09:41:50-07:00","dg-note-properties":{"last updated":"2026-07-20T09:41:50-07:00","Status":["In-progress"],"tags":["category_theory","representation_theory"]}}
---

> [!quote] The tagline
> How does character theory fit into the categorical perspective of representation theory?

## Project summary
---

Last summer we saw how most of the basic structures of representation theory can be re-contextualized in the setting of category theory. However, one of the biggest tools of classical representation theory is character theory and we haven't yet seen a categorical interpretation for characters. As such, our immediate aims are to:
1. Find a categorical interpretation of characters.
2. Find a categorical interpretation/method of performing "calculations" in representation theory; e.g., computing character tables, inner products, etc.
3. Look for purely categorical proofs of classical results involving characters.

## Meeting notes
---

| Meeting Date                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------- |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 2 - Mark/REU Meeting - 2026-07-16\|REU Meeting - 2026-07-16]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 2 - Mark/REU Meeting - 2026-07-13\|REU Meeting - 2026-07-13]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 2 - Mark/REU Meeting - 2026-07-09\|REU Meeting - 2026-07-09]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 2 - Mark/REU Meeting - 2026-07-02\|REU Meeting - 2026-07-02]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 2 - Mark/REU Meeting - 2026-06-29\|REU Meeting - 2026-06-29]] |
| [[50-59 Logs/52 Research meetings/2026 - Summer/REU 2 - Mark/REU Meeting - 2026-06-25\|REU Meeting - 2026-06-25]] |

{ .block-language-dataview}

## Task list

*Tasks will be added after each meeting.*
### Classical character theory

- [x]  Read Section 18.3 in Dummit & Foote and check out the following exercises:
	- [x] Exercise 1
	- [x] Exercise 2
	- [x] Exercise 5
	- [x] Exercise 6
	- [x] Exercise 7
	- [x] Exercise 8
	- [x] Exercise 11
	- [?] Exercise 12
	- [?] Exercise 13
- [x] Read Section 18.2 in Dummit & Foote and check out the following exercises:
	- [x] Exercise 1
	- [x] Exercise 5
	- [x] Exercise 8
	- [x] Exercise 11

### Categorical trace

- [x] Learn about **dualizable** objects in monoidal categories. (One reference is [here](https://ncatlab.org/nlab/show/dualizable+object))
- [x] Learn about the notion of a **categorical trace**. (A short reference is at [Wikipedia](https://en.wikipedia.org/wiki/Categorical_trace). A longer reference is this [paper](https://arxiv.org/pdf/1107.6032) by Ponto and Shulman.)
- [x] Verify the following claims:
	- [x] In the category of representations $\textbf{Rep}(G)$, the monoidal unit ${\bf 1}$ is the trivial representation $k$.
	- [x] The endomorphisms of the trivial representation are just scalars: $\operatorname{End}(k) \cong k$.
	- [x] Taking the categorical trace of an endomorphism of a representation yields a scalar, which precisely recovers the value of the character.

### Categorical characters

- [x] Skim through [this nLab page](https://ncatlab.org/nlab/show/action+of+a+monoidal+category) about actions on monoidal categories.
- [x] Try to make sense of this claim from Gemini:![Screenshot 2026-07-02 at 11.36.20 AM.png](/img/user/90-99%20Meta/95%20Attachments/Screenshot%202026-07-02%20at%2011.36.20%20AM.png)
- [x] Check out this [paper by Kapranov and Ganter](https://www.sciencedirect.com/science/article/pii/S0001870807003027)
- [x] Unwind the definition of *categorical characteristic*

### Tannaka duality

- [ ] Learn about Tannaka duality by skimming through [this nLab page](https://ncatlab.org/nlab/show/Tannaka+duality)
- [ ] Explain how Tannaka duality can be viewed as a consequence of the enriched Yoneda lemma (in enriched category theory)


## The team
---
### Mark Muzquiz
mamuzqui@calpoly.edu
![Muzquiz, Mark.jpeg\|100](/img/user/90-99%20Meta/91%20Images/Headshots/Muzquiz,%20Mark.jpeg)


## References
---

Dummit & Foote, *Abstract Algebra* (Chapters 18 and 19)
Mac Lane, *Categories for the Working Mathematician*