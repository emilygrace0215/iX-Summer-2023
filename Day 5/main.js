class task {
  constructor(title) {
    this.title = title;
  }
  static fromJSON(json) {
    return new task(json.title);
  }
}

class UI {
  constructor() {
    this.form = document.getElementById("form");

    this.title = document.getElementById("task-input");

    this.tableBody = document.getElementById("table-body");

    this.form.addEventListener("submit", (e) => this.onFormSubmit(e));

    this.tasks = [];
    this.loadTasksFromLocalStorage();
    this.renderTaskTable();
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.title == "") {
      return;
    }

    const Task = new task(this.title.value);

    this.tasks.push(Task);

    this.saveTasksToLocalStorage();
    this.renderTaskTable();

    this.title.value = "";
  }

  renderTaskTable() {
    this.tableBody.innerHTML = "";

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const tr = this.createTaskTableRow(task);
      this.tableBody.appendChild(tr);
    }
  }

  createTaskTableRow(task) {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    const tdCompleted = document.createElement('td');

    tdTitle.innerHTML = task.title;

    var radiobox = document.createElement('input');
    radiobox.type = 'radio';
    radiobox.id = 'contact';

    tr.appendChild(tdTitle);
    tr.appendChild(radiobox);

    return tr;
  }

  saveTasksToLocalStorage() {
    const json = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", json);
  }

  loadTasksFromLocalStorage() {
    const json = localStorage.getItem("tasks");
    if (json) {
      const taskArr = JSON.parse(json);
      this.tasks = taskArr.map((x) => task.fromJSON(x));
    }
  }
}

const ui = new UI();
