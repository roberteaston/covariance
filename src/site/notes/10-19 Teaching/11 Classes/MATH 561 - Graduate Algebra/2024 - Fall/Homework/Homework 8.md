---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/2024-fall/homework/homework-8/","updated":"2024-12-03T13:34:57-08:00"}
---

*Update 11/22/2024:*
- In Problem 4, computing the change-of-basis matrix for the Jordan canonical form is now optional.
## Problem 1


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Consider the two matrices
$A=\begin{bmatrix} 0 & -4 & 85 \\ 1 & 4 & -30 \\ 0 & 0 & 3\end{bmatrix},\quad B=\begin{bmatrix} 2 &  2 & 1 \\ 0 & 2 & -1 \\ 0 & 0 & 3\end{bmatrix}.$
1. Show that $A$ and $B$ have the same characteristic polynomial, namely $c_A(x)=c_B(x)=(x-2)^2(x-3)$.
2. Show that $(A-2I)(A-3I)\neq 0$ and $(B-2I)(B-3I)\neq 0$, and conclude that $A$ and $B$ have the same minimal polynomial, namely $m_A(x)=m_B(x)=(x-2)^2(x-3)$.
3. Show that $A$ and $B$ have the same invariant factor(s) and hence same rational canonical form. Write down their shared rational canonical form matrix.

</div></div>


> [!summary]- Solution
> 1. We could compute the Smith normal form for each matrix and discover that they have the same Smith normal form. This would let us conclude that $A$ and $B$ have the same invariant factors, hence the same minimal polynomial, characteristic polynomial and rational canonical form. However, this problem is about proving those last three facts without computing invariant facto
>    
>    So instead we directly compute characteristic polynomials using determinants. We first compute
>    
>    $\begin{align*} c_A(x)&=\det(xI_3-A)\\ &=\begin{vmatrix}x & 4 & -85 \\ -1 & x-4 & 30 \\ 0 & 0 & x-3\end{vmatrix}\\ &=(x-3)\begin{vmatrix}x & 4 \\ -1 & x-4\end{vmatrix}\\ &=(x-3)(x^2-4x+4)\\ &=(x-3)(x-2)^2, \end{align*}$
>    
>    and similarly
>    
>    $\begin{align*} c_B(x)&=\det(xI_3-B)\\ &= \begin{vmatrix}x-2 & -2 & -1 \\ 0 & x-2 & 1 \\ 0 & 0 & x-3\end{vmatrix}\\ &= (x-2)(x-2)(x-3).\end{align*}$
>    
> 2. The minimal polynomial of $A$ needs to divide the characteristic polynomial and have the same roots. Since the characteristic polynomial of $A$ is$c_A(x)=(x-2)^2(x-3)$, this leaves only two possibilities: either $m_A(x)=(x-2)(x-3)$ or $m_A(x)=(x-2)^2(x-3)$. To determine which it is, we compute
>    
>    $\begin{align*} (A-2I)(A-3I)&=\begin{bmatrix} -2 & -4 & 85 \\ 1 & 2 & -30 \\ 0 & 0 & 1\end{bmatrix}\begin{bmatrix}-3 & -4 & 85 \\ 1 & 1 & -30 \\ 0 & 0 & 0\end{bmatrix}\\ &=\begin{bmatrix}2 & 4 & -50 \\ -1 & -2 & 25 \\ 0 & 0 & 0\end{bmatrix}\end{align*}$
>    
>    Since $(A-2I)(A-3I)\neq 0$ we have $m_A(x)\neq (x-2)(x-3)$ and so (by our above discussion) $m_A(x)=(x-2)^2(x-3)$.
>    
>    Since $B$ has the same characteristic polynomial as $A$, the same logic applies. We compute
>    
>    $\begin{align*} (B-2I)(B-3I)&= \begin{bmatrix}0 & 2 & 1 \\ 0 & 0 & -1 \\ 0 & 0 & 1\end{bmatrix}\begin{bmatrix}-1 & 2 & 1 \\ 0 & -1 & -1 \\ 0 & 0 & 0\end{bmatrix}\\ &= \begin{bmatrix} 0 & -2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0\end{bmatrix}\end{align*}$
>    
>    As above, the fact that $(B-2I)(B-3I)\neq 0$ is enough to conclude that $m_B(x)=(x-2)^2(x-3)$.
>    
> 3. For a $3\times 3$ matrix with minimal polynomial $m(x)=(x-2)^2(x-3)$ and characteristic polynomial $c(x)=m(x)$, the only possible list of invariant factor(s) is $a_1(x)=(x-2)^2(x-3)=x^3-7x^2+16x-12$. The corresponding rational canonical form matrix is
>    
>    $R=\begin{bmatrix}0 & 0 & 12 \\ 1 & 0 & -16 \\ 0 & 1 & 7\end{bmatrix}.$



