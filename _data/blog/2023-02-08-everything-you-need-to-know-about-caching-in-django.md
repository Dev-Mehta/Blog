---
template: BlogPost
path: /everything-you-need-to-know-about-caching-in-django/
date: 2023-02-08T13:35:00.038Z
title: Everything you need to know about caching in django
metaDescription: >-
  Optimize your dynamic website for lightning-fast speed with caching. Reduce
  processing overhead and improve response time for your users with our expert
  guide on the best caching strategies for dynamic websites. Discover the power
  of caching today!
thumbnail: /assets/django-caching-guide.jpg
---
A common trade off in most dynamic websites is, well they are dynamic; meaning everytime a user refreshes or requests a page, the web server makes all sort of calculations, before generating the final response — from database logic to template rendering to business logic; basically creating a page everytime the user requests it. 

This approach is a lot more expensive in terms of resources than your standard static websites or even Generated Static Sites. For most small to medium scale websites this isn’t a major issue, but if you want to scale your website to the next level, you need to cut as much overhead as you can. 

That’s where caching comes in.

To cache something is to save the result of an expensive calculation so that you don’t have to perform the calculation next time. Here’s some pseudocode explaining how this would work for a dynamically generated web page:

```python
if page exists in cache:
  return cache[page.title]

else:
  generate page
  cache[page.title] = page # for next time 
  return generated page
```

Django comes with a robust cache system that lets you save dynamic pages so they don’t have to be calculated for each request. For convenience, Django offers different levels of cache granularity: You can cache the output of specific views, you can cache only the pieces that are difficult to produce, or you can cache your entire site.

## Prerequisites

To follow this article, you need to have knowledge about following:

- Prior experience of working with Django & Python(Beginner to intermediate)
- Django≥2.2.6
- Python≥3.4

## Setting up the caching system

There are different ways in which caching can be set up, depending on where you want your cache to be stored. The ways in which you can set up caching in your Django application are discussed in the following sections.

### Memcached

