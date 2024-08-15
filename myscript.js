function validateForm() {
    // Get the value of the input fields
    let l =  parseFloat(document.getElementById("length").value);
    let h = parseFloat(document.getElementById("height").value);
    let lb =  parseFloat(document.getElementById("long").value);
    let sb =  parseFloat(document.getElementById("short").value);
    let m =  parseFloat(document.getElementById("mass").value);
  
    let text;
  
    // Calculate the value
    text = Math.round((m / (0.5 * (sb + lb) * h * l))*100)/100 + " grams per cubic centimeter";
  
    // Display the result
    document.getElementById("demo").innerHTML = text;
  }
  
  function calc_sound() {
    // Get the value of the input fields
    let l =  parseFloat(document.getElementById("length").value);
    let freq = parseFloat(document.getElementById("extra").value);
  
    let sound;
  
    // Calculate the value
    sound = Math.round((l*2*freq)) + " m/s is the speed of sound";
  
    // Display the result
    document.getElementById("demo").innerHTML = sound;
  }

  // Add event listener to the "mass" input field
  var input = document.getElementById("extra");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("extraBtn").click();
    }
  });

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