MyApp.controller('datagridController', function ( $scope, $http, dataGridService) {

    
    $scope.uploaddata = function(){
        dataGridService.getDataGrid(); 
        
    }
    
        
    
    $scope.processData=function(){
        
        dataGridService.processData();
    }
        
    console.log ("This is just a test")
    
 
})
