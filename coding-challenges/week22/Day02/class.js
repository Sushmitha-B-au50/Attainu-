// Question ID: 98
// Q1. Create a Student class and initialize it with name and roll number.
// Make methods to :
// 1. Display - It should display all the information of the student.
// 2. setAge - It should assign age to student
// 3. setMarks - It should assign marks to the student.


var person = {
    name :"sherlock",
    rollno : 3,
    Display : function()
    {
        return this.name + "  age is " + this.age + " mark is " +  this.mark + " roll no is " +this. rollno;
    }
}        

var person4 = {
    name :"sherlock",
    age:  20,
    mark : 80,
    rollno :3

};

console.log(person.Display.apply(person4, [20, 80]));
    
