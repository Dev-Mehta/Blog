---
template: BlogPost
path: /namespacing-variable-scopes-and-file-operation-in-python/
date: 2021-06-02T15:44:03.202Z
title: 'Namespacing, Variable Scopes and File Operation in Python'
metaDescription: >-
  In this article, we will learn what is namespacing in python, what are
  variable scopes in Python and how to do input-output operations in Python
  Programming. Here is the outline of all the articles of our Python masterclass
  series. 
thumbnail: '/assets/Namespacing, Variable Scopes and File Operation in Python.png'
---
In the previous articles, we had learned about Introduction to Python - A Masterclass for beginners, we also learned what are Operators, Control Flow, and Functions in Python. In this article, we will learn what is namespacing in python, what are variable scopes in Python and how to do input-output operations in Python Programming.

Here is the outline of all the articles of our Python masterclass series. You can catch up on these articles if you haven't read them yet.

- Part 1: **[Introduction to Python - A masterclass for beginners](https://simplifiedweb.netlify.app/introduction-to-python-a-masterclass-for-beginners)**
- Part 2: **[Operators, Control Flow, and Functions in Python - Python Basics Masterclass Continued](https://simplifiedweb.netlify.app/operators-control-flow-and-functions-in-python-python-basics-masterclass-continued)**
- Part 3: **Namespacing, Variable Scopes and File Operation in Python**

If you don't remember, I would like to remind you that **everything in Python is an object.** Well, how does Python know what you are trying to access? Think of a situation where you have 2 functions with the same name. You would still be able to call the function you need. How is that possible? This is where namespacing comes to the rescue.

Namespacing is the system that Python uses to assign **unique names** to all the objects in our code. And if you are wondering, objects can be variables and methods. Python does namespacing by **maintaining a dictionary structure**. Where *names act as the keys* and the *object or variable acts as the values in the structure*. Now you would wonder what is a name?

<div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/oBFu6YUr7z6ERQLhvB" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/tincanbros-tin-can-bros-wayward-guide-waywardguide-oBFu6YUr7z6ERQLhvB">via GIPHY</a></p>

Well, a name is just a way that you use to access the objects. These names act as a reference to access the values that you assign to them.

**Example**: `a=5, b='SimplifiedWeb!'`

If I would want to access the value ‘SimplifiedWeb!’ I would simply call the variable name by ‘b’ and I would have access to ‘SimplifiedWeb!’. These are names. You can even assign methods names and call them accordingly.

```python
import math
square_root = math.sqrt
print('The square root is ',square_root(9))
```

**Output**: The root is 3.0

Namespacing works with scopes. **Scopes** are the *validity of a function/variable/value inside the function or class they belong to*. Python **built-in functions** namespacing **covers all the other scopes of Python**. Functions such as `print()` and `id()` etc. can be used even without any imports and be used anywhere. Below them is the **global** and **local** namespacing. Let me explain the scope and namespacing in a code snippet below :

```python
def add():
  x = 3
  y = 2
def add2():
  p, q, r = 3, 4, 5
  print('Inside add2 printing sum of 3 numbers:'(p+q+r))
add2()
print('The values of p, q, r are :', p, q, r)
print('Inside the add printing sum of 2 numbers:'(x+y))
add()

```

As you can see with the code above, I have declared 2 functions with the name add() and add2(). You have the definition of the add() and you later call the method to add(). Here in add() you call add2() and so you are able to get the output of 12 since 3+4+5 is 12. But as soon as you come out of add2(), the scope of p,q,r is terminated meaning that p,q,r are only accessible and available if you are in add2(). Since you are now in add(), there is no p,q,r and hence you get the error and execution stops.

You can get a better understanding of the scopes and namespacing from the figure below. The built-in scope covers all of Python making them available whenever needed. The global scope covers all of the programs that are being executed. The local scope covers all of the methods being executed in a program. That is basically what namespacing is in Python. Let us move ahead with flow control in Python Basics.

## Variable Scopes in Python

Now you maybe wondering what are scopes in python? Well simply saying a variable scope is the scope, region, part or area where that variable can be accessed. Mainly in python or any other programming language there are 2 types of variables global variable and local variables but unlike other programming languages, variable scope in python is a bit tricky. Here there are 3 scopes of variable

- Global
- Local
- Nonlocal

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/3oGRFn6oi7cg3xKh68" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/natgeowild-cesar-911-3oGRFn6oi7cg3xKh68">via GIPHY</a></p>

### Global Variable in Python

The scope of the global variable in Python is for full program. Global variables can be used by everyone, both inside of functions and outside.

```python
x = "awesome"
def myfunc():
  print("Python is", x)
x = "lit🔥"
print("Python is,"x)
myfunc()
"""
Here x is a global variable
x can be accessed anywhere

Output:
Python is lit🔥 <-- from line 5, the value of x is assigned as "lit"
Python is lit🔥 <-- as the value has changed it will be changed inside function too
"""
```

Normally, when you create a variable in a function it is local only. If you want to create global keyword in function, you can use global keyword. Here is the code snippet for it.

```python
def myfunc():
  global x
  x = "fantastic"
myfunc()
print("Python is " + x)
# Output: Python is fantastic
```

You can also use the global keyword inside a function, refer to the variable by using the global keyword

```python
x = "awesome"
def myfunc():
  global x
  x = "fantastic"
myfunc()
print("Python is " + x)
# Output: Python is fantastic
```

### Local Variables in Python

Local variables in python are those variables which can be accessed only by the block in which they where declared. They cannot be accessed outside of that block or it may produce error in the program.

```python
def hello():
	name = "Dev"
  print("Hi I am", name)

hello() # <-- Hi I am Dev
print(name) # <--- NameError: name 'name' is not defined
```

### Nonlocal Variables in Python

The nonlocal keyword is used to work with variables inside nested functions, where the variable should not belong to the inner function. Use the keyword nonlocal to declare variables that are not local.

```python
def foo():
  x = "Dev"
  def inner_foo():
    nonlocal x
    x = "Meet"
  inner_foo()
  return x
print(foo())
"""
Output: Meet
As by use of nonlocal keyword, 
we told to interpreter that this is not a local variable
and we want to access variable outside from local scope
"""

# What if we don't use nonlocal keyword
def foo():
  x = "Dev"
  def inner_foo():
    x = "Meet"
  inner_foo()
  return x
print(foo())
# Output: Dev
# As here we have not used nonlocal keyword the scope
# of x from outer function will be limited 
# to that function
```

# **File Handling in Python**

Python too supports file handling and allows users to handle files i.e., to read and write files, along with many other file handling options, to operate on files. The concept of file handling has stretched over various other languages, but the implementation is either complicated or lengthy, but alike other concepts of Python, this concept here is also easy and short. Python treats file differently as text or binary and this is important. Each line of code includes a sequence of characters and they form text file. Each line of a file is terminated with a special character, called the EOL or End of Line characters like comma {,} or newline character. It ends the current line and tells the interpreter a new one has begun. Let’s start with Reading and Writing files.

### **Working of open() function**

We use **open ()** function in Python to open a file in read or write mode. As explained above, open ( ) will return a file object. To return a file object we use **open()** function along with two arguments, that accepts file name and the mode, whether to read or write. So, the syntax being: **open(filename, mode)**. There are three kinds of mode, that Python provides and how files can be opened:

- “ **r** “, for reading.
- “ **w** “, for writing.
- “ **a** “, for appending.
- “ **r+** “, for both reading and writing

One must keep in mind that the mode argument is not mandatory. If not passed, then Python will assume it to be “ **r** ” by default. Let’s look at this program and try to analyze how the read mode works:

```python
# a file named "geek", will be opened with the reading mode. 
file = open('geek.txt', 'r') 
# This will print every line one by one in the file 
for each in file:
    print(each)
```

The open command will open the file in the read mode and the for loop will print each line present in the file.

### Working of read() mode

There is more than one way to read a file in Python. If you need to extract a string that contains all characters in the file then we can use file.read(). The full code would work like this:

```python
file = open("file.text", "r")  
print(file.read())
```

Another way to read a file is to call a certain number of characters like in the following code the interpreter will read the first five characters of stored data and return it as a string:

```python
file = open("file.txt", "r")
print (file.read(5))
```

### Create a file using write() mode

Let’s see how to create a file and how write mode works:

To manipulate the file, write the following in your Python environment:

```python
file = open('geek.txt','w')
file.write("This is the write command")
file.write("It allows us to write in a particular file")
file.close()
```

The close() command terminates all the resources in use and frees the system of this particular program.

### Working of append() mode

Let’s see how the append mode works:

```python
file = open('geek.txt','a')
file.write("This will add this line")
file.close()
```

### File  Operation with with() function

We can also use write function along with with() function. It is designed to provide much cleaner syntax and exceptions handling when you are working with code. That explains why it’s good practice to use them with a statement where applicable. This is helpful because using this method any files opened will be closed automatically after one is done, so auto-cleanup.

```python
with open("file.txt", "w") as f:
f.write("Hello World!!!")
```

There are also various other functions that help to manipulate the files and its contents. One can explore various other functions in [Python Docs](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files).

## Conclusion

That's all about this post. We learned what are global, local and nonlocal variables in python. What is namespacing in python and also how to read/write/append files in python. That's a wrap to our part 3. We will discuss about object oriented programming in the next part of the series. Until then you can practice these thing which you have learned🚀🚀. Until then, happy coding.

<div style="width:100%;height:0;padding-bottom:42%;position:relative;"><iframe src="https://giphy.com/embed/UQaRUOLveyjNC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/mrw-reddit-profile-UQaRUOLveyjNC">via GIPHY</a></p>
