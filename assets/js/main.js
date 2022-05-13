



//Level1_1
function intro() {
    console.log("Hello World");
}

const intro2 = () => console.log('intro');


//Level1_2
const hello = () => console.log('hello');
hello();

let x = 2;
let y = 3;

const plus = () => console.log(x + y);
plus();

const multi = () => window.alert(x * y);
multi();

let i = true;
let j = "hi";
let k = 1;
let l = { name: "John" };
let a = [0, 1];

const type = (par) => {
    console.log(typeof par);
}
type(i);


//Level1_4
const hero = (heroName, heroPower, heroEnemy) => {
    let Name = "hob koan";
    let Power = "kann ois";
    let Enemy = "werd vo olle gliebt";
    console.log(heroName, heroPower, heroEnemy);
}

hero("Hulk", "stark", "woas net");

//Level1_6

returnOne = () => {
    return 1;
}
console.log(returnOne());

let x1 = returnOne();
let y1 = 1;
if (x1 === y1) {
    console.log("Wird das gedruckt?");
}

//Level1_7
const funFun = (a) => {
    return a * 2;
}

console.log(funFun(5));


//Level1_8
const Alter = (yearBorn) => {
    // console.log(2022 - yearBorn);
    return 2022 - yearBorn;
}

console.log(Alter(1991));


//level1_9
const Me = (vorname, nachname, geburtsort, alter, wohnort) => {
    return ` mein Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren. Ich lerne Coden bei Supercode. Ich bin ${alter} Jahre alt. Ich wohne in ${wohnort}. `
}


// let vorname
// let nachname
// let geburtsort
// let alter 
// let wohnort

console.log(Me('Baschar', 'Shaheen', 'Syrien', 34, "Düsseldorf"));