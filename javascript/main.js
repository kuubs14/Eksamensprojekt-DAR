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


setTimeout(function show() {
    document.getElementById("submitSendt").style.display = 'block';
}, 5);


setTimeout(function () {
    document.getElementById('submitSendt').style.display='none';
    }, 3000);



