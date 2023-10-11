var resumeDetails={};
var each_tmp={}
function run(input,p_key){
    if(p_key){
        if(resumeDetails[p_key]){
            resumeDetails[p_key]={...resumeDetails[p_key]}
        }
        else{
            resumeDetails[p_key]={}
        }
        resumeDetails[p_key][input.name]=input.value
    }
    else{
        resumeDetails[input.name]=input.value
    }
    disply()
}


function addMulData(p_key,e_id){
    if(!resumeDetails[p_key]){
        resumeDetails[p_key]=[]
    }
    if(e_id){
        let el_id=document.getElementById(e_id).value;
        if(el_id==""){
            alert("Please fill the Box")
        }
        else{
            resumeDetails[p_key].push(el_id)
            document.getElementById(e_id).value=""
            displayData(resumeDetails[p_key],p_key)
            disply()
        }
    }
    else{
        resumeDetails[p_key].push(each_tmp)
        displayData(resumeDetails[p_key],p_key)
        let keyss=Object.keys(each_tmp)
        for(var i=0;i<keyss.length;i++){
            let each=keyss[i]
            document.getElementById(each).value=""
        }
    }
    disply()
}

function displayData(data,p_key){
        let list=""
        for(var i=0;i<data.length;i++){
            let s_list=data[i]
            list+=`<div id='${p_key[i]}'><p>${s_list}<button onclick="del('${i}','${p_key}')">delete</button></p></div>`
        }
        document.getElementById(p_key).innerHTML=list
        disply()
}

function del(indx,p_key){
    resumeDetails[p_key].splice(indx,1)
    let vanish=document.getElementById(`${p_key[indx]}`)
    vanish.remove()
    disply()
}

function objData(input){
    each_tmp[input.name]=input.value
}

function disply(){
    document.getElementById("display").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}