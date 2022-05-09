var ratingData = [
        { restaurant: 'KFC', rating: 5 },
        { restaurant: 'Burger King', rating: 4 },
        { restaurant: 'KFC', rating: 3 },
        { restaurant: 'Domino', rating: 2 },
        { restaurant: 'Subway', rating: 3 },
        { restaurant: 'Domino', rating: 1 },
        { restaurant: 'Subway', rating: 4 },
        { restaurant: 'Pizza Hut', rating: 5 }
    ]
    //Deleting elements with rating < 3
let newData = ratingData.filter((element) =>
    element.rating > 3)
console.log(newData);
// out.filter((data) => {return data.averageRating>4})
// for (obj in ratingData) {
//     if (obj.restaurant.includes('KFC')) {
//         console.log(indexOf(obj));
//     }
// }
// for (let i = 0; i < ratingData.length; i++) {
//     if (ratingData[i].restaurant === 'KFC') {
//         console.log('Index of KFC is ' + i);
//         // break;
//     }

// }
// This all done by for in only
// for (i in ratingData) {
//     // for (key in ratingData[i]) {
//     //     console.log(ratingData[i][key]);
//     // }
//     console.log(ratingData[i]);
// }
// Now for of
// for (value of ratingData) {
//     // console.log(value);
//     for (key in value) {
//         console.log(value[key]);
//     }
// }
// If you have an object, you can't just iterate it using map() , forEach() or a for..of loop.