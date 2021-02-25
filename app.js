
function myFunction(event) {

    let x = event.which || event.keyCode;
    document.getElementById("eventWhich").innerHTML = x;

    var y = String.fromCharCode(x);
    document.getElementById("eventKey").innerHTML = y;

    var z = event.code;
    document.getElementById("eventCode").innerHTML = z;
  } 