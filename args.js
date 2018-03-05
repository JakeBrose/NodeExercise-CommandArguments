#!/usr/bin/env node

argSum =() => {
    if (process.argv.length < 3) {
        console.log(0);
    } else if (process.argv.length > 2) {
        let sum = 0
        for (let i = 2; i < process.argv.length; i++) {
            sum+= +process.argv[i]  
        }
        console.log(sum);          
    }
}

argSum(process.argv)
