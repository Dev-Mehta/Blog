---
template: BlogPost
path: /common-django-exceptions-and-how-to-approach-them/
date: 2023-01-30T12:13:02.452Z
title: Common Django Exceptions & How to Approach Them
metaDescription: >-
  Learn how to handle common Django exceptions in your web application. Discover
  the meaning behind each exception and get practical code examples to help you
  tackle these errors. Improve the stability and security of your Django project
  today!
thumbnail: /assets/common-django-exceptions.jpg
---
Hey there! Have you ever thrown a fantastic party only to have a few uninvited guests crash it? Well, the same thing can happen in your code. But instead of loud, obnoxious humans, you get unexpected exceptions. Ugh, the horror!

Django, like any good host, tries to prevent these unwanted guests from showing up. But sometimes, despite its best efforts, exceptions sneak their way in. And when they do, they can cause a ruckus and ruin the whole code party.

So, let's take a closer look at some of the most common exceptions in Django, and how to get rid of them before they cause too much damage.

> The aim of this blog is not to spit out common django exceptions and explain them in 3 lines, but to make the readers familiar with problem-solving while creating their own projects. The next time you see one of these errors, you should be confidently looking at traceback, and shall be immediately able to figure out, what simple mistake is causing runtime errors.
> 

## 1. ImproperlyConfigured

This exception is like the drunk uncle who shows up to the party without an invitation. He's loud and won't leave, but the solution is simple: just make sure all your configurations are in place.

### **************Example**************

Let’s suppose you are a beginner(you could be a master reading this post too),  you've followed installations of Django using pip in a virtualenv since you are learning Django. When the Django docs told you to type this in the Python shell

```python
from django import template
t = template.Template("My name is {{ name }}.")
```

You got the following exception, and you don’t know how to solve it.

```bash
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\template\base.py", line 148, in __init__
    engine = Engine.get_default()
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\template\engine.py", line 76, in get_default
    for engine in engines.all():
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\template\utils.py", line 90, in all
    return [self[alias] for alias in self]
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\template\utils.py", line 87, in __iter__
    return iter(self.templates)
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\utils\functional.py", line 48, in __get__
    res = instance.__dict__[self.name] = self.func(instance)
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\template\utils.py", line 28, in templates
    self._templates = settings.TEMPLATES
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\conf\__init__.py", line 82, in __getattr__
    self._setup(name)
  File "C:\Users\admin\AppData\Local\Programs\Python\Python37\lib\site-packages\django\conf\__init__.py", line 67, in _setup
    % (desc, ENVIRONMENT_VARIABLE))
django.core.exceptions.ImproperlyConfigured: Requested setting TEMPLATES, but settings are not configured. You must either define the environment variable DJANGO_SETTINGS_MODULE or call settings.configure() before accessing settings.
```

Quite bugging right? Well the error, was quite simple, you just needed to, configure django settings in your shell, before using django functions in your code, as you did here, but sometimes people writing documentation overlook, this simple thing, which might lead to lose of interest in a beginner’s mind to even bother learning django. 

```python
>>> import os
>>> import django
>>> import sys
>>> sys.path.append("project_path")
>>> os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")
>>> django.setup()

# Now your code, which you wanted to run
>>> from django import template
>>> t = template.Template("My name is {{ name }}.")

# Or if you are already in your project's working directory.
# running this command would've also worked
python manage.py shell
```

## 2. FieldDoesNotExist

FieldDoesNotExist: This exception is like the cousin who keeps trying to bring his new girlfriend to the party even though you've never heard of her. Just double-check the spelling of your field names and make sure they're in the right place.

```python
"""
Let's say you have this model
"""

class Post(models.Model):
		title = models.CharField()
		content = models.TextField()
		created_on = models.DateField(auto_now_add=True)

# FieldDoesNotExist will occur if you try 
# accessing a field that simply doesn't exist
p = Post.objects.all()[::-1][0]
p._meta.get_field('tilte')

"""
FieldDoesNotExist
 Traceback (most recent call last)
<ipython-input-21-1847a4b68f71> in <module>
----> 1 p._meta.get_field('tilte')

~\AppData\Local\Programs\Python\Python37\lib\site-packages\django\db\models\options.py in get_field(self, field_name)
    608             return self.fields_map[field_name]
    609         except KeyError:
--> 610             raise FieldDoesNotExist("%s has no field named '%s'" % (self.object_name, field_name))
    611
    612     def get_base_chain(self, model):

FieldDoesNotExist: Post has no field named 'tilte'
"""
```

