export const form = document.getElementById('todoform');
export const todoInput = document.getElementById('newtodo');
export const todosListEl = document.getElementById('todos-list');
export const notificationEl = document.querySelector('.notification');
export const todos = JSON.parse(localStorage.getItem('todos')) || [];
export const EditTodoId = -1;