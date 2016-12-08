/**
 * 
 */
function dibujarLlamadasTotalesGeneral(fechaInicioP, fechaFinalP) {
	$
			.ajax({
				url : 'obtenerLlamadasTotalesSegmento',
				dataType : "json",
				contentType : "application/json;charset=utf-8",
				data : {
					fechaInicio : fechaInicioP,
					fechaFinal : fechaFinalP
				},
				success : function(data) {
					$("#comparativoLlamadasTotalesSegmentos").val(
							JSON.stringify(data));
					// alert(JSON.stringify(data));
					// alert(Object.keys(data));

					// alert(object);
					// var json = JSON.stringify(eval("(" + object + ")"));

					// var json = JSON.parse(object);
					// alert(json.PYME);
					var arrayValues = [];
					var cont = 0;
					$.each(data, function(k, v) {
						arrayValues[cont] = v;
						cont = cont + 1;
					});

					var GeneralLlamadasBarras2 = echarts.init(document
							.getElementById('LlamadasTotalesPorSegmentos'),
							theme);
					var valorAte = data['ATE'];
					var valorBE = data['BANCA EMPRESARIAL'];
					var valorPyme = data['PYME'];
					var valorPymeOffline = data['PYME OFFLINE'];
					var valorOffline = data['OFFLINE'];
					if (valorAte == null) {
						valorAte = 0;
					}
					if (valorBE == null) {
						valorBE = 0;
					}
					if (valorPyme == null) {
						valorPyme = 0;
					}
					if (valorPymeOffline == null) {
						valorPymeOffline = 0;
					}
					if (valorOffline == null) {
						valorOffline = 0;
					}

					GeneralLlamadasBarras2
							.setOption({
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
											lang : [ "Text View", "Close",
													"Refresh", ],
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
									// data : Object.keys(data)
									data : [ 'ATE', 'BANCA EMPRESARIAL',
											'PYME', 'PYME OFFLINE', 'OFFLINE' ]
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
								series : [
										{
											name : 'Llamadas',
											type : 'bar',
											// data : [2,5,10,8,15]
											data : [ valorAte, valorBE,
													valorPyme,
													valorPymeOffline,
													valorOffline ]
										}, {
											name : 'Comparativo',
											type : 'line',
											yAxisIndex : 1,
											data : [ 0, 0, 0, 0, 0 ]
										} ]
							});
				}
			});
}

function dibujarLlamadasTotalesGeneralComparativo(fechaInicioP, fechaFinalP) {

	$.ajax({
		url : 'obtenerLlamadasTotalesSegmento',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP
		},
		success : function(data) {
			// $("#guardarComparativo").val(JSON.stringify(data));
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

			var GeneralLlamadasBarras2 = echarts.init(document
					.getElementById('LlamadasTotalesPorSegmentos'), theme);
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
			if (valorAte == null) {
				valorAte = 0;
			}
			if (valorBE == null) {
				valorBE = 0;
			}
			if (valorPyme == null) {
				valorPyme = 0;
			}
			if (valorPymeOffline == null) {
				valorPymeOffline = 0;
			}
			if (valorOffline == null) {
				valorOffline = 0;
			}

			if (valorAteC == null) {
				valorAteC = 0;
			}
			if (valorBEC == null) {
				valorBEC = 0;
			}
			if (valorPymeC == null) {
				valorPymeC = 0;
			}
			if (valorPymeOfflineC == null) {
				valorPymeOfflineC = 0;
			}
			if (valorOfflineC == null) {
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
					// data : [Object.keys(json)[0], Object.keys(json)[1],
					// Object.keys(json)[2], Object.keys(json)[3],
					// Object.keys(json)[4]]
					data : [ 'ATE', 'BANCA EMPRESARIAL', 'PYME',
							'PYME OFFLINE', 'OFFLINE' ]
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
				series : [
						{
							name : 'Llamadas',
							type : 'bar',
							data : [ valorAte, valorBE, valorPyme,
									valorPymeOffline, valorOffline ]
						},
						{
							name : 'Comparativo',
							type : 'line',
							yAxisIndex : 1,
							data : [ valorAteC, valorBEC, valorPymeC,
									valorPymeOfflineC, valorOfflineC ]
						} ]
			});
		}
	});

}

