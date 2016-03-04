MyApp.service('dataGridService', function ($http) {

    //Load the data into table
    this.getDataGrid = function () {
        
            var value = $('#p').progressbar('getValue');
        if (value < 100) {
            value += Math.floor(Math.random() * 10);
            $('#p').progressbar('setValue', value);
            setTimeout(arguments.callee, 50);
        }

            $http.get('https://api.myjson.com/bins/1oawd').then(

                function (success) {

                    console.log("Successfully reterieved data");
                  
                    $('#tabledata').show();
                    $('#dg').datagrid('loadData', success.data.rows);
                    
                    $('#p').progressbar('setValue', 100);
                    
                    
                },

                function (failure) {

                    console.log("FAILURE");
                }

            )

        },

        
        //Process each data
        this.processData = function () {
            
            console.log("inside process data of service");
            //TODO Process each record here
            var griddata = $('#dg').datagrid('getData');
            
        
            var count = 1;
            $('.datagrid-btable tr').each(function() {
                
                //if(count == 2){
                    $(this).find(".datagrid-cell.datagrid-cell-c1-status").html("<img src='themes/default/images/loading.gif'>");
                    
                    setTimeout(showcomplete($(this)),1000);
                    
                    
               // }
                count++;

                //console.log(customerId);
            });
            

        }
        

})


function showcomplete(element){
    
             element.find(".datagrid-cell.datagrid-cell-c1-status").html("<img src='themes/icons/ok.png'>");
            
        }
