(function(){

    'use strict';

    angular.module('NarrowItDownApp',[])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .directive('foundItemsList',FoundItemsDirective);


    function FoundItemsDirective(){
        var ddo = {
            templateUrl: "foundItems.html",
            scope:{
                foundItems:'<',
                onRemove:'&'
            },
            controller:FoundItemsListDirectiveController,
            controllerAs:'list',
            bindToController:true
        };

        return ddo;
    }

    function FoundItemsListDirectiveController(){
        var list = this;
        list.isEmpty = function(){
            if(list.foundItems!=undefined)
                return ((list.foundItems.length===0) );
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var narrowItDown = this;

        narrowItDown.findItems = function(searchTerm){
            MenuSearchService.getMatchedMenuItems(searchTerm).then(function (matchedItems)
            {
                narrowItDown.found=matchedItems;
            });
        }


        narrowItDown.removeItem = function(index){
            narrowItDown.found.splice(index,1);
        }

    }

    MenuSearchService.$inject=['$http'];
    function MenuSearchService($http) {
        this.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),

            })

                 .then(function (response) {
                   var matchedItems=[];
                   var responseArray = response.data.menu_items;

                    for (var i = 0; i < responseArray.length; i++) {
                        if (responseArray[i].description.indexOf(searchTerm) != -1)
                            matchedItems.push(responseArray[i]);
                    }

                    return matchedItems;

                });
        }
    }

})();