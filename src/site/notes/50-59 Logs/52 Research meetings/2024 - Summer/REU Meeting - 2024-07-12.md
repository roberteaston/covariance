---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2024-summer/reu-meeting-2024-07-12/","updated":"2024-08-06T14:10:49-07:00"}
---

This following is a brief summary of our research meeting on 2024-07-12.

## What happened

- Aaron summarized the idea of the projective plane through the analogy with perspective lines.
- We then covered the general idea of **homogeneous coordinates** on ${\bf P}^2({\bf R})$ and the connection with lines through the origin in ${\bf R}^3$.
- We talked about how polynomials in $x, y, z$ no longer define functions on ${\bf P}^2({\bf R})$ due to the fact that the point $[a,b,c]$ really corresponds to an equivalence class of points, namely all points of the form $(\lambda a,\lambda b,\lambda c)\in {\bf R}^3$.
- We noted that if $f(x,y,z)$ is **homogeneous** then $f(\lambda x,\lambda y, \lambda z)=\lambda^d f(x,y,z)$. We still can't evaluate $f$ at a point $[a,b,c]\in {\bf P}^2({\bf R})$, but we *can* ask whether $f(a,b,c)=0$ for such a point. In other words, we can still talk about zero sets of homogeneous polynomials.
- We noted that a **line** in ${\bf P}^2({\bf R})$ is a curve given by a homogeneous linear equation $Ax+By+Cz=0$.
- We talked about **affine charts** in ${\bf P}^2({\bf R})$, which are open subsets that "look like" (i.e., are isomorphic to) ${\bf R}^2$.
- We talked about the process of **homogenization**, whereby we convert any polynomial $f(x,y)$ into a homogeneous polynomial $\tilde{f}(x,y,z)$; we can recover the original function $f(x,y)$ using $\tilde{f}(x,y,1)$.
- We then looked at a Exercises 4 and 5 in Section 8.1, wherein we started with an affine curve given by an equation $f(x,y)=0$, then homogenized to get a curve $\tilde{f}(x,y,z)=0$ in ${\bf P}^2({\bf R})$, and then finally looked at the restriction of that projective curve to each of the three coordinate charts (by setting either $x=1$, $y=1$, or $z=1$).
- We talked a little bit about the duality between points and lines in ${\bf P}^2$, following Exercise 11 in Section 8.1.

# Tasks for next meeting

- Read the first section (i.e., first three pages) of [this paper](https://cpslo-my.sharepoint.com/:b:/g/personal/rweaston_calpoly_edu/EQ4NAss4etlOmWnkXkyJIDcB8mNO4it9xyQstF5BDQM4Bg?e=ZK5S55). It's a senior project by former Cal Poly student Kathryn Burton, who made the first investigations into a tropical version of the duality map for projective plane conics. In her first section she reviews (without proofs!) the classical result and several different formulations/proofs.
- Investigate the classical duality map for [[40-49 Knowledge/41 Mathematics/Algebraic geometry/Examples of classical conic duality\|some specific projective plane conics]], to see how all of the formulations come together.