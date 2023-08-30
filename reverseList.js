//反转链表

function reverseList ( head ){
    let pre = null
    let curr = head 
    let tmp = null
    while(curr !== null){
        tmp = curr.next 
        curr.next = pre
        pre = curr
        curr = tmp
    }
    return pre
} 