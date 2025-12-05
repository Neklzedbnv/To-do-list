const addTaskBtn = document.querySelector("#addTaskBtn");
const taskPopup = document.querySelector("#taskPopup");
const closePopupBtn = document.querySelector("#closePopupBtn");
const saveTaskBtn = document.querySelector("#saveTaskBtn");
const taskList = document.querySelector("#taskList");


addTaskBtn.addEventListener("click", () => {
    taskPopup.style.display = "flex";
});


closePopupBtn.addEventListener("click", () => {
    taskPopup.style.display = "none";
});


saveTaskBtn.addEventListener("click", () => {
    const name = document.querySelector("#taskName").value;
    const category = document.querySelector("#taskCategory").value;
    const date = document.querySelector("#taskDate").value;

    
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <h3>${name}</h3>
        <p>Category: ${category}</p>
        <p>Deadline: ${date}</p>
        <button class="delete-btn">Delete</button>
        <hr>
    `;

    taskList.appendChild(taskItem);

    
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    
    taskPopup.style.display = "none";


    document.querySelector("#taskName").value = "";
    document.querySelector("#taskCategory").value = "";
    document.querySelector("#taskDate").value = "";
});
