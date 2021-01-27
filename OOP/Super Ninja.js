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

class Sensei extends Ninja {
    //A Sensei should have 200 Health, 10 speed, and 10 strength by default

    constructor (name,wisdom = 10){
        super(name,200,10,10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        const morehealth = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats() {
        var name = this.name; 
        var health = this.health; 
        var speed = this.speed;
        var strength = this.strength;
        var wisdom = this.wisdom;
        console.log("Name:"+ name,"Health:"+ health,"Speed:"+ speed,"Strength:"+ strength,"Widsom: "+wisdom);
    }
}

const L = new Sensei ("Master Splinter");
L.showStats();
L.speakWisdom();
