# What I've imagined

Basically, if I just work without a plan ;), then I push on Dev directly.
However, if I have a plan, I would create a PR from a temporary branch, targeting Dev.

Every now and then, I would push a PR from Dev to Preview, where the code is being checked for linting and formatting.

If everything seems fine, it'll then be PRed to Main.
In that PR, a preview will be built and deployed.
If everything works as expected, then the PR will be merged and a production-ready build will be deployed.