</div></div>


---

## Problem 2


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




1. Suppose $A$ and $B$ are non-scalar $2\times 2$ matrices over a field $F$; i.e., neither $A$ nor $B$ is a scalar multiple of the identity matrix. Prove that $A$ and $B$ are similar if and only if they have the same characteristic polynomial.
2. Suppose $A$ and $B$ are $3\times 3$ matrices over a field $F$. Prove that $A$ and $B$ are similar if and only if they have the same characteristic and same minimal polynomials.
3. Give an example of a pair of $4\times 4$ matrices $A$ and $B$ that have the same characteristic and minimal polynomials but are not similar.

</div></div>


> [!summary]- Solution
> We first recall the following facts about invariant factors. For an $n\times n$ matrix $A$ over a field $F$, the invariant factors of $A$ are polynomials $a_1(x), a_2(x),\ldots, a_m(x)\in F[x]$ that satisfy the following properties:
> - Each is a monic nonconstant polynomial
> - Each $a_i(x)$ divides $a_{i+1}(x)$ in $F[x]$
> - The largest invariant factor is the minimal polynomial: $a_m(x)=m_A(x)$
> - The product of the invariant factors is the characteristic polynomial $c_A(x)$, which is degree $n$
>   
> Lastly, two $n\times n$ matrices over $F$ are similar if and only if they have the same lists of invariant factors. As a consequence, if $A$ and $B$ are similar then they always have the same minimal and characteristic polynomials.
>  
> 1. Suppose $A$ is any $2\times 2$ matrix over a field $F$. The minimal polynomial $m_A(x)$ is at least degree 1 but at most degree 2 (since it divides the characteristic polynomial $c_A(x)$, which is degree 2). If $m_A(x)$ is degree 1, then $A$ must have exactly two invariant factors $a_1(x)$ and $a_2(x)=m_A(x)$ which must both be linear. Since $a_1(x)$ divides $a_2(x)$, we must in fact have $a_1(x)=a_2(x)=m(x)=x-\lambda$. Then the rational canonical form of $A$ is
>    
>    $D=\begin{bmatrix} \lambda & 0 \\ 0 & \lambda\end{bmatrix}=\lambda I_2.$
>    
>    Since such scalar matrices commute with all $2\times 2$ matrices under product, they are fixed by conjugation; i.e., $PDP^{-1}=D$ for every invertible $2\times 2$ matrix $P$. But $A$ is similar to $D$, so this implies we must actually have $A=D$; i.e., $A$ is a scalar matrix.
>    
>    So, if $A$ is not a scalar matrix then its minimal polynomial $m_A(x)$ must be quadratic and so must equal its characteristic polynomial. The matrix $A$ thus has exactly one invariant factor, namely $a_1(x)=m(x)=c(x)$. It now follows that if $A$ and $B$ are two non-scalar matrices with the same characteristic polynomial, then they have the same (single) invariant factor and hence are similar.
>    
> 2. Suppose $A$ and $B$ have the same minimal and characteristic polynomials. We consider cases according to the degree of their shared minimal polynomial $m(x)$.
>    - If $m(x)$ is degree 3, then we must have $m(x)=c(x)$ and so both matrices have the same single invariant factor $a_1(x)=m(x)=c(x)$. They are therefore similar.
>    - If $m(x)$ is degree 2, then both $A$ and $B$ must have exactly two invariant factors, say  $a_1(x)$ and $a_2(x)=m(x)$ for the matrix $A$ and $b_1(x)$ and $b_2(x)=m(x)$ for $B$. But we also have $a_1(x)m(x)=c(x)$ and similarly $b_1(x)m(x)=c(x)$, hence by cancellation (of the nonzero element $m(x)$ in the integral domain $F[x]$) we must have $a_1(x)=b_1(x)$. Thus, $A$ and $B$ have the same two invariant factors and are therefore similar.
>    - If $m(x)$ is degree 1, then $A$ and $B$ both have the three invariant factors $a_1(x)=a_2(x)=a_3(x)=m(x)$. Thus, $A$ and $B$ have the same invariant factors and hence are similar.
>
> 3. There are many examples. For a specific example, let $A$ be a matrix that has invariant factors $a_1(x)=x-1$, $a_2(x)=x-1$, and $a_3(x)=(x-1)^2$, and let $B$ be a matrix with invariant factors $b_1(x)=(x-1)^2$ and $b_2(x)=(x-1)^2$. Then $A$ and $B$ both have minimal polynomial $m(x)=(x-1)^2$ and characteristic polynomial $c(x)=(x-1)^4$, but $A$ and $B$ are not similar (since they have different lists of invariant factors). Two such matrices (already in rational canonical form!) are
>    
>    $A=\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 &  -2 \\ 0 & 0 & 1 & 2\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix} 0 & -2 & 0 & 0 \\ 1 & 2 & 0 & 0 \\ 0 & 0 & 0 & -2 \\ 0 & 0 & 1 & 2\end{bmatrix}.$
  

