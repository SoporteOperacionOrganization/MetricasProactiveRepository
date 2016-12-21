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
								<i class="fa fa-pencil-square-o"></i> Offline
							</h1>
						</div>
						<div class="col-md-6 col-sm-6 col-xs-12 form-group pull-right">
						<div class="row" align="right">
								<table>
									<tbody>
										<tr>
											<td>
												<div class="col-md-4 col-sm-4">
													<label>Fecha:</label>
												</div>
											</td>
											<td>
												<div class="col-md-8 col-sm-8 " style="">
													<div id="calendarioFiltro" class="form-control"
														style="width: 16em;">
														<i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
														<span></span> <b class="caret"></b>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
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
													<div class="row" align="right">
								<table>
									<tbody>
										<tr>
											<td>
												<div class="col-md-4 col-sm-4 " style="text-align: right;">
											<label for="calendarioComparativo">Comparativo:</label>
										</div>
												<div class="col-md-8 col-sm-8 col-xs-8 ">
											<div id="calendarioComparativo" style="width: 16em;"
												class="form-control ">

												<i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
												<span></span> <b class="caret"></b>
											</div>
										</div>
											</td>
										</tr>
									</tbody>
								</table>
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
						<div class="x_panel tile fixed_height_320" style="height: 330px;">
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
						<div class="x_panel tile fixed_height_390" style="height: 350px;">

							<div class="row x_title">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2>Clientes frecuentes</h2>
								</div>
								<div class="clearfix"></div>
							</div>

							<div class="col-md-12 col-sm-12 col-xs-12">
								<div id="clientesFrecuentes" style="font-size: 11px;">
									<div id="top1" >
										<p></p>
										<div id="llamadas1" >
											<div class="progress" style="height: 14px">
												<div id="progreso1" 
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="0" aria-valuemin="0"
													aria-valuemax="0">
													<p align="left" style="font-size: 8px;"></p>
												</div>
											</div>
										</div>
									</div>
									<div id="top2">
										<p></p>
										<div id="llamadas2">
											<div class="progress" style="height: 14px">
												<div id="progreso2"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="0" aria-valuemin="0"
													aria-valuemax="0">
													<p align="left" style="font-size: 8px;"></p>
												</div>
											</div>
										</div>
									</div>
									<div id="top3">
										<p></p>
										<div id="llamadas3">
											<div class="progress" style="height: 14px">
												<div id="progreso3"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="0" aria-valuemin="0"
													aria-valuemax="0">
													<p align="left" style="font-size: 8px;"></p>
												</div>
											</div>
										</div>
									</div>
									<div id="top4">
										<p></p>
										<div id="llamadas4">
											<div class="progress" style="height: 14px">
												<div id="progreso4"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="0" aria-valuemin="0"
													aria-valuemax="0">
													<p align="left" style="font-size: 8px;"></p>
												</div>
											</div>
										</div>
									</div>
									<div id="top5">
										<p></p>
										<div id="llamadas5">
											<div class="progress" style="height: 14px">
												<div id="progreso5"
													class="progress-bar progress-bar-success"
													role="progressbar" aria-valuenow="0" aria-valuemin="0"
													aria-valuemax="0">
													<p align="left" style="font-size: 8px;"></p>
												</div>
											</div>
										</div>
									</div>

								</div>
								
								
								<div id="clientesFrecuentesSinDatos">No se encontraron
									datos, seleccione un rango de fechas distinto.</div>
							</div>

						</div>
					</div>
					
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="x_panel fixed_height_390" style="height: 350px;">
							<div class="x_title">
								<h2>
									Porcentaje ( <span id="porcen" class="blue"> </span> %)
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
