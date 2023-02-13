---
template: BlogPost
path: /django-queries-101-write-efficient-queries/
date: 2023-02-13T11:52:46.041Z
title: Django Queries 101 - Write Efficient Queries
metaDescription: >-
  Get a comprehensive understanding of Django ORM querying with this
  step-by-step guide on Django Queries. Learn how to write efficient and secure
  database queries for your Django web applications
thumbnail: /assets/django-making-queries.jpg
---
As we all know, Django is a fantastic framework for building web applications, but it's important to have a solid understanding of its database querying capabilities to ensure optimal performance and security.

In this post, we'll be diving deep into the world of Django ORM (Object-Relational Mapping) queries. Whether you're a seasoned Django developer or just starting out, this guide will provide you with all the information you need to write efficient, secure, and scalable database queries. 

From the basics of ORM querying to advanced query optimization techniques, we'll cover it all. So, let's get started and learn how to make the most of Django queries in our web applications.

### Prerequisites

- Prior experience of working with Django & Python(Beginner to intermediate)
- Django≥2.2.6
- Python≥3.4

[Effective Python](https://effectivepython.com/) & [Two Scoops of Django](https://www.feldroy.com/books/two-scoops-of-django-3-x) are a good place to start, along with [Official Django Documentation](https://www.djangoproject.com/). 

## Making  Queries

Once you’ve created your data models, Django automatically gives you a database-abstraction API that lets you create, retrieve, update and delete objects. 

Throughout this article, we’ll be referring to these models

```python
from datetime import date
from django.db import models

class Blog(models.Model):
    name = models.CharField(max_length=100)
    title = models.TextField()

    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Article(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    body_text = models.TextField()
    pub_date = models.DateField()
    mod_date = models.DateField(default=date.today)
    authors = models.ManyToManyField(Author)
```

### Creating objects

To create an object, instantiate it using keyword arguments to the model class, then call `save()` to save it to the database.

Assuming models live in a file `mysite/blog/models.py`, here’s an example:

```python
>>> from blog.models import Blog
>>> b = Blog(name='John Doe', title='Hello Internet')
>>> b.save()
```

This performs an `INSERT` SQL statement behind the scenes. Django doesn’t hit the database until you explicitly call `save()`

### Updating existing objects

To save changes to an object that’s already in the database, use `save()`.

Given a `Blog` instance `b` that has already been saved to the database, this example changes its name and updates its record in the database:

```python
>>> b.name = 'Jane Doe'
>>> b.save()
```

This performs an `UPDATE` SQL statement behind the scenes. Django doesn’t hit
the database until you explicitly call `save()`

Updating a [`ForeignKey`](https://docs.djangoproject.com/en/4.1/ref/models/fields/#django.db.models.ForeignKey) field works exactly the same way as saving a normal field – assign an object of the right type to the field in question. This example updates the `blog` attribute of an `Article` instance `article`, assuming appropriate instances of `Article` and `Blog` are already saved to the database (so we can retrieve them below):

```python
from blog.models import Blog, Article
article = Article.objects.get(pk=1)
tech_blog = Blog.objects.get(name="Techies")
article.blog = tech_blog
article.save()
```

Updating a [`ManyToManyField`](https://docs.djangoproject.com/en/4.1/ref/models/fields/#django.db.models.ManyToManyField) works a little differently – use the `add()` method on the field
to add a record to the relation. This example adds the `Author` instance `joe` to the `article` object:

```python
>>> from blog.models import Author
>>> joe = Author.objects.create(name="Joe")
>>> article.authors.add(joe)
>>> john = Author.objects.create(name="John")
>>> paul = Author.objects.create(name="Paul")
>>> george = Author.objects.create(name="George")
>>> ringo = Author.objects.create(name="Ringo")
>>> entry.authors.add(john, paul, george, ringo)
```

## Retrieving objects

To retrieve objects from your database, you will need to have a `QuerySet` via a model manager on your django model. A queryset is nothing but representation of a collection of objects from your database. 

It can have zero, one, two, three..many filters. Filters narrow down the end results based upon the filtering parameters.

You get a `QuerySet` by using your model’s`Manager`. Each model has at least one
`Manager`, and it’s called `objects` by default. Access it directly via the model class, like so:

```python
>>>Blog.objects
<django.db.models.manager.Manager object at ...>
>>>b = Blog.objects.filter(name="Techies")
```

### Retrieving all objects

The simplest way to retrieve all objects is to use the built-in `all()` method.(To be fair I don’t even know other ways of doing it.)

```python
>>>Blog.objects.all()
```

### Retrieving specific objects by using filters

`Model.objects.filter(**kwargs)` - Returns a new `QuerySet` containing objects that match the given parameters.

 

```python
Article.objects.filter(pub_date__year=2023)
# Return all articles published in 2023
```

`Model.objects.exclude(**kwargs)` - Returns a new `QuerySet` containing objects that do *not* match the given lookup parameters.

```python
Article.objects
	.filter(pub_date__year=2023)
	.exclude(title__startswith="How to")

# Returns all articles published in 2023,
# but excluding the ones whose title
# starts with "How to..."
```

> QuerySets are lazy - the code line with queryset doesn’t invoke any particular database calls/activity. It is when the objects from the querysets are used, the database calls are made for loading it to memory.
> 

### Retrieving a single object

If you know only one object matches your query, then you can use the `get()` method provided by django.

```python
>>> one_post = Article.objects.get(pk=1)
# Return article with primary_key(article_id) = 1
# This is same as
# >>> Article.objects.filter(pk=1)[0]
# ...remember filter() always returns QuerySet,
# ...but what you needed in this case was,
# ...Article object.
```

You can use any lookup filters or rather fields, just like you did in `filter()`.

> If there are no objects matching the given query, django will raise **DoesNotExist** Exception. If there are more than one objects matching the given query it will raise **MultipleObjectsReturned** Exception.
> 

## Slicing objects

Use python’s array slicing syntax to limit your QuerySet results. This is similar to LIMIT and OFFSET clauses of SQL.

For example this returns the first 5 posts made.

 

```python
Article.objects.all()[:5]
# Similar to,
# select * from articles limit 5
```

```python
Article.objects.all()[6:10]
# Similar to,
# select * from articles offset 5 limit 5
```

> Note that, negative indexing is not supported - For eg. Article.objects.all()[-1]
> 

## Field Lookups

Field lookups are similar to, how you specify WHERE clause in SQL. They look like `field__lookuptype=value`. 

 

```python
>>> Article.objects.filter(pub_date__gte="2023-01-01")
# Return all articles whose publication date
# is greater than or equal to 1st Jan, 2023.
# select * from articles where pub_date >= '2023-01-01'
```

`exact` - An exact match. For eg: Article.objects.get(title__exact=”Hello World”)

`iexact` - A case-insensitive match. So the same above query would return both articles → Hello World, & hello world or even HelLo WorLd

`contains` - Case sensitive containment lookup. For eg: `Article.objects.get(title__contains=”how to”)`, will return all articles that contain “how to” within their title.

`startswith`, `endswith` - Starts-with and ends-with search, respectively. There are also
case-insensitive versions called `istartswith` and `iendswith`.

## Conclusion

And there you have it, folks! I hope this comprehensive guide on Django Queries 101 has given you a solid foundation to start writing basic queries in your Django applications. 

I'm confident that with the knowledge you've gained from this post, you'll be know how to perform lookup queries on django models.

If you have any questions or would like to share your own tips and tricks for writing efficient Django queries, please don't hesitate to [contact me](https://www.notion.so/Dashboard-4d11e4c37b2548dfb5c1bae6670b077b). I'd love to hear from you!
