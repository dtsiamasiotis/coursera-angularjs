(function(){
    'use strict';

    angular.module('LunchCheck',[])
        .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.resOfCheckInput = "";
        $scope.colorOfRes = "black";
        $scope.colorOfInput = "";
        $scope.checkInput = function(string){

            if(string==undefined||string==="") {
                $scope.resOfCheckInput = "Please enter data first";
                return;
            }

            var res = string.split(",");

            if(res.length<=3) {
                $scope.resOfCheckInput = "Enjoy!";
                $scope.colorOfRes = "green";
                $scope.colorOfInput = "green";
            }
            else {
                $scope.resOfCheckInput = "Too much!";
                $scope.colorOfRes = "red";
                $scope.colorOfInput = "red";
            }

            console.log(res.length);}
        };
})();