package com.metricas.controller;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.metricas.custommodel.CustomUsuario;
import com.metricas.model.Segmento;
import com.metricas.service.UsuarioService;


@Controller
public class OfflineController {

	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(value = "/offline", method = RequestMethod.GET)
	public String test(Model model){
		CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String soeidSesion = principal.getNombre();
		String activo = "offline";
		Set <Segmento> segmentos = principal.getSegmentos();
		model.addAttribute("soeidSesion", soeidSesion);
		model.addAttribute("segmentos",segmentos);
		model.addAttribute("activo", activo);
		return "segmentos/offline";
	}
	
}
