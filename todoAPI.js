let domain = "http:localhost:8000"
let APILink = domain + '/api/Note/'
getTasks("")

function setDomain(){
    let newDomain = prompt("Домен Ngrok");
        if (newDomain != null){
            domain = newDomain
            getTasks()
        }
}


async function getTasks(tags) {
    let url = APILink + 'GetList/' + tags
    let response = await fetch(url, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "1",
        }),
    })

    if (response.ok) {
        let jsonResponse = await response.json();

        taskList.tasks = jsonResponse
        notifyChanges()
        //console.log(taskList.tasks)
    } 
    else {
        alert("Ошибка HTTP: " + response.status);
    }
}

async function createTask() {
    let url = APILink + 'Create'

    let response = await fetch(url, {
        method: "post",
        body: JSON.stringify({
            text: "Пустая Заметка",
            tag: [""],
            status: 1
        }),
        headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
            "ngrok-skip-browser-warning": "1",
        }),
    })
    if (response.ok) {
        let id = await response.json();
        //console.log(id)
        onAddTask(id)
    } 
    else {
        alert("Ошибка HTTP: " + response.status);
    }
}

async function updateTask(task) {
    let url = APILink + 'Update'

    let response = await fetch(url, {
        method: "put",
        body: JSON.stringify(task),
        headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
            "ngrok-skip-browser-warning": "1",
        }),
    })
    if (!response.ok) {
        alert("Ошибка HTTP: " + response.status);
    } 
}

async function deleteTask(id) {
    let url = APILink + 'Delete/' + id

    let response = await fetch(url, {
        method: "delete",
        headers: new Headers({
            "ngrok-skip-browser-warning": "1",
        }),
    })
    if (!response.ok) {
        alert("Ошибка HTTP: " + response.status);
    } 
}

