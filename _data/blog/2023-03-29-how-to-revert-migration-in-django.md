---
template: BlogPost
path: /how-to-revert-migration-in-django/
date: 2023-03-29T09:11:31.453Z
title: How to revert migration in django?
---
Imagine you are a developer working on a Django web application for a client. You have been tasked with adding a new feature that requires changes to the database schema. You create a new Django migration using the `python manage.py makemigrations` command to make these changes. Then you apply the migration using the `python manage.py migrate` command, which updates the database schema.

After deploying the new feature, you receive feedback from the client that the feature is causing issues and needs to be reverted. You realize that you need to undo the changes made by the migration to restore the previous database schema. Holy hell! I hate when they do this. In this article, I will guide you on reverting migrations so that you can be saved from such horrors.

In Django, migrations are used to manage changes in your database schema. However, sometimes it's necessary to revert a migration, particularly if you made a mistake or if you want to undo a particular change.

Here's how you can revert a migration in Django

First, you need to find the migration that you want to revert. You can do this by running the following command in your terminal

```python
python manage.py showmigrations
```

This will display a list of all the migrations in your project. Find the migration that you want to revert to and take note of its name.

Once you have identified the migration to revert, you can use the following command to revert it:

```python
python manage.py migrate <app_name> <migration_name>
```

Replace `<app_name>` with the name of your app and `<migration_name>` with the name of the migration that you want to revert. For example:

```bash
python manage.py migrate myapp 0002_previous_migration
```

This will roll back the migration and undo the changes it made to your database schema.

Well akshually🤓, you don’t even need any of that, you just need the migration number of the migration you want to revert back to

```python
python manage.py migrate myapp 0002
```

That's it! By following these steps, you can easily revert a migration in Django and undo any changes made to your database schema.

Happy Coding!
