/**
 * 
 */
function llamar(){
	dibujarConcurrenciaSeg();
	//dibujarServiciosGeneral();
	//dibujarLlamadasTotalesGeneral();
	
	
}

function dibujarLlamadasTotalesGeneral(){
	$.ajax({
        url : 'chart',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success : function(data) {
        		$("#guardarComparativo").val(JSON.stringify(data));
        		
     		   	var arrayValues = [];
     		   	var cont = 0;
     		    $.each(data, function(k, v) {
     				arrayValues[cont] = v;
     			    cont = cont + 1;
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

function dibujarServiciosGeneral(){
	$.ajax({
        url : 'servicios',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success : function(data) {
        		
     		   	var arrayValues = [];
     		   	var cont = 0;
     		    $.each(data, function(k, v) {
     				arrayValues[cont] = v;
     			    cont = cont + 1;
     			});
     		 	var arrayNames = Object.keys(data);
     		    
     		   var echartPie = echarts.init(document.getElementById('echart_pie'),
     		   		theme);

     		   echartPie.setOption({
     		   	tooltip : {
     		   		trigger : 'item',
     		   		formatter : "{a} <br/>{b} : {c} ({d}%)"
     		   	},
     		   	legend : {
     		   		x : 'center',
     		   		y : 'bottom',
     		   		
     		   	},
     		   	toolbox : {
     		   		show : true,
     		   		feature : {
     		   			magicType : {
     		   				show : true,
     		   				type : [ 'pie', 'funnel' ],
     		   				option : {
     		   					funnel : {
     		   						x : '25%',
     		   						width : '50%',
     		   						funnelAlign : 'left',
     		   						max : 1548
     		   					}
     		   				}
     		   			},
     		   			restore : {
     		   				show : true,
     		   				title : "Restore"
     		   			},
     		   			saveAsImage : {
     		   				show : true,
     		   				title : "Save"
     		   			}
     		   		}
     		   	},
     		   	calculable : true,
     		   	series : [ {
     		   		name : '',
     		   		type : 'pie',
     		   		radius : '55%',
     		   		center : [ '50%', '43%' ],
     		   		data : [ {
     		   			value : arrayValues[0],
     		   			name : arrayNames[0]
     		   		},{
     		   			value : arrayValues[1],
     		   			name : arrayNames[1]
     		   		}, {
     		   			value :  arrayValues[2],
     		   			name : arrayNames[2]
     		   		}, {
     		   			value :  arrayValues[3],
     		   			name : arrayNames[3]
     		   		}, {
     		   			value :  arrayValues[4],
     		   			name : arrayNames[4]
     		   		}, {
     		   			value :  arrayValues[5],
     		   			name : arrayNames[5]
     		   		}, {
     		   			value :  arrayValues[6],
     		   			name : arrayNames[6]
     		   		}, {
     		   			value :  arrayValues[7],
     		   			name : arrayNames[7]
     		   		}, {
     		   			value :  arrayValues[8],
     		   			name : arrayNames[8]
     		   		}, {
     		   			value :  arrayValues[9],
     		   			name : arrayNames[9]
     		   		} ]
     		   	} ]
     		   });
     		    
     		    
        }
	});
}

function dibujarConcurrenciaSeg(){
	$.ajax({
        url : 'concurrencia',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success : function(data) {
        		
     		   	var arrayValues = [];
     			var porcentaje = [];
     		   	var cont = 0;
     			var total = 0;
     		    $.each(data, function(k, v) {
     				arrayValues[cont] = v;
     			    cont = cont + 1;
     			    total = total + v;
     			    
     			});
     		    
     		   var dataStyle = {
     					normal : {
     						label : {
     							show : false
     						},
     						labelLine : {
     							show : false
     						}
     					}
     				};

     				var placeHolderStyle = {
     					normal : {
     						color : 'rgba(0,0,0,0)',
     						label : {
     							show : false
     						},
     						labelLine : {
     							show : false
     						}
     					},
     					emphasis : {
     						color : 'rgba(0,0,0,0)'
     					}
     				};

     			var echartMiniPie = echarts.init(document.getElementById('echart_mini_pie'), theme);

     			echartMiniPie .setOption({
     			  title: {
     			    text: 'Porcentaje',
     			   
     			    x: 'center',
     			    y: 'center',
     			    itemGap: 20,
     			    textStyle: {
     			      color: 'rgba(30,144,255,0.8)',
     			      fontSize: 15,
     			      fontWeight: 'bolder'
     			    }
     			  },
     			  tooltip: {
     			    show: true,
     			    formatter: "{a} <br/>{b} : {c} ({d}%)"
     			  },
     			  legend: {
     			    orient: 'vertical',
     			    x: 10,
     			    y: 213,
     			    itemGap: 12,
     			    data: ['68%Something #1'],
     			  },
     			  toolbox: {
     			    show: true,
     			    feature: {
     			      mark: {
     			        show: true
     			      },
     			      dataView: {
     			        show: true,
     			        title: "Text View",
     			        lang: [
     			          "Text View",
     			          "Close",
     			          "Refresh",
     			        ],
     			        readOnly: false
     			      },
     			      restore: {
     			        show: true,
     			        title: "Restore"
     			      },
     			      saveAsImage: {
     			        show: true,
     			        title: "Save "
     			      }
     			    }
     			  },
     			  series: [{
     			    name: '1',
     			    type: 'pie',
     			    clockWise: false,
     			    radius: [65, 90],
     			    itemStyle: dataStyle,
     			    data: [{
     			      value: arrayValues[0] *100  / total,
     			      name: '68%Something #1'
     			    }, {
     			      value: 32,
     			      name: 'invisible',
     			      itemStyle: placeHolderStyle
     			    }]
     			  }]
     			});
     		    
     		    
     		    
     		    
     		   
     		    
        }
	});
}

     		    
     		    