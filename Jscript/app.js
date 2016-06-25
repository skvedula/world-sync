var sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config('$routeProvider', function($routeProvider) {
    $routeProvider

        .when('/index', {
            templateUrl : '../views/register.html',
            controller  : 'mainController'
        })

        .when('/register', {
            templateUrl : '../views/register.html',
            controller  : 'mainController'
        })

        .when('/search', {
            templateUrl : '../views/search-results.html',
            controller  : 'mainController'
        });
});

sampleApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
    $scope.results = [
    {
        "company": "Pepsi Bottling Company",
        "gln": "0050505000005",
        "gtin": "049000055399",
        "p_name": "Diet Pepsi Cola",
        "prod_url": "http://www.google.com/pepsi2",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "Pepsi Bottling Company",
        "gln": "0050505000005",
        "gtin": "049000055399",
        "p_name": "Diet Pepsi Cola",
        "prod_url": "http://www.google.com/pepsi3",
        "url_type": "assets/SmartLabellogo-2.png"
    },
    {
        "company": "Pepsi Bottling Company",
        "gln": "0050505000005",
        "gtin": "049000055399",
        "p_name": "Diet Pepsi Cola",
        "prod_url": "http://www.google.com/pepsi4",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "Pepsi Bottling Company",
        "gln": "0050505000005",
        "gtin": "049000055399",
        "p_name": "Diet Pepsi Cola",
        "prod_url": "http://www.google.com/pepsi5",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "Pepsi Bottling Company",
        "gln": "0050505000005",
        "gtin": "049000055399",
        "p_name": "Diet Pepsi Cola",
        "prod_url": "http://www.google.com/pepsi6",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "Pepsi Bottling Company",
        "gln": "0050505000005",
        "gtin": "049000055399",
        "p_name": "Diet Pepsi Cola",
        "prod_url": "http://www.google.com/pepsi7",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "Coca-Cola Company",
        "gln": "0043100000013",
        "gtin": "048000055388",
        "p_name": "Sprite Soda",
        "prod_url": "http://www.amazon.com/cola1",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "Coca-Cola Company",
        "gln": "0043100000013",
        "gtin": "048000055388",
        "p_name": "Sprite Soda",
        "prod_url": "http://www.amazon.com/cola2",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "Coca-Cola Company",
        "gln": "0043100000013",
        "gtin": "048000055388",
        "p_name": "Sprite Soda",
        "prod_url": "http://www.amazon.com/cola3",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "Coca-Cola Company",
        "gln": "0043100000013",
        "gtin": "048000055388",
        "p_name": "Sprite Soda",
        "prod_url": "http://www.amazon.com/cola4",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "Coca-Cola Company",
        "gln": "0043100000013",
        "gtin": "048000055388",
        "p_name": "Sprite Soda",
        "prod_url": "http://www.amazon.com/cola5",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "ACCO BRANDS",
        "gln": "0050505000005",
        "gtin": "00078910679319",
        "p_name": "Wilson Jones Round Ring View Binder",
        "prod_url": "http://www.amazon.com/wilson1",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "ACCO BRANDS",
        "gln": "0050505000005",
        "gtin": "00078910679319",
        "p_name": "Wilson Jones Round Ring View Binder",
        "prod_url": "http://www.amazon.com/wilson2",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "ACCO BRANDS",
        "gln": "0050505000005",
        "gtin": "00078910679319",
        "p_name": "Wilson Jones Round Ring View Binder",
        "prod_url": "http://www.amazon.com/wilson1",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "PetCo",
        "gln": "9999",
        "gtin": "999999999",
        "p_name": "rainbow fish food",
        "prod_url": "http://www.amazon.com/jacket1",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "PetCo",
        "gln": "9999",
        "gtin": "999999999",
        "p_name": "seawater fish food",
        "prod_url": "http://www.amazon.com/jacket2",
        "url_type": "assets/safetylogo.png"
    },
    {
        "company": "PetCo",
        "gln": "99999",
        "gtin": "9999999",
        "p_name": "seawater fish food",
        "prod_url": "http://www.petco.com/fish_food2",
        "url_type": "assets/SmartLabellogo-2.png"
    },
    {
        "company": "PetMart",
        "gln": "9999999",
        "gtin": "88888888",
        "p_name": "cat food",
        "prod_url": "http://www.petmart.com/cat_food1",
        "url_type": "assets/EUlogo.png"
    },
    {
        "company": "PetsMart",
        "gln": "88888888",
        "gtin": "88888888",
        "p_name": "dog food",
        "prod_url": "http://www.petsmart.com",
        "url_type": "assets/SmartLabellogo-2.png"
    },
    {
        "company": "Yiwu Tech, Inc",
        "gln": "66666666",
        "gtin": "66666666",
        "p_name": "iCloud server",
        "prod_url": "http://www.amazon.com/server1",
        "url_type": "assets/SmartLabellogo-2.png"
    }
];

    $scope.addRow = function(){     
        $scope.results.push({ 'company':$scope.company, 'gln': $scope.gln, 'gtin': $scope.gtin, 'p_name': $scope.p_name, 'prod_url': $scope.prod_url, 'url_type':$scope.url_type });
        $scope.company='';
        $scope.gln='';
        $scope.gtin='';
        $scope.p_name='';
        $scope.prod_url='';
        $scope.url_type='';
    };  

    $scope.removeRow = function(company){
            var index = -1;     
            var comArr = eval( $scope.results );
            for( var i = 0; i < comArr.length; i++ ) {
                if( comArr[i].company === comapny ) {
                    index = i;
                    break;
                }
            }
            if( index === -1 ) {
                alert("Something gone wrong");
            }
            $scope.results.splice( index, 1 );
    };
});