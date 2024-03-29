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

### Factory Method

Real world example,

> Consider the case of a hiring manager. It is impossible for one person to interview for each of positions. Based on the job opening, they have to decide to delegate the interview steps to different people.

In plain words,

> It provides a way to delegate the instantiation logic to child classes.

Wikipedia says

> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

Take our hiring manager example above. First of all we have an interviewer interface and some implementations for it.

```java
interface Interviewer{
	void askQuestions();
}

class Developer implements Interviwer{
	public void askQuestions(){
		System.out.println("Ask about django ORM");
	}
}

class CommunityExecutive implements Interviewer{
	public void askQuestions(){
		System.out.println("Ask about Community Building");
	}
}
```

Now let us create our `HiringManager`.

```java
abstract class HiringManager{
	abstract Interviewer makeInterviewer();
	public void takeInterview(){
		Interviewer interviewer = makeInterviewer();
		interviewer.askQuestions();
	}
}

// Now any child can extend it 
// and provide the required Interviewer

class DevelopmentManager extends HiringManager {
    protected Interviewer makeInterviewer() {
        return new Developer();
    }
}

class MarketingManager extends HiringManager
{
    protected Interviewer makeInterviewer(){
        return new CommunityExecutive();
    }
}
```

And then it can be used as,

```java
Developer dev = new DevelopmentManager();
dev.takeInterview();
```

Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime. Or putting it in other words, when the client doesn't know what exact sub-class it might need.

## Abstract Factory

> Extending our bed example from Simple Factory. Based on your needs you might get a wooden bed from a wooden bed shop, iron bed from an iron shop or from the relevant shop. Plus you might need a guy with different kind of specialties to fit the bed, for example a carpenter for wooden bed, welder for iron bed etc. As you can see there is a dependency between the beds now, wooden beds needs carpenter, iron beds needs a welder etc.

In plain words

> A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.

Wikipedia says

> The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes

Translating the bed example above. First of all we have our `Bed` interface and some implementation for it

```java
interface Bed {
    public String getDescription();
}

class WoodenBed implements Bed {
    public String getDescription() {
        return "I am a wooden bed";
    }
}

class IronBed implements Bed {
    public String getDescription() {
        return "I am an iron bed";
    }
}
```

Then we have some capenters for each bed type

```java
interface BedFittingExpert {
    public String getDescription();
}

class Welder implements BedFittingExpert {
    public String getDescription() {
        return "I can only fit iron beds";
    }
}

class Carpenter implements BedFittingExpert {
    public String getDescription() {
        return "I can only fit wooden beds";
    }
}
```

Now we have our abstract factory that would let us make family of related objects i.e. wooden bed factory would create a wooden bed and wooden bed fitting expert and iron bed factory would create an iron bed and iron bed fitting expert

```java
interface BedFactory {
    public Bed makeBed();
    public BedFittingExpert makeFittingExpert();
}

class WoodenBedFactory implements BedFactory {
    public Bed makeBed() {
        return new WoodenBed();
    }
    public BedFittingExpert makeFittingExpert() {
        return new Carpenter();
    }
}

class IronBedFactory implements BedFactory {
    public Bed makeBed() {
        return new IronBed();
    }
    public BedFittingExpert makeFittingExpert() {
        return new Welder();
    }
}
```

As you can see the wooden bed factory has encapsulated the `carpenter` and the wooden bed also iron bed factory has encapsulated the `iron bed` and `welder`. And thus it had helped us make sure that for each of the created bed, we do not get a wrong fitting expert.

**When to use?**

When there are interrelated dependencies with not-that-simple creation logic involved.

## Builder

> Imagine you are at a subway and you want to customize your full order on how you order a subway. Instantiating such an object with a constructor would result into horrendous code as you will need to specify so many options to choose from. For example you want a customized Subway deal, you have several options in how your burger is made e.g what bread do you want? what types of sauces would you like? What cheese would you want? etc. In such cases builder pattern comes to the rescue.

In plain words

> Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

Wikipedia says

> The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.

Having said that let me add a bit about what telescoping constructor anti-pattern is. At one point or the other we have all seen a constructor like below:

