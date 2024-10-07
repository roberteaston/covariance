---
{"dg-publish":true,"permalink":"/10-19-teaching/11-classes/math-561-graduate-algebra/exercises/equalizers-and-coequalizers-of-matrices/","updated":"2024-10-07T13:01:58-07:00"}
---

Suppose $F$ is a field and $A, B$ are two $m\times n$ matrices with entries in $F$. Recall that in the category $\textbf{Matr}_F$ these matrices correspond to two arrows $n\to m$.
1. Describe the [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples#Equalizers\|equalizer]] of $A, B:n\to m$ in $\textbf{Matr}_F$.
2. Describe the [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Universal Properties I - Inspiring Examples#Coequalizers\|coequalizer]] of $A, B:n\to m$ in $\textbf{Matr}_F$.

>[!summary]- Hints
>First show that the equalizer should be a matrix $E$ with $n$ rows such that $AE=BE$, such that for every other matrix $C$ with $n$ rows and $AC=BC$ there exists a unique factorization $C=EH$. Then investigate what you can say about the columns of a matrix $C$ that satisfies $AC=BC$. Show that this condition is equivalent to the condition that every column of $C$ is contained in the null space of $A-B$. Now suppose $\{{\bf e}_1,\ldots, {\bf e}_k\}$ is a basis for the null space of $A-B$. To say ${\bf c}_i$ is contained in the null space of $A-B$ then means there is a unique $F$-linear combination with ${\bf c}_i = h_{1,i}{\bf e}_1+\cdots h_{k,i}{\bf e}_k$. The matrix $C$ should reveal to be related to the matrix $E$ By way a matrix $H$ ...