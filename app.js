let mine = "essa",

    myArr = [1,2,3,4];

function sayHi (name) {
    console.log(`hi ${name}`)
}

export default function sayHello (name) {
    console.log(`Hello ${name}`)
}


export {
    sayHi as hi, myArr,mine
}