---
title: What's A Static Website?
date: 2021-11-07T20:00:00.000Z
description: What are static websites and why are they important?
tags:
  - article
layout: layouts/article.njk
---

So you've heard someone refer to 'static websites' and either sung thier praises or cursed them.
What on earth are they talking about?

> ## TL;DR
>
> Static websites are fast for your users and relatively cheap (sometimes free) to run. Those
> benefits have a cost though &mdash; they **can** be harder to work with. But &mdash; as this
> site hopefully proves &mdash; if set up properly, a static website can have many of the benefits
> of a dynamic site without the drawbacks.

Well, for starters, **this** is a static website.

What that means is that all the content is written ahead of time (when the website is published).
So when someone visits your static website, the pre-written ('static') files can be sent to your
browser **very** quickly.

And according to [Google](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/),
(who should know), the likelihood of users leaving your site increases by 32 percent when your
website page load time increases from **one** to **three** seconds. So fast sites really matter!

### So why isn't every website 'static'?

If your website is dependent on information that changes frequently and you need your site to always
reflect the most up-to-date information &mdash; think Amazon, or a weather-forecasting site, for
instance &mdash; then you are better off with a *dynamic* website. This will run on a server (a
'computer in the cloud') and whenever someone visits your website it will generate the page for
them there-and-then.

But that comes at the cost of **speed** and &mdash; well &mdash; cost. Dynamic sites are typically
slower to load, and (because you need a more sophisticated server) the 'web hosting' costs are
usually higher.

### But what if I want a site that has *some* dynamic content?

The downsides of static sites are normally listed as:
* they get complicated to maintain if there are lots of pages; and
* to add more content, you need to be able to write code

A good example of a site that has *some* dynamic content is a blog (or in fact the articles on this
site!). A blog probably doesn't get updated very often &mdash; even a daily blog doesn't really
**need** a dynamic site to work well ... but after a few months there is going to be a **lot** of
content which won't be easy to manage manually.

To solve the first problem, enter **Static Site Generators**. This is a software package that can
take the basic content for your site and automatically generate all the webpage files for you. For
a blog, this could involve generating individual blog entries together with an overall 'paginated'
list and individual monthly summary pages.

And for the second problem, enter **NetlifyCMS**. This is a Content Management System (other CMS'
are available) that has specifically been created to integrate with a number of SSGs to allow
non-technical users to update content easily.

This site is actually built using the [Eleventy](https://www.11ty.dev/) static site generator, together
with [NetlifyCMS](https://www.netlifycms.org/). It's hosted (for free) on [Netlify](https://www.netlify.com/)
and [Articles](/articles/page-1/) can be added or edited through an easy-to-use online interface.
Fast, cheap, and easy to edit &mdash; who **wouldn't** want that?!