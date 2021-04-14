// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    const array = [];
    arr.map(item => array.push(item.name))
    return array;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungry = arr.map(item => item.isHungry = true,)
    return arr;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const array = [];
    const shout = arr.map(item => ({ name: item.name.toUpperCase(), type: item.type }))
    return shout;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const strings = arr.map(item => item.name + item.type)
    return strings;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const array = [];
    for (let entry in arr) {
        const inner_arr = [];

        for (let prop in arr[entry]) {
            const inner_inner_arr = [];

            inner_inner_arr.push(prop + "");
            inner_inner_arr.push(arr[entry][prop]);

            inner_arr.push(inner_inner_arr);
        }
        array.push(inner_arr);
    }
    return array;
}

/*
const pets = [
    { name: 'scooter', type: 'puppy' },
    { name: 'sassy', type: 'puppy' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];
*/