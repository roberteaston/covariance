---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2024-fall/homework/homework-1-solutions/","updated":"2024-10-07T11:03:28-07:00"}
---

## Problem 1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/ring-property-from-module-property/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a ring, $M$ is a left $R$-module, and $r\in R$ is an element for which there exists a nonzero $m\in M$ such that $rm=0$. Prove $r$ does not have a left inverse.

</div></div>


> [!summary]- Solution
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# Solution

</div>


### Solution
Suppose, towards a contradiction, that $r$ had a left inverse. Let $s\in R$ be a left inverse of $r$ in $R$, so that $sr=1_R$. On the one hand, we then have $s(rm)=s\cdot 0=0$; on the other hand we also have $s(rm)=(sr)m=1_R \cdot m = m$. Since $m$ was assumed to be nonzero, this is a contradiction. 

</div></div>


---

## Problem 2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/submodules-via-ideals/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




 Suppose $R$ is a ring, $I\subseteq R$ is a left ideal, and $M$ is a left $R$-module. Let $IM\subseteq M$ denote the subset of all finite $I$-linear combinations in $M$, i.e., $IM = \left\{\sum_{\text{finite}} i_k m_k\,\mid\, i_k\in I,\, m_k\in M\right\}.$ Prove $IM$ is a submodule of $M$.

</div></div>


