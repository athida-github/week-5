
/**
 * Name: Aye Thida
 * Student Id: M24W7510
 */
//Practice at least 3 event listeners
//Build a button that adds some content into page
//`console.log()` for testing


// this function callJS provide the calculation from values that input by user
function callJS(){
    let fnum = parseInt(document.getElementById("fnum").value);
    let snum = parseInt(document.getElementById("snum").value);
    let result = 0;
    let operator = document.getElementById("operator").value;
    console.log("First Number: "+fnum); // check purpose
    console.log("Second Number: "+snum);// check purpose
    console.log("Operator: "+operator); // check purpose

   if(!isNaN(fnum) && !isNaN(snum)){ // null value input check
    if(operator=="plus" ){
        result = fnum + snum;
        alert("Result : "+result);        
    }
    else if(operator=="subs" ){
        result = fnum - snum;
        alert("Result : "+result);   
    }
    else if(operator=="divide"){
        if(snum == 0){ // Zero divided check
            alert("Divided by Zero!!")
        }
        else{
            result = fnum / snum;
        alert("Result : "+result);
        } 
    }
   }
    else{
        alert("Invalid Value input") // if null value or not a number respond this message
    }

    console.log("Result: "+result)// check purpose

}