## 3. DoesNotExist

DoesNotExist: This exception is like the time you threw a party and no one showed up. It's a bummer, but at least you can solve it by checking your database to see if the object you're trying to find actually exists.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f1e89ff-134a-4b05-9a8d-f5b4475ad669/Untitled.png)

In this case, where the developer was creating a delete view for deleting a model object, it was already deleted, and the same function was called twice. Thus, it was a simple error and could  be easily avoided by looking at your code once again, or reloading your database again. 

## 4. MultipleObjectsReturned

MultipleObjectsReturned: This exception is like the time you threw a party and too many people showed up. It can be overwhelming, but you can handle it by adjusting your query or processing multiple objects.

Suppose, you wrote a model for customers, and you wanted to access a customer named ‘John Doe’

```python
from .models import Customer
c = Customer.objects.get(name="John Doe") # Error prone method

# This query is likely to return MultipleObjectsReturned as
# there could be more than one users with same name.

# Thus it is also considered a good practice,
# to use unique-identifiers for each user

c = Customer.objects.get(id=47) # Correct method
```

## 5. ValidationError

ValidationError: This exception is like the friend who shows up in a bright orange suit when you told everyone to wear black. Just make sure your form data meets the necessary criteria before submitting it.

This occurs mostly while a user fills a form, so you may not be able to test it yourself while development, in this condition, you should use a try…catch block to raise a ValidationError and make sure that only correct data goes through your forms and atlast into your database.

## 6. PermissionDenied

PermissionDenied: This exception is like the bouncer who won't let your best friend into the party. Just double-check the user's permissions and make sure they have the right to party.

```python
from django.core.exceptions import PermissionDenied

def my_view(request, id):
    post = get_object_or_404(Post, id=id)
    if not request.user.has_perm('blog.view_post', post):
        raise PermissionDenied
    return render(request, 'post_detail.html', {'post': post})
```

In this example, the `my_view` function retrieves a `Post` object with the given `id` and checks if the current `request.user` has permission to view it. If the user does not have the necessary permission, a `PermissionDenied` error is raised.

In this case, the permission is defined as `blog.view_post` and it requires an object-level permission check. The `has_perm` method takes two arguments: the permission string, and the object to check the permission against.

It's worth noting that in order to use object-level permissions, your Django project needs to have the `django.contrib.auth` app installed and configured, and you need to define the necessary permissions using the `Meta` class in your model

## 7. IntegrityError

IntegrityError: This exception is like the time your friend brought a keg to the party even though you specifically said no alcohol. Just make sure your data meets the integrity constraints and the party can continue.

```python
from django.db import IntegrityError

def my_view(request):
    if request.method == 'POST':
        form = MyForm(request.POST)
        if form.is_valid():
            try:
                form.save()
            except IntegrityError:
                raise IntegrityError('Error: Duplicate entry for unique constraint')
        else:
            raise ValidationError('Invalid form data')
    return render(request, 'my_template.html', {'form': form})
```

In this example, the `my_view` function handles a form submitted via the POST method. If the form is valid, it's saved to the database using the `save` method. If there is an `IntegrityError`, it raises a new `IntegrityError` with a custom error message.

An `IntegrityError` can occur when a unique constraint in the database is violated, such as trying to insert a duplicate value into a unique column. This error can be caught and handled in the view, such as by displaying an error message to the user.

It's important to handle database errors such as `IntegrityError` in a way that ensures the consistency and integrity of the data in your database, and provides a clear error message to the user to help them resolve the issue.

## Conclusion

In conclusion, Django provides several built-in exceptions to handle various errors that may occur in your application. Understanding these exceptions and knowing how to handle them is crucial to developing a stable and secure web application.

By understanding these exceptions and how to handle them, you can develop a robust and secure web application in Django.
