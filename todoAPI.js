getTasks()

async function getTasks(){
    let url = 'http://localhost:8000/api/Note/GetList'
    let response = await fetch(url)

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        let jsonResponse = await response.json();
        //console.log(jsonResponse)
        //taskList.tasks = []
        taskList.tasks = jsonResponse
            notifyChanges()
        console.log(taskList.tasks)
    } 
    else {
        alert("Ошибка HTTP: " + response.status);
    }
}