[Memcached](https://memcached.org/) is an entirely memory-based cache server, originally developed to handle high loads at LiveJournal.com and subsequently open-sourced by Danga Interactive. It is used by sites such as Facebook and Wikipedia to reduce database access and dramatically increase site performance.

After installing Memcached itself, you’ll need to install a Memcached binding. There are several Python Memcached bindings available; the two supported by Django are [pylibmc](https://pypi.org/project/pylibmc/) and [pymemcache](https://pypi.org/project/pymemcache/).

To use Memcached with Django:

- Set [BACKEND](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-BACKEND) to `django.core.cache.backends.memcached.PyMemcacheCache` or `django.core.cache.backends.memcached.PyLibMCCache` (depending on your chosen memcached binding)
- Set [LOCATION](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-LOCATION) to `ip:port` values, where `ip` is the IP address of the Memcached daemon and `port` is the port on which Memcached is running, or to a `unix:path` value, where `path` is the path to a Memcached Unix socket file.

```python
# using pymemcache binding
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.PyMemcacheCache',
        'LOCATION': '127.0.0.1:11211',
    }
}
```

One excellent feature of Memcached is its ability to share a cache over multiple servers. This means you can run Memcached daemons on multiple machines, and the program will treat the group of machines as a *single* cache, without the need to duplicate cache values on each machine. To take
advantage of this feature, include all server addresses in [LOCATION](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-LOCATION), either as a semicolon or comma delimited string, or as a list.

In this example, the cache is shared over Memcached instances running on IP address 172.19.26.240 and 172.19.26.242, both on port 11211:

```python
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.PyMemcacheCache',
        'LOCATION': [
            '172.19.26.240:11211',
            '172.19.26.242:11211',
        ]
    }
}
```

A final point about Memcached is that memory-based caching has a disadvantage: because the cached data is stored in memory, the data will be lost if your server crashes. Clearly, memory isn’t intended for permanent data storage, so don’t rely on memory-based caching as your only data storage. Without a doubt, *none* of the Django caching backends should be used for permanent storage – they’re all intended to be solutions for caching, not storage – but we point this out here because memory-based caching is particularly temporary.

### Database Caching

Django can store its cached data in your database. This works best if you’ve got a fast, well-indexed database server.

To use a database table as your cache backend:

- Set [BACKEND](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-BACKEND) to `django.core.cache.backends.db.DatabaseCache`
- Set [LOCATION](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-LOCATION) to `tablename`, the name of the database table. This name can be whatever you want, as long as it’s a valid table name that’s not already being used in your database.

In this example, the cache table’s name is `my_cache_table`

```python
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'my_cache_table',
    }
}
```

Unlike other cache backends, the database cache does not support automatic culling of expired entries at the database level. Instead, expired cache entries are culled each time `add()`, `set()`, or `touch()` is called.

**Creating the cache table**

Before using the database cache, you must create the cache table with this command:

```python
python manage.py createcachetable
```

### Filesystem Caching

The file-based backend serializes and stores each cache value as a separate file. To use this backend set [BACKEND](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-BACKEND) to `"django.core.cache.backends.filebased.FileBasedCache"` and
[LOCATION](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-LOCATION) to a suitable directory. For example, to store cached data in `/var/tmp/django_cache`, use this setting:

```python
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.filebased.FileBasedCache',
        'LOCATION': '/var/tmp/django_cache', # C:/Foo/Bar if in windows system
    }
}
```

Make sure the directory pointed-to by this setting either exists and is readable and writable, or that it can be created by the system user under which your web server runs. Continuing the above example, if your server runs as the user `apache`, make sure the directory `/var/tmp/django_cache` exists and is readable and writable by the user `apache`, or that it can be created by
the user `apache`.

### **Local-memory caching**

This is the default cache if another is not specified in your settings file. If you want the speed advantages of in-memory caching but don’t have the capability of running Memcached, consider the local-memory cache backend. This cache is per-process (see below) and thread-safe. To use it, set [BACKEND](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-BACKEND) to `"django.core.cache.backends.locmem.LocMemCache"`. For example:

```python
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'unique-name',
    }
}
```

The cache [LOCATION](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-LOCATION) is used to identify individual memory stores. If you only have one `locmem` cache, you can omit the [LOCATION](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES-LOCATION); however, if you have more than one local memory cache, you will need to assign a name to at least one of them in order to keep them separate.

The cache uses a least-recently-used (LRU) culling strategy.

Note that each process will have its own private cache instance, which means no cross-process caching is possible. This also means the local memory cache isn’t particularly memory-efficient, so it’s probably not a good choice for production environments. It’s nice for development.

## The per-site cache

Once the cache is set up, the simplest way to use caching is to cache your entire site. You’ll need to add `'django.middleware.cache.UpdateCacheMiddleware'` and`'django.middleware.cache.FetchFromCacheMiddleware'` to your [MIDDLEWARE](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-MIDDLEWARE) setting, as in this example:

```python
MIDDLEWARE = [
    'django.middleware.cache.UpdateCacheMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.cache.FetchFromCacheMiddleware',
]
```

`FetchFromCacheMiddleware` caches GET and HEAD responses with status 200, where the request and response headers allow. Responses to requests for the same URL with different query parameters are considered to be unique pages and are cached separately. This middleware expects that a HEAD request is answered with the same response headers as the corresponding GET request; in which case it can return a cached GET response for HEAD request.

Additionally, `UpdateCacheMiddleware` automatically sets a few headers in each [HttpResponse](https://docs.djangoproject.com/en/4.1/ref/request-response/#django.http.HttpResponse) which affect [downstream caches](https://docs.djangoproject.com/en/4.1/topics/cache/#downstream-caches):

- Sets the `Expires` header to the current date/time plus the defined
[CACHE_MIDDLEWARE_SECONDS](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHE_MIDDLEWARE_SECONDS).
- Sets the `Cache-Control` header to give a max age for the page –
again, from the [CACHE_MIDDLEWARE_SECONDS](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHE_MIDDLEWARE_SECONDS) setting.

## The per-view cache

A more granular way to use the caching framework is by caching the output of individual views. `django.views.decorators.cache` defines a `cache_page` decorator that will automatically cache the view’s response for you:

```python
from django.views.decorators.cache import cache_page

@cache_page(60 * 15)
def my_view(request):
    ...
```

`cache_page` takes a single argument: the cache timeout, in seconds. In the above example, the result of the `my_view()` view will be cached for 15 minutes. (Note that we’ve written it as `60 * 15` for the purpose of readability. `60 * 15` will be evaluated to `900` – that is, 15 minutes multiplied by 60 seconds per minute.)

The cache timeout set by `cache_page` takes precedence over the `max-age` directive from the `Cache-Control` header.

The per-view cache, like the per-site cache, is keyed off of the URL. If multiple URLs point at the same view, each URL will be cached separately. Continuing the `my_view` example, if your URLconf looks like this:

```python
urlpatterns = [
    path('foo/<int:code>/', my_view),
]
```

then requests to `/foo/1/` and `/foo/23/` will be cached separately, as you may expect. But once a particular URL (e.g., `/foo/23/`) has been requested, subsequent requests to that URL will use the cache.

By default, the `default` cache will be used, but you can specify any cache you
want:

```python
@cache_page(60 * 15, cache="other_cache")
def my_view(request):
    ...
```

You can also use specify per-view cache in the URL configurations

```python
from django.views.decorators.cache import cache_page

urlpatterns = [
    path('foo/<int:code>/', cache_page(60 * 15)(my_view)),
]
```

## Template Fragment Caching

Template fragment caching gives you the most control over what gets cached on your site. Template fragment caching enables you to cache specific parts of your template where huge calculations are done. We can do this with the cache template tag, `{% cache %}`.

The `{% cache %}` template tag caches the contents of the block for a given amount of time. It takes at least two arguments: the cache timeout, in seconds, and the name to give the cache fragment. The fragment is cached forever if timeout is `None`. The name will be taken as is, do not use a variable. For example:

```python
{% load cache %}
{% cache 500 sidebar %}
    .. sidebar ..
{% endcache %}
```

Sometimes you might want to cache multiple copies of a fragment depending on some dynamic data that appears inside the fragment. For example, you might want a separate cached copy of the sidebar used in the previous example for every user of your site. Do this by passing one or more additional arguments, which may be variables with or without filters, to the `{% cache %}` template tag to uniquely identify the cache fragment:

```python
{% load cache %}
{% cache 500 sidebar request.user.username %}
    .. sidebar for logged in user ..
{% endcache %}
```

## The Low-Level Cache API

Sometimes, caching an entire rendered page doesn’t gain you very much and is, in fact, inconvenient overkill.

Perhaps, for example, your site includes a view whose results depend on many expensive queries, the results of which changes frequently, caching these parts with per-view caching or per-site caching is not ideal, but you would still like to cache some parts of view that rarely change.

For cases, like these, django provides a low-level API. You can use this API to store any [picklable objects](https://stackoverflow.com/questions/3603581/what-does-it-mean-for-an-object-to-be-picklable-or-pickle-able) in python to your cache. You can cache

### Accessing the Cache API

You can access the caches configured in the [CACHES](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CACHES) setting through a dict-like object: `django.core.cache.caches`. Repeated requests for the same alias in the same thread will return the same object. As a shortcut, the default cache is available as `django.core.cache.cache`:

```python
>>> from django.core.cache import cache
```

Example:

```python
from django.shortcuts import render
from .models import Posts
from django.core.cache import cache

def cache_recipes_view(request):
    latest_posts = cache.get('latest_posts')
    if latest_posts is None:
        latest_posts = Posts.objects.all().order_by("-updated_at")[:5]
        cache.set('recipes', latest_posts)

    return render(request, 'blog/latest_posts.html', {
        'posts': latest_posts
    })
```

**Common Methods**:

cache.set(”key”, value) -  Set value to any picklable python object with given key.

cache.get(”key”) - Retrieve the value of key from cache

cache.get_or_set(”key”, value_if_not_present, 100): Get value if exists as set value passed in as parameter for timeout of 100 seconds.

cache.get_many(list_of_keys): Eg: cache.get_many([’name’, ‘age’, ‘job_title’]) - Return multiple values as dictionary. 

cache.set_many(dictionary_object, timeout): Eg: cache.set_many({”name”:”Dev”, “age”:18}, 100)

cache.delete(key) - Delete an object from cache memory.

cache.clear() - Clears whole cache memory.

cache.touch(key,timeout) - Set new timeout for given key.

cache.incr(key, delta=1) - Increment the key(only for integers), by value delta. Default 1 if none is specified

cache.decr(key, delta=1) - Decrement the key, value delta. Default 1 if none is specified. 

## Conclusion

This article's aim was to take you from not knowing anything about caching in Django applications to showing you the different ways in which you can cache data when building Django applications. Hopefully, I was successful.

With this article, you can add caching to any part of your application. It's not advisable to cache the entire site unless you have excess memory and don't care about cutting costs. Try to make a 
calculated decision when picking portions of your site to cache.

Now that you have learned all this, hopefully, you will confidently implement the knowledge in your future Django projects or when it is expected by the company you work for.