</div></div>


---

## Problem 3


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Let $A$ be a $3\times 3$ matrix over the field ${\bf Q}$.
1. Show that $A^6 = I_3$ if and only if the minimal polynomial of $A$ divides $x^6-1$ in ${\bf Q}[x]$.
2. The irreducible factorization of $x^6-1$ in ${\bf Q}[x]$ is
   $x^6-1 = (x-1)(x+1)(x^2-x+1)(x^2+x+1).$
   Show that if $A^6=I_3$ then there are at most nine possibilities for the minimal polynomial of $A$.
3. Continuing part (2), show that there are exactly eight possible lists of invariant factors for such a matrix $A$.
4. Use part (3) to write down all elements of order 1, 2, 3, and 6 in the group $\operatorname{GL}_3({\bf Q})$, up to similarity.

</div></div>


> [!summary]- Solution
> 1. Recall that the matrix $A$ endows ${\bf Q}^3$ with the structure of a ${\bf Q}[x]$-module, where $x$ acts as multiplication by $A$ (when using the standard basis for ${\bf Q}^3$). The minimal polynomial $m_A(x)$ is the monic generator for the annihilator $I_A$ of the torsion ${\bf Q}[x]$-module ${\bf Q}^3$. Now observe that $A^6 = I_3$ if and only if $A^6-I_3=0_3$, which in turn is true if and only if $x^6-1$ is in the annihilator $I_A=(m_A(x))$; i.e., if and only if $m_A(x)$ divides $x^6-1$ in ${\bf Q}[x]$.
>    
> 2. By part (1), the polynomial $m_A(x)$ is a nonconstant monic factor of $x^6-1$. It is also at most a cubic, since it divides the characteristic polynomial $c_A(x)$ (which is a cubic). In light of the irreducible factorization of $x^6-1$ in ${\bf Q}[x]$, the only possibilities are therefore
>  - $m_A(x)=x-1$
>  - $m_A(x)=x+1$
>  - $m_A(x)=x^2-x+1$
>  - $m_A(x)=x^2+x+1$
>  - $m_A(x)=(x-1)(x+1)$
>  - $m_A(x)=(x-1)(x^2-x+1)$
>  - $m_A(x)=(x-1)(x^2+x+1)$
>  - $m_A(x)=(x+1)(x^2-x+1)$
>  - $m_A(x)=(x+1)(x^2+x+1)$
>   
> 3. There are at most three invariant factors $a_1(x)$, $a_2(x)$, $a_3(x)$, each must divide the next, each is nonconstant and monic, the largest is $m_A(x)$, and their product is the cubic $c_A(x)$. We run through the nine possibilities in part (2) and for each give the possible invariant factors:
> - If $m_A(x)=x-1$, then the only possible list of invariant factors is
>   
>  $x-1,x-1,x-1$
>  
> - If $m_A(x)=x+1$, then the only possible list of invariant factors is
>   
>   $x+1,x+1,x+1$
>   
> - If $m_A(x)=x^2-x+1$, there is no possible list of invariant factors. Thus this situation cannot occur.
> - If $m_A(x)=x^2+x+1$, there is no possible list of invariant factors. Thus this situation cannot occur.
> - If $m_A(x)=(x-1)(x+1)$, then there are two possible lists of invariant factors:
>   
>   $x-1, (x-1)(x+1)\quad\text{or}\quad x+1, (x+1)(x-1)$
>   
> - In each of the last four possibilities (for which $m_A(x)$ is cubic), there is exactly one possible list of invariant factors, namely the single invariant factor $a_1(x)=m_A(x)$.
>   
> 4. We can simply give the rational canonical form matrix for each possible list of invariant factors listed above.
>  - The list $x-1,x-1,x-1$ corresponds to the identity matrix $I_3$, the only element of order 1.
>  - The second list $x+1,x+1,x+1$ corresponds to the matrix $-I_3$, an element of order 2.
>  - The third list $x-1, (x-1)(x+1)=x^2-1$ corresponds to the matrix of order 2 below
>    
>   $A=\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0\end{bmatrix}.$
>    
> - The fourth list $x+1, (x+1)(x-1)=x^2-1$ corresponds to the matrix of order 2 below
>   
>  $B=\begin{bmatrix}-1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0\end{bmatrix}$
>  
> - The fifth list $(x-1)(x^2-x+1)=x^3-2x^2+2x-1$ corresponds to the matrix of order 6 below
>   
>  $C=\begin{bmatrix}0 & 0 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & 2\end{bmatrix}.$
>  
> - The sixth list $(x-1)(x^2+x+1)=x^3-1$ corresponds to the matrix of order 3 below
>   
>  $D=\begin{bmatrix}0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0\end{bmatrix}.$
>  
> - The seventh list $(x+1)(x^2-x+1)=x^3+1$ corresponds to the matrix of order 6 below
>   
>  $E=\begin{bmatrix}0 & 0 & -1 \\ 1 & 0 & 0 \\ 0 & 1 & 0\end{bmatrix}.$
>  
> - The eighth list $(x+1)(x^2+x+1)=x^3+2x^2+2x+1$ corresponds to the matrix of order 6 below
>   
>  $F=\begin{bmatrix}0 & 0 & -1 \\ 1 & 0 & -2 \\ 0 & 1 & -2\end{bmatrix}.$



