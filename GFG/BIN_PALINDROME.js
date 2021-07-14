// Given a non-negative integer N. Check whether the Binary Representation of the number is Palindrome or not. 
// Note: No leading 0’s are being considered.


class Solution{
    binaryPalin(n){
        //code here
        let bin = (n>>>0).toString(2) ////typeof string
        let rev=''
        for(let i=bin.length-1;i>=0;i--){
            rev += bin[i]
        }
        
        if(bin==rev){
            return 1;
        }else{
            return 0;
        }

    }
}
