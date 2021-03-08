
//task 03(a)

var colours = []

colours [1] = "green"
colours [2] = "blue"
colours [3] = "red"

console.log(colours);

prompt("Please choose the starting colour name!" , )

colours.unshift("purple");

alert(colours);

document.write("<br>");
//task 03(b)

prompt("Please choose the ending colour name!" , )

colours.push ("violet");


document.write("<br>");
//task 03 (c)

colours.unshift("lightblue" ,"lightred");


alert(colours);

//task 03 (d)

document.write("<br>");
colours.shift()

alert(colours);

//task 03 (e)
document.write("<br>");
colours.pop();

alert(colours);

//task 03 (f)
document.write("<br>");

prompt("at which index u want to add colour?" , )
colours[2] = "magenta";
alert(colours);

document.write("<br>");

prompt("at which index u want to delete colour and how many?" , )

colours.splice(2,2);


alert(colours);



