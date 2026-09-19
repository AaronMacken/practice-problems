# Goal

To provide examples of industry standard react applications

- project dependencies & configurations
- project scaffolding and architecture
- coding best practices

# Current WIP

building initial project foundation / configuration

# Private Package Auth

This project installs private scoped packages from GitHub Packages.

The scope mapping lives in [.npmrc](.npmrc):

```ini
@aaronmacken:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_AUTH_TOKEN}
always-auth=true
```

To install dependencies successfully, set a GitHub personal access token in the `GITHUB_PACKAGES_AUTH_TOKEN` environment variable.

Recommended token scopes:

- `read:packages`
- `repo` if the package is linked to a private repository

## Windows

Set the token as a Windows user environment variable:

```powershell
setx GITHUB_PACKAGES_AUTH_TOKEN "your_token_here"
```

After using `setx`, restart VS Code or open a fresh terminal before running `pnpm i`.
This repo expects the token to come from the Windows user env var, not a one-off shell export.

## macOS

Add the token to your shell profile, for example `~/.zshrc`:

```bash
export GITHUB_PACKAGES_AUTH_TOKEN=your_token_here
```

Then reload your shell and install:

```bash
source ~/.zshrc
pnpm i
```

## Rotating Tokens

If installs start failing with `ERR_PNPM_FETCH_401`, the token is usually expired, revoked, or missing the required scopes. Update the environment variable with a new token and open a fresh terminal session.

# TODO

- investigate dev / prod optimization tools
- implement react router
- implement jest
- implement error boundary
- implement github actions
- implement husky for precommit / prepushing checks
- add documentation on the commands you can run to format, lint, start, build ect.

# Optimization Tools

- MiniCssExtractPlugin
