(function(){
    'use strict';

    angular.module('data',[])
        .service('MenuDataService',MenuDataService);

    MenuDataService.$inject=['$http'];
    function MenuDataService($http){

        var service = this;

        service.getAllCategories= function () {
            return $http({
                method:"GET",
                url:("https://davids-restaurant.herokuapp.com/categories.json")
            })
                .then(function (response) {
                    var responseArray = response.data;
                    return responseArray;
                });
        };

        service.getItemsForCategory=function(categoryShortname){
            return $http({
                method:"GET",
                url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortname)
            })
                .then(function(response){
                    var responseArray = response.data.menu_items;
                    return responseArray;
                });
        };
    }
})();
