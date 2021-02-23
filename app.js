
function myFunction(event) {

    let x = event.which || event.keyCode;
    document.getElementById("eventWhich").innerHTML = "event.which is: " + x;

    let y = document.getElementById("input");
    document.getElementById("eventCode").innerHTML = "event.code is: " + y;
  }