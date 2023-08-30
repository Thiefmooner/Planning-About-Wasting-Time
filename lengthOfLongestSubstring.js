//无重复字符的最长子串

let s = 'sssssssssssssss'
function lengthOfLongestSubstring ( s ){
    let arr = []
    let max = 0
    for(let i=0; i<s.length; i++){
        let index = arr.indexOf(s.charAt(i))
        if(index != -1){
            arr.splice(0,index+1)
        }
        arr.push(s.charAt(i))
        max = Math.max(max,arr.length)
    }
    console.log(max)
 }
 lengthOfLongestSubstring(s)