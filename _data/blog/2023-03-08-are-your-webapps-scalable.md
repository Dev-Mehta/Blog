---
template: BlogPost
path: /are-your-webapps-scalable/
date: 2023-03-08T05:28:18.237Z
title: Are your webapps scalable?
thumbnail: /assets/django-scalable-apps.jpg
---
...Django is a widely used Python web framework that allows developers to build scalable web applications quickly and efficiently. One of the most important factors to consider when developing a website is scalability - the ability of a website to handle increasing traffic and data without sacrificing performance. 

The scalability of a website is essential for businesses that are growing or expecting increased traffic from marketing campaigns or seasonal spikes in demand.

In this blog post, we will explore how scalable websites built-in Django are, what factors can affect their scalability, and how to build scalable websites using Django.

### What does “scaling” mean in the context of django web apps?

- Can progressively scale from a low amount of users to a high amount of users.
- Have modular components that are decoupled and can be replaced if they are determined to be bottlenecks of the application.
- The infrastructure that you use is scalable - more on this later.

### A little bit of background

Even though the conventionally accepted norm is that - “Python is slow”. This argument is [slowly dying](https://hackernoon.com/python-is-slow-and-other-myths-of-a-dying-era).  Django is/was used by Disqus, Pinterest, Instagram and many other apps. They surely made changes to the framework and tweaked it according to their use cases, but this gives us enough confidence that, if we keep things simple & logical we should be able to do it too.

Also, I would like to add that when I am talking about scaling django apps, I am not talking about “reduced running time with code optimization”. For that, you can read [this post](https://simplifiedweb.netlify.app/unlock-full-potential-django-app-performance-optimization-techniques). I want to focus on scaling the infrastructure that the code is running on.

### Django's Scalability

Django is designed to be scalable, and it has built-in features that allow developers to create websites that can handle a large amount of traffic and data. One of the most important features of Django is its ORM (Object-Relational Mapping) system. It provides a powerful and flexible way to interact with databases, which is essential for the scalability of a website. 

Django also supports caching and load balancing, which helps to reduce the load on the server and ensures that the website performs well under heavy traffic.

Another factor that makes Django scalable is its modularity. Django allows developers to break down their applications into smaller, reusable components, which makes it easier to add new features and scale the website as needed. 

Django's built-in support for third-party packages also makes it easy to integrate additional functionality into the website without having to write everything from scratch.

## Scalable Architecture

You must have heard these phrases “vertical scaling” & “horizontal scaling”. Scaling vertically simply means adding more resources(RAM, CPU) in a monolithic manner & hope that the application would be able to handle more requests. 

This may work well initially, but at last, you would want to scale horizontally - meaning spawning more machines that serve your application - or better divide your app into micro-services so that each node on the network only serves a specific part of your application.

Splitting application to individual services helps you scale them individually as your load increases. You can then, work on optimizations at a service level.(Note: Be aware of the extra communication costs among your services).

You can look at [how disqus scaled django to 8 billion page views](https://blog.disqus.com/scaling-django-to-8-billion-page-views) handling 45k requests per second.

### A note on load balancing…

The features required to scale our application horizontally are generally features that allow our application to be stateless. Stateless applications mean that they do not keep any state. They don’t store any data, images, sessions or files within them. They use third-party services for all states, this includes things such as Databases, Memory Cache, Cloud Storage etc.

Django is great when it comes to this, and it definitely gives us the tools needed for us to run our application completely stateless:

- You can replace the default SQLite database (which stores data locally) to instead store data on a database that is running on another server instance.
- It supports custom File Storage Backends that allow you to store files on Amazon S3, DigitalOcean Spaces, Azure Blob Storage or any other cloud storage.
- You can customize Sessions to be stored in a database or Key-Value Store (such as Redis) instead of on the file system.
- You can use Cache Backends such as Memcache or Redis to store any cache on another server instead of the file system.

Each one of these features allows us to store our application state **somewhere else**. The key point is not which technology we choose or where we store our state, as long as it’s not stored locally with our application.

## Django tools that allow for scaling

- [Django Storages](https://github.com/jschneier/django-storages)
    - Amazon Web Services (AWS) S3
    - DigitalOcean Spaces
    - Azure Blob Storage
    - Google Cloud Storage
- Memcache and Redis Cache Backends (Part of Django)
- PostgreSQL, MySQL Database Backends (Part of Django)
    - [Microsoft SQL Database Backend](https://django-mssql.readthedocs.io/en/latest/)
- Redis and Database Session Backends (Part of Django)

All of these tools mean that you can be ready to set up your application for statelessness and scale out of the box. If you require support for other services that are not supported by these tools, it is important to note that Django is pluggable and allows the programmer to replace most pieces with their own “Backend” class. 

This means that you can often replace the existing built-in features with a custom backend for the service you want to add support for. I recently did this to [store files](https://docs.djangoproject.com/en/4.1/howto/custom-file-storage/) on Digitalocean and it was very simple and straightforward.

## Connections and Connection Pooling

If you have not used Django extensively, it is easy to miss out on the `CONN_MAX_AGE` param in `settings.py` that defines the maximum lifetime of your connection. This is Django’s way of connection pooling.

By default, Django, closes the connection at the end of each request. Persistent connections avoid overloading the database for each request and the cost ( it takes around ~20ms to make a DB connection ) of creating a connection is also reduced. So developers should consider setting  `CONN_MAX_AGE` to `None` (unlimited persistent connections) or a suitable value depending on your request volume at the applications’ end.

## Do most of your bottlenecks end up at database level?

If you are not able to scale your backend, then most likely the database is your bottleneck. There are a few quick things that can help you reduce the time to process your DB query and shorten the request/response cycle to improve performance (always think about reducing the time for the request/response cycle – the holy grail).

- Indexes – Adding appropriate indexes can speed up your DB (SELECT) queries and reduce the time to respond to users. It is best to look at slow (above ~30 ms) queries and queries that are done often to look at avenues for improvements. But don’t overdo it. More indexes would impact the performance of INSERT and UPDATE and also increase the load on disks to store the indexes.
- Choosing the right database – I’m used to working with Postgres and have seen great results. The community also likes it for its performance, proven capabilities at scale, data integrity and people who keep working on making it better every day.

## Write your own code — if needed

Luckily, or unluckily for the world, all types of applications haven’t been built yet. New unique applications with new demands are always popping up and pushing the industry forward. This means that even though we have huge applications such as Instagram, Disqus or Bitbucket using Django in scale, it does not necessarily mean that your unique application with its own needs will not run into some unique problem.

Django has its ORM which expects you to use a SQL Database such as MySQL or PostgreSQL. If you want to use a Document Database such as MongoDB, Django might not be the right tool for you. This means that the pluggability of Django might be less than something like Flask or Express which simply let your plugin any tools you want.

With that said, this does not mean that Django is not pluggable at all. There has been a lot of effort invested in making Django pluggable and allow developers to extend it in their own ways. 

[Instagram is a great example](https://www.linkedin.com/pulse/instagram-scales-python-2-billion-daily-users-shrey-batra), they used a very custom implementation of Django which allowed 
them to scale to 100’s millions of users. Django has extensive configuration possibilities with its `settings.py` file that allows you as the developer to configure most parts of the framework.

A few examples of what settings you can set to plug in your own custom solutions into Django:

- Authentication Backend
- Session Storage Backend
- Cache Backend
- Database Backend
- Static Files Backend
- Media Files Backend
- Logging Handlers

On top of this, you can also create your own middlewares that allow you to hook into the HTTP Request/Response cycle.

## Removing  unused code

Another way to reduce the request/response time is by removing the extra middleware that your app is not benefiting from. Every request that is made to the Django backend passes through this middleware and adds extra time (20-30ms) to the request/response cycle.

If your app makes API calls to the Django backend then you don’t need to use some of the middlewares that are enabled in Django by default. 

## Conclusion

Well, that’s it, folks! Hope you learnt a few things today. When developing products for high loads, the key thing is to stay curious, persistent and innovative. Every small change creates an impact as the change influences millions of requests.

Keep monitoring, keep measuring and keep fixing, that’s the mantra. 

Happy Coding!
