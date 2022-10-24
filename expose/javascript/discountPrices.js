function discountPrice(prices, discount) {
    const discounted = [];
    // const finalPrice = 0;
    const length = prices.length

    for (let i = 0; i < length; i++) {
        // let discountedPrice = prices[i] * (1 - discount);
        // finalPrice = Math.round(discountedPrice * 100) / 100;
        // discounted.push(finalPrice);

        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);   
    }

    // console.log(i);
    // console.log(discountedPrice)
    // console.log(finalPrice)
    // console.log(length);

    return discounted;
}

// var dp = discountPrice([100, 200, 300], 0.5);
// console.log(dp)

var student = {
    name: "Sarah", 
    age: 5, 
    'Grad year': {a: 2010, b:2015}, 
    greeting: function() {console.log('Sup')}
};
var toPrint = true === Boolean(2);
console.log(toPrint)


function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2)}, 1000);
    setTimeout(function() {console.log(3)}, 0);
    console.log(4);
}

printNums();