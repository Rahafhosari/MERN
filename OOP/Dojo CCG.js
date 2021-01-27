class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,resilience){
        super (name,cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack( target ){
        target.resilience -= this.power;
        console.log("Power=" +target.resilience);
    }
}

class Effect extends Card {
    constructor(name,cost,text,stat,magnitude){
        super (name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat == "power"){
                target.power += this.magnitude;
                console.log("Power= "+target.power);
            }
            else{
                target.resilience += this.magnitude;
                console.log("Resilience= "+target.resilience);
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

var unit1 = new Unit("Red belt ninja",3,3,4);
var unit2 = new Unit("Black belt ninja",4,5,4);
var card1 = new Effect("HardAlgorithm",2,"increase target's resilience by 3	","resilience",3);
var card2 = new Effect("UnhandledPromiseRejection",1,"reduce target's resilience by 2","resilience",-2);
var card3 = new Effect("Pair Programming",3,"increase target's power by 2","power",2);

card1.play(unit1);
card2.play(unit1);
card3.play(unit1);
unit1.attack(unit2);


