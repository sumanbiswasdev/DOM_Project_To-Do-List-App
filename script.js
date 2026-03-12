function addTask() {
    const input = document.getElementById("taskInput")
    const taskText = input.value.trim()

    if(taskText === "" ){
        alert("Please add your task...")
    }

    const li = document.createElement("li")
    li.className = "flex justify-between items-center bg-gray-100 p-2 rounded"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const span = document.createElement("span")
    span.textContent = "taskText"
    span.className = "flex-1 ml-2"

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded"

    deleteBtn.onclick = function () {
        li.remove()
    }

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteBtn)

    document.getElementById("taskList").appendChild(li)


    input.value = ""


}


function deleteChecked() {
    const tasks = document.querySelectorAll("#taskList li")
    tasks.forEach(function(task){

    const checkbox = task.querySelector("input")
        if(checkbox.checked){
            task.remove()
        }
    })
}