package com.metricas.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.metricas.custommodel.CustomUsuario;
import com.metricas.model.Segmento;
import com.metricas.service.UsuarioService;


@Controller
@SessionAttributes("usuarioSesion")
public class GeneralController {

	@Autowired
	private UsuarioService usuarioService;
	
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
		/*CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String soeidSesion = principal.getNombre();
		model.addAttribute("soeidSesion", soeidSesion);*/
		
		return "usuario/testGraph";
	}
	
	@RequestMapping(value = "/retorno1", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody List<String> retorno1(Model model){
		List<String> retorno = new ArrayList<String>();
		retorno.add("5");
		retorno.add("10");
		retorno.add("15");
		retorno.add("20");
		retorno.add("25");
		
		return retorno;
	}
	
	@RequestMapping(value = "/retorno2", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody List<String> retorno2(Model model){
		List<String> retorno = new ArrayList<String>();
		retorno.add("2.0");
		retorno.add("2.2");
		retorno.add("3.3");
		retorno.add("4.5");
		retorno.add("6.3");
		
		return retorno;
	}
	
}
