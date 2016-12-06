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
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel">
							<div class="x_title">
								<h2>Llamadas totales</h2>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div id="mainb" style="height: 350px;"></div>
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
								<div id="echart_pie" style="height: 350px;"></div>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="x_panel tile fixed_height_320 overflow_hidden">
							<div class="x_title">
								<h2>Device Usage</h2>
								<ul class="nav navbar-right panel_toolbox">
									<li><a class="collapse-link"><i
											class="fa fa-chevron-up"></i></a></li>
									<li class="dropdown"><a class="dropdown-toggle"
										role="button" aria-expanded="false" href="#"
										data-toggle="dropdown"><i class="fa fa-wrench"></i></a>
										<ul class="dropdown-menu" role="menu">
											<li><a href="#">Settings 1</a></li>
											<li><a href="#">Settings 2</a></li>
										</ul></li>
									<li><a class="close-link"><i class="fa fa-close"></i></a>
									</li>
								</ul>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<table style="width: 100%;">
									<tbody>
										<tr>
											<th style="width: 37%;">
												<p>Top 5</p>
											</th>
											<th>
												<div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
													<p>Device</p>
												</div>
												<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
													<p>Progress</p>
												</div>
											</th>
										</tr>
										<tr>
											<td><iframe class="chartjs-hidden-iframe"
													style="margin: 0px; border: 0px currentColor; border-image: none; left: 0px; top: 0px; width: 100%; height: 0px; right: 0px; bottom: 0px; display: block; position: absolute;"></iframe>
												<canvas width="140" height="140" id="canvas1"
													style="margin: 15px 10px 10px 0px; width: 140px; height: 140px;"></canvas>
											</td>
											<td>
												<table class="tile_info">
													<tbody>
														<tr>
															<td>
																<p>
																	<i class="fa fa-square blue"></i>IOS
																</p>
															</td>
															<td>30%</td>
														</tr>
														<tr>
															<td>
																<p>
																	<i class="fa fa-square green"></i>Android
																</p>
															</td>
															<td>10%</td>
														</tr>
														<tr>
															<td>
																<p>
																	<i class="fa fa-square purple"></i>Blackberry
																</p>
															</td>
															<td>20%</td>
														</tr>
														<tr>
															<td>
																<p>
																	<i class="fa fa-square aero"></i>Symbian
																</p>
															</td>
															<td>15%</td>
														</tr>
														<tr>
															<td>
																<p>
																	<i class="fa fa-square red"></i>Others
																</p>
															</td>
															<td>30%</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>


					<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="x_panel tile fixed_height_320">
							<div class="x_title">
								<h2>Quick Settings</h2>
								<ul class="nav navbar-right panel_toolbox">
									<li><a class="collapse-link"><i
											class="fa fa-chevron-up"></i></a></li>
									<li class="dropdown"><a class="dropdown-toggle"
										role="button" aria-expanded="false" href="#"
										data-toggle="dropdown"><i class="fa fa-wrench"></i></a>
										<ul class="dropdown-menu" role="menu">
											<li><a href="#">Settings 1</a></li>
											<li><a href="#">Settings 2</a></li>
										</ul></li>
									<li><a class="close-link"><i class="fa fa-close"></i></a>
									</li>
								</ul>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div class="dashboard-widget-content">
									<ul class="quick-list">
										<li><i class="fa fa-calendar-o"></i><a href="#">Settings</a>
										</li>
										<li><i class="fa fa-bars"></i><a href="#">Subscription</a>
										</li>
										<li><i class="fa fa-bar-chart"></i><a href="#">Auto
												Renewal</a></li>
										<li><i class="fa fa-line-chart"></i><a href="#">Achievements</a>
										</li>
										<li><i class="fa fa-bar-chart"></i><a href="#">Auto
												Renewal</a></li>
										<li><i class="fa fa-line-chart"></i><a href="#">Achievements</a>
										</li>
										<li><i class="fa fa-area-chart"></i><a href="#">Logout</a>
										</li>
									</ul>

									<div class="sidebar-widget">
										<h4>Profile Completion</h4>
										<canvas width="150" height="80" id="foo"
											style="width: 160px; height: 100px;"></canvas>
										<div class="goal-wrapper">
											<span class="gauge-value pull-left">$</span> <span
												class="gauge-value pull-left" id="gauge-text">3,200</span> <span
												class="goal-value pull-right" id="goal-text">$5,000</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				</div>
			<!-- footer content -->
			<jsp:include page="../fragments/footer.jsp"/>
			<!-- /footer content -->
		</div>
		<!-- /page content -->
	</div>
	

	<script src="resources/js/custom.min.js"></script>
	<!-- ECharts -->
	<script>
		var theme = {
			color : [ '#26B99A', '#34495E', '#BDC3C7', '#3498DB', '#9B59B6',
					'#8abb6f', '#759c6a', '#bfd3b7' ],

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
				color : [ '#408829', '#408829', '#408829', '#408829' ]
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

		var echartBarLine = echarts.init(document.getElementById('mainb'),
				theme);

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
				data : [ 'Revenue', 'Comparativa' ],
				y : 'bottom'
			},
			xAxis : [ {
				type : 'category',
				data : [ 'Pyme', 'Online', 'Offline', 'Empresarial',
						'Pyme Offline' ]
			} ],
			yAxis : [ {
				type : 'value',
				name : '',
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
			series : [ {
				name : 'Revenue',
				type : 'bar',
				data : [ 2.0, 4.9, 7.0, 23.2, 25.6 ]
			}, {
				name : 'Comparativa',
				type : 'line',
				yAxisIndex : 1,
				data : [ 2.0, 2.2, 3.3, 4.5, 6.3 ]
			} ]
		});

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
				data : [ 'Direct Access', 'E-mail Marketing', 'Union Ad',
						'Video Ads', 'Search Engine' ]
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
						title : "Save Image"
					}
				}
			},
			calculable : true,
			series : [ {
				name : 'è®¿é®æ¥æº',
				type : 'pie',
				radius : '55%',
				center : [ '50%', '48%' ],
				data : [ {
					value : 335,
					name : 'Direct Access'
				}, {
					value : 310,
					name : 'E-mail Marketing'
				}, {
					value : 234,
					name : 'Union Ad'
				}, {
					value : 135,
					name : 'Video Ads'
				}, {
					value : 1548,
					name : 'Search Engine'
				} ]
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
	</script>
	<!-- /ECharts -->
</body>



</html>
