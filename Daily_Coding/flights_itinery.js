function get_itinery(flight_list,start){
    let itinery = []
    let source = []
    for(let flight of flight_list){
        if(flight[0] == start && source.includes(flight[0])==false){
            // if(itinery.includes(flight[0]))
            itinery.push(flight[0])
            itinery.push(flight[1])
        }
        source.push(flight[0])
    }

    let temp = itinery[1];
    let count = 0;
    console.log(itinery)
    
    for(let flight of flight_list){
        if(flight[0] == temp){
            // itinery.push(flight[0])
            console.log("in",flight)
            itinery.push(flight[1])
            temp = flight[1]
            count++
        }
        console.log(flight)
    }

    if(count == 0){
        return null
    }else{
        return itinery
    }
}

console.log(get_itinery([['A','B'],['A','C'],['B','C'],['C','A']],'A'))
//A B C A C
//NOT A C A B C