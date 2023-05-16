function multiplicationTable(num) {
    for (let i = 0; i<=10 ; i++){
        const product = num * i;
        console.log(`${num} x ${i} = ${product}`);
    }
}

multiplicationTable(10);