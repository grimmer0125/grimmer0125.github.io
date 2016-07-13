---
title: Use the description of Git Branch
tags:
  - Git
---

I notice that people can add some description to a Git Branch. From this article, [http://bahmutov.calepin.co/git-branches-with-descriptions-really.html](http://bahmutov.calepin.co/git-branches-with-descriptions-really.html), there are two ways to edit.

* `git branch --edit-description`
* for single line descriptions use `git config branch.<branch name>.description "describe branch"`

To show:

    git config branch.<branch name>.description.

The author wrote a good script which can help to show the information, just down from here: `https://github.com/bahmutov/git-branches/blob/master/branches.sh` 
