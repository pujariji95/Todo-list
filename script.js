
const taskInput = document.getElementById('taskInput');
const taskTime = document.getElementById('taskTime');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const alarmSound = document.getElementById('alarmSound');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const taskTimeValue = taskTime.value;

  if (!taskText || !taskTimeValue) {
    alert('Please enter both task and completion time!');
    return;
  }


  const li = document.createElement('li');

  const taskInfo = document.createElement('span');
  taskInfo.textContent = `${taskText} (Complete by: ${new Date(taskTimeValue).toLocaleString()})`;
  li.appendChild(taskInfo);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => li.remove());
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  
  const alarmTime = new Date(taskTimeValue).getTime();
  const now = Date.now();
  const timeUntilAlarm = alarmTime - now;

  if (timeUntilAlarm > 0) {
    setTimeout(() => {
      alarmSound.play();
      alert(`Time's up for: "${taskText}"`);
    }, timeUntilAlarm);
  } else {
    alert("The time for this task has already passed.");
  }


  taskInput.value = '';
  taskTime.value = '';
});
