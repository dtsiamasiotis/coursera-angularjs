(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.moveToBoughtItems = function(index) {
            ShoppingListCheckOffService.moveToAlreadyBought(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBought();
    }

    function ShoppingListCheckOffService() {

    var service = this;
    var toBuy=[{name: "cookies", quantity: "5"}, {name: "oranges", quantity: "12"}];


    service.getToBuyItems = function () {
        return toBuy;
    };

    var alreadyBought = [];

    service.getAlreadyBought = function () {
        return alreadyBought;
    };

    service.moveToAlreadyBought = function(index) {

        alreadyBought.push(toBuy[index]);
        toBuy.splice(index,1)
    };
}
})();