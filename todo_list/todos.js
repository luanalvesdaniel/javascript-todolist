// Referenciando os elemendo da DOM
var listElement = document.querySelector('#app ul'); // Lista de todos
var inputElement = document.querySelector('#app input'); // Campo input
var buttonElement = document.querySelector('#app button'); // Bot�o para inserir o todo

// Array de string contendo a lista de todos
// Iniciando com os dados o localstorage
 var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // Necess�rio array vazio para n�o dar erro

// Renderizar os todos em tela
function renderTodos(){
	// Colocar tudo dentro do ul como vazio
	listElement.innerHTML = '';

	// For para array de strings, onde percorrer� cada linha do array
	for (todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var checkElement = document.createElement('input');
		checkElement.setAttribute('type','checkbox');
				
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');
		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);

		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deleteTodo('+ pos + ')');

		todoElement.appendChild(checkElement);
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
		
	}
}

renderTodos();

// Adicionando novos todos
function addTodo(){
	var todoText = inputElement.value;
	if (todoText === ''){
		alert('Digite um todo')		
	} else {
		todos.push(todoText);
		inputElement.value = '';
		renderTodos();
		saveToStorage();
	}	
}

buttonElement.onclick = addTodo;

// Remo��o de todos ao clicar em Excluir
function deleteTodo(pos){
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

// Salva no Storage
function saveToStorage(){
	localStorage.setItem('list_todos', JSON.stringify(todos));

}
