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

					<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="x_panel">
							<div class="x_title">
								<h2>Porcentaje (
								<span id="porcen"> </span>
								 %)</h2>
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
		<!-- footer content  -->
		<jsp:include page="../fragments/footer.jsp" />
		<!-- /footer content -->
	</div>
	<!-- /page content -->
	</div>


	<script src="resources/js/custom.min.js"></script>
</body>



</html>
