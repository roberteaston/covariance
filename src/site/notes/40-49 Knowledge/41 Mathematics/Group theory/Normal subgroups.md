---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/group-theory/normal-subgroups/","tags":["group_theory"],"updated":"2025-03-31T07:25:12-07:00"}
---

## Equivalent definitions
---

## Existence of normal subgroups
---

For any group $G$:
- The center $\operatorname{Z}(G)$ is always normal in $G$; it is proper exactly when $G$ is nonabelian.
- If there is a positive integer $d$ such that $G$ has exactly one subgroup of order $d$, then that subgroup must be normal; in fact, it must be characteristic.

For any finite group $G$:
- Any subgroup with index equal to the smallest prime divisor of $|G|$ is normal. In other words, if the smallest prime divisor of $|$G| is $p$, then any subgroup $H\leq G$ with $[G:H]=p$ is normal. Such a subgroup is always proper; it is nontrivial exactly when $|G|>p$.
	- Special case: Any subgroup of index 2 is always normal. (Of course, this is only possible in a group of even order.)
- Let $p$ be any prime divisor of $|$G|, and write $|G|=p^m d$ with $\gcd(d,p)=1$. Then the Sylow $p$-subgroups of $G$ are the subgroups of order $p^m$. Let $n_p$ denote the number of such subgroups. The Sylow Theorem guarantees that:
	- $n_p\geq 1$, i.e., there exists at least one Sylow $p$-subgroup
	- $n_p$ divides $d$
	- $n_p\equiv 1\pmod{p}$
	- The Sylow $p$-subgroups are all conjugate to each other
	Note that if $n_p=1$ then the unique Sylow $p$-subgroup is normal (characteristic, even); if $n_p>1$ then the Sylow $p$-subgroups are not normal. Also note that Sylow $p$-subgroups are always nontrivial, and they are proper unless $d=1$, i.e., $G$ is a $p$-group itself.