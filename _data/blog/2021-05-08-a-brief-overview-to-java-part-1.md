---
template: BlogPost
path: /a-brief-overview-to-java-part-1
date: 2021-05-08T08:28:24.106Z
title: A Brief Overview to Java - Part 1
metaDescription: >
  This core java article is designed for students and working professionals.
  Java is an object-oriented, class-based, concurrent, secured and
  general-purpose programming language. It is a widely used robust technology.
thumbnail: /assets/java-tutorial.png
---
This core java article is designed for students and working professionals. Java is an object-oriented, class-based, concurrent, secured and general-purpose programming language. It is a widely used robust technology. You can download the notes from [here](https://simplifiedweb.netlify.app/assets/Java%20Tutorial.pdf)

What is Java?
-------------

Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.

Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the Oak name to Java.

Let's have a quick look at the Java programming example.
```java
class Simple{ public static void main(String args[]){    
    System.out.println("Hello Java");    
   }    
}
```

Applications of Java
--------------------

According to Sun, 3 billion devices run Java. There are many devices where java is currently used. Some of them are as follows:

1.  Desktop Applications such as acrobat reader, media player, antivirus, etc.
2.  Web Applications such as irctc.co.in, javatpoint.com, etc.
3.  Enterprise Applications such as banking applications.
4.  Mobile
5.  Embedded System
6.  Smart Card
7.  Robotics
8.  Games, etc.

Types of Java Applications
--------------------------

There are mainly 4 types of applications that can be created using Java programming:

#### 1) Standalone Application

Standalone applications are also known as desktop applications or window-based applications. These are traditional software that we need to install on every machine. Examples of standalone application are Media player, antivirus, etc. AWT and Swing are used in Java for creating standalone applications.

#### 2) Web Application

An application that runs on the server-side and creates a dynamic page is called a web application. Currently, [](https://www.google.com/url?q=https://www.javatpoint.com/servlet-tutorial&sa=D&source=editors&ust=1620464058384000&usg=AOvVaw1UQzsTFpG_1SLJ78-ujaRh) Servlet, [](https://www.google.com/url?q=https://www.javatpoint.com/jsp-tutorial&sa=D&source=editors&ust=1620464058385000&usg=AOvVaw2sLel7Kh_p-vKKzJkjpD8N) JSP, [](https://www.google.com/url?q=https://www.javatpoint.com/struts-2-tutorial&sa=D&source=editors&ust=1620464058385000&usg=AOvVaw3D49YAUZZgqbbE3vVL_L1g) Struts, [](https://www.google.com/url?q=https://www.javatpoint.com/spring-tutorial&sa=D&source=editors&ust=1620464058385000&usg=AOvVaw3E-ojbojaFB2l2UCnzXfSK) Spring, [](https://www.google.com/url?q=https://www.javatpoint.com/hibernate-tutorial&sa=D&source=editors&ust=1620464058386000&usg=AOvVaw3O0hW3B2cJsfdj771DTn8C) Hibernate, [](https://www.google.com/url?q=https://www.javatpoint.com/jsf-tutorial&sa=D&source=editors&ust=1620464058386000&usg=AOvVaw2TlFIB2nBJO23VMJVWdW_m) JSF, etc. technologies are used for creating web applications in Java.

#### 3) Enterprise Application

An application that is distributed in nature, such as banking applications, etc. is called an enterprise application. It has the advantages of high-level security, load balancing, and clustering. In Java, [](https://www.google.com/url?q=https://www.javatpoint.com/ejb-tutorial&sa=D&source=editors&ust=1620464058387000&usg=AOvVaw3BHoR4Nl7fXka6oRGs2A9y) EJB is used for creating enterprise applications.

#### 4) Mobile Application

An application that is created for mobile devices is called a mobile application. Currently, Android and Java ME are used for creating mobile applications.

Java Platforms / Editions
-------------------------

There are 4 platforms or editions of Java:

#### 1) Java SE (Java Standard Edition)

It is a Java programming platform. It includes Java programming APIs such as java.lang, java.io, java.net, java.util, java.sql, java.math etc. It includes core topics like OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing, Reflection, Collection, etc.

#### 2) Java EE (Java Enterprise Edition)

It is an enterprise platform that is mainly used to develop web and enterprise applications. It is built on top of the Java SE platform. It includes topics like Servlet, JSP, Web Services, EJB, [](https://www.google.com/url?q=https://www.javatpoint.com/jpa-tutorial&sa=D&source=editors&ust=1620464058389000&usg=AOvVaw1IPyVYhqTG6Jsd1diqxmCO) JPA, etc.

#### 3) Java ME (Java Micro Edition)

It is a micro platform that is mainly used to develop mobile applications.

#### 4) JavaFX

It is used to develop rich internet applications. It uses a lightweight user interface API.

Prerequisite
------------

To learn Java, you must have a basic knowledge of the C/C++ programming language.

Audience
--------

Our Java programming tutorial is designed to help both beginners and professionals.

Features of Java
----------------

The primary objective of Java programming language creation was to make it a portable, simple and secure programming language. Apart from this, there are also some excellent features which play an important role in the popularity of this language. The features of Java are also known as java buzzwords.

A list of the most important features of the Java language is given below.

![](images/image1.png)

1.  Simple
2.  Object-Oriented
3.  Portable
4.  Platform independent
5.  Secured
6.  Robust
7.  Architecture neutral
8.  Interpreted
9.  High Performance
10.  Multithreaded
11.  Distributed
12.  Dynamic

#### Simple

Java is very easy to learn, and its syntax is simple, clean and easy to understand. According to Sun, Java language is a simple programming language because:

*   Java syntax is based on C++ (so easier for programmers to learn it after C++).
*   Java has removed many complicated and rarely-used features, for example, explicit pointers, operator overloading, etc.
*   There is no need to remove unreferenced objects because there is an Automatic Garbage Collection in Java.

#### Object-oriented

Java is an object-oriented programming language. Everything in Java is an object. Object-oriented means we organize our software as a combination of different types of objects that incorporates both data and behaviour.

Object-oriented programming (OOPs) is a methodology that simplifies software development and maintenance by providing some rules.

Basic concepts of OOPs are:

1.  Object
2.  Class
3.  Inheritance
4.  Polymorphism
5.  Abstraction
6.  Encapsulation

#### Platform Independent

![Java is platform independent](images/image7.png)

Java is platform-independent because it is different from other languages like C, C++, etc. which are compiled into platform-specific machines while Java is a write once, run anywhere language. A platform is the hardware or software environment in which a program runs.

There are two types of platforms software-based and hardware-based. Java provides a software-based platform.

The Java platform differs from most other platforms in the sense that it is a software-based platform that runs on top of other hardware-based platforms. It has two components:

1.  Runtime Environment
2.  API(Application Programming Interface)

Java code can be run on multiple platforms, for example, Windows, Linux, Sun Solaris, Mac/OS, etc. Java code is compiled by the compiler and converted into bytecode. This bytecode is a platform-independent code because it can be run on multiple platforms, i.e., Write Once and Run Anywhere(WORA).

#### Secured

Java is best known for its security. With Java, we can develop virus-free systems. Java is secured because:

*   No explicit pointer
*   Java Programs run inside a virtual machine sandbox

![how Java is secured](images/image6.png)

*   Classloader: Classloader in Java is a part of the Java Runtime Environment(JRE) which is used to load Java classes into the Java Virtual Machine dynamically. It adds security by separating the package for the classes of the local file system from those that are imported from network sources.
*   Bytecode Verifier: It checks the code fragments for illegal code that can violate access right to objects.
*   Security Manager: It determines what resources a class can access such as reading and writing to the local disk.

Java language provides these securities by default. Some security can also be provided by an application developer explicitly through SSL, JAAS, Cryptography, etc.

#### Robust

Robust simply means strong. Java is robust because:

*   It uses strong memory management.
*   There is a lack of pointers that avoids security problems.
*   There is automatic garbage collection in java which runs on the Java Virtual Machine to get rid of objects which are not being used by a Java application anymore.
*   There are exception handling and the type checking mechanism in Java. All these points make Java robust.

#### Architecture-neutral

Java is architecture-neutral because there are no implementation-dependent features, for example, the size of primitive types is fixed.

In C programming, int data type occupies 2 bytes of memory for 32-bit architecture and 4 bytes of memory for 64-bit architecture. However, it occupies 4 bytes of memory for both 32 and 64-bit architectures in Java.

#### Portable

Java is portable because it facilitates you to carry the Java bytecode to any platform. It doesn't require any implementation.

#### High-performance

Java is faster than other traditional interpreted programming languages because Java bytecode is "close" to native code. It is still a little bit slower than a compiled language (e.g., C++). Java is an interpreted language that is why it is slower than compiled languages, e.g., C, C++, etc.

#### Distributed

Java is distributed because it facilitates users to create distributed applications in Java. RMI and EJB are used for creating distributed applications. This feature of Java makes us able to access files by calling the methods from any machine on the internet.

#### Multi-threaded

A thread is like a separate program, executing concurrently. We can write Java programs that deal with many tasks at once by defining multiple threads. The main advantage of multi-threading is that it doesn't occupy memory for each thread. It shares a common memory area. Threads are important for multi-media, Web applications, etc.

#### Dynamic

Java is a dynamic language. It supports the dynamic loading of classes. It means classes are loaded on demand. It also supports functions from its native languages, i.e., C and C++.

Java supports dynamic compilation and automatic memory management (garbage collection).

First Java Program
------------------

To create a simple java program, you need to create a class that contains the main method. Let's understand the requirement first.

#### The requirement for Java Hello World Example

For executing any java program, you need to

*   Install the JDK if you don't have installed it, [](https://www.google.com/url?q=http://www.oracle.com/technetwork/java/javase/downloads/index.html&sa=D&source=editors&ust=1620464058409000&usg=AOvVaw0fGnlvztJy_raCd63U9-pK) [download the JDK](https://www.google.com/url?q=http://www.oracle.com/technetwork/java/javase/downloads/index.html&sa=D&source=editors&ust=1620464058409000&usg=AOvVaw0fGnlvztJy_raCd63U9-pK) and install it.
*   Set path of the JDK/bin directory
*   Create the java program
*   Compile and run the java program

#### Creating Hello World in Java

Let's create the hello java program:
```java
class Simple{ public static void main(String args[]){    
    System.out.println("Hello Java");    
   }    
}
```

save this file as Simple.java
To compile: javac Simple.java
To execute: java Simple
Output: Hello Java

#### Compilation Flow:

When we compile the Java program using the javac tool, the java compiler converts the source code into byte code.

#### Parameters used in First Java Program:

Let's see what is the meaning of class, public, static, void, main, String\[\], System.out.println().

*   The class keyword is used to declare a class in java.
*   The public keyword is an access modifier that represents visibility. It means it is visible to all.
*   The static is a keyword. If we declare any method as static, it is known as the static method. The core advantage of the static method is that there is no need to create an object to invoke the static method. The main method is executed by the JVM, so it doesn't require creating an object to invoke the main method. So it saves memory.
*   void is the return type of the method. It means it doesn't return any value.
*   main represents the starting point of the program.
*   String\[\] args is used for the command-line argument. We will learn it later.
*   System.out.println() is used to print statement. Here, System is a class, out is the object of PrintStream class, println() is the method of PrintStream class. We will learn about the internal working of System.out.println statement later.

#### Resolving an error "javac is not recognized as an internal or external command"?

If there occurs a problem like displayed in the below figure, you need to set PATH. Since DOS doesn't know javac or java, we need to set PATH. The path is not required in such a case if you save your program inside the JDK/bin directory. However, it is an excellent approach to set the path. Click here for [How to set a path for java](https://www.google.com/url?q=https://www.javatpoint.com/how-to-set-path-in-java&sa=D&source=editors&ust=1620464058416000&usg=AOvVaw0j_TQopckkATv3KFlqNYj6).

Internal Details of Java Hello World Program
--------------------------------------------

Now we are going to learn what happens while compiling and running the java program. Moreover, we will see some information based on the first program.

#### What happens at compile time?

At compile time, a java file is compiled by Java Compiler (It does not interact with OS) and converts the java code into bytecode.

#### What happens at runtime?

At runtime, the following steps are performed:

Classloader: is the subsystem of JVM that is used to load class files.

Bytecode Verifier: checks the code fragments for illegal code that can violate access right to objects.

Interpreter: read bytecode stream then execute the instructions.

Difference between JDK, JRE, and JVM
------------------------------------

#### JVM

JVM (Java Virtual Machine) is an abstract machine. It is called a virtual machine because it doesn't physically exist. It is a specification that provides a runtime environment in which Java bytecode can be executed. It can also run those programs which are written in other languages and compiled to Java bytecode.

The JVM performs the following main tasks:

*   Loads code
*   Verifies code
*   Executes code
*   Provides runtime environment

#### JRE

JRE is an acronym for Java Runtime Environment. It is also written as Java RTE. The Java Runtime Environment is a set of software tools that are used for developing Java applications. It is used to provide a runtime environment. It is the implementation of JVM. It physically exists. It contains a set of libraries + other files that JVM uses at runtime.

The implementation of JVM is also actively released by other companies besides Sun MicroSystems.

![](images/image2.png)

#### JDK

JDK is an acronym for Java Development Kit. The Java Development Kit (JDK) is a software development environment that is used to develop Java applications and applets. It physically exists. It contains JRE + development tools.

JDK is an implementation of any one of the below given Java Platforms released by Oracle Corporation:

*   Standard Edition Java Platform
*   Enterprise Edition Java Platform
*   Micro Edition Java Platform

The JDK contains a private Java Virtual Machine (JVM) and a few other resources such as an interpreter/loader (java), a compiler (javac), an archiver (jar), a documentation generator (Javadoc), etc. to complete the development of a Java Application.

![](images/image5.png)

Java Variables
--------------

A variable is a container that holds the value while the Java program is executed. A variable is assigned with a data type.

Variable is the name of a memory location. There are three types of variables in java: local, instance and static.

There are two types of data types in Java: primitive and non-primitive.

#### Variable

A variable is the name of the reserved area allocated in memory. In other words, it is the name of a memory location. It is a combination of "vary + able" which means its value can be changed.

Types of Variables

There are three types of variables in Java:

*   local variable
*   instance variable
*   static variable

1) Local Variable

A variable declared inside the body of the method is called a local variable. You can use this variable only within that method and the other methods in the class aren't even aware that the variable exists.

A local variable cannot be defined with the "static" keyword.

2) Instance Variable

A variable declared inside the class but outside the body of the method, is called an instance variable. It is not declared as static. It is called an instance variable because its value is instance specific and is not shared among instances.

3) Static Variable

A variable that is declared as static is called a static variable. It cannot be local. You can create a single copy of the static variable and share it among all the instances of the class. Memory allocation for static variable happens only once when the class is loaded in the memory.

#### Example to understand types of variable in Java

```java
class A {
 int data=50;//instance variable
 static int m=100;//static variable  
 void method(){
   int n=90;//local variable 
 }    
}/ /end of class
```
Data Types in Java
------------------

Data types specify the different sizes and values that can be stored in the variable. There are two types of data types in Java:

1.  Primitive data types: The primitive data types include boolean, char, byte, short, int, long, float and double.
2.  Non-primitive data types: The non-primitive data types include Classes, Interfaces, and Arrays.

#### Java Primitive Data Types

In Java language, primitive data types are the building blocks of data manipulation. These are the most basic data types available in the Java language.

There are 8 types of primitive data types:

*   boolean data type
*   byte data type
*   char data type
*   short data type
*   int data type
*   long data type
*   float data type
*   double data type

#### Boolean Data Type

The Boolean data type is used to store only two possible values: true and false. This data type is used for simple flags that track true/false conditions.

The Boolean data type specifies one bit of information, but its "size" can't be defined precisely.

Example: Boolean one = false

#### Byte Data Type

The byte data type is an example of a primitive data type. It is an 8-bit signed two's complement integer. Its value range lies between -128 to 127 (inclusive). Its minimum value is -128 and its maximum value is 127. Its default value is 0.

The byte data type is used to save memory in large arrays where the memory savings is most required. It saves space because a byte is 4 times smaller than an integer. It can also be used in place of the “int" data type.

Example: byte a = 10, byte b = -20

#### Short Data Type

The short data type is a 16-bit signed two's complement integer. Its value-range lies between -32,768 to 32,767 (inclusive). Its minimum value is -32,768 and its maximum value is 32,767. Its default value is 0.

The short data type can also be used to save memory just like a byte data type. A short data type is 2 times smaller than an integer.

Example: short s = 10000, short r = -5000

#### Int Data Type

The int data type is a 32-bit signed two's complement integer. Its value-range lies between - 2,147,483,648 (-2^31) to 2,147,483,647 (2^31 -1) (inclusive). Its minimum value is - 2,147,483,648and maximum value is 2,147,483,647. Its default value is 0.

The int data type is generally used as a default data type for integral values unless if there is no problem with memory.

Example: int a = 100000, int b = -200000

#### Long Data Type

The long data type is a 64-bit two's complement integer. Its value-range lies between -9,223,372,036,854,775,808(-2^63) to 9,223,372,036,854,775,807(2^63 -1)(inclusive). Its minimum value is - 9,223,372,036,854,775,808and maximum value is 9,223,372,036,854,775,807. Its default value is 0. The long data type is used when you need a range of values more than those provided by int.

Example: long a = 100000L, long b = -200000L

#### Float Data Type

The float data type is a single-precision 32-bit IEEE 754 floating-point. Its value range is unlimited. It is recommended to use a float (instead of double) if you need to save memory in large arrays of floating point numbers. The float data type should never be used for precise values, such as currency. Its default value is 0.0F.

Example: float f1 = 234.5f

#### Double Data Type

The double data type is a double-precision 64-bit IEEE 754 floating-point. Its value range is unlimited. The double data type is generally used for decimal values just like float. The double data type also should never be used for precise values, such as currency. Its default value is 0.0d.

Example: double d1 = 12.3

#### Char Data Type

The char data type is a single 16-bit Unicode character. Its value-range lies between '\\u0000' (or 0) to '\\uffff' (or 65,535 inclusive).The char data type is used to store characters.

Example: char letterA = 'A'

Operators in Java
-----------------

Operator in Java is a symbol that is used to perform operations. For example: +, -, \*, / etc.

There are many types of operators in Java which are given below:

*   Unary Operator,
*   Arithmetic Operator,
*   Shift Operator,
*   Relational Operator,
*   Bitwise Operator,
*   Logical Operator,
*   Ternary Operator and
*   Assignment Operator.

#### Java Unary Operator

The Java unary operators require only one operand. Unary operators are used for performing various operations i.e.:

*   incrementing/decrementing a value by one
*   negating an expression
*   inverting the value of a boolean

##### Java Unary Operator Example: ++ and --

```java
class OperatorExample {
  public static void main(String args[]){
    int x=10;    
    System.out.println(x++); //10 (11)
    System.out.println(++x); //12
    System.out.println(x--); //12 (11)
    System.out.println(--x); //10
  }  
}
```
#### Java Arithmetic Operators

Java arithmetic operators are used to perform addition, subtraction, multiplication, and division. They act as basic mathematical operations.

##### Java Arithmetic Operator Example

```java
class OperatorExample{
  public static void main(String args[]){
    int a=10; int b=5;    
    System.out.println(a+b);//15
    System.out.println(a-b);//5
    System.out.println(a\*b);//50
    System.out.println(a/b);//2
    System.out.println(a%b);//0
  }
}
```
##### Java Arithmetic Operator Example: Expression
```java
class OperatorExample{ 
  public static void main(String args[]){    
   System.out.println(10\*10/5+3-1\*4/2);    
 }  
} 
// Output:  
// 21
```
#### Java Left Shift Operator

The Java left shift operator << is used to shift all of the bits in a value to the left side of a specified number of times.

##### Java Left Shift Operator Example
```java
class OperatorExample{
  public static void main(String args[]){    
    System.out.println(10<<2);//10\*2^2=10\*4=40
    System.out.println(10<<3);//10\*2^3=10\*8=80
    System.out.println(20<<2);//20\*2^2=20\*4=80
    System.out.println(15<<4);//15\*2^4=15\*16=240
  }  
} 
// Output:  
// 40  
// 80  
// 80  
// 240
```
#### Java Right Shift Operator

The Java right shift operator >> is used to move left operands value to right by the number of bits specified by the right operand.

##### Java Right Shift Operator Example
```java
class OperatorExample{
  public static void main(String args[]){    
    System.out.println(10\>>2);//10/2^2=10/4=2
    System.out.println(20\>>2);//20/2^2=20/4=5
    System.out.println(20\>>3);//20/2^3=20/8=2
  }  
} 
// Output:  
// 2  
// 5  
// 2
```
##### Java Shift Operator Example: >> vs >>>
```java
class OperatorExample{
  public static void main(String args[]){
   //For positive number, >> and >>> works same
   System.out.println(20>>2);    
   System.out.println(20>>>2); 
   //For negative number, >>> changes parity bit
   // (MSB) to 0
   System.out.println(-20>>2);    
   System.out.println(-20>>>2);    
 }  
}  
\**    
Output:  
5  
5  
-5  
1073741819  
*/
```
##### Java AND Operator Example: Logical && and Bitwise &

The logical && operator doesn't check second condition if first condition is false. It checks second condition only if first one is true.

The bitwise & operator always checks both conditions whether first condition is true or false.
```java
class OperatorExample{    
 public static void main(String args[]){
   int a=10;
   int b=5; 
   int c=20;
   System.out.println(a<b&&a<c);//false && true = false
   System.out.println(a<b&a<c);//false & true = false
 }  
}    
\**
Output:  
false  
false  
*/
```
#### Java Ternary Operator

Java Ternary operator is used as one liner replacement for if-then-else statement and used a lot in Java programming. it is the only conditional operator which takes three operands.

##### Java Ternary Operator Example
```java
class OperatorExample{
  public static void main(String args[]){
    int a=2;
    int b=5;
    int min=(a<b)?a:b;    
    System.out.println(min);    
  }  
}
/**  
Output:  
2  
*/
```
#### Java Assignment Operator

Java assignment operator is one of the most common operators. It is used to assign the value on its right to the operand on its left.

##### Java Assignment Operator Example
```java
class OperatorExample{
  public static void main(String args[]){
    int a=10; 
    int b=20;  
    a+=4;//a=a+4 (a=10+4)
    b-=4;//b=b-4 (b=20-4)
    System.out.println(a);    
    System.out.println(b);    
  }  
} 
/**  
Output:  
14  
16  
*/
```
Java Keywords
-------------

Java keywords are also known as reserved words. Keywords are particular words that act as a key to a code. These are predefined words by Java so they cannot be used as a variable or object name.

#### List of Java Keywords

A list of Java keywords or reserved words are given below:

1.  abstract: Java abstract keyword is used to declare an abstract class. An abstract class can provide the implementation of the interface. It can have abstract and non-abstract methods.
2.  boolean: Java boolean keyword is used to declare a variable as a boolean type. It can hold True and False values only.
3.  break: Java break keyword is used to break loop or switch statement. It breaks the current flow of the program at specified condition.
4.  byte: Java byte keyword is used to declare a variable that can hold 8-bit data values.
5.  case: Java case keyword is used with the switch statements to mark blocks of text.
6.  catch: Java catch keyword is used to catch the exceptions generated by try statements. It must be used after the try block only.
7.  char: Java char keyword is used to declare a variable that can hold unsigned 16-bit Unicode characters
8.  class: Java class keyword is used to declare a class.
9.  continue: Java continue keyword is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition.
10.  default: Java default keyword is used to specify the default block of code in a switch statement.
11.  do: Java do keyword is used in the control statement to declare a loop. It can iterate a part of the program several times.
12.  double: Java double keyword is used to declare a variable that can hold a 64-bit floating-point number.
13.  else: Java else keyword is used to indicate the alternative branches in an if statement.
14.  enum: Java enum keyword is used to define a fixed set of constants. Enum constructors are always private or default.
15.  extends: Java extends keyword is used to indicate that a class is derived from another class or interface.
16.  final: Java final keyword is used to indicate that a variable holds a constant value. It is applied with a variable. It is used to restrict the user.
17.  finally: Java finally keyword indicates a block of code in a try-catch structure. This block is always executed whether an exception is handled or not.
18.  float: Java float keyword is used to declare a variable that can hold a 32-bit floating-point number.
19.  for: Java for keyword is used to start a for loop. It is used to execute a set of instructions/functions repeatedly when some conditions become true. If the number of iteration is fixed, it is recommended to use for loop.
20.  if: Java if keyword tests the condition. It executes the if block if a condition is true.
21.  implements: Java implements keyword is used to implement an interface.
22.  import: Java import keyword makes classes and interfaces available and accessible to the current source code.
23.  instanceof: Java instanceof keyword is used to test whether the object is an instance of the specified class or implements an interface.
24.  int: Java int keyword is used to declare a variable that can hold a 32-bit signed integer.
25.  interface: Java interface keyword is used to declare an interface. It can have only abstract methods.
26.  long: Java long keyword is used to declare a variable that can hold a 64-bit integer.
27.  native: Java native keyword is used to specify that a method is implemented in native code using JNI (Java Native Interface).
28.  new: Java new keyword is used to create new objects.
29.  null: Java null keyword is used to indicate that a reference does not refer to anything. It removes the garbage value.
30.  package: Java package keyword is used to declare a Java package that includes the classes.
31.  private: Java private keyword is an access modifier. It is used to indicate that a method or variable may be accessed only in the class in which it is declared.
32.  protected: Java protected keyword is an access modifier. It can be accessible within the package and outside the package but through inheritance only. It can't be applied to the class.
33.  public: Java public keyword is an access modifier. It is used to indicate that an item is accessible anywhere. It has the widest scope among all other modifiers. 
34.  return: Java return keyword is used to return from a method when its execution is complete.
35.  short: Java short keyword is used to declare a variable that can hold a 16-bit integer.
36.  static: Java static keyword is used to indicate that a variable or method is a class method. The static keyword in Java is used for memory management mainly.
37.  strictfp: Java strictfp is used to restrict the floating-point calculations to ensure portability.
38.  super: Java super keyword is a reference variable that is used to refer to the parent class object. It can be used to invoke the immediate parent class method.
39.  switch: The Java switch keyword contains a switch statement that executes code based on test value. The switch statement tests the equality of a variable against multiple values.
40.  synchronized: Java synchronized keyword is used to specify the critical sections or methods in multithreaded code.
41.  this: Java this keyword can be used to refer to the current object in a method or constructor.
42.  throw: The Java throw keyword is used to explicitly throw an exception. The throw keyword is mainly used to throw a custom exception. It is followed by an instance.
43.  throws: The Java throws keyword is used to declare an exception. A checked exception can be propagated with throws.
44.  transient: Java transient keyword is used in serialization. If you define any data member as transient, it will not be serialized.
45.  try: Java try keyword is used to start a block of code that will be tested for exceptions. The try block must be followed by either catch or finally block.
46.  void: Java void keyword is used to specify that a method does not have a return value.
47.  volatile: Java volatile keyword is used to indicate that a variable may change asynchronously.
48.  while: Java while keyword is used to start a while loop. This loop iterates a part of the program several times. If the number of iteration is not fixed,it is recommended to use a while loop.

That’s it for this article we would be learning flow control and branching statements in the next part. Stay tuned for the next part😊