```java
public Construct(int size, boolean tomato=false, boolean cheese=false......){
	this.size = size;
	this.tomato = tomato;
	this.cheese = cheese;
	...
	...
}
```

As you can see; the number of constructor parameters can quickly get out of hand and it might become difficult to understand the arrangement of parameters. Plus this parameter list could keep on growing if you would want to add more options in future. This is called telescoping constructor anti-pattern.

### Solution

The sane alternative is to use the builder pattern. First of all we have our burger that we want to make

```java
class Burger
{
    protected int size;

    protected boolean cheese = false;
    protected boolean pepperoni = false;
    protected boolean lettuce = false;
    protected boolean tomato = false;

    public Burger(BurgerBuilder builder)
    {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.tomato = builder.tomato;
        this.lettuce = builder.lettuce;
    }
}

class BurgerBuilder
{
    public int size;

    public boolean cheese = false;
    public boolean pepperoni = false;
    public boolean lettuce = false;
    public boolean tomato = false;

    public BurgerBuilder(int size)
    {
        this.size = size;
    }

    public BurgerBuilder addPepperoni()
    {
        this.pepperoni = true;
        return this;
    }

    public BurgerBuilder addLettuce()
    {
        this.lettuce = true;
        return this;
    }

    public BurgerBuilder addCheese()
    {
        this.cheese = true;
        return this;
    }

    public BurgerBuilder addTomato()
    {
	    this.tomato = true;
        return this;
    }

    public Burger build()
    {
        return new Burger(this);
    }
}
```

And then we can use it like this,

```java
Burger burger = new BurgerBuilder(14)
					.addPepperoni()
					.addTomato()
					.addCheese()
					.addLettuce()
					.build();
burger.eat();
```

**When to use?**

When there could be several flavors of an object and to avoid the constructor telescoping. The key difference from the factory pattern is that; factory pattern is to be used when the creation is a one step process while builder pattern is to be used when the creation is a multi step process.

## Prototype

> Prototype design pattern is all about cloning

In plain words,
> Create object based on an existing object through cloning.

Wikipedia says

> The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.

In short, it allows you to create a copy of an existing object and modify it to your needs, instead of going through the trouble of creating an object from scratch and setting it up.

**Programmatic Example**

```java
public abstract class Tree{
	...
	public abstract Tree copy();
	...
}

public class PineTree extends Tree{
	@Override 
	public Tree copy(){
		PineTree t = new PineTree(this.getMass(), this.getHeight());
		return t;
	}
}

public class BananaTree extends Tree{
	@Override 
	public Tree copy(){
		BananaTree t = new BananaTree(this.getMass(), this.getHeight());
		return t;
	}
}
```

```java
// Then it can be used like
PineTree original = new PineTree(4,3);
PineTree copycat = original.copy();
```

## Singletom

> There can only be one president of a country at a time. The same president has to be brought to action, whenever duty calls. President here is singleton.

In plain words

> Ensures that only one object of a particular class is ever created.

Wikipedia says

> In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Singleton pattern is actually considered an anti-pattern and overuse of it should be avoided. It is not necessarily bad and could have some valid use-cases but should be used with caution because it introduces a global state in your application and change to it in one place could affect in the other areas and it could become pretty difficult to debug. The other bad thing about them is it makes your code tightly coupled plus mocking the singleton could be difficult.

**Programmatic Example**

To create a singleton, make the constructor private, disable cloning, disable extension and create a static variable to house the instance

```java
class President{
	private static President instance = null;
	public static synchronized President getInstance(){
		if(instance == null)
			instance = new President();
		return instance;
	}
	@Override
	protected Object clone() throws CloneNotSupportedException{
		return instance;
	}
} 
```

### To summarize

Design patterns are a template to a certain set of problems. They are not source code or machine code but rather a systematic set of logic on how to approach a certain problems. They can be a overdo, if interpreted incorrectly and applied to problems that don't require them. Types of design patterns: creational, structural, behavioral.

Simple factory is a type of design pattern where you build an object to specifically only instantiate other objects, or a group of similar objects.

