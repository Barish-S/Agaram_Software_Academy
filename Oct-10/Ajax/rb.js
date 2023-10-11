

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
            resume:resumeDetails
        },
        success:function(details){
            console.log(details)

            window.location="showData.html"
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
        success:function(datas){
            var details=JSON.parse(datas)
            let list=details.data
            let list_id=""
            for(var i=0;i<list.length;i++){
                list_id+=`<tr>
                <td>${list[i].id}</td>
                <td>${list[i].user}</td>
                <td><button onclick="apiDelData(${list[i].id})">delete</button><a href="displayById.html?id=${list[i].id}">Show Details</a></td>
              </tr>
          `
            }
            $("#s_body").html(list_id)
            
            // window.location="showData.html" 
            // let detai=JSON.parse(details)
            // $("#display").html(detai.data[1])
            // console.log(detai.data)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function apiDelData(i){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"delete_user_resume",
            user:"barish",
            id:`${i}`
        },
        success:function(details){
            console.log(details)
            apiGetData()
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function apiIdData(indx){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"get_resume_by_id",
            user:"barish",
            id:`${indx}`
        },
        success:function(details){
            $("#idData").html(JSON.parse(details))
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function getById(userId){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"get_resume_by_id",
            user:"barish",
            id:userId
        },
        success:function(details){
            let parseData=JSON.parse(details)
            let newList=parseData.data
            let newParse=JSON.parse(newList.data)
            console.log(newParse)
            let name=newParse.name
            let email=newParse.email
            let objective=newParse.objectives
            let declaration=newParse.declaration
            var p_details=newParse.persional_details
            let f_name=p_details.father_name
            let m_name=p_details.mother_name
            let address=p_details.Address
            let dob=p_details.dob
            let gender=p_details.gender
            let m_number=p_details.phone_no
            let marital=p_details.marital_status
            $("#name").html(name)
            $("#email").html(email)
            $("#objectives").html(objective)
            $("#declaration").html(declaration)
            $("#f_name").html(f_name)
            $("#m_name").html(m_name)
            $("#m_number").html(m_number)
            $("#address").html(address)
            $("#dob").html(dob)
            $("#gender").html(gender)
            $("#marital").html(marital)

            //languages
            var lan=newParse.LanguagesKnown
            let lan_list=""
            for(var i=0;i<lan.length;i++){
                lan_list+=lan[i]+" | "
            }
            $("#lan_list").html(lan_list)

            //skills
            var skil=newParse.skills
            let skills=""
            for(var i=0;i<skil.length;i++){
            skills+=`<li>${skil[i]}</li>`
            }
            $("#skill_list").html(skills)

            //Projects
            var pro=newParse.projects
            let projects=""
            for(var i=0;i<pro.length;i++){
            projects+=`<li>${pro[i]}</li>`
            }
            $("#pro_list").html(projects)

            //education
            var edu=newParse.education
            let edu_list=""
            for(var i=0;i<edu.length;i++){
                let ins_name=edu[i].inst_name
                let inst_level=edu[i].inst_level
                let inst_year=edu[i].inst_year
                let percentage=edu[i].percentage
                edu_list+=`<li><b>${inst_level}</b></li>
                            <label>${ins_name},${inst_year},<b>${percentage}%</b>.</label><br/>`
            }
            $("#edu_list").html(edu_list)

            //experience
            var ex=newParse.experience
            let ex_list=""
            for(var i=0;i<ex.length;i++){
                let company_name=ex[i].company_name
                let role=ex[i].role
                let ex_year=ex[i].ex_year
                let package=ex[i].package
                ex_list+=`<li><b>${role}</b></li>
                            <label>I worked as role of <b>${role}</b> at <b>${company_name}</b> for <b>${ex_year}</b>year with the Package Of Rs.${package}per/month.</label>`
            }
            $("#ex_list").html(ex_list)

        },
        error:function(error){
            console.log("Error",error)
        }
    })
}