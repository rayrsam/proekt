document.querySelector("#uploadBtn").addEventListener("click", ()=>{
    document.querySelector("#upload").click();
})

function onDownload(){
    download(JSON.stringify(taskList.tasks), 'tasks.json', 'text/plain');
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
        taskList.tasks = []
        taskList.tasks = JSON.parse(reader.result);
        notifyChanges()
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}


