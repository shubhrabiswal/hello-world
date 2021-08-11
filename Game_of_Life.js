//Conway's Game of Life

function Game_of_Life(live_cell, steps) {
    //Selecting a grid of 5*5
    var area = new Array(5).fill('.').map(() => new Array(5).fill('.')); 
    for (let coord of live_cell) {
        let x = coord[0]
        let y = coord[1]
        area[x][y] = '*'
    }
    let st = 1
    console.log("area", area)
    while (st <= steps) {
        for (let i = 0; i < area.length; i++) {
            for (let j = 0; j < area[i].length; j++) {
                let count = 0
                if (i != area.length - 1 && area[i + 1][j] == '*') {
                    count++
                } 
                if (i != 0 && area[i - 1][j] == '*') {
                    count++
                } 
                if (j != 0 && area[i][j - 1] == '*') {
                    count++
                } 
                if (j != area[i].length - 1 && area[i][j + 1] == '*') {
                    count++
                } 
                if (i != 0 && j != 0 && area[i - 1][j - 1] == '*') {
                    count++
                } 
                if (i != 0 && j < area[i].length - 1 && area[i - 1][j + 1] == '*') {
                    count++
                } 
                if (i < area.length - 1 && j != 0 && area[i + 1][j - 1] == '*') {
                    count++
                } 
                if (i < area.length - 1 && j < area[i].length - 1 && area[i + 1][j + 1] == '*') {
                    count++
                }

                if (count < 2) {
                    area[i][j] = '.'
                }
                if ((count == 2 || count == 3) && area[i][j] == '*') {
                    area[i][j] = '*'
                }else if(count == 3 && area[i][j] == '.'){
                    area[i][j] = '*'
                } 
                else if (count > 3) {
                    area[i][j] = '.'
                }
                
            }
            console.log(area)
        }
        // console.log(area)
        st++
    }
    return area
}
console.log(Game_of_Life([[1,2],[1,1],[2,1],[2,2],[3,2]], 10))
//[2, 3], [2, 4], [1, 3],[3,3]

