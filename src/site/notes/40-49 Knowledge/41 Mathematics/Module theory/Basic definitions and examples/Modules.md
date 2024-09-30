---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/basic-definitions-and-examples/modules/","tags":["module_theory","quotes"],"updated":"2024-09-30T12:27:46-07:00"}
---

> [!quote] Everyone
> A module is just a vector space over a ring.
{ #94791c}


# Definition

The quote above pretty much says it all. Have you ever wondered what would happen if you had a vector space $V$, but instead of the scalars coming from a field they came more generally from a ring^[We will always assume our rings contain unity.]? If so, you just stumbled upon the definition of a *module*.

> [!note] Definition of module
> Let $R$ be a ring. A *left $R$-module* (or *left module over $R$*) is an abelian group $M$ together with a left action of $R$ on $M$ that satisfies the following compatibility conditions:
> - $(r+s)m=rm+sm$ for all $r,s\in R$ and $m\in M$
> - $(rs)m=r(sm)$ for all $r,s\in R$ and $m\in M$
> - $r(m+n)=rm+rn$ for all $r\in R$ and $m,n\in M$
> - $1 m = m$ for all $m\in M$
>
> Analogously, a *right $R$-module* (or *right module over $R$*) is an abelian group $M$ together with a right action of $R$ on $M$ that satisfies the following compatibility conditions:
> - $m(r+s)=mr+ms$ for all $r,s\in R$ and $m\in M$
> - $m(rs)=(mr)s$ for all $r,s\in R$ and $m\in M$
> - $(m+n)r=mr+nr$ for all $r\in R$ and $m,n\in M$
> - $m1 = m$ for all $m\in M$
{ #ac6884}


You could reasonably complain about the the use of the word "action" in the above definition, since it hasn't been defined here and you possibly only encountered it previously in the context of a group acting on a set. However, it is being used here very much in the same spirit as in group theory, in that it is a set map $R\times M\to M$ that satisfies the expected compatibility conditions between the algebraic structures on $R$ and $M$ (detailed explicitly above). With a bit more category theory under our belts, we could reasonably consider defining the general notion of an *action* of an object of one category on an object of another. Something to keep in the back of our minds...

## Modules over commutative rings

Consider the case of a commutative ring $R$ and suppose $M$ is a left $R$-module. For clarity, denote the left action of a ring element $r$ on a module element $m$ by $r\cdot m$. Now define a right action of $R$ on $M$ by setting $m\star r = r\cdot m$. You can quickly check that this does indeed define a right $R$-action on $M$, giving (the underlying abelian group of $M$) the structure of a right $R$-module. The only property that requires the commutativity of $R$ is the "associativity" of the action. Indeed, on the one hand we have

$$m\star (rs) = (rs)\cdot m,$$

while on the other hand we have

$$(m\star r)\star s = (r\cdot m)\star s = s\cdot (r\cdot m) = (sr)\cdot m.$$

Thus, we need the original left $R$-action on $M$ to satisfy $(rs)\cdot m = (sr)\cdot m$ for every $r,s\in R$ and $m\in M$. Fortunately this is true when $R$ is assumed to be commutative.^[It's also theoretically possible this could hold for a noncommutative ring, but I have yet to see an example of this.]

> [!note] Modules over commutative rings
> When $R$ is a commutative ring, there is no real distinction between left and right $R$-modules. So, we simply refer to both as $R$-modules.

For a general (possibly noncommutative) ring, the phrase "$R$-module" is usually meant to mean "left $R$-module."

## A small note about the action of zero

It will be occasionally useful to have the following simple result:

>[!summary] Zero acts as zero
>If $M$ is an $R$-module, then $0_R\cdot m = 0_M$ for every $m\in M$ and $r\cdot 0_M = 0_M$ for every $r\in R$.
{ #06c4a9}

Here's a quick proof, directly analogous to the similar statement for vector spaces (a special case of modules!). For any $m\in M$ we have $0_R \cdot m = (0_R+0_R)m = 0_R\cdot m+0_R\cdot m$. By additive cancellation (in the abelian group $M$) we then have $0_M = 0_R\cdot m$. Similarly, $r\cdot 0_M = r(0_M+0_M) = r\cdot 0_M + r\cdot 0_M$, and additive cancellation once again gives $0_M = r\cdot 0_M$.

# Examples

Given the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^94791c\|common quote]] about [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^ac6884\|modules]], our first example of a module really must be:
## Vector Spaces

If $R=F$ is a field then $F$-modules are exactly the same as $F$-vector spaces. What do we really mean when we say "are exactly the same as"? In this case we mean "literally the same, up to naming conventions". An $F$-vector space is [usually defined](https://en.wikipedia.org/wiki/Vector_space) to be a set $V$ together with a binary operation $V\times V\to V$ and a map $F\times V\to V$ satisfying a list of conditions. The first of those conditions are exactly the conditions for $V$ to be an abelian group; the rest are the same as [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^ac6884\|our conditions]] for $V$ to be an $F$-module. So the only differences are that we call $V$ an $F$-vector space (instead of an $F$-module) and call $F$ the field of scalars (instead of simply the ring acting on $V$).

>[!summary]
>Modules over fields are vector spaces

---
## Rings as modules

Every ring $R$ is a left $R$-module, using the action of left multiplication on itself. In this context, the [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules\|submodules]] of $R$ (when considered as a left $R$-module) are exactly the left ideals of $R$ (when considered as a ring).

Once again, we should ask what we mean when we say "are exactly the left ideals." Here we mean that there is a bijection between the set of left ideals of the ring $R$ and the set of submodules of $R$.

In theory, one could consider $R$-module structures on $R$ defined by other (left) actions of $R$ on itself, but in practice I have never seen that done. Perhaps it is because of the notational issues, as you would need to be very careful to distinguish between when the operation is the internal multiplication of the ring, as opposed to the ring action; perhaps one could write $rs$ for the former and $r\bullet s$ for the latter? If I come across a discussion or example of this in action (pun intended), I'll be sure to link it here.

>[!summary]
>Rings are modules over themselves.

---
## Abelian groups are ${\bf Z}$-modules
{ #706a2e}


It is [[Dummit, Foote - Abstract Algebra - 3e.pdf#page=352|simple to show]] that ${\bf Z}$-modules are "exactly the same" as abelian groups.

>[!summary]
> Abelian groups are the same as ${\bf Z}$-modules.

## Same group, different modules

For example, the field ${\bf R}$ can be viewed as ${\bf R}$-module, a ${\bf Q}$-module, or a ${\bf Z}$-module.  (As usual, what we really mean is that the abelian group consisting of the real numbers under addition can have the structure of a module over various rings.)

A given abelian group can even have different module structures for the same ring, $R$.  Being specific about the type of module (i.e., the ring doing the acting) can be important when talking about [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms\|module morphisms]].

>[!summary]
>A given abelian group $M$ can have many different module structures.

---
## Vector spaces with linear endomorphisms

Suppose $F$ is a field. If $V$ is an $F$-vector space and $T:V\to V$ is a linear transformation, then we can define an $F[x]$-module structure on $V$ by $p(x)v=p(T)v$ for every $p(x)\in F[x]$ and $v\in V$. It is [[Dummit, Foote - Abstract Algebra - 3e.pdf#page-353|straightforward to show]] the converse is also true, and that we have a bijection between the collection of $F[x]$-modules and pairs $(V,T)$ of $F$-vector spaces with linear endomorphisms. One can then also show that under this bijection the $F[x]$-submodules correspond to $T$-stable subspaces. We'll explore this more fully later.

>[!summary]
>$F[x]$-modules are $F$-vector spaces together with a fixed linear endomorphism.

---
## Passing to quotient rings

Suppose $M$ is an $R$-module and $I\subseteq R$ is a two-sided ideal of $R$. Suppose $I$ [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilates]] $M$, i.e., $im=0$ for all $i\in I$ and $m\in M$. Then we can define an $R/I$-module structure on $M$ in the obvious way: $(r+I)m = rm$ for $r\in R$ and $m\in M$.

For example, if $M$ is a finite abelian group of order $n$, then $nm=0$ for every $m\in M$, i.e., the ideal $(n)\subseteq {\bf Z}$ [[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercises/Annihilators\|annihilates]] $M$. We can therefore also view $M$ as a ${\bf Z}/n{\bf Z}$-module.

---
## The zero module

For every ring $R$, the trivial group $\{0\}$ is also an $R$-module (with trivial action of $R$). This module is often denoted simply $0$. It is the zero object in the category of left $R$-modules, i.e., it is both an initial and a terminal object in the category. For each $R$-module $M$, there is both a unique module morphism $0\to M$ (sending the element $0$ to $0_M$) and a unique module morphism $M\to 0$ (sending every element $m\in M$ to $0$). A module morphism $f:M\to N$ is trivial (i.e., $f(m)=0_N$ for all $m\in M$) exactly when it factors through the 0 module.

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 151.9816399216652 102.96875" width="200" height="102.96875" class="excalidraw-svg"><symbol id="image-d15281175165b430f8410abd6d237300e7a282c2"><image width="100%" height="100%" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0idmVydGljYWwtYWxpZ246IC0wLjQ2NGV4OyIgd2lkdGg9IjIyLjQ0IiBoZWlnaHQ9IjIwLjU5IiByb2xlPSJpbWciIGZvY3VzYWJsZT0iZmFsc2UiIHZpZXdCb3g9IjAgLTcwNSA1NTAgOTEwIj48ZGVmcz48cGF0aCBpZD0iTUpYLTE3LVRFWC1JLTFENDUzIiBkPSJNMTE4IC0xNjJRMTIwIC0xNjIgMTI0IC0xNjRUMTM1IC0xNjdUMTQ3IC0xNjhRMTYwIC0xNjggMTcxIC0xNTVUMTg3IC0xMjZRMTk3IC05OSAyMjEgMjdUMjY3IDI2N1QyODkgMzgyVjM4NUgyNDJRMTk1IDM4NSAxOTIgMzg3UTE4OCAzOTAgMTg4IDM5N0wxOTUgNDI1UTE5NyA0MzAgMjAzIDQzMFQyNTAgNDMxUTI5OCA0MzEgMjk4IDQzMlEyOTggNDM0IDMwNyA0ODJUMzE5IDU0MFEzNTYgNzA1IDQ2NSA3MDVRNTAyIDcwMyA1MjYgNjgzVDU1MCA2MzBRNTUwIDU5NCA1MjkgNTc4VDQ4NyA1NjFRNDQzIDU2MSA0NDMgNjAzUTQ0MyA2MjIgNDU0IDYzNlQ0NzggNjU3TDQ4NyA2NjJRNDcxIDY2OCA0NTcgNjY4UTQ0NSA2NjggNDM0IDY1OFQ0MTkgNjMwUTQxMiA2MDEgNDAzIDU1MlQzODcgNDY5VDM4MCA0MzNRMzgwIDQzMSA0MzUgNDMxUTQ4MCA0MzEgNDg3IDQzMFQ0OTggNDI0UTQ5OSA0MjAgNDk2IDQwN1Q0OTEgMzkxUTQ4OSAzODYgNDgyIDM4NlQ0MjggMzg1SDM3MkwzNDkgMjYzUTMwMSAxNSAyODIgLTQ3UTI1NSAtMTMyIDIxMiAtMTczUTE3NSAtMjA1IDEzOSAtMjA1UTEwNyAtMjA1IDgxIC0xODZUNTUgLTEzMlE1NSAtOTUgNzYgLTc4VDExOCAtNjFRMTYyIC02MSAxNjIgLTEwM1ExNjIgLTEyMiAxNTEgLTEzNlQxMjcgLTE1N0wxMTggLTE2MloiLz48L2RlZnM+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIj48ZyBkYXRhLW1tbC1ub2RlPSJtYXRoIj48ZyBkYXRhLW1tbC1ub2RlPSJtaSI+PHVzZSBkYXRhLWM9IjFENDUzIiB4bGluazpocmVmPSIjTUpYLTE3LVRFWC1JLTFENDUzIi8+PC9nPjwvZz48L2c+PC9zdmc+" preserveAspectRatio="none"/></symbol>  <!-- svg-source:excalidraw -->    <defs>    <style class="style-fonts">      @font-face {        font-family: Excalifont;        src: url(data:font/woff2;base64,d09GMgABAAAAAAS0AA4AAAAACJQAAARgAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbgQYcVgZgADwRCAqHOIVyCwwAATYCJAMUBCAFgxgHIBvNBlFUcHLIfhTGbUs4j31r9vlpyIUTzMTU9OTOTRkP/a+93pm3GyD1jw+wAiIZx2BEVIyNsHGuuhW6MmDU2hbxRlTTrnr/WChaA0PItMjw36mXpNS7QlC6OV19rzI3BzM/halT+S0eyvkEjIaCOCdmY0DSPcC7gasFGlNwA1XrLSAX3KtOx6Zsp9kVUDxGj1BKcY+ITxfoAISUQgi0GZPA3tqp9SC5uZENJA9kuobkdUjvIMGGf6Pm5Y7swOdAVJIcWqTu3UwxYar4fcnv5yLFwaEkRYkeQgL+TVDhIA5N/tyEkL2oVdfkOwPAIZeJcx5/YIYbbB0VG/hiTKPk/bzV5Rx53fAB8Z4BoBsfiYJGHE8y2zBoCkLKJb+/CGPqXPx/53chQovpz0hQgzY0E/MQb4AKkEIoL2r4Y0KlWHgj5/0aJ2dRtFesk0YTpvk3QQghK0JkPRNVet6h+JDJfmc0/zmq2eQpC0kH08Aahcg+FMGZO6nYIDo42Yu2UoUaqUIVaCtL8zSZb1hn1cvTIvsMDcNaEtbIN6jVKjxm3USbogm39cuwVoKBEUEIAfAlgiYa/5x/Y9sYf+UAAHAEQApoIQpSfOEOgMO+JKFO9aYK/qYunOY29W3XRLv0m+AIK4QtoIMiCnsAbIEQAn7/tjlaF42/ok+4T35oR4BI5iNifBJkkXYy37RCv1zjaOtkyrfFxpu7+ZqbOwTILNij2b10z4/sA3bu+Amei2v+regC/mljEPlWd3winRRqcoWVhT9YJb9Yv9mKldsix8cWJ8tE7yXr8d9OkibpqXx+ql07at4nVNz5NjKs2CMkpa5+3DiHEQ1IjGGMPo9+7zl1uPPqzMnju8Eob2SLKqNfDsJoJhBt+G3D07IDpCz11I1wzJx+wh4mPVJ2yKrkCYHqiQAVjYU9bs7S3kzAJsSat2HzFSsjpXjlEF8iI2v2mpA1Ku4f3MQQgGagCJvU9XD12y4xW+CQmXOMyfpdKB29vTFSswuXfSGZCwThC/BM6g2XlffFrZ2SHT2+n8fZO+mAHLaaSPDSBeTJlTbnRMhZHQfxOm7xBJiBaqbKTy9Mq/HAnkDvypQnXXptxbQtvP6lnO2d1XfVMjelsj0v4Un30LUgZjl6J+k5ZE2vohOSo2jRwoIPvFVf523A9vr8hivQwFmutC42o71HWVpT/X7zHiQakBAQQASQ/8MPxMI5Tb7yWQnvgfC3UMkGQfjX+6n4/4V/xXQf2YZUoEWC4Bu6tdiAvr9GCNhcl5F8NlvKfxpZQHptwUDtD5rAB0TKGuxsdowlKgF49UNFQ8MHTV0+0WLUHa30G6G1FbpbNOkH267GhjaWZvZ2aHYdU3MnG0PEwBRBWVpZFTcH1zgvqmjj5mCBouLl4KFm6sAzPsjsTqNqd1s9p6uoISq1t+6mluWGgxtiaW6BluW7Y2YqHi4ePiojNyr1kxPE0IWDStrGhko3qJs2JZhq55aZcGAB+vtPjQIAAA==);          }    </style>      </defs>  <g stroke-linecap="round"><g transform="translate(28.5166015625 56.15234375) rotate(0 19.017578125 -12.757061935754223)"><path d="M0 0 C6.34 -4.25, 31.7 -21.26, 38.04 -25.51 M0 0 C6.34 -4.25, 31.7 -21.26, 38.04 -25.51" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(28.5166015625 56.15234375) rotate(0 19.017578125 -12.757061935754223)"><path d="M38.04 -25.51 L30.28 -12.68 L23.21 -23.21 L38.04 -25.51" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M38.04 -25.51 C36.05 -22.24, 34.07 -18.96, 30.28 -12.68 M38.04 -25.51 C36.39 -22.79, 34.74 -20.06, 30.28 -12.68 M30.28 -12.68 C28.08 -15.96, 25.87 -19.24, 23.21 -23.21 M30.28 -12.68 C28.42 -15.44, 26.57 -18.21, 23.21 -23.21 M23.21 -23.21 C28.31 -24, 33.41 -24.79, 38.04 -25.51 M23.21 -23.21 C28.3 -24, 33.39 -24.79, 38.04 -25.51 M38.04 -25.51 C38.04 -25.51, 38.04 -25.51, 38.04 -25.51 M38.04 -25.51 C38.04 -25.51, 38.04 -25.51, 38.04 -25.51" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(88.6240234375 31.818132475258352) rotate(0 18.4912109375 15.070341324727039)"><path d="M0 0 C6.16 5.02, 30.82 25.12, 36.98 30.14 M0 0 C6.16 5.02, 30.82 25.12, 36.98 30.14" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(88.6240234375 31.818132475258352) rotate(0 18.4912109375 15.070341324727039)"><path d="M36.98 30.14 L22.44 26.47 L30.45 16.64 L36.98 30.14" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M36.98 30.14 C31.46 28.75, 25.94 27.35, 22.44 26.47 M36.98 30.14 C31.7 28.8, 26.41 27.47, 22.44 26.47 M22.44 26.47 C24.07 24.46, 25.7 22.46, 30.45 16.64 M22.44 26.47 C25.57 22.63, 28.69 18.79, 30.45 16.64 M30.45 16.64 C32.71 21.31, 34.97 25.98, 36.98 30.14 M30.45 16.64 C32.78 21.45, 35.11 26.27, 36.98 30.14 M36.98 30.14 C36.98 30.14, 36.98 30.14, 36.98 30.14 M36.98 30.14 C36.98 30.14, 36.98 30.14, 36.98 30.14" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(34.1845703125 71.505859375) rotate(0 42.61621093749999 -0.05374317820881913)"><path d="M0 0 C14.21 -0.02, 71.03 -0.09, 85.23 -0.11 M0 0 C14.21 -0.02, 71.03 -0.09, 85.23 -0.11" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(34.1845703125 71.505859375) rotate(0 42.61621093749999 -0.05374317820881913)"><path d="M85.23 -0.11 L71.65 6.25 L71.63 -6.43 L85.23 -0.11" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd"/><path d="M85.23 -0.11 C80.15 2.27, 75.06 4.65, 71.65 6.25 M85.23 -0.11 C80.1 2.29, 74.97 4.69, 71.65 6.25 M71.65 6.25 C71.64 2.15, 71.64 -1.94, 71.63 -6.43 M71.65 6.25 C71.64 3.5, 71.64 0.75, 71.63 -6.43 M71.63 -6.43 C75.21 -4.77, 78.78 -3.11, 85.23 -0.11 M71.63 -6.43 C74.69 -5.01, 77.76 -3.58, 85.23 -0.11 M85.23 -0.11 C85.23 -0.11, 85.23 -0.11, 85.23 -0.11 M85.23 -0.11 C85.23 -0.11, 85.23 -0.11, 85.23 -0.11" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(61.0322265625 77.96875) rotate(0 8 7.5)"><use href="#image-d15281175165b430f8410abd6d237300e7a282c2" width="16" height="15" opacity="1"/></g><g transform="translate(10 60.458984375) rotate(0 7.659996032714844 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">M</text></g><g transform="translate(129.181640625 62.404296875) rotate(0 6.399999648332596 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">N</text></g><g transform="translate(70.5234375 10) rotate(0 6.740000307559967 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">0</text></g></svg>

## Suggested next notes

[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms\|Module morphisms]]
[[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Submodules\|Submodules]]
[[40-49 Knowledge/41 Mathematics/Module theory/Constructions on modules/Quotient modules\|Quotient modules]]
