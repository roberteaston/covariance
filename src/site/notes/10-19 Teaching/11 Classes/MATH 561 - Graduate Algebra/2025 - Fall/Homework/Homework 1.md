---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2025-fall/homework/homework-1/","updated":"2025-09-23T06:41:40-07:00"}
---

## Problem 1
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/initial-and-terminal-objects/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




An object $i$ in a category $C$ is called **initial** if for every object $c\in C$ there exists a unique arrow $i\to c$; in other words, the hom-sets $\operatorname{Hom}_C(i,c)$ are all singleton sets.

Dually, an object $t$ is called **terminal** if for every object $c\in C$ there exists a unique arrow $c\to t$, i.e., the hom-sets $\operatorname{Hom}_C(c,t)$ are all singleton sets.

1. Show that an initial (respectively, terminal) object, if it exists, is unique up to unique [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Special morphisms#Bimorphisms and isomorphisms\|isomorphism]].
2. Show that in ${\bf Set}$, the empty set is initial and the singleton set is terminal.
3. Show that in ${\bf Ab}$, the trivial group $0$ is both initial and terminal. (Such an object is called a **null** or **zero** object.)
4. Show that ${\bf Field}$ contains neither an initial nor a terminal object.

</div></div>


> [!summary]- Solution
> 1. Suppose $i, i'\in C$ are two initial objects. Since $i$ is initial, there is a unique arrow $f:i\to i'$ in $C$; since $i'$ is initial, there is a unique arrow $g:i'\to i$ in $C$. We claim $f$ and $g$ are mutual inverses (hence isomorphisms). To that end, observe that $g\circ f:i\to i$ is an arrow from $i$ to itself. However, another such arrow from $i$ to itself is the identity arrow $1_i:i\to i$. As $i$ is initial, there can only exist one arrow from $i$ to itself, hence we must have $g\circ f = 1_i$. Similarly, the composition $f\circ g$ must equal the identity arrow $1_{i'}$.
>    
>    The "dual" argument for terminal objects proceeds similarly. Suppose $t,t'\in C$ are both terminal objects. Since $t$ is terminal, there is a unique arrow $f:t'\to t$; since $t'$ is terminal, there is a unique arrow $g:t\to t'$. The composition $g\circ f$ is an arrow from $t'$ to itself, hence (by uniqueness) must equal the identity arrow $1_{t'}$. Similarly, the composition $f\circ g$ must equal the identity arrow $1_t$, so $f$ and $g$ are mutual inverses (and hence both isomorphisms).
> 1. For every set $X$ there is a unique set map $\emptyset \to X$, namely the so-called "empty map". Similarly, for each fixed singleton set $\{\star\}$ there is a unique set map $X\to \{\star\}$, namely the map that sends every element of $X$ to $\star$.
> 2. Since group morphisms must preserve identities, to each abelian group $A$ there is a unique group morphism ${\bf 0}\to A$, namely $0\mapsto 0_A$. And just as with sets, there is a unique group morphism $A\to {\bf 0}$, namely the one that maps every element of $A$ to $0$. (What happened to the empty set? Remember: groups are required to have an identity element, and hence must be nonempty!)
> 3. Recall the following fact: there are no morphisms between fields of different characteristics. In particular, there does exist a field $F$ that has morphisms to both ${\bf F}_2$ and ${\bf F}_3$, say, and hence there does not exist a field with morphisms to every field (let along unique morphisms). Similarly, there does not exist a field with morphisms from every field.

</div></div>


## Problem 2
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/monics-and-epics/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




An arrow $f:a\to b$ in a category $C$ is called **monic** (or a **monomorphism**) if it is *left-cancellable*; i.e., if whenever $g_1, g_2: c\to a$ are arrows such that $f\circ g_1 = f\circ g_2$, then $g_1=g_2$.

Dually, the arrow $f$ is called **epic** (or **epi**, or an **epimorphism**) if it is *right-cancellable*; i.e., if whenever $g_1,g_2:b\to c$ are arrows such that $g_1\circ f = g_2\circ f$, then $g_1=g_2$.

1. In ${\bf Set}$, show that a set map $f:X\to Y$ is monic (respectively, epic) if and only if it is injective (respectively, surjective).
2. Show that, in a general category $C$, if an arrow $f:a\to b$ is an [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Special morphisms#Bimorphisms and isomorphisms\|isomorphism]] (i.e., invertible), then $f$ is both monic and epic.
3. Show that in ${\bf Ring}$, the ring inclusion $i:{\bf Z}\to {\bf Q}$ is both monic and epic, even though the map $i$ is not surjective.

</div></div>


> [!summary]- Solution
> 1. First suppose $f:X\to Y$ is monic. Suppose $x_1, x_2\in X$ are elements such that $f(x_1)=f(x_2)$. Define set maps $g_1, g_2:\{\star\}\to X$ by $g_i(\star)=x_i$. Then $(f\circ g_1)(\star)=f(x_1)=f(x_2)=(f\circ g_2)(\star)$, so $f\circ g_1 = f\circ g_2$. Since $f$ is monic, this implies $g_1=g_2$ and hence $x_1=g_1(\star)=g_2(\star)=x_2$. Thus, $f$ is indeed injective.
>    
>    Conversely, suppose $f:X\to Y$ is injective. Suppose $g_1, g_2:Z\to X$ are set maps such that $f\circ g_1=f\circ g_2$. Take any element $z\in Z$. Then $f(g_1(z))=f(g_2(z))$, so by the injectivity of $f$ we must have $g_1(z)=g_2(z)$. Since $z\in Z$ was arbitrary, this proves $g_1=g_2$. Thus, $f$ is left cancellable, i.e., monic.
>    
>    Next suppose $f:X\to Y$ is epic and suppose, towards a contradiction, that $f$ is not surjective. Then we can choose some element $y_0\in Y$ that is not in the image of $X$. Now consider two set maps $g_1, g_2:Y\to \{0,1\}$. For the first map, simply define $g_1(y)=1$ for all $y\in Y$. For the second map, define $g_2$ to be the characteristic function of the image $f(X)\subseteq Y$; in other words, set $g(y)=1$ if there exists some $x\in X$ with $f(x)=y$, and set $g_2(y)=0$ otherwise. Now notice that for every $x\in X$ we have $(g_1\circ f)(x)=1$ (since $g_1$ takes the constant value $1$), and also $(g_2\circ f)(x)=g_2(f(x))=1$ (since clearly $f(x)$ is in the image of $f$). Thus, $g_1\circ f = g_2\circ f$. Since $f$ is epic, this implies $g_1=g_2$. But this is a contradiction, since $g_1(y_0)=1\neq 0 = g_2(y_0)$.
>    
>    Finally, suppose $f:X\to Y$ is surjective. Suppose $g_1, g_2:Y\to Z$ are two set maps such that $g_1\circ f = g_2\circ f$. Take any element $y\in Y$. Since $f$ is surjective, there exists some $x\in X$ with $f(x)=y$. We then have $g_1(y)=g_1(f(x))=(g_1\circ f)(x) = (g_2\circ f)(x)=g_2(y)$. Since $y\in Y$ was arbitrary, this proves $g_1=g_2$; i.e., $f$ is epic.
> 1. Suppose an arrow $f:a\to b$ in a category $C$ is an isomorphism. Let $g:b\to a$ be the inverse arrow. To show $f$ is monic, suppose $h_1, h_2:c\to a$ are two arrows such that $f\circ h_1=f\circ h_2$. Composing both sides with $g$ then gives $g\circ (f\circ h_1)=g\circ (f\circ h_2)$. But now notice that
>    
>    $g\circ (f\circ h_1) = (g\circ f)\circ h_1 = 1_a\circ h_1 = h_1.$
>    
>    Similarly, $g\circ (f\circ h_2) = h_2$. We therefore have $h_1=h_2$, and so $f$ is indeed monic.
>    
>    The argument that $f$ is epic is essentially the same, but we provide here for reference. Suppose $h_1, h_2:b\to c$ are two arrows such that $h_1\circ f = h_2\circ f$. Precomposing both sides by $g$ gives $(h_1\circ f)\circ g = (h_2\circ f)\circ g$. As before, associativity then implies $h_1\circ 1_b = h_2\circ 1_b$ and hence $h_1=h_2$. Thus, $f$ is epic.
> 1. First recall that the inclusion $i:{\bf Z}\to {\bf Q}$ simply sends each integer $n$ to the rational number $\frac{n}{1}$. In particular, strictly at the level of set maps this is injective. Now suppose $g_1, g_2:R\to {\bf Z}$ are ring morphisms such that $i\circ g_1 = i\circ g_2$ as ring morphisms $R\to {\bf Q}$. Take any $r\ in R$ and consider the integers $n_1 = g_1(r)$ and $n_2=g_2(r)$. We have $i(n_1)=i(g_1(r))=(i\circ g_1)(r)=(i\circ g_2)(r)=i(g_2(r))=i(n_2)$. Since $i$ is injective (as a set map), this implies $n_1=n_2$, i.e., $g_1(r)=g_2(r)$. Since $r\in R$ was arbitrary, this proves $g_1=g_2$. Thus, $i$ is monic.
>    
>    The fact that $i$ is epic is more surprising and essentially boils down to the fact that ring morphisms from ${\bf Q}$ are entirely determined by their restriction to ${\bf Z}$. To see this in detail, suppose $g_1, g_2:{\bf Q}\to R$ are ring morphisms such that $g_1\circ i=g_2\circ i$ as ring morphisms ${\bf Z}\to R$. Take any element in ${\bf Q}$ and write it in the form $\frac{m}{n}$ with $m,n\in {\bf Z}$. Since each $g_i:{\bf Q}\to R$ is a ring morphism, we must have
>    
>    $g_i\left(\frac{m}{n}\right) = g_i\left(\frac{m}{1}\cdot \frac{1}{n}\right)=g_i\left(\frac{m}{1}\right)g_i\left(\frac{n}{1}\right)^{-1}.$
>    
>    Now note that $g_1\left(\frac{m}{1}\right)=g_1(i(m))=(g_1\circ i)(m)=(g_2\circ i)(m)=g_2\left(\frac{m}{1}\right).$ Combined with the above equality, it now immediately follows that $g_1\left(\frac{m}{n}\right)=g_2\left(\frac{m}{n}\right)$. Since the rational number $\frac{m}{n}$ was arbitrary, this proves $g_1=g_2$; i.e., $i$ is epic.

</div></div>


## Problem 3
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/power-set-functors/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




There are two functors vying for the name "power set functor".

For the first, define $\mathcal{P}:{\bf Set}\to {\bf Set}$ as follows:
- On objects: for each set $X$, define $\mathcal{P}(X)$ to be the power set of $X$, i.e., the set of all subsets of $X$.
- On arrows: for each set map $f:X\to Y$, define a set map $\mathcal{P}(f):\mathcal{P}(X)\to \mathcal{P}(Y)$ by sending each subset $S\subseteq X$ to its image $f(S)\subseteq Y$.

For the second, define $\mathcal{P}':{\bf Set}^{\text{op}}\to {\bf Set}$ as follows^[Here we are using the [[40-49 Knowledge/41 Mathematics/Category theory/Basic structures/Categories#Opposite categories\|opposite category]] to avoid talking about contravariant functors.]:
- On objects: for each set $X$, define $\mathcal{P}'(X)$ to once again be the power set of $X$.
- On arrows: for each arrow $f^{\text{op}}:X\to Y$ (corresponding to a set map $f:Y\to X$), define a set map $\mathcal{P}'(f^{\text{op}}):\mathcal{P}'(X)\to \mathcal{P}'(Y)$ by sending each subset $S\subseteq X$ to its preimage $f^{-1}(X)\subset Y$. (Recall that $f^{-1}(X)=\{y\in Y\mid f(y)\in X\}$.)

Verify that $\mathcal{P}$ and $\mathcal{P}'$ are indeed both functors. The first is sometimes called the **covariant power set functor** and the second the **contravariant power set functor**.

</div></div>


> [!summary]- Solution
> Let's first verify $\mathcal{P}:{\bf Set}\to {\bf Set}$ is a functor. Fix any set $X$ and let $1_X:X\to X$ be the identity set map. Then every subset $S\subseteq X$ the identity set map $1_X$ on $X$ sends $S$ to itself, i.e., $1_X(S)=S$. Thus, $1_X$ induces the identity map on $\mathcal{P}(X)$, i.e., $\mathcal{P}(1_X) = 1_{\mathcal{P}(X)}$.
> 
> Next suppose $f:X\to Y$ and $g:Y\to Z$ are composable set maps. We must show $\mathcal{P}(g\circ f)=\mathcal{P}(g)\circ \mathcal{P}(f)$ as set maps $\mathcal{P}(X)\to \mathcal{P}(Z)$. To that end, fix any $S\in \mathcal{P}(X)$, i.e., any subset $S\subseteq X$. It follows from the very definition of composition for set maps that $g(f(S)) = (g\circ f)(S)$. This exactly implies $\mathcal{P}(g)(\mathcal{P}(f)(S)) = \mathcal{P}(g\circ f)(S)$. Since $S\in \mathcal{P}(X)$ was arbitrary, this proves $\mathcal{P}(g)\circ \mathcal{P}(f) = \mathcal{P}(g\circ f)$.
> 
> Let's similarly prove $\mathcal{P'}:{\bf Set}^{\text{op}}\to {\bf Set}$ is a functor. Once again, first fix a set $X$ and let $1_X:X\to X$ be the identity set map. Then for every subset $T\subseteq X$ we certainly have $1_X^{-1}(T) =T$, and so $\mathcal{P}'$ induces the identity map on $\mathcal{P}'(X)$.
> 
> Finally, suppose $f^{\text{op}}:X\to Y$ and $g^{\text{op}}:Y\to Z$ are composable arrows in ${\bf Set}^{\text{op}}$. Note that these arrows (by the definition of the opposite category ${\bf Set}^{\text{op}})$ correspond to set maps $f:Y\to X$ and $g:Z\to Y$, and also that $g^{\text{op}}\circ f^{\text{op}}=(f\circ g)^{\text{op}}:X\to Z$. Now fix any element $S\in \mathcal{P}'(X)$, i.e., subset $S\subseteq T$. Then we have
> 
> $\begin{align*}
> \mathcal{P}'(g^{\text{op}}\circ f^{\text{op}})(S)&=\mathcal{P}'((f\circ g)^{\text{op}})(S)\\
> &= (f\circ g)^{-1}(S)\\
> &=g^{-1}(f^{-1}(S))\\
> &=\mathcal{P}'(g^{\text{op}})(\mathcal{P}'(f^{\text{op}}(S))\\
> & (\mathcal{P}'(g^{\text{op}})\circ \mathcal{P}'(f^{\text{op}}))(S).
> \end{align*}$
> 
> Here we used the easy fact from basic set theory that $(f\circ g)^{-1}(S)=g^{-1}(f^{-1}(S))$, which does feel a bit like cheating. In any case, since $S\in \mathcal{P}'(X)$ was arbitrary, this does indeed prove $\mathcal{P}'(g^{\text{op}}\circ f^{\text{op}}\mathcal{P}'(g^{\text{op}})\circ \mathcal{P}'(f^{\text{op}}.$ Thus, $\mathcal{P}'$ is indeed a functor.
> 
> > [!note] Hate all of the "opposite" notation?
> > If you really hated all of the opposite notation used above, you could have instead proved $\mathcal{P}'$ was a "contravariant" functor and saved yourself some notational awkwardness.

</div></div>


## Problem 4
---


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/there-is-no-center-functor-on-grp/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Prove there does not exist a functor ${\bf Grp}\to {\bf Ab}$ with object function sending each group $G$ to its center.

> [!summary]- Hint
> Consider a certain sequence of group morphisms $S_2\to S_3\to S_2$.

</div></div>


> [!summary]- Solution
> We will show that the assignment to each group $G$ its center $\operatorname{Z}(G)$ is not functorial, by finding a pair of composable morphisms $f, g$ such that $\operatorname{Z}(g\circ f)$ cannot possibly equal $\operatorname{Z}(g)\circ \operatorname{Z}(f)$.
> 
> Following the hint, consider the morphism $p:S_3\to S_2$ given by composition of the projection morphism $S_3\to S_3/A_3$ with the isomorphism $S_3/A_3\cong S_2$. One can readily verify that the composition of this morphism $p:S_3\to S_2$ with the inclusion morphism $i:S_2\to S_3$ gives the identity morphism $S_2\to S_2$.
> 
> Now suppose there were some functor $\operatorname{Z}:\textbf{Grp}\to \textbf{Ab}$ that mapped each group $G$ to its center $\operatorname{Z}(G)$. Since $\operatorname{Z}(S_2)=S_2$ and $\operatorname{Z}(S_3)=\{e\}$, the functor $Z$ must map the morphism $i:S_2\to S_3$ to the trivial morphism $Z(i):S_2\to \{e\}$. This forces the composition $Z(p)\circ Z(i)$ to be the trivial morphism $S_2\to S_2$ that maps everything to the identity. On the other hand, since $p\circ i$ is the identity morphism on $S_2$, by the assumption that $\operatorname{Z}$ is a functor we must have that $\operatorname{Z}(p\circ i)$ is the identity morphism on $\operatorname{Z}(S_2)=S_2$. Thus, we cannot have $\operatorname{Z}(p)\circ \operatorname{Z}(i)=\operatorname{Z}(p\circ i)$, contradicting the assumption that $\operatorname{Z}$ was a functor (and hence must be compatible with composition).
> 
> Another way to say this all very succinctly is that group morphisms don't respect membership in centers. Our example is that of the element $(1,2)$ that is in the center of $S_2$ but maps (under the usual inclusion of $S_2$ into $S_3$) to an element not in the center of $S_3$.



</div></div>


