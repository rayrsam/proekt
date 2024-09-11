taskList = document.querySelectorAll('ul > li');
for (i = 0; i < taskList.length; i++) setTaskView(taskList[i]);

document.querySelector("#uploadBtn").addEventListener("click", ()=>{
    document.querySelector("#upload").click();
})

function addTask(){
    task = document.createElement("li");
    input = document.getElementById("newTaskText");
    taskText = input.value != "" ? document.createTextNode(input.value) : document.createTextNode("Пустая заметка")
    task.appendChild(taskText);
    document.getElementById("taskList").appendChild(task);
    input.value = "";
    setTaskView(task)
}

function addEdBtn (task){
    edBtn = document.createElement("Button");
    edBtn.appendChild(document.createTextNode("✎"));
    edBtn.classList.add("viewBtn");
    edBtn.classList.add("edBtn");
    task.appendChild(edBtn);
    edBtn.onclick = function() {
        let defValue = this.parentElement.firstChild.textContent;
        let newValue = prompt("Новый текст", defValue);
        this.parentElement.firstChild.textContent = (newValue != null) ? newValue : defValue;
    }
}

function addDelBtn(task){
    delBtn = document.createElement("Button");
    delBtn.appendChild(document.createTextNode("X"));
    delBtn.classList.add("viewBtn");
    delBtn.classList.add("delBtn");
    task.appendChild(delBtn);
    delBtn.onclick = function() {
        this.parentElement.style.display = "none";
    }
}

function setTaskView(task){
      
    addDelBtn(task);
    addEdBtn(task);
    task.addEventListener('click', function(ev) {
        ev.target.classList.toggle("done");
    })
}