---
{"dg-publish":true,"permalink":"/50-59-logs/52-research-meetings/2024-summer/reu-meeting-2024-07-30/","updated":"2024-08-06T14:11:48-07:00"}
---

This following is a brief summary of our research meeting on 2024-07-30.

## Summary of discoveries

- Aaron walked through an exploration how how the location of a vertex of a tropical line (in the plane) is related to the tropical linear polynomial whose bend locus produces that line. He ultimately found that if the vertex were located at $(s,t)$ in the (affine) tropical plane, then the tropical line was the bend locus of $f(x,y)=((u-s)\odot x)\oplus ((u-t\odot y)\oplus u$, where $u$ was a free variable.^[Note that this free variable is unavoidable, since adding a constant to all of the coefficients doesn't change the bend locus.] In particular, if we take $u=0$, then the tropical line is the bend locus of $f(x,y)=(-s\odot x)\oplus (-t\odot y)\oplus 0$. It follows that the point in the dual plane corresponding to that tropical line is $[-s:-t:0]$. This is how that Desmos page is currently coded, where you can drag around a point (the vertex) and behind the scenes Desmos plots both the corresponding bend locus as well as the dual point corresponding to that tropical line.
- Nicholas then sketched out a tropical bend conic (of type $B_1$), along with a locus of the dual points of lines that should probably be considered tangent to the bend conic. That dual locus included a shaded region, suggesting that the region is actually a congruence variety (and not simply a bend locus). Ben gave precise values for a tropical polynomial whose bend locus would outline the proposed dual region. (I'll start uploading sketches/images of all of these examples soon.)

## Questions

- Do we believe tropical lines that intersect the conic along an entire edge should count as tangent?
- Do we think the "dual" should be a bend locus, or a congruence variety?
- Can we find tropical equation that defines the proposed dual region as a congruence variety?
- Can we find a pattern to the equations that define the dual region, in terms of the coefficients of the given bend conic?
- What might it mean to start with the shaded region and attempt to recover the original bend conic? In other words, if I showed you only  a shaded region like Nicholas sketched as a proposed dual to his $B_1$ bend conic, could you find some way to sketch the original bend conic?

# Tasks for next meeting

- Work through more examples!
- Try to find explicit tropical equations that produce the proposed dual regions.
- Look for patterns. If you keep the bend conic type constant (say, type $B_1$) but vary the coefficients, can you find a formula for the equation of the resulting dual region?
- How does this analysis look for the other types of conics? Do you see any possible patterns? Do the dual regions seem to have some predictable behavior, e.g., the dual of a bend conic of type $C_1$ looks like a congruence variety similar to a bend conic of type ...?