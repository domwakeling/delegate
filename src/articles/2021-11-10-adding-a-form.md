---
title: Adding A Form
date: 2021-11-10T20:00:00.000Z
tags:
  - article
layout: layouts/article.njk
---

Another thing that a lot of people want from their websites is a contact form &mdash; if you're
using your website to generate leads, you absolutely want users to be able to send you their name,
email and a short message.

> ## TLDR
>
> Having a form on your site used to mean either a *dynamic* website or running a separate server
> somewhere; happily there are now solutions that tie in nicely with a *static* site (and Static
> Site Generators) that mean you can have a form without the need for a complicated back-end solution.

Behind the scenes, a contact form **usually** means having a server &mdash; which either means a
*dynamic* website, or separately running a server to handle the form. This &mdash; natually &mdash;
is adding complexity and (probably) cost.

Enter [Netlify Forms](https://docs.netlify.com/forms/setup/) (other providers are available!) which
lets you handle form submissions without having a server on the backend; it can be configured to
send an email with the form details in it; this site's <a href="/contact">contact form</a> is an
example of how it works.