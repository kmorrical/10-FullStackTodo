(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['todoFactory'];

    function HomeController(todoFactory) {
        var vm = this;

        var cssMap = {
            3: 'list-group-item-info',
            2: 'list-group-item-warning',
            1: 'list-group-item-danger'
        }

        vm.getclass = function(todo) {
            return cssMap[todo.priority];
        }

        vm.todos = [];

        var sortArray = ['name', 'priority', '-priority'];

        var sortTodos = function(order) {
            vm.sortCategory = sortArray[order];
        }

        vm.addTodo = addTodo;
       vm.deleteTodo=deleteTodo;
        vm.editTodo=editTodo;


        activate();




        //////////////////////

        //is this not working because I need to put the function inside of another?
        //because my code is different?
        
        function activate() {
          todoFactory
          .getAll()
          .then(function(response){
            vm.todos=response.data;
          });
        }

        function addTodo() {
            if (vm.newPriority) {
                todoFactory
                    .create({
                      name: vm.newTodo,
                      priority: vm.newPriority
                    })
                    .then(function(response) {
                        vm.todos.push(response.data);
                    });
            } else {
                alert('please choose a priority.');
            }
        }

      function editTodo(todo){
            todoFactory
            .update(todo.todoId, todo)
            .then(function(response){

            })
        }

        function deleteTodo(todo) {
            todoFactory
                .remove(todo.todoId)
                .then(function(response) {
                var index =vm.todos.indexOf(todo);
                vm.todos.splice(index,1);
                })
        }
    };

})();
