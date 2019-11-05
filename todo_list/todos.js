// Buscar elementos pai
var head = document.head;
var body = document.body;

// Título
var titleElement = document.createElement('title');
var texto = document.createTextNode('Todo List');
titleElement.appendChild(texto);
head.appendChild(titleElement);

// Div
var divElement = document.createElement('div');
divElement.setAttribute('class','container');
divElement.setAttribute('id','app');
body.appendChild(divElement);

// Input
var inputE = document.createElement('input');
var inputEText = document.createTextNode('');
inputE.setAttribute('type','text');
inputE.setAttribute('placeholder','Digite um todo');
inputE.appendChild(inputEText);
divElement.appendChild(inputE);

// Button
var buttonE = document.createElement('button');
var buttonEText = document.createTextNode('Adicionar');
buttonE.setAttribute('class','button');
buttonE.appendChild(buttonEText);
divElement.appendChild(buttonE);

// h3
var h3ElementTodo = document.createElement('h3');
var h3TextTodo = document.createTextNode('Todo');
h3ElementTodo.appendChild(h3TextTodo);
divElement.appendChild(h3ElementTodo);

var h3ElementCompleted = document.createElement('h3');
var h3TextCompleted = document.createTextNode('Completed');
h3ElementCompleted.appendChild(h3TextCompleted);
divElement.appendChild(h3ElementCompleted);

// ul
var listElement = document.createElement('ul'); // Lista de todos
h3ElementTodo.appendChild(listElement);

// Array de string contendo a lista de todos
// Iniciando com os dados o localstorage
 var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // Necessário array vazio para não dar erro

// Renderizar os todos em tela
function renderTodos(){
	// Colocar tudo dentro do ul como vazio
	listElement.innerHTML = '';
	// For para array de strings, onde percorrerá cada linha do array
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
	var todoText = inputE.value;
	if (todoText === ''){
		alert('Digite um todo')		
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

// Salva no Storage
function saveToStorage(){
	localStorage.setItem('list_todos', JSON.stringify(todos));

}
