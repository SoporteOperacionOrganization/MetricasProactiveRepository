/**
 * 
 */
/* Temas de gráficas */
var theme = {
	color : [ '#042F8A', '#02A3A6', '#8AB206 ', '#193441', '#90D7C4',
			'#150D3F', '#4E7AC7', '#05070D', '#436917', '#91AA9D' ],

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

/*
 * Homologación de gráficas
 * 
 * Solo se declaran las opciones una vez y se inicializan o se pasan objetos
 * según corresponda.
 * 
 */

/* Gráfica de llamadas totales y por familia */

var opcionesGraficaBarra = {
	legend : {
		padding : 5,
		itemGap : 10,
		data : [ 'Llamadas totales' ]
	},
	toolbox : {
		show : true,
		feature : {
			restore : {
				show : true,
				title : 'Restaurar'
			},
			magicType : {
				show : true,
				type : [ 'line', 'bar' ],
				title : {
					line : 'Línea',
					bar : 'Barras'
				}
			},
			saveAsImage : {
				title : 'Descargar'
			}
		}
	},
	title : {
		text : '',
		subtext : '',
		x : 'left',
		y : 'top',
		textAlign : null
	},
	tooltip : {
		trigger : 'axis',
	},
	xAxis : {
		type : 'category',
		show : true,
		data : [],
		axisLabel : {
			interval : 0,
			rotate : -20,
			textStyle : {
				fontSize : 9
			}
		}
	},
	yAxis : {
		type : 'value',
		show : true,
		axisLabel : {
			formatter : '{value}'
		}
	},
	series : [],
	grid : {
		height : '50%',
		y : '20%'
	}
};

/* Fin gráfica de llamadas totales y por familia */

/* Gráfica de pie. Servicios */

var opcionesGraficaPie = {
	tooltip : {
		trigger : 'item',
		formatter : "{b}:<br/>{c} ({d}%)"
	},
	legend : {
		show : false,
		padding : 5,
		y : 'bottom',
		data : [],
		textStyle : {
			fontSize : 9
		}
	},
	title : {
		text : '',
		subtext : '',
		x : 'left',
		y : 'top',
		textAlign : null
	},
	toolbox : {
		show : true,
		feature : {
			saveAsImage : {
				title : 'Descargar'
			}
		}
	},
	series : {
		type : 'pie',
		radius : '55%',
		// center : [ '50%', '40%' ],
		data : []
	}
}

/* Fin gráfica de pie. Servicios */

/* Gráfica de pie. Porcentaje */

var opcionesGraficaDona = {
	title : {
		text : '',
		x : 'center',
		y : 'center',
		textStyle : {
			color : 'rgba(30,144,255,0.8)',
			fontSize : 12,
			fontWeight : 'bolder'
		},
		subtextStyle : {
			fontSize : 10
		}
	},
	tooltip : {
		show : false,
		formatter : "{b}:<br/>{c}%"
	},
	legend : {
		orient : 'vertical',
		x : 10,
		y : 200,
		itemGap : 12,
		data : [],
	},
	toolbox : {
		show : true,
		feature : {
			saveAsImage : {
				title : 'Descargar'
			}
		}
	},
	series : []
};

/* Fin gráfica de pie. Porcentaje */

var segmento = obtenerURL();

function dibujarLlamadasTotalesGeneral(fechaInicioP, fechaFinalP) {
	GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorSegmentos'), theme);

	GeneralLlamadasBarras2.showLoading({
		text : "Cargando..."
	});

	$.ajax({
		url : 'obtenerLlamadasTotalesSegmento',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP
		},
		success : function(data) {
			if (JSON.stringify(data) === "{}") {
				$("#diferenciaLlamadas").css("display", "none");
				/*
				 * $("#LlamadasTotalesPorSegmentos").css("display", "none");
				 * $("#LlamadasTotalesPorSegmentosSinDatos").css("display",
				 * "block");
				 */
				/*
				 * $("#calendarioComparativo").parent().parent().parent().css(
				 * "display", "none");
				 */
				// $("#totalLlamadas").text(' 0');
				$("#calendarioComparativo").addClass("deshabilitado");

				GeneralLlamadasBarras2.hideLoading();

				opcionesGraficaBarra.toolbox.show = false;

				opcionesGraficaBarra.xAxis.data = [];

				opcionesGraficaBarra.series = [];

				opcionesGraficaBarra.series.push({
					name : 'Llamadas totales',
					type : 'bar',
					data : []
				});

				opcionesGraficaBarra.title.text = 'Total de llamadas 0';
				opcionesGraficaBarra.title.subtext = 'Del ' + fechaInicioP
						+ ' al ' + fechaFinalP;
				opcionesGraficaBarra.title.x = 'left';
				opcionesGraficaBarra.title.y = 'top';

				opcionesGraficaBarra.grid.height = '70%';
			} else {
				$("#diferenciaLlamadas").css("display", "block");
				/*
				 * $("#LlamadasTotalesPorSegmentos").css("display", "block");
				 * $("#LlamadasTotalesPorSegmentosSinDatos") .css("display",
				 * "none");
				 */
				/*
				 * $("#calendarioComparativo").parent().parent().parent().css(
				 * "display", "block");
				 */
				$("#calendarioComparativo").removeClass("deshabilitado");

				var arrayConsulta = [];
				var cont = 0;
				var totalLlamadas = 0;

				var arrayEtiquetas = [];
				var arrayTotales = [];
				$.each(data, function(k, v) {
					arrayConsulta.push({
						segmento : k,
						valor : v
					});
					totalLlamadas = totalLlamadas + v;
					cont = cont + 1;
				});

				var arrayConsultaOrdenado = arrayConsulta.sort(function(a, b) {
					return a.valor - b.valor;
				});
				arrayConsultaOrdenado.reverse();
				for (var i = 0; i < arrayConsultaOrdenado.length; i++) {
					arrayEtiquetas[i] = arrayConsultaOrdenado[i]["segmento"];
					arrayTotales[i] = arrayConsultaOrdenado[i]["valor"];
				}

				$("#diferenciaLlamadas span i").removeClass("fa-arrow-up");
				$("#diferenciaLlamadas span i").removeClass("fa-arrow-down");
				$("#diferenciaLlamadas span i").removeClass("fa-arrows-h");
				$("#diferenciaLlamadas span i i").text('');
				/* $("#totalLlamadas").text(' ' + totalLlamadas); */

				GeneralLlamadasBarras2.hideLoading();

				opcionesGraficaBarra.xAxis.show = true;

				opcionesGraficaBarra.yAxis.show = true;

				opcionesGraficaBarra.toolbox.show = true;

				opcionesGraficaBarra.title.text = 'Total de llamadas '
						+ totalLlamadas;
				opcionesGraficaBarra.title.subtext = 'Del ' + fechaInicioP
						+ ' al ' + fechaFinalP;
				opcionesGraficaBarra.title.x = 'left';
				opcionesGraficaBarra.title.y = 'top';
				opcionesGraficaBarra.title.textAlign = null;

				opcionesGraficaBarra.xAxis.data = arrayEtiquetas;

				opcionesGraficaBarra.series = [];

				opcionesGraficaBarra.series.push({
					name : 'Llamadas totales',
					type : 'bar',
					data : arrayTotales,
					itemStyle : {
						normal : {
							label : {
								show : true,
								position : 'top'
							}
						}
					},
					barMaxWidth : '100'
				});

			}
			GeneralLlamadasBarras2.setOption(opcionesGraficaBarra);
		}
	});
}

function dibujarLlamadasTotalesGeneralComparativo(fechaInicioOriginalP,
		fechaFinalOriginalP, fechaInicioP, fechaFinalP) {
	GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorSegmentos'), theme);

	GeneralLlamadasBarras2.showLoading({
		text : "Cargando..."
	});

	$
			.ajax({
				url : 'obtenerLlamadasTotalesSegmentoComparativo',
				dataType : "json",
				contentType : "application/json;charset=utf-8",
				data : {
					fechaInicioOriginal : fechaInicioOriginalP,
					fechaFinalOriginal : fechaFinalOriginalP,
					fechaInicio : fechaInicioP,
					fechaFinal : fechaFinalP
				},
				success : function(data) {
					var arrayEtiquetas = [];
					var arrayValoresFiltro = [];
					var arrayValoresComparativo = [];
					var totalLlamadas = 0;
					cont = 0;
					var totalComparativo = 0;
					var porcentajeDiferencia = 0;

					var arrayConsulta = [];
					var arrayTotalesFiltro = [];
					var arrayTotalesComparativo = [];

					$.each(data, function(k, v) {
						arrayConsulta.push({
							segmento : k,
							vFiltro : v[0],
							vComparativo : v[1]
						});
					});

					var arrayConsultaOrdenado = arrayConsulta.sort(function(a,
							b) {
						return a.vFiltro - b.vFiltro;
					});
					arrayConsultaOrdenado.reverse();

					for (var i = 0; i < arrayConsultaOrdenado.length; i++) {
						arrayEtiquetas[i] = arrayConsultaOrdenado[i]["segmento"];
						arrayTotalesFiltro[i] = arrayConsultaOrdenado[i]["vFiltro"];
						arrayTotalesComparativo[i] = arrayConsultaOrdenado[i]["vComparativo"];
						totalLlamadas = totalLlamadas
								+ arrayConsultaOrdenado[i]["vFiltro"];
						totalComparativo = totalComparativo
								+ arrayConsultaOrdenado[i]["vComparativo"];
					}
					porcentajeDiferencia = (totalComparativo - totalLlamadas)
							/ totalLlamadas;

					estilosPorcentajes(porcentajeDiferencia);

					$("#diferenciaLlamadas span i i").text(
							' ' + porcentajeDiferencia.toFixed(2) + " %");
					// $("#totalLlamadas").text(' ' + totalLlamadas);

					GeneralLlamadasBarras2.hideLoading();

					var tituloComparativo = 'Llamadas del ' + fechaInicioP
							+ ' al ' + fechaFinalP;

					opcionesGraficaBarra.legend.data.push(tituloComparativo);

					var longitudSerie = opcionesGraficaBarra.series.length;

					if (longitudSerie > 1) {
						opcionesGraficaBarra.series.pop();
					}

					opcionesGraficaBarra.xAxis.data = arrayEtiquetas;

					opcionesGraficaBarra.series.push({
						name : tituloComparativo,
						type : 'line',
						data : arrayTotalesComparativo
					});

					opcionesGraficaBarra.title.text = 'Total de llamadas '
							+ totalLlamadas;

					GeneralLlamadasBarras2.setOption(opcionesGraficaBarra);
				}
			});

}

function dibujarLlamadasTotalesFamiliaSegmentos(fechaInicioP, fechaFinalP,
		segmento) {
	GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'), theme);

	GeneralLlamadasBarras2.showLoading({
		text : "Cargando..."
	});

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
			if (JSON.stringify(data) === "{}") {
				$("#diferenciaLlamadas").css("display", "none");
				/*
				 * $("#calendarioComparativo").parent().parent().parent().css(
				 * "display", "none");
				 */
				$("#calendarioComparativo").addClass("deshabilitado");

				GeneralLlamadasBarras2.hideLoading();

				// opcionesGraficaBarra.xAxis.show = false;

				// opcionesGraficaBarra.yAxis.show = false;

				opcionesGraficaBarra.toolbox.show = false;

				opcionesGraficaBarra.xAxis.data = [];

				opcionesGraficaBarra.series = [];

				opcionesGraficaBarra.series.push({
					name : 'Llamadas totales',
					type : 'bar',
					data : []
				});

				opcionesGraficaBarra.title.text = 'Total de llamadas 0';
				opcionesGraficaBarra.title.subtext = 'Del ' + fechaInicioP
						+ ' al ' + fechaFinalP;
				opcionesGraficaBarra.title.x = 'left';
				opcionesGraficaBarra.title.y = 'top';

				opcionesGraficaBarra.grid.height = '70%';
				/*
				 * opcionesGraficaBarra.title.text = 'No se encontraron datos';
				 * opcionesGraficaBarra.title.subtext = '';
				 * opcionesGraficaBarra.title.x = '50%';
				 * opcionesGraficaBarra.title.y = '45%';
				 * opcionesGraficaBarra.title.textAlign = 'center';
				 */

			} else {
				$("#diferenciaLlamadas").css("display", "block");
				$("#calendarioComparativo").removeClass("deshabilitado");
				/*
				 * $("#calendarioComparativo").parent().parent().parent().css(
				 * "display", "block");
				 */

				var totalLlamadas = 0;
				var arrayConsulta = [];
				var arrayEtiquetas = [];
				var arrayTotales = [];
				var cont = 0;
				$.each(data, function(k, v) {
					arrayConsulta.push({
						segmento : k,
						valor : v
					});
					totalLlamadas = totalLlamadas + v;
					cont = cont + 1;
				});
				var arrayConsultaOrdenado = arrayConsulta.sort(function(a, b) {
					return a.valor - b.valor;
				});
				arrayConsultaOrdenado.reverse();

				for (var i = 0; i < arrayConsultaOrdenado.length; i++) {
					arrayEtiquetas[i] = arrayConsultaOrdenado[i]["segmento"];
					arrayTotales[i] = arrayConsultaOrdenado[i]["valor"];
				}

				$("#diferenciaLlamadas span i").removeClass("fa-arrow-up");
				$("#diferenciaLlamadas span i").removeClass("fa-arrow-down");
				$("#diferenciaLlamadas span i").removeClass("fa-arrows-h");
				$("#diferenciaLlamadas span i i").text('');

				GeneralLlamadasBarras2.hideLoading();

				opcionesGraficaBarra.xAxis.show = true;

				opcionesGraficaBarra.yAxis.show = true;

				opcionesGraficaBarra.toolbox.show = true;

				opcionesGraficaBarra.title.text = 'Total de llamadas '
						+ totalLlamadas;
				opcionesGraficaBarra.title.subtext = 'Del ' + fechaInicioP
						+ ' al ' + fechaFinalP;
				opcionesGraficaBarra.title.x = 'left';
				opcionesGraficaBarra.title.y = 'top';
				opcionesGraficaBarra.title.textAlign = null;

				opcionesGraficaBarra.xAxis.data = arrayEtiquetas;

				opcionesGraficaBarra.series = [];

				opcionesGraficaBarra.series.push({
					name : 'Llamadas totales',
					type : 'bar',
					data : arrayTotales,
					itemStyle : {
						normal : {
							label : {
								show : true,
								position : 'top'
							}
						}
					},
					barMaxWidth : '100'
				});

				opcionesGraficaBarra.grid.height = '50%';
			}
			GeneralLlamadasBarras2.setOption(opcionesGraficaBarra);
		}
	});
}

function dibujarLlamadasTotalesFamiliaSegmentoComparativo(fechaInicioOriginalP,
		fechaFinalOriginalP, fechaInicioComparativo, fechaFinalComparativo,
		segmento) {
	GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'), theme);

	GeneralLlamadasBarras2.showLoading({
		text : "Cargando..."
	});
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

					var arrayConsulta = [];
					var arrayTotalesFiltro = [];
					var arrayTotalesComparativo = [];

					$.each(data, function(k, v) {
						arrayConsulta.push({
							segmento : k,
							vFiltro : v[0],
							vComparativo : v[1]
						});
					});

					var arrayConsultaOrdenado = arrayConsulta.sort(function(a,
							b) {
						return a.vFiltro - b.vFiltro;
					});
					arrayConsultaOrdenado.reverse();

					for (var i = 0; i < arrayConsultaOrdenado.length; i++) {
						arrayEtiquetas[i] = arrayConsultaOrdenado[i]["segmento"];
						arrayTotalesFiltro[i] = arrayConsultaOrdenado[i]["vFiltro"];
						arrayTotalesComparativo[i] = arrayConsultaOrdenado[i]["vComparativo"];
						totalLlamadas = totalLlamadas
								+ arrayConsultaOrdenado[i]["vFiltro"];
						totalComparativo = totalComparativo
								+ arrayConsultaOrdenado[i]["vComparativo"];
					}

					porcentajeDiferencia = (totalComparativo - totalLlamadas)
							/ totalLlamadas;

					estilosPorcentajes(porcentajeDiferencia);

					$("#diferenciaLlamadas span i i").text(
							' ' + porcentajeDiferencia.toFixed(2) + " %");
					// $("#totalLlamadas").text(' ' + totalLlamadas);

					GeneralLlamadasBarras2.hideLoading();

					var tituloComparativo = 'Llamadas del '
							+ fechaInicioComparativo + ' al '
							+ fechaFinalComparativo;

					opcionesGraficaBarra.legend.data.push(tituloComparativo);

					var longitudSerie = opcionesGraficaBarra.series.length;

					if (longitudSerie > 1) {
						opcionesGraficaBarra.series.pop();
					}

					opcionesGraficaBarra.xAxis.data = arrayEtiquetas;

					opcionesGraficaBarra.series.push({
						name : tituloComparativo,
						type : 'line',
						data : arrayTotalesComparativo
					});

					opcionesGraficaBarra.title.text = 'Total de llamadas '
							+ totalLlamadas/*
											 * + ' | Comparado con ' +
											 * totalComparativo
											 */;
					/*
					 * opcionesGraficaBarra.title.subtext = 'Del ' +
					 * fechaInicioOriginalP + ' al ' + fechaFinalOriginalP + ' |
					 * Comparación del ' + fechaInicioComparativo + ' al ' +
					 * fechaFinalComparativo;
					 */

					GeneralLlamadasBarras2.setOption(opcionesGraficaBarra);
				}
			});
}

function dibujarFamilias(fechaInicioP, fechaFinalP, segmentoP) {
	$
			.ajax({
				url : 'obtenerLlamadasFamilia',
				dataType : "json",
				contentType : "application/json;charset=utf-8",
				data : {
					fechaInicio : fechaInicioP,
					fechaFinal : fechaFinalP,
					segmento : segmentoP
				},
				success : function(data) {
					if (JSON.stringify(data) === "{}") {
						$("#llamadasFamilia").css("display", "none");
						$("#llamadasFamilia").parent().removeClass(
								"fixed_height_390");
						$("#llamadasFamiliaSinDatos").css("display", "block");
					} else {
						$("#llamadasFamilia").css("display", "table");
						$("#llamadasFamilia").parent().addClass(
								"fixed_height_390");
						$("#llamadasFamiliaSinDatos").css("display", "none");

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

						for (i = 1; i <= 9; i++) {
							$("#sparkline" + (i) + " .sparkline-familia").text(
									"");
							$("#sparkline" + (i) + " .sparkline-segmento")
									.text("");
							$("#sparkline" + (i) + " .sparkline-contenido h2")
									.text("");
						}

						for (i = 0; i <= arrayValores.length; i++) {
							var segmento = arrayEtiquetas[i].toString().split(
									"-");
							$("#sparkline" + (i + 1) + " .sparkline-familia")
									.text(segmento[0]);
							$("#sparkline" + (i + 1) + " .sparkline-segmento")
									.text(segmento[1]);
							$(
									"#sparkline" + (i + 1)
											+ " .sparkline-contenido h2").text(
									arrayValores[i]);
						}

					}

				}
			});

}

function dibujarServicios(fechaInicioP, fechaFinalP) {
	echartPie = echarts.init(document.getElementById('echart_pie'), theme);
	echartPie.showLoading({
		text : "Cargando..."
	});
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

			if (JSON.stringify(data) === "{}") {
				echartPie.hideLoading();
				/*
				 * $("#echart_pie").parent().parent().removeClass(
				 * "fixed_height_320");
				 */
				/*
				 * $("#echart_pie").css("display", "none");
				 * $("#echart_pieSinDatos").css("display", "block");
				 */

				opcionesGraficaPie.toolbox.show = false;

				opcionesGraficaPie.series.data = [];

				opcionesGraficaPie.legend.data = [];

				opcionesGraficaPie.title.text = 'Total de servicios 0';
				opcionesGraficaPie.title.subtext = 'Del ' + fechaInicioP
						+ ' al ' + fechaFinalP;

			} else {
				/*
				 * $("#echart_pie").parent().parent().addClass(
				 * "fixed_height_320"); $("#echart_pie").css("display",
				 * "block"); $("#echart_pieSinDatos").css("display", "none");
				 */

				var arrayValues = [];
				var totalValores = 0;
				var cont = 0;
				$.each(data, function(k, v) {
					arrayValues[cont] = v;

					totalValores += arrayValues[cont];

					cont = cont + 1;

				});
				var arrayNames = Object.keys(data);

				echartPie.hideLoading();

				opcionesGraficaPie.toolbox.show = true;

				opcionesGraficaPie.series.data = [];

				opcionesGraficaPie.legend.data = [];

				opcionesGraficaPie.title.text = 'Total de servicios '
						+ totalValores;
				opcionesGraficaPie.title.subtext = 'Del ' + fechaInicioP
						+ ' al ' + fechaFinalP;

				for (var i = 0; i < arrayValues.length; i++) {

					opcionesGraficaPie.legend.data.push(arrayNames[i]);

					opcionesGraficaPie.series.data.push({
						name : arrayNames[i],
						value : arrayValues[i]
					})
				}

				/*var itemStyle = {
					itemStyle : {
						normal : {
							label : {
								textStyle : {
									fontSize : 8
								}
							}
						}
					}
				}

				$.extend(opcionesGraficaPie.series, itemStyle);

				console.log(opcionesGraficaPie.series);*/
			}

			echartPie.setOption(opcionesGraficaPie);
		}
	});
}

function dibujarConcurrencia(fechaInicioP, fechaFinalP) {
	echartMiniPie = echarts.init(document.getElementById('echart_mini_pie'),
			theme);
	echartMiniPie.showLoading({
		text : "Cargando..."
	});

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
				nameSegmento = "ONLINE"
				break;
			case 'offline':
				nameSegmento = "OFFLINE"
				break;
			case 'pyme':
				nameSegmento = "PYME"
				break;
			case 'empresarial':
				nameSegmento = "EMPRESARIAL"
				break;
			case 'pymeOffline':
				nameSegmento = "PYME OFFLINE"
				break;
			}

			var tieneValor;

			for (i = 0; i < arrayValues.length; i++) {
				if (arrayNames[i] == nameSegmento) {
					tieneValor = 1;
					var seg = arrayNames[i];
					var concu = (arrayValues[i] * 100 / total).toFixed(2);
					var vacio = (100 - concu).toFixed(2);
				}
			}

			var etiquetasOcultas = {
				normal : {
					label : {
						show : false
					},
					labelLine : {
						show : false
					}
				}
			};

			if (tieneValor == 1) {
				/*
				 * $("#echart_mini_pie").css("display", "block");
				 * $("#echart_mini_pieSinDatos").css("display", "none");
				 * $("#echart_mini_pie").parent().parent().addClass(
				 * "fixed_height_390"); $("#porcen").text(' ' + concu);
				 */
				echartMiniPie.hideLoading();

				opcionesGraficaDona.toolbox.show = true;

				opcionesGraficaDona.title.text = '';
				opcionesGraficaDona.title.text = concu + '%';
				opcionesGraficaDona.title.subtext = 'Del ' + fechaInicioP
						+ ' al ' + fechaFinalP;

				opcionesGraficaDona.legend.data = [];

				opcionesGraficaDona.series = [];

				opcionesGraficaDona.legend.data = [ seg, 'Otros' ];

				opcionesGraficaDona.series.push({
					type : 'pie',
					clockWise : false,
					radius : [ 72, 90 ],
					itemStyle : etiquetasOcultas,
					data : [ {
						name : seg,
						value : concu
					}, {
						name : 'Otros',
						value : vacio,
						itemStyle : {
							normal : {
								color : '#ddd',
								label : {
									show : false
								},
								labelLine : {
									show : false
								}
							}
						}
					} ]
				})

			} else {
				/*
				 * $("#echart_mini_pie").css("display", "none");
				 * $("#echart_mini_pieSinDatos").css("display", "block");
				 * $("#echart_mini_pie").parent().parent().removeClass(
				 * "fixed_height_390"); $("#porcen").text(' 0');
				 */
				echartMiniPie.hideLoading();

				opcionesGraficaDona.toolbox.show = false;

				opcionesGraficaDona.title.text = '';
				opcionesGraficaDona.title.text = 'No se encontraron datos';

				opcionesGraficaDona.legend.data = [];

				opcionesGraficaDona.series = [];
			}
			echartMiniPie.setOption(opcionesGraficaDona);

			/*
			 * 
			 * var placeHolderStyle = { normal : { color : 'rgba(0,0,0,0)',
			 * label : { show : false }, labelLine : { show : false } },
			 * emphasis : { color : 'rgba(0,0,0,0)' } };
			 */

		}
	});
}

function dibujarClientesFrecuentes(fechaInicioP, fechaFinalP) {

	$.ajax({
		url : 'clientesFrecuentes',
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : {
			fechaInicio : fechaInicioP,
			fechaFinal : fechaFinalP,
			segmento : obtenerURL()
		},

		success : function(data) {
			if (JSON.stringify(data) === "{}") {
				$("#clientesFrecuentes").css("display", "none");
				$("#clientesFrecuentes").parent().parent().removeClass(
						"fixed_height_390");
				$("#clientesFrecuentesSinDatos").css("display", "block");
			} else {
				$("#clientesFrecuentes").css("display", "block");
				$("#clientesFrecuentes").parent().parent().addClass(
						"fixed_height_390");
				$("#clientesFrecuentesSinDatos").css("display", "none");
				var arrayTemp = [];
				var arrayLlamadas = [];
				var arrayClientes = [];
				var conteo = 0;
				var dato = [];

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

				for (var i = 0; i <= 4; i++) {
					$("#top" + [ i + 1 ]).show();

					if (arrayClientes[i] == undefined) {
						$("#top" + [ i + 1 ]).hide();

					} else {

						$("#top" + (i + 1) + " p").text(arrayClientes[i]);
						$("#llamadas" + (i + 1) + " p").text(arrayLlamadas[i]);
						$("#progreso" + (i + 1)).attr('style',
								"width:" + arrayLlamadas[i] + "%");
					}

				}// fin FOR

			}// fin else JSON.stringify(data)

		}// fin function(data)
	});// fin $.ajax
}// fin dibujarClientesFrecuentes