</div></div>


---

## Problem 4


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/rational-and-jordan-canonical-forms/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




Let $A$ be the $4\times 4$ matrix

$A=\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ -2 & -2 & 0 & 1 \\ -2 & 0 & -1 & -2\end{bmatrix}.$

1. Show that the invariant factors of $A$ are $a_1(x)=x-1$, $a_2(x)=(x-1)(x+1)^2$.
2. Determine the rational canonical form $R$ of $A$ and find a change-of-basis matrix $P$ such that $P^{-1}AP=R$.
3. Determine the Jordan canonical form $J$ of $A$. (Optionally: find a change-of-basis matrix $Q$ such that $Q^{-1}AQ = J$.)

</div></div>


> [!summary]- Solution
> 1. We use the standard algorithm, beginning with the matrix $xI_4-A$ and using the standard row/column operations to transform that matrix into Smith Normal Form. The matrix we begin with is
>    
>    $xI_4-A=\begin{bmatrix}x-1 & 0 & 0 & 0 \\ 0 & x-1 & 0 & 0 \\ 2 & 2 & x & -1 \\ 2 & 0 & 1 & x+2\end{bmatrix}$
>    
>    There are many ways to use the three elementary row and column operations to transform this matrix into Smith Normal Form. One such sequence is the following:
>    - $C_1\leftrightarrow C_3$
>    - $R_1\leftrightarrow R_4$
>    - $R_3-xR_1\mapsto R_3$
>    - $C_3-2C_1\mapsto C_3$
>    - $C_4-(x+2)C_1\mapsto C_4$
>    - $R_2\leftrightarrow R_3$
>    - $\frac{1}{2}C_2$
>    - $R_3-(\frac{1}{2}x-\frac{1}{2})R_2\mapsto R_3$
>    - $C_3+(2x-2)C_2\mapsto C_3$
>    - $C_4+(x^2+2x+1)C_2\mapsto C_4$
>    - $R_3\leftrightarrow R_4$
>    - $R_4-(x-1)R_3\mapsto R_4$
>    - $2C_4$
>    
>    This leads to the Smith Normal Form matrix
>    
>    $\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & x-1 & 0 \\ 0 & 0 & 0 & (x-1)(x+1)^2\end{bmatrix}.$
>    
>    It follows that the invariant factors of $A$ are $a_1(x)=x-1$ and $a_2(x)=(x-1)(x+1)^2=x^3+x^2-x-1$.
>    
> 2. From the invariant factors of $A$, we can immediately deduce that the rational canonical form of $A$ is
>    
>    $R = \begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1\\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & -1\end{bmatrix}.$
>    
>    To find a change-of-basis matrix $P$, we first compute an auxiliary matrix $P'$. Beginning with the identity matrix $I_4$, we perform the following column operations (based on the row operations we used to compute the Smith Normal Form):
>    - $C_4\leftrightarrow C_1$
>    - $C_1+AC_3\mapsto C_1$
>    - $C_3\leftrightarrow C_2$
>    - $C_2+(\frac{1}{2}A-\frac{1}{2}I_4)C_3\mapsto C_2$- $C_4\leftrightarrow C_3$
>    - $C_3+(A-I_4)C_4\mapsto C_3$
>    
>    These column operations ultimately lead to the matrix
>    
>    $P'=\begin{bmatrix}0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & -2 & 0 \\ 0 & 0 & 0 & 0\end{bmatrix}$
>    
>    > [!warning] Warning
>    > This auxiliary matrix $P'$ is not quite unique. The nonzero columns of $P'$ correspond to ${\bf Q}[x]$-module generators of the invariant summands. Those summands are cyclic as ${\bf Q}[x]$-modules, but the generators for those summands are only unique up to scaling by units.
>    > 
>    > In particular, different sequences of elementary row/column operations (when computing the Smith Normal Form) can lead to slightly different auxiliary matrices. This will lead, in turn, to slightly different change-of-basis matrices. This is exactly the same situation that occurs when diagonalizing a (diagonalizable) matrix: each eigenbasis provides a suitable change-of-basis, but there is no unique eigenbasis.
>
>    For our change-of-basis matrix $P$, we then take the first column as
>    
>    ${\bf p}_1={\bf p}'_1=\begin{bmatrix} 1 \\ 0 \\ -2 \\ 0\end{bmatrix}$
>    
>    and the next three columns as
>    
>    $\begin{align*} {\bf p}_2&={\bf p}'_2=\begin{bmatrix} 0 \\ 1 \\ 0 \\ 0\end{bmatrix}\\ {\bf p}_3&=A{\bf p}'_2=\begin{bmatrix}0 \\ 1 \\ -2 \\ 0\end{bmatrix}\\ {\bf p}_4&= A^2{\bf p}'_2 = A{\bf p}_3 =\begin{bmatrix} 0 \\ 1 \\ -2 \\ 2\end{bmatrix} \end{align*}$
>    
>    In other words, our desired change-of-basis matrix is
>    
>    $P=\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 1 \\ -2 & 0 & -2 & -2 \\ 0 & 0 & 0 & 2\end{bmatrix}$
>    
>    For reference, once can compute
>    
>    $P^{-1}=\begin{bmatrix}1 & 0 & 0 & 0 \\ 1 & 1 & \frac{1}{2} & 0 \\ -1 & 0 & -\frac{1}{2} & -\frac{1}{2} \\ 0 & 0 & 0 & \frac{1}{2}\end{bmatrix}$
>    
>    and verify $P^{-1}AP=R$.
>    
> 3. The invariant factors of $A$ are $a_1(x)=x-1$ and $a_2(x)=(x-1)(x+1)^2$, so the elementary divisors of $A$ are $e_1(x)=x-1$, $e_2(x)=x-1$, and $e_3(x)=(x+1)^2$. Listed in this order, the Jordan canonical form for $A$ is therefore
>    
>    $J=\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & -1 & 1 \\ 0 & 0 & 0 & -1\end{bmatrix}.$
>    
>    Moreover, we can use our auxiliary matrix $P'$ to find a change-of-basis matrix $Q$^[Once again heed the warning about non-uniqueness of $P'$ and $Q$]. The first column of $Q$ (which corresponds to the first Jordan block) is
>    
>    ${\bf q}_1=\frac{a_1(x)}{x-1}\cdot {\bf p}'_1={\bf p}'_1=\begin{bmatrix} 1 \\ 0 \\ -2 \\0\end{bmatrix}.$
>    
>    The second column of $Q$ (which corresponds to the second Jordan block) is
>    
>    ${\bf q}_2=\frac{a_2(x)}{x-1}\cdot {\bf p}'_2=(x+1)^2\cdot {\bf p}'_2=(A+I)^2\begin{bmatrix}0 \\ 1 \\ 0 \\ 0\end{bmatrix}=\begin{bmatrix} 0 \\ 4 \\ -6 \\ 2\end{bmatrix},$
>    
>    where we did a little side calculation to compute that last vector. Finally, the last two columns of $Q$ (which correspond to the third Jordan block) are given by
>    
>    $\begin{align*} {\bf q}_3&=\frac{a_2(x)}{x+1}\cdot {\bf p}'_2=(x-1)(x+1)\cdot {\bf p}'_2=(A-I)(A+I)\begin{bmatrix}0 \\ 1\\ 0 \\ 0\end{bmatrix}=\begin{bmatrix} 0 \\ 0 \\ -2 \\ 2\end{bmatrix}\\ {\bf q}_4&=\frac{a_2(x)}{(x+1)^2}\cdot {\bf p}'_2=(x-1)\cdot {\bf p}'_2=(A-I)\begin{bmatrix}0 \\ 1\\ 0 \\ 0\end{bmatrix}=\begin{bmatrix} 0 \\ 0 \\ -2 \\ 0\end{bmatrix}\end{align*}$
>    
>    Thus, our desired change-of-basis matrix is
>    
>    $Q=\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 4 & 0 & 0 \\ -2  & -6 & -2 & -2 \\ 0 & 2 & 2 & 0\end{bmatrix}$
>    
>    For reference, the inverse of this matrix is
>    
>    $Q^{-1}=\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & \frac{1}{4} & 0 & 0 \\ 0 & -\frac{1}{4} & 0 & \frac{1}{2} \\ -1 & -\frac{1}{2} & -\frac{1}{2} & -\frac{1}{2}\end{bmatrix}$
>    
>    and one can verify $Q^{-1}AQ = J$.



