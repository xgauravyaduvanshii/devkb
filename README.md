# devkb — The Developer Error Knowledge Base

A curated, searchable database of real developer error messages and their fixes.
No SEO junk. No signup walls. Just the error, why it happens, and how to fix it.

## How it works

Every entry lives in `data/errors/` as a Markdown file with structured frontmatter:

```yaml
---
id: node-eacces
ecosystem: nodejs
title: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'
tags: [npm, permissions, linux]
---
```

The body contains **Symptom**, **Cause**, **Fix** and **Prevention** sections.
`tools/build-index.js` generates the searchable index; `tools/search.js` greps it from the CLI.

## Browse

- [Index by ecosystem](data/README.md)
- Or run locally:

```bash
node tools/search.js "crashloopbackoff"
node tools/build-index.js && open site/index.html
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Rules are simple: an entry must describe an error
you actually hit, the fix must be verified, and no affiliate links.

## License

Content: CC-BY-4.0 · Code: MIT
