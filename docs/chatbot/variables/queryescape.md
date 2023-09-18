---
id: queryescape
---

# $(queryescape)

Outputs the query string escaped for use in a URL.

#### Parameters

This variable takes the string to query escape as a parameter.

#### Example Input

> `google.com/search?q=${queryescape ${1:}}`

#### Example Output

> `google.com/search?q=dank+memes`
