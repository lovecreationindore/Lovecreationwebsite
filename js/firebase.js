<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<script>
  // Your Firebase configuration
  <!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<script>
  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "PASTE_HERE",
    authDomain: "PASTE_HERE",
    projectId: "PASTE_HERE",
    storageBucket: "PASTE_HERE",
    messagingSenderId: "PASTE_HERE",
    appId: "PASTE_HERE"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Firebase services
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
</script>


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Firebase services
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
</script>
