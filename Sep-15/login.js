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
            document.getElementById("login").style.display="none"
            document.getElementById("top").style.display="block"
            document.getElementById("intro").innerHTML=`Welcome ${n}!`
        // alert("Success")
        }
    }
}
function logout(){
    localStorage.removeItem("loggedIn")
    document.getElementById("login").style.display="block"
    document.getElementById("top").style.display="none"
}
function loging(){
        if(localStorage.getItem("loggedIn")){
        u=localStorage.getItem("LoggedUsername")
        document.getElementById("intro").innerHTML=`Welcome ${u}!`
        document.getElementById("login").style.display="none"
        document.getElementById("top").style.display="block"
    }
    option()
}

function reg(){
    document.getElementById("regis").style.display="block"
    document.getElementById("login").style.display="none"
    
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
document.getElementById("regis").style.display="none"
document.getElementById("login").style.display="block"

}
function lpage(){
    document.getElementById("regis").style.display="none"
    document.getElementById("login").style.display="block"
}
function option(){
    let nlist=JSON.parse(localStorage.getItem("user"))
    let hname=""
    for(var i=0;i<nlist.length;i++){
        name_l=nlist[i].name
        mail_l=nlist[i].email
        hname=hname+`<tr>
                        <td>${name_l}</td>
                        <td>${mail_l}</td>
                        <td><button id="edit" onclick="edit('${mail_l}')">Edit</button></td>
                        <td><button id="del" onclick="del('${mail_l}')">Delete</button></td>
                    </tr>`
        document.getElementById("table").style.display="block"
}
document.getElementById("list_table").innerHTML=hname;
}

function edit(a){
    document.getElementById("top").style.display="none"
    document.getElementById("editing").style.display="block"
    
}

function update(){
    let e_user=JSON.parse(localStorage.getItem("user"))
    var e_use=document.getElementById("e_usern").value
    var e_usen=document.getElementById("ei_mail").value
    var e_pass=document.getElementById("e_password").value
    for(var i=0;i<e_user.length;i++){
        if(e_user[i].email==a){
            e_user[i].name=e_use
            e_user[i].email=e_usen
            e_user[i].password=e_pass
        }
    }
    localStorage.setItem("user",JSON.stringify(e_user))
}

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

