// Week 13 – Day 2: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #104
// Q-1 ) Write a program to remove first node from a linked list: (5 marks)
// (Super Easy)
// Example 1:
// Input(elements in linked list)
// 2
// 5
// 6
// 8
// 3
// Output(elements after removing head of the linked list)
// 5
// 6
// 8
// 3
// Q-2 ) Convert Binary Number in a Linked List to Integer: (10 marks)
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/ (Easy)
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list
// is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.
// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Marks distribution:
// Question 1,2 carry 15 marks


// 1).
class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        // this.size = 0;
    }

    insertAtEnd(val){
        let node = new Node(val);
        if(this.head==null){
            this.head = node;
        }
        else{
            let cur = this.head;
            while(cur.next!=null){
                cur = cur.next;
            }
            cur.next = node;
        }
    }

    insertAtBegin(val){
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    printSize(){
        let cur = this.head;
        let size = 0;
        while(cur!=null){
            cur = cur.next;
            size++;
        }
        console.log(size);
    }
}

let lilist = new LinkedList();
lilist.insertAtBegin(5); 
lilist.insertAtEnd(1); 
lilist.insertAtEnd(0); 
lilist.insertAtEnd(1);
lilist.printSize();

console.log(lilist); // 5->1->0->1

//deleteatfront
let curr  = lilist.head
// console.log(curr);
let newhead = curr.next;
console.log(newhead); // after removed the frst element  1->0->1

console.log("---------------------------------");

// 2).
var getDecimalValue = function(head) {
    let curr = head;
     let num = 0;
     let size = 0;
      while(head != null){            
             size++;
              head = head.next;         
             }
    size = size-1;  // calculated size here if it  is 15 so from 0 to 14 
     while(curr != null){  
              num += ((curr.val) * (2 ** size));   //1* 2 ^14
              size--;
              curr = curr.next;         
             }
     return num;
 };

console.log(getDecimalValue(newhead)) //linked list 1->0->1 output - 5


