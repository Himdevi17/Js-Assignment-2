function findTax(salary) {
    let taxAmount;
    switch (true) {
        case salary > 1500000:
            taxAmount = salary * 0.3;
            break;
        case salary > 1000000:
            taxAmount = salary * 0.2;
            break;
        case salary > 500000:
            taxAmount = salary * 0.1;
            break;
        case salary > 0:
            taxAmount = 0;
            break;
        default:
            taxAmount = "Invalid salary";
            break;
    }
    return taxAmount;
}

console.log(findTax(400000)); // Output: 0 (No tax)
console.log(findTax(800000)); // Output: 80000 (10% tax)
console.log(findTax(1200000)); // Output: 240000 (20% tax)
console.log(findTax(2000000)); // Output: 600000 (30% tax)
