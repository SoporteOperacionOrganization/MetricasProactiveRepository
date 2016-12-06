package com.metricas.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.metricas.custommodel.CustomUsuario;
import com.metricas.service.UsuarioService;


@Controller
public class GeneralController {

	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(value = "/general", method = RequestMethod.GET)
	public String test(Model model){
		CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String soeidSesion = principal.getNombre();
		model.addAttribute("soeidSesion", soeidSesion);
		
		int valores[] ={1,2,3,4,5};
		
		//usuarios = usuarioService.obtenerUsuarios();
		//model.addAttribute("usuarios", usuarios);
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
