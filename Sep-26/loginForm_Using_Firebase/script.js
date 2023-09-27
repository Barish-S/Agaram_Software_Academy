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
                        alert("login successfully")
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

function edit(e){
    for(var i=0;i<baseData.length;i++){
        if(baseData[i].email==e){
            let e_use=prompt("New Username",`${baseData[i].name}`)
            let e_usen=prompt("New Mail",`${baseData[i].email}`)
            if(e_use!=baseData[i].name){
                document.getElementById(`upname+'${i}'`).innerHTML=e_use
            }
            if(e_usen!=baseData[i].email){
                document.getElementById(`upname+'${i}'`).innerHTML=e_usen
            }
                baseData[i]=({
                    email:e_usen,
                    name:e_use,
                    password:baseData[i].password
                })
            }
    }
    db.ref("userDetails").set(baseData);
    loging()
}

function del(a){
    let newData=[]
    for(var i=0;i<baseData.length;i++ ){
      if(baseData[i].email!=a){
          newData.push(baseData[i])
      }
    }
    db.ref("userDetails").set(newData);
    getItem()
  }


function logout() {
    localStorage.removeItem("loggedIn")
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


