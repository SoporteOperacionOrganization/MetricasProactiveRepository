/**
 * 
 */
function dibujarLlamadasTotalesGeneral(fechaInicioP,fechaFinalP){
       $.ajax({
        url : 'obtenerLlamadasTotalesSegmento',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: {
             fechaInicio:fechaInicioP,
             fechaFinal:fechaFinalP
        },
        success : function(data) {
                    $("#comparativoLlamadasTotalesSegmentos").val(JSON.stringify(data));
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
                    
                    
                var GeneralLlamadasBarras2 = echarts.init(document.getElementById('LlamadasTotalesPorSegmentos'),
                           theme);
                var valorAte = data['ATE'];
                var valorBE = data['BANCA EMPRESARIAL'];
                var valorPyme = data['PYME'];
                var valorPymeOffline = data['PYME OFFLINE'];
                var valorOffline = data['OFFLINE'];
                if(valorAte == null){
                       valorAte = 0;
                }
                if(valorBE == null){
                       valorBE = 0;
                }
                if(valorPyme == null){
                       valorPyme = 0;
                }
                if(valorPymeOffline == null){
                       valorPymeOffline = 0;
                }
                if(valorOffline == null){
                       valorOffline = 0;
                }

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
                           data : [ 'Llamadas', 'Comparativo' ],
                           y : 'bottom'
                    },
                    xAxis : [ {
                           type : 'category',
                           //data : Object.keys(data)
                           data: ['ATE', 'BANCA EMPRESARIAL', 'PYME', 'PYME OFFLINE', 'OFFLINE']
                    } ],
                    yAxis : [ {
                           type : 'value',
                           name : 'Total',
                           axisLabel : {
                                  formatter : '{value}'
                           }
                    }, {
                           type : 'value',
                           name : 'Total',
                           axisLabel : {
                                  formatter : '{value}'
                           }
                    } ],
                    series : [{
                           name : 'Llamadas',
                           type : 'bar',                
                           //data : [2,5,10,8,15]
                           data:[valorAte,valorBE,valorPyme,valorPymeOffline,valorOffline]
                    }, {
                           name : 'Comparativo',
                           type : 'line',
                           yAxisIndex : 1,        
                           data : [0,0,0,0,0 ]
                    } ]
               });         
        }
       });
}

function dibujarLlamadasTotalesGeneralComparativo(fechaInicioP, fechaFinalP){
       
       $.ajax({
        url : 'obtenerLlamadasTotalesSegmento',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: {
             fechaInicio:fechaInicioP,
             fechaFinal:fechaFinalP
        },
        success : function(data) {
                    //$("#guardarComparativo").val(JSON.stringify(data));
                    var object = $("#comparativoLlamadasTotalesSegmentos").val();
                 var json = JSON.parse(object);
                    var arrayValuesOriginal = [];
                    var arrayValuesComparativo = [];
                    var cont = 0;
                 $.each(data, function(k, v) {
                    arrayValuesComparativo[cont] = v;
                        cont = cont + 1;
                    });
                var conteo = 0;
                 $.each(json, function(k, v) {
                    arrayValuesOriginal[conteo] = v;
                    conteo = conteo + 1;
                    });
                    
                var GeneralLlamadasBarras2 = echarts.init(document.getElementById('LlamadasTotalesPorSegmentos'),
                           theme);
                var valorAte = json['ATE'];
                var valorBE = json['BANCA EMPRESARIAL'];
                var valorPyme = json['PYME'];
                var valorPymeOffline = json['PYME OFFLINE'];
                var valorOffline = json['OFFLINE'];
                
                var valorAteC = data['ATE'];
                var valorBEC = data['BANCA EMPRESARIAL'];
                var valorPymeC = data['PYME'];
                var valorPymeOfflineC = data['PYME OFFLINE'];
                var valorOfflineC = data['OFFLINE'];
                if(valorAte == null){
                       valorAte = 0;
                }
                if(valorBE == null){
                       valorBE = 0;
                }
                if(valorPyme == null){
                       valorPyme = 0;
                }
                if(valorPymeOffline == null){
                       valorPymeOffline = 0;
                }
                if(valorOffline == null){
                       valorOffline = 0;
                }
                
                if(valorAteC == null){
                       valorAteC = 0;
                }
                if(valorBEC == null){
                       valorBEC = 0;
                }
                if(valorPymeC == null){
                       valorPymeC = 0;
                }
                if(valorPymeOfflineC == null){
                       valorPymeOfflineC = 0;
                }
                if(valorOfflineC == null){
                       valorOfflineC = 0;
                }
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
                           data : [ 'Llamadas', 'Comparativo' ],
                           y : 'bottom'
                    },
                    xAxis : [ {
                           type : 'category',
                           //data : [Object.keys(json)[0], Object.keys(json)[1], Object.keys(json)[2], Object.keys(json)[3], Object.keys(json)[4]]
                           data: ['ATE', 'BANCA EMPRESARIAL', 'PYME', 'PYME OFFLINE', 'OFFLINE']
                    } ],
                    yAxis : [ {
                           type : 'value',
                           name : 'Total',
                           axisLabel : {
                                  formatter : '{value}'
                           }
                    }, {
                           type : 'value',
                           name : 'Total',
                           axisLabel : {
                                  formatter : '{value}'
                           }
                    } ],
                    series : [{
                           name : 'Llamadas',
                           type : 'bar',                
                           data:[valorAte,valorBE,valorPyme,valorPymeOffline,valorOffline]
                    }, {
                           name : 'Comparativo',
                           type : 'line',
                           yAxisIndex : 1,        
                           data : [valorAteC,valorBEC,valorPymeC,valorPymeOfflineC,valorOfflineC]
                    } ]
               });         
        }
       });
       
}


/* Gráfica de familias */
function dibujarFamilias() {
	var opcionesSparkline = {
		type : 'line',
		width : '100%',
		lineColor : '#26B99A',
		fillColor : '#ffffff',
		lineWidth : 3,
		spotColor : '#34495E',
		minSpotColor : '#34495E'
	}
	$.ajax({
		url : 'chart',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		success : function(data) {
			var arrayValores = [];
			var arrayEtiquetas = [];
			var conteo = 0;
			$.each(data, function(k, v) {
				arrayEtiquetas[conteo] = k;
				arrayValores[conteo] = v;
				conteo = conteo + 1;
			});
			
			for(i = 0; i<=arrayValores.length; i++){
				$("#sparkline"+(i+1)+" span").text(arrayEtiquetas[i]);
				$("#sparkline"+(i+1)+" h2").text(arrayValores[i]);
			}
			
			$(".sparkline22").sparkline(arrayValores, opcionesSparkline);
		}
	});

}