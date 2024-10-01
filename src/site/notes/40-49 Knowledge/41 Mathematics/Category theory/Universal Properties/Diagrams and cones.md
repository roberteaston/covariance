---
{"dg-publish":true,"permalink":"/40-49-knowledge/41-mathematics/category-theory/universal-properties/diagrams-and-cones/","tags":["category_theory"],"updated":"2024-09-30T19:57:54-07:00"}
---

Many of our [[[Universal Properties I - Inspiring Examples\|inspiring examples]] of universal properties can be described by the following basic situation:
- There is a commutative diagram in a given category $\mathcal{C}$. This consists of a family of objects in $\mathcal{C}$ together with certain arrows between them.
- We consider all objects $c\in\mathcal{C}$ with arrows "to the diagram" (or dually, "from the diagram"). In other words, for every object in our family we have an arrow from $c$ to that object, and the diagram formed from these arrows together with the initial diagram is commutative.
- Among all such objects (equipped with such arrows), there is a "universal" object $c_0$ through which all other such objects must uniquely factor.
Let's try to make sense of this and gradually discover how to "encode" such information in a compact, categorical way.

# Step 1: An intuitive way to visualize arrows "to a diagram"

This first step is not strictly necessary but it can definitely help simplify our mental picture. Imagine a commutative diagram in a category $\mathcal{C}$ as simply a picture of a constellation of dots (the objects) and arrows. We can imagine this picture as existing in some ambient space, even though this is entirely metaphorical. Let's imagine the diagram has been drawn (or exists) on a horizontal glass plane. We can then think of other objects $c\in \mathcal{C}$ as dots floating above this plane. Now imagine we had arrows connecting an object $c$ to every object in the diagram. Visually, this would look like a cone (of light, say) with vertex at $c$ and rays shooting down from $c$ to every object in the diagram.

Assuming this picture we've drawn represents a commutative diagram in $\mathcal{C}$, this is what we mean when we say we have arrows from $c$ to the original diagram. It is also because of this picture that we often describe such an object (with a family of maps) as a **cone to the diagram**.

For some examples of cones, check out any of the diagrams in our collection of [[40-49 Knowledge/41 Mathematics/Category theory/Universal Properties/Examples of universal properties\|inspiring examples]].

# Step 2: Formalizing the notion of "commutative diagram"

How do we formally encode the concept of a commutative diagram in a category, without using the clunky phrasing "a collection of objects in the category together with certain arrows, such that all possible compositions of arrows in that collection that have the same domain and codomain agree"? The answer: we use a "helper" category (sometimes called a "diagram category") and a a functor from that category to our category.

The general definition is as follows:

>[!note] Definition of a diagram of shape $\mathcal{J}$
>Let $\mathcal{C}$ and $\mathcal{J}$ be categories. A **diagram in $\mathcal{C}$ of shape $\mathcal{J}$** is an object of the [[[Functor categories\|functor category]] $\mathcal{C}^{\mathcal{J}}$, i.e., a functor $F:\mathcal{J}\to \mathcal{C}$.

Observe that this short definition really does encode the idea of a diagram in $\mathcal{C}$ of "shape" $\mathcal{J}$. If we visualize $\mathcal{J}$ as some dots connected by some arrows, then a functor $F:\mathcal{J}\to \mathcal{C}$ assigns to each dot some object of $\mathcal{C}$, and to each arrow between those dots some arrow in $\mathcal{C}$. The commutativity of the resulting diagram is encoded in the fact that $\mathcal{J}$ is a category and $F$ is a functor.

## Examples of diagrams of various shapes

If $\mathcal{J}$ is the category with a single object and only the identity arrow, then a diagram in $C$ of shape $\mathcal{J}$ is simply an object $c\in C$.

For a more interesting example, suppose $\mathcal{J}$ is the category with three objects and two nonidentity arrows, as illustrated below:
$$j_1\xrightarrow{f} j_3\xleftarrow{g} j_2.$$
Then each functor $F:\mathcal{J}\to C$ corresponds to a diagram in $C$ of the form
$$F(j_1)\xrightarrow{F(f)} F(j_3)\xleftarrow{F(g)} F(j_2).$$
This functor category is useful when studying pullbacks and pushforwards.

# Step 3: Formalizing cones to diagrams

Now that we have a formal way to define a diagram of a given shape in our favorite category, we can repackage the notion of a cone to that diagram. We first observe that any single object $c$ in $\mathcal{C}$ can be "turned into" a diagram in $\mathcal{C}$ of shape $\mathcal{J}$, using a very simple functor.

>[!note] Definition of the diagonal functor $\Delta:\mathcal{C}\to \mathcal{C}^{\mathcal{J}}$
>Suppose $\mathcal{C}$ and $\mathcal{J}$ are categories.  To each object $c\in\mathcal{C}$ we can associate the constant functor $\Delta c$, i.e., the functor that has value $c$ at each object $j\in \mathcal{J}$ and value $1_c$ at each arrow of $\mathcal{J}$.
>
>If $f:c\to c'$ is an arrow in $\mathcal{C}$, then $\Delta f:\Delta c\Rightarrow \Delta c'$ is the natural transformation that has the same value $f$ at each object $j\in \mathcal{J}$.

This sounds like a mouthful, but it simply boils down to labeling a diagram of "shape" $\mathcal{J}$ with the object $c$ at every dot, and the identity arrow $1_c$ on every arrow. When $f:c\to c'$ is an arrow in $\mathcal{C}$, we can "connect" two such constant diagrams by simply connecting the corresponding dots everywhere with the arrow $f:c\to c'$. This connects the image of $\Delta c$ to the image of $\Delta c'$, which is exactly the info needed to define a natural transformation $\Delta c\Rightarrow \Delta c'$.

We can now officially define a cone from an object $c$ to a diagram of shape $\mathcal{J}$ in $\mathcal{C}$.

>[!note] Definition of cone to a diagram
>Suppose $\mathcal{C}$ and $\mathcal{J}$ are categories, $c\mathcal{C}$ is an object of $\mathcal{C}$, and $F\in \mathcal{C}^{\mathcal{J}}$ is a diagram in $\mathcal{C}$ of shape $\mathcal{J}$. A **cone from $c$ to $F$** is an arrow $\tau$ in $\mathcal{C}^{\mathcal{J}}$ from $\Delta c$ to $F$, i.e., it is a natural transformation $\tau:\Delta c\Rightarrow F$.

In other words, a cone from $c$ to $F$ consists of an arrow $\tau_j:c\to F(j)$ for every $j\in J$, satisfying the usual naturality conditions. In this case, that means for every arrow $f:j\to j'$ we have a commutative diagram 
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJjIl0sWzAsMSwiYyJdLFsxLDAsIkYoaikiXSxbMSwxLCJGKGonKSJdLFsyLDMsIkYoZikiXSxbMCwyLCJcXHRhdV9qIl0sWzEsMywiXFx0YXVfe2onfSIsMl0sWzAsMSwiMV9jIiwyXV0=&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>
Observe that if we merge the two copies of $c$ (connected by the identity arrow), we can redraw the above diagram to look a lot more like the cone we were expecting:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMSwwLCJjIl0sWzAsMSwiRihqKSJdLFsyLDEsIkYoaicpIl0sWzEsMiwiRihmKSIsMl0sWzAsMSwiXFx0YXVfaiIsMl0sWzAsMiwiXFx0YXVfe2onfSJdXQ==&embed" width="300" height="300" style="border-radius: 8px; border: none; display: block; margin: auto"></iframe>

## Examples of constant diagrams and cones

Suppose $\mathcal{J}$ is the category with three objects and two nonidentity arrows, as illustrated below:
$$j_1\xrightarrow{f} j_3\xleftarrow{g} j_2.$$
For each object $c\in C$, the constant diagram
$$c\xrightarrow{1_c} c \xleftarrow{1_c} c$$
corresponds to a "constant" or "diagonal" functor $\Delta c:\mathcal{J}\to C$.

# Step 4: Limits are universal cones

At last we can formalize the notion of a single object $r\in\mathcal{C}$ "representing" (or "encoding") all of the information in a given commutative diagram in $\mathcal{C}$. In terms of the language we've now established, we are really looking for a cone to the diagram through which all other cones uniquely factor. To be even more precise, we define the following:

>[!note] Definition of the limit of a diagram
>Suppose $\mathcal{C}$ and $\mathcal{J}$ are categories and $F\in\mathcal{C}^{\mathcal{J}}$ is a diagram in $\mathcal{C}$ of shape $\mathcal{J}$. A **limit of $F$** is a cone $\nu:\Delta r\Rightarrow F$ through which all others cones to $F$ uniquely factor.
>
>The object $r$ of the limit cone is called the **limit** object of $F$ and is usually written $r=\operatorname{Lim }F$ (or sometimes $\displaystyle \varprojlim\, F$).

