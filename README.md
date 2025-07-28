# AutoCoder
Dive into the cutting-edge intersection of DevOps and AI with AutoCoder. This project guides you to build a reusable GitHub Action that leverages Generative AI to auto-generate code. You will create workflows, interact with OpenAI using scripts, enforce security standards, and eventually convert your project to a reusable GitHub Action to share with others or show off in your portfolio.
## Project Steps
- Let's start with the GitHub repository. Set up a new public GitHub repository in your GitHub account which you will use to store the configuration files for GitHub Actions as well as the script to interact with ChatGPT.
- Develop a basic workflow file to recap the basics. The action runs on push events and prints “Hello, world!”
- Use GitHub Actions to interact with the versatile GitHub API, a tool capable of managing the full spectrum of repository data. In this stage, you'll focus on using it to read existing issues and comments.
- Fine-tune the issues before ChatGPT processes them. Curate the content to ensure it's concise and relevant, which will assist ChatGPT in generating quality code. Additionally, tag Issues with a specific label so that only issues containing it are sent to ChatGPT.
- Integrate OpenAI's ChatGPT into the workflow using a Bash script to generate code based on the contents of the issue. Upload the generated files as an artifact and echo the files in the workflow logs.
- Create a pull request with the generated code for review. The branch should be named with the convention autocoder-branch-issueNumber and the pull request should be created against the main branch. Commit the files first in your workflow and use an external action to create the pull request.
- Add the action.yml metadata file to define the inputs and outputs for the workflow.
