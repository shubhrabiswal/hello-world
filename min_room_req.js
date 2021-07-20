// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required. For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.


// [[30, 75], [0, 50], [60, 150]]

function rooms(time_table){  //////needs rechecking
	let timing = time_table.sort()
	console.log(timing)
	count = 0
	for(let i=0;i<timing.length;i++){
		for(j=i;j<timing.length;j++){
			if(i!=j){
				if(timing[i][1]>=timing[j][0]){
					count++
				}
			}
		}
	}
	if(count == 0){
		return 1
	}else{
		return count
	}
	
}

console.log(rooms([[50, 75], [50, 75], [75, 80]]))
