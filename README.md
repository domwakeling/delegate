# Delegate website

> *This repo **was** originally going to contain the code for a business website for a friend,
> but since (happily) she found alterative employment, it's now going to be used a test-bed.*

> The live site is [hosted on netlify](https://delegate-site.netlify.app/).

## Briefing

Project is to build a business landing page with options for articles to be posted (intended for
occasional posts) and a conatact form. Site would be for lead generation, once a potential client
has made contact they will then use other tools (eg email) to correspond and work together.

Preference is for the site to be static-generated (for speed and to reduce the overhead of &mdash;
say &mdash; a WordPress or SquareSpace site), but for there to be some form of CMS such that the end
user (tech-savvy but not a developer) could make minor updates and add articles.

## Technology Stack
* [11ty.js](https://www.11ty.dev/) static-site generator
* [NetlifyCMS](https://www.netlifycms.org) for document-based CMS
* [Netlify](https://www.netlify.com/) for web-hosting
* *contact form still to be decided*

Shout-outs and thanks:
* [favicon.io](https://favicon.io/favicon-generator/) for painless favicons

## NetlifyCMS

The site is configured to use NetlifyCMS deployed on Netlify using Netlify Identify. Instructions
for getting set up in the [NetlifyCMS docs](https://www.netlifycms.org/docs/intro/).

The essence is:
* add an index and YAML file (mine are in `src/admin`)
* make the containing folder a passthroughCopy in the `.eleventy.js` config
* add Netlify Identify and Git Gateway settings in the Netlify console

I found this *mildly* challenging &mdash; for some reason the Git Gateway was very flaky initially
&mdash; but once everthing is set up and properly propogated it seems to be absolutely fine.
