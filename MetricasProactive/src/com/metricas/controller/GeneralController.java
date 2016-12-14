package com.metricas.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.google.gson.Gson;
import com.metricas.custommodel.CustomUsuario;
import com.metricas.model.Segmento;
import com.metricas.service.SegmentoService;
import com.metricas.service.UsuarioService;

@Controller
@SessionAttributes("usuarioSesion")
public class GeneralController {

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private SegmentoService segmentoService;

	@RequestMapping(value = "/general", method = RequestMethod.GET)
	public String test(Model model) {
		CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String soeidSesion = principal.getNombre();
		String activo = "general";
		Set<Segmento> segmentos = principal.getSegmentos();
		model.addAttribute("soeidSesion", soeidSesion);
		model.addAttribute("usuarioSesion", principal);
		model.addAttribute("segmentos", segmentos);
		model.addAttribute("activo", activo);
		return "login/general";
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String testGraph(Model model) {

		return "usuario/testGraph";
	}

	@RequestMapping(value = "/obtenerLlamadasTotalesSegmento", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String chart(Model model, @RequestParam("fechaInicio") String fechaInicio,
			@RequestParam("fechaFinal") String fechaFinal) {
		Gson gson = new Gson();
		Map<String, Integer> totalesLlamadas = new HashMap<String, Integer>();
		totalesLlamadas = segmentoService.obtenerLlamadasTotalesSegmentos(fechaInicio, fechaFinal);

		String json = gson.toJson(totalesLlamadas);
		//System.out.println("Json totales llamadas " + json);
		return json;
	}

	@RequestMapping(value = "/obtenerLlamadasTotalesSegmentoComparativo", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String obtenerLlamadasTotalesSegmentoComparativo(Model model,
			@RequestParam("fechaInicioOriginal") String fechaInicioOriginal,
			@RequestParam("fechaFinalOriginal") String fechaFinalOriginal,
			@RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal) {

		String json = segmentoService.obtenerLlamadasTotalesSegmentoComparacion(fechaInicioOriginal, fechaFinalOriginal,
				fechaInicio, fechaFinal);
		return json;
	}

	@RequestMapping(value = "/obtenerLlamadasFamilia", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String chartLlamadasFamilia(Model model, @RequestParam("fechaInicio") String fechaInicio,
			@RequestParam("fechaFinal") String fechaFinal, @RequestParam("segmento") String segmento) {
		Gson gson = new Gson();
		Map<String, Integer> llamadasFamilia = new HashMap<String, Integer>();
		llamadasFamilia = segmentoService.obtenerLlamadasFamilia(fechaInicio, fechaFinal, segmento);
		String json = gson.toJson(llamadasFamilia);
		return json;
	}

	@RequestMapping(value = "/servicios", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String servicios(Model model, @RequestParam("fechaInicio") String fechaInicio,
			@RequestParam("fechaFinal") String fechaFinal, @RequestParam("segmento") String segmento) {
		Gson gson = new Gson();
		Map<String, Integer> servicios = new HashMap<String, Integer>();
		servicios = segmentoService.obtenerLLamadasServicio(fechaInicio, fechaFinal, segmento);
		String json = gson.toJson(servicios);
		//System.out.println("mis servicios" + servicios);
		return json;
	}

	@RequestMapping(value = "/concurrencia", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String concurrencia(Model model, @RequestParam("fechaInicio") String fechaInicio,
			@RequestParam("fechaFinal") String fechaFinal) {
		Gson gson = new Gson();
		Map<String, Integer> concurrencia = new HashMap<String, Integer>();
		concurrencia = segmentoService.obtenerLlamadasTotalesSegmentos(fechaInicio, fechaFinal);
		String json = gson.toJson(concurrencia);

		return json;
	}

	@RequestMapping(value = "/obtenerLlamadasTotalesFamiliasSegmento", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String obtenerLlamadasTotalesFamiliasSegmento(Model model,
			@RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal,
			@RequestParam("segmento") String segmento) {
		Gson gson = new Gson();

		Map<String, Integer> totalesLlamadas = new HashMap<String, Integer>();
		totalesLlamadas = segmentoService.obtenerLlamadasTotalesFamiliasSegmento(fechaInicio, fechaFinal, segmento);
		String json = gson.toJson(totalesLlamadas);
		// System.out.println("Json " + json);
		return json;
	}

	@RequestMapping(value = "/clientesFrecuentes", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String clientesFrecuentesController(Model model,
			@RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal,
			@RequestParam("segmento") String segmento) {

		Gson gson = new Gson();
		Map<String, Integer> clientesFrecuentes = new HashMap<String, Integer>();
		clientesFrecuentes = segmentoService.obtenerClientesFrecuentes(fechaInicio, fechaFinal, segmento);

		String json = gson.toJson(clientesFrecuentes);
		return json;
	}

	@RequestMapping(value = "/obtenerLlamadasTotalesFamiliasSegmentoComparativo", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody String obtenerLlamadasTotalesFamiliasSegmentoComparativo(Model model,
			@RequestParam("fechaInicioOriginal") String fechaInicioOriginal,
			@RequestParam("fechaFinalOriginal") String fechaFinalOriginal,
			@RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal,
			@RequestParam("segmento") String segmento) {

		String json = segmentoService.obtenerLlamadasTotalesFamiliasSegmentoComparacion(fechaInicioOriginal,
				fechaFinalOriginal, fechaInicio, fechaFinal, segmento);
		return json;
	}

}
