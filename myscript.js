function validateForm() {
    // Get the value of the input fields
    let l =  parseInt(document.getElementById("length").value);
    let h = parseInt(document.getElementById("height").value);
    let lb =  parseInt(document.getElementById("long").value);
    let sb =  parseInt(document.getElementById("short").value);
    let m =  parseInt(document.getElementById("mass").value);
  
    let text;
  
    // Calculate the value
    text = m / (0.5 * (sb + lb) * h * l);
  
    // Display the result
    document.getElementById("demo").innerHTML = text;
  }
  
  // Add event listener to the "mass" input field
  var input = document.getElementById("mass");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });
  
  // Add event listener to the "length" input field
  var length = document.getElementById("length");
  length.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("height").focus();
    }
  });

    // Add event listener to the "length" input field
  var length = document.getElementById("height");
  length.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("long").focus();
    }
  });

    // Add event listener to the "length" input field
  var length = document.getElementById("long");
  length.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("short").focus();
    }
  });
      // Add event listener to the "length" input field
      var length = document.getElementById("short");
      length.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("mass").focus();
        }
      });