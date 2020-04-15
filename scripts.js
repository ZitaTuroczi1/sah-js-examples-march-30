//4th part jquery things

//$(selector).action()
$('div').text('hello world');
$('div').css('background', 'purple');

$('p').text('hello world');
$('p').html('<strong>hello world</strong>');
$('p').append('<strong>another</strong>');
//$('div').remove()

$('button').click(() => {
    $('.first').toggleClass('hidden');
})

//from 1st part to the 3rd
console.log("JavaScript is working");
//array
let colors = ["orange","blue", "green", "purple"]

// /object
let post ={
    title : "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

//array of 2 objects
let posts =[{
    title:"First post",
    likeCount:12
},{
    title:"Second post",
    likeCount:222
}];

console.log (colors);
console.log(post);

// CTRL + /

let age = 18;


if (age > 18) {
    console.log ("you're an adult!");
} else {
    console.log("you're a kid!!!")
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(colors);

// f(x) = x * x

let myFunction = x => {
    console.log (x);
}

// easy greater function creation
//instead of repeating this:
console.log ("Hello, Adam");
console.log ("Hello, Peter");
console.log ("Hello, Mate");
console.log ("Hello, Reka");

//greeter function creation
let greeter = name => {
    console.log(`Hello, ${name}`);
    if(name === "ADAM") {
        console.log("he's an adult");
    }
}

greeter("ADAM");
greeter("MATE");
greeter("REKA");


//list of colors
colors.forEach(color => {
    console.log(color);
});

console.log ("This is the end of our code")