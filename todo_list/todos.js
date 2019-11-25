// Buscar elementos pai
var head = document.head;
var body = document.body;

// Título da Página
var titleElement = document.createElement('title');
var texto = document.createTextNode('Todo List');
titleElement.appendChild(texto);
head.appendChild(titleElement);

// Div Principal
var divElement = document.createElement('div');
divElement.setAttribute('class','container');
divElement.setAttribute('id','app');
body.appendChild(divElement);

// Input para adicionar Todos
var inputE = document.createElement('input');
var inputEText = document.createTextNode('');
inputE.setAttribute('type','text');
inputE.setAttribute('placeholder','Type todo');
inputE.appendChild(inputEText);
divElement.appendChild(inputE);

// Button para confirmar a inclusão do Todo
var buttonE = document.createElement('button');
var buttonEText = document.createTextNode('Add');
buttonE.setAttribute('class','button');
buttonE.appendChild(buttonEText);
divElement.appendChild(buttonE);

// h3 do TODO
var h3ElementTodo = document.createElement('h3');
var h3TextTodo = document.createTextNode('TODO');
h3ElementTodo.appendChild(h3TextTodo);
divElement.appendChild(h3ElementTodo);

// h3 do COMPLETED
var h3ElementCompleted = document.createElement('h3');
var h3TextCompleted = document.createTextNode('COMPLETED');
h3ElementCompleted.appendChild(h3TextCompleted);
divElement.appendChild(h3ElementCompleted);

// ul do TODO
var listElement = document.createElement('ul'); // Lista de todos
h3ElementTodo.appendChild(listElement);

// ul do COMPLETED
var listElementC = document.createElement('ul'); // Lista de todos
h3ElementCompleted.appendChild(listElementC);

// Array de string contendo a lista de todos
// Iniciando com os dados o localstorage
var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // Necessário array vazio para não dar erro
var todosC = JSON.parse(localStorage.getItem('list_todos_c')) || []; // Necessário array vazio para não dar erro

// Renderizar os todos em tela
function renderTodos(){
	// Colocar tudo dentro do ul como vazio
	listElement.innerHTML = '';
	
	// For para array de strings, onde percorrerá cada linha do array
	for (todo of todos){
		var pos = todos.indexOf(todo);
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var checkElement = document.createElement('button');
		checkElement.setAttribute('class','buttonDone');
		var checkText = document.createTextNode('Done');
		checkElement.appendChild(checkText);	
		checkElement.setAttribute('onclick','completeTodo('+ pos + ')');
				
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');
		var linkText = document.createTextNode('Delete');
		linkElement.appendChild(linkText);		
		linkElement.setAttribute('onclick', 'deleteTodo('+ pos + ')');

		
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		todoElement.appendChild(checkElement);
		listElement.appendChild(todoElement);
		todoE = todoElement;
	}
}

function renderTodosC(){
	listElementC.innerHTML = '';

	for (todo of todosC){
		
		var posC = todosC.indexOf(todo);
		var todoElementC = document.createElement('li');
		todoElementC.setAttribute('id','completed-tasks');
		todoElementC.setAttribute('checked','checked');
		var todoTextC = document.createTextNode(todo);

		var linkElementC = document.createElement('a');
		linkElementC.setAttribute('href', '#');
		var linkTextC = document.createTextNode('Delete');
		linkElementC.appendChild(linkTextC);
		
		linkElementC.setAttribute('onclick', 'deleteTodoC('+ posC + ')');

		todoElementC.appendChild(todoTextC);
		todoElementC.appendChild(linkElementC);
		listElementC.appendChild(todoElementC);
				
	}
}

renderTodos();
renderTodosC();

// Adicionando novos todos
function addTodo(){
	var todoText = inputE.value;
	if (todoText === ''){
		alert('Type something todo')		
	} else {
		todos.push(todoText);
		inputE.value = '';
		renderTodos();
		saveToStorage();
	}	
}

buttonE.onclick = addTodo;

// Remoção de todos ao clicar em Excluir
function deleteTodo(pos){
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

function deleteTodoC(posC){
	todosC.splice(posC, 1);
	renderTodosC();
	saveToStorageC();
}

function completeTodo(pos){
	todosC.push(todos[pos]);
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
	renderTodosC();
	saveToStorageC();
	
}

// Salva no Storage
function saveToStorage(){
	localStorage.setItem('list_todos', JSON.stringify(todos));
}

function saveToStorageC(){
	localStorage.setItem('list_todos_c', JSON.stringify(todosC));
}