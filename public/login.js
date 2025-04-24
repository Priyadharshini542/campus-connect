// Your Firebase config (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyBOwR4Sa2ycvqRuB0MoEmKXpYe_DAb466U",
    authDomain: "campusconnect-a20a9.firebaseapp.com",
    projectId: "campusconnect-a20a9",
    storageBucket: "campusconnect-a20a9.firebasestorage.app",
    messagingSenderId: "1021370512234",
    appId: "1:1021370512234:web:4a91bd65e480770cc9eb13"
  };
  firebase.initializeApp(firebaseConfig);
  // Login Logic
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Replace with your home page
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
  