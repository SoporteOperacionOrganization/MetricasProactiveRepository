/**
 * 
 */
/* Temas de gráficas */
// Colores Bar
var themeBar = {
	color : [ '#1DB7D0', '#0B676A', '#E8B027', '#70FDFF', '#0B676A', '#C01722',
			'#8FA508' ],

	title : {
		itemGap : 8,
		textStyle : {
			fontWeight : 'normal',
			color : '#408829'
		}
	},

	dataRange : {
		color : [ '#1f610a', '#97b58d' ]
	},

	toolbox : {
		color : [ '#FB2286', '#408829', '#408829', '#408829' ]
	},

	tooltip : {
		backgroundColor : 'rgba(0,0,0,0.5)',
		axisPointer : {
			type : 'line',
			lineStyle : {
				color : '#408829',
				type : 'dashed'
			},
			crossStyle : {
				color : '#408829'
			},
			shadowStyle : {
				color : 'rgba(200,200,200,0.3)'
			}
		}
	},

	dataZoom : {
		dataBackgroundColor : '#eee',
		fillerColor : 'rgba(64,136,41,0.2)',
		handleColor : '#408829'
	},
	grid : {
		borderWidth : 0
	},

	categoryAxis : {
		axisLine : {
			lineStyle : {
				color : '#408829'
			}
		},
		splitLine : {
			lineStyle : {
				color : [ '#eee' ]
			}
		}
	},

	valueAxis : {
		axisLine : {
			lineStyle : {
				color : '#408829'
			}
		},
		splitArea : {
			show : true,
			areaStyle : {
				color : [ 'rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)' ]
			}
		},
		splitLine : {
			lineStyle : {
				color : [ '#eee' ]
			}
		}
	},
	timeline : {
		lineStyle : {
			color : '#408829'
		},
		controlStyle : {
			normal : {
				color : '#408829'
			},
			emphasis : {
				color : '#408829'
			}
		}
	},

	k : {
		itemStyle : {
			normal : {
				color : '#68a54a',
				color0 : '#a9cba2',
				lineStyle : {
					width : 1,
					color : '#408829',
					color0 : '#86b379'
				}
			}
		}
	},
	map : {
		itemStyle : {
			normal : {
				areaStyle : {
					color : '#ddd'
				},
				label : {
					textStyle : {
						color : '#c12e34'
					}
				}
			},
			emphasis : {
				areaStyle : {
					color : '#99d2dd'
				},
				label : {
					textStyle : {
						color : '#c12e34'
					}
				}
			}
		}
	},
	force : {
		itemStyle : {
			normal : {
				linkStyle : {
					strokeColor : '#408829'
				}
			}
		}
	},
	chord : {
		padding : 4,
		itemStyle : {
			normal : {
				lineStyle : {
					width : 1,
					color : 'rgba(128, 128, 128, 0.5)'
				},
				chordStyle : {
					lineStyle : {
						width : 1,
						color : 'rgba(128, 128, 128, 0.5)'
					}
				}
			},
			emphasis : {
				lineStyle : {
					width : 1,
					color : 'rgba(128, 128, 128, 0.5)'
				},
				chordStyle : {
					lineStyle : {
						width : 1,
						color : 'rgba(128, 128, 128, 0.5)'
					}
				}
			}
		}
	},
	gauge : {
		startAngle : 225,
		endAngle : -45,
		axisLine : {
			show : true,
			lineStyle : {
				color : [ [ 0.2, '#86b379' ], [ 0.8, '#68a54a' ],
						[ 1, '#408829' ] ],
				width : 8
			}
		},
		axisTick : {
			splitNumber : 10,
			length : 12,
			lineStyle : {
				color : 'auto'
			}
		},
		axisLabel : {
			textStyle : {
				color : 'auto'
			}
		},
		splitLine : {
			length : 18,
			lineStyle : {
				color : 'auto'
			}
		},
		pointer : {
			length : '90%',
			color : 'auto'
		},
		title : {
			textStyle : {
				color : '#333'
			}
		},
		detail : {
			textStyle : {
				color : 'auto'
			}
		}
	},
	textStyle : {
		fontFamily : 'Arial, Verdana, sans-serif'
	}
};