</div></div>


---

## Problem 5


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Find all possible Jordan canonical forms of $5\times 5$ matrices over ${\bf Q}$ with characteristic polynomial $c(x)=(x-3)^2(x-2)^3$.

</div></div>


> [!summary]- Solution
> The minimal polynomial $m(x)$ contains all of the roots of the characteristic polynomial (and divides $c(x)$), so it must be of the form $m(x)=(x-3)^m(x-2)^n$ where $m=1,2$ and $n=1,2,3$.  There are six possibilities and we consider each in turn.
> 
> If $m(x)=(x-3)(x-2)$, then the list of invariant factors must be $a_1(x)=x-2$, $a_2(x)=(x-3)(x-2)$, $a_3(x)=(x-3)(x-2)$. The elementary divisors are then $x-2, x-3, x-2, x-3, x-2$. The corresponding matrix in Jordan canonical form is
> 
> $J_1 = \begin{bmatrix} 2 & 0 & 0 & 0 & 0 \\ 0 & 3 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 3 & 0 \\ 0 & 0 & 0 & 0 & 2\\ \end{bmatrix}$
> 
> If $m(x)=(x-3)(x-2)^2$, then the invariant factor list must be $a_1(x)=(x-3)(x-2)$, $a_2(x)=(x-3)(x-2)^2$. The elementary divisors are then $x-3, x-2, x-3, (x-2)^2$. The corresponding matrix in Jordan canonical form is
> 
> $J_2 = \begin{bmatrix} 3 & 0 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 & 0 \\ 0 & 0 & 3 & 0 & 0 \\ 0 & 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 0 & 2\\ \end{bmatrix}$
> 
> If $m(x)=(x-3)(x-2)^3$, then the invariant factor list must be $a_1(x)=x-3$, $a_2(x)=(x-3)(x-2)^3$. The elementary divisors are then $x-3, x-3, (x-2)^3$. The corresponding matrix in Jordan canonical form is
> 
> $J_3 = \begin{bmatrix} 3 & 0 & 0 & 0 & 0 \\ 0 & 3 & 0 & 0 & 0 \\ 0 & 0 & 2 & 1 & 0 \\ 0 & 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 0 & 2\\ \end{bmatrix}$
> 
> If $m(x)=(x-3)^2(x-2)$, then the invariant factor list must be $a_1(x)=x-2$, $a_2(x)=x-2$, $a_3(x)=(x-3)^2(x-2)$. The elementary divisors are then $x-2,x-2,(x-3)^2,x-2$. The corresponding matrix in Jordan canonical form is
> 
> $J_4 = \begin{bmatrix} 2 & 0 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 & 0 \\ 0 & 0 & 3 & 1 & 0 \\ 0 & 0 & 0 & 3 & 0 \\ 0 & 0 & 0 & 0 & 2\\ \end{bmatrix}$
> 
> If $m(x)=(x-3)^2(x-2)^2$, then the invariant factor list must be $a_1(x)=x-2$, $a_2(x)=(x-3)^2(x-2)^2$. The elementary divisors are then $x-2, (x-3)^2, (x-2)^2$. The corresponding matrix in Jordan canonical form is
> 
> $J_5 = \begin{bmatrix} 2 & 0 & 0 & 0 & 0 \\ 0 & 3 & 1 & 0 & 0 \\ 0 & 0 & 3 & 0 & 0 \\ 0 & 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 0 & 2\\ \end{bmatrix}$
> 
> If $m(x)=(x-3)^3(x-2)^2$, then the invariant factor list must be $a_1(x)=(x-3)^2(x-2)^3$. The elementary divisors are then $(x-3)^2,(x-2)^3$. The corresponding matrix in Jordan canonical form is
> 
> $J_6 = \begin{bmatrix} 3 & 1 & 0 & 0 & 0 \\ 0 & 3 & 0 & 0 & 0 \\ 0 & 0 & 2 & 1 & 0 \\ 0 & 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 0 & 2\\ \end{bmatrix}$

