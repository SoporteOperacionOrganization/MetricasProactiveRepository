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
					<div class="row">
						<div class="col-md-6 col-sm-6 col-xs-12">
							<h1>
								<i class="fa fa-sitemap"></i> General
							</h1>
						</div>
						<div class="col-md-6 col-sm-6 col-xs-12 form-group pull-right">
							<div class="row">
								<div class="col-md-4 col-sm-4 col-xs-4"
									style="text-align: right; padding-top: 5px">
									<label for="calendarioFiltro">Filtro general:</label>
								</div>
								<div class="col-md-8 col-sm-8 col-xs-8 pull-right"
									style="padding-right: 30px; padding-left: 5px">
									<div id="calendarioFiltro" class="form-control">
										<i class="glyphicon glyphicon-calendar fa fa-calendar"></i> <span></span>
										<b class="caret"></b>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Valores de gráficas -->
				<div>
					<input id="comparativoLlamadasTotalesSegmentos" type="hidden"
						value="" />
				</div>

				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel">
							<div class="row x_title">
								<div class="col-md-6 col-sm-6 col-xs-12">
									<h2>Llamadas totales<span id="totalLlamadas" class="blue"><b></b></span></h2>
									<div class="clearfix"></div>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<div class="row">
										<div class="col-md-4 col-sm-4 col-xs-4"
											style="text-align: right;">
											<label for="calendarioComparativo" style="padding-top: 5px;">Comparativo:</label>
										</div>
										<div class="col-md-8 col-sm-8 col-xs-8 pull-right"
											style="padding-left: 17px; padding-right: 7px;">
											<div id="calendarioComparativo"
												class="form-control pull-right">

												<i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
												<span></span> <b class="caret"></b>
											</div>


										</div>
									</div>

								</div>

							</div>
							<div class="x_content">
								<div id="diferenciaLlamadas">
									<span><i class="green"><i class="fa"></i></i></span>
								</div>
								<div id="LlamadasTotalesPorSegmentos" style="height: 300px;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel tile fixed_height_320">
							<div class="row x_title">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2>Servicios</h2>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div id="echart_pie" style="height: 320px;"></div>
							</div>
						</div>
					</div>


					<div class="col-md-6 col-sm-6 col-xs-12 ">
						<div class="x_panel tile">

							<div class="row x_title">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2>Clientes frecuentes</h2>
								</div>
								<div class="clearfix"></div>
							</div>

							<div class="col-md-12 col-sm-12 col-xs-6" style="font-size: 10px">
								<div id="top1">
									<p>Facebook Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div id="llamadas1" class="progress-bar"
												style="background-color: #1DB7D0;" role="progressbar"></div>
										</div>
									</div>
								</div>
								<div id="top2">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div id="llamadas2" class="progress-bar "
												style="background-color: #C01722;" role="progressbar"></div>
										</div>
									</div>
								</div>
								<div id="top3">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div id="top4">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div id="top5">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div id="top6">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div id="top7">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div id="top8">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div id="top9">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>
								<div id="top10">
									<p>Twitter Campaign</p>
									<div class="">
										<div class="progress progress_sm" style="width: 100%;">
											<div class="progress-bar " style="background-color: #C01722;"
												role="progressbar" data-transitiongoal="60"></div>
										</div>
									</div>
								</div>


							</div>

						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-12 ">
						<div class="x_panel tile">

							<div class="row x_title">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2>Llamadas por familia</h2>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="row familias">
								<div id="sparkline1" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>

								<div id="sparkline2" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>

								<div id="sparkline3" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>
							</div>
							<div class="row familias">
								<div id="sparkline4" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>

								<div id="sparkline5" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>

								<div id="sparkline6" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>
							</div>
							<div class="row familias">
								<div id="sparkline7" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>

								<div id="sparkline8" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>

								<div id="sparkline9" class="col-md-4 col-sm-4 col-xs-4 tile"
									style="font-size: 10px">
									<div class="sparkline-titulo">
										<span class="sparkline-familia"></span> <span
											class="sparkline-segmento"></span>
									</div>
									<div class="sparkline-contenido">
										<h2></h2>
									</div>

								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
			<!-- footer content -->
			<nav class="navbar navbar-default navbar-fixed-bottom">
				<div class="container">
					<jsp:include page="../fragments/footer.jsp" />
				</div>
			</nav>
			<!-- /footer content -->
		</div>
		<!-- /page content -->
	</div>
	<script src="resources/js/custom.min.js"></script>
</body>



</html>