// Colores Pie
var theme = {
	color : [ '#013F7A', '#1DB7D0', '#E8B027', '#000000', '#70FDFF', '#0B676A',
			'#C01722', '#F7DEB4', '#8FA508', '#A6A6A6' ],

	title : {
		itemGap : 8,
		textStyle : {
			fontWeight : 'normal',
			color : '#408829'
		}
	},

	dataRange : {
		color : [ '#1f610a', '#97b58d' ]
	},

	toolbox : {
		color : [ '#FB2286', '#408829', '#408829', '#408829' ]
	},

	tooltip : {
		backgroundColor : 'rgba(0,0,0,0.5)',
		axisPointer : {
			type : 'line',
			lineStyle : {
				color : '#408829',
				type : 'dashed'
			},
			crossStyle : {
				color : '#408829'
			},
			shadowStyle : {
				color : 'rgba(200,200,200,0.3)'
			}
		}
	},

	dataZoom : {
		dataBackgroundColor : '#eee',
		fillerColor : 'rgba(64,136,41,0.2)',
		handleColor : '#408829'
	},
	grid : {
		borderWidth : 0
	},

	categoryAxis : {
		axisLine : {
			lineStyle : {
				color : '#408829'
			}
		},
		splitLine : {
			lineStyle : {
				color : [ '#eee' ]
			}
		}
	},

	valueAxis : {
		axisLine : {
			lineStyle : {
				color : '#408829'
			}
		},
		splitArea : {
			show : true,
			areaStyle : {
				color : [ 'rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)' ]
			}
		},
		splitLine : {
			lineStyle : {
				color : [ '#eee' ]
			}
		}
	},
	timeline : {
		lineStyle : {
			color : '#408829'
		},
		controlStyle : {
			normal : {
				color : '#408829'
			},
			emphasis : {
				color : '#408829'
			}
		}
	},

	k : {
		itemStyle : {
			normal : {
				color : '#68a54a',
				color0 : '#a9cba2',
				lineStyle : {
					width : 1,
					color : '#408829',
					color0 : '#86b379'
				}
			}
		}
	},
	map : {
		itemStyle : {
			normal : {
				areaStyle : {
					color : '#ddd'
				},
				label : {
					textStyle : {
						color : '#c12e34'
					}
				}
			},
			emphasis : {
				areaStyle : {
					color : '#99d2dd'
				},
				label : {
					textStyle : {
						color : '#c12e34'
					}
				}
			}
		}
	},
	force : {
		itemStyle : {
			normal : {
				linkStyle : {
					strokeColor : '#408829'
				}
			}
		}
	},
	chord : {
		padding : 4,
		itemStyle : {
			normal : {
				lineStyle : {
					width : 1,
					color : 'rgba(128, 128, 128, 0.5)'
				},
				chordStyle : {
					lineStyle : {
						width : 1,
						color : 'rgba(128, 128, 128, 0.5)'
					}
				}
			},
			emphasis : {
				lineStyle : {
					width : 1,
					color : 'rgba(128, 128, 128, 0.5)'
				},
				chordStyle : {
					lineStyle : {
						width : 1,
						color : 'rgba(128, 128, 128, 0.5)'
					}
				}
			}
		}
	},
	gauge : {
		startAngle : 225,
		endAngle : -45,
		axisLine : {
			show : true,
			lineStyle : {
				color : [ [ 0.2, '#86b379' ], [ 0.8, '#68a54a' ],
						[ 1, '#408829' ] ],
				width : 8
			}
		},
		axisTick : {
			splitNumber : 10,
			length : 12,
			lineStyle : {
				color : 'auto'
			}
		},
		axisLabel : {
			textStyle : {
				color : 'auto'
			}
		},
		splitLine : {
			length : 18,
			lineStyle : {
				color : 'auto'
			}
		},
		pointer : {
			length : '90%',
			color : 'auto'
		},
		title : {
			textStyle : {
				color : '#333'
			}
		},
		detail : {
			textStyle : {
				color : 'auto'
			}
		}
	},
	textStyle : {
		fontFamily : 'Arial, Verdana, sans-serif'
	}
};

/* Fin temas de gráficas */
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

function dibujarFamilias(fechaInicioP, fechaFinalP, segmentoP) {
	/*
	 * var opcionesSparkline = { type : 'line', width : '100%', lineColor :
	 * '#26B99A', fillColor : '#ffffff', lineWidth : 3, spotColor : '#34495E',
	 * minSpotColor : '#34495E' }
	 */
	$.ajax({
		url : 'obtenerLlamadasFamilia',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP,
			segmento : segmentoP
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

			for (var a = 0, b/* ,txt='' */; b = arrayTemp[a]; ++a) {
				arrayValores[a] = b[1];
				arrayEtiquetas[a] = b[0];
			}
			for (i = 0; i <= arrayValores.length; i++) {
				var segmento = arrayEtiquetas[i].toString().split("-");
				$("#sparkline" + (i + 1) + " .sparkline-familia").text(
						segmento[0]);
				$("#sparkline" + (i + 1) + " .sparkline-segmento").text(
						segmento[1]);
				$("#sparkline" + (i + 1) + " .sparkline-contenido h2").text(
						arrayValores[i]);
			}
		}
	});

}

function dibujarServicios(fechaInicioP, fechaFinalP) {

	$.ajax({
		url : 'servicios',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP,
			segmento : obtenerURL()
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

function dibujarLlamadasTotalesFamiliaSegmentos(fechaInicioP, fechaFinalP,
		segmento) {
	$.ajax({
		url : 'obtenerLlamadasTotalesFamiliasSegmento',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP,
			segmento : segmento
		},
		success : function(data) {

			$("#comparativoLlamadasTotalesFamiliasSegmentos").val(
					JSON.stringify(data));
			var arrayValues = [];
			var cont = 0;
			$.each(data, function(k, v) {
				arrayValues[cont] = v;
				cont = cont + 1;
			});

			var GeneralLlamadasBarras2 = echarts.init(document
					.getElementById('LlamadasTotalesPorFamiliaSegmentos'),
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
					data : [ 'Llamadas', 'Comparativo' ],
					y : 'bottom'
				},
				xAxis : [ {
					type : 'category',
					data : Object.keys(data)
				// data: ['ATE', 'BANCA EMPRESARIAL', 'PYME', 'PYME OFFLINE',
				// 'OFFLINE']
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
				series : [ {
					name : 'Llamadas',
					type : 'bar',
					// data : [2,5,10,8,15]
					// data:[valorAte,valorBE,valorPyme,valorPymeOffline,valorOffline]
					data : arrayValues
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

function dibujarConcurrencia(fechaInicioP, fechaFinalP) {

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

			var arrayNames = Object.keys(data);
			var nameSegmento = "";

			switch (obtenerURL()) {
			case 'online':
				nameSegmento = "ATE"
				break;
			case 'offline':
				nameSegmento = "OFFLINE"
				break;
			case 'pyme':
				nameSegmento = "PYME"
				break;
			case 'empresarial':
				nameSegmento = "BANCA EMPRESARIAL"
				break;
			case 'pymeOffline':
				nameSegmento = "PYME OFFLINE"
				break;
			}

			for (i = 0; i < arrayValues.length; i++) {
				if (arrayNames[i] == nameSegmento) {
					var seg = arrayNames[i];
					var concu = (arrayValues[i] * 100 / total).toFixed(2);
				}
			}

			
			 document.getElementById("porcen").innerHTML = concu;
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
					text : seg,

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
					formatter : "{b} : {c} (%)"
				},
				legend : {
					orient : 'vertical',
					x : 10,
					y : 213,
					itemGap : 12,
					data : [ 'Llamadas' ],
				},
				toolbox : {
					show : false,
					feature : {
						mark : {
							show : false
						},
						saveAsImage : {
							show : true,
							title : "Save "
						}
					}
				},
				series : [ {
					name : '',
					type : 'pie',
					clockWise : false,
					radius : [ 65, 90 ],
					itemStyle : dataStyle,
					data : [ {
						value : concu,
						name : 'Llamadas'
					}, {
						value : 45,
						name : '',
						itemStyle : placeHolderStyle
					} ]
				} ]
			});

		}
	});
}

function dibujarClientesFrecuentes(fechaInicioP, fechaFinalP, segmentoP) {

	$.ajax({
		url : 'clientesFrecuentes',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP,
			segmento: segmentoP
		},

		success : function(data) {

			var arrayTemp = [];
			var arrayLlamadas = [];
			var arrayClientes = [];
			var conteo = 0;

			for (a in data) {
				arrayTemp.push([ a, data[a] ])
			}
			arrayTemp.sort(function(a, b) {
				return a[1] - b[1]
			});
			arrayTemp.reverse();

			for (var a = 0, b/* ,txt='' */; b = arrayTemp[a]; ++a) {
				arrayClientes[a] = b[0];
				arrayLlamadas[a] = b[1];
			}
			console.log(arrayClientes);
			console.log(arrayLlamadas);

			for (i = 0; i <= arrayLlamadas.length; i++) {
				$("#top" + (i + 1) + " p").text(arrayClientes[i]);
				$("#llamadas" + (i + 1)).text(arrayLlamadas[i]);
			}

			// document.getElementById("top10").val=arrayNames[0];

		}// fin function(data)
	});// fin $.ajax
}// fin dibujarClientesFrecuentes

