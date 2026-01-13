<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<script>
  // Your Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyDh7U6z4P_leos-l4MC-tHuftlItwSHAHQ",
  authDomain: "lovecreationwebsite.firebaseapp.com",
  projectId: "lovecreationwebsite",
  storageBucket: "lovecreationwebsite.firebasestorage.app",
  messagingSenderId: "973080872272",
  appId: "1:973080872272:web:587db074ab95e328e05855"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Firebase services
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
</script>
