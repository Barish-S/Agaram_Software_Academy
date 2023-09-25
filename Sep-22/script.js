function loginCheck(){
    let login_email=document.getElementById("email").value;
    let login_password=document.getElementById("password").value;
    var details=JSON.parse(localStorage.getItem("user"))
    for (var i=0;i<details.length;i++){
        var e=details[i].email
        var p=details[i].password
        var n=details[i].name
        // console.log(details[i].email,details[i].password,details[i].name)
        if (e==login_email&&p==login_password){
            localStorage.setItem("loggedIn",true)
            localStorage.setItem("LoggedUsername",n)
            window.location="home.html";
            document.getElementById("intro").innerHTML=`Welcome ${n}!`
        // alert("Success")
        }
        else{
            alert("Incorrect E-Mail or Password")
        }
    }
}

function loging(){
        if(localStorage.getItem("loggedIn")){
        u=localStorage.getItem("LoggedUsername")
        document.getElementById("intro").innerHTML=`Welcome ${u}!`
        // window.location="home.html"
    }
    option()
}

function logout(){
    localStorage.removeItem("loggedIn")
    window.location="login.html"
}

function reg(){
    window.location="register.html"
    
}
function register(){
    let rname=document.getElementById("r_user").value;
    let rmail=document.getElementById("r_mail").value;
    let rpass=document.getElementById("r_password").value;
    if(localStorage.getItem("user")){
        parseData=JSON.parse(localStorage.getItem("user"))
    }else
    {
        parseData=[]
    }
    parseData.push(
                    {email:rmail,
                    password:rpass,
                    name:rname}
                    )
    localStorage.setItem("user",JSON.stringify(parseData))
    alert("Registered Successfully")
    window.location="login.html"
}

function lpage(){
    window.location="login.html"
}

function option(){
    let nlist=JSON.parse(localStorage.getItem("user"))
    let hname=""
    for(var i=0;i<nlist.length;i++){
        name_l=nlist[i].name
        mail_l=nlist[i].email
        hname=hname+`<tr>
                        <td id="upname+'${i}'">${name_l}</td>
                        <td id="upmail+'${i}'">${mail_l}</td>
                        <td><button id="edit" onclick="edit('${mail_l}')">Edit</button></td>
                        <td><button id="del" onclick="del('${mail_l}')">Delete</button></td>
                    </tr>`
}
document.getElementById("list_table").innerHTML=hname;
}

function edit(e){
    let e_detail=JSON.parse(localStorage.getItem("user"))
    for(var i=0;i<e_detail.length;i++){
        if(e_detail[i].email==e){
            let e_use=prompt("New Username",`${e_detail[i].name}`)
            let e_usen=prompt("New Mail",`${e_detail[i].email}`)
            if(e_use!=e_detail[i].name){
                document.getElementById(`upname+'${i}'`).innerHTML=e_use
            }
            if(e_usen!=e_detail[i].email){
                document.getElementById(`upname+'${i}'`).innerHTML=e_usen
            }
                e_detail[i]=({
                    email:e_usen,
                    name:e_use,
                    password:e_detail[i].password
                })
            }
    }
    localStorage.setItem("user",JSON.stringify(e_detail))
    loging()
}

// function update(){
//     get=window.mail_l
//     let e_user=JSON.parse(localStorage.getItem("user"))
//     var e_use=document.getElementById("e_usern").value
//     var e_usen=document.getElementById("ei_mail").value
//     // var e_pass=document.getElementById("e_password").value
//     for(var i=0;i<e_user.length;i++){
//         if(e_user==get){
//             if(e_use!=e_user[i].name){
//                 document.getElementById(`upname+'${i}'`).innerHTML=e_use
//             }
//             if(e_usen!=e_user[i].email){
//                 document.getElementById(`upname+'${i}'`).innerHTML=e_usen
//             }
//                 // e_user[i].name=e_use
//                 // e_user[i].email=e_usen
//                 // e_user[i].password=e_pass
//                 e_user[i]=({
//                     email:e_usen,
//                     name:e_use,
//                     password:e_user[i].password
//                 })
//             }
        
//     }
//     localStorage.setItem("user",JSON.stringify(e_user))
//     alert("Details Updated Successfully")
//     document.getElementById("top").style.display="block"
//     document.getElementById("editing").style.display="none"
//     loging()
// }

function del(a){
  let datas=JSON.parse(localStorage.getItem("user"))
  let newData=[]
  for(var i=0;i<datas.length;i++ ){
    if(datas[i].email!=a){
        newData.push(datas[i])
    }
  }
  localStorage.setItem("user",JSON.stringify(newData))
  option()
}

function redirect(){
    if(!localStorage.getItem("loggedIn")){
        window.location.href="login.html"
    }
}


