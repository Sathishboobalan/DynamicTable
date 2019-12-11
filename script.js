var app = angular.module('myApp',[])
        app.controller('my-cntrl',function($scope){
            $scope.initFunc = function(){
                $scope.name = ""
                $scope.age = ""
                $scope.gen = ""
                $scope.nat = ""
            }
            $scope.gender = ["male","female"]
            $scope.country = ["India","Europe","Australia","America"]
            $scope.initFunc();
            // Array for adding users
           $scope.users = []

           $scope.addUsers = function(){
               var Person = new Object();
               Person.name = $scope.name
               Person.age = $scope.age
               Person.gen = $scope.gen               
               Person.nat = $scope.nat
               $scope.users.push(Person)
            //    console.log($scope.users)
               $scope.initFunc();
               
           }
           $scope.currentStatus = "new";
           $scope.currentIndex;
           $scope.getIndex = function(details,index,status){
                // console.log(details);
                $scope.currentStatus = status;
                $scope.currentIndex = index;
                $scope.name = details.name
                $scope.age = details.age
                $scope.gen = details.gen
                $scope.nat = details.nat

            };
            $scope.updateUsers = function(){
                let index = $scope.currentIndex;
                let users = $scope.users;
                users[index].name = $scope.name
                users[index].age = $scope.age
                users[index].gen = $scope.gen
                users[index].nat = $scope.nat
                $scope.initFunc();
            }
            $scope.updateStatus = function(status){
                $scope.currentStatus = status;
            }
            $scope.deleteData = function(data,index){
                let r = confirm("Are you sure to delete data of "+ data.name +"?");
                if (r == true) {
                    $scope.users.splice(index,1);
                }
                
            }
                
        })