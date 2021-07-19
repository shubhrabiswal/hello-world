function isAnagram(a, b)
    {
        // code here
        if(a.length == b.length){
            if(a.length ==1){
                console.log(a,b)
                console.log(a.charCodeAt(),b.charCodeAt())
                // if(parseInt(a.charCodeAt()) == parseInt(b.charCodeAt())){
                   
                if(a==b){
                    return "YES"
                }else{
                    return "NO"
                }
            }else{
                let n1 = a.split('').sort();
                let n2 = b.split('').sort();
                if(n1==n2){
                    return "YES"
                }else{
                    return "NO"
                }
            }
        }
        
        
    }

console.log(isAnagram("b","d"))
