var searchInsert = function(nums, target) {

    if (target == 0){
        return 0;
    }
    if(target>nums[nums.length-1]){
        return nums.length
    }
    
    if(nums.includes(target)){
        return nums.indexOf(target)
       
    }
    else{
        for(let i = 0;i<nums.length;i++){
            if(target < nums[i]){
                return i
            }
        }
    }
    
};
