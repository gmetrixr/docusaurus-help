# Docusaurus Search Config Problem

## Problem

Docusaurus SearchBar assumes that all results from algolia API are within the baseUrl of the Docusaurus website.

Problem line: https://github.com/facebook/docusaurus/blob/33a85c71aa86a676cd4079936582e3f8de5d7a3e/packages/docusaurus-theme-search-algolia/src/theme/SearchBar/index.js#L119

Algolia API returns **absolute URLs**, so there is really no reason to mess with the returned URLs.

## Solution

To solve this, we Swizzle the Search Bar as per [this documentation](https://docusaurus.io/docs/using-themes#swizzling-theme-components)

In gmetri-help folder, in docker `sd` mode:

```bash
p run swizzle @docusaurus/theme-search-algolia SearchBar
p i @docsearch/react
```

And [comment the problematic line](https://github.com/gmetrixr/help/blob/a7c743b3fce96d57a9dd5f90365cfdf9206bdc4f/gmetri-help/src/theme/SearchBar/index.js#L119) that messes with the URL.
