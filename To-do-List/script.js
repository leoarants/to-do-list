// Selecionando os elementos da interface
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Adicionar nova tarefa
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="deleteBtn">Excluir</button>`;
    taskList.appendChild(li);
    taskInput.value = '';

    // Adicionar funcionalidade ao botão de excluir
    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
  }
});