function dibujarServiciosGeneral(fechaInicioP, fechaFinalP) {
	$.ajax({
		url : 'serviciosS',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP
		},
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
					}, {
						value : arrayValues[1],
						name : arrayNames[1]
					}, {
						value : arrayValues[2],
						name : arrayNames[2]
					}, {
						value : arrayValues[3],
						name : arrayNames[3]
					}, {
						value : arrayValues[4],
						name : arrayNames[4]
					}, {
						value : arrayValues[5],
						name : arrayNames[5]
					}, {
						value : arrayValues[6],
						name : arrayNames[6]
					}, {
						value : arrayValues[7],
						name : arrayNames[7]
					}, {
						value : arrayValues[8],
						name : arrayNames[8]
					}, {
						value : arrayValues[9],
						name : arrayNames[9]
					} ]
				} ]
			});

		}
	});
}

function dibujarConcurrenciaSeg(fechaInicioP, fechaFinalP) {
	$.ajax({
		url : 'concurrencia',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP
		},
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

			var echartMiniPie = echarts.init(document
					.getElementById('echart_mini_pie'), theme);

			echartMiniPie.setOption({
				title : {
					text : 'Porcentaje',

					x : 'center',
					y : 'center',
					itemGap : 20,
					textStyle : {
						color : 'rgba(30,144,255,0.8)',
						fontSize : 15,
						fontWeight : 'bolder'
					}
				},
				tooltip : {
					show : true,
					formatter : "{a} <br/>{b} : {c} ({d}%)"
				},
				legend : {
					orient : 'vertical',
					x : 10,
					y : 213,
					itemGap : 12,
					data : [ '68%Something #1' ],
				},
				toolbox : {
					show : true,
					feature : {
						mark : {
							show : true
						},
						dataView : {
							show : true,
							title : "Text View",
							lang : [ "Text View", "Close", "Refresh", ],
							readOnly : false
						},
						
						saveAsImage : {
							show : true,
							title : "Save "
						}
					}
				},
				series : [ {
					name : '1',
					type : 'pie',
					clockWise : false,
					radius : [ 65, 90 ],
					itemStyle : dataStyle,
					data : [ {
						value : arrayValues[0] * 100 / total,
						name : '68%Something #1'
					}, {
						value : 32,
						name : 'invisible',
						itemStyle : placeHolderStyle
					} ]
				} ]
			});

		}
	});
}

function dibujarFamilias(fechaInicioP, fechaFinalP, segmentoP) {
	/*var opcionesSparkline = {
		type : 'line',
		width : '100%',
		lineColor : '#26B99A',
		fillColor : '#ffffff',
		lineWidth : 3,
		spotColor : '#34495E',
		minSpotColor : '#34495E'
	}*/
	$.ajax({
		url : 'obtenerLlamadasFamilia',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP,
			segmento: segmentoP
		},
		success : function(data) {

			var arrayTemp = [];
			var arrayValores = [];
			var arrayEtiquetas = [];
			var conteo = 0;

			for (a in data) {
				arrayTemp.push([ a, data[a] ])
			}
			arrayTemp.sort(function(a, b) {
				return a[1] - b[1]
			});
			arrayTemp.reverse();

			for (var a = 0, b/*,txt=''*/; b = arrayTemp[a]; ++a) {
				arrayValores[a] = b[1];
				arrayEtiquetas[a] = b[0];
			}
			//console.log(arrayValores);

			for (i = 0; i <= arrayValores.length; i++) {
				$("#sparkline" + (i + 1) + " span").text(arrayEtiquetas[i]);
				$("#sparkline" + (i + 1) + " h2").text(arrayValores[i]);
			}

			//$(".sparkline22").sparkline(arrayValores, opcionesSparkline);
		}
	});

}
