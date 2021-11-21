
var firebaseConfig = {
      apiKey: "AIzaSyAhhNC3igp270KFOtDlau5fAbACt3aloTM",
      authDomain: "kwitter-8c549.firebaseapp.com",
      databaseURL: "https://kwitter-8c549-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c549",
      storageBucket: "kwitter-8c549.appspot.com",
      messagingSenderId: "559734218363",
      appId: "1:559734218363:web:ca38a75f4c42497a798cde"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room names" + Room_names)
      row = "<div class='room_name' id=" + Room_names +"onclcick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      
      window.location = "index.html"; 
}