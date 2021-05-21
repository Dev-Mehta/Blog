---
template: BlogPost
path: /introduction-to-python-a-masterclass-for-beginners
date: 2021-05-20T16:14:48.341Z
title: Introduction to Python - A masterclass for beginners
metaDescription: >-
  Get a jump-start on your programming career with our articles designed
  especially for both novice beginners and working professionals. You can take a
  look at our other articles here at SimplifiedWeb
thumbnail: /assets/Frame 1.png
---
# Introduction to Python - A Masterclass for Beginners
Get a jump-start on your programming career with our articles designed especially for both novice beginners and working professionals. You can take a look at our other articles here at [SimplifiedWeb](https://simplifiedweb.netlify.app/).

In this article, you will find fundamental concepts for programming beginners that will help you get started on your journey of converting coffee to a block of code soon. Basically, this tutorial focuses on the absolutely core essentials that you need to know about Python?

## What is Python?
According to [Wikipedia](https://en.wikipedia.org/wiki/Pythonidae), The Pythonidae, commonly known as pythons, are a family of nonvenomous snakes found in Africa, Asia, and Australia. Among its members are some of the largest snakes in the world.

![](https://media1.tenor.com/images/3fe51571ba1477be4d28db4fbb5a0c05/tenor.gif?itemid=6199080)

Jokes apart, Python in simpler terms is a High-Level Dynamic Programming Language that is interpreted rather than compiling.

Guido Van Rossum, the father of Python Programming Language had simpler goals in mind like beginner-friendly code, highly readable, and keeping it open source.

In other words, they focused on keeping the language as simple as possible so that even people coming from the non-programming background can understand what’s going on within the code.

## Features of Python
-   Simplicity: Python works on the principle of thinking less of the syntax and more of the code.
-   Portability: Python code can be shared and it would work the same every time, the same way it was intended to. 
-   Interpreted Language: Rather than compiling all the code and executing it at once, Python interprets the code line by line and execute it in the same manner. So you don’t have to worry about large memory tasks and other CPU heavy tasks.
-   Library Support: Python has covered almost every field of library and modules to help you develop your dream projects. Data science? Python has got your back. Web Development? Python has got your back.

## Jumping to the Python Basics

To get started with Python, first of all, you need to install Python on your computer right? To install python you can download it from [https://www.python.org/downloads/](https://www.python.org/downloads/) and install it. Some operating system also provides a package manager which can help you install python by one command.

After you have installed Python on your PC, it should look something like this.😄😄

![](https://res.cloudinary.com/devmehta/image/upload/v1621527093/Screenshot_2021-05-20_Introduction_to_Python_-_A_masterclass_for_beginners_rmrnyj.png)

Sorry, it should look something like this

![](https://res.cloudinary.com/devmehta/image/upload/v1621527120/Screenshot_2021-05-20_Introduction_to_Python_-_A_masterclass_for_beginners_1_qyen7w.png)

After you have installed python successfully you should get a file editor like Notepad called IDLE for python. Idle stands for Integrated Development and Learning Environment. It is available for PC users by default and not for Linux users out of the box. (Windows is getting an upper hand for once). Now let’s get started learning how to code in python.

### Comments in Python

“In computer programming, a comment is a programmer-readable explanation or annotation in the source code of a computer program. They are added to make the source code easier for humans to understand, and are generally ignored by compilers and interpreters.”

Single lines comments are written by using a \# in front of them.
Multiline comments are enclosed within triple quotes “”” Some comment
“””
```python
# This is a simple line comment.                                       
"""                                                                     
This is a                                                              
Multi line                                                              
comment.                                                               
"""
```
### Variables 

Variables in simpler terms are memory spaces where you can store data or
values. Unlike other languages, variables in python don’t need to
declare beforehand before assignment. The data type is automatically
assigned to the variable when you use it and it can be also changed
during the runtime. This makes python dynamically typed language. You
use the assignment operator(=) to assign values to the variable
```python
a=5 # int
b=5.0 # float
c=”Hello World” # str -> stands for string
print(a, b, c) # 5 5.0 Hello World
```
You can see the way I have assigned values to the variables in Python.
And if you are wondering, yes you can print multiple variables in a
single print statement.

### Datatypes in Python
Data types, basically type of data that a language supports such that it
is helpful to define a real-life entity like an employee, a book in
terms of coding. The possibilities are endless.

#### Numeric Data Types
As the name suggests, this is to store numerical data types in the
variables. You should know that they are immutable, meaning that the
specific data in the variable cannot be changed.

There are 3 numerical data types :
-   Integer: This is just as simple to say that you can store integer
    values in the variables. Ex : a = 10.
-   Float: Float holds the real numbers and are represented by a decimal
    and sometimes even scientific notations with E or e indicating the
    power of 10 (2.5e2 = 2.5 x 102 = 250). Ex: 10.24.
-   Complex Numbers: These are of the form a + bj, where a and b are
    floats and J represents the square root of -1 (which is an imaginary
    number). Ex: 10+6j.

#### Type Conversion

Type Conversion means the conversion of a single data type into another
data type. Let us understand with examples.
```python
a = 10
b = 3.142
c = 10+6j
print(int(b),float(a), str(c))
```
Output: 10.0 3 ’10+6j’

You can understand, type conversion by the code snippet above. ‘a’ as an
integer, ‘b’ as a float and ‘c’ as a complex number. You use the
float(), int(), str() methods that are in-built in Python which helps us
to convert them. Type Conversion can be really important when you move
into real-world examples.

A simple situation could be where you need to compute the salary of the
employees in a company and these should be in numeric format but they
are supplied to us in the string format. So to make our work easier, you
just use type conversion and convert the string of salaries into float
and then move forward with our work. Now let us head over to the List
data type in Python Basics.

#### Lists in Python

The list is like arrays that exist in other languages but with the
exception that they can have heterogeneous values (values that not of
the same datatype) in them, i.e, different data types in the same list.
Lists are mutable, meaning that data available in them can be variable.

For those who don’t know what an array is it is like a Rack that can
hold data in the way, you need it to. You can later access the data by
calling the position in which it has been stored which is called an
Index in a programming language. Lists are defined using either the
a=list() method or using a=[] where ‘a’ is the name of the list.

Python also supports negative indexing

![](https://res.cloudinary.com/devmehta/image/upload/v1621527562/Screenshot_2021-05-20_Introduction_to_Python_-_A_masterclass_for_beginners_2_hdvjh2.png)

You can see from the above picture that, the data that is stored in the
list and the index related to that data stored in the list. Note that
the indexing in Python always starts with ‘0’. You can access ‘o’ with
a[2] or a[-3].

#### Tuples

A Tuple in python is the same as lists. Just one thing to add here is,
tuples are immutable. Once you have declared the tuple, you cannot add,
delete or update the tuple. As simple as that. This makes tuples much
faster to access than lists since they are constant values.

Operations are similar to Lists but the ones where updating, deleting,
adding is involved, those operations won’t work. Tuples in Python are
written a=() or a=tuple() where ‘a’ is the name of the tuple.
```python
a = ('List', 'Dictionary', 'Tuple', 'Integer', 'Float')
print(a)                             |
```
Output = (‘List’, ‘Dictionary’, ‘Tuple’, ‘Integer’, ‘Float’)

#### Dictionary

Dictionary is best understood when you have a real-world example. The
easiest and well-understood example would be a telephone directory.
Think of the Name as a key and the name that you enter as the value.
Similarly, the Phone as a key entered data as value. This is what a
dictionary is. It is a structure that holds the key, value pairs.

Dictionary is written using either a=dict() or using a={} where a is a
dictionary. The key could be either a string or integer which has to be
followed by a “:” and the value of that key.
```python
MyPhoneBook = { 'Name' : [ 'Akash','Ankita' ], 'Phone' : [ '12345', '12354' ] ,'E-Mail' : [ 'akash@rail.com', 'ankita@rail.com' ]}
print (MyPhoneBook)
```
Output: { ‘Name’ : [‘Akash’, ‘Ankita’], ‘Phone’ : [‘12345’, ‘12354’],
‘E-Mail’ : [‘akash@rail.com’,’ankita@rail.com’]}

Accessing elements of the Dictionary

You can see that the keys are Name, Phone, and Email who each have 2
values assigned to them. When we want to obtain values only for a
particular key, we can access elements like this.
```python
print(MyPhoneBook['E-Mail'])         |
```
Output : [‘akash@rail.com’,’ankita@rail.com’]

## Conclusion

![](https://media1.tenor.com/images/5c36b5497629f905d0c011d16f01c0ff/tenor.gif?itemid=10312546)

That’s all about this post. Don’t worry, we would learn Operators in
Python, Flow control and functions in python in the next post. Until
then, happy coding or you can read [my other
articles.](https://simplifiedweb.netlify.app/) 

Written by [Dev Mehta](https://github.com/Dev-Mehta/)

Founder and CEO at [ZeroDay](https://zeroday-in.github.io/)
