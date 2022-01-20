var firebaseConfig = {
      apiKey: "AIzaSyCICgxf8gJ4e371ElkpME4oDRAkFugQiyc",
      authDomain: "kwitter-ea556.firebaseapp.com",
      databaseURL: "https://kwitter-ea556-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea556",
      storageBucket: "kwitter-ea556.appspot.com",
      messagingSenderId: "1086554108060",
      appId: "1:1086554108060:web:8caae9148e819fa54b7d59"
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name;

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code......
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room name" , name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}