</div></div>


---

## Problem 6


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Find all similarity classes of $6\times 6$ matrices over ${\bf C}$ with characteristic polynomial $c(x)=(x^2-1)(x^4-1)$.

</div></div>


> [!summary]- Solution
> First we factor the characteristic polynomial over ${\bf C}$, as $c(x)=(x-1)^2(x+1)^2(x-i)(x+i)$. The minimal polynomial $m(x)$ contains all of the roots of the characteristic polynomial (and divides $c(x)$), so there are only four possibilities for $m(x)$: it is either $(x-1)(x+1)(x-i)(x+i)$, or $(x-1)^2(x+1)(x-i)(x+i)$, or $(x-1)(x+1)^2(x-i)(x+i)$, or $(x-1)^2(x+1)^2(x-i)(x+i)$. We consider each in turn.
> 
> If $m(x)=(x-1)^2(x+1)^2(x-i)(x+i)$, then the list of invariant factors is $a_1(x)=(x-1)^2(x+1)^2(x-i)(x+i)=x^6-x^4-x^2+1$. The corresponding rational canonical form matrix is
> 
> $R_1=\begin{bmatrix} 0 & 0 & 0 & 0 & 0 & -1 \\ 1 & 0 & 0 & 0 & 0 & 0\\ 0 & 1 & 0 & 0 & 0 & 1\\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 0\end{bmatrix}$
> 
> If $m(x)=(x-1)(x+1)^2(x-i)(x+i)$, then the list of invariant factors is $a_1(x)=x-1$, $a_2(x)=(x-1)(x+1)^2(x-i)(x+i)=x^5+x^4-x-1$. The corresponding rational canonical form is
> 
> $R_2=\begin{bmatrix} 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1\\ 0 & 1 & 0 & 0 & 0 & 1\\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & -1\end{bmatrix}$
> 
> If $m(x)=(x-1)^2(x+1)(x-i)(x+i)$, then the list of invariant factors is $a_1(x)=x+1$, $a_2(x)=(x-1)^2(x+1)(x-i)(x+i)=x^5-x^4-x+1$. The corresponding rational canonical form is
> 
> $R_3=\begin{bmatrix} -1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & -1\\ 0 & 1 & 0 & 0 & 0 & 1\\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 1\end{bmatrix}$
> 
> If $m(x)=(x-1)(x+1)(x-i)(x+i)$, then the list of invariant factors is $a_1(x)=(x-1)(x+1)=x^2-1$, $a_2(x)=(x-1)(x+1)(x-i)(x+i)=x^4-1$. The corresponding rational canonical form is
> 
> $R_4=\begin{bmatrix} 0 & 1 & 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 & 0 & 1\\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 0\end{bmatrix}$
> 
> Thus in total there are exactly four possible lists of invariant factors. For each such list, the similarity class of matrices with that list of invariant factors is uniquely represented by the corresponding rational canonical form matrix.

