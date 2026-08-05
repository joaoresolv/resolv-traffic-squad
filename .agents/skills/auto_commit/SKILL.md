---
name: auto_commit
description: Automagically commit and push changes to GitHub after modifying the project.
---

# Auto Commit Skill
Whenever you make changes to the project files (code, assets, configuration, etc.) during a task, you MUST automatically follow these steps at the end of the task to keep the GitHub repository updated:
1. Run `git status` to verify the modified files.
2. Run `git add .` to stage all modifications.
3. Run `git commit -m "chore: auto-commit updates"` (or a more descriptive message based on the changes).
4. Run `git push` to upload the changes to the remote repository.

Do not wait for the user to ask for a commit. This is a behavioral rule to ensure the project on GitHub is always up to date.
