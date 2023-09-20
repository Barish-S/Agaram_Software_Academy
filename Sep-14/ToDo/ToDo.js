var input=document.getElementById("input")
var button=document.getElementById("add")
var todoList=document.getElementById("todoList")
var todos=[]
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem("todos"))||[]
    todos.forEach(todo=>addtodo(todo))
}
button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})
function addtodo(todo){
    var para=document.createElement('p')
    para.innerText=todo
    todoList.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration="line-through"
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}
function remove(todo){
    var index=todos.indexOf(todo)
    if(index>-1)
    todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}