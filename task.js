class Task{
    constructor(id, text, tag, status){
        this.id = id
        this.text = text;
        this.tag = tag
        this.status = status
    }
}

class TaskList{

    tasks = []

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, 
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }); 
    }

    addTask (id){
        //var id = this.uuidv4()
        var task = new Task(id, "Пустая Заметка", [""], 1)
        this.tasks.push(task)
        return task
    }

    deleteTask(id){
        this.tasks = this.tasks.filter(function (task){
            return task.id != id
        })
    }

    editTaskText (id, text){
        var task = this.tasks.find(task =>
            task.id === id)
         
        task.text = text
        return task
    }

    editTaskStatus (id){
        var task = this.tasks.find(task =>
            task.id === id)
         
        task.status *= -1
        return task
    }

    editTaskTags (id, tag){
        var task = this.tasks.find(task =>
            task.id === id)
         
        task.tag = tag.split('_')
        return task
    }

    
}