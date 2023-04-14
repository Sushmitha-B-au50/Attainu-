// Week 7 – Day 5: Assignment
// (Maximum marks - 15)
// AttainU Id: #44
// Q-1) Write a program to create a copy of an object, like, obj2 = obj1 edit any property of obj2, and see
// if the change is reflected to obj1 or not?
// Explain your observation.
// Marks distribution:
// Question 1 carry 15 marks


let CopyObj = ()=>
{

obj1 = {
    a: 1,
    b:"2",
    c:3
}
obj2 ={...obj1} // copying obj1 to obj2
obj2['a'] = "10"; //doesnot update the original object
console.log(obj2,obj1);
}
CopyObj();

//OBSERVATION:

// after copying obj1 to obj2  all the values from obj1(original) has been copied to obj2 ,
//  now if we update or add the value in
// obj2 it won't reflect in  obj1 because obj2  completely becomes a new obj it wont have any connection 
// or reference with original (obj1), it has separate reference 
// so any updation in obj2 wont reflect in obj1.
