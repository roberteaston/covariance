---
{"dg-publish":true,"permalink":"/home/","tags":["gardenEntry"],"updated":"2024-10-18T09:57:37-07:00"}
---

# Welcome to Covariance

```dataviewjs
// You can update this to filter as you like - filtering for just a file or a specific tag is fine
const pages = dv.pages('#quotes')

// This regex will find the contents of a specifically formatted callout
const regex = />\s\[\!quote\]\s(.+?)((\n>\s.*?)*)\n/i

const rows = []
for (const page of pages) {
    const file = app.vault.getAbstractFileByPath(page.file.path)
    // Read the file contents
    const contents = await app.vault.read(file)
    // Extract the summary via regex
    for (const callout of contents.match(new RegExp(regex, 'sg')) || []) {
	    const match = callout.match(new RegExp(regex, 's')) 
	    rows.push([match[1], match[2], page.file.link])
    }
}

const quote = []
quote.push(rows[Math.floor(Math.random()*rows.length)]);

let author = quote[0][0]
let quotetext = quote[0][1]
let note = quote[0][2]

let text = "> [!quote] " + author + " \| " + note + "\n> " + quotetext
dv.paragraph(text)
```

# Recently updated notes

```dataview
TABLE WITHOUT ID file.link as "Note", last-updated as "Last Updated"
WHERE file.name != this.file.name
WHERE dg-publish
SORT last-updated DESC
LIMIT 3
```

# Knowledge

## Mathematics

>[!summary]- Algebra theory
>Not to be confused with the general concept of *algebra* (abstract or otherwise), an [[40-49 Knowledge/41 Mathematics/Algebra theory/Algebras#^32e02b\|algebra]] is an algebraic structure similar to a [[40-49 Knowledge/41 Mathematics/Module theory/Basic definitions and examples/Modules#^ac6884\|module]], only with two internal binary operations.
>```dataview
> TABLE WITHOUT ID file.link as "Note", last-updated as "Last Updated"
> FROM #algebra_theory 
> WHERE dg-publish
> SORT file.name ASC
> ```

>[!summary]- Algebraic geometry
>```dataview
> TABLE WITHOUT ID file.link as "Note", last-updated as "Last Updated"
> FROM #algebraic_geometry  
> WHERE dg-publish
> SORT file.name ASC
> ```

>[!summary]- Category theory
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #category_theory 
>WHERE dg-publish
>SORT file.name ASC
>```

>[!summary]- Field theory
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #field_theory 
>WHERE dg-publish
>SORT file.name ASC
>```

>[!summary]- Group theory
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #group_theory 
>WHERE dg-publish
>SORT file.name ASC
>```

>[!summary]- Module theory
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #module_theory 
>WHERE dg-publish
>SORT file.name ASC
>```

>[!summary]- Ring theory
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #ring_theory 
>WHERE dg-publish
>SORT file.name ASC
>```

>[!summary]- Tropical algebraic geometry
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #tropical_geometry  
>WHERE dg-publish
>SORT file.name ASC
>```

## Software

>[!summary]- Blender
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #blender 
>WHERE dg-publish
>SORT file.name ASC
>```

>[!summary]- Houdini
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #houdini
>WHERE dg-publish
>SORT file.name ASC
>```

>[!summary]- $\LaTeX$
>```dataview
>TABLE WITHOUT ID file.link as Topic
>FROM #latex
>WHERE dg-publish
>SORT file.name ASC
>```
