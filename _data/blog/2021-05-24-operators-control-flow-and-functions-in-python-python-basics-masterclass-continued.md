---
template: BlogPost
path: >-
  /operators-control-flow-and-functions-in-python-python-basics-masterclass-continued
date: 2021-05-24T10:55:08.562Z
title: >-
  Operators, Control Flow, and Functions in Python - Python Basics Masterclass
  Continued
metaDescription: >-
  In this article, we will study operators in python, control flow statements
  and functions in python. An operator is a specific symbol that is used to
  perform some sort of arithmetic or logical operation. An operational statement
  contains two parts operand and operator. The variables that will be changed
  after the operation are called operands and the symbol used is called
  operator.
thumbnail: >-
  /assets/Operators, Control Flow, and Functions in Python - Python Basics
  Masterclass Continued.png
---
In the [last article](https://simplifiedweb.netlify.app/introduction-to-python-a-masterclass-for-beginners), we studied what is python, how to install it on your computer, and basic data types in python(numeric, strings, lists, tuples, dictionaries). In this article, we will study operators in python, control flow statements and functions in python.

## Operators in Python

An operator is a specific symbol that is used to perform some sort of arithmetic or logical operation. An operational statement contains two parts operand and operator. The variables that will be changed after the operation are called operands and the symbol used is called operator.

Let’s understand the concept of operands and operator by an example:

```python
a = b + c
```

Here a, b, and c are operands as they are the elements that will be operated, and (=, +) are operators as they will be used to change the value of a by adding b to c.

Now let’s understand the types of operators in python

### Arithmetic Operators

| Operator | Description(Here assume a = 5, b = 2|
|---|---|
| + | Adds the values of operands. (Eg: a + b) -\> 7 |
| - | Subtracts the values of operands. (Eg: a-b) -\> 3 |
| \* | Multiplies the values of operands (Eg: a\*b) -\> 10 |
| / | Divides the values of the left operand with the right operand. (Eg: a / b) -\> 2.5 |
| // | Divides the values and returns the answer in integer format. (Eg: a // b) -\> 2 |
| % | Divides the left operand by the right operand and returns the  remainder. (Eg: a % b) -\> 1 |
| \*\* | Performs the exponential of the left operand with the right operand. (Eg: a \*\* b) -\> 25 (5 power 2)|

### Assignment Operators

As the name suggests these operators are used to perform assignment
operation on the variable

| Operator | Description|
|---|---|
| = | It is used to assign the value of the right operand to the left         operand                              |
| += | Shorthand for addition               |
| -=                                   | Shorthand for subtraction            |
| \*=                                  | Shorthand for multiplication         |
| /=                                   | Shorthand for division               |
| //=                                  | Shorthand for floor division         |
| %=                                   | Shorthand for modulus                |
| \*\*=                                | Shorthand for exponent               |

### Comparison Operators
These operators are used to compare the values of left and right
operands.

| Operator                             | Description |
|---|---|
| ==                                   | Check whether the left and right     operands are equal in value or not   |
| !=                                   | Check whether the values of left andright operators are not equal        |
| \<                                   | Check whether the value of the right operand is greater than that of the left operand |
| \>                                   | Check whether the value of the left operand is greater than that of the right operand                        |
| \<=                                  | Check whether the value of the right operand is greater than or equal to that of the left operand             |
| \>=                                  | Check whether the value of the left operand is greater than or equal to that of the right operand            |

### Bitwise Operators
These operators are used to directly manipulate the bits of the value of
operands.

| Operator                             | Description                          
|---|---|
| &                                    | Used to do the AND operation on     individual bits of the left and right operands                       |
| \| | Used to do the OR operation on individual bits of the left and right operands                       |
| \^                                   | Used to do the XOR operation on individual bits of the left and right operands |
| \~                                   | Used to do the 1’s compliment operation on individual bits of the left and right operands              |
| \<\<                                 | Used to shift the left operand by right operand times. One left shift is equivalent to multiplying by 2.   
| \>\>                                 | Used to shift the left operand by right operand times. One right shift is equivalent to dividing by 2.      |

### Logical Operators
These are used to check a certain kind of logic from both of the
operands.

-   and (True if both left and right operands are true)
-   or (True if either one operand is true)
-   not (Gives the opposite of the operand passed)

```python
a = True
b = False
print(a and b, a or b, not a)
```

### Membership Operators

These are used to test whether a particular variable or value exists in
either a list, dictionary, tuple, set and so on.

The operators are :
-   in (True if the value or variable is found in the sequence)
-   not in (True if the value is not found in the sequence)
```python
a = [1, 2, 3, 4]
if 5 in a:
    print('Yes!')
if 5 not in a:
    print('No!') 
# Output: No!
```

### Identity Operator
These operators are used to check whether the values, variables
are identical or not. As simple as that.

The operators are :
-   is (True if they are identical)
-   is not (True if they are not identical)
```python
a = 5
b = 5
if a is b:
    print('Similar')
if a is not b:
    print('Not Similar!')
# Output: Similar
```

## Flow Control in Python

There are 3 types of flow control statement/blocks in python.

-   Sequential - Normal code block which executes line by line
-   Selection / Decision Making (Conditional) - Statements are executed
    after a decision is made based on some condition.
-   Repetition - Same statements are repeated

#### Conditional Statements
Conditional statements are executed only if a certain condition is met,
else it is skipped ahead to where the condition is satisfied.
Conditional statements in Python are the if, elif and else.

Syntax:
```python
if condition:
    statement
elif condition:
    statement
else:
    statement
```
This means that if a condition is met, do something. Else go through the
remaining elif conditions and finally if no condition is met, execute
the else block. You can even have nested if-else statements inside the
if-else blocks.
```python
a = 10
b = 15
if a == b:
    print ( 'They are equal' )
elif a > b:
    print ( 'a is larger' )
else :
    print ( 'b is larger' )
# Output: b is larger
```
#### Repetitive Statements(Looping)
You have 2 kinds of loops in Python:
-   for
-   while

**For Loop**:

These loops are used to perform a certain set of statements for a given
condition and continue until the condition has failed.
**Syntax**
```python
for variable in range: statements
```

**Example**
```python
basket_of_fruits= ['apple', 'orange', 'pineapple', 'banana']
for fruit in basket_of_fruits:
    print(fruit, end=',')
```
**While Loops**: 

While loops are the same as the for loops with the exception that you may not know the ending condition.

**Syntax**
```python
while condition:
    statements
```
**Example**
```python
seconds = 10
while seconds >= 0:
    print(seconds, end='->')
    second-=1
print("Boom")
```
## Functions in Python
A function is a block of code in python which gets executed when a function itself is being called.

Functions work on the principle of “Don’t repeat yourself (DRY)”, you write the block of code once within the function and that code block can
be used again by just calling the function(instead of writing the same
code again and again).

Syntax

In python, a function can be created using the `def` keyword.
```python
def function_name([ arguments ]):
    statements
    [ return value ]
```
Example

To call a function, use the function name followed by parentheses.
```python
def my_function():
    print("Hello I am being called")
my_function()
# Output: Hello I am being called
```
### Function Arguments
![https://media1.tenor.com/images/cb6fd0ea5b721e597431f16622486894/tenor.gif?itemid=10262723](https://media1.tenor.com/images/cb6fd0ea5b721e597431f16622486894/tenor.gif?itemid=10262723)

Gif by [tenor](https://tenor.com/view/seinfeld-jerry-george-costanza-girl-gif-10262723)

Function arguments are not the same as our regular arguments😁. In terms
of python programming, arguments are information passed to the function.
Arguments are specified after the function name inside the parentheses.
 You can argue as much as you want to. (Just kidding: I meant you can
add as many arguments as you want to, just separate them with a comma).

The following example has a function with two arguments (first\_name,
last\_name). When the function is called, we pass along a first name and
last name, which is used inside the function to print the full name:

```python
def print_name(first_name, last_name):
    print(first_name, last_name)
print_name("Dev", "Mehta")
print_name("Meet", "Parekh")
# Output: Dev Mehta
#         Meet Parekh
```

If you try to call the function with 1 or 3 arguments, you will get an
error:

```python
print_name("Dev")
# TypeError: print_name() missing 1 required
# positional argument: 'last_name'
```

### Arbitrary Arguments or \*args 
If you do not know how many arguments will be passed into your function,
add a \* before the parameter name in the function definition.

This way the function will receive a tuple of arguments, and can access
the items accordingly:

```python
def youngest_kid(*kids):
  print("The youngest child is " + kids[2])

youngest_kid("Tanmay", "Haard", "Stavan") 
# Output: Stavan
```

### Keyword Arguments

You can also send arguments with the key = value syntax.
This way the order of the arguments does not matter.

```python
def youngest_kid(child3, child2, child1):
  print("The youngest child is " + child3)

youngest_kid(child1 = "Haard", child2 = "Tanmay", child3 = "Stavan")
# Output: Stavan
```

### Arbitrary Keyword Arguments or \*\*kwargs
If you do not know how many keyword arguments will be passed into your
function, add two asterisks: \*\* before the parameter name in the
function definition.

This way the function will receive a dictionary of arguments, and can
access the items accordingly:

**Example**

If the number of keyword arguments is unknown, add a double \*\* before
the parameter name:

```python
def get_last_name(**kid):
  print("His last name is " + kid["lname"])

get_last_name(fname = "Tanmay", lname = "Trivedi")
# Output: Trivedi
```

### Function Return Values

To let a function return a value, use the return keyword:

```python
def square(x):
    return x * x
```

## Conclusion 

![](https://media1.tenor.com/images/ad4d7a7fdfd285c305dd5fb4e5593c5b/tenor.gif?itemid=14640302)
﻿
Gifs by
[tenor](https://media1.tenor.com/images/ad4d7a7fdfd285c305dd5fb4e5593c5b/tenor.gif)

In this article, we learned about what are operators, control flow and
functions in python. If you want to learn what are the [basics of python](https://simplifiedweb.netlify.app/introduction-to-python-a-masterclass-for-beginners),
you can read this [previous article](https://simplifiedweb.netlify.app/introduction-to-python-a-masterclass-for-beginners). In the next article, we will learn
the name scoping in python and file handling in python. Until then,
happy coding or you can
read [my
other
articles.](https://simplifiedweb.netlify.app/)

