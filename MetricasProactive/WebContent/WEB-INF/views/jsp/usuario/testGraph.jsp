<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<jsp:include page="../fragments/resources.jsp" />
</head>
<body class="nav-md"  onload="llamar()">

<jsp:include page="../fragments/header.jsp" />

<div class="container body">
	<div class="main_container">
	
	<div class="right_col" role="main">
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
					<div>
						<button onClick="dibujarLlamadasTotalesGeneral();">
						Llamadas totales
						</button>
					</div>
					<div>
						<button onClick="dibujarLlamadasTotalesGeneralComparativo();">
						Comparar llamadas
						</button>
					</div>
					<div>
						<input id="guardarComparativo" type="text" value=""/>
					
					</div>
				</div>
			</div>
			
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
			
				<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="x_panel">
							<div class="x_title">
								<h2>Concurrencia</h2>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div id="echart_mini_pie" style="height: 235px;"></div>
							</div>
						</div>
					</div>
		</div>
	</div>
		
	</div>
</div>

<script src="resources/js/custom.min.js"></script>
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
	series : [ {
		name : 'Revenue',
		type : 'bar',
		data : [ 0, 0, 0, 0, 0 ]
		//data : [ 2.0, 4.9, 7.0, 23.2, 25.6 ]
	}, {
		name : 'Comparativa',
		type : 'line',
		yAxisIndex : 1,
		data : [ 0, 0, 0, 0, 0 ]
	} ]
});


</script>




<script>
$( document ).ready(function() {
	$("#guardarComparativo").hide();
});
</script>

</body>
</html>