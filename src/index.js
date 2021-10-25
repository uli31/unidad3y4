
import{Todo,TodoList}from './classes'
import { crearTodoHtml } from './JS/componentes';

import './styles.css';


  export const todoList= new TodoList();
 



todoList.todos.forEach(crearTodoHtml);


