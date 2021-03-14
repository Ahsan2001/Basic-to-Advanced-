/*-------------------------------Question # 1 Start------------------------------- */

// var car = {
//     Trim:	"L 4.0 TFSI quattro",
//     Engine:	"4.0L Twin-Turbo V8 Gas",
//     Transmission:	"8-Speed Automatic",
//     Drivetrain:	"All-Wheel Drive",
//     Price:	"$130,900",
//     bodyStyle: "4-door sedan",
//     address: function() {
//         return "House # 7, Str # 3, Pitember Street, Garden West, Karachi "
//       },
//     OwnerInfo: function(){
//         return "Owner Name is Ahsan Living in karachi"
//     }
// }

/*-------------------------------Question # 1 End------------------------------  */






/*-------------------------------Question # 2 Start------------------------------- */
// const callBack = function (firstName,lastName,age) {  
//     console.log(`This  is ${firstName}  ${lastName} & my age is ${age}`);
// }
// callBack("Ahsan","Sabir",19)
 
// setTimeout(callBack, 3000);

/*-------------------------------Question # 2 End------------------------------  */









/*-------------------------------Question # 3 Start------------------------------- */
// var password = prompt(`Enter Your Password`);

// if (password.length > 12 && password.includes("@", "#", "$", "&", "*", "%", "!", "^", "?")) {
//     document.write("Your Password is Strong")
// }

// else if (password.length > 8 || password.length > 5 && password.includes("@", "#", "$", "&", "*", "%", "!", "^", "?")) {
//     document.write("Your Password is Strong enough")
// }

// else {
//     document.write("Your Password is too Week")
// }

// document.write(`<br /><br />Your Password is : ${password}`);

/*-------------------------------Question # 3 End------------------------------  */




/*-------------------------------Question # 4 Start------------------------------  */

// list = document.querySelector(".mylist");
// html = ``;
// const days = ["monday","tuesday","wedsday","thursday","friday", "saturday", "sunday"]
// days.forEach((mylist) =>{
//     html += `<li style="color: red">${mylist}</li>`
// })
// list.innerHTML = html
// document.querySelector(".mylist").style.backgroundColor = "blue";
// document.querySelector(".mylist").style.textAlign = "center";
// document.querySelector(".mylist").style.margin = "50px";



/*-------------------------------Question # 4 End------------------------------  */





/*-------------------------------Question # 5 Start------------------------------  */


//Write a program to take input the marks obtained in three subjects 
var math = Number(prompt("Enter Math Marks"));
var physics = Number(prompt("Enter Physics Marks"));
var chemistry = Number(prompt("Enter Chemistry Marks"));
// total marks
var totalMark = 300;

//Compute & show the resulting percentage on your page
var obtainedMark = Number(math+physics+chemistry);
var percentage = obtainedMark/totalMark*100; 
//Show the total marks, marks obtained, percentage, grade & remarks
document.write("<h1>Mark Sheet</h1>");
document.write( "Total Mark" +"  "+totalMark +"</br>"); 
document.write( "Obtained Mark" +"  "+obtainedMark  +"</br>");
document.write( "Percentage" +"  "+percentage +"%" +"</br>" );















/*-------------------------------Question # 5 End------------------------------  */














/*-------------------------------Question # 6 Start------------------------------  */

// let carNames = ["Aston Martin", "Audi", "BMW", "Cadillac", "Chevrolet", "Datsun",  "Ferrari", "Ford"]

// carNames.forEach( (item,index) => {
//     document.write(  index + ":" + item + "<br>"); 

// });

/*-------------------------------Question # 6 End------------------------------  */
