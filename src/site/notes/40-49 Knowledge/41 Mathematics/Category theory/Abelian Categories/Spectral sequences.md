---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/abelian-categories/spectral-sequences/","tags":["category_theory/abelian_categories"],"updated":"2025-01-23T06:48:58-08:00"}
---

> [!warning] Caution
> This is very much a work in progress. It will likely need to go through many iterations, be broken into separate parts, etc. Read at your own risk!
# Some background

> [!quote] McCleary, "A History of Spectral Sequences"
> ... after Leray's lecture on this work, Whitney rose to say that, after this talk, he no longer understood algebraic topology, and, if homology was going to be like this, he would have to study other parts of mathematics.

> [!quote] Leray (personal letter dated August 11, 1997)
> Ces notions furent mal accueillies en Amérique au moment de leur publication. C'était trop di cile. Les Mathematical Reviews demandèrent 'À quoi ça peut servir?'
> 
> *These notions were poorly received in America when they were published. They were too difficult. The Mathematical Reviews asked, 'What good is this?'*

## Origin of the term "spectral sequence"

> [!quote] Timothy Y. Chow, "You Could Have Invented Spectral Sequences"
> A question that often comes up is where the term “spectral” comes from. The adjective is due to Leray, but he apparently never published an explanation of why he chose the word. John McCleary (personal communication) and others have speculated that since Leray was an analyst, he may have viewed the data in each term of a spectral sequence as playing a role that the eigenvalues, revealed one at a time, have for an operator.

> [!quote] McCleary, "A History of Spectral Sequences"
> ... the consequences were announced in a series of three *Comptes Rendus* notes. In the first note the term *spectral sequence*  (*suite spectrale*) makes its appearance. It applies to the homology spectral sequence for which the terms *spectral ring* or *spectral algebra* of Leray and Koszul did not apply.

> [!quote] Vakil, "The Rising Sea"
> They have a reputation for being abstruse and difficult. It has been suggested that the name ‘spectral’ was given because, like spectres, spectral sequences are terrifying, evil, and danger ous. I have heard no one disagree with this interpretation, which is perhaps not surprising since I just made it up.

---
# The basic goal

A common scenario behind many (but not all!) applications of spectral sequences is to compute $H^{\bullet}$, where $H^*$ is some type of graded object (e.g., graded $R$-module, $k$-vector space, $k$-algebra, etc.). Common scenarios are:
- (co)homology of some space
- (graded) algebraic invariant of some group/ring/module
- (hyper)cohomology of a double complex

For simplicity, let's assume $H^{\bullet}$ is a "locally finite" graded vector space with finite grading, say $H^{\bullet}= \bigoplus_{r=0}^n H^r$ with each $H^r$ a finite-dimensional $k$-vector space.

Suppose now $H^{\bullet}$ has a **filtration**:

$$\{0\}\subseteq F^0(H^{\bullet})\subseteq F^1(H^{\bullet})\subseteq \cdots \subseteq F^m(H^{\bullet})=H^{\bullet}.$$

For example, the grading itself can give a filtration, where

$$F^p(H^{\bullet})=\bigoplus_{r=0}^p H^r.$$

In any case, from a filtration $F^{\bullet}$ of $H^{\bullet}$ we can always construct an associated graded object (here, a graded $k$-vector space) by direct summing the successive quotients. In other words, define a graded object $Gr^{\bullet}(F^{\bullet})$ by

$$Gr^p (F^{\bullet})= F^{p+1}(H^{\bullet})/F^p(H^{\bullet}).$$

Now, it's sometimes the case that we can recover $H^{\bullet}$ in this way, i.e., that $H^{\bullet}\simeq \bigoplus_{p=0}^m Gr^p(F^{\bullet})$. This is not always the case, however, and a *spectral sequence* can be viewed as the "best" way to address this.

Before moving onto the definition of a spectral sequence, note a filtration $F^{\bullet}$ on the graded object $H^{\bullet}$ actually results in an associated **bigraded** object, where

$$Gr^{p,q} = F^{p+1}(H^{p+q})/F^p(H^{p+q}).$$

