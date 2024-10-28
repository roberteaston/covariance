---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/module-theory/exact-sequences/exact-sequences-iii-morphisms-of-exact-sequences/","tags":["module_theory"],"updated":"2024-03-06T13:54:47-08:00"}
---

For a given module $M$, different choices of generators lead to different surjections from free $R$-modules.
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJGKEFfMSkiXSxbMCwxLCJGKEFfMScpIl0sWzEsMCwiTSJdLFsxLDEsIk0iXSxbMSwzLCJcXHBpXzEnIiwyXSxbMCwyLCJcXHBpXzEiXV0=&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Different choices for the generators of the kernels of those surjections (i.e., different choices of generators for the relations among those generators), lead to different exact sequences
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMSwwLCJGKEFfMSkiXSxbMSwxLCJGKEFfMScpIl0sWzIsMCwiTSJdLFsyLDEsIk0iXSxbMCwwLCJGKEFfMikiXSxbMCwxLCJGKEFfMicpIl0sWzEsMywiXFxwaV8xJyIsMl0sWzAsMiwiXFxwaV8xIl0sWzQsMCwiXFxwaV8yIl0sWzUsMSwiXFxwaV8yJyIsMl1d&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

Continuing in this way, it's very plausible to expect to deal with two very different free resolutions of the same module $M$:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsOCxbMiwwLCJGKEFfMSkiXSxbMiwxLCJGKEFfMScpIl0sWzMsMCwiTSJdLFszLDEsIk0iXSxbMSwwLCJGKEFfMikiXSxbMSwxLCJGKEFfMicpIl0sWzAsMCwiXFxjZG90cyJdLFswLDEsIlxcY2RvdHMiXSxbMSwzLCJcXHBpXzEnIiwyXSxbMCwyLCJcXHBpXzEiXSxbNCwwLCJcXHBpXzIiXSxbNSwxLCJcXHBpXzInIiwyXSxbNiw0LCJcXHBpXzMiXSxbNyw1LCJcXHBpXzMnIiwyXV0=&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

There should be a way to compare these two resolutions, which means we need a way to compare exact sequences. As usual, we'll do that through the notion of a morphism of exact sequences.

>[!note] Definition of morphism of exact sequences
>A **morphism** from an exact sequence
>$$\cdots \xrightarrow{f_{n-2}} X_{n-1}\xrightarrow{f_{n-1}} X_n\xrightarrow{f_n} X_{n+1}\xrightarrow{f_{n+1}}\cdots$$
>to an exact sequence
>$$\cdots \xrightarrow{g_{n-2}} Y_{n-1}\xrightarrow{g_{n-1}} Y_n\xrightarrow{g_n} Y_{n+1}\xrightarrow{g_{n+1}}\cdots$$
>is a collection of morphisms $h_n:X_n\to Y_n$ such that the diagram below commutes:
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTAsWzIsMCwiWF9uIl0sWzIsMSwiWV9uIl0sWzMsMCwiWF97bisxfSJdLFszLDEsIllfe24rMX0iXSxbMSwxLCJZX3tuLTF9Il0sWzAsMCwiXFxjZG90cyJdLFswLDEsIlxcY2RvdHMiXSxbMSwwLCJYX3tuLTF9Il0sWzQsMCwiXFxjZG90cyJdLFs0LDEsIlxcY2RvdHMiXSxbMSwzLCJnX24iLDJdLFswLDIsImZfbiJdLFs0LDEsImdfe24tMX0iLDJdLFs2LDQsImdfe24tMn0iLDJdLFs3LDAsImZfe24tMX0iXSxbNSw3LCJmX3tuLTJ9Il0sWzIsOCwiZl97bisxfSJdLFszLDksImdfe24rMX0iLDJdLFs3LDQsImhfe24tMX0iXSxbMCwxLCJoX24iXSxbMiwzLCJoX3tuKzF9Il1d&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
{ #9753c4}


As might be predicted, we can compose morphisms of exact sequences (by composing the vertical morphisms), and we can talk about isomorphisms of exact sequences (either as morphisms in which all of the vertical morphisms are isomorphisms, or equivalently as morphisms for which there exists an inverse morphism of exact sequences).

## Properties of morphisms of exact sequences

The commutativity condition on morphisms of exact sequences has some surprising consequences.

>[!summary] The Short Five Lemma
>Suppose we have a morphism of short exact sequences
><iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTAsWzIsMCwiWSJdLFsyLDEsIlknIl0sWzMsMCwiWiJdLFszLDEsIlonIl0sWzEsMSwiWCciXSxbMCwwLCIwIl0sWzAsMSwiMCJdLFsxLDAsIlgiXSxbNCwwLCIwIl0sWzQsMSwiMCJdLFsxLDMsImcnIiwyXSxbMCwyLCJnIl0sWzQsMSwiZiciLDJdLFs2LDRdLFs3LDAsImYiXSxbNSw3XSxbMiw4XSxbMyw5XSxbNyw0LCJoXzEiXSxbMCwxLCJoXzIiXSxbMiwzLCJoXzMiXV0=&embed" width="400" height="200" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
>
>If $h_1$ and $h_3$ are injective (resp., surjective), then $h_2$ is injective (resp., surjective).


If you're wondering if there's a "Long Five Lemma", the answer is ... [kind of](https://en.wikipedia.org/wiki/Five_lemma).