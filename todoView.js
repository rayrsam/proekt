function addDelBtn(taskView){
    delBtn = document.createElement("Button");
    delBtn.appendChild(document.createTextNode("X"));
    delBtn.classList.add("viewBtn");
    delBtn.classList.add("delBtn");

    delBtn.onclick = function(){
        taskList.deleteTask(taskView.tag)
        notifyChanges()
    }

    taskView.appendChild(delBtn);
}

function addEdBtn (taskView){
    edBtn = document.createElement("Button");
    edBtn.appendChild(document.createTextNode("✎"));
    edBtn.classList.add("viewBtn");
    edBtn.classList.add("edBtn");
    

    edBtn.onclick = function() {
        taskText = this.parentElement.lastChild.textContent
        defValue = taskText
        let newValue = prompt("Новый текст", defValue);
        if (newValue != null){
            taskText = newValue   
            taskList.editTaskText(taskView.tag, taskText)
            notifyChanges()
        }
    }

    taskView.appendChild(edBtn);
}

function AddDoneBtn(taskView){
    doneBtn = document.createElement("Button");
    doneBtn.appendChild(document.createTextNode("✓"));
    doneBtn.classList.add("viewBtn");
    doneBtn.classList.add("edBtn");

    doneBtn.onclick = function(){
        taskList.editTaskStatus(taskView.tag)
        notifyChanges()
    }

    taskView.appendChild(doneBtn);
}

function addTagBtn(taskView){
    tagBtn = document.createElement("Button");
    tagBtn.appendChild(document.createTextNode("#"));
    tagBtn.classList.add("viewBtn");
    tagBtn.classList.add("edBtn");

    tagBtn.onclick = function() {
        taskTag = (taskList.tasks.find(task => 
            task.id === taskView.tag
        )).tag
        defValue = taskTag
        let newValue = prompt("Новый текст", defValue);
        if (newValue != null){   
            taskList.editTaskTags(taskView.tag, newValue)
        }
    }

    taskView.appendChild(tagBtn);
}