// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const array = [];
    arr.forEach((item) => array.push(item.name))
    return array;
}

/*
Output:
 
['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const array = [];
    arr.forEach((item) => {
        array.push(item.type);
        array.reverse();
    })
    return array;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const array = [];
    arr.forEach((item) => {
        array.push({ nombre: item.name, tipo: item.type });
    })
    return array;
}

