// Given an unordered list of flights taken by someone, each represented as
//(origin,destination) pairs, and a starting airport, compute the person's itinery
// If no such itinery exists return null.
//If there are multiple possible itineries, return the lexicographically samllest one.
//All flights must be used in the itinery

function get_itinery(flight_list,start){
    let start_source = [];
    let result = [];
    
    for(let i=0;i<flight_list.length;i++){
        if(flight_list[i][0] == start){
            start_source.push(flight_list[i])
        }
    }
    
    if(start_source.length>1){
        start_source.sort((a, b) => a[1].localeCompare(b[1]))
    }
    // console.log(start_source)
    result.push(start_source[0][0])
    result.push(start_source[0][1])
    let temp = start_source[0][1];
    let side = []
    side.push(start_source[0])
    // console.log(side,"side")
    let total = 0 
    for(let i=0;i<flight_list.length;i++){
        for(let j=0;j<flight_list.length;j++){
            let count = 0
            if(flight_list[j][0] == temp){
                for(let flight of side){
                    if(flight[0] == flight_list[j][0] && flight[1] == flight_list[j][1] ){
                       count++
                    //    console.log(flight_list[j],"if.....")
                    }
                }
                if(count == 0){
                    side.push(flight_list[j])
                    result.push(flight_list[j][1])
                    temp  = flight_list[j][1]
                    total++
                    // console.log(flight_list[j],"2nd if.....")
                }
            }
           
        }
    }
    
    if(total > 0){//} && side.length == flight_list.length){
        return result
    }else{
        return null
    }
    
}
console.log(get_itinery([['A','B'],['A','C'],['B','C'],['C','A']],'A'))
console.log(get_itinery([['SFO','HKO'],['YYZ','SFO'],['YUL','YYZ'],['HKO','ORD']],'YUL'))
console.log(get_itinery([['SFO','COM'],['COM','YYZ']],'COM'))