Although it might seem odd that we've chosen to write the bigrading this one, it's for historical reasons. The degree $p$ is called the **filtration degree**, while the degree $q$ is called the **complementary degree**.

> [!note] First definition of spectral sequence
> A **(first quadrant, cohomological) spectral sequence** is a sequence of differential bigraded objects (say, vector spaces) $E_r^{p,q}$ with differentials $d_r:E_r^{p,q}\to E_r^{p+r, q-r+1}$ satisfying $d_r\circ d_r = 0$, together with isomorphisms $E_{r+1}^{p,q}\simeq H(E_r^{p,q},d_r)$, for every $r\geq 0$.

We sometimes call $E_r^{\bullet,\bullet}$ the **$r^{\text{th}}$-page** of the spectral sequence. Also, the above type of spectral sequence is sometimes called a spectral sequence with **upward orientation**, since the arrows in $E_0^{\bullet,\bullet}$ point upward. There is an analogous definition of a spectral sequence with **rightward orientation**, which we'll see in examples below.

![spectral_sequence.png|500](/img/user/90-99%20Meta/95%20Attachments/spectral_sequence.png)

Notice that for any fixed coordinate $(p,q)$, for $r$ large enough the differentials into and out of $E_r^{p,q}$ become trivial. (In fact, we just need $r>\max\{p,q+1\}$). Once this happens, we say the spectral sequence has **stabilized** in that coordinate and denote that final object (vector space) by $E_{\infty}^{p,q}$.

> [!note] Definition of convergence for a spectral sequence
> A spectral sequence $\{(E_r^{\bullet,\bullet},d_r)\}_{r\geq 0}$ is said to **converge** to a graded object (vector space) $H^{\bullet}$ if there is a filtration $F^{\bullet}$ for $H^{\bullet}$ together with isomorphisms
> 
> $$E_{\infty}^{p,q}\simeq Gr^{p,q}(F^{\bullet}).$$


---
# The basic idea for a double complex

Suppose we start with a double complex $C^{\bullet,\bullet}$ that has "horizontal" and "vertical" differentials:

![double_complex.png|300](/img/user/90-99%20Meta/95%20Attachments/double_complex.png)

Let's assume for simplicity that the sequares anti-commute, i.e., that $d_{\text{ver}}d_{\text{hor}}+d_{\text{hor}}d_{\text{vert}}=0$. (If they commute, we can always replace $d^{p,q}_{\text{vert}}$ with $(-1)^pd^{p,q}_{\text{vert}}$, say). The **total complex** associated to this double complex is the complex $C^{\bullet}$, where

$$C^r = \bigoplus_{p+q=r} C^{p,q},$$

and where we use the differential $d=d_{\text{vert}}+d_{\text{hor}}$. (Check that we do indeed have $d\circ d = 0$.)

Now consider the cohomology $H^{\bullet}$ of this total complex $C^{\bullet}$. (This is sometimes called the **total cohomology** or **hypercohomology** of the double complex.)

There are two obvious filtrations we can put on $C^{\bullet}$, and these lead to two different spectral sequences which both converge to $H^{\bullet}$. Both spectral sequences begin with $E_0^{p,q}=C^{p,q}$. However, one spectral sequences uses $d_{\text{hor}}$ for its $d_0$ differentials; the other uses $d_{\text{vert}}$ for its $d_0$ differentials.

## Example: The Snake Lemma

Suppose we begin with the commutative diagram below, in which the rows are exact:

![snake1.png|300](/img/user/90-99%20Meta/95%20Attachments/snake1.png)

Extend this to first-quadrant double complex by putting 0s in every other position and trivial maps where needed.

Using the horizontal arrows produces a spectral sequence with rightward orientation. The pages $E_0^{\bullet,\bullet}$ and $E_1^{\bullet,\bullet}$ are show below. (The assumption on exactness in the rows of the original diagram implies that the cohomology at every position in this diagram vanishes. So, the page $E_1^{\bullet,\bullet}$ would be completely trivial.)

