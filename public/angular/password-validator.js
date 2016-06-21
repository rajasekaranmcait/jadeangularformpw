myApp.directive('validPassword',[function()
{
    return {
             require: 'ngModel',
             link: function (scope, element, attribute, ctrl)
                {
                  ctrl.$parsers.unshift(function (viewValue, $scope)
                  {
                     var noMatch = viewValue != scope.userForm.password.$viewValue
                     ctrl.$setValidity('noMatch', !noMatch)
                  })
                }
           }
}]);
