# Contributing to devkb

devkb lives or dies by trust. Every entry follows one policy:

1. **Real errors only.** You hit it yourself or reproduced it from the report.
2. **Exact text.** Quote the error verbatim — search depends on it.
3. **Verified fixes.** Numbered steps you confirmed; pin the versions involved.
4. **Prevention beats cure.** Every entry needs a Prevention section.
5. **No link farms.** Official docs links only; zero affiliate content.

## Workflow

    ./tools/new-entry.sh my-error-id ecosystem "Exact error text here"
    # edit the file, then:
    node tools/lint.js
    node tools/build-index.js
    git checkout -b entry/my-error-id && commit && push && open a PR

## Structure rules (enforced by tools/lint.js)

- frontmatter keys: id, ecosystem, title, tags, verified, last-reviewed
- sections: Symptom, Cause, Fix, Prevention
- filename must equal the frontmatter id

Corrections are as welcome as new entries — open a `Fix report` issue or PR.
