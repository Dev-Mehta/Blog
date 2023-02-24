---
template: BlogPost
path: /simplify-your-workflow-with-pre-commit-hooks/
date: 2023-02-24T11:48:52.375Z
title: Simplify your workflow with Pre-Commit Hooks
metaDescription: >-
  Learn how to use pre-commit hooks to automate your code quality checks and run
  your unit tests, and also capture potential vulnerabilities before they get
  into your codebase.
thumbnail: /assets/django-pre-commit.jpg
---
Picture this: You're a busy Django developer working on a large-scale web project with a team of developers. You spend hours coding, testing, and debugging, only to realize that your codebase is littered with small issues like formatting inconsistencies, syntax errors, or import sorting problems. 

These small issues can pile up and slow down your development workflow, especially when working with a large team.

That's where pre-commit comes in. Pre-commit is a simple yet powerful tool that can help you catch these issues before they make it into your codebase.  It is a `git` hook script.

Git hook scripts are useful for identifying simple issues before submission to code review. We run our hooks on every commit to automatically point out issues in code such as missing semicolons, trailing whitespace, and debug statements. 

By pointing these issues out before code review, this allows a code reviewer to focus on the architecture of a change while not wasting time with trivial style nitpicks.

By automating code formatting, linting, and testing, pre-commit can save you time and headaches, allowing you to focus on what really matters: building great software.

In this blog post, we'll explore how to use pre-commit in Django projects. We'll cover everything from installation and configuration to creating custom hooks and integrating with CI tools. 

By the end of this post, you'll have a solid understanding of how to use pre-commit to improve your workflow and streamline your development process. So, let's dive in!

## Installation & Configuration

The first step to using pre-commit in your Django project is to install it using pip, the Python package manager. 

```python
pip install pre-commit
```

Once you have pre-commit installed, you'll need to configure it using a file called .pre-commit-config.yaml.

This configuration file is where you define the hooks that `pre-commit` will run on your code. A hook is a command or script that checks your code for issues like formatting errors, syntax mistakes, or security vulnerabilities. There is a wide range of hooks that you can use in your Django project, and you can also create your own custom hooks.

In your `.pre-commit-config.yaml` file, you'll specify which hooks you want to run and in what order. You can also set options for each hook, such as which files to run it on or what arguments to pass to the command.

For Django projects, some of the most useful pre-commit hooks include Black for code formatting, Flake8 for code linting, isort for import sorting, and Mypy for static type checking. By running these hooks automatically, you can ensure that your code is clean, consistent, and easy to read.

### TLDR

To adopt `pre-commit` into our system, we simply perform the following actions:

1. Install pre-commit: `pip install pre-commit`
2. Add `pre-commit` to `requirements.txt` (or `requirements-dev.txt`)
3. Define `.pre-commit-config.yaml` with the hooks you want to include.
4. Execute `pre-commit install` to install git hooks in your `.git/` directory.

### Creating .pre-commit-config.yaml

- Create a file named `.pre-commit-config.yaml` in your repository root directory(also your django project’s root directory).
- You can generate a very basic configuration using`pre-commit sample-config`

Instead of creating sample-config, you can also start from scratch. In this post, I have included packages like `black`, `flake8` ,`reorder-python-imports` & `bandit` for our django projects.

Here is a sample of pre-commit files that I am currently using for my projects. These files help me ensure that my code is clean, formatted, and free of errors before I commit it to the repository. I highly recommend using pre-commit hooks in your own projects to save time and avoid potential issues down the road.

```yaml
# Filename: .pre-commit-config.yaml
repos:
  - repo: https://github.com/psf/black
    rev: 22.10.0
    hooks:
    - id: black
      args:
        - --line-length=88
      language_version: python3
  - repo: https://github.com/PyCQA/flake8
    rev: '5.0.4'  # pick a git hash / tag to point to
    hooks:
    -   id: flake8
        args: 
          - "--max-line-length=88"
        exclude: "^(.*/migrations/|core/settings.py)"
  - repo: https://github.com/asottile/reorder_python_imports
    rev: v3.9.0
    hooks:
    -    id: reorder-python-imports
  - repo: local
    hooks:
      -  id: django-tests
         name: django-tests
         entry: python manage.py test
         always_run: true
         pass_filenames: false
         language: system
	- repo: https://github.com/PyCQA/bandit
		hooks:
			-  id: bandit
			   name: bandit
			   description: 'Bandit is a tool for finding common security issues in Python code'
			   entry: bandit
			   language: python
			   language_version: python3
			   types: [python]
```

Black is a code formatter that ensures my code follows a consistent style. 

Flake8 is a linter that checks my code for syntax errors, unused imports, and other potential issues. reorder-python-imports is a tool that sorts my imports alphabetically, making them easier to read and maintain.

bandit looks for potential security vulnerabilities in your code. By running these checks automatically, you can ensure that your code is secure and free of common security issues.

In addition to using these tools, I also include a pre-commit hook that runs my unit tests before each commit. This helps me catch any bugs or regressions before they make it into the codebase.

Overall, pre-commit hooks are an essential part of my workflow, and I highly recommend incorporating them into your own development process. Note that these are my personal recommendations and not the holy grail of truth for django projects, but I hope they can serve as a helpful starting point for you.

### Getting it in action

Once, you create your .pre-commit-config.yaml - configuration file, you need to install that pre-commit hook into your .git repository. Its fairly easy and simple.

To install the pre-commit hook, you just need to run `git add .pre-commit-config.yaml` and `pre-commit install` in your terminal. This will automatically install the hook into your `.git` directory, allowing it to run on every commit. You can also run `pre-commit run` to manually run the hooks on your codebase. Once installed, pre-commit will run automatically every time you commit code to your repository, ensuring that your code is clean and ready for review.

For more details you can look at [pre-commit documentation](https://pre-commit.com/#usage).

Now the next time you make some changes in your repositories, you can run `git add .` to stage all changes and `git commit` to commit them. 

Pre-commit will automatically run the hooks you specified in your `.pre-commit-config.yaml` file on your staged changes before the commit is finalized. This will help catch any errors or issues before they make it into your codebase and save you time and headaches down the road. 

![demo-screenshot](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7df1322-48d7-470f-a317-25261ae4ff5b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230224T115427Z&X-Amz-Expires=86400&X-Amz-Signature=1e8f29425a9224daeefe31afb85af4b8cd0af7ea19e5aa1c65bac53a374017a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

The output will be somewhat similar to the above image, if the code passes the rules defined by linters & hooks, it will be mentioned as Passed by that hook, but if the code fails for some reason, the error will be shown where it fails, and you can work on that specific code.  If there were formatting issues, most of the times, black will reformat them for you.

## Conclusion

By automating code formatting, linting, and testing, pre-commit can help catch errors and issues before they make it into your codebase. With a solid understanding of installation and configuration, and by using custom hooks, you can streamline your development process and ensure that your code is clean, consistent, and easy to read.

I hope this article served as a good starting point for automating some of your linting, and code quality improvement tasks. There are many amazing hooks other than these available online. You can start at [https://pre-commit.com](https://pre-commit.com/) to continue learning more about this.

Happy Coding!
