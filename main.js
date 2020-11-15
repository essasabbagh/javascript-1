const a = 1
const b = a == 1 ? 1 : 0;
console.log(a *b);

let essa = _ => 2;

console.log(essa());

let myStr = `Hi bitch ${essa()}`

console.log(myStr)  

const myObj = {
    name : `essa`,
    age : 32,
    city : `istanbul`,
    skill : { html : `70%`,
            css : `60%`,
            js : [`vuejs`, `reactjs`]}
}

// const {name, age ,city ,skill: {html , css ,js:[one ,two]}} = myObj;
function infoShow ({name, age ,city ,skill: {html , css ,js:[one ,two]}}) {

    console.log(`My name is ${name},I have ${age}, and I live in the ${city}, 
            My skill progrras in HTML is ${html}, and in CSS is ${css}, and I know ${one},and ${two}, framwork `);
}

infoShow(myObj);


new Vue ({
    el: `#ESSA`,
    data: {
        message: `hi`
    }
})