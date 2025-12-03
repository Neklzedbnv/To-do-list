const addTaskBtn = document.querySelector("#addTaskBtn");
const taskPopup = document.querySelector("#taskPopup");
const closePopupBtn = document.querySelector("#closePopupBtn");
const saveTaskBtn = document.querySelector("#saveTaskBtn");
const taskList = document.querySelector("#taskList");

// open popup
addTaskBtn.addEventListener("click", () => {
    taskPopup.style.display = "flex";
});

// close popup
closePopupBtn.addEventListener("click", () => {
    taskPopup.style.display = "none";
});

// save task
saveTaskBtn.addEventListener("click", () => {
    const name = document.querySelector("#taskName").value;
    const category = document.querySelector("#taskCategory").value;
    const date = document.querySelector("#taskDate").value;

    // create task element
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <h3>${name}</h3>
        <p>Category: ${category}</p>
        <p>Deadline: ${date}</p>
        <hr>
    `;

    taskList.appendChild(taskItem);

    // close popup
    taskPopup.style.display = "none";

    // clear fields
    document.querySelector("#taskName").value = "";
    document.querySelector("#taskCategory").value = "";
    document.querySelector("#taskDate").value = "";
});
