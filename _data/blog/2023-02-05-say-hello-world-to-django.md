---
template: BlogPost
path: /say-hello-world-to-django/
date: 2023-02-05T12:18:10.362Z
title: Say "Hello World" to Django
metaDescription: >-
  Learn how to create a simple "Hello World" app using the high-level full stack
  open source web framework, Django. This article covers the creation of a
  virtual environment, installation of Django, and the setup of a Django
  project.
thumbnail: /assets/hello-world-django.jpg
---
Django is a high-level full stack open source web framework written in python, that encourages rapid development and clean, pragmatic design. Django comes with lots of advance functionalities  baked in which saves developers a lot of time. The simplicity Django offers lets developers focus more on writing the app instead of rewriting the same wheel. Since it's release in 2003 Django has proven to be the most productive framework for Python developers to know more about Django read: [Django – The Web Framework for Perfectionists with Deadlines.](https://www.djangoproject.com/)

In this article, we will create a simple yet traditional “hello world”, app, which basically means you will learn one line of code

```python
return HttpResponse("Hello World")
```

but along with this, one line of code, you’ll also learn how to create a virtual environment to make sure all your packages stay at a same place, making it easier to develop, and scale your “Hello World” app if you want ; ). You’ll briefly learn about the file structure django uses, and what the heck does [views.py](http://views.py), [urls.py](http://urls.py) and [settings.py](http://settings.py) files mean.

<div class="tenor-gif-embed" data-postid="18002878" data-share-method="host" data-aspect-ratio="1.56863" data-width="100%"><a href="https://tenor.com/view/the-universe-tim-and-eric-mind-blown-mind-blown-meme-mind-explosion-mind-explosion-meme-gif-18002878">The Universe Tim And Eric Mind Blown GIF</a>from <a href="https://tenor.com/search/the+universe+tim+and+eric-gifs">The Universe Tim And Eric GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

If you ain’t no beginner then you can read these posts about - [Scalability & Security](https://simplifiedweb.netlify.app/build-scalable-and-secure-apis-with-django-rest-framework), [Performance Optimization](https://simplifiedweb.netlify.app/unlock-full-potential-django-app-performance-optimization-techniques) and; [Best Deployment Practices](https://simplifiedweb.netlify.app/django-and-deployment-best-practices-for-deploying-django-applications/) for your Django application. 

## Let’s start

In this article, we will create the traditional "Hello, World!" app, which will basically display the string 'Hello, world!' in the browser. This might be your first Django app so pay close attention to the core principles of Django which we will discuss later in the article.

### **Creating A Virtual Environment**

Though this is an optional step yet it is highly recommended to use virtual environments in your projects. In a nutshell, virtual environment lets you have an isolated space on your computer for different Python projects, ensuring that each of your projects can have its own set of dependencies and modules that won’t disrupt any of your other projects.

Let's kick off by creating a virtual environment for our hello world project.

**********************For Windows**********************

```bash
virtualenv mysite
mysite\Scripts\activate.bat
```

********For Unix********

```bash
virtualenv mysite
source mysite/bin/activate
```

Now you should see `(django)` prefixed in your terminal, which indicates that the virtual environment is successfully activated, if not then go through the guide again.

### Installing Django in Virtual Environment

```bash
(mysite)>>>pip install Django
```

This will install the latest version of django in our virtual environment. 

### Creating a Django Project

```bash
django-admin startproject hello_world
```

Executing this will invoke the `django-admin.py` script which will set up a new Django project instance name `hello_world` in the working directory.

You’ll have files created similar to these

```bash
hello_world/
   manage.py
   hello_world/
      __init__.py
      settings.py
      urls.py
      wsgi.py
```

Let’s briefly go over each file

**manage.py** - Command line utility lets you interact with your Django project.

**__init__.py** –  a blank Python script whose presence indicates to the Python interpreter that the directory is a Python package.

**settings.py** – Contains the configuration settings for the Django project.

**urls.py** – Contains URL patterns for the Django project.

**wsgi.py** – Contains WSGI configuration properties for the Django project.

Now, let's apply migrations and test our project. 

```bash
python manage.py runserver
```

This will start the Django's built-in server now open your preferred browser and navigate to this address `http://127.0.0.1:8000/` if everything went well you should see the default Django's welcome page.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e563fd4e-321e-4f8e-a4fa-bdf62d9e3f15/Untitled.png)

## Finally, hello world

Till now everything was about the configuration which is needed to be done for any web app, now it's time to actually design the app. Suppose you were creating a hello world app without a framework you'd simply type Hello world into a text file, call it `hello.html`, and upload it to a directory on a web server somewhere.

Notice in this process you've specified two key pieces of information about that web page: its contents (the string Hello world) and its URL (for example, `http://www.example.com/hello.html`).

With Django, you specify those same two things, but in a different manner. The view function produces the contents of the page in the `views.py` file and the URL is specified in `urls.py` file.

Create a file called [views.py](http://views.py) in your project’s directory.

```python
from django.http import HttpResponse

def index(request):
    return HttpResponse('Hello, World!')
```

First, we imported the `HttpResponse` class from `django.http` module then we made a function that takes in a request and returns a `HttpResponse` object i.e. the string 'Hello, World!'. Note that every view function must take atleast one parameter by convention called request.

In order to see this view in our browser, we need to map this view in our URL configurations. Open the `urls.py` file of the main project. Which should look like this.

```python
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Now we need to tell Django explicitly that we need to activate the view for a particular URL

```python
from django.contrib import admin
from django.urls import path
# imported views
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # configured the url
    path('',views.index, name="homepage")
]
```

First, we imported the views from project’s directory then in the URL patterns we added the path for the view which is the homepage hence blank string denoted with `' '` than we mapped this URL to our index view, and at last the optional argument name which we assign to homepage. This implies every request to the homepage should return the 'Hello, world!' string.

Now let's test out our app save the files open terminal and run the development server.

```bash
python manage.py runserver
```

Now visit `http://127.0.0.1:8000/` you should see Hello, World! written there.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bedd6837-211f-4903-8783-037c76526a82/Untitled.png)

That’s all for today folks. You’ve learnt to create a hello world project in django. You can check my [ultimate django cheatsheet](https://simplifiedweb.netlify.app/the-ultimate-django-cheatsheet-because-even-ninjas-need-a-little-help-sometimes) to learn more about django.
