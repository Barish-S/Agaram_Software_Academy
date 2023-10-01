const firebaseConfig = {
  apiKey: "AIzaSyDBpNl4oFuY6w4u32TOvTIPhYeQYV4EZ04",
  authDomain: "loginform-9d184.firebaseapp.com",
  databaseURL: "https://loginform-9d184-default-rtdb.firebaseio.com/",
  projectId: "loginform-9d184",
  storageBucket: "loginform-9d184.appspot.com",
  messagingSenderId: "914275184676",
  appId: "1:914275184676:web:58701ac41614b2ca43e8b1"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database()
var dataRef = db.ref("userDetails");
console.log(db)
// ---------------Authentication_Code--------------------

var auth = firebase.auth()
console.log(auth)
const registerForm = () => {
  var name = document.getElementById("r_user").value;
  var email = document.getElementById("r_mail").value;
  var password = document.getElementById("r_password").value;
  auth.createUserWithEmailAndPassword(email, password).then((result) => {
    console.log(result)
    register()
  })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      alert(error.message)
    })
}


const loginForm = () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      login()
      console.log(result)
    })
    .catch((error) => {
      alert("Please Register First")
      window.location = "register.html"
      console.log(error.code);
      console.log(error.message);

    });
}


const dele = () => {
  const user = firebase.auth().currentUser;
  user.delete().then(() => {
    // User deleted.
    alert("Account Deleted Successfully")
    logout()
    del()
  }).catch((error) => {
  });
}

function authUpdate() {
  window.location = "authUp.html"

}

function updateUserData() {
  var userNow = firebase.auth().currentUser;
  var u_name = document.getElementById("a_name").value
  var u_email = document.getElementById("a_mail").value
  var u_password = document.getElementById("a_password").value
  userNow.updateProfile({
    name: u_name,
    email: u_email,
    password: u_password,
  }).then(function () {
    var name = userNow.name;
    var email = userNow.email;
    var password = userNow.password;
  }, function (error) {
    console.log(error)
  });
}

// ---------------Authentication_Code--------------------


function register() {
  let reg_name = document.getElementById("r_user").value
  let reg_email = document.getElementById("r_mail").value
  let reg_password = document.getElementById("r_password").value

  let reg_data = {
    name: reg_name,
    email: reg_email,
    password: reg_password,
  }

  dataRef.once('value')
    .then(function (snapshot) {
      let data = snapshot.val();
      console.log(data);
      if (data) {
        data.push(reg_data);
        db.ref("userDetails").set(data);
      }
      else {
        db.ref(`userDetails/${0}`).set(reg_data);
      }
    })
  regis()
}


function login() {
  let user_detail = document.getElementById("email").value
  let password = document.getElementById("password").value
  dataRef.once('value')
    .then(function (snapshot) {
      let data = snapshot.val();
      console.log(data);
      if (data) {
        let isUserAlive = false;
        for (i = 0; i < data.length; i++) {
          if ((data[i].email == user_detail) && (data[i].password == password)) {
            alert("Logged Successfully")
            isUserAlive = true
            localStorage.setItem("loggedin", true)
            localStorage.setItem("logname", data[i].name)
            window.location = "home.html";
            document.getElementById("intro").innerHTML = `Welcome ${data[i].name}!`
          }
        }
        !isUserAlive && alert("Incorrect Details Please Register");
      }
    })
}


function loging() {
  if (localStorage.getItem("loggedin")) {
    u = localStorage.getItem("logname")
    document.getElementById("intro").innerHTML = `Welcome ${u}!`
  }
  getItem()
}


let baseData = []

function getItem() {
  dataRef.once('value')
    .then(function (response) {
      baseData = response.val();
      display()
    }
    )
}


function display() {
  let hname = ""
  for (var i = 0; i < baseData.length; i++) {
    name_l = baseData[i].name
    mail_l = baseData[i].email
    hname = hname + `<tr>
      <td id="upname+'${i}'">${name_l}</td>
      <td id="upmail+'${i}'">${mail_l}</td>
      <td><button id="edit" onclick="edit('${mail_l}')">Edit</button></td>
      <td><button id="del" onclick="del('${mail_l}')">Delete</button></td>
  </tr>`
  }
  document.getElementById("list_table").innerHTML = hname;
}

function edit(e) {
  for (var i = 0; i < baseData.length; i++) {
    if (baseData[i].email == e) {
      let e_use = prompt("New Username", `${baseData[i].name}`)
      let e_usen = prompt("New Mail", `${baseData[i].email}`)
      if (e_use != baseData[i].name) {
        document.getElementById(`upname+'${i}'`).innerHTML = e_use
      }
      if (e_usen != baseData[i].email) {
        document.getElementById(`upname+'${i}'`).innerHTML = e_usen
      }
      baseData[i] = ({
        email: e_usen,
        name: e_use,
        password: baseData[i].password
      })
    }
  }
  db.ref("userDetails").set(baseData);
  loging()
}

function del(a) {
  let newData = []
  for (var i = 0; i < baseData.length; i++) {
    if (baseData[i].email != a) {
      newData.push(baseData[i])
    }
  }
  db.ref("userDetails").set(newData);
  getItem()
}


function logout() {
  localStorage.removeItem("loggedin")
  localStorage.removeItem("logname")
  window.location = "login.html"
}

function reg() {
  window.location = "register.html"

}
function regis() {
  alert("Registered Successfully")
  window.location = "login.html"
}

function lpage() {
  window.location = "login.html"
}

function redirect() {
  if (!localStorage.getItem("loggedin")) {
    window.location.href = "login.html"
  }
}


