(function() {
    'use strict';

    angular
        .module('app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http'];

    function todoFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
                //you use remove instead of delete because it works better
        };
        return service;

        ////////////////////////
        //are these supposed to correlate to what I call my items in sublime/html/
        function create(todo) {
            return $http.post('http://localhost:52805/api/todoes', todo);

        }

        function getAll() {
            return $http.get('http://localhost:52805/api/todoes');
        }

        function getById(id) {
            return $http.get('http://localhost:52805/api/todoes/', +id);
        }

        function update(id, todo) {
            return $http.put('http://localhost:52805/api/todoes/' + id, todo);
            //the todo is the object to be updated
        }

        function remove(id) {
            return $http.delete('http://localhost:52805/api/todoes/' + id);
        }
    }
})();
