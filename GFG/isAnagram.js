// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let a = input_line[0];
        let b = input_line[1];
        let obj = new Solution();
        if(obj.isAnagram(a, b))
            console.log("YES");
        else
            console.log("NO");
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/
 
class Solution 
{
    //Function is to check whether two strings are anagram of each other or not.
    isAnagram(a, b)
    {
        // code here
        let n1,n2;
        if(a.length == b.length){
             if(a.length ==1 &&  b.length ==1){
                n1=a;
                n2=b;
            }
            else{
                n1 = a.split('').sort();
                n2 = b.split('').sort();
            }
        }else {
            return false
        }
       
        // console.log(n1,n2)
        // console.log(n1==n2)
        for(let i=0;i<n1.length;i++){
            if(n1[i] != n2[i]){
                // console.log("NO")
                return false
            }
            
        }
        // console.log("YES")
        return true
        
    }
}
