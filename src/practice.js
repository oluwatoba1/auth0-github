let pikachu = {
    name: 'I am pikachu',
    power: 'I can electrify'
};

let clifary = {
    name: 'I am clifary',
    power: 'I am cute'
};

let charmander = {
    name: 'I am charmander',
    power: 'I throw fire'
};

let pokemon = new Map();
pokemon.set('pika', pikachu);
pokemon.set('cli', clifary);
pokemon.set('char', charmander);

console.log(pokemon.size);

console.log(pokemon.get('char'));

console.log(pokemon.keys());

for (key of pokemon.keys()){
    console.log(key);
}

for (val of pokemon.values()) {
    console.log(val);
}

//---------------------------------------------------------------------------------->

let dcUniverse = new Set(['Batman', 'Superman', 'Batman']); //this won't save Batman twice

dcUniverse.add('Flash');
dcUniverse.add('Flash'); //neither will it add 'Flash' twice
dcUniverse.add('Wonder Woman');

for (let character of dcUniverse){
    console.log(character);
}

console.log(dcUniverse.has('Batman')); //returns true)

//------------------------------------------------------>

//Getters and setters
//Getters are to access values in a class; to get
//Setters are to pass values into the class; to set
class Driver {

    constructor(name){
        this._name = name;
    }

    get myname(){
        return this._name;
    }
    
    set myname(val){

        //conditions are usually placed in the setter because
        //we just can't let any value be passes to it

        if(val.length > 6){
            this._name = val;
        }

    }

}

let driver = new Driver('John');

driver.myname;
driver.myname = 'Jonny'; //it will return 'John', the default, because the length is less than 6
driver.myname = 'Johnnie';// it will return 'Johnnie' of course

//--------------------------------------------------------------------------------->

let sym1 = Symbol();

let obj = {
    name: 'Sega',
    power: 'Box',
    [sym1]: 98674
};

console.log(obj[sym1]);//this is how to access the symbol variable

const M_KEY = Symbol()


