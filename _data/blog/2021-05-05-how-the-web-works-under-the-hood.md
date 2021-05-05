---
template: BlogPost
path: /how-the-web-works-under-the-hood
date: 2021-05-05T09:33:22.648Z
title: How the Web Works Under the Hood?
metaDescription: >-
  Ever wondered how the website is rendered on your laptop's screen? Learn how
  the web works under the hood when you type off a url in your web browser.
---
  

In this article, you will get to know about how the web works. You may be wondering about how the website gets rendered in your browser's screen as soon as you open its link.

What Will You Learn?
--------------------

*   How the web works
*   What do we mean by Full-Stack Web Development
*   Why we choose Django for our course

What Happens When You Visit a Website?
--------------------------------------

1.  You **start by typing the URL** into your browser.
2.  Your **computer then sends this request as a packet**, which includes the IP address of the website you want.
3.  It sends this request through wires, or a **satellite which eventually links to wires using your ISP**.
4.  Your **ISP will then re-route the request to the appropriate server location**, using the IP address as the guide.
5.  Once your request reaches the **server**, it can **send back the website you asked for.**
6.  However a full website with content is too big to send as a single packet of data. To solve this, the **server sends back the website split up into many packets**
7.  The **packets come with instructions on how to get back to you and reassemble once they reach you**.The packets don’t care how they get to you, just the final location.
8.  **Once the packets reach you, they are reassembled to show the page**.
9.  All of this moves at close to the speed of light, so it happens very fast.
10.  This is a higher-level explanation, but for our purposes, it is all we need to know for now.
11.  **Let’s continue by discussing what the term “Full-Stack” means.**

What Do You Mean By Full-Stack Web Development?
-----------------------------------------------

*   There are two main components of a website 
    *   **Front-End Web Development** - The Front-End is what you see as a user on the website.
    *   **Back-End Web Development** - The Back-End is the technology used to actually decide what to show you on the Front-End.
*   The **Front-End Development** revolves around three technologies
    *   **HTML**
    *   **CSS**
    *   **JavaScript**

**You will hear about Front-End technologies such as jQuery and Bootstrap, but those are all built using the previous three.**

What are the Technologies Used For Front-End Web Development?
-------------------------------------------------------------

*   ### HTML
    
    *   **HTML** stands for **HyperText Markup Language**. Every website will have HTML, it defines the structure of a page.
    *   You can view by right-clicking and selecting **View Page Source.**
*   ### **CSS**
    
    *   CSS - Cascading Style Sheets
    *   CSS is the actual styling of the website.
    *   Colors, fonts, borders, etc are all defined by CSS.
    *   CSS is not mandatory, but almost all sites have it.
*   ### JavaScript
    
    *   Javascript allows you to add interactivity to the website, including programming logic.
    *   Any site with interactivity uses Javascript in some way, otherwise, the site is “static”.

What are the Technologies used for Back-End Web Development? 
-------------------------------------------------------------

*   ### The Back-End Web Development of a site has three components
    
    *   **The Language**
    *   **The Framework**
    *   **The Database**
        *   Technologies such as Php, Node.js, Ruby/Rails, Java, Python, etc. are all viable options for a website.
        *   You will use the following for your backend
            *   Python as the Language - Python is a great language to learn, it’s simple, powerful, and has many libraries.
            *   Django as the Framework - Django is the most popular framework for Python, it’s fast, secure, and scalable.
            *   SQLite as the Database - SQLite comes with Django and Python making it an easy choice.

Full Stack Web Development
--------------------------

By now you know about front-end web developer and back-end web developer,  a **Full-stack Web Developer is a developer which handles the tasks of both front-end and back-end web developers**. They have **knowledge of both front-end and back-end web technologies** and hence are considered **the most skilled web developers** in the industry.

**In the next tutorial, you will learn about HTML to start your journey as a Full-Stack Developer. Stay Tuned...**
