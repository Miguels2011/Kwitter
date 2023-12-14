const firebaseConfig = {
  apiKey: "AIzaSyBTYSMEsr_1eACzdjnPQTHzo7OaGH2WRd0",
  authDomain: "kwitter-75390.firebaseapp.com",
  databaseURL: "https://kwitter-75390-default-rtdb.firebaseio.com/",
  projectId: "kwitter-75390",
  storageBucket: "kwitter-75390.appspot.com",
  messagingSenderId: "166853704023",
  appId: "1:166853704023:web:b1d1a826e13d5619f6e612"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value; 

  firebase.database().ref("/").child(roomName).update
  ({ 
    purpose : "adicionar o nome de sala "
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
       { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
          { childKey  = childSnapshot.key;
                roomNames = childKey; 

       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+ roomNames +" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
     

      document.getElementById("output").innerHTML += row; 
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name); 
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout()
{
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
