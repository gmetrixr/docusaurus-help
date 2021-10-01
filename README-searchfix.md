# Docusaurus Search Config Problem

## Problem

Docusaurus SearchBar assumes that all results from algolia API are withing the baseUrl of the Docusaurus website.

Problem line: https://github.com/facebook/docusaurus/blob/33a85c71aa86a676cd4079936582e3f8de5d7a3e/packages/docusaurus-theme-search-algolia/src/theme/SearchBar/index.js#L119

Algolia API returns **absolute URLs**, so there is no reason really to mess with the returned URLs.

## Solution

To solve this, we Swizzle the Search Bar as per [this documentation](https://docusaurus.io/docs/using-themes#swizzling-theme-components)

`p run swizzle @docusaurus/theme-search-algolia SearchBar` (In gmetri-help folder, in docker `sd` mode)
`p i @docsearch/react`

And comment the problematic line that messes with the URL.
