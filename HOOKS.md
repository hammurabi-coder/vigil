# Pre-commit hooks (not yet wired — Priority 1 task)
#
# To activate, the agent should:
# 1. Add to devDependencies in package.json:
#      "simple-git-hooks": "^2.9.0",
#      "lint-staged": "^15.0.0"
#
# 2. Add to package.json root:
#      "simple-git-hooks": {
#        "pre-commit": "npx lint-staged"
#      }
#
# 3. Run:
#      npm install
#      npx simple-git-hooks
#
# After that, every commit auto-lints and formats staged files.
