var app=angular.module("sentiment",["ngRoute"]);
app.config(function($routeProvider){
 //console.log("adjk")   
 $routeProvider.when("/home",{
                    templateUrl:"pages/intro.html",
                    //controller:'introCtrl'
                })
                .when("/",{
                    templateUrl:"pages/intro.html",
                    //controller: 'mod1Ctrl'
                })
                .when("/mod1",{
                    templateUrl:"pages/mod1.html",
                    controller: "mod1Ctrl"
                })
                .when("/mod2",{
                    templateUrl:"pages/mod2.html",
                    controller: 'mod2Ctrl'
                })
                .when("/mod3",{
                    templateUrl:"pages/mod3.html",
                    controller: 'mod3Ctrl'
                })
                .otherwise("/home");
    
});



app.controller("mod1Ctrl",function($scope){
    $scope.mod1Text="hello this is first module";
    $scope.changeTextA=function(){
         $scope.mod1Text="Clicked  A";
    }
    $scope.changeTextB=function(){
         $scope.mod1Text="Clicked  B";
    }
    $scope.changeTextC=function(){
         $scope.mod1Text="Clicked  C";
    }
    $scope.changeTextD=function(){
         $scope.mod1Text="Clicked  D";
    }

});
app.controller('mod2Ctrl',function($scope) {
    $scope.mod2Text="hello this is second module";
    $scope.changeTextE=function(){
         $scope.mod2Text="Clicked  E";
    }
    $scope.changeTextF=function(){
         $scope.mod2Text="Clicked  F";
    }
    $scope.changeTextG=function(){
         $scope.mod2Text="Clicked  G";
    }
    $scope.changeTextH=function(){
         $scope.mod2Text="Clicked  H";
    }
});
app.controller('mod3Ctrl',function($scope){
    $scope.show=false;
    $scope.employes=[];
    
    $scope.formSubmit=function(){
        $scope.show=true;
        if($scope.form1==undefined)
            return false;
        $scope.employes.push(angular.copy($scope.form1));
        $scope.form1=null;
        $scope.myForm.myName.$setPristine();
        $scope.myForm.myName.$setUntouched();
        $scope.myForm.myEmpid.$setPristine();
        $scope.myForm.myEmpid.$setUntouched();
     //   $scope.myForm.$setPristine();
      //   $scope.myForm.$setUntouched();
       
    };


});