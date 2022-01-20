//YOUR FIREBASE LINKS
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
    room_name = localStorage .getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name ,
                message:msg ,
                like : 0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         //Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h3>"+ name +" <img class='user_tick' src='tick.png'> </h3>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_button = "<button class='btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : "+ like + "</span></button><hr>";
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
         //End code
      } });  }); }
getData();

function updateLike(message_id) {
      console.log("Clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}