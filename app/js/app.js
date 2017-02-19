var app = angular.module('todo', []);

app.factory('TodoFactory', function () {
  var todos = [];

  var add = function add(todo) {
    todos.push({
      createdAt: moment().format(),
      name: todo,
      isEdit: false,
      isDone: false
    });
  };

  return {
    add: add,
    todos: todos
  };  

});

app.controller('TodoController', function ($scope, TodoFactory) {
  
  $scope.todos = [];
  $scope.data = {
    todo: ''
  };

  $scope.addTodo = function addTodo() {
    TodoFactory.add($scope.data.todo);
    $scope.todos = _.reverse(TodoFactory.todos);
    $scope.data.todo = "";
  };


});