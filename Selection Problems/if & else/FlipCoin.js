//Que 4: Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

var flip = Math.floor(Math.random() * 10);
console.log("Number of times coin flipped is: "+flip);

if (flip % 2 == 0) {
    console.log("It is Heads!!!")
}else{
    console.log("It is Tails!!!")
}