function summation(n){
    if(n == 1){
        return 1;
    }

    return n + summation(n - 1);
}

console.log(summation(7));
console.log(summation(10));