---
template: BlogPost
path: /day-1-of-learning-dsa-here-is-what-i-learned/
date: 2021-06-12T16:43:53.149Z
title: 'Day #1 of Learning DSA - Here is What I Learned'
metaDescription: >-
  As I went on to search the best resources to study data structure and
  algorithms, I found a wonderful study plan by John Washam which was prepared
  for cracking Google Software Engineer Coding Interview. You can take a look at
  it here. Instead of forking his same repo, I wanted my coding structure to be
  a bit different. Long story short, I created my own repo for archiving my code
  of these learnings over there.
thumbnail: /assets/Day 1 of Learning DSA - Here is What I Learned.png
---
From today(12th Jun, 2021) I started learning Data Structures and Algorithms at my own pace. Being a 3rd year college student I already knew the basics of sorting, searching, Big-O Complexities and other stuff that mind sound scary to newbies. But as we all know if you really want to stand out as a programmer you need to understand from stacks to heaps, pointer to pointer math and other stuff related to data structures and algorithms.
﻿
As I went on to search the best resources to study data structure and algorithms, I found a wonderful [study plan](https://github.com/jwasham/coding-interview-university) by [John Washam](https://github.com/jwasham/) which was prepared for cracking Google Software Engineer Coding Interview. You can take a look at it [here](https://github.com/jwasham/coding-interview-university). Instead of forking his same repo, I wanted my coding structure to be a bit different. Long story short, I created [my own repo](github.com/Dev-Mehta/dsa-daily-practice) for archiving my code of these learnings over there.
﻿
During these days(I don't know the exact number as the study plan is pretty large), I would be solving each of the given problem in 3 Programming Languages:
 - C++
 - Java
 - Python
﻿
## Day 1 - Implementing a Custom Array
If you don't know what a array is, an array is a collection of elements, stored at a contiguous memory location. The basic idea is to store multiple items of same type together. But the problem is the simple array provided by the language developers is sometimes not enough. What if you want to push, pop or prepend data or you want to find index of item by value. Or you want to add new elements without overriding the existing months. Here custom array classes come to the solution. 
﻿
The task given was to develop a vector which resizes itself automatically during insertion or deletion operations. Alongside various methods also needs to be created to push, pop, find, or delete items. A breif description is given down in the later part of this article
﻿
![image](https://user-images.githubusercontent.com/55938019/121782589-dfe21c00-cbc7-11eb-9570-305c55b1a46c.png)
﻿
After working for 4hrs 26 minutes on the problem, finally I ended up having working solution for all the 3 languages Python, Java and C++.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/FqdruC6cJYXxC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/tired-the-big-bang-theory-exhausted-FqdruC6cJYXxC">via GIPHY</a></p>
﻿
I have shared the solution for C++ here down below. It might save you from 3 hours I spent on C++(Coding C++ part was the most difficult for m

Other solutions are available on [my github repo](https://github.com/Dev-Mehta/dsa-daily-practice/tree/master/Day%201%20-%20Arrays).

## How to Implement Custom Vector Class in C++

The given task is to implement a class in C++ which behaves like Vector in C++. Vectors are like dynamic arrays with the ability to resize themselves automatically during insert or delete operation. Our vector class will store elements in a contiguous manner.
﻿
Certain functions that we will implement are:
 - `int size()`: returns size of the array
 - `capacity()` - number of items it can hold
 - `is_empty()` - returns true is array is empty else false
 - `at(index)` - returns item at the given index blows up if index out of bounds
 - `push(item)` - pushes item at the end of the array
 - `insert(index, item)` - inserts an item at index, shifts that index's value and trailing elements to the right
 - `prepend(item)` - inserts an item at beginning of the array
 - `pop()` - remove from end, return value
 - `delete(index)` - delete item at index, shifting all trailing elements left
 - `remove(item)` - looks for value and removes index holding it (even if in multiple places)
 - `find(item)` - looks for value and returns the first index with that value, -1 if not found
﻿
Below is the implementation of our own vector class
```cpp
/** 
Task: To implement an automatically resizing vector
Functions:
	size() - number of items
	capacity() - number of items it can hold
	is_empty()
	at(index) - returns item at given index, blows up if index out of bounds
	push(item)
	insert(index, item) - inserts item at index, shifts that index's value and trailing elements to the right
	prepend(item) - can use insert above at index 0
	pop() - remove from end, return value
	delete(index) - delete item at index, shifting all trailing elements left
	remove(item) - looks for value and removes index holding it (even if in multiple places)
	find(item) - looks for value and returns first index with that value, -1 if not found
*/
﻿
#include <iostream>
using namespace std;
﻿
template<typename T> class Array{
	// arr is the integer pointer which stores the address of our vector
	T* arr;
	// capacity is the total storage available for the vector
	int _capacity;
	// current is the number of elements present in the vector
	int current;
	void resize(){
		if(current==_capacity){
			T* temp = new T[2 * _capacity];
			for(int i = 0; i < _capacity; i++){
				temp[i] = arr[i];
			}
			delete[] arr;
			_capacity *= 2;
			arr = temp;
		}
		if(current==_capacity/4){
			T* temp = new T[_capacity / 2];
			for(int i = 0; i < _capacity; i++){
				temp[i] = arr[i];
			}
			delete[] arr;
			_capacity = _capacity / 2;
			arr = temp;
		}
	}
	public: 
		Array(){
			arr = new T[1];
			_capacity = 1;
			current = 0;	
		}
		/**
		 * @return the number of items present in array 
		*/
		int size(){
			return current;
		} 
		/**
		 * @return the number of items array can hold 
		*/
		int capacity(){
			return _capacity;
		}
		/**
		 * @return whether the array is empty or not
		*/
		bool is_empty(){
			if(current==0)
				return true;
			return false;	
		}
		/**
		 * @param item - Adds item to the array
		*/
		void push(T item){
			if(current==_capacity){
				T* temp = new T[2 * _capacity];
				for(int i = 0; i < _capacity; i++){
					temp[i] = arr[i];
				}
				delete[] arr;
				_capacity *= 2;
				arr = temp;
			}
			arr[current] = item;
			current++;
		}
		/**
		 * @param index - index of item
		 * @return return the item at given index
		*/
		T at(int index){
			if(index < current){
				return arr[index];
			}
		} 
		/**
		 * @param index - index of item to be inserted
		 * @param item - item to be inserted
		*/
		void insert(int item, int index){
			// if index is equal to capacity
			// then this function is same as
			// push function defined earlier
			if(index == _capacity){
				push(item);
			}
			else{
				for(int i = this->current; i>=index; i--)
					arr[i] = arr[i-1];
				arr[index] = item;
				current++;
			}
		}
		/**
		 * @param item - item to be added
		*/
		void prepend(int item){
			insert(item, 0);
		}
		/**
		 * @return pops the last element and returns it
		*/
		T pop() {
			if(current > 0){
				current--;
				resize();
				return arr[current+1];
			}
		}
		/**
		 * Function to delete item at
		 * @param index index of the item to delete
		*/
		void deleteElement(int index){
			int temp = current;
			
			current--;
		}
		/**
		 * Function to remove all items that match given item
		 * @param item Item to remove. All matching items will be removed
		*/
		void remove(T item){
			const int s = this->size();
			for(int i = 0; i < s; i++){
				if(item == arr[i]){
					for(int j = i; j < s; j++){
						arr[j]=arr[j+1];
					}
					current--;
				}
			}
		}
		/**
		 * Function to find index of item
		 * @param item Item to look for
		*/
		int find(T item){
			int index = -1;
			for(int i = 0; i < current; i++){
				if(item == arr[i]){
					index = i;
					break;
				}
			}
			return index;
		}
		void print(){
			for(int i = 0; i < current; i++){
				cout << arr[i] << endl;
			}
		}
};
﻿
﻿
// Driver code
int main(){
	Array<int> arr;
		arr.push(3);
  	arr.prepend(2);
  	arr.insert(1,0);
  	arr.print();
  
  	arr.pop();
  	cout << "Is array empty: 0=False, 1=True: " << arr.is_empty() << endl;
  	cout << "Capacity of array: " << arr.capacity() << endl;
  	cout << "No. of elements in array: " << arr.size() << endl;
  	cout << "Element at position 1: " << arr.at(1) << endl;
  	cout << "Deleting element at position 1: " << endl;
  	arr.deleteElement(1);
  	arr.print();
  	arr.push(3);
    cout << "Removing all 3s from array: " << endl;
  	arr.remove(3);
  	arr.print();
}
/**
Output
1
2
3
Is array empty: 0=False, 1=True: 0
Capacity of array: 1
No. of elements in array: 2
Element at position 1: 2
Deleting element at position 1: 
1
Removing all 3s from array: 
1
*/
```
﻿
## Conclusion
﻿
<div style="width:100%;height:0;padding-bottom:73%;position:relative;"><iframe src="https://giphy.com/embed/lD76yTC5zxZPG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/the-end-thats-all-folks-lD76yTC5zxZPG">via GIPHY</a></p>
﻿

Although spending 4.5 hours learning -  how to implement a basic data structure like array, might not sound exciting to many, I personally enjoyed coding the solution throughout. Coding the solution in C++ was both tedious and helpful as I learned many new things about C++. As I first spent 3 hours coding the C++ part, I found coding in python and java way more faster as I remembered the logic of the solution. This way I spent less time coding and more time memorizing how things work under the hood. Long story short it was a wonderful experience throughout.
﻿

I would be also posting solutions of Day #2 - Linked Lists if tends out to be helpful for you. Until then, happy coding.
