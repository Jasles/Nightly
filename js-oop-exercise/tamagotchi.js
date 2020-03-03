console.log('tamagotchi file is loaded');
class Tamagotchi{
    constructor(name,creatureType){
      this.name=name;
      this.creatureType=creatureType;
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
    }

    cry(){
      this.foodInTummy--;
      console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
      console.log('current food in tummy: ' + this.foodInTummy);
    }
  }

  //create a new Tamagotchi with `new`
  var HappyDays = new Tamagotchi('HappyDays', 'chick');
  var HappyHour = new Tamagotchi('HappyHour', 'Puppy');

  //console log the new Objects to check them out
  console.log(HappyDays);
  console.log(HappyHour);

  //Invoke methods on the constructed objects:
  HappyDays.cry();
  HappyHour.cry();

//your class declaration here
class Tamagotchi{
    constructor(){
        this.name=Name
        this.creatureType=creatureType}

cry(){
        Console.log('The'+ this.name +'is crying!!! WAAAH!!!!!!');
    }
}

class HappyDays extends Tamagotchi{
    constructor(creatureType){ 
        super(HappyDays,creatureType)
    }
}

class HappyHour extends Tamagotchi{
    constructor(creatureType){ 
        super(HappyHour,creatureType)
    }
}
const chick = HappyDays.creatureType
const puppy= HappyHour.creatureType

HappyDays.cry();
HappyHour.cry();

puke(){
    this.foodInTummy--;
    console.log('current food in tummy: ' + this.foodInTummy+"WAAAH!!!!!!");
}
yawn(){
    this.restedness--;
    console.log(this.name +"has current restedness of" + this.restedness)
}

class HappyYear extends Tamagotchi{
    constructor (creatureType){
        super(name, creatureType)
    }
}


    //create new Tamagotchis


//test out your Tamagotchies below via console.logs
