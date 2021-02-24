
function myFunction(event) {

    let x = event.which || event.keyCode;
    document.getElementById("eventWhich").innerHTML = "event.which is: " + x;

    var y = String.fromCharCode(x);
    document.getElementById("eventKey").innerHTML = "event.key is: " + y;

    var z = event.code;
    document.getElementById("eventCode").innerHTML = "event.code is: " + z;
  } 