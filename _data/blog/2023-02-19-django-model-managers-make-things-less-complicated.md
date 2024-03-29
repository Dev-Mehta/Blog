---
template: BlogPost
path: /django-model-managers-make-things-less-complicated/
date: 2023-02-19T12:45:01.366Z
title: Django Model Managers - Make things less complicated
metaDescription: >-
  Learn how Django model managers can simplify your code and make complex
  queries and model-level operations easier to manage. Discover how to
  streamline your development experience and improve your application's
  maintainability with Django model managers.
thumbnail: /assets/django-model-managers.jpg
---
In this article, we will learn about django model managers. Recently when I was scrolling through  [r/django](https://www.reddit.com/r/django/) reddit community, I was excited to help other django developers; solve their errors. I went through some posts and read the problems to get started, and I found the first problem, I liked to solve.

The problem was “I would like to **apply logic to my apps by having methods written in models.py**. What is the best way to go about this. The documentation is great for the basics but I am **getting frustrated when working to apply business logic outside of views.py**. Any good resources on this type of flow? ***Business Logic in models.py?***”

You may have faced this frustration too sometimes, because django is a robust framework for perfectionists with deadlines, it expects us to figure this out ourselves(Or, so I thought, because this question was very well covered in documentation, which you like me, might won’t have read.)

So, I gave them the solution that I generally use, to write repetitive or common django filter queries in models.py file where you define your models, like this.

```python
from  django.db import models

class Post(models.Model):
	title = models.CharField(max_length=70)
	# ...
	
	def get_howto_guides(self):
		return Post.objects.filter(title__istartswith="how to")
```

At first, I didn't see anything wrong with this.  I was still learning and trying to make things work.

But soon, people on reddit pointed out that this approach was not optimal and the best place for this is the manager. A manager manages a set of models (so basically an SQL table) and a model is just a row in that table (it shouldn't know about other rows). And boy I was embarrassed.

I soon realized that as our codebase will grow, our models will become bloated with business logic that was better suited to our model managers.

It wasn't until I stumbled across the concept of model managers that I realized there was a better way to organize my code(If you use reddit, join [r/django](https://reddit.com/r/django). You will get to learn so many new things daily). Model managers, I learned, are a way to encapsulate model-level operations and queries in a clean and modular way.

## How to do it.

![Talk is cheap show me the code](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a029f10-1e38-4e29-9a12-89c4b63a550f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230219T125152Z&X-Amz-Expires=86400&X-Amz-Signature=4997b8b2ffac3c522102f38dd98a25629700e29f29c3389bf37c2335b83039c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

By default, Django adds a `Manager` with the name `objects` to every Django model class. However, if you want to use `objects` as a field name, or if you want to use a name other than `objects` for the `Manager`, you can rename it on a per-model basis. To rename the `Manager` for a given class, define a class attribute of type `models.Manager()` on that model. For example:

```python
from django.db import models

class Post(models.Model):
	# ...
	how_to = models.Manager()
```

Here, `Post.how_to` will generate an `AttributeError` while, `Post.how_to.all()` returns all the objects from that manager.

Now, I can fit all my business logic about “How to Guide Posts” in my how_to model manager. For example, if I wanted all the posts that starts with How to, or are basically how-to-do-x type of articles, I will write the following model manager separately for those kinds of posts.

 

```python
from django.db import models

class HowtoPostsManager(models.Manager):
	def get_queryset(self):
		return super().get_queryset().filter(title__istartswith="how to")
		# istartswith lookup field is used to
		# lookup case-insensitive titles.
		
class Post(models.Model):
	# ...
	objects = models.Manager() # Default Manager
	how_to = models.HowtoPostsManager() # our custom manager
```

Now `Post.objects.all()`, will return all the posts from the database, while `Post.how_to.all(),` will return only posts whose title starts with “How to”.

This example also pointed out another interesting technique: using multiple managers on the same model. You can attach as many `Manager()` instances to a model as you’d like. This is a non-repetitive way to define common “filters” for your models.

## QuerySets as model managers

You can also define common filters as model managers in your django models. For example,

```python
from django.db import models

class HowtoQuery(models.QuerySet):
	def title_starts_with_howto(self):
		return self.filter(title__istartswith="how to")
		
class Post(models.Model):
	# ...
	objects = models.Manager() # Default Manager
	how_to = HowtoQuery.as_manager() # our custom manager

# This will be identicle to the previous code example,
# we looked at
```

> Not every `QuerySet` method makes sense at the `Manager` level; for instance django prevents the `QuerySet.delete()` method from being copied onto the `Manager` class.
> 

With model managers, I could write custom methods for my models that handled complex logic, filtering, and aggregation. I could also create new querysets that were specific to my application's needs, which made it easier to reuse code across my views.

As I started to use model managers more in my applications, I found that my code was becoming cleaner and easier to read. I was also able to remove a lot of code from my models and keep my business logic closer where it belonged.

In retrospect, it's hard to believe that I didn't know about model managers even after coding in Django since a considerable amount of time. But I'm grateful that I came across this concept when I did, as it completely transformed the way I wrote code and helped me to become a better Django developer.

So, to anyone who is struggling with complex views and a messy codebase, I highly recommend exploring the power of model managers in Django. You might be surprised by how much they can simplify your code and improve your overall development experience.
