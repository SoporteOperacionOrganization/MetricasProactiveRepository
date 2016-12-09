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
/* Funciones por página */
var segmento = obtenerURL();

switch (segmento) {
case "general":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorSegmentos'), theme);
	var echartPie = echarts.init(document.getElementById('echart_pie'), theme);
	break;
case "empresarial":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'),
			theme);
	break;
case "online":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'),
			theme);
	break;
case "offline":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'),
			theme);
	break;
case "pyme":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'),
			theme);
	break;
case "pymeOffline":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'),
			theme);
	break;
default:
	break;
}

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
					var arrayValues = [];
					var cont = 0;
					var totalLlamadas = 0;
					$.each(data, function(k, v) {
						arrayValues[cont] = v;
						totalLlamadas = totalLlamadas + v;
						cont = cont + 1;
					});
					
					$("#diferenciaLlamadas span i").removeClass("fa-arrow-up");
					$("#diferenciaLlamadas span i").removeClass("fa-arrow-down");
					$("#diferenciaLlamadas span i").removeClass("fa-arrows-h");
					$("#diferenciaLlamadas span i i").text('');
					
					GeneralLlamadasBarras2 = echarts.init(document
							.getElementById('LlamadasTotalesPorSegmentos'),
							theme);
					$("#totalLlamadas").text(' '+totalLlamadas);
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
									title : "Ver como texto",
									lang : [ "Ver como texto", "Cerrar",
											"Ver como gráfica", ],
								},
								saveAsImage : {
									show : true,
									title : 'Descargar'
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
							data : [ 'Online', 'B.E.', 'Pyme', 'Pyme Off',
									'Offline' ]
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
									data : [ valorAte, valorBE, valorPyme,
											valorPymeOffline, valorOffline ],
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'top'
											}
										}
									},
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
			var totalComparativo = 0;
			var porcentajeDiferencia = 0;

			$.each(data, function(k, v) {
				arrayValuesComparativo[cont] = v;
				totalComparativo = totalComparativo + v;
				cont = cont + 1;
			});
			var conteo = 0;
			var totalOriginal = 0;
			$.each(json, function(k, v) {
				arrayValuesOriginal[conteo] = v;
				totalOriginal = totalOriginal + v;
				conteo = conteo + 1;
			});
			porcentajeDiferencia = (totalComparativo - totalOriginal) / totalOriginal;
			
			estilosPorcentajes(porcentajeDiferencia);
			
			$("#diferenciaLlamadas span i i").text(
					' '+porcentajeDiferencia.toFixed(2) + " %");

			GeneralLlamadasBarras2 = echarts.init(document
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
							title : "Ver como texto",
							lang : [ "Ver como texto", "Cerrar",
									"Ver como gráfica", ],
						},

						saveAsImage : {
							show : true,
							title : 'Descargar'
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
					data : [ 'Online', 'B.E.', 'Pyme', 'Pyme Off', 'Offline' ]
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
									valorPymeOffline, valorOffline ],
							itemStyle : {
								normal : {
									label : {
										show : true,
										position : 'top'
									}
								}
							},
						},
						{
							name : 'Comparativo',
							type : 'line',
							yAxisIndex : 1,
							data : [ valorAteC, valorBEC, valorPymeC,
									valorPymeOfflineC, valorOfflineC ],
							itemStyle : {
								normal : {
									label : {
										show : true,
										position : 'top'
									}
								}
							},
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
			var totalLlamadas = 0;
			var arrayValues = [];
			var cont = 0;
			$.each(data, function(k, v) {
				arrayValues[cont] = v;
				totalLlamadas = totalLlamadas + v;
				cont = cont + 1;
			});
			$("#totalLlamadas").text(' '+totalLlamadas);
			$("#diferenciaLlamadas span i").removeClass("fa-arrow-up");
			$("#diferenciaLlamadas span i").removeClass("fa-arrow-down");
			$("#diferenciaLlamadas span i").removeClass("fa-arrows-h");
			$("#diferenciaLlamadas span i i").text('');

			GeneralLlamadasBarras2 = echarts.init(document
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
							title : "Ver como texto",
							lang : [ "Ver como texto", "Cerrar",
									"Ver como gráfica", ],
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
					data : Object.keys(data),
					axisLabel : {
						interval: 0,
						rotate: 25,
						textStyle : {
							fontSize : 9
						}
					}
				} ],
				yAxis : [ {
					type : 'value',
					name : 'Total filtro',
					axisLabel : {
						formatter : '{value}'
					}
				}, {
					type : 'value',
					name : 'Total comparativo',
					axisLabel : {
						formatter : '{value}'
					}
				} ],
				series : [ {
					name : 'Llamadas',
					type : 'bar',
					// data : [2,5,10,8,15]
					// data:[valorAte,valorBE,valorPyme,valorPymeOffline,valorOffline]
					data : arrayValues,
					itemStyle : {
						normal : {
							label : {
								show : true,
								position : 'top'
							}
						}
					},
				}, {
					name : 'Comparativo',
					type : 'line',
					yAxisIndex : 1,
					data : [ ]
				} ]
			});

		}
	});
}

function dibujarLlamadasTotalesFamiliaSegmentoComparativo(fechaInicioOriginalP,
		fechaFinalOriginalP, fechaInicioComparativo, fechaFinalComparativo,
		segmento) {
	$
			.ajax({
				url : 'obtenerLlamadasTotalesFamiliasSegmentoComparativo',
				dataType : "json",
				contentType : "application/json;charset=utf-8",
				data : {
					fechaInicioOriginal : fechaInicioOriginalP,
					fechaFinalOriginal : fechaFinalOriginalP,
					fechaInicio : fechaInicioComparativo,
					fechaFinal : fechaFinalComparativo,
					segmento : segmento
				},
				success : function(data) {

					var arrayEtiquetas = [];
					var arrayValoresFiltro = [];
					var arrayValoresComparativo = [];
					var totalLlamadas = 0;
					cont = 0;
					var totalComparativo = 0;
                    var porcentajeDiferencia = 0;
					for ( var key in data) {
						if (data.hasOwnProperty(key)) {
							arrayEtiquetas[cont] = Object.keys(data)[cont];
							arrayValoresFiltro[cont] = data[Object.keys(data)[cont]][0];
							totalLlamadas = totalLlamadas
									+ data[Object.keys(data)[cont]][0];
							totalComparativo = totalComparativo + data[Object.keys(data)[cont]][1];
							arrayValoresComparativo[cont] = data[Object
									.keys(data)[cont]][1];
							cont = cont + 1;
						}
					}
					porcentajeDiferencia = (totalComparativo - totalLlamadas) / totalLlamadas;
					
					estilosPorcentajes(porcentajeDiferencia);
					
					$("#diferenciaLlamadas span i i").text(
							' '+porcentajeDiferencia.toFixed(2) + " %");
					
					GeneralLlamadasBarras2 = echarts
							.init(
									document
											.getElementById('LlamadasTotalesPorFamiliaSegmentos'),
									theme);
					$("#totalLlamadas").text(' '+totalLlamadas);
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
											title : "Ver como texto",
											lang : [ "Ver como texto", "Cerrar",
													"Ver como gráfica", ],
										},
										saveAsImage : {
											show : true,
											title : 'Descargar'
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
									data : arrayEtiquetas,
									axisLabel : {
										interval: 0,
										rotate: 25,
										textStyle : {
											fontSize : 9
										}
									}
								// data: [Object.keys(data)[0],
								// Object.keys(data)[1], Object.keys(data)[2],
								// Object.keys(data)[3], Object.keys(data)[4],
								// Object.keys(data)[5], Object.keys(data)[6],
								// Object.keys(data)[7], Object.keys(data)[8],
								// Object.keys(data)[9]]
								} ],
								yAxis : [ {
									type : 'value',
									name : 'Total filtro',
									axisLabel : {
										formatter : '{value}'
									}
								}, {
									type : 'value',
									name : 'Total comparativo',
									axisLabel : {
										formatter : '{value}'
									}
								} ],
								series : [ {
									name : 'Llamadas',
									type : 'bar',
									data : arrayValoresFiltro,
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'top'
											}
										}
									},
								}, {
									name : 'Comparativo',
									type : 'line',
									stack : 'area',
									yAxisIndex : 1,
									data : arrayValoresComparativo
								} ]
							});
				}
			});
}

function dibujarFamilias(fechaInicioP, fechaFinalP, segmentoP) {
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

			echartPie = echarts.init(document.getElementById('echart_pie'),
					theme);

			echartPie.setOption({
				tooltip : {
					trigger : 'item',
					formatter : "{a} <br/>{b} : {c} ({d}%)"
				},
				legend : {
					x : 'left',
					y : 'top',
					orient : 'vertical'
				},
				toolbox : {
					show : true,
					feature : {
						mark : {
							show : true
						},
						dataView : {
							show : true
						},
						saveAsImage : {
							show : true,
							title : "Save"
						}
					}
				},
				calculable : true,
				series : [ {
					type : 'pie',
					radius : '40%',
					center : [ '50%', '40%' ],
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
					var vacio = (100 - concu).toFixed(2);
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
						fontSize : 12,
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
						value : vacio,
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
			segmento : segmentoP
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

			for (i = 0; i <= arrayLlamadas.length; i++) {
				$("#top" + (i + 1) + " p").text(arrayClientes[i]);
				$("#llamadas" + (i + 1)).text(arrayLlamadas[i]);
			}

			// document.getElementById("top10").val=arrayNames[0];

		}// fin function(data)
	});// fin $.ajax
}// fin dibujarClientesFrecuentes

