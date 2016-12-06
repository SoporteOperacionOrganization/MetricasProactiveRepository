/**
 * 
 */

function redibujarGraficas() {
	if (echartBarLine != null && echartBarLine != undefined) {
		echartBarLine.resize();
	}
	if (echartPie != null && echartPie != undefined) {
		echartPie.resize();
	}
}
function recalcularAlto() {
	var alto = $(document).height();
	$(".left_col").css("min-height", alto);
	/*
	 * var anchoLogo = $(".nav_title").width();
	 * $(".nav_menu").css("padding-left", anchoLogo);
	 */
}

$(document).ready(
		function() {
			recalcularAlto();
			$(".dropdown-toggle").dropdown();

			$(window).on('resize', function() {
				redibujarGraficas();
				recalcularAlto();
			});
			$("#menu_toggle").on('click', function() {
				redibujarGraficas();
			});

			$('#calendarioFiltro span').html(
					moment().format('DD/MM/YYYY') + ' - '
							+ moment().format('DD/MM/YYYY'));
			$('#calendarioFiltro').daterangepicker(optionSet1);
			$('#calendarioFiltro').on('show.daterangepicker', function() {
				console.log("show event fired 1");
			});
			$('#calendarioFiltro').on('hide.daterangepicker', function() {
				console.log("hide event fired 1");
			});
			$('#calendarioFiltro').on(
					'apply.daterangepicker',
					function(ev, picker) {
						console.log("apply event fired 1, start/end dates are "
								+ picker.startDate.format('MMMM D, YYYY')
								+ " to "
								+ picker.endDate.format('MMMM D, YYYY'));
						cambiarLabelFechaFiltro(picker.startDate,picker.endDate);
					});
			$('#calendarioFiltro').on('cancel.daterangepicker',
					function(ev, picker) {
						console.log("cancel event fired 1");
					});
			$('#calendarioComparativo span').html(
					moment().format('DD/MM/YYYY') + ' - '
							+ moment().format('DD/MM/YYYY'));
			$('#calendarioComparativo').daterangepicker(optionSet2);
			$('#calendarioComparativo').on('show.daterangepicker', function() {
				console.log("show event fired");
			});
			$('#calendarioComparativo').on('hide.daterangepicker', function() {
				console.log("hide event fired");
			});
			$('#calendarioComparativo').on(
					'apply.daterangepicker',
					function(ev, picker) {
						console.log("apply event fired, start/end dates are "
								+ picker.startDate.format('MMMM D, YYYY')
								+ " to "
								+ picker.endDate.format('MMMM D, YYYY'));
						cambiarLabelFechaComparativo(picker.startDate,
								picker.endDate);
					});
			$('#calendarioComparativo').on('cancel.daterangepicker',
					function(ev, picker) {
						console.log("cancel event fired");
					});
			function cambiarLabelFechaFiltro(inicio, fin) {
				$('#calendarioFiltro span').html(
						inicio.format('DD/MM/YYYY') + ' - '
								+ fin.format('DD/MM/YYYY'));
			}
			function cambiarLabelFechaComparativo(inicio, fin) {
				$('#calendarioComparativo span').html(
						inicio.format('DD/MM/YYYY') + ' - '
								+ fin.format('DD/MM/YYYY'));
			}
		});