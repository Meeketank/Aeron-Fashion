// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9aillYQARCi9-YKYPjzkepUPwDBAJ6hQ",
  authDomain: "aeronprojecte.firebaseapp.com",
  databaseURL: "https://aeronprojecte-default-rtdb.firebaseio.com",
  projectId: "aeronprojecte",
  storageBucket: "aeronprojecte.appspot.com",
  messagingSenderId: "557559417061",
  appId: "1:557559417061:web:dbff39efe9e55cbbc62c0c",
  measurementId: "G-5LMNCN7W83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to save data to Firebase
// Function to save data to Firebase
function saveData() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var building = document.getElementById("building").value;
  var street = document.getElementById("street").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var payment = document.getElementById("payment").value;

  // Generate a random order ID
  var orderId = generateRandomOrderId();

  // Set database reference
  var database = firebase.database();

  // Save data with the generated order ID as the key
  database.ref('users/' + orderId).set({
    orderId: orderId,
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
    building: building,
    street: street,
    city: city,
    state: state,
    payment: payment
  }, function(error) {
    if (error) {
      // Handle any errors that occur while saving to Firebase
      alert('Error occurred while saving data to Firebase: ' + error.message);
    } else {
      // Display confirmation message
      alert('Saved with Order ID: ' + orderId);
      window.location.href = "confirmation.html?orderid=" + orderId;
    }
  });

  // Prevent default form submission
  return false;
}


// Function to generate a random order ID
function generateRandomOrderId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function returnhome(){
  window.location.href = "/index.html";
}

