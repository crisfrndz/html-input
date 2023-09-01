function display() {
  var fname = document.getElementById("fname").value;
  var mname = document.getElementById("mname").value;
  var lname = document.getElementById("lname").value;
  var bday = document.getElementById("bday").value;
  var address = document.getElementById("address").value;
  alert(
    "Name: " +
      fname +
      " " +
      mname +
      " " +
      lname +
      "\nBirthday: " +
      bday +
      "\nAddress: " +
      address
  );
}

function clearFields() {
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("bday").value = "";
  document.getElementById("address").value = "";
}
