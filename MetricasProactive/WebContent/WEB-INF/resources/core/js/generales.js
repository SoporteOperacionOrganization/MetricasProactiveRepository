/**
 * 
 */

function redibujarGraficas() {
	if (GeneralLlamadasBarras2 != null
			&& GeneralLlamadasBarras2 != undefined) {
		GeneralLlamadasBarras2.resize();
	}
	if (echartPie != null && echartPie != undefined) {
		echartPie.resize();
	}
	
	if (echartMiniPie != null && echartMiniPie != undefined) {
		echartMiniPie.resize();
	}
}
function recalcularAlto() {
	var alto = $(document).height();
	$(".left_col").css("min-height", alto);
}

function obtenerURL() {
	var url = window.location.href.split("/");
	var pagina = url[url.length - 1];
	return pagina;
}

function cambiarLabelFechaFiltro(inicio, fin) {
	$('#calendarioFiltro span').html(
			inicio.format('YYYY/MM/DD') + ' - ' + fin.format('YYYY/MM/DD'));
}
function cambiarLabelFechaComparativo(inicio, fin) {
	$('#calendarioComparativo span').html(
			inicio.format('YYYY/MM/DD') + ' - ' + fin.format('YYYY/MM/DD'));
}

function graficasIniciales() {
	var hoy = new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth() + 1;
	var yyyy = hoy.getFullYear();
	var segmento = obtenerURL();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	hoy = yyyy + '/' + mm + '/' + dd;
	
	dibujarGraficasPorPagina(hoy,hoy,segmento);
}

function estilosPorcentajes(porcentajeDiferencia){
	if (porcentajeDiferencia < 0){
		$("#diferenciaLlamadas span i").removeClass("green");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrows-h");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrow-up");
		$("#diferenciaLlamadas span i").addClass("red");
		$("#diferenciaLlamadas span i i").addClass("fa-arrow-down");
	}else if (porcentajeDiferencia > 0){
		$("#diferenciaLlamadas span i").removeClass("red");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrows-h");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrow-down");
		$("#diferenciaLlamadas span i").addClass("green");
		$("#diferenciaLlamadas span i i").addClass("fa-arrow-up");
	}else{
		$("#diferenciaLlamadas span i").removeClass("green");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrow-up");
		$("#diferenciaLlamadas span i").removeClass("red");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrow-down");
		$("#diferenciaLlamadas span i i").addClass("fa-arrows-h");
	}
}

function dibujarGraficasPorPagina(fechaInicio, fechaFinal, segmento) {
	switch (segmento) {
	case "general":
		dibujarLlamadasTotalesGeneral(fechaInicio, fechaFinal);
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarFamilias(fechaInicio, fechaFinal, segmento);
		//recalcularAlto();
		break;
	case "empresarial":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal, 'BANCA EMPRESARIAL');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		break;
	case "online":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal, 'ATE');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		break;
	case "offline":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal, 'OFFLINE');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		break;
	case "pyme":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal, 'PYME');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		break;
	case "pymeOffline":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal, 'PYME OFFLINE');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		break;
	default:
		break;
	}
}

$(document).ready(
		function() {
			graficasIniciales();
			//recalcularAlto();
			$(".dropdown-toggle").dropdown();
			$("#comparativoLlamadasTotalesSegmentos").hide();

			$(window).on('resize', function() {
				redibujarGraficas();
				recalcularAlto();
			});
			$("#menu_toggle").on('click', function() {
				redibujarGraficas();
			});
			cambiarLabelFechaFiltro(moment(), moment());

			$('#calendarioFiltro').daterangepicker(optionSet1);

			$('#calendarioFiltro')
					.on(
							'apply.daterangepicker',
							function(ev, picker) {
								var fechaInicio = picker.startDate
										.format('YYYY/MM/DD');
								var fechaFinal = picker.endDate
										.format('YYYY/MM/DD');
								var segmento = obtenerURL();
								dibujarGraficasPorPagina(fechaInicio,
										fechaFinal, segmento)
								/*
								 * dibujarFamilias(fechaInicio, fechaFinal,
								 * segmento); dibujarConcurrencia(fechaInicio,
								 * fechaFinal); dibujarServicios(fechaInicio,
								 * fechaFinal, segmento);
								 * dibujarClientesFrecuentes(fechaInicio,
								 * fechaFinal, segmento);
								 * 
								 * if (segmento == 'general') {
								 * dibujarLlamadasTotalesGeneral(fechaInicio,
								 * fechaFinal); } else if (segmento == 'online') {
								 * dibujarLlamadasTotalesFamiliaSegmentos(
								 * fechaInicio, fechaFinal, 'ATE'); }
								 */
								cambiarLabelFechaFiltro(picker.startDate,
										picker.endDate);
							});
			
			cambiarLabelFechaComparativo(moment(), moment());
			$('#calendarioComparativo').daterangepicker(optionSet2);

			$('#calendarioComparativo').on(
					'apply.daterangepicker',
					function(ev, picker) {
						var fechasFiltro = $('#calendarioFiltro span').text().split("-");
						var fechaInicioOriginal = fechasFiltro[0];
						var fechaFinalOriginal = fechasFiltro[1];
						var fechaInicioComparativo = picker.startDate
								.format('YYYY/MM/DD');
						var fechaFinalComparativo = picker.endDate
								.format('YYYY/MM/DD');
						var segmento = obtenerURL();

						if (segmento == 'general') {
							dibujarLlamadasTotalesGeneralComparativo(
									fechaInicioComparativo,
									fechaFinalComparativo);
						} else if (segmento == 'online') {
							dibujarLlamadasTotalesFamiliaSegmentoComparativo(
									fechaInicioOriginal, fechaFinalOriginal,
									fechaInicioComparativo,
									fechaFinalComparativo, 'ATE');
						} else if (segmento == 'offline') {
							dibujarLlamadasTotalesFamiliaSegmentoComparativo(
									fechaInicioOriginal, fechaFinalOriginal,
									fechaInicioComparativo,
									fechaFinalComparativo, 'OFFLINE');
						} else if (segmento == 'pyme') {
							dibujarLlamadasTotalesFamiliaSegmentoComparativo(
									fechaInicioOriginal, fechaFinalOriginal,
									fechaInicioComparativo,
									fechaFinalComparativo, 'PYME');
						} else if (segmento == 'pymeOffline') {
							dibujarLlamadasTotalesFamiliaSegmentoComparativo(
									fechaInicioOriginal, fechaFinalOriginal,
									fechaInicioComparativo,
									fechaFinalComparativo, 'PYME OFFLINE');
						} else if (segmento == 'empresarial') {
							dibujarLlamadasTotalesFamiliaSegmentoComparativo(
									fechaInicioOriginal, fechaFinalOriginal,
									fechaInicioComparativo,
									fechaFinalComparativo, 'BANCA EMPRESARIAL');
						}

						cambiarLabelFechaComparativo(picker.startDate,
								picker.endDate);
					});
		});

$(function() { 
	   $("#progreso1").addClass("progress-bar-progreso1");
	   $("#progreso2").addClass("progress-bar-progreso2");
	   $("#progreso3").addClass("progress-bar-progreso3");
	   $("#progreso4").addClass("progress-bar-progreso4");
	   $("#progreso5").addClass("progress-bar-progreso5");
	   
	   
	   
	});
	
	
