//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBTYSMEsr_1eACzdjnPQTHzo7OaGH2WRd0",
  authDomain: "kwitter-75390.firebaseapp.com",
  databaseURL: "https://kwitter-75390-default-rtdb.firebaseio.com/",
  projectId: "kwitter-75390",
  storageBucket: "kwitter-75390.appspot.com",
  messagingSenderId: "166853704023",
  appId: "1:166853704023:web:b1d1a826e13d5619f6e612"
};

/* Adicione a inicialização do firebase */
firebase.initializeApp(firebaseConfig);


/* Adicionar a função addUser() */
function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}
