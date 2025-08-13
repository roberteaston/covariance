---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2025-summer/reu-2-lena-and-liya/reu-meeting-2025-08-11/","updated":"2025-08-13T09:18:45-07:00"}
---

This following is a brief summary of our research meeting on 2025-08-11.

## Meeting summary
---

We spent the entire meeting talking about Yoneda's Lemma, recalling how to each object $c$ in a category $C$ we can associate a functor $H_c = \operatorname{Hom}_C(-,c)$, which encodes the information about all arrows to $c$ in the category. This association is the first step in creating a full-on functor $H:C\to {\bf Set}^C$, which on objects sends each object $c\in C$ to the functor $H_c:C\to {\bf Set}$ described above. [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma#Yoneda's Lemma\|Yoneda's Lemma]] tells us that this functor is a "fully faithful embedding" of the category $C$ into the (much larger) category ${\bf Set}^C$. This is the original motivation of the motto "It's all about the arrows!"

We then talked a little a bit about the [[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples\|inspiring examples]] which might lead one to naturally discover Yoneda's Lemma. To get more hands-on practice, though, we will now see how Yoneda's Lemma naturally leads on to the definition of [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Special morphisms#Monomorphisms\|monomorphism]].

## Tasks for next meeting
---

- Suppose $F,G:C\to {\bf Set}$ are two functors from a given category $C$ to the category of sets, and suppose $\tau:F\Rightarrow G$ is a natural transformation. Propose a "natural" (pun intended) definition for $\tau$ to be called a **natural injection**.
- Suppose $a,b\in C$ are two objects in a given category $C$, and $f:a\to b$ is an arrow in $C$. The functor $H$ should provide a natural transformation $H_f:H_a\Rightarrow H_b$. Describe this natural transformation, i.e., for every object $c\in C$, describe the set map $H_a(c)\to H_b(c)$. (Hint: Write down what those sets are.)
- Using your proposed definition for *natural injection*, show that $f:a\to b$ is a monomorphism in $C$ if and only if the corresponding natural transformation $H_f:H_a\Rightarrow H_b$ is a natural injection.

## References
---

[[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties I - Inspiring Examples\|Universal Properties I - Inspiring Examples]]
[[40-49 Knowledge/41 Mathematics/Category theory/Universal properties/Universal Properties III - Yoneda's Lemma\|Universal Properties III - Yoneda's Lemma]]
[[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Special morphisms\|Special morphisms]]