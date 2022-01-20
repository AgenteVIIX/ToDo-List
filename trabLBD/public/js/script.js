//teste com localStorage
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer #apagar");

inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}
showTasks(); 
addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("Nova tarefa"); 
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  listArray.push(userEnteredValue); 
  localStorage.setItem("Nova tarefa", JSON.stringify(listArray)); 
  showTasks(); 
  addBtn.classList.remove("active"); 
}
function showTasks(){
  let getLocalStorageData = localStorage.getItem("Nova tarefa");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".tarefasPendentes");
  pendingTasksNumb.textContent = listArray.length; 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><ion-icon name="trash-outline">Excluir</ion-icon></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; 
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("Nova tarefa");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("Nova tarefa", JSON.stringify(listArray));
  showTasks(); 
}

deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("Nova tarefa", JSON.stringify(listArray)); 
  showTasks(); 
}