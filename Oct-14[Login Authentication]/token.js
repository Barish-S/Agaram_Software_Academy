function register(){
    let r_name=$("#r_user").val()
    let r_email=$("#r_mail").val()
    let r_password=$("#r_password").val()
    let r_adhaar=$("#r_adhaar").val()
    let r_address=$("#r_address").val()
    let m_number=$("#r_mobile").val()
    let r_city=$("#r_city").val()
    let r_area=$("#r_area").val()
    let r_code=$("#r_pin").val()
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            request: "create_candidate",
            name:r_name,
            email:r_email,
            password:r_password,
            aadhar:r_adhaar,
            address:r_address,
            phone:m_number,
            city:r_city,
            area:r_area,
            pin:r_code
        },
        success:function(res){
            console.log("Success",res)
            alert("Registered Successfully")
            window.location="login.html"
        },
        error:function(res){
            console.log("Error",res)
        }
    })
}

function loginData(){
    let l_mail=$("#email").val()
    let l_pass=$("#password").val()
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request: "candidate_login",
            email:l_mail,
            password:l_pass
            
        },
        success:function(data){
            let parseData=JSON.parse(data)
            console.log(parseData)
            // console.log(parseData.data.id)
            // for (var i=0;i<data.length;i++){
            //     let dict=data[i].data
            // console.log("Success",dict.name)
            window.location="home.html"
            // }

        },
        error:function(data){
            console.log("Error",data)
            // alert(`"Enter correct Detail or"<a href="register.html">Register First</a>`)
        }
    })
}


function allData(){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"getAllMembers"
        },
        success:function(data){
            let parseData=JSON.parse(data)
            let allData=parseData.data
            console.log(allData)
            let tableData=""
            for(var i=0;i<allData.length;i++){
                tableData+=`<tr>
                <td>${allData[i].id}</td>
                <td>${allData[i].name}</td>
                <td>${allData[i].email}</td>
                <td>${allData[i].aadhar}</td>
                <td>${allData[i].address}</td>
                <td>${allData[i].phone}</td>
                <td>${allData[i].city}</td>
                <td>${allData[i].area}</td>
                <td>${allData[i].pin}</td>
                </tr>`
            }
            $("#list_table").html(tableData)
        },
        error:function(data){
            let id=JSON.parse(data)
            console.log(id)
        }
    })
}