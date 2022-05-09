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
    // for (key of ratingData) {
    //     console.log(key);
    // }
    //For of works for iterating array 
for (key of ratingData) {
    // for (value of key) {
    //     console.log(value);
    // }
    // for of cannot iterate array
    // If you have an object, you can't just iterate it using map() , forEach() or a for..of loop.
    // for (value in key) {
    //     for (char of key[value]) {
    //         console.log(char);
    //     }
    // }
    for (char in key.restaurant) {
        console.log(key.restaurant[char]);
    }
    // but for in can easily access through the object

}
//For  of direct access to value of the property