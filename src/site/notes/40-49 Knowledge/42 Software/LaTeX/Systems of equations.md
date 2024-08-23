---
{"dg-publish":true,"permalink":"/40-49-knowledge/42-software/la-te-x/systems-of-equations/","tags":["latex"],"updated":"2024-08-06T14:56:49-07:00"}
---

A handy package for easily typesetting systems of equations is **systeme**. Load the package with the following commands:

```
\usepackage{systeme} % For easily aligning systems of equations
    \sysdelim.. % To get rid of the left brace that is there by default
```

Here is an example illustrating the basic syntax:

```
    Find all solutions to the following linear system:
    \[
        \systeme{x-y+z=0, y+2z=-2, x+y-z=2}.
    \]
```

This will produce the following:

![systems_of_equations.png|300](/img/user/00-09%20Meta/01%20Images/Misc/systems_of_equations.png)

Note that this won't work in Obsidian (without doing some sneaky stuff to load additional LaTeX packages, which I haven't yet investigated).