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
	color : [ '#002d72', '#00bdf2', '#008ce6 ', '#fa1', '#890c58', '#00843d',
			'#cb6015', '#c99700', '#949300', '#6b3077' ],

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
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'), theme);
	var echartMiniPie = echarts.init(
			document.getElementById('echart_mini_pie'), theme);
	break;
case "online":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'), theme);
	var echartMiniPie = echarts.init(
			document.getElementById('echart_mini_pie'), theme);
	break;
case "offline":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'), theme);
	var echartMiniPie = echarts.init(
			document.getElementById('echart_mini_pie'), theme);
	break;
case "pyme":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'), theme);
	var echartMiniPie = echarts.init(
			document.getElementById('echart_mini_pie'), theme);
	break;
case "pymeOffline":
	var GeneralLlamadasBarras2 = echarts.init(document
			.getElementById('LlamadasTotalesPorFamiliaSegmentos'), theme);
	var echartMiniPie = echarts.init(
			document.getElementById('echart_mini_pie'), theme);
	break;
default:
	break;
}

function dibujarLlamadasTotalesGeneral(fechaInicioP, fechaFinalP) {
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
				$("#LlamadasTotalesPorSegmentos").css("display", "none");
				$("#LlamadasTotalesPorSegmentosSinDatos").css("display",
						"block");
				$("#calendarioComparativo").parent().parent().parent().css(
						"display", "none");
				$("#totalLlamadas").text(' 0');
			} else {
				$("#diferenciaLlamadas").css("display", "block");
				$("#LlamadasTotalesPorSegmentos").css("display", "block");
				$("#LlamadasTotalesPorSegmentosSinDatos")
						.css("display", "none");
				$("#calendarioComparativo").parent().parent().parent().css(
						"display", "block");

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
				$("#totalLlamadas").text(' ' + totalLlamadas);

				GeneralLlamadasBarras2 = echarts.init(document
						.getElementById('LlamadasTotalesPorSegmentos'), theme);

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
					legend : {
						data : [ 'Filtro general' ],
						y : 'bottom'
					},
					xAxis : [ {
						type : 'category',
						data : arrayEtiquetas,
						axisLabel : {
							interval : 0,
							rotate : 25,
							textStyle : {
								fontSize : 9
							}
						}
					} ],
					yAxis : [ {
						type : 'value',
						name : 'Total',
						axisLabel : {
							formatter : '{value}'
						}
					}],
					series : [ {
						name : 'Filtro general',
						type : 'bar',
						// data : [2,5,10,8,15]
						data : arrayTotales,
						itemStyle : {
							normal : {
								label : {
									show : true,
									position : 'top'
								}
							}
						},
						barMaxWidth : '100',
					}]
				});

			}

		}
	});
}

function dibujarLlamadasTotalesGeneralComparativo(fechaInicioOriginalP,
		fechaFinalOriginalP, fechaInicioP, fechaFinalP) {

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
					$("#totalLlamadas").text(' ' + totalLlamadas);

					GeneralLlamadasBarras2 = echarts.init(document
							.getElementById('LlamadasTotalesPorSegmentos'),
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
									title : 'Descargar'
								}
							}
						},
						calculable : true,
						legend : {
							data : [ 'Filtro general', 'Comparativo' ],
							y : 'bottom'
						},
						xAxis : [ {
							type : 'category',
							data : arrayEtiquetas,
							axisLabel : {
								interval : 0,
								rotate : 25,
								textStyle : {
									fontSize : 9
								}
							}
						} ],
						yAxis : [ {
							type : 'value',
							name : 'Total',
							axisLabel : {
								formatter : '{value}'
							}
						}],
						series : [ {
							name : 'Filtro general',
							type : 'bar',
							data : arrayTotalesFiltro,
							itemStyle : {
								normal : {
									label : {
										show : true,
										position : 'top'
									}
								}
							},
							barMaxWidth : '100',
						}, {
							name : 'Comparativo',
							type : 'line',
							data : arrayTotalesComparativo
						} ]
					});
				}
			});

}

function dibujarLlamadasTotalesFamiliaSegmentos(fechaInicioP, fechaFinalP,
		segmento) {
	$
			.ajax({
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
						$("#LlamadasTotalesPorFamiliaSegmentos").css("display",
								"none");
						$("#LlamadasTotalesPorFamiliaSegmentosSinDatos").css(
								"display", "block");
						$("#calendarioComparativo").parent().parent().parent()
								.css("display", "none");
						$("#totalLlamadas").text(' 0');
					} else {
						$("#diferenciaLlamadas").css("display", "block");
						$("#LlamadasTotalesPorFamiliaSegmentos").css("display",
								"block");
						$("#LlamadasTotalesPorFamiliaSegmentosSinDatos").css(
								"display", "none");
						$("#calendarioComparativo").parent().parent().parent()
								.css("display", "block");

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
						var arrayConsultaOrdenado = arrayConsulta
								.sort(function(a, b) {
									return a.valor - b.valor;
								});
						arrayConsultaOrdenado.reverse();

						for (var i = 0; i < arrayConsultaOrdenado.length; i++) {
							arrayEtiquetas[i] = arrayConsultaOrdenado[i]["segmento"];
							arrayTotales[i] = arrayConsultaOrdenado[i]["valor"];
						}

						$("#totalLlamadas").text(' ' + totalLlamadas);
						$("#diferenciaLlamadas span i").removeClass(
								"fa-arrow-up");
						$("#diferenciaLlamadas span i").removeClass(
								"fa-arrow-down");
						$("#diferenciaLlamadas span i").removeClass(
								"fa-arrows-h");
						$("#diferenciaLlamadas span i i").text('');

						GeneralLlamadasBarras2 = echarts
								.init(
										document
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
								data : [ 'Filtro general' ],
								y : 'bottom'
							},
							xAxis : [ {
								type : 'category',
								data : arrayEtiquetas,
								axisLabel : {
									interval : 0,
									rotate : 25,
									textStyle : {
										fontSize : 9
									}
								}
							} ],
							yAxis : [ {
								type : 'value',
								name : 'Total',
								axisLabel : {
									formatter : '{value}'
								}
							}],
							series : [ {
								name : 'Filtro general',
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
								barMaxWidth : '100',
							}]
						});
					}
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
					$("#totalLlamadas").text(' ' + totalLlamadas);

					GeneralLlamadasBarras2 = echarts
							.init(
									document
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
									title : 'Descargar'
								}
							}
						},
						calculable : true,
						legend : {
							data : [ 'Filtro general', 'Comparativo' ],
							y : 'bottom'
						},
						xAxis : [ {
							type : 'category',
							data : arrayEtiquetas,
							axisLabel : {
								interval : 0,
								rotate : 25,
								textStyle : {
									fontSize : 9
								}
							}
					
						} ],
						yAxis : [ {
							type : 'value',
							name : 'Total',
							axisLabel : {
								formatter : '{value}'
							}
						}],
						series : [ {
							name : 'Filtro general',
							type : 'bar',
							data : arrayTotalesFiltro,
							itemStyle : {
								normal : {
									label : {
										show : true,
										position : 'top'
									}
								}
							},
							barMaxWidth : '100',
						}, {
							name : 'Comparativo',
							type : 'line',
							data : arrayTotalesComparativo
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
			if (JSON.stringify(data) === "{}") {
				$("#llamadasFamilia").css("display", "none");
				$("#llamadasFamilia").parent().removeClass("fixed_height_390");
				$("#llamadasFamiliaSinDatos").css("display", "block");
			} else {
				$("#llamadasFamilia").css("display", "table");
				$("#llamadasFamilia").parent().addClass("fixed_height_390");
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
                    $("#sparkline" + (i) + " .sparkline-familia").text("");
                    $("#sparkline" + (i) + " .sparkline-segmento").text("");
                    $("#sparkline" + (i) + " .sparkline-contenido h2")
                                 .text("");
             }

				
				
				
				
				
				for (i = 0; i <= arrayValores.length; i++) {
					var segmento = arrayEtiquetas[i].toString().split("-");
					$("#sparkline" + (i + 1) + " .sparkline-familia").text(
							segmento[0]);
					$("#sparkline" + (i + 1) + " .sparkline-segmento").text(
							segmento[1]);
					$("#sparkline" + (i + 1) + " .sparkline-contenido h2")
							.text(arrayValores[i]);
				}

			}

		}
	});

}

function dibujarServicios(fechaInicioP, fechaFinalP) {
	$
			.ajax({
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
						$("#echart_pie").parent().parent().removeClass(
								"fixed_height_320");
						$("#echart_pie").css("display", "none");
						$("#echart_pieSinDatos").css("display", "block");
					} else {
						$("#echart_pie").parent().parent().addClass(
								"fixed_height_320");
						$("#echart_pie").css("display", "block");
						$("#echart_pieSinDatos").css("display", "none");

						var arrayValues = [];
						var cont = 0;
						$.each(data, function(k, v) {
							arrayValues[cont] = v;
							cont = cont + 1;
						});
						var arrayNames = Object.keys(data);

						echartPie = echarts.init(document
								.getElementById('echart_pie'), theme);

						echartPie.setOption({
							tooltip : {
								trigger : 'item',
								formatter : "{b} : {c} ({d}%)"
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
										show : false
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
								center : [ '50%', '35%' ],
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

			var tieneValor;

			for (i = 0; i < arrayValues.length; i++) {
				if (arrayNames[i] == nameSegmento) {
					tieneValor = 1;
					var seg = arrayNames[i];
					var concu = (arrayValues[i] * 100 / total).toFixed(2);
					var vacio = (100 - concu).toFixed(2);
				}
			}

			if (tieneValor == 1) {
				$("#echart_mini_pie").css("display", "block");
				$("#echart_mini_pieSinDatos").css("display", "none");
				$("#echart_mini_pie").parent().parent().addClass(
				"fixed_height_390");
				$("#porcen").text(' ' + concu);
			} else {
				$("#echart_mini_pie").css("display", "none");
				$("#echart_mini_pieSinDatos").css("display", "block");
				$("#echart_mini_pie").parent().parent().removeClass(
				"fixed_height_390");
				$("#porcen").text(' 0');
			}

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

			echartMiniPie = echarts.init(document
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
					}

				}// fin FOR

			}// fin else JSON.stringify(data)

		}// fin function(data)
	});// fin $.ajax
}// fin dibujarClientesFrecuentes

