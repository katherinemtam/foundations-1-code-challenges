// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    const dairy = arr.filter(item => item.category === 'dairy');
    return dairy;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const fruits = arr.filter(item => item.price > 2 && item.category === 'fruit')
    return fruits;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const cheese = arr.find(item => item.id === 'cheese')
    return cheese;
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    const array = [];
    // arr.forEach((item) => {
    //     if (item.category === 'fruit') array.push(object.id)
    // })
    const fruitItems = arr.filter(item => item.category === 'fruit');
    const fruits = fruitItems.map(item => item.id)
    return fruits;
}

// export function listNamesOfAllFruits(arr) {
//     const array = [];
//     arr.forEach((item) => {
//         if (item.category === 'fruit') array.push(object.id)
//     })
//     return array;
// }