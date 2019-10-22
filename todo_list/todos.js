// Referenciando os elemendo da DOM
var listElement = document.querySelector('#app ul'); // Lista de todos
var inputElement = document.querySelector('#app input'); // Campo input
var buttonElement = document.querySelector('#app button'); // Bot�o para inserir o todo

// Array de string contendo a lista de todos
 var todos = [
	'Fazer caf�',
	'Estudar Javascript',
	'Tomar caf�',
	'Estudar React',
	'Tomar caf�',
	'Estudar React Native'
 ];

// Renderizar os todos em tela
function renderTodos(){
	// For para array de strings, onde percorrer� cada linha do array
	for (todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);
	}
}

renderTodos();