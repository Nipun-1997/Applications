document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
  var db = window.openDatabase("RegistrationDB", "1.0", "Registration", 200000);
  
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var age = document.getElementById("age").value;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("password").value;
  db.transaction(populateDB, errorCB, successCB);
}
// Populate the database
//
function populateDB(tx) {
  tx.executeSql('DROP TABLE IF EXISTS Registration');
  tx.executeSql('CREATE TABLE IF NOT EXISTS Registration (first,last,user, password unique,age)');
  tx.executeSql("INSERT INTO Registration (first,last,user,password,age) VALUES ('" + first + "','" + last + "' , " + + ", '" + user+ "','" + pass + "' )");
}


function errorCB(tx, err) {
  alert("Error processing SQL: "+err);
}

// Transaction success callback
//
function successCB() {
  alert("success!");
}

