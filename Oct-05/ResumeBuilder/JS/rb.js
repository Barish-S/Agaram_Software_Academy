

let resumeDetails = {};
let each_tmp = {}

function run(a, detail) {
    if (detail) {
        if (resumeDetails[detail]) {
            resumeDetails[detail] = { ...resumeDetails[detail] }
        }
        else {
            resumeDetails[detail] = {}
        }
        resumeDetails[detail][a.name] = a.value
    }
    else {
        resumeDetails[a.name] = a.value
    }

    dispaly()
}

function addMulData(p_key, e_id) {
    if (!resumeDetails[p_key]) {
        resumeDetails[p_key] = []
    }
    if (e_id) {
        let elid = document.getElementById(e_id).value;
        if (elid == "") {
            alert("Please Enter Details")
        }
        else {
            resumeDetails[p_key].push(elid);
            document.getElementById(e_id).value = "";
            displayData(resumeDetails[p_key], p_key)

        }
    }
    else {
        resumeDetails[p_key].push(each_tmp);
        displayData(resumeDetails[p_key], p_key)
        let keyss = Object.keys(each_tmp)
        for (var i = 0; i < keyss.length; i++) {
            let each = keyss[i]
            document.getElementById(each).value = ""
        }
        each_tmp={}
    }
    dispaly()
}

function displayData(data, p_key) {
    var list = ""
    for (var i = 0; i < data.length; i++) {
        var s_list = JSON.stringify(data[i])
        list += `<div id="${p_key[i]}"><span class="btn btn-primary">
    ${s_list} 
    <span type="button" onclick="del('${i}','${p_key}')">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg>
    </span>
    </span></div>`
    }
    document.getElementById(p_key).innerHTML = list
}

function del(indx, p_key) {
    resumeDetails[p_key].splice(indx, 1)
    let vanish = document.getElementById(`${p_key[indx]}`)
    vanish.remove()
    dispaly()
}

function eduArray(elmt) {
    each_tmp[elmt.name] = elmt.value;
}

function dispaly() {
    document.getElementById("display").innerHTML = JSON.stringify(resumeDetails, undefined, 2)
}

function apiPostData(){
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"create_resume",
            user:"barish",
            resume:{resumeDetails}
        },
        success:function(details){
            console.log(details)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function apiGetData(){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"get_user_resume",
            user:"barish",
        },
        success:function(details){
            let detai=JSON.parse(details)
            $("#display").html(detai.data[1])
            console.log(detai.data)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function apiDelData(){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"delete_user_resume",
            user:"barish",
            id:1
        },
        success:function(details){
            console.log(details)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function apiIdData(){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"get_resume_by_id",
            user:"barish",
            id:8134
        },
        success:function(details){
            console.log(details)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}