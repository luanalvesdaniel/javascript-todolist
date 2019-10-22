// Referenciando os elemendo da DOM
var listElement = document.querySelector('#app ul'); // Lista de todos
var inputElement = document.querySelector('#app input'); // Campo input
var buttonElement = document.querySelector('#app button'); // Botão para inserir o todo

// Array de string contendo a lista de todos
 var todos = [
	'Fazer café',
	'Estudar Javascript',
	'Tomar café',
	'Estudar React',
	'Tomar café',
	'Estudar React Native'
 ];

// Renderizar os todos em tela
function renderTodos(){
	// Colocar tudo dentro do ul como vazio
	listElement.innerHTML = '';

	// For para array de strings, onde percorrerá cada linha do array
	for (todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

// Adicionando novos todos
function addTodo(){
	var todoText = inputElement.value;
	
	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
}

buttonElement.onclick = addTodo;