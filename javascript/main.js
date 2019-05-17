//Alert til kontakt submit

function beskedSendt() {
    alert("Din besked er sendt.");
}


let submitStatus = true;

let visSubmit = function() {
    
    if (submitStatus === true){
        getsubmitSendt.style.visibility = "visible";
    }
}








function show() {
    document.getElementById("submitSendt").style.display = 'block';
}