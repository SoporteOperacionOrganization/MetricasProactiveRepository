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
								<i class="fa fa-sticky-note-o"></i> Pyme Offline
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
				<div>
					<input id="comparativoLlamadasTotalesFamiliasSegmentos"
						type="hidden" value="" />
				</div>
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel">
							<div class="row x_title">
								<div class="col-md-6 col-sm-6 col-xs-12">
									<h2>
										Llamadas totales por familia<span id="totalLlamadas"
											class="blue"><b></b></span>
									</h2>
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
								<div id="LlamadasTotalesPorFamiliaSegmentos"
									style="height: 350px;"></div>
									<div id="LlamadasTotalesPorFamiliaSegmentosSinDatos">No se encontraron datos, seleccione un rango de fechas distinto.</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel tile fixed_height_320">
							<div class="x_title">
								<h2>Servicios</h2>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div id="echart_pie" style="height: 350px;"></div>
								<div id="echart_pieSinDatos">No se encontraron datos, seleccione un rango de fechas distinto.</div>
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

							<div class="col-md-12 col-sm-12 col-xs-12">

								<div id="clientesFrecuentes" style="font-size:11px;">
									<div id="top1">
										<p></p>

										<div id="llamadas1">

											<div class="progress">
												<div id="progreso1"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="40" aria-valuemin="0"
													aria-valuemax="100" style=""></div>
											</div>

											<div class="">
												<p align="right"></p>
											</div>

										</div>
									</div>



									<div id="top2">
										<p></p>

										<div id="llamadas2">

											<div class="progress">
												<div id="progreso2"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="40" aria-valuemin="0"
													aria-valuemax="100" style=""></div>
											</div>

											<div class="">
												<p align="right"></p>
											</div>

										</div>
									</div>



									<div id="top3">
										<p></p>

										<div id="llamadas3">

											<div class="progress">
												<div id="progreso3"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="40" aria-valuemin="0"
													aria-valuemax="100" style=""></div>
											</div>

											<div class="">
												<p align="right"></p>
											</div>

										</div>
									</div>



									<div id="top4">
										<p></p>

										<div id="llamadas4">

											<div class="progress">
												<div id="progreso4"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="40" aria-valuemin="0"
													aria-valuemax="100" style=""></div>
											</div>

											<div class="">
												<p align="right"></p>
											</div>

										</div>
									</div>


									<div id="top5">
										<p></p>

										<div id="llamadas5">

											<div class="progress">
												<div id="progreso5"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="40" aria-valuemin="0"
													aria-valuemax="100" style=""></div>
											</div>

											<div class="">
												<p align="right"></p>
											</div>

										</div>
									</div>

								</div>
								<div id="clientesFrecuentesSinDatos">
									No se encontraron datos,
									seleccione un rango de fechas distinto.
								</div>
							</div>

						</div>
					</div>
					
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="x_panel">
							<div class="x_title">
								<h2>
									Porcentaje ( <span id="porcen"> </span> %)
								</h2>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<div id="echart_mini_pie" style="height: 235px;"></div>
								<div id="echart_mini_pieSinDatos">No se encontraron datos, seleccione un rango de fechas distinto.</div>
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

</body>



</html>
