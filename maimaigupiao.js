/**
 * @param {number[]} prices
 * @return {number}
 */
//买卖股票的最佳时机
var maxProfit = function(prices) {
 
    if(prices.length < 2)return 0//两个就算球吧
    let res = 0//防止最终结果
    let minPrice = prices[0] 
    for(let i=0; i<prices.length; i++){
        minPrice = Math.min(prices[i],minPrice)//当前值和最低值取最小，再给最低值
        res = Math.max(res,prices[i]-minPrice )
    }
    return res
};