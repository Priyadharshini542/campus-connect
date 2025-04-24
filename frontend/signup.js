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

// Sign up logic
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});