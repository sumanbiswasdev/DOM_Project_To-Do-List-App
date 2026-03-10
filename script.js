function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
    alert("Please add task");
    return;
    }

    let li = document.createElement("li");

    li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span")
    span.textContent = taskText
    span.className = "flex-1 ml-2";


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded";

    deleteBtn.onclick =  function () {
    li.remove()
    }

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteBtn)

    document.getElementById("taskList").appendChild(li)

    input.value = "";

};

function deleteChecked() {

let tasks = document.querySelectorAll("#taskList li");

tasks.forEach(function(task){

let checkbox = task.querySelector("input");

if (checkbox.checked) {
task.remove();
}

});

}