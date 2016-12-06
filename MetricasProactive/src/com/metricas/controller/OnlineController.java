package com.metricas.controller;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.metricas.custommodel.CustomUsuario;
import com.metricas.model.Segmento;
import com.metricas.service.UsuarioService;


@Controller
public class OnlineController {

	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(value = "/online", method = RequestMethod.GET)
	public String test(Model model){
		CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String soeidSesion = principal.getNombre();
		String activo = "online";
		Set <Segmento> segmentos = principal.getSegmentos();
		model.addAttribute("soeidSesion", soeidSesion);
		model.addAttribute("activo", activo);
		model.addAttribute("segmentos",segmentos);
		return "segmentos/online";
	}
	
}
