class Task{
    constructor(text, status){
        this.text = text;
        this.status = status
    }
}

//exportJSON();

function exportJSON(){
    let task, text, status;
    let tasks = [];

    taskList = document.querySelectorAll('ul > li');
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].style.display != "none") {
            text = taskList[i].firstChild.textContent;
            status = taskList[i].classList.contains("done") ? 1 : 0;
            task = new Task(text, status);
            tasks.push(task);
            }   
    }

    return JSON.stringify(tasks);
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function upload(input){
    
    let file = input.files[0];
    let reader = new FileReader();
    
    reader.readAsText(file);
    reader.onload = function() {

        taskList = document.querySelectorAll('ul > li');
        for (i = 0; i < taskList.length; i++) {
          taskList[i].style.display = "none";
        }

        let newTasks = JSON.parse(reader.result);
        let task;

        for (i = 0; i < taskList.length; i++){
            task = document.createElement("li");
            taskText = document.createTextNode(newTasks[i].text);
            task.appendChild(taskText);
            document.getElementById("taskList").appendChild(task);
            if (newTasks[i].status == 1) task.classList.add("done")
            setTaskView(task);
        }
    };
    reader.onerror = function() {
        console.log(reader.error);
    };
}
