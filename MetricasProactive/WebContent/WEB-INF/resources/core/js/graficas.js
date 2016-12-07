/**
 * 
 */


function dibujarLlamadasTotalesGeneral(){
	$.ajax({
        url : 'chart',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success : function(data) {
        		$("#guardarComparativo").val(JSON.stringify(data));
        		//alert(JSON.stringify(data));
     		   	//alert(Object.keys(data));
     		   	
     		   	//alert(object);
     		    // var json = JSON.stringify(eval("(" + object + ")"));
     		    
        		//var json = JSON.parse(object);
     		    //alert(json.PYME);
     		   	var arrayValues = [];
     		   	var cont = 0;
     		    $.each(data, function(k, v) {
     				arrayValues[cont] = v;
     			    cont = cont + 1;
     			});
     		   	
     		   	
     		   var GeneralLlamadasBarras2 = echarts.init(document.getElementById('mainb'),
               		theme);

               GeneralLlamadasBarras2.setOption({
               	tooltip : {
               		trigger : 'axis'
               	},
               	toolbox : {
               		show : true,
               		feature : {
               			dataView : {
               				show : true,
               				readOnly : false,
               				title : "Text View",
               				lang : [ "Text View", "Close", "Refresh", ],
               			},
               			restore : {
               				show : true,
               				title : 'Restore'
               			},
               			saveAsImage : {
               				show : true,
               				title : 'Save'
               			}
               		}
               	},
               	calculable : true,
               	legend : {
               		data : [ 'Revenue', 'Comparativa' ],
               		y : 'bottom'
               	},
               	xAxis : [ {
               		type : 'category',
               		data : Object.keys(data)
               	} ],
               	yAxis : [ {
               		type : 'value',
               		name : 'Número',
               		axisLabel : {
               			formatter : '{value}'
               		}
               	}, {
               		type : 'value',
               		name : 'Número',
               		axisLabel : {
               			formatter : '{value}'
               		}
               	} ],
               	series : [{
               		name : 'Revenue',
               		type : 'bar',                
               		//data : [2,5,10,8,15]
               		data:arrayValues
               	}, {
               		name : 'Comparativa',
               		type : 'line',
               		yAxisIndex : 1,        
               		data : [0,0,0,0,0 ]
               	} ]
               });  	
        }
	});
}

function dibujarLlamadasTotalesGeneralComparativo(){
	
	$.ajax({
        url : 'chart',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success : function(data) {
        		//$("#guardarComparativo").val(JSON.stringify(data));
     		   	var object = $("#guardarComparativo").val();
     		    var json = JSON.parse(object);
     			var arrayValuesOriginal = [];
     		   	var arrayValuesComparativo = [];
     		   	var cont = 0;
     		    $.each(data, function(k, v) {
     		    	arrayValuesComparativo[cont] = v;
     			    cont = cont + 1;
     			});
     		    var conteo = 0;
     		    $.each(data, function(k, v) {
     		    	arrayValuesOriginal[conteo] = v;
    		    	conteo = conteo + 1;
    			});
     		   
     		   	
     		   	
     		   var GeneralLlamadasBarras2 = echarts.init(document.getElementById('mainb'),
               		theme);

               GeneralLlamadasBarras2.setOption({
               	tooltip : {
               		trigger : 'axis'
               	},
               	toolbox : {
               		show : true,
               		feature : {
               			dataView : {
               				show : true,
               				readOnly : false,
               				title : "Text View",
               				lang : [ "Text View", "Close", "Refresh", ],
               			},
               			restore : {
               				show : true,
               				title : 'Restore'
               			},
               			saveAsImage : {
               				show : true,
               				title : 'Save'
               			}
               		}
               	},
               	calculable : true,
               	legend : {
               		data : [ 'Revenue', 'Comparativa' ],
               		y : 'bottom'
               	},
               	xAxis : [ {
               		type : 'category',
               		data : Object.keys(data)
               	} ],
               	yAxis : [ {
               		type : 'value',
               		name : 'Número',
               		axisLabel : {
               			formatter : '{value}'
               		}
               	}, {
               		type : 'value',
               		name : 'Número',
               		axisLabel : {
               			formatter : '{value}'
               		}
               	} ],
               	series : [{
               		name : 'Revenue',
               		type : 'bar',                
               		//data : [2,5,10,8,15]
               		//data:[0,0,0,0,0]
               		data:arrayValuesOriginal
               	}, {
               		name : 'Comparativa',
               		type : 'line',
               		yAxisIndex : 1,        
               		data : arrayValuesComparativo
               	} ]
               });  	
        }
	});
	
}