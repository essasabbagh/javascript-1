
const a = 1
const b = a == 1 ? 1 : 0;
console.log(a *b);

// Module :
import say, {mine,myArr,hi} from "./app.js";

console.log(mine);
console.log(myArr);
console.log(hi);
console.log(say("Essa"));

// arrow Function:
let essa = _ => 2;
console.log(essa());
let myStr = `Hi bitch ${essa()}`
console.log(myStr) 

// Object destructuring
const myObj = {
    name : `essa`,
    age : 32,
    city : `istanbul`,
    skill : { html : `70%`,
            css : `60%`,
            js : [`vuejs`, `reactjs`]}
}
// const {name, age ,city ,skill: {html , css ,js:[one ,two]}} = myObj;

// Function destructuring
function infoShow ({name, age ,city ,skill: {html , css ,js:[one ,two]}}) {

    console.log(`My name is ${name}
    ,I have ${age}, and I live in the ${city}, 
    My skill progrras in HTML is ${html},
    and in CSS is ${css},
    and I know ${one},and ${two}, framwork `);
}
infoShow(myObj);
// Vue start"
new Vue ({
    el: `#ESSA`,
    data: {
        message: `hi`
    }
})
// Class:
class user {
    constructor (name ,age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`Hi Mr. ${this.name}`)
    }
}
const firstUser = new user("Essa");
firstUser.getInfo();

// Promise:
const myPromise = new Promise ((resolve , reject) => {
    let connect = false;
    if (connect) {
        resolve ('ok');
    } else {
        reject (console.error('fuck'));
    }

}).then(
    (resolve) => console.log(resolve),
    (reject) => console.log(reject)
)