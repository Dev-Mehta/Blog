---
template: BlogPost
path: /django-cbvs-or-fbvs/
date: 2023-03-21T10:29:56.130Z
title: Django - CBVs or FBVs?
thumbnail: /assets/django-cbvs-or-fbvs.jpg
---
Meet Jane. Jane is a Django developer working on various projects. In one of her projects, Jane needed to build complex views which needed to be more extensible and flexible. Jane got introduced to class-based views in Django. At first, like any of us would, Jane was hesitant to rewrite her views to class-based views. But as she delved deeper, she realized that there were many benefits to using class-based views

To begin with - we use class-based views in Django because we don’t want to end up in the same situation as Jane — nobody would like to rewrite their function-based views to class-based views(you will need to - if your app scales). 

Class-based views provide an alternative way to implement views as Python objects instead of functions. They do not replace function-based views, but have certain differences and advantages when compared to function-based views:

- Organization of code related to specific HTTP methods (`GET`, `POST`,
etc.) can be addressed by separate methods instead of conditional branching.
- Object oriented techniques such as mixins (multiple inheritance) can be
used to factor code into reusable components.

During the old times of django, there was only a simple method of writing views - Django would provide `HttpRequest` to your function and expect an `HttpResponse` in return. Then function-based views were introduced to ease view development. The problem with function-based generic views is that while they covered the simple cases well, there was no way to extend or customize them beyond some configuration options, limiting their usefulness in many real-world applications.

## But…..

```python
from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import MyForm

def create_post(request):
	if request.method == "POST":
		form = MyForm(request.POST)
		if form.is_valid():
			form.save()
			return HttpResponseRedirect("/success/")
		else:
			return render(request, "post.html", {"errors":form.errors})
	else:
		form = MyForm
		return render(request, "post.html", {"form":form})
```

> But this view works really work for me, why will I ever use a class-based view if it just does the same work, and if its hard to grasp as a beginner.
> 

You may think like this, but what if you could do all that with this,

```python
from django.views.generic.edit import CreateView
from .models import Post

class CreatePost(CreateView):
	model = Post
	fields = ['title', 'content']
```

This is just a simple example of how class-based views are more concise and readable, but that’s not it. There are more generic views that you can use like

- CreateView,
- UpdateView,
- DeleteView,
- ListView,
- DetailView

Additionally, by organizing your code into methods that correspond to different parts of the request-response cycle, you can make it easier for other developers to understand what's going on. And by using mixins and generic views, you can avoid writing repetitive code that can be hard to read and maintain.

You can also subclass a class and refine methods like `get_context_data` for specific cases, and leave the rest as-is. You can't do that with functions.

For instance, you might need to create a new view that does everything a previous one does, but you need to include extra variables in the context. Subclass the original view and override the `get_context_data` method.

Also, separating the steps needed to render the template into separate methods promotes clearer code - the less done in a method, the easier it is to understand. With regular view functions, it's all dumped into one processing unit.

You might even not need to write a view for simpler cases, you can use them directly like this

```python
path('author/<int:pk>/', DetailView.as_view(model=Author)),
```

You can [start learning](https://docs.djangoproject.com/en/4.1/topics/class-based-views/intro/) about Django class-based views from here. Once you have read the documentation or at least used CBVs a few times in your app, I would recommend using [https://ccbv.co.uk/](https://ccbv.co.uk/) - It is the ultimate resource for Class Based Views, giving you an easy way to view CBV code

## Famous final words….

In the world of Django development, while function-based views might seem like the obvious choice, once you put on those class-based view glasses, you'll realize there's a whole new world of possibilities waiting for you. 

With the power of mixins and the elegance of generic views, Django class-based views can help you build complex, extensible, and scalable views with ease. So don't be like Jane who's hesitant to make the switch, and start using class-based views today!

Happy Coding!
