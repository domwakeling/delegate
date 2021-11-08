---
title: What's a CMS?
date: 2021-11-09T20:00:00.000Z
tags:
  - article
layout: layouts/article.njk
---

In the [previous article](/articles/2021-11-07-whats-a-static-website/) we briefly talked about
a CMS. So what's that mean?

> ### TL;DR
>
> A CMS, or Content Management System, is a way of &mdash; you guessed it &mdash; managing your
> content.
>
> Specifically, it's a webpage (normally part of the website that it's managing) which allows users
> with the right access to write, edit or delete some or all of the content on that website.

Actually, the TL;DR kind of covers it &mdash; a Content Management System is **literally** a system
for managing your content! Back to the good old 'blog' example, a CMS would normally be a page that
'admins' can reach which allows you to add, delete or edit posts. Likely it will also allow you to
add photos or other media to your website.

Originally (and still very commonly) a CMS would be part of your site, but there's also now an option
of a *headless CMS*. This basically means that your content lives separately to your website, and
is normally how static sites (and static site generators) get round the issue of letting a user
easily edit content without having to delve into code all the time.

This site uses [NetlifyCMS](https://www.netlifycms.org/) which is one type of headless CMS; behind
the scene the NetlifyCMS editor is actually making changes to files on [GitHub](https://github.com/)
but as far as the user is concerned they get to use a WYSIWYG text editor to write or edit content.
Best of both worlds ...