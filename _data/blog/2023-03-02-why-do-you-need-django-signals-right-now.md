---
template: BlogPost
path: /why-do-you-need-django-signals-right-now/
date: 2023-03-02T12:50:38.960Z
title: Why do you need django signals right now?
metaDescription: >-
  Learn about django signals. Also learn about pre-save, post-save,pre-delete
  and post-delete signals and how to use them in your django app.
thumbnail: /assets/django-signals.jpg
---
Meet Jane, a passionate software developer who loves building robust and efficient web applications using Django. Jane is currently working on a project where she needs to execute a certain piece of code based on certain events that occur in her app.

She has heard about Django signals, but she is not quite sure what they are and how they work.

Django signals are a powerful tool for executing code based on certain events in your Django application. 

Signals are decoupled and allow senders to notify a set of receivers that some action has taken place. 

This can be useful for automating tasks, such as sending emails, updating records, or logging data, whenever a certain event occurs in your app. In this tutorial, we will go through the process of using Django signals to execute code based on certain events in your app.

> You can check out the [github repository](https://github.com/Dev-Mehta/django-signals-tutorial) to follow along

## Understanding Django Signals

Django signals are a way to allow certain senders to notify a set of receivers that some action has taken place. Signals are sent by senders, using the `Signal.send()` method, and are received by receivers, using the `@receiver` decorator.

There are several built-in signals in Django, such as `pre_save`, `post_save`, `pre_delete`, and `post_delete`. These signals are sent whenever a model instance is saved or deleted. You can also create custom signals for your app.

Django signals can be used for a wide range of events, including user authentication, object creation, object deletion, and many more. By using signals, developers can create more modular and extensible code that is easier to maintain and test.

In the next section, we'll take a closer look at how Jane can use Django signals in her project to execute code based on certain events.

![image](https://user-images.githubusercontent.com/55938019/222434653-3035eace-fb31-4d9b-b31d-aca771956593.png)

## Creating a Signal Receiver

Now that you understand the basics of Django signals, it's time to explore how to use them in your own projects. Let's continue following the journey of our character, Jane, as she discovers the power of signals in her Django app.

Jane has been working on a web application that allows users to subscribe to different newsletters based on their interests. Whenever a user subscribes or unsubscribes from a newsletter, Jane needs to update the user's profile to reflect their choices. 

She could update the user's profile directly whenever a subscription or unsubscription occurs, but that would create extra code and make her application less modular. Instead, Jane decides to use signals to keep her code clean and organized.

The first step for Jane is to define the signals that her app will use. She creates two signals, one for subscribing and one for unsubscribing, and gives them descriptive names: `user_subscribed`
 and `user_unsubscribed`.

She also includes any relevant data that needs to be passed along with the signal, such as the user's email.

```python
# File: yourapp/signals.py
from django.dispatch import Signal

user_subscribed = Signal(providing_args=['user_email'])
user_unsubscribed = Signal(providing_args=['user_email'])
```

Once Jane has defined her signals, she needs to connect them to the appropriate functions that will execute whenever the signal is triggered. She creates two functions, `subscribe_newsletter` and `unsubscribe_newsletter`,that will update the user's profile whenever a subscription or unsubscription occurs.

```python
# File: yourapp/signals.py
...
from django.dispatch import receiver

...
@receiver(user_subscribed)
def subscribe_newsletter(sender, **kwargs):
    user_email = kwargs['user_email']
    
    # Business logic
		# user = User.objects.get(email=user_email)
    # user.profile.subscriptions.add("my_newsletter")
		# user.profile.save()
    print(f"Subscribed {user_email} to our newsletter")

@receiver(user_unsubscribed)
def unsubscribe_newsletter(sender, **kwargs):
    user_email = kwargs['user_email']
    
    # Business logic
		# user = User.objects.get(email=user_email)
    # user.profile.subscriptions.remove("my_newsletter")
		# user.profile.save()
    print(f"Unsubscribed {user_email} from our newsletter")

# Connecting recievers & signals
user_subscribed.connect(subscribe_newsletter)
user_unsubscribed.connect(unsubscribe_newsletter)
```

In this example, the `@receiver` decorator is used to register the `subscribe_newslettter()` function as a receiver for the `user_subscribed` signal. The function simply prints it out to the console.

## Use it in your views

![image](https://user-images.githubusercontent.com/55938019/222434985-dc0ffeb6-a5a4-4804-8873-2a49d35e34b6.png)

That’s it now Jane can use those signals in her `views.py` file.

```python
from .signals import user_subscribed, user_unsubscribed
from django.http import HttpResponse

def subscribe(request):
    user_email = request.GET.get('user_email')
    if user_email is None:
        return HttpResponse("Please provide a user_email parameter in GET request.")
    else:
        user_subscribed.send(sender=request.user, user_email=user_email)
        return HttpResponse(f"Subscribed {user_email} to our newsletter.")
    
def unsubscribe(request):
    user_email = request.GET.get('user_email')
    if user_email is None:
        return HttpResponse("Please provide a user_email parameter in GET request.")
    else:
        user_unsubscribed.send(sender=request.user, user_email=user_email)
        return HttpResponse(f"Unsubscribed {user_email} from our newsletter.")
```

With her signals and functions in place, Jane can now use them in her application whenever a user subscribes or unsubscribes from a newsletter. She simply needs to import the appropriate signal and send it with the relevant data.

## To make it work…

There is one catch to this situation, the code isn’t functional yet. To make our code work as desired we need to import our signals into our application’s config file - `apps.py`

```python
from django.apps import AppConfig

class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'

    def ready(self) -> None:
        import accounts.signals
				print("Signals connected")
```

In this example, the `ready()` method imports the `signals.py` module, which contains the our signals. It then logs a message to indicate that the signal receiver has been connected.

Now when you send requests to your view endpoints, you can see your signals working in action.  

![image](https://user-images.githubusercontent.com/55938019/222435149-314a4b23-23a8-4297-9018-10fac838b122.png)

## Also see

You can also use in-built model signals like `pre-save`.

```python
from django.contrib.auth.models import User
from django.db.models.signals import pre_save

@receiver(pre_save, sender=User)
def user_created(sender, **kwargs):
    user = kwargs['instance']
		# Other business logic you might want to add...
    print(f"Creating user, {user}")
```

[Django documentation](https://docs.djangoproject.com/en/4.1/topics/signals/) will always be the number 1 resource for further studying

[Also, this](https://simpleisbetterthancomplex.com/tutorial/2016/07/28/how-to-create-django-signals.html) is a good blog post by simpleisbetterthancomplex, if you want a detailed overview; rather than an introductory post like this one. 

## Conclusion

You can check out the [github repository](https://github.com/Dev-Mehta/django-signals-tutorial) for all the code listed here.

Django signals provide a powerful tool for executing code based on certain events in your application. By using signals, you can keep your code modular and organized, making it easier to maintain and update in the future. 

Whether you're building a simple web app or a complex enterprise application, signals can help you streamline your code and create a more efficient development process.

Happy Coding!
