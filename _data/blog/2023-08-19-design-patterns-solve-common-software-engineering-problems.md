---
template: BlogPost
path: /design-patterns-solve-common-software-engineering-problems/
date: 2023-08-19T07:30:36.998Z
title: Design Patterns - Solve common software engineering problems
thumbnail: /assets/design.jpg
---
In the ever-evolving world of software development, mastering the art of problem-solving is key. When you're faced with recurring challenges in your code, you don't want to reinvent the wheel every time, right? That's where design patterns come to the rescue. In this blog, we're going to delve into what design patterns are, why they're essential, and take a closer look at one of the fundamental types: Simple factory - a creational design pattern .

Design patterns are solutions to certain recurring common problems. These are not classes, packages, or libraries that you can plug into your choice of language or project, but rather a systematic set of guidelines on how to approach a certain problem in certain situations.

> Design patterns are solutions to recurring problems; guidelines on how to tackle certain problems
> 

Wikipedia describes them as

> In software engineering, a software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.
> 

### Please note that

- Design patterns are not a silver bullet to all your problems.
- Do not try to force them; bad things are supposed to happen, if done so.
- Keep in mind that design patterns are solutions **to** problems, not solutions **finding** problems; so don't overthink.
- If used in a correct place in a correct manner, they can prove to be a savior; or else they can result in a horrible mess of a code.

### Types of Design Patterns

- Creational
- Structural
- Behavioral

## Creational

In plain words, creational patterns are related to how to instantiate an object or group of related objects.

Wikipedia says,

> In software engineering, creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.
> 

### Simple Factory

Real world example, consider that you need a king size bed to sleep on. You can either go to forest to cut some wood(illegal btw), refine it, bring it together, make a bed, put some nails, polish it or you can simply call a shop and buy it and it will be delivered to your home.

In the terms of computing, simple factory simple generate an instance for client without exposing any of the additional logic that was required to build the object; to the client.

Wikipedia says,

> In object-oriented programming (OOP), a factory is an object for creating other objects – formally a factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be "new".
> 

```java
class Bed{
	public double getLength(){}
	public double getBreadth(){}
	public double getHeight(){}
}

class KingSizedBed implements Bed{
	protected double length, breadth, height;
	public KingSizedBed(double length, double breadth, double height){
		this.length = length;
		this.breadth = breadth;
		this.height = height;
	}
	public double getLength(){
		return this.length;
	}
	public double getBreadth(){
		return this.breadth;
	}
	public double getHeight(){
		return this.height;
	}
}

```

Thus, we have our king sized bed factory that makes the bed and returns it.

```java
class BedFactory(){
	public KingSizedBed makeKingSizedBed(double length, double breadth, double height){
		return new KingSizedBed(length, breadth, height);
	}
}

/*
* This can be later used as,
* BedFactory bf = new BedFactory();
* KingSizedBed biggestBedEver = new KingSizedBed(
*	Double.MAX_VALUE, # length
*	Double.MAX_VALUE, # breadth
*	Double.MAX_VALUE  # height
* );
*/

```

**When to Use?**

When creating an object is not just a few assignments and involves some logic, it makes sense to put it in a dedicated factory instead of repeating the same code everywhere.

### To summarize

Design patterns are a template to a certain set of problems. They are not source code or machine code but rather a systematic set of logic on how to approach a certain problems. They can be a overdo, if interpreted incorrectly and applied to problems that don't require them. Types of design patterns: creational, structural, behavioral.

Simple factory is a type of design pattern where you build an object to specifically only instantiate other objects, or a group of similar objects.
