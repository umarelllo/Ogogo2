const allPoints = {
    products: 'https://fakestoreapi.com/products'
}

fetch(allPoints.products).then(function (data) {
    return data.json()
}).then(function(result) {
    stateDataStorage(result)
})

function stateDataStorage (products) {
    console.log(products);
}