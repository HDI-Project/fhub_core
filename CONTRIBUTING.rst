.. highlight:: shell

============
Contributing
============

Contributions are welcome, and they are greatly appreciated! Every little bit
helps, and credit will always be given.

You can contribute in many ways:

Types of Contributions
----------------------

Report Bugs
~~~~~~~~~~~

Report bugs at https://github.com/ballet/ballet/issues.

If you are reporting a bug, please include:

* Your operating system name and version.
* Any details about your local setup that might be helpful in troubleshooting.
* Detailed steps to reproduce the bug.

Fix Bugs
~~~~~~~~

Look through the GitHub issues for bugs. Anything tagged with "bug" and "help
wanted" is open to whoever wants to implement it.

Implement Features
~~~~~~~~~~~~~~~~~~

Look through the GitHub issues for features. Anything tagged with "enhancement"
and "help wanted" is open to whoever wants to implement it.

Write Documentation
~~~~~~~~~~~~~~~~~~~

ballet could always use more documentation, whether as part of the
official ballet docs, in docstrings, or even on the web in blog posts,
articles, and such.

Submit Feedback
~~~~~~~~~~~~~~~

The best way to send feedback is to file an issue at https://github.com/ballet/ballet/issues.

If you are proposing a feature:

* Explain in detail how it would work.
* Keep the scope as narrow as possible, to make it easier to implement.
* Remember that this is a volunteer-driven project, and that contributions
  are welcome :)

Get Started!
------------

Ready to contribute? Here's how to set up `ballet` for local development.

1. Fork the `ballet` repo on GitHub.
2. Clone your fork locally::

    $ git clone git@github.com:your_name_here/ballet.git

3. Install your local copy into a virtualenv. Assuming you have virtualenvwrapper installed, this is how you set up your fork for local development::

    $ mkvirtualenv ballet
    $ cd ballet/
    $ make install-develop

4. Create a branch for local development::

    $ git checkout -b name-of-your-bugfix-or-feature

   Now you can make your changes locally.

5. When you're done making changes, check that your changes pass flake8 and the
   tests, including testing other Python versions with tox::

    $ make lint
    $ make test
    $ make test-all

6. Commit your changes and push your branch to GitHub::

    $ git add .
    $ git commit -m "Your detailed description of your changes."
    $ git push origin name-of-your-bugfix-or-feature

7. Submit a pull request through the GitHub website.

Pull Request Guidelines
-----------------------

Before you submit a pull request, check that it meets these guidelines:

1. The pull request should include tests.
2. If the pull request adds functionality, the docs should be updated. Put
   your new functionality into a function with a docstring, and add the
   feature to the list in README.md.
3. The pull request should work for Python 3.6, 3.7, and 3.8. Check
   GitHub Actions and make sure that the tests pass for all supported
   Python versions.

Tips
----

To run a subset of tests::

$ python -m pytest -k some_test


Deploying
---------

A reminder for the maintainers on how to deploy. This is a simplified release workflow that does not update the version with a dev postfix (i.e. there is no 0.1.2-dev after 0.1.1 release).

#. Make sure all your changes are committed.

#. Create an entry in HISTORY.md for this release, and stage your changes (without committing yet)::

   $ git add HISTORY.md

#. Create and tag a new release::

   $ bumpversion --allow-dirty minor  # i.e. 0.1.1 -> 0.2.0

#. Push changes::

   $ git push --tags origin master

GitHub Actions will then deploy to PyPI if tests pass.
