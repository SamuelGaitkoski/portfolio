# Claude Code Guidelines

## Commits

- **One file per commit** — each commit must touch exactly one file.
- **Conventional commits** — all commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
  ```
  <type>(<scope>): <description>
  ```
  Common types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`.
- **Push after committing** — after all commits for a task are done, run `git push` to push them to GitHub.
