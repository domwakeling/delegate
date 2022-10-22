---
title: NetlifyCMS
date: 2021-11-09T20:00:00.000Z
description: Introduction to NetlifyCMS
tags:
  - article
layout: layouts/article.njk
---
In a [previous article](/articles/2021-11-08-whats-a-cms/) we found out what a CMS is, and found out
that this *static* site uses NetlifyCMS to allow users to edit or add new articles.

NetlifyCMS should be *set up* by a 'technically proficient' user (for instance a web developer) but
once it's available it offers a WYSIWYG-style editor with preview. The screenshot below shows what
this experience looks like out-of-the-box.

![NetlifyCMS screenshot](/images/netlifycms-example.jpg "NetlifyCMS example")

In addition to the text editor, there is also a lightweight media editor that can be set up allowing
uploading of photographs (the screenshot above was taken and uploaded to the site using NetlifyCMS).

- - -

### Technical Explanation

The underlying technical stack used for this website is

* [Eleventy](https://www.11ty.dev/) static site generator
* [Netlify](https://www.netlify.com) hosting
* [NetlifyCMS](https://www.netlifycms.org/) content management system
* [GitHub](https://github.com/) repository

Under the hood
* making edits in NetliyCMS sends a push to the GitHub repo
* this triggers a new deploy on Netlify, running the content through Eleventy

The result is that edits in NetlifyCMS 'go live' on the website within (typically)
a minute, and we get the speed/cost benefits of a static website plus the
convenience of a user-friendly CMS to make easy changes.