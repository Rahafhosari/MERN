//1
console.log(hello);                                   
var hello = 'world';  

//prediction
var hello;
console.log(hello);
hello = 'world'

// undefined 

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//prediction
//magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//prediction
//undefined
//super cool 

//correction (only will print super cool)

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    var food; 
    food = 'half-chicken';
    console.log(food);
    //var food = 'gone';
}

//chicken
//half chicken

//5
// mean();
// console.log(food);
// var mean = function() {
//     var food; //hoisted
//     food = "chicken";
//     console.log(food);
//     //var food = "fish";
//     console.log(food);
// }
// console.log(food);

//prediction
//chicken
//chicken
//undefined

//Correct answer >> type error mean is not a function

//6
var genre;
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//undefined
//rock 
//r&b
//disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//undefined
//seattle
//burbank
//undefined

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//{key,value}
//{name: chicago,students: 65, hiring: true}