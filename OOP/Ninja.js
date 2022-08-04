class Ninja {
    constructor(name,health,speed = 3,strength= 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }

    sayName () {
        console.log("Ninja's name is "+this.name);
    }

    showStats(){
        var name = this.name; 
        var health = this.health; 
        var speed = this.speed;
        var strength = this.strength;
        console.log("Name:"+ name,"Health:"+ health,"Speed:"+ speed,"Strength:"+ strength);
    }

    drinkSake(){
        var health = this.health += 10;
        console.log("Health is "+ health);
    }
}

var r = new Ninja("Rahaf",200);
r.sayName();
r.showStats();
r.drinkSake();

var j = new Ninja ("Jeries",100,50,50);
j.sayName();
j.showStats();
j.drinkSake();

var l = new Ninja("Rahaf",200, 5, 5);
l.showStats();


//Ninja's name is Jeries
// Name:Jeries Health:100 Speed:3 Strength:3
// Health is 110
// in this case since the constructor only has name and health
//the speed and strenght didn't over ride.
//but if speed and strength were added in the constructor attributes their values will over ride.
//constructor(name,health,speed = 3,strength= 3){
    // this.name = name;
    // this.health = health;
    // this.speed = speed;
    // this.strength = strength;
    // }
    //with a constructor like this the speed and health 
    //will be changed from 3 to 50 as we defined for the instance