---
layout: post
title: 'Should I use a Front-End Framework?'
quote: "<!-- Grids Check. Responsive Check. -->"
date: 2015-05-18
categories: [Web Development]
---

# TL;DR Use it and know why it is structured like it is. It follows solid programming logic. Then do everything from scratch.

## Responsive.

After using Foundation for many projects, I am going native. The framework is a solid base for modern UI. But I find myself fighting the framework more than it is helping.

## Overrides.
Only problems is overriding attributes that are default in the framework.

For example, the last child of an index would be floated right. But I would not know that until I found the conflict through the developer console.

  It overrided MY button styles inside the grid wrapper, to the point I have to use !important.

## Support

Foundation has a solid community that has solutions posted everywhere. AFAIK Foundation does not break with rails.

For other platforms such as Jekyll, dependencies must be updated.

```shell
 npm install grunt-sass
 npm install
```

## Finally
Foundation is great to learn from. It is well documented and uses intuitive syntax for grids. It is bloated, like Rails. But it specifies a logical folder structure and makes good assumptions.







