console.log("======= JS EXCUTION CONTEXT =======");

// when ever you run code in js 

// step-1
// 1- Global EC ko this me rkh diya jata h
// 2- function EC

// step-2 
// 1- Memory creation phase
// 1- Execution phase



let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result = addNum(val1, val2)
let result2 = addNum (10, 2)

// First
// phase 1 Global Execution -> this
// phase 2 Memory Phase 
        //  val1 = undefined
        //  val2 = undefined
        //  addNum = defination  (line17)
        // result1 = undefined
        // result2 = undefined


// second
//  phase 2 Exicution Phase
        // val1 = 10
        // val2 = 5
        // addnum -> Exicution context

                    // new variable envirment and execution thread
                    
                    //Memory phase

                    // val1 = undefined
                    // val2 = undefined
                    // total = undefined


                    // exicution phase
                    // num1 = 10
                    // num2 = 5
                    // total = 15 //ye return global exicution context me return hota h
                    
                    // delete
        
        // result1 = 15
        // result2 = undefined

                    //Memory phase

                    // val1 = undefined
                    // val2 = undefined
                    // total = undefined


                    // exicution phase
                    // num1 = 10
                    // num2 = 2
                    // total = 12 //ye return global exicution context me return hota h
                    
                    // delete

        // result2 = 12
        // end
