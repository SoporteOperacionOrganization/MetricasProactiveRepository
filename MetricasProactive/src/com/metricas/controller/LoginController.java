package com.metricas.controller;

import java.security.Principal;
import java.util.Set;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.metricas.custommodel.CustomUsuario;
import com.metricas.model.Segmento;
import com.metricas.model.Usuario;

@Controller
public class LoginController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String root(Model model){
		return "login/login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model){
		return "login/login";
	}
	
	@RequestMapping(value = "/inicio", method = RequestMethod.GET)
	public String inicio(Model model, Principal principal1){
		//CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		//String segmento = principal.getSegmentos().toString();
		//String segmento = principal.getName();
		//model.addAttribute("segmento", segmento);
		return "login/inicio";
	}
	
}
