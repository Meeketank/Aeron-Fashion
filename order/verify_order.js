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

// Function to verify order ID
function verifyOrderId() {
  var orderId = document.getElementById("order-id").value;

  if (orderId.trim() === "") {
    alert("Please enter an order ID.");
    return;
  }

  var database = firebase.database();
  var orderRef = database.ref("users/" + orderId);

  orderRef.once("value", function(snapshot) {
    if (snapshot.exists()) {
      alert("Order ID found.");
    } else {
      alert("Invalid order ID.");
    }
  }, function(error) {
    alert("Error verifying order ID: " + error.message);
  });
}
