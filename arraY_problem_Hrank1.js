'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let arr2=[];
    for (let i=0; i<4 ; i++) {
        for(let j=0; j<4; j++){
            let tem=[];
            for(let k=0;k<3;k++){
                for(let l=0;l<3;l++){
                    // if(k==i+1 && (l==j || l==j+2)){
                    //     let x=arr[k][l]
                    // }else {
                    //     tem.push(arr[k][l])
                    // }
                     tem.push(arr[i+k][j+l])
                    
                }
            }
            arr2.push(tem)
        }
    }
    let output=[];
    let sum=[];
    for(let i=0; i<arr2.length; i++){
        
        let tem=[];
        let s=0;
        for(let j=0; j<arr2[i].length;j++) {
            
            if(j!=3 && j!=5) {
                
                tem.push(arr2[i][j])
                s=s+arr2[i][j]
            }
        }
       
        output.push(tem)
        sum.push(s)
    }
let sum1=sum.slice();
let value=sum.sort(function(a, b){return b-a})[0]

 
 return output[sum1.indexOf(value)]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let arr2=[];
    for (let i=0; i<4 ; i++) {
        for(let j=0; j<4; j++){
            let tem=[];
            for(let k=0;k<3;k++){
                for(let l=0;l<3;l++){
                    // if(k==i+1 && (l==j || l==j+2)){
                    //     let x=arr[k][l]
                    // }else {
                    //     tem.push(arr[k][l])
                    // }
                     tem.push(arr[i+k][j+l])
                    
                }
            }
            arr2.push(tem)
        }
    }
    let output=[];
    let sum=[];
    for(let i=0; i<arr2.length; i++){
        
        let tem=[];
        let s=0;
        for(let j=0; j<arr2[i].length;j++) {
            
            if(j!=3 && j!=5) {
                
                tem.push(arr2[i][j])
                s=s+arr2[i][j]
            }
        }
       
        output.push(tem)
        sum.push(s)
    }
let sum1=sum.slice();
let value=sum.sort(function(a, b){return b-a})[0]

 
 return output[sum1.indexOf(value)]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
