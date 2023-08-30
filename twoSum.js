function twoSum ( nums,target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target)
            console.log([i,j])
        }
    }
}
twoSum([1,5,6,3,69,3,5,2,5,1,5,2,5,3,5,2,5,2,5],4)