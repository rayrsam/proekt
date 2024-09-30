taskList = new TaskList

function notifyChanges(){

    taskListView = document.getElementById("taskList")

    var childElements = document.querySelector("ul");
    var delChild = childElements.lastChild;
    while (delChild) {
        childElements.removeChild(delChild);
        delChild = childElements.lastChild;
    }

    taskList.tasks.forEach(task => {
        
        taskView = document.createElement("li");
        
        taskView.tag = task.id
        if (task.status == -1) taskView.classList.add("done")
        
        addDelBtn(taskView)
        addEdBtn(taskView)
        addTagBtn(taskView)
        AddDoneBtn(taskView)

        taskView.appendChild(document.createTextNode(task.text));
    
        taskListView.appendChild(taskView); 

    });
}

function onAddTask(id){
    taskList.addTask(id)
    notifyChanges()
}