> [!summary]- Solution
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Solution
It is clear^[It's always dangerous to say this.] that $IM$ is a subgroup of the abelian group $M$, so it only remains to verify $IM$ is closed under scaling, i.e., the action of $R$. To see that, suppose we have an element of $\sum_k i_k m_k$ of $IM$ and observe that $r\cdot \sum_k i_k m_k = \sum_k r(i_k m_k) = \sum_k (ri_k)m.$
Since $I$ is a left ideal of $R$, we have $ri_k\in R$ for every $k$ and so the final sum is once again another element of the set $IM$. 

</div></div>

   
   
---

## Problem 3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/torsion-submodules/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a ring and $M$ is a left $R$-module. An element $m\in M$ is called a **torsion element** if $rm=0$ for some nonzero $r\in R$. The set of torsion elements in $M$ is denoted $\operatorname{Tor}(M)$.
1. Prove that if $R$ is an integral domain then $\operatorname{Tor}(M)$ is a submodule of $M$.
2. Give an example of a ring $R$ and $R$-module $M$ such that $\operatorname{Tor}(M)$ is not a submodule. (*Hint:* Consider torsion elements in the $R$-module $R$ for some specific ring $R$.)
3. Suppose $R$ has a (nonzero) zero divisor and $M$ is nontrivial. Prove that $M$ has nonzero torsion elements.
4. Suppose $\phi:M\to N$ is an $R$-module morphism. Prove that $\phi(\operatorname{Tor}(M))\subseteq \operatorname{Tor}(N)$.

</div></div>


> [!summary]- Solution
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Solution
1. First observe that $1_R\cdot 0 = 0$ so $0\in\operatorname{Tor(M)}$. Next suppose $m, n\in\operatorname{Tor(M)}$, and let $r,s\in R$ be nonzero elements such that $rm=0$ and $sn=0$. We claim that $rs$ is nonzero and $(rs)(m-n)=0$. The first statement follows from the fact that we assumed $R$ is an integral domain; for the second, observe that $(rs)(m-n)=(rs)m-(rs)n=(sr)m-(rs)n=s(rm)-r(sn)=s\cdot 0-r\cdot 0 = 0-0=0.$ Note that we used the commutativity of $R$ (the "integral" part of "integral domain") to switch from $(rs)m$ to $(sr)m$. 2. In light of part 1, we need to look at rings $R$ that are *not* integral domains. One such ring is ${\bf Z}_6$. When considered as an module over itself, the elements $2$ and $3$ are torsion elements, since $3\cdot 2 = 0$ and $2\cdot 3=0$. On the other hand, the element $2+3=5$ is not torsion, as one can quickly verify that $r\cdot 5\neq 0$ for each of the five nonzero elements of ${\bf Z}_6$.
3. Let $r\in R$ be a nonzero zero divisor, so that $rs=0_R$ for some nonzero $s\in R$. Let $m\in M$ be any nonzero element, and consider the element $sm$. If $sm=0$, then $m$ is torsion; if $sm\neq 0$, then $r(sm)=(rs)m=0_R\cdot m = 0$, and so $sm$ is torsion. So in either case there exists a nonzero torsion element in $M$.
4. Take any torsion element $m\in M$ and let $r\in R$ be a nonzero element such that $rm=0_M$. Then observe that $r\cdot \phi(m)=\phi(rm) = \phi(0_M)=0_N$. This prove $\phi(m)$ is a torsion element in $N$.


</div></div>


---

## Problem 4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/annihilators/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a ring and $M$ is a left $R$-module.
1. For each submodule $N$ on $M$, the **annihilator** of $N$ in $R$ is defined to be the set of elements $r\in R$ such that $rn=0$ for all $n\in N$. Prove that the annihilator of $N$ in $R$ is a 2-sided ideal of $R$.
2. For each right ideal $I$ of $R$, the **annihilator** of $I$ in $M$ is defined to be the set of all elements $m\in M$ such that $im=0$ for all $i\in I$. Prove that the annihilator of $I$ in $M$ is a submodule of $M$.
3. Consider the ${\bf Z}$-module $M={\bf Z}_{24}\times {\bf Z}_{15}\times {\bf Z}_{50}$ and ideal $I=2{\bf Z}$. Determine the annihilator of $M$ in ${\bf Z}$ and the annihilator of $I$ in $M$.

</div></div>

   
> [!summary]- Solution
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Solution
1. We first verify the annihilator of $N$ in $R$ is an abelian subgroup. First [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^06c4a9\|recall]] that $0_R\cdot n = 0_M$ for every $n\in $N$. Take any $r_1, r_2$ in the annihilator of $N$ and observe that for all $n\in N$ we have $(r_1-r_2)n = r_1n-r_2n = 0_N-0_N = 0_N$, and so $r_1-r_2$ is in the annihilator of $N$. By the Subgroup Criterion, we've thus proven the annihilator is a subgroup of $R$ under addition. Now fix any element $r$ of the annihilator and let $s\in R$ be an arbitrary element. Then for every $n\in N$ observe that $(sr)n = s(rn) = s\cdot 0_M = 0_M$, where for the last equality we once again used the fact that [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^06c4a9\|zero acts trivially]]. This proves $sr$ is in the annihilator for every $s\in R$ and hence the annihilator is a left ideal of $R$. Similarly, we have $(rs)n=r(sn)=r\cdot 0_M = 0_M$, where for the second equality we used the fact that $N$ is a submodule so $sn\in N$ and hence it is annihilated by $r$. This proves $rs$ is in the annihilator for every $s\in R$, and hence the annihilator is a right ideal of $R$.
2. This will prove very similar to the argument above. First note once again that $i\cdot 0_M=0_M$ for every $i\in I$, and so $0_M$ is the annihilator of $I$ in $M$. Next suppose $m_1, m_2$ are in the annihilator of $I$ in $M$. Then for every $i\in I$ we have $i(m_1-m_2)=im_1-im_2 = 0_M-0_M=0_M$, and so $m_1-m_2$ is in the annihilator of $I$ in $M$. We've thus proven the annihilator of $I$ in $M$ is a subgroup of $M$. Finally, take any $r\in R$ and $m$ in the annihilator of $I$ in $M$. Then $i(rm)=(ir)m=i'm = 0_M$, since $i'\in I$ (as $I$ is a right ideal) and $m$ annihilates everything in $I$. Thus $rm$ is in the annihilator of $I$ in $M$, and hence that annihilator is a left $R$-submodule.
3. By the definition, the annihilator of $M$ in ${\bf Z}$ is the collection of all integers $n$ such that $nm=0$ for every $m\in M$. The module $M$ is a Cartesian product, which means that its operation is component-wise (addition) and that its zero element is the triple $(0,0,0)$. If we denote the general element in $M$ as $(m_1,m_2,m_3)$ then $n\cdot (m_1,m_2,m_3)=(nm_1,nm_2,nm_3)$, and so $n$ annihilates that element exactly when $nm_1=0$ in ${\bf Z}_{24}$, $nm_2=0$ in ${\bf Z}_{15}$, and $nm_3=0$ in ${\bf Z}_{50}$. In other words, the desired annihilator is $A_1\cap A_2\cap A_3$, where each $A_i$ is the annihilator in ${\bf Z}$ of the corresponding factor group $M_i$ of $M$. By our basic knowledge of the cyclic groups ${\bf Z}_k$, we know these annihilators are the ideals $A_1 = 24{\bf Z}$, $A_2 = 15{\bf Z}$, and $A_3 = 50{\bf Z}$. The intersection of those three ideals in ${\bf Z}$ is the ideal generated by their three generators, which (by definition!) is the least common multiple $\operatorname{lcm}(24,15, 50)= 600$. So in summary, the annihilator of $M$ in ${\bf Z}$ is the ideal $600{\bf Z}$.
   
   Turning things around, the annihilator of the ideal $I=2{\bf Z}$ in the given module $M$ is the collection of all elements $(m_1,m_2,m_3)$ such that $(im_1,im_2,im_3)=(0,0,0)$ for every $i\in I$. Given the description of the ideal $I$, the annihilator are those triples such that for every integer $k$ we have $2km_1=0$ in ${\bf Z}_{24}$, $2km_2=0$ in ${\bf Z}_{15}$, and $2km_3=0$ in ${\bf Z}_{50}$. These conditions are satisfied exactly by $m_1\in 12{\bf Z}_{24}$, $m_2=0$ in ${\bf Z}_{15}$, and $m_3\in 25{\bf Z}_{50}$. The annihilator of $I$ in $M$ is therefore the submodule $(12{\bf Z}_{24})\times 0\times (25{\bf Z}_{50})$, which is isomorphic as an abelian group to ${\bf Z}_2\times {\bf Z}_2$. 

