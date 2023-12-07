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

  firebase.database().ref("/").child("roomName").update
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
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>"; /* Explicação: O row(fileira) é uma variável que define a área de texto dentro da coluna do console, pois para cada navegador pode ser diferente, então o row padroniza. */
     

      document.getElementById("output").innerHTML += row; /* Chamar o id output */
      /* Importante: Se apenas escrevermos "=" apenas o nome da sala será exibido. No entanto, quando temos muitos nomes
        de salas, e queremos exibir todos dentro de um único elemento HTML, utilizamos "+="" e em seguida escrevemos a variável row para enfileirar. */
    });
  });

}

getData();

function redirectToRoomName(name) /* Adicionar a função redirectToRoomName  */
{
  console.log(name); 
  localStorage.setItem("roomName", name); /* Adicione o roomName (nome da sala) ao localStorage. */
    window.location = "kwitterPage.html"; /* redirecionar para a tela kwitterPage.html */
}

function logout()
{
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
