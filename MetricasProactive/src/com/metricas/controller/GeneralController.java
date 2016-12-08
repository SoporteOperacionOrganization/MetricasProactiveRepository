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
	public String test(Model model){
		CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String soeidSesion = principal.getNombre();
		String activo = "general";
		Set <Segmento> segmentos = principal.getSegmentos();
		model.addAttribute("soeidSesion", soeidSesion);
		model.addAttribute("usuarioSesion",principal);
		model.addAttribute("segmentos",segmentos);
		model.addAttribute("activo", activo);
		return "login/general";
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String testGraph(Model model){
	
		return "usuario/testGraph";
	}
	
	@RequestMapping(value = "/obtenerLlamadasTotalesSegmento", method = RequestMethod.GET, produces="application/json")
    public @ResponseBody String chart(Model model, @RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal){
          Gson gson = new Gson();
          Map<String,Integer> totalesLlamadas = new HashMap<String,Integer>();
          totalesLlamadas = segmentoService.obtenerLlamadasTotalesSegmentos(fechaInicio, fechaFinal);
          
          String json = gson.toJson(totalesLlamadas); 
          //System.out.println("Json " + json);
          return json;
    }
	
	@RequestMapping(value = "/obtenerLlamadasFamilia", method = RequestMethod.GET, produces="application/json")
    public @ResponseBody String chartLlamadasFamilia(Model model, @RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal){
          Gson gson = new Gson();
          Map<String,Integer> llamadasFamilia = new HashMap<String,Integer>();
          //Falta el parametro de segmento
          //llamadasFamilia = segmentoService.obtenerLlamadasFamilia(fechaInicio, fechaFinal);
          
          System.out.println("GSON "+gson);
          String json = gson.toJson(llamadasFamilia); 
          System.out.println("Json " + json);
          return json;
    }
	
	@RequestMapping(value = "/serviciosG", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody String serviciosG(Model model, @RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal){
		Gson gson = new Gson();
		Map<String,Integer> serviciosG = new HashMap<String,Integer>();
		serviciosG = segmentoService.obtenerLLamadasServicio(fechaInicio, fechaFinal,"general");// llmaar consulota servicios
		String json = gson.toJson(serviciosG); 
		
		return json;
	}
	
	@RequestMapping(value = "/serviciosS", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody String serviciosS(Model model, @RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal){
		Gson gson = new Gson();
		Map<String,Integer> serviciosS = new HashMap<String,Integer>();
		serviciosS = segmentoService.obtenerLLamadasServicio(fechaInicio, fechaFinal,"pyme");// llmaar consulota servicios
		String json = gson.toJson(serviciosS); 
		
		return json;
	}
	
	
	@RequestMapping(value = "/concurrencia", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody String concurrencia(Model model, @RequestParam("fechaInicio") String fechaInicio, @RequestParam("fechaFinal") String fechaFinal){
		Gson gson = new Gson();
		Map<String,Integer> serviciosG = new HashMap<String,Integer>();
		serviciosG = segmentoService.obtenerLlamadasTotalesSegmentos(fechaInicio, fechaFinal);// llmaar consulota concurrencia
		String json = gson.toJson(serviciosG); 
		
		return json;
	}
	
}
