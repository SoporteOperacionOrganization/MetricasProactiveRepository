/**
 * 
 */

function redibujarGraficas() {
	if (GeneralLlamadasBarras2 != null && GeneralLlamadasBarras2 != undefined) {
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
	var altoContenido = $("body").height();
	var altoVentana = $(window).height();
	var altoDocumento = $(document).height();

	if (altoContenido <= altoVentana) {
		$(".left_col").css("min-height", altoDocumento);
	} else if (altoContenido <= altoDocumento) {
		$(".left_col").css("min-height", altoContenido);
	} else {
		$(".left_col").css("min-height", altoVentana);
	}

}

function obtenerURL() {
	var url = window.location.href.split("/");
	var pagina = url[url.length - 1];
	return pagina;
}

function cambiarLabelFechaFiltro(inicio, fin) {
	$('#calendarioFiltro span').html(
			inicio.format('DD/MM/YYYY') + ' - ' + fin.format('DD/MM/YYYY'));
}
function cambiarLabelFechaComparativo(inicio, fin) {
	$('#calendarioComparativo span').html(
			inicio.format('DD/MM/YYYY') + ' - ' + fin.format('DD/MM/YYYY'));
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

	hoy = dd + '/' + mm + '/' + yyyy;

	dibujarGraficasPorPagina(hoy, hoy, segmento);
}

function estilosPorcentajes(porcentajeDiferencia) {
	if (porcentajeDiferencia < 0) {
		$("#diferenciaLlamadas span i").removeClass("green");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrows-h");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrow-up");
		$("#diferenciaLlamadas span i").addClass("red");
		$("#diferenciaLlamadas span i i").addClass("fa-arrow-down");
	} else if (porcentajeDiferencia > 0) {
		$("#diferenciaLlamadas span i").removeClass("red");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrows-h");
		$("#diferenciaLlamadas span i i").removeClass("fa-arrow-down");
		$("#diferenciaLlamadas span i").addClass("green");
		$("#diferenciaLlamadas span i i").addClass("fa-arrow-up");
	} else {
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
		setTimeout(function() {
			recalcularAlto()
		}, 2000);
		break;
	case "empresarial":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal,
				'BANCA EMPRESARIAL');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		setTimeout(function() {
			recalcularAlto()
		}, 2000);
		break;
	case "online":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal, 'ATE');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		setTimeout(function() {
			recalcularAlto()
		}, 2000);
		break;
	case "offline":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal,
				'OFFLINE');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		setTimeout(function() {
			recalcularAlto()
		}, 2000);
		break;
	case "pyme":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal, 'PYME');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		setTimeout(function() {
			recalcularAlto()
		}, 2000);
		break;
	case "pymeOffline":
		dibujarLlamadasTotalesFamiliaSegmentos(fechaInicio, fechaFinal,
				'PYME OFFLINE');
		dibujarServicios(fechaInicio, fechaFinal, segmento);
		dibujarClientesFrecuentes(fechaInicio, fechaFinal, segmento);
		dibujarConcurrencia(fechaInicio, fechaFinal);
		setTimeout(function() {
			recalcularAlto()
		}, 2000);
		break;
	default:
		recalcularAlto();
		break;
	}
}

$(document)
		.ready(
				function() {
					graficasIniciales();
					
					$("#popup").modal({
						show : false,
						backdrop : 'static'
					});
					$("#progreso1").addClass("progress-bar-progreso1");
					$("#progreso2").addClass("progress-bar-progreso2");
					$("#progreso3").addClass("progress-bar-progreso3");
					$("#progreso4").addClass("progress-bar-progreso4");
					$("#progreso5").addClass("progress-bar-progreso5");
					
					$(".dropdown-toggle").dropdown();

					$(window).on('resize', function() {
						redibujarGraficas();
						recalcularAlto();
					});
					$("#menu_toggle").on('click', function() {
						var src = $(".site_title img").prop("src");
						var imagen = src.split("/");
						imagen = imagen[imagen.length-1];
						
						if (imagen == "citibanamex_menu.png"){
							src= src.replace("citibanamex_menu.png","isotipo_citibanamex.png");
							
						}else{
							src= src.replace("isotipo_citibanamex.png","citibanamex_menu.png");
						}
						
						$(".site_title img").prop("src", src);
						
						setTimeout(function() {
							redibujarGraficas()
						}, 50);
					});
					cambiarLabelFechaFiltro(moment(), moment());
					$('#calendarioComparativo span').html("");

					$('#calendarioFiltro').daterangepicker(optionSet1);

					$('#calendarioFiltro').on(
							'apply.daterangepicker',
							function(ev, picker) {
								var fechaInicio = picker.startDate
										.format('DD/MM/YYYY');
								var fechaFinal = picker.endDate
										.format('DD/MM/YYYY');
								var segmento = obtenerURL();
								dibujarGraficasPorPagina(fechaInicio,
										fechaFinal, segmento)

								$("#popup").modal("show");
								cambiarLabelFechaFiltro(picker.startDate,
										picker.endDate);
								$('#calendarioComparativo span').html("");

								$("#popup").modal("hide");

							});
					$('#calendarioComparativo').daterangepicker(optionSet2);

					$('#calendarioComparativo')
							.on(
									'apply.daterangepicker',
									function(ev, picker) {

										var fechasFiltro = $(
												'#calendarioFiltro span')
												.text().split("-");
										var fechaInicioOriginal = fechasFiltro[0];
										var fechaFinalOriginal = fechasFiltro[1];
										var fechaInicioComparativo = picker.startDate
												.format('DD/MM/YYYY');
										var fechaFinalComparativo = picker.endDate
												.format('DD/MM/YYYY');
										var segmento = obtenerURL();

										if (segmento == 'general') {
											dibujarLlamadasTotalesGeneralComparativo(
													fechaInicioOriginal,
													fechaFinalOriginal,
													fechaInicioComparativo,
													fechaFinalComparativo);
										} else if (segmento == 'online') {
											dibujarLlamadasTotalesFamiliaSegmentoComparativo(
													fechaInicioOriginal,
													fechaFinalOriginal,
													fechaInicioComparativo,
													fechaFinalComparativo,
													'ATE');
										} else if (segmento == 'offline') {
											dibujarLlamadasTotalesFamiliaSegmentoComparativo(
													fechaInicioOriginal,
													fechaFinalOriginal,
													fechaInicioComparativo,
													fechaFinalComparativo,
													'OFFLINE');
										} else if (segmento == 'pyme') {
											dibujarLlamadasTotalesFamiliaSegmentoComparativo(
													fechaInicioOriginal,
													fechaFinalOriginal,
													fechaInicioComparativo,
													fechaFinalComparativo,
													'PYME');
										} else if (segmento == 'pymeOffline') {
											dibujarLlamadasTotalesFamiliaSegmentoComparativo(
													fechaInicioOriginal,
													fechaFinalOriginal,
													fechaInicioComparativo,
													fechaFinalComparativo,
													'PYME OFFLINE');
										} else if (segmento == 'empresarial') {
											dibujarLlamadasTotalesFamiliaSegmentoComparativo(
													fechaInicioOriginal,
													fechaFinalOriginal,
													fechaInicioComparativo,
													fechaFinalComparativo,
													'BANCA EMPRESARIAL');
										}

										cambiarLabelFechaComparativo(
												picker.startDate,
												picker.endDate);
									});
					
				});