</div></div>


---

## Problem 5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/group-morphisms-that-cannot-define-module-morphisms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Give an example of a ring $R$, two $R$-modules $M$ and $N$, and a set map $f:M\to N$ such that $f$ is a group morphism but not an $R$-module morphism.

</div></div>


> [!summary]- Solution
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Solution
There are many possible such examples. One familiar examples that of complex conjugation. Let $R$ be the field of complex numbers, let $M$ and $N$ both be the abelian group of complex numbers (under addition), and let $f$ be complex conjugation. The familiar fact that complex conjugation is compatible with addition (i.e., $\overline{z+w}=\overline{z}+\overline{w}$) is really the statement that the map $f:{\bf C}\to {\bf C}$ is a morphism of abelian groups (i.e., $f(z+w)=f(z)+f(w)$.) But conjugation is not compatible with complex scaling. For instance, if $z=1+2i$ and $r=i$, then $\overline{rz}=\overline{i(1+2i)} = \overline{i-2}=-i-2$, while $r\overline{z}=i\cdot \overline{1+2i} = i(1-2i)=i+2$. In our notation, this exactly says that $f(rz)\neq rf(z)$, and so our map $f$ is not an $R$-module morphism.

</div></div>


---

## Problem 6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/hom-r-m-is-m/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a commutative ring and $M$ is left $R$-module. Prove that $\operatorname{Hom}_R(R,M)$ and $M$ are isomorphic as left $R$-modules.

