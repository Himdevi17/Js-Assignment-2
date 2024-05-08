function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 || n2 > 0) {
        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

console.log(sumOfProducts(6, 34)); 
console.log(sumOfProducts(123, 456)); 
console.log(sumOfProducts(789, 12)); 
