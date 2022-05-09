var ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
];
//access the property key
//If i use this then this is the out put
// for (obj in ratingData) {
//     console.log(ratingData[obj]);
// }
//     { restaurant: 'KFC', rating: 5 }
// { restaurant: 'Burger King', rating: 4 }
// { restaurant: 'KFC', rating: 3 }
// { restaurant: 'Domino', rating: 2 }
// { restaurant: 'Subway', rating: 3 }
// { restaurant: 'Domino', rating: 1 }
// { restaurant: 'Subway', rating: 4 }
// { restaurant: 'Pizza Hut', rating: 5 }
//And If i use this then output will be
// for (obj in ratingData) {
//     console.log(obj);
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// My Opinions is that the for in loop access the address of address and its your choice to de-reference it
// Same is for iterating over object
for (obj in ratingData) {
    for (key in ratingData[obj]) {
        // console.log(key);
        //         output is 
        //         restaurant
        // rating
        // restaurant
        // rating
        // restaurant
        // rating
        // restaurant
        // rating
        // restaurant
        // rating
        // restaurant
        // rating
        // restaurant
        // rating
        // restaurant
        // rating
        console.log(ratingData[obj][key]);
        //         output is
        //         KFC
        // 5
        // Burger King
        // 4
        // KFC
        // 3
        // Domino
        // 2
        // Subway
        // 3
        // Domino
        // 1
        // Subway
        // 4
        // Pizza Hut
        // 5
    }
}