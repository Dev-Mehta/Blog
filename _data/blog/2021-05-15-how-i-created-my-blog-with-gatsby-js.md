---
template: BlogPost
path: /how-i-created-my-blog-with-gatsbyjs
date: 2021-05-15T13:05:11.426Z
title: How I Created My Blog with Gatsby.js?
metaDescription: >-
  Writing articles can help you become a better developer and communicator
  because there is a huge work of researching, coding, learning, behind a blog
  post. Especially when you are a freelancer like me, you‘ll find that a
  successful blog can bring many clients your way instead of having to go find
  them by yourself.
thumbnail: /assets/Frame 1.png
---
# How I Created My Blog with Gatsby.js
Writing articles can help you become a better developer and communicator because there is a huge work of researching, coding, learning, behind a blog post. Especially when you are a freelancer or consultant like me, you‘ll find that a successful blog can bring many clients your way instead of having to go find them by yourself.

I started writing on Medium, which is really great and easy to write on. You can do a lot of cool things like importing articles, statistics, etc. But it seems that it’s not really a platform for developers.

Finally, I decided to create my own personal blog. Having my own platform will bring me a lot of benefices:
- I am not dependent on any other platform
- I can monetize my blog: maybe displaying ads
- I can customize it as I want.
- I can still publish on medium or dev.to and redirect readers to my personal blog.

## What is Gatsby?
Gatsby is a free and open-source framework based on React that helps developers build blazing-fast websites and apps.
Gatsby is generally defined as a powerful static site generator, but very different from other Static Site Generators like Jekyll, Hugo etc. The particularity of Gatsby is that it allows you to create extremely fast static, progressive and high-performance web applications.
### How does it work?
Gatsby does all the data fetching during build time. No matter where your data come from you can access it in the same way. Gatsby normalizes your data into a graphql API so you can read and display them easily.
In the end, gatsby will compile all of this into static assets and then allow you to deploy very quickly your app to a CDN of your choice rather than a traditional server.
Here is a graphic that summarizes it:

![How Gatsby works?](https://res.cloudinary.com/devmehta/image/upload/v1621083324/Screenshot_2021-05-15_How_I_Created_My_Blog_with_Gatsby_-_Google_Docs_1_sucxsr.png)

## Getting Started
Installing Gatsby Command Line Interface

`npm install gatsby-cli`

Create new project

`gatsby new gatsby-site`

Start Project

`gatsby develop`

Build Project

`gatsby build`

## Gatsby Starters
The Gatsby CLI tool lets you install starters, which are boilerplate Gatsby sites maintained by the community and intended for jump-starting development quickly.

For example, if you want to create a blog, you can use the blog starter instead of starting coding from scratch. All the gatsby starters can be found here.

I found a very nice starter blog which I used to quickly get up and running.

With this starter I have access to a lot of features like netlify CMS that we will see in the next section, that’s what’s cool about gatsby starters.

I initialized a new project with this starter by running:

`gatsby new blog https://github.com/W3Layouts/gatsby-starter-delog`

This command downloads the files and initializes the site by running npm install.
After that I can run my app :

`cd blog`

`gatsby develop`

Gatsby will start a hot-reloading development environment accessible by default at http://localhost:8000.

## Customizing
By default the starter looks like this:

![Default Starter](https://res.cloudinary.com/devmehta/image/upload/v1621083444/Screenshot_2021-05-15_How_I_Created_My_Blog_with_Gatsby_-_Google_Docs_2_mpgf1k.png)
After some customization, it now looks like this. I changed colours, added a favicon, changed the fonts etc :

![Customized Blog](https://res.cloudinary.com/devmehta/image/upload/v1621083498/Screenshot_2021-05-15_How_I_Created_My_Blog_with_Gatsby_-_Google_Docs_3_zcezyt.png)
You can customize your app as you want, it’s just Html, CSS and react.js.

## Gatsby Plugins
Basically, Gatsby plugins are just Node packages, so you can install them like other packages in node using NPM.

Do you need Google analytics? There’s a plugin for that.

`npm install —save gatsby-plugin-google-analytics`

Do you need offline support? There’s a plugin for that.

`npm install —save gatsby-plugin-offline`

In short, there is a plugin for everything you want to do.

## Netlify and Netlify CMS
Netlify is a platform you can use to automatically build, deploy, serve, and manage your frontend sites and web apps.

There are really a lot of advantages to using netlify in a gatsby site.
Continuous integration: Every time I push my code to GitHub, netlify build a new version of my app and deploy it. I have to do nothing, that’s super cool.
 - **Forms**: I have a contact form on my website so that users can write to me. Netlify comes with built-in form handling. I just have to add the netlify attribute or data-netlify="true" to the tag, and I can start receiving messages in my Netlify site admin panel.
- **Domain Settings**: You can add your custom directly from the netlify admin panel. In just a few minutes your domain shall be available.

### Netlify CMS
Netlify CMS is an open-source headless content management system that can be used with any static site generator to construct a faster and flexible web app. 

Netlify CMS is fully extensible, platform-agnostic, easy to install and provides a friendly UI to the users.

A CMS is useful because you can add content like blog posts from a dashboard on your website, instead of having to add posts manually with Markdown.

Netlify CMS is preinstalled in this starter, no configuration needed. 

After starting the app I can access my netlify cms dashboard at http://localhost:8000/admin and add a new post.

![](https://res.cloudinary.com/devmehta/image/upload/v1621083599/Screenshot_2021-05-15_How_I_Created_My_Blog_with_Gatsby_-_Google_Docs_4_fcndjl.png)

Every time I add a new post, the content will be stored in my repository and versioned on GitHub because Netlify CMS is Git-based. Also, thanks to Netlify’s Continuous Deployment, a new version will be deployed every time I add or edit a post. This is awesome.

## SEO

The better you optimize your blog for SEO, the higher your website will be listed on search engine result pages, so more people can find your website.

Using Gatsby makes your site fast and efficient for search engine crawlers to index your pages.

Gatsby is Good at SEO because gatsby pages are server-side rendered and all the page content is available to search engine crawlers
Some tricks I used to improve my SEO

### React Helmet

Meta tags are very important for SEO. They tell search engines important information about your web page, such as how they should display it in search results.

React helmet is the plugin I used to add metadata to my web pages.
With this plugin, attributes you add to your components, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

## Sitemap
A sitemap is an XML file that lists all your website pages, making sure Google can find and crawl them all, also helping it understand your website structure.

The gatsby-plugin-sitemap plugin allows you to automatically generate a sitemap with Gatsby and then bots can discover all your pages.

Eh voila :
![](https://res.cloudinary.com/devmehta/image/upload/v1621083695/Screenshot_2021-05-15_How_I_Created_My_Blog_with_Gatsby_-_Google_Docs_5_zbfegn.png)

## PWA

I really like progressive web apps. It was very important for me to have a PWA for my personal blog so users can download it like a native app.
The starter I used already had offline support, so I didn’t have to configure anything. Gatsby is usually is best defined as a PWA generator instead of a static site generator.

They give you all your need to build a true PWA :
 - **gatsby-plugin-manifest**: This makes it possible for users to add your app to their home screen.
 - **gatsby-plugin-offline**: Even in offline mode, the user can still navigate into my app and read my blog posts.

## Why you should use gatsby?
Gatsby is a very good framework if you want to build blazing-fast websites and apps very quickly.
### Gatsby make it Simple
Getting started with modern web development is complicated, you have to care about a lot of thing like webpack, postcss, app performance, deployment etc.
 - Things are easy with gatsby, you don’t need to worry about all that boilerplate.
 - There a plenty of free starters available you can use to quickly get started.
 - There is a plugin for everything you want to do.
 - SEO friendly
 - Progressive web apps generator

### Gatsby is fun
Gatsby is built on popular technologies like React and Graphql, so you won’t need to learn a new stack from scratch. If you like creating websites with React and Graphql, you’ll love Gatsby.

Gatsby lets you pull your data from wherever you want: API, markdown files, databases, CMSs like WordPress and make it available through a graphql API, that’s pretty cool.

Gatsby is performant

Stop worrying about performance in your web app, Gatsby take care of it for you. Gatsby sites are very very fast.

Here’s what makes gatsby sites very performant:
 - Gatsby follows Google’s PRPL architectural pattern: Push, Render, Pre-cache, Lazyload. and other performance best practices
 - Generates only static assets: no server needed
 - Normalizes third party data
 - It supports code splitting, enabling progressive rendering for your content.

Gatsby does a lot of optimization for us out of the box.

As a developer, my experience with Gatsby has been wonderful. I really enjoyed building my website with Gatsby ❤️. 

You should try it, you won’t be disappointed.

You also might like to take a look at my other articles: [SimplifiedWeb](https://simplifiedweb.netlify.app/)

Thanks for reading.