![snake2.png|300](/img/user/90-99%20Meta/95%20Attachments/snake2.png)

We can say that the spectral sequence **collapsed** at $r=1$, and we can deduce that $E_{\infty}^{p,q}=0$ for every $p,q\geq 0$. Assuming the theorem which tells us this spectral sequence converges to $H^{\bullet}$, this forces $H^{\bullet}=0$.

On the other hand, using the vertical arrows in the original double complex produces a spectral sequence with upward orientation. The first three pages of the spectral sequence now look as follows:

![snake3.png|500](/img/user/90-99%20Meta/95%20Attachments/snake3.png)

The terms highlighted in pink have stabilized at this point, as they do not (nor ever will) have nontrivial differentials mapping to/from them. The terms in blue will stabilize on the next page.

Now, this spectral sequence also converges to $H^{\bullet}$, which we earlier concluded was completely trivial. This implies that our second spectral sequence must also have $E_{\infty}^{p,q}=0$ for all $p,q\geq 0$. In particular, the entries marked in pink above must all vanish, and the entries marked in blue must be isomorphic (via $d_2$). Together, these imply that we an exact sequence

![snake4.png|400](/img/user/90-99%20Meta/95%20Attachments/snake4.png)

where the connecting morphism is $i\circ d_2\circ \pi$ (where $i$ is the appropriate inclusion of a kernel and $\pi$ is the appropriate projection onto a cokernel). This is exactly the conclusion of the Snake Lemma.


## Example: The (Weak) Five Lemma

Suppose we begin with the commutative diagram below, where the rows are exact and the outside four vertical arrows are isomorphism. (This second condition can be weakened.)

Let's repeat the same strategy from the previous example. Beginning with the rightward orientation leads to a spectral sequence with the following first three pages:

![five1.png|400](/img/user/90-99%20Meta/95%20Attachments/five1.png)

Notice that this spectral sequence has collapsed at $r=2$, and that we can now conclude $H^2=0$ and $H^3=0$, where $H^{\bullet}$ is the cohomology of the double complex.

If we now instead consider the upward orientation, we find a spectral sequence that converges at $r=2$:

![five2.png|400](/img/user/90-99%20Meta/95%20Attachments/five2.png)

Since we earlier concluded $H^2=0$, the above spectral sequence tells us we must have $\ker(\gamma)=0$; since we also concluded $H^3=0$, the above spectral sequence also tells us we must have $\operatorname{coker}(\gamma)=0$. Together these imply $\gamma$ must be an isomorphism.

## Example: The Grothendieck spectral sequence

This isn't really an example so much as hint at another scenario in which spectral sequences appear.

Suppose $F:\mathcal{A}\to\mathcal{B}$ and $G:\mathcal{B}\to \mathcal{C}$ are two additive  and left exact functors between abelian categories. (For technical reasons, also assume both $\mathcal{A}$ and $\mathcal{B}$ have enough injectives, and that $F$ take injective objects in $\mathcal{A}$ to $G$-acyclic objects in $\mathcal{B}$.)

It makes sense to ask how the right derived functor of the composition $G\circ F$ relates to the composition of the right derived functors $RG$ and $RF$. Here's the theorem:

> [!summary] Grothendieck's spectral sequence
> For each object $A\in \mathcal{A}$ there is a spectral sequence $E_r^{\bullet,\bullet}$ with
> 
> $$E_2^{p,q}=({\rm R}^pG\circ {\rm R}^q F)(A)$$
> 
> that converges to ${\rm R}^{p+q}(G\circ F)(A)$.


---

# References

[[Chow - You Could have Invented Spectral Sequences.pdf]]
[[McCleary - A History of Spectral Sequences.pdf]]
[[Bott-Tu - Differential Forms in Algebraic Topology.pdf]]
[[Kato - Heart of Cohomology.pdf]]
[[McCleary - A Users Guide to Spectral Sequences.pdf]]
[[Vakil - Puzzlin Through Exact Sequences.pdf]]
[[Vakil - The Rising Sea.pdf]]

---
## Suggested next note

