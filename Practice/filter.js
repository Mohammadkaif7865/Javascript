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
    // console.log(newData);
    // let x = ratingData.keys();
    // for (y of x) {
    //     console.log(x[y]);
    // }
    // for (x of ratingData) {
    //     let y = Object.entries(x);
    //     for (z of y) {
    //         console.log(z);
    //     }
    // }
    //It doesn't change the original array