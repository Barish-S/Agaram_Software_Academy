// let userDetails=[
//     {
//     email:"barish@gmail.com",
//     password:"123456",
//     name:"Barish"
// },
// {
//     email:"saheen@gmail.com",
//     password:"987654",
//     name:"Saheen"
// },
// {
//     email:"ashif@gmail.com",
//     password:"987654",
//     name:"Ashif"
// }
// ]

// localStorage.setItem("user",JSON.stringify(userDetails))
// function loger(){
//     alert("Success")
// }
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
function update(){
    
}