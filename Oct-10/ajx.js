
function dataShow(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{},
        success:function(dataList){
            console.log(dataList)
            let sort_list=""
            for(let i=0;i<dataList.length;i++){
                sort_list+=`<tr>
                <td>${dataList[i].id}</td>
                <td>${dataList[i].userId}</td>
                <td><button type="button" onclick="showID(${dataList[i].id})">${dataList[i].title}<button type="button" onclick="put(${dataList[i].id})">put</button><button type="button" onclick="del(${dataList[i].id})">DELETE</button></button></td>
              </tr>`
            }
            $("#t_body").html(sort_list)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function showID(a){
    $.ajax({
        type:"get",
        url:`https://jsonplaceholder.typicode.com/posts/${a}`,
        data:{},
        success:function(dataList){
            console.log(dataList)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function post(){
    $.ajax({
        type:"post",
        url:`https://jsonplaceholder.typicode.com/posts`,
        data:{ "userName": "Barish",
        "Place": "Madhavalayam",
        "Pincode": 629302
        },
        success:function(data){
            console.log(data)
        },
        error:function(error){
            console.log("Error",error)
        }   
    })
}

function put(indx){
    $.ajax({
        type:"put",
        url:`https://jsonplaceholder.typicode.com/posts/${indx}`,
        data:{ "title": "New Mobile Project",
        },
        success:function(datas){
            console.log(datas)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}

function del(indx){
    $.ajax({
        type:"DELETE",
        url:`https://jsonplaceholder.typicode.com/posts/${indx}`,
        data:{ "title": "New Mobile Project",
        },
        success:function(datas){
            console.log(datas)
        },
        error:function(error){
            console.log("Error",error)
        }
    })
}




