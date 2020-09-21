## Preaction CMS Style Import Extension Block

This is an extension block for [Preaction CMS](https://github.com/duhdugg/preaction-cms) which allows you to load CSS files by URL.

See [How to Customize Style](https://github.com/duhdugg/preaction-cms/wiki/How-to-Customize-Style) in the Preaction CMS Wiki for the ideal way to add CSS to Preaction CMS. This extension is for exceptional scenarios such as when you need page-specific CSS that is split from the main bundle.

### Security

Legacy versions of Preaction CMS allowed importing external CSS by default. These features were removed in Preaction CMS 3 for security reasons.

There are 2 ways you can mitigate the risk opened from installing this extension:

1. [Run Preaction CMS in read-only mode](https://duhdugg.github.io/preaction-cms/#libenv).
2. After your imports are in place, copy the `styleimport-serverext` directory from this repo into the `ext` directory in Preaction CMS and restart the process. This will prevent the block from being added, updated, or deleted. If you want to temporarily enable these edits, change `const lockdown = true` to `const lockdown = false` in line 3 of `styleimport-serverext/index.js`. Then change it back to `true` after your related edits are complete.