*Bonus challenge:* Is your isomorphism [[40-49 Knowledge/41 Mathematics/Category theory/Basic Structures/Natural transformations#^cc0370\|natural]] in $M$?


</div></div>


> [!summary]- Solution
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Solution
First [[Examples of modules#Rings as modules\|recall]] that $R$ is being viewed as a module over itself by way of left multiplication. Next, [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Module morphisms and submodules#Hom-sets? More like hom-modules!\|recall]] that the set $\operatorname{Hom}_R(R,M)$ always has the structure of an abelian group, and since $R$ is commutative here it also has the structure of an $R$-module.

We will now define a set map $\operatorname{Hom}_R(R,M)\to M$ and eventually prove it is a module isomorphism. How can we come up with a map? Suppose $f:R\to M$ is a module morphism. What do we know about $f$? At first glance, not much. By the group morphism property we must have $f(0_R)=0_M$, so that doesn't tell us much about the map $f$. But our ring $R$ has another distinguished element, its multiplicative identity $1_R$. That element gets mapped to some element $f(1_R)\in M$. We claim that this element (the image of $1_R$ in $M$) completely determines the map $f$ as a module morphism. To see this, suppose $r\in R$ is any element. Since $f$ is a module morphism, we must have $f(r)=f(r\cdot 1_R)=rf(1_R)$. In other words, the image of $r$ is determined by $f(1_R)$. We now have our candidate for a map from $\operatorname{Hom}_R(R,M)\to M$, which we will now name $\operatorname{ev}_{1_R}$ map ("evaluate at $1_R$"). We claim this map is an $R$-module isomorphism.

First we show it is group morphism, so suppose $f,g\in \operatorname{Hom}_R(R,M)$. Then $\operatorname{ev}_{1_R}(f+g)=(f+g)(1_R)=f(1_R)+g(1_R)=\operatorname{ev}_{1_R}(f)+\operatorname{ev}_{1_R}(g)$, where the second equality holds by the definition of the group structure on $\operatorname{Hom}_R(R,M)$.

We next verify $\operatorname{ev}_{1_R}$ an $R$-module morphism. Take any $r\in R$ and $f\in \operatorname{Hom}_R(R,M)$, and observe that $\operatorname{ev}_{1_R}(rf)=(rf)(1_R)=r\cdot f(1_R) = r\cdot \operatorname{ev}_{1_R}(f)$, where the second equality holds by the definition of the $R$-action on $\operatorname{Hom}_R(R,M)$.

Finally, we verify $\operatorname{ev}_{1_R}$ is an isomorphism. We could check it is bijective, but I prefer to instead produce the inverse $R$-module morphism. To that end, define a map $g:M\to \operatorname{Hom}_R(R,M)$ as follows. For each element $m\in M$, let $f_m:R\to M$ be the map defined by $f_m(r)=rm$.  Note that $f_m(1_R)=1_R\cdot m = m$, as one would hope. Also observe that $f_m$ is indeed an $R$-module morphism, since $f_m(r+s)=(r+s)m = rm+sm=f_m(r)+f_m(s)$ and $f_m(sr)=(sr)m=s(rm)=s f_m(r)$. We have therefore indeed defined a set map $g:M\to \operatorname{Hom}_R(R,M)$. This map is a group morphism since $f_{m_1+m_2}(r)=r(m_1+m_2)=rm_1+rm_2 = f_{m_1}(r)+f_{m_2}(r)$, i.e., $g(m_1+m_2)=g(m_1)+g(m_2)$. This map is an $R$-module morphism since $f_{sm}(r) = r(sm)=(rs)m = (sr)m =s(rm) = s\cdot f_m(r)$, i.e., $g(sm)=s\cdot g(m)$. (Note that we used the commutativity of $R$ for the third equality.) Lastly, this $R$-module morphism $g$ is indeed inverse to $\operatorname{ev}_{1_R}$, since $(\operatorname{ev}_{1_R}\circ g)(m)=\operatorname{ev}_{1_R}\circ f_m = f_m(1_R)=1_R\cdot m = m$, i.e., $\operatorname{ev}_{1_R}\circ g$ is the identity module morphism on $R$. (You can also verify that $g\circ \operatorname{ev}_{1_R}$ is the identity module morphism on $\operatorname{Hom}_R(R,M)$).

Curious about the bonus challenge? Naturality in this case means that for every $R$-module morphism $g:M\to N$ we should have a commutative diagram as below:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG9wZXJhdG9ybmFtZXtIb219X1IoUixNKSJdLFswLDEsIlxcb3BlcmF0b3JuYW1le0hvbX1fUihSLE4pIl0sWzEsMCwiTSJdLFsxLDEsIk4iXSxbMiwzLCJnIl0sWzAsMSwiZ1xcY2lyYyAtIiwyXSxbMCwyLCJcXG9wZXJhdG9ybmFtZXtldn1fezFfUn0iXSxbMSwzLCJcXG9wZXJhdG9ybmFtZXtldn1fezFfUn0iLDJdXQ==&embed" width="200" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Chasing the diagram around, suppose we have an element in the module on the top left, i.e., an $R$-module morphism $f:R\to M$. Going over and down gives $g(f(1_R))$, while going down and then over gives $(g\circ f)(1_R)$, which by the definition of function composition does indeed agree with $g(f(1_R))$. So we have indeed defined a natural isomorphism.

</div></div>


---

## Problem 7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/hom-r-r-is-r/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Suppose $R$ is a commutative ring. Prove that $\operatorname{Hom}_R(R,R)$ and $R$ are isomorphic as rings.

</div></div>


> [!summary]- Solution
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Solution
[[10-19 Teaching/11 Classes/MATH 561 - Graduate Algebra/Exercise Solutions/Private/Hom(R,M) is M - Solution\|We know]] that when $R$ is a commutative ring and $M$ is an $R$-module, the set $\operatorname{Hom}_R(R,M)$ is an $R$-module and is isomorphic to $M$. So we already know that in the special case $M=R$ (when $R$ is a viewed as an $R$-module) the map $\operatorname{ev}_{1_R}:\operatorname{Hom}_R(R,R)\to R$ is an $R$-module isomorphism. We thus only need to verify it's actually a ring morphism. To see that, suppose $f_1,f_2\in\operatorname{Hom}_R(R,R)$ and recall that the product in the ring $\operatorname{Hom}_R(R,R)$ is given by composition (or $R$-module morphisms). Then note that

$\operatorname{ev}_{1_R}(f_1\cdot f_2)=(f_1\cdot f_2)(1_R)=f_1(f_2(1_R)).$
Let $r'=f_2(1_R)\in R$. Since $f_1$ is an $R$-module morphism, we must have $f_1(r')=r'\cdot f_1(1_R) = r'\cdot \operatorname{ev}_{1_R}(f_1)$. Since $r'=f_2(1_R)=\operatorname{ev}_{1_R}(f_2)$, the above equality becomes

$\operatorname{ev}_{1_R}(f_1\cdot f_2) = \operatorname{ev}_{1_R}(f_2)\operatorname{ev}_{1_R}(f_1).$
The right-hand side of the above equality is a product in the commutative ring $R$, so that commutativity allows us to conclude

$\operatorname{ev}_{1_R}(f_1\cdot f_2)=\operatorname{ev}_{1_R}(f_1)\operatorname{ev}_{1_R}(f_2).$


</div></div>