</div></div>


---
## Problem 7


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




Find all similarity classes of $6\times 6$ matrices over ${\bf Q}$ with minimal polynomial $m(x)=(x-1)(x+2)^2$.

</div></div>


> [!summary]- Solution
> We consider the possible lists of invariant factors, keeping in mind that they must satisfy the following conditions:
> - Each is a monic nonconstant polynomial in ${\bf Q}[x]$
> - Each $a_i(x)$ divides $a_{i+1}(x)$ in ${\bf Q}[x]$
> - The largest invariant factor is the minimal polynomial: $a_k(x)=m(x)=(x-1)(x+2)^2$
> - The product of the invariant factors is the characteristic polynomial $c_A(x)$, which is degree $6$
> We first enumerate the nonconstant monic divisors of the minimal polynomial:
> 
> $x-1, x+2, (x-1)(x+2), (x+2)^2, (x-1)(x+2)^2.$
> 
> We can now enumerate the possible lists of invariant factors. We will organize the list in descending order on the degrees of the invariant factors, beginning from the second-largest factor.
> 
> If the second largest invariant factor has degree 3, then the invariant factors must be $a_1(x)=(x-1)(x+2)^2$, $a_2(x)=(x-1)(x+2)^2$. The corresponding rational canonical form matrix is^[For easy reference, note that $(x-1)(x+2)^2=x^3+3x^2-4$, $(x-1)(x+2)=x^2+x-2$, and $(x+2)^2=x^2+4x+4$.]
> 
> $R_1=\begin{bmatrix} 0 & 0 & 4 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 & 0\\ 0 & 1 &-3 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 &-3\end{bmatrix}$
> 
> If the second largest invariant factor has degree 2, then that invariant factor is either $(x-1)(x+2)$ or $(x+2)^2$.  The third largest invariant factor must then have degree 1, leading to the possibilities of either $x-1$ or $x+2$ in the first case, or only $x+2$ in the second case. Thus, in this scenario there are three possible lists of invariant factors, namely
> - $a_1(x)=x-1,\,a_2(x)=(x-1)(x+2),\,a_3(x)=(x-1)(x+2)^2$
> - $a_1(x)=x+2,\, a_2(x)=(x-1)(x+2),\, a_3(x)=(x-1)(x+2)^2$
> - $a_1(x)=x+2,\, a_2(x)=(x+2)^2,\, a_3(x)=(x-1)(x+2)^2$
> 
> The corresponding rational canonical form matrices are
> 
> $\begin{align*} R_2&= \begin{bmatrix} 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 & 0 \\ 0 & 1 & -1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & -3 \end{bmatrix}\\ R_3&= \begin{bmatrix} -2 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 & 0 \\ 0 & 1 & -1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & -3 \end{bmatrix}\\ R_4&= \begin{bmatrix} -2 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & -4 & 0 & 0 & 0 \\ 0 & 1 & -4 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & -3 \end{bmatrix}\\\end{align*}$
> 
> If the second largest invariant factor has degree 1, then that factor is either $x-1$ or $x+2$. Moreover, there must be two additional invariant factors that are also degree 1, which can only be either both $x-1$ (in the first cast), or both $x+2$ (in the second case). Thus, in this scenario there are two possible lists of invariant factors, namely
> - $a_1(x)=x-1,\, a_2(x)=x-1,\, a_3(x)=x-1,\, a_4(x)=(x-1)(x+2)^2$
> - $a_1(x)=x+2,\, a_2(x)=x+2,\, a_3(x)=x+2,\, a_4(x)=(x-1)(x+2)^2$
> 
> The corresponding rational canonical form matrices are
> 
> $\begin{align*} R_5&= \begin{bmatrix} 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & -3 \end{bmatrix}\\ R_6&= \begin{bmatrix} -2 & 0 & 0 & 0 & 0 & 0 \\ 0 & -2 & 0 & 0 & 0 & 0 \\ 0 & 0 & -2 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & -3 \end{bmatrix}\end{align*}$
> 
> Thus in total there are exactly six possible lists of invariant factors. For each such list, the similarity class of matrices with that list of invariant factors is uniquely represented by the corresponding rational canonical form matrix.


</div></div>
