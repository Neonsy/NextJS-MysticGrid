# Workflow Overview

## Development Process

Without a planned feature:
I push changes directly to the Dev branch.

With a planned feature:
I create a temporary feature branch.
I create a PR targeting the Dev branch.

## Quality Assurance

From Dev to Preview:
I periodically create PRs to the Preview branch.
Code undergoes linting and formatting checks.

From Preview to Main:
After passing Quality Assurance (QA), I create a PR targeting Main.
A preview build is generated and deployed.
Upon successful testing, the PR is merged.
A production build is automatically deployed.