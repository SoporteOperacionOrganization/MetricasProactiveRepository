<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- Meta, title, CSS, favicons, etc. -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Citibanamex | Visor de métricas Proactive</title>
<jsp:include page="../fragments/resources.jsp" />


</head>

<body class="nav-md">
	<jsp:include page="../fragments/header.jsp" />
	<div class="container body">
		<div class="main_container">
			<!-- page content -->
			<div class="right_col" role="main">
				<div class="page-title">
					<div
						class="col-md-8 col-sm-8 col-xs-12 form-group pull-right no-padding">
						<div class="row">
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="calendarioFiltro">Filtro:</label>
								<div id="calendarioFiltro" class="form-control">
									<i class="glyphicon glyphicon-calendar fa fa-calendar"></i> <span></span>
									<b class="caret"></b>
								</div>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="calendarioComparativo">Comparativo:</label>
								<div id="calendarioComparativo" class="form-control">
									<i class="glyphicon glyphicon-calendar fa fa-calendar"></i> <span></span>
									<b class="caret"></b>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Valores de gráficas -->
				<div>
					<input id="comparativoLlamadasTotalesSegmentos" type="text"
						value="" />
				</div>

				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel">
							<div class="x_title">
								<h2>Llamadas totales</h2>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div id="diferenciaLlamadas">
									<i class="green"><i class="fa fa-sort-asc"></i> 34%</i>
								</div>
								<div id="LlamadasTotalesPorSegmentos" style="height: 300px;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="x_panel tile fixed_height_320">
							<div class="x_title">
								<h2>Servicios</h2>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div id="echart_pie" style="height: 320px;"></div>
							</div>
						</div>
					</div>


					<div class="col-md-4 col-sm-4 col-xs-12 ">
						<div class="x_panel tile fixed_height_320">

							<div class="x_title">
								<h2>Clientes Frecuentes</h2>
								<div class="clearfix"></div>
							</div>

							<div class="col-md-12 col-sm-12 col-xs-6" style="font-size: 10px">
								<div>
									<p>Facebook Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar" style="background-color: #1DB7D0;"
												role="progressbar" data-transitiongoal="10"></div>
										</div>
									</div>
								</div>
								<div>
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div>
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar "
												style="background-color: #F7DEB4';" role="progressbar"
												data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div>
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar" style="background-color: #8FA508;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div>
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #A6A6A6;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>




							</div>

						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12 ">
						<div class="x_panel tile fixed_height_320">

							<div class="x_title">
								<h2>Llamadas por familia</h2>
								<div class="clearfix"></div>
							</div>
							<div class="row">
								<div id="sparkline1" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>

								<div id="sparkline2" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>

								<div id="sparkline3" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>
							</div>
							<div class="row">
								<div id="sparkline4" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>

								<div id="sparkline5" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>

								<div id="sparkline6" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>
							</div>
							<div class="row">
								<div id="sparkline7" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>

								<div id="sparkline8" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>

								<div id="sparkline9" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<span></span>
									<h2></h2>

								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
			<!-- footer content -->
			<jsp:include page="../fragments/footer.jsp" />
			<!-- /footer content -->
		</div>
		<!-- /page content -->
	</div>


	<script src="resources/js/custom.min.js"></script>



	<!-- ECharts -->
	<script>
		//Colores Bar
		var themeBar = {
				color : [ '#1DB7D0', '#0B676A', '#E8B027', '#70FDFF', '#0B676A',
	                      '#C01722', '#8FA508' ],

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
						color : [ 'rgba(250,250,250,0.1)',
								'rgba(200,200,200,0.1)' ]
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

		//Colores Pie
		var theme = {
			color : [ '#013F7A', '#1DB7D0', '#E8B027', '#000000', '#70FDFF',
					'#0B676A', '#C01722', '#F7DEB4', '#8FA508', '#A6A6A6' ],

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
						color : [ 'rgba(250,250,250,0.1)',
								'rgba(200,200,200,0.1)' ]
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

		var echartBarLine = echarts.init(document
				.getElementById('LlamadasTotalesPorSegmentos'), themeBar);

		echartBarLine.setOption({
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
				data : [ 'Pyme', 'Online', 'Offline', 'Empresarial',
						'Pyme Offline' ]
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
				data: [0,0,0,0,0]
			}, {
				name : 'Comparativo',
				type : 'line',
				yAxisIndex : 1,
				data: [0,0,0,0,0]
			} ]
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
					restore : {
						show : true,
						title : "Restore"
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
					value : 68,
					name : '68%Something #1'
				}, {
					value : 32,
					name : 'invisible',
					itemStyle : placeHolderStyle
				} ]
			} ]
		});
	</script>
	<!-- /ECharts -->

</body>



